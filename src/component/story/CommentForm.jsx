import { useState } from "react";
import { Send } from "lucide-react";
import { useReadingPreferences } from "../../content/ReadingPreferencesContext";

const CommentForm = ({
  storyId,
  chapterId,
  onSubmit,
}) => {
  const { currentTheme, displayName } = useReadingPreferences();

  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const text = comment.trim();

    if (!text) {
      setError("Please write a comment.");
      return;
    }

    if (text.length < 5) {
      setError(
        "Comment must contain at least 5 characters."
      );
      return;
    }
    

   const newComment = {
  displayName: displayName,
  message: text,
};

    onSubmit(newComment);

    setComment("");
    setError("");
  };

  return (
    <section className="mt-10">
      {/* Divider */}

      <div
        className="mb-8 h-px"
        style={{
          backgroundColor: currentTheme.border,
        }}
      />

      {/* Community Message */}

      <div className="mb-8">
        <h3
          className="text-lg font-semibold"
          style={{
            color: currentTheme.heading,
          }}
        >
          Share Your Thoughts
        </h3>

        <p
          className="mt-2 leading-7"
          style={{
            color: currentTheme.text,
          }}
        >
          Be respectful and keep the discussion focused
          on this chapter.
        </p>
      </div>

      {/* Textarea */}

      <textarea
        rows={5}
        placeholder="Write your thoughts..."
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
          setError("");
        }}
        className="w-full resize-none rounded-2xl border p-4 outline-none transition"
        style={{
          backgroundColor: currentTheme.sectionBackground,
          borderColor: currentTheme.border,
          color: currentTheme.heading,
        }}
      />

      {/* Error */}

      {error && (
        <p className="mt-3 text-sm text-red-500">
          {error}
        </p>
      )}

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between">
        <span
          className="text-sm"
          style={{
            color: currentTheme.mutedText,
          }}
        >
          Posting as{" "}
          <strong>{displayName}</strong>
        </span>

        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition hover:opacity-90"
          style={{
            backgroundColor: currentTheme.primary,
          }}
        >
          <Send size={18} />

          Send
        </button>
      </div>
    </section>
  );
};

export default CommentForm;