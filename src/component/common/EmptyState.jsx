const EmptyState = ({
  title,
  description,
}) => {
  return (
    <div className="flex min-h-[250px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
      <div className="text-6xl">
        📭
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-800">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-slate-500">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;