import { useReadingPreferences } from "../content/ReadingPreferencesContext";

const AppTheme = ({ children }) => {
  const {
    currentTheme,
    savedFontFamily,
    savedFontSize,
  } = useReadingPreferences();

  return (
    <div
      className="min-h-screen transition-all duration-300"
      style={{
        backgroundColor: currentTheme.pageBackground,
        color: currentTheme.text,
        fontFamily: savedFontFamily,
        fontSize: `${savedFontSize}px`,
      }}
    >
      {children}
    </div>
  );
};

export default AppTheme;