import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useReadingPreferences } from "../../content/ReadingPreferencesContext";

const DisplayNameModal = ({
  isOpen,
  onClose,
  onContinue,
}) => {
  const {
    currentTheme,
    updateDisplayName,
  } = useReadingPreferences();

  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleContinue = () => {
    const name = displayName.trim();

    if (!name) {
      setError("Please enter a display name.");
      return;
    }

    if (name.length < 3) {
      setError("Display name must be at least 3 characters.");
      return;
    }

    if (name.length > 20) {
      setError("Display name cannot exceed 20 characters.");
      return;
    }

    updateDisplayName(name);

    onContinue(name);

    setDisplayName("");
    setError("");
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-3xl p-8 shadow-2xl"
        style={{
          backgroundColor: currentTheme.cardBackground,
        }}
      >
        {/* Close */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="transition hover:rotate-90"
          >
            <X
              size={22}
              style={{
                color: currentTheme.text,
              }}
            />
          </button>
        </div>

        {/* Title */}

        <h2
          className="mt-2 text-center text-2xl font-bold"
          style={{
            color: currentTheme.heading,
          }}
        >
          Join the GPE Community
        </h2>

        <p
          className="mt-4 text-center leading-7"
          style={{
            color: currentTheme.text,
          }}
        >
          Choose a display name to join the discussion.
          <br />
          You can change it later in Settings.
        </p>

        {/* Input */}

        <input
          type="text"
          placeholder="Display Name"
          value={displayName}
          onChange={(e) => {
            setDisplayName(e.target.value);
            setError("");
          }}
          className="mt-8 w-full rounded-xl border px-4 py-3 outline-none"
          style={{
            borderColor: currentTheme.border,
            backgroundColor: currentTheme.sectionBackground,
            color: currentTheme.heading,
          }}
        />

        {error && (
          <p className="mt-3 text-sm text-red-500">
            {error}
          </p>
        )}

        {/* Buttons */}

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl px-5 py-3 font-semibold transition"
            style={{
              backgroundColor: currentTheme.sectionBackground,
              color: currentTheme.heading,
            }}
          >
            Cancel
          </button>

          <button
            onClick={handleContinue}
            className="rounded-xl px-6 py-3 font-semibold text-white transition hover:opacity-90"
            style={{
              backgroundColor: currentTheme.primary,
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayNameModal;