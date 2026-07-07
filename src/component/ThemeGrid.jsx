import ThemeCard from "./ThemeCard";
import themes from "../data/themes";
import { useReadingPreferences } from "../content/ReadingPreferencesContext";

const ThemeGrid = () => {
  const { draftTheme, setDraftTheme } = useReadingPreferences();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {themes.map((item) => (
        <ThemeCard
          key={item.id}
          draftTheme={item}
          isSelected={draftTheme === item.name}
          onSelect={() => setDraftTheme(item.name)}
        />
      ))}
    </div>
  );
};

export default ThemeGrid;