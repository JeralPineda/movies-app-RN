import {useEffect, useState} from "react";
import movieDB from "../api/movieDB";
import {Movie, MovieDBNowPlaying} from "../interfaces/movie";

export const useMovies = () => {
  //Películas en cartelera
  const [isLoading, setIsLoading] = useState(true);
  const [moviesInTheaters, setMoviesInTheaters] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>("/now_playing");

    setMoviesInTheaters(resp.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    //now_playing
    getMovies();
  }, []);

  return {
    moviesInTheaters,
    isLoading,
  };
};
