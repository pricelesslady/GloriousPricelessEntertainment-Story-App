import { useState } from "react";
import SearchBar from "./SearchBar";
import StoryGrid from "./StoryGrid";

const Library = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  return (
    <section
      id="library"
      className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-4xl text-center">

        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Story Library
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-500">
          Discover inspiring stories waiting for you.
        </p>

        {/* FILTER TABS */}
        <div className="mt-6 flex justify-center gap-4">
          <button onClick={() => setFilter("all")} className="px-4 py-2 rounded-full ">
            All
          </button>

          <button onClick={() => setFilter("latest")} className="px-4 py-2 rounded-full ">
            Latest
          </button>

          <button onClick={() => setFilter("popular")} className="px-4 py-2 rounded-full ">
            Most Read
          </button>
        </div>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

      <StoryGrid
        filter={filter}
        search={search}
      />
    </section>
  );
};

export default Library;