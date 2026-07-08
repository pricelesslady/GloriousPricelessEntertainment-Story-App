import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReadingPreferences } from "../../content/ReadingPreferencesContext";

const BottomChapterNavigation = ({
  currentChapter,
  totalChapters,
  onChapterChange,
  onGoHome,
}) => {
  const { currentTheme } = useReadingPreferences();

  const isLastChapter = currentChapter === totalChapters;

  return (
    <section className="mx-auto mt-16 w-full max-w-5xl px-6 md:px-8">
      {/* Top Divider */}
      <div
        className="h-px w-full"
        style={{
          backgroundColor: currentTheme.border,
        }}
      />

      {/* End of Chapter */}
      <div className="py-8 text-center">
        <p
          className="text-lg font-semibold"
          style={{
            color: currentTheme.heading,
          }}
        >
          End of Chapter {currentChapter}
        </p>
      </div>

      {/* Bottom Divider */}
      <div
        className="h-px w-full"
        style={{
          backgroundColor: currentTheme.border,
        }}
      />

      {isLastChapter ? (
        <div className="mt-8 space-y-6 pb-2 text-center">
          <h2
            className="text-2xl font-bold"
            style={{
              color: currentTheme.heading,
            }}
          >
            🎉 You reached the end!
          </h2>

          <p
            style={{
              color: currentTheme.mutedText,
            }}
          >
            Thank you for reading.
            <br />
            We hope you enjoyed this story.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={onGoHome}
              className="rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: currentTheme.primary,
                color: "#fff",
              }}
            >
              📚 Explore More Stories
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://whatsapp.com/channel/0029VakUqszLI8YdMgvKqj0V",
                  "_blank"
                )
              }
              className="rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: currentTheme.sectionBackground,
                color: currentTheme.heading,
              }}
            >
              💬 Join WhatsApp Channel
            </button>
          </div>

          <button
            onClick={() => onChapterChange(currentChapter - 1)}
            className="mx-auto flex items-center gap-2 rounded-xl px-5 py-3 transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: currentTheme.sectionBackground,
              color: currentTheme.heading,
            }}
          >
            <ChevronLeft size={18} />
            Previous Chapter
          </button>
        </div>
      ) : (
       <div className="mt-8 flex items-center justify-between gap-2 pb-2 sm:gap-4">
          <button
            onClick={() => onChapterChange(currentChapter - 1)}
            className="flex w-1/2 items-center justify-center gap-1 rounded-xl px-2 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 sm:px-4 sm:text-base"
            style={{
              backgroundColor: currentTheme.sectionBackground,
              color: currentTheme.heading,
            }}
            disabled={currentChapter === 1}
          >
            <ChevronLeft size={16} className="shrink-0 sm:size-[18px]" />
            <span className="text-center">Previous Chapter</span>
          </button>

          <button
            onClick={() => onChapterChange(currentChapter + 1)}
            className="flex w-1/2 items-center justify-center gap-1 rounded-xl px-2 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 sm:px-4 sm:text-base"
            style={{
              backgroundColor: currentTheme.primary,
              color: "#ffffff",
            }}
          >
            <span className="text-center">Next Chapter</span>
            <ChevronRight size={16} className="shrink-0 sm:size-[18px]" />
          </button>
        </div>
      )}
    </section>
  );
};

export default BottomChapterNavigation;