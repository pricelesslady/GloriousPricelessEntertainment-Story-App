import { useReadingPreferences } from "../content/ReadingPreferencesContext";

const PreviewCard = () => {
  const {
    draftTheme,
    draftFontFamily,
    draftFontSize,
  } = useReadingPreferences();

  const themeStyles = {
    Classic: {
      background: "bg-white",
      title: "text-slate-900",
      text: "text-slate-600",
      button: "bg-sky-600 hover:bg-sky-700 text-white",
    },

    Midnight: {
      background: "bg-slate-900",
      title: "text-white",
      text: "text-slate-300",
      button: "bg-sky-500 hover:bg-sky-600 text-white",
    },

    Ocean: {
      background: "bg-sky-50",
      title: "text-sky-900",
      text: "text-sky-700",
      button: "bg-sky-600 hover:bg-sky-700 text-white",
    },

    Forest: {
      background: "bg-green-50",
      title: "text-green-900",
      text: "text-green-700",
      button: "bg-green-600 hover:bg-green-700 text-white",
    },
  };

  const currentTheme = themeStyles[draftTheme];

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-xl font-semibold text-slate-800">
        👀 Live Preview
      </h2>

      <div
        className={`
          rounded-3xl
          p-8
          shadow-lg
          transition-all
          duration-300
          ${currentTheme.background}
        `}
        style={{
          fontFamily: draftFontFamily,
          fontSize: `${draftFontSize}px`,
        }}
      >
        <h3
          className={`font-bold tracking-wide ${currentTheme.title}`}
        >
          GLORIOUS PRICELESS
        </h3>

        <p
          className={`mt-4 leading-relaxed ${currentTheme.text}`}
        >
          Every story has a voice.
          <br />
          Every reader deserves a journey.
        </p>

        <button
          className={`
            mt-6
            rounded-full
            px-6
            py-3
            font-semibold
            transition
            ${currentTheme.button}
          `}
        >
          Read Story
        </button>
      </div>
    </section>
  );
};

export default PreviewCard;