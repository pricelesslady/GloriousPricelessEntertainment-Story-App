import { useNavigate } from "react-router-dom";
import { useReadingPreferences } from "../content/ReadingPreferencesContext";

const SettingsFooter = () => {
  const navigate = useNavigate();

  const { savePreferences, restoreDefaults } = useReadingPreferences();

  const handleSave = () => {
    savePreferences();
    navigate("/");
  };

  const handleRestore = () => {
    restoreDefaults();
  };

  return (
    <section className="mt-12 flex flex-col-reverse gap-4 sm:flex-row sm:justify-end">
      {/* Restore Defaults */}
      <button
        onClick={handleRestore}
        className="rounded-full border border-slate-300 px-8 py-3 font-semibold text-slate-700 transition duration-300 hover:bg-slate-100"
      >
        Restore Defaults
      </button>

      {/* Save Changes */}
      <button
        onClick={handleSave}
        className="rounded-full bg-sky-600 px-8 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-sky-700 hover:shadow-lg"
      >
        Save Changes
      </button>
    </section>
  );
};

export default SettingsFooter;