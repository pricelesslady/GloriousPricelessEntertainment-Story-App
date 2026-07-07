import { useReadingPreferences } from "../content/ReadingPreferencesContext";

const FontSizeSlider = () => {
  const { draftFontSize, setDraftFontSize } = useReadingPreferences();

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-xl font-semibold text-slate-800">
        🔠 Font Size
      </h2>

      <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm">
        {/* Labels */}
        <div className="mb-4 flex items-end justify-between">
          {/* Small */}
          <div className="text-center">
            <p className="text-lg font-semibold text-slate-700">
              A
            </p>

            <span className="text-sm text-slate-500">
              Small
            </span>
          </div>

          {/* Large */}
          <div className="text-center">
            <p className="text-4xl font-bold text-slate-700">
              A
            </p>

            <span className="text-sm text-slate-500">
              Large
            </span>
          </div>
        </div>

        {/* Slider */}
        <input
          type="range"
          min="14"
          max="30"
          step="1"
          value={draftFontSize}
          onChange={(e) => setDraftFontSize(Number(e.target.value))}
          className="w-full cursor-pointer accent-sky-600"
        />

        {/* Current Font Size */}
        <p className="mt-4 text-center text-sm font-medium text-slate-600">
          {draftFontSize}px
        </p>
      </div>
    </section>
  );
};

export default FontSizeSlider;