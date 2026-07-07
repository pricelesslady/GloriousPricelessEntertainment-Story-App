const LoadingScreen = ({ message = "Loading..." }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-sky-600" />

      <p className="mt-8 text-lg font-medium text-slate-600">
        {message}
      </p>
    </main>
  );
};

export default LoadingScreen;