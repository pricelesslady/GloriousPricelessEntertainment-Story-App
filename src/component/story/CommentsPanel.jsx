import { X } from "lucide-react";
import { useReadingPreferences } from "../../content/ReadingPreferencesContext";

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { useEffect,useState } from "react";

const CommentsPanel = ({ isOpen, onClose, storyId, chapterId }) => {
  const { currentTheme } = useReadingPreferences();
  const [comments, setComments] = useState([]);
useEffect(() => {
  if (!chapterId) return;

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/chapters/${chapterId}/comments`
      );

      if (!response.ok) {
        throw new Error("Unable to load comments.");
      }

      const data = await response.json();

      setComments(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchComments();
}, [chapterId]);


  if (!isOpen) return null;
const handleAddComment = async (newComment) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/chapters/${chapterId}/comments`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(newComment),
      }
    );

    if (!response.ok) {
      throw new Error("Unable to post comment.");
    }

    const data = await response.json();

    setComments((previous) => [
      data.comment,
      ...previous,
    ]);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <>
      {/* Background Overlay */}

      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
      />

      {/* Panel */}

      <aside
        className="
          fixed
          z-50
          flex
          flex-col

          bottom-0
          left-0
          right-0

          h-[85vh]

          rounded-t-3xl

          lg:top-0
          lg:right-0
          lg:left-auto
          lg:h-screen
          lg:w-[430px]
          lg:rounded-none
        "
        style={{
          backgroundColor: currentTheme.cardBackground,
        }}
      >
        {/* Header */}

        <div
          className="flex items-center justify-between border-b px-6 py-5"
          style={{
            borderColor: currentTheme.border,
          }}
        >
          <h2
            className="text-xl font-bold"
            style={{
              color: currentTheme.heading,
            }}
          >
            Comments ({comments.length})
          </h2>

          <button onClick={onClose} className="transition hover:rotate-90">
            <X
              size={22}
              style={{
                color: currentTheme.heading,
              }}
            />
          </button>
        </div>

        {/* Comments */}

        {/* Scrollable Body */}

        <div className="flex-1 overflow-y-auto">
          {/* Comments */}

          <div className="px-6 py-4">
            <CommentList comments={comments} />
          </div>

          {/* Form */}

          <div
            className="border-t px-6 py-6"
            style={{
              borderColor: currentTheme.border,
            }}
          >
            <CommentForm
              storyId={storyId}
              chapterId={chapterId}
              onSubmit={handleAddComment}
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default CommentsPanel;
