const Logo = () => {
  return (
    <div className="flex cursor-pointer select-none items-center gap-2 transition-transform duration-300 hover:scale-105 sm:gap-3">

      {/* Logo Icon */}
      <div className="relative flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12 lg:h-14 lg:w-14">

        {/* Book */}
        <div className="absolute h-7 w-7 rotate-[-8deg] rounded-sm border-2 border-r border-sky-600 bg-white sm:h-8 sm:w-8 sm:border-3 lg:h-10 lg:w-10 lg:border-4"></div>

        {/* Letter G */}
        <span className="absolute text-2xl font-extrabold text-sky-700 sm:text-3xl lg:text-4xl">
          G
        </span>

      </div>

      {/* Logo Text */}
      <div className="leading-none">

        <h1 className="text-base font-extrabold tracking-wide text-slate-800 sm:text-xl lg:text-2xl">
          GLORIOUS
        </h1>

        <p className="text-[8px] uppercase tracking-[0.15em] text-slate-500 sm:text-[10px] lg:text-xs lg:tracking-[0.25em]">
          Priceless Entertainment
        </p>

      </div>

    </div>
  );
};

export default Logo;