import { FaHome } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import Logo from "./Logo";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:h-20 lg:px-8">
        {/* Home */}
        <Link to="/">
        <button
          onClick={() =>
            document
              .getElementById("hero")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="group flex items-center gap-2 text-sm font-semibold text-slate-700 transition duration-300 hover:text-sky-600 sm:text-base lg:text-lg"
        >
          <FaHome className="text-base transition-transform duration-300 group-hover:-translate-y-1 sm:text-lg lg:text-xl" />

          <span className="relative">
            Home
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </button>
        </Link>

        {/* Logo */}
        <div className="flex justify-center transition duration-300 hover:scale-105">
          <Logo />
        </div>

        {/* Settings */}
        <Link to="/settings">
        <button className="group flex items-center rounded-full p-2 text-slate-700 transition-all duration-300 hover:bg-sky-100 hover:text-sky-600 hover:shadow-md sm:gap-2 sm:px-4 sm:py-2">
          <IoSettingsSharp className="text-xl transition-transform duration-500 group-hover:rotate-90 sm:text-2xl" />

          {/* Hide text on phones */}
          <span className="hidden font-medium sm:inline">Reading Preferences</span>
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
