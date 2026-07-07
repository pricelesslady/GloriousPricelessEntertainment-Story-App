import { useNavigate } from "react-router-dom";

const StoryCard = ({ story }) => {
  const navigate = useNavigate();

  const handleReadStory = () => {
    navigate(`/story/${story.slug}`);
  };

  return (
    <article
      onClick={handleReadStory}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* COVER */}
      <div
        className={`relative flex h-56 w-full items-center justify-center overflow-hidden bg-gradient-to-br ${story.cover}`}
      >
        {/* Soft overlay for premium feel */}
        <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/20"></div>

        {/* Title on cover */}
        <div className="relative text-center text-white transition-transform duration-300 group-hover:scale-105">
          <p className="text-2xl font-bold tracking-widest">{story.title}</p>

          <p className="text-xs uppercase tracking-[0.3em] opacity-80">
            {story.genre}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-extrabold text-slate-900 transition-colors duration-300 group-hover:text-sky-600">
          {story.title}
        </h3>

        {/* Genre */}
        <p className="mt-1 text-sm text-slate-500">{story.genre}</p>

        {/* Chapters */}
        <p className="mt-4 text-sm font-medium text-slate-600">
          {story.chapters} Chapters
        </p>

        {/* Reader Count */}
        <div className="mt-3 h-6">
          {story.readers > 0 && (
            <p className="text-sm font-semibold text-sky-600">
              👥 {story.readers} Readers
            </p>
          )}
        </div>

        {/* Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleReadStory();
          }}
          className="mt-6 w-full rounded-xl bg-sky-600 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-sky-700 hover:shadow-lg active:scale-95"
        >
          Read Story
        </button>
      </div>
    </article>
  );
};

export default StoryCard;
