import { useEffect, useState } from "react";
import StoryCard from "./StoryCard";
import StoriesGridSkeleton from "./ui/StoriesGridSkeleton";
const StoryGrid = ({
  filter,
  search,
}) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/stories`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch stories.");
        }

        const data = await response.json();

        setStories(data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  let filteredStories = [...stories];

  // ALL
  if (filter === "all") {
    filteredStories = [...stories];
  }

  // LATEST
  if (filter === "latest") {
    console.log("it clicked oh")
    filteredStories.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }

  // MOST READ
  if (filter === "popular") {
    filteredStories.sort(
      (a, b) => (b.readers || 0) - (a.readers || 0)
    );
  }

  // SEARCH
if (search.trim()) {
  const query = search.toLowerCase();

  filteredStories = filteredStories.filter((story) => {
    return (
      story.title?.toLowerCase().includes(query) ||
      story.genre?.toLowerCase().includes(query)
    );
  });
}
  if (loading) {
    return <StoriesGridSkeleton />;
  }

  return (
    <div className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {filteredStories.map((story) => (
        <StoryCard
          key={story.id}
          story={story}
        />
      ))}
    </div>
  );
};

export default StoryGrid;