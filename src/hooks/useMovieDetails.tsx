import {useState, useEffect} from "react";

import movieDB from "../api/movieDB";
import {Movie} from "../interfaces/movie";

interface MovieDetails {
  isLoading: boolean;
  // movieFull: undefined;
  cast: any[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>();

  const getMovieDetails = async () => {
    const resp = await movieDB.get<Movie>(`/${movieId}`);

    console.log(resp.data.overview);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {state};
};
