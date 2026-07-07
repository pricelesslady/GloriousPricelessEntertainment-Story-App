const LoadingSpinner = ({ text = "Loading..." }) => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-sky-600"></div>

      <p className="mt-5 text-slate-500">
        {text}
      </p>
    </div>
  );
};

export default LoadingSpinner;