import { usePWAInstall } from "../../context/PWAContext";
import { useReadingPreferences } from "../../content/ReadingPreferencesContext";
import { useState } from "react";
import IOSInstallModal from "./IOSInstallModal";
const InstallButton = () => {
  const [showIOSModal, setShowIOSModal] = useState(false);
  const {
  install,
  isInstallable,
  isInstalled,
  isIOS,
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

 if (!isInstallable && !isIOS) return null;
return (
  <>
    <button
      onClick={() => {
        if (isIOS) {
          setShowIOSModal(true);
        } else {
          install();
        }
      }}
      className="rounded-full border-2 px-10 py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        borderColor: currentTheme.primary,
        color: currentTheme.primary,
        backgroundColor: currentTheme.cardBackground,
      }}
    >
      📲 Install App
    </button>

    <IOSInstallModal
      open={showIOSModal}
      onClose={() => setShowIOSModal(false)}
    />
  </>
);
   
};

export default InstallButton;