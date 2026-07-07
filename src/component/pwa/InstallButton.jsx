import { usePWAInstall } from "../../context/PWAContext"; 
import { useReadingPreferences } from "../../content/ReadingPreferencesContext";

const InstallButton = () => {
  const {
    install,
    isInstallable,
    isInstalled,
  } = usePWAInstall();

  const { currentTheme } = useReadingPreferences();

  if (isInstalled) {
    return (
      <button
        disabled
        className="rounded-full px-10 py-4 text-lg font-semibold text-white shadow-lg"
        style={{
          backgroundColor: "#16A34A",
        }}
      >
        ✓ Installed
      </button>
    );
  }

  if (!isInstallable) return null;

  return (
    <button
      onClick={install}
      className="rounded-full border-2 px-10 py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        borderColor: currentTheme.primary,
        color: currentTheme.primary,
        backgroundColor: currentTheme.cardBackground,
      }}
    >
      📲 Install App
    </button>
  );
};

export default InstallButton;