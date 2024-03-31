import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);

  // Custom Hook for fetching Movie trailer and storing it in the redux store
  useMovieTrailer(movie_id);
  return (
    <div>
      {trailer && (
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + trailer.key}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
