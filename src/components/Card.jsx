import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card z-depth-4" id={card.imdbID}>
      <div className="card-image waves-effect waves-block waves-light">
        {card.Poster === "N/A" ? (
          <img src={`https://via.placeholder.com/300x500?text=${card.Title}`} />
        ) : (
          <img className="activator" src={card.Poster} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {card.Title}
        </span>
        <p className="pt4">
          {card.Year}
          <span className="right bottom">{card.Type}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
