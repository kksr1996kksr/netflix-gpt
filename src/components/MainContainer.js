import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { getRandomInteger } from "../utils/utils";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;

  const randomNumber = movies && getRandomInteger(0, movies.length - 1);
  const mainMovie = movies && movies[randomNumber];

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movie_id={id} />
    </div>
  );
};

export default MainContainer;
