import React, { useState } from "react";
import Filter from "./Filter";

const Search = ({ searchMovies }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const filter = (type) => {
    if (type === "all") {
      setType("");
      return;
    }
    setType(type);
  };

  return (
    <>
      <div className="row" style={{ position: "relative" }}>
        <div className="input-field">
          <input
            placeholder="Search"
            type="search"
            className="validate"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" ? searchMovies(search, type) : false
            }
          />
        </div>
        <button
          className="btn"
          onClick={() => searchMovies(search, type)}
          style={{ position: "absolute", top: 0, right: "0.5rem" }}
        >
          Search
        </button>
      </div>

      <Filter filter={filter} />
    </>
  );
};

export default Search;
