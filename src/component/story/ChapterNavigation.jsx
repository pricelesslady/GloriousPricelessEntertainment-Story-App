import { useEffect, useRef, useState } from "react";
import { useReadingPreferences } from "../../content/ReadingPreferencesContext";

const ChapterNavigation = ({
  currentChapter,
  totalChapters,
  onChapterChange,
}) => {
  const { currentTheme } = useReadingPreferences();

  const [chapterInput, setChapterInput] = useState(currentChapter);

  const inputRef = useRef(null);

  // Keep the input synchronized with the current chapter
  useEffect(() => {
    setChapterInput(currentChapter);
  }, [currentChapter]);

  const handleGo = () => {
    if (
      chapterInput < 1 ||
      chapterInput > totalChapters ||
      Number.isNaN(chapterInput)
    ) {
      return;
    }

    onChapterChange(chapterInput);

    // Close mobile keyboard after navigating
    inputRef.current?.blur();
  };

  return (
    <section
      className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-4 rounded-2xl border p-5"
      style={{
        backgroundColor: currentTheme.cardBackground,
        borderColor: currentTheme.border,
      }}
    >
      {/* Chapter Selector */}

      <div className="flex items-center gap-3">
        <label
          className="text-sm font-semibold"
          style={{
            color: currentTheme.text,
          }}
        >
          Chapter
        </label>

        <input
          ref={inputRef}
          type="number"
          min="1"
          max={totalChapters}
          value={chapterInput}
          onChange={(e) =>
            setChapterInput(Number(e.target.value))
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleGo();
            }
          }}
          className="w-20 rounded-xl border px-3 py-2 text-center font-semibold outline-none"
          style={{
            backgroundColor: currentTheme.sectionBackground,
            borderColor: currentTheme.border,
            color: currentTheme.heading,
          }}
        />

        <button
          onClick={handleGo}
          className="rounded-xl px-4 py-2 font-semibold text-white transition-all duration-300 hover:opacity-90"
          style={{
            backgroundColor: currentTheme.primary,
          }}
        >
          Go
        </button>
      </div>
    </section>
  );
};

export default ChapterNavigation;