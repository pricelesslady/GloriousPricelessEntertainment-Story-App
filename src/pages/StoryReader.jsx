import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import StoryHeader from "../component/story/StoryHeader";
import ChapterNavigation from "../component/story/ChapterNavigation";
import StoryContent from "../component/story/StoryContent";
import BottomChapterNavigation from "../component/story/BottomChapterNavigation";
import CommentsEntry from "../component/story/CommentsEntry";
import DisplayNameModal from "../component/story/DisplayNameModal";
import CommentsPanel from "../component/story/CommentsPanel";
import { useReadingPreferences } from "../content/ReadingPreferencesContext";
import LoadingScreen from "../component/common/LoadingScreen";
import ErrorState from "../component/common/ErrorState";
import { saveRecentlyRead } from "../utils/recentReading";
const StoryReader = () => {
  const { displayName } = useReadingPreferences();
  const { slug } = useParams();
  const [searchParams] = useSearchParams();

  const initialChapter =
    Number(searchParams.get("chapter")) || 1;
  const [story, setStory] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentChapter, setCurrentChapter] =
  useState(initialChapter);
  const [showDisplayNameModal, setShowDisplayNameModal] = useState(false);
  const [showCommentsPanel, setShowCommentsPanel] = useState(false);

  // Add this helper function above "const StoryReader = () => {"
  const getReaderId = () => {
    let id = localStorage.getItem('gpeReaderId');
    if (!id) {
      id = 'reader_' + Math.random().toString(36).substring(2, 11);
      localStorage.setItem('gpeReaderId', id);
    }
    return id;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Fetch Story Details
        const storyResponse = await fetch(`${import.meta.env.VITE_API_URL}/stories/${slug}`);
        if (!storyResponse.ok) {
          throw new Error("Story not found.");
        }
        const storyData = await storyResponse.json();
        setStory(storyData);

        // 2. Record Reader View (wrapped in try/catch so failure won't block rendering)
        try {
          await fetch(`${import.meta.env.VITE_API_URL}/stories/${storyData.slug}/views`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ readerId: getReaderId() }),
          });
        } catch (error) {
          console.error("Unable to record story view:", error);
        }

        // 3. Fetch Chapters
        const chapterResponse = await fetch(`${import.meta.env.VITE_API_URL}/chapters/story/${slug}`);
        if (!chapterResponse.ok) {
          throw new Error("Unable to load chapters.");
        }
        const chapterData = await chapterResponse.json();
        setChapters(chapterData);

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    if (!story || !currentChapter) return;

    saveRecentlyRead({
      storySlug: slug,
      storyTitle: story.title,
      chapterNumber: currentChapter,
    });
  }, [story, currentChapter, slug]);
  const handleOpenComments = () => {
    if (displayName) {
      setShowCommentsPanel(true);
    } else {
      setShowDisplayNameModal(true);
    }
  };

  const handleDisplayNameContinue = () => {
    setShowDisplayNameModal(false);
    setShowCommentsPanel(true);
  };

  const goToChapter = (chapterNumber) => {
    if (chapterNumber < 1) return;
    if (chapterNumber > chapters.length) return;
    setCurrentChapter(chapterNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <LoadingScreen message="Loading story..." />
    );
  }

  if (!story) {
    return (
      <ErrorState
        title="Story Not Found"
        description="The story you're looking for does not exist or has been removed."
      />
    );
  }

  const chapter = chapters.find((chap) => chap.chapterNumber === currentChapter);

  if (!chapter) {
    return (
      <ErrorState
        title="Chapter Not Available"
        description="This chapter has not been published yet."
      />
    );
  }

  return (
    <main className="min-h-screen px-5 py-10">
      <StoryHeader story={story} currentChapter={currentChapter} />

      <ChapterNavigation
        currentChapter={currentChapter}
        totalChapters={chapters.length}
        onChapterChange={goToChapter}
      />

      <StoryContent chapter={chapter} />

      <BottomChapterNavigation
        currentChapter={currentChapter}
        totalChapters={chapters.length}
        onChapterChange={goToChapter}
        onGoHome={() => window.history.back()}
      />

      <CommentsEntry onOpen={handleOpenComments} />

      <DisplayNameModal
        isOpen={showDisplayNameModal}
        onClose={() => setShowDisplayNameModal(false)}
        onContinue={handleDisplayNameContinue}
      />

      <CommentsPanel
        isOpen={showCommentsPanel}
        onClose={() => setShowCommentsPanel(false)}
        storyId={story.id}
        chapterId={chapter._id}
      />
    </main>
  );
};

export default StoryReader;
