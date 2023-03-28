import React, { useState } from "react";

const Filter = ({ filter }) => {
  const [radio, setRadio] = useState("all");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: 15,
      }}
    >
      <p>
        <label htmlFor="all">
          <input
            id="all"
            className="with-gap"
            name="group1"
            type="radio"
            defaultChecked
            onChange={(e) => filter(e.target.id)}
          />
          <span>All</span>
        </label>
      </p>
      <p>
        <label htmlFor="movie">
          <input
            id="movie"
            className="with-gap"
            name="group1"
            type="radio"
            onChange={(e) => filter(e.target.id)}
          />
          <span>Movies only</span>
        </label>
      </p>
      <p>
        <label htmlFor="series">
          <input
            id="series"
            className="with-gap"
            name="group1"
            type="radio"
            onChange={(e) => filter(e.target.id)}
          />
          <span>Series only</span>
        </label>
      </p>
    </div>
  );
};

export default Filter;
