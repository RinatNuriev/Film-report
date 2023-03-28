import React, { useEffect, useState } from "react";

import { CardServise } from "../service/card.service";
import Cards from "../components/Cards";
import Search from "../components/Search";
import Preloader from "../components/Preloader";

const Main = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function get() {
      const data = await CardServise.getCard();
      setData(data);
      setIsLoading(false)
      return;
    }
    get();
  }, []);

  const searchMovies = async (movies, type) => {
    setIsLoading(true)
    if (movies === "") {
      const res = await CardServise.getSearch("all", type);
      setData(res);
      setIsLoading(false)
      return;
    }
    const res = await CardServise.getSearch(movies, type);
    setData(res);
    setIsLoading(false)
  };

  return (
    <main className="content container row">
      <Search searchMovies={searchMovies} />

      {isLoading ? <Preloader /> : <Cards cards={data} />}
    </main>
  );
};

export default Main;
