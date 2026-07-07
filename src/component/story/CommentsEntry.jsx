import { MessageCircle } from "lucide-react";
import { useReadingPreferences } from "../../content/ReadingPreferencesContext";

const CommentsEntry = ({ onOpen }) => {
  const { currentTheme } = useReadingPreferences();

  return (
    <section className="mx-auto mt-12 w-full max-w-5xl px-6 md:px-8">
      {/* Top Divider */}
      <div
        className="h-px w-full"
        style={{
          backgroundColor: currentTheme.border,
        }}
      />

      <div className="py-10 text-center">
        <MessageCircle
          size={34}
          className="mx-auto mb-4"
          style={{
            color: currentTheme.primary,
          }}
        />

        <h2
          className="text-2xl font-bold"
          style={{
            color: currentTheme.heading,
          }}
        >
          Join the Conversation
        </h2>

        <p
          className="mt-3 text-base"
          style={{
            color: currentTheme.text,
          }}
        >
          Share your thoughts about this chapter with other readers.
        </p>

        <button
          onClick={onOpen}
          className="mt-8 rounded-xl px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: currentTheme.primary,
          }}
        >
          Open Comments
        </button>
      </div>

      {/* Bottom Divider */}
      <div
        className="h-px w-full"
        style={{
          backgroundColor: currentTheme.border,
        }}
      />
    </section>
  );
};

export default CommentsEntry;