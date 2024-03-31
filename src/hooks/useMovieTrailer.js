import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { getRandomInteger } from "../utils/utils";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTrailer(movie_id);
  }, []);

  const fetchTrailer = async (movie_id) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movie_id + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const trailers = json.results.filter((item) => item.type === "Trailer");
    const trailer = trailers.length
      ? trailers[getRandomInteger(0, trailers.length - 1)]
      : json.results[getRandomInteger(0, json.results.length - 1)];
    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
