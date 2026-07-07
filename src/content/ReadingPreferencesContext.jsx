import { createContext, useContext, useState } from "react";
import { themeStyles } from "../data/themes";

const ReadingPreferencesContext = createContext();

// ==========================
// Default Preferences
// ==========================
const defaultPreferences = {
  theme: "Classic",
  fontFamily: "Poppins",
  fontSize: 18,
};

// ==========================
// Load Saved Preferences
// ==========================
const getSavedPreferences = () => {
  const saved = localStorage.getItem("readingPreferences");

  if (saved) {
    return JSON.parse(saved);
  }

  return defaultPreferences;
};

const savedPreferences = getSavedPreferences();

export const ReadingPreferencesProvider = ({ children }) => {
  // ==========================
  // Saved Preferences
  // ==========================
  const [savedTheme, setSavedTheme] = useState(
    savedPreferences.theme
  );

  const [savedFontFamily, setSavedFontFamily] = useState(
    savedPreferences.fontFamily
  );

  const [savedFontSize, setSavedFontSize] = useState(
    savedPreferences.fontSize
  );

  // ==========================
  // Draft Preferences
  // ==========================
  const [draftTheme, setDraftTheme] = useState(
    savedPreferences.theme
  );

  const [draftFontFamily, setDraftFontFamily] = useState(
    savedPreferences.fontFamily
  );

  const [draftFontSize, setDraftFontSize] = useState(
    savedPreferences.fontSize
  );

  // ==========================
  // Display Name
  // ==========================
  const [displayName, setDisplayName] = useState(
    localStorage.getItem("gpeDisplayName") || ""
  );

  // ==========================
  // Current Theme
  // ==========================
  const currentTheme = themeStyles[savedTheme];

  // ==========================
  // Save Reading Preferences
  // ==========================
  const savePreferences = () => {
    setSavedTheme(draftTheme);
    setSavedFontFamily(draftFontFamily);
    setSavedFontSize(draftFontSize);

    localStorage.setItem(
      "readingPreferences",
      JSON.stringify({
        theme: draftTheme,
        fontFamily: draftFontFamily,
        fontSize: draftFontSize,
      })
    );
  };

  // ==========================
  // Restore Defaults
  // ==========================
  const restoreDefaults = () => {
    setDraftTheme(defaultPreferences.theme);
    setDraftFontFamily(defaultPreferences.fontFamily);
    setDraftFontSize(defaultPreferences.fontSize);
  };

  // ==========================
  // Update Display Name
  // ==========================
  const updateDisplayName = (name) => {
    setDisplayName(name);

    localStorage.setItem("gpeDisplayName", name);
  };

  return (
    <ReadingPreferencesContext.Provider
      value={{
        // Saved Preferences
        savedTheme,
        savedFontFamily,
        savedFontSize,

        // Draft Preferences
        draftTheme,
        setDraftTheme,

        draftFontFamily,
        setDraftFontFamily,

        draftFontSize,
        setDraftFontSize,

        // Theme
        currentTheme,

        // Display Name
        displayName,
        updateDisplayName,

        // Actions
        savePreferences,
        restoreDefaults,
      }}
    >
      {children}
    </ReadingPreferencesContext.Provider>
  );
};

export const useReadingPreferences = () => {
  return useContext(ReadingPreferencesContext);
};




