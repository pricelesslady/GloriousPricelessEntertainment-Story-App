import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRecentlyRead } from "../utils/recentReading";
import { useReadingPreferences } from "../content/ReadingPreferencesContext";

const ContinueReading = () => {
  const [reading, setReading] = useState(null);

  const navigate = useNavigate();

  const { currentTheme } = useReadingPreferences();

  useEffect(() => {
    setReading(getRecentlyRead());
  }, []);

  if (!reading) return null;

  return (
    <section
      className="mx-auto mt-16 max-w-5xl rounded-3xl border p-8 shadow-sm transition-all duration-300"
      style={{
        backgroundColor: currentTheme.sectionBackground,
        borderColor: currentTheme.border,
      }}
    >
      <p
        className="text-sm font-semibold uppercase tracking-wider"
        style={{
          color: currentTheme.accent,
        }}
      >
        Continue Reading
      </p>

      <h3
        className="mt-3 text-2xl font-bold"
        style={{
          color: currentTheme.heading,
        }}
      >
        {reading.storyTitle}
      </h3>

      <p
        className="mt-2"
        style={{
          color: currentTheme.mutedText,
        }}
      >
        Chapter {reading.chapterNumber}
      </p>

      <button
        onClick={() =>
         navigate(`/story/${reading.storySlug}?chapter=${reading.chapterNumber}`)
    
        }
        className="mt-6 rounded-full px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
        style={{
          backgroundColor: currentTheme.primary,
        }}
      >
        Continue →
      </button>
    </section>
  );
};

export default ContinueReading;