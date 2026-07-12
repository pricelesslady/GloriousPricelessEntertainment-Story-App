import { createContext, useContext, useEffect, useState } from "react";

const PWAContext = createContext();

export const PWAProvider = ({ children }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const standalone =
    window.navigator.standalone === true ||
    window.matchMedia("(display-mode: standalone)").matches;

  setIsStandalone(standalone);

  if (standalone) {
    setIsInstalled(true);
  }
  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setIsInstallable(true);

      const ios =
        /iphone|ipad|ipod/i.test(window.navigator.userAgent);

      setIsIOS(ios);

      const standalone =
        window.navigator.standalone ||
        window.matchMedia("(display-mode: standalone)").matches;

      setIsStandalone(standalone);

      if (standalone) {
        setIsInstalled(true);
      }
      if (window.navigator.standalone === true) {
        setIsInstalled(true);
      }
    };

    const handleInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      setIsInstallable(false);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleInstalled);

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  const install = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
  };

  return (
    <PWAContext.Provider
      value={{
        install,
        isInstallable,
        isInstalled,
        isIOS,
        isStandalone,
      }}
    >
      {children}
    </PWAContext.Provider>
  );
};

export const usePWAInstall = () => useContext(PWAContext);
