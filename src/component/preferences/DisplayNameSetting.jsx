import { useState } from "react";

import { useReadingPreferences } from "../../content/ReadingPreferencesContext";
import DisplayNameModal from "../story/DisplayNameModal";

const DisplayNameSetting = () => {
  const { displayName, currentTheme } = useReadingPreferences();

  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className="rounded-2xl border p-6"
        style={{
          borderColor: currentTheme.border,
          backgroundColor: currentTheme.cardBackground,
        }}
      >
        <h3
          className="text-xl font-semibold"
          style={{
            color: currentTheme.heading,
          }}
        >
          Display Name
        </h3>

        <p
          className="mt-2"
          style={{
            color: currentTheme.text,
          }}
        >
          This name is shown whenever you post comments.
        </p>

        <div className="mt-6">
          <span
            className="text-sm"
            style={{
              color: currentTheme.mutedText,
            }}
          >
            Current Name
          </span>

          <p
            className="mt-1 text-lg font-semibold"
            style={{
              color: currentTheme.heading,
            }}
          >
            {displayName || "Not Set"}
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="mt-6 rounded-xl px-5 py-3 font-semibold text-white"
          style={{
            backgroundColor: currentTheme.primary,
          }}
        >
          Change Display Name
        </button>
      </section>

      <DisplayNameModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onContinue={() => setOpen(false)}
      />
    </>
  );
};

export default DisplayNameSetting;