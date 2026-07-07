import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useReadingPreferences } from "../../content/ReadingPreferencesContext";

const StoryHeader = ({
  story,
  currentChapter,
}) => {
  const navigate = useNavigate();

  const { currentTheme } =
    useReadingPreferences();

  return (
    <header
      className="overflow-hidden"
      style={{
        backgroundColor:
          currentTheme.cardBackground,
      }}
    >
      {/* Story Banner */}
      <div
        className={`relative flex h-40 items-start justify-start bg-gradient-to-br ${story.cover}`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="relative m-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow transition hover:bg-white"
        >
          <ArrowLeft size={18} />

          Back
        </button>
      </div>

      {/* Story Information */}
      <div className="px-6 py-8 text-center sm:px-10">
        <h1
          className="text-3xl font-extrabold sm:text-4xl"
          style={{
            color: currentTheme.heading,
          }}
        >
          {story.title}
        </h1>

        <p
          className="mt-2"
          style={{
            color: currentTheme.mutedText,
          }}
        >
          &copy; Glorious Priceless Entertainment
        </p>

        <p
          className="mt-6 text-lg font-semibold"
          style={{
            color: currentTheme.primary,
          }}
        >
          Chapter {currentChapter}
        </p>
      </div>
    </header>
  );
};

export default StoryHeader;