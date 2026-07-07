import StoryCardSkeleton from "./StoryCardSkeleton";

const StoriesGridSkeleton = () => {
  return (
    <div className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <StoryCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default StoriesGridSkeleton;