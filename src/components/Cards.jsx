import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Cards = ({ cards }) => {
  return (
    <>
      <div className="movies">
        {cards?.length ? cards?.map((card) => (
          <Link
            to={`movie/id=${card.imdbID}`}
            key={card.imdbID}
            state={{ id: card.imdbID }}
          >
            <Card card={card} key={card.imdbID} />
          </Link>
        )) : <h4>Nothing found :( </h4>}
      </div>
    </>
  );
};

export default Cards;
