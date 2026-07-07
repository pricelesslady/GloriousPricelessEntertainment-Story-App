import { FiSearch } from "react-icons/fi";

const SearchBar = ({
  search,
  setSearch,
}) => {
  return (
    <div className="mx-auto mt-8 w-full max-w-2xl">
      <div className="flex items-center rounded-full border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 focus-within:border-sky-500 focus-within:shadow-lg">

        <FiSearch className="mr-3 text-xl text-slate-400" />

        <input
          type="text"
          placeholder="Search stories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent text-slate-700 placeholder:text-slate-400 focus:outline-none"
        />

      </div>
    </div>
  );
};

export default SearchBar;