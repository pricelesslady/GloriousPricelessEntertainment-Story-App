import { FaArrowDown } from "react-icons/fa";
import { useReadingPreferences } from "../content/ReadingPreferencesContext";
import InstallButton from "./pwa/InstallButton";
const Hero = () => {
  const { currentTheme } = useReadingPreferences();
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden "
    >
      {/* Floating Background Circles */}
      <div
        className="absolute -left-16 top-16 h-44 w-44 rounded-full"
        style={{ backgroundColor: currentTheme.pageBackground }}
      ></div>

      <div
        className="absolute right-0 top-1/4 h-52 w-52 rounded-full"
        style={{ backgroundColor: currentTheme.pageBackground }}
      ></div>

      <div
        className="absolute bottom-10 left-1/3 h-40 w-40 rounded-full"
        style={{ backgroundColor: currentTheme.pageBackground }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl text-center">
        {/* Main Title */}
        <h1 className="text-3xl font-extrabold leading-tight tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
          GLORIOUS PRICELESS
        </h1>

        {/* Subtitle */}
        <h2 className="mt-2 text-base uppercase tracking-[0.25rem] sm:text-xl sm:tracking-[0.45rem] md:text-2xl lg:text-3xl lg:tracking-[0.6rem]">
          Entertainment
        </h2>

        {/* Tagline */}
        <p className="mx-auto mt-8 max-w-3xl text-lg font-medium leading-relaxed sm:mt-10 sm:text-xl lg:text-2xl">
          Every piece is inspired by the Spirit of God. 
          <br />
          Stories that transform lives.
        </p>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 sm:mt-6 sm:text-lg sm:leading-8">
           Every story here is inspiring, transformative, and 
           represents a journey that easily resonates with us, bringing us into a glorious future.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <button
            onClick={() =>
              document
                .getElementById("library")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              backgroundColor: currentTheme.primary,
            }}
          >
            📚 Explore Library
          </button>

          <InstallButton/>

        </div>

        <p
          className="mt-5 text-sm"
          style={{
            color: currentTheme.mutedText,
          }}
        >
          📱 Install GPE for faster access and offline reading.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 flex animate-bounce flex-col items-center sm:bottom-8">
        <span className="mb-2 text-xs uppercase tracking-[0.2rem] sm:text-sm sm:tracking-widest">
          Scroll
        </span>

        <FaArrowDown className="text-sm sm:text-base" />
      </div>
    </section>
  );
};

export default Hero;
