import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="w-full h-full">
      <Header />
    </div>
  );
};

export default Browse;
