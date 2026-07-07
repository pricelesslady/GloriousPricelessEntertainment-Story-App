const ThemeCard = ({ draftTheme, isSelected, onSelect }) => {
  return (
  <button
  onClick={onSelect}
  className={`
    w-full
    rounded-2xl
    border-2
    bg-white
    p-5
    text-left
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-lg

    ${
      isSelected
        ? "border-sky-600 ring-2 ring-sky-200"
        : "border-slate-200 hover:border-sky-400"
    }
  `}
>
      {/* Color Palette */}
      <div className="mb-5 flex overflow-hidden rounded-lg">

        {draftTheme.colors.map((color, index) => (

          <div
            key={index}
            className="h-10 flex-1"
            style={{ backgroundColor: color }}
          />

        ))}

      </div>

      <h3 className="text-xl font-bold text-slate-800">
        {draftTheme.icon} {draftTheme.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {draftTheme.description}
      </p>

    </button>
  );
};

export default ThemeCard;