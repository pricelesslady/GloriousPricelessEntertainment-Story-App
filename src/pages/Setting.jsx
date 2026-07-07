import ThemeGrid from "../component/ThemeGrid";
import FontSelector from "../component/FontSelector";
import { useReadingPreferences } from "../content/ReadingPreferencesContext";
import FontSizeSlider from "../component/FontSizeSlider";
import PreviewCard from "../component/PreviewCard";
import SettingsFooter from "../component/SettingsFooter";
import { Link } from "react-router-dom";
import DisplayNameSetting from "../component/preferences/DisplayNameSetting";

const Settings = () => {
  const { theme, fontFamily, fontSize } = useReadingPreferences();
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-lg sm:p-8 lg:p-10">
        {/* Back Button */}
        <Link to="/">
          <button className="mb-8 text-slate-600 transition hover:text-sky-600">
            ← Back
          </button>
        </Link>

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Reading Preferences
          </h1>

          <p className="mt-3 text-slate-500">
            Personalize your reading experience.
          </p>
        </div>

        {/* Theme Section */}
        <section className="mt-12">
          <h2 className="mb-6 text-xl font-semibold text-slate-800">
            🎨 Choose Theme
          </h2>

          <ThemeGrid />
        </section>

        {/* Font Family */}
        <section className="mt-12">
          <FontSelector />
        </section>

        {/* Font Size */}
        <section className="mt-12">
          <FontSizeSlider />
        </section>

        {/* Live Preview */}
        <section className="mt-12">
          <PreviewCard />
        </section>

        {/* Display Name */}
        <section className="mt-12">
          <DisplayNameSetting />
        </section>
        
        {/* Footer Buttons */}
        <section className="mt-12">
          <SettingsFooter />
        </section>

      </div>
    </main>
  );
};

export default Settings;
