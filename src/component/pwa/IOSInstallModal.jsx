const IOSInstallModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <div className="text-center">

          <h2 className="text-2xl font-bold">
            Install GPE
          </h2>

          <p className="mt-3 text-slate-600">
          Installing GPE on iPhone
          Follow these simple steps to add GPE to your Home Screen for quick access.
          </p>

        </div>

        <div className="mt-8 space-y-5">

          <div>
            <strong>1.</strong> Tap the
            <strong> Share</strong> button
            (⬆️).
          </div>

          <div>
            <strong>2.</strong> Scroll down.
          </div>

          <div>
            <strong>3.</strong> Tap
            <strong> Add to Home Screen.</strong>
          </div>

          <div>
            <strong>4.</strong> Tap
            <strong> Add.</strong>
          </div>

        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-full bg-sky-600 py-3 font-semibold text-white"
        >
          Got it
        </button>

      </div>
    </div>
  );
};

export default IOSInstallModal;