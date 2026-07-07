import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-8xl font-black text-sky-600">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-slate-900">
          Page Not Found
        </h2>

        <p className="mt-5 leading-8 text-slate-500">
          The page you're looking for doesn't exist, may have been
          moved, or the link may be incorrect.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/"
            className="rounded-xl bg-sky-600 px-7 py-3 font-semibold text-white transition hover:bg-sky-700"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="rounded-xl border border-slate-300 px-7 py-3 font-semibold transition hover:bg-slate-100"
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;