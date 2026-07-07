import fonts from "../data/fonts";
import { useReadingPreferences } from "../content/ReadingPreferencesContext";

const FontSelector = () => {
  const { draftFontFamily, setDraftFontFamily } = useReadingPreferences();
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-xl font-semibold text-slate-800">
        🔤 Font Family
      </h2>

      <div className="space-y-4">
        {fonts.map((font) => (
          <button
            key={font.id}
            onClick={() => setDraftFontFamily(font.name)}
            className={`
      w-full
      rounded-2xl
      border-2
      bg-white
      p-5
      text-left
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-lg

      ${
        draftFontFamily === font.name
          ? "border-sky-600 ring-2 ring-sky-200"
          : "border-slate-200 hover:border-sky-400"
      }
    `}
          >
            {draftFontFamily === font.name && (
              <span className="mb-3 inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                Selected
              </span>
            )}
            <h3 className="text-lg font-bold text-slate-800">{font.name}</h3>

            <p className="mt-2 text-slate-500">{font.preview}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default FontSelector;
