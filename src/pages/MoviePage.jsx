import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CardServise } from "../service/card.service";
import styles from "../assets/Movie.module.css";

const MoviePage = () => {
  let { state } = useLocation();

  const [movie, setMovie] = useState();

  useEffect(() => {
    async function get(id) {
      const res = await CardServise.getMoviePage(id);
      setMovie(res);
      return;
    }

    get(state.id);
  }, []);


  return (
    <div className={styles.moviePage}>
      <div className="container">
        <div className={styles.movieInfo}>
          <div className={styles.movieImg}>
            <img src={movie?.Poster} />
          </div>

          <div>
            <ul className="collection" style={{ minWidth: 300 }}>
              <li className="collection-item">
                {" "}
                <span className={styles.movieItem}>Name:</span> {movie?.Title}
              </li>
              <li className="collection-item">
                {" "}
                <span className={styles.movieItem}>About:</span> {movie?.Plot}
              </li>
              <li className="collection-item">
                {" "}
                <span className={styles.movieItem}>Runtime:</span>{" "}
                {movie?.Runtime}
              </li>
              <li className="collection-item">
                {" "}
                <span className={styles.movieItem}>Actors:</span>{" "}
                {movie?.Actors}
              </li>
              <li className="collection-item">
                <span className={styles.movieItem}>Ratings:</span>
                {movie?.Ratings.map((rat) => (
                  <p key={rat.Source}>
                    {rat.Source} - {rat.Value}
                  </p>
                ))}
              </li>
              <li className="collection-item">
                {" "}
                <span className={styles.movieItem}>Awards:</span>{" "}
                {movie?.Awards}
              </li>
              <li className="collection-item">
                {" "}
                <span className={styles.movieItem}>imdbRating:</span>{" "}
                {movie?.imdbRating}
              </li>
              <li className="collection-item">
                {" "}
                <span className={styles.movieItem}>Released:</span>{" "}
                {movie?.Released}
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            <div className="waves-effect waves-light btn">
              Back
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
