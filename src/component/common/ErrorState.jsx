import { Link } from "react-router-dom";

const ErrorState = ({
  title = "Something went wrong",
  description = "Please try again later.",
}) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-lg text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          {title}
        </h2>

        <p className="mt-5 leading-8 text-slate-500">
          {description}
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-sky-600 px-8 py-3 font-semibold text-white transition hover:bg-sky-700"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
};

export default ErrorState;