import { useReadingPreferences } from "../content/ReadingPreferencesContext";

const Footer = () => {
  const { currentTheme } = useReadingPreferences();

  return (
    <footer
      className="mt-24 border-t py-12 transition-all duration-300"
      style={{
        backgroundColor: currentTheme.sectionBackground,
        borderColor: currentTheme.border,
        color: currentTheme.text,
      }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 text-center">

        <p
          className="text-lg font-medium"
          style={{ color: currentTheme.heading }}
        >
          Enjoy your reading.
        </p>

        <p
          className="mt-2 text-sm"
          style={{ color: currentTheme.mutedText }}
        >
          at Glorious Priceless Entertainment.
        </p>

        <div
          className="my-6 h-px w-24"
          style={{ backgroundColor: currentTheme.border }}
        />

        <p
          className="text-sm"
          style={{ color: currentTheme.mutedText }}
        >
          Designed & Developed by{" "}
          <span
            className="font-semibold"
            style={{ color: currentTheme.accent }}
          >
            PricelessTechy
          </span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;