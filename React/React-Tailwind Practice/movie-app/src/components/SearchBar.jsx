import React from "react";
import { useState } from "react";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  const SearchMovie = (movie) => {
    props.setSearchTerm(movie);
    setSearch("");
  };

  return (
    <>
      <div className="border-2 flex justify-center content-center">
        <input
          type="text"
          value={search}
          placeholder="Enter movie name"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <span
          onClick={() => {
            SearchMovie(search);
          }}
          className="material-symbols-outlined hover:cursor-pointer"
        >
          search
        </span>
      </div>
    </>
  );
};

export default SearchBar;
