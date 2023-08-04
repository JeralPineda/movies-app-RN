import {useState, useEffect} from "react";

import movieDB from "../api/movieDB";
import {MovieFull} from "../interfaces/movie";
import {Cast, CreditsResponse} from "../interfaces/credits";

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

    const [movieDetailResp, castResp] = await Promise.all([
      movieDetailPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailResp.data,
      cast: castResp.data.cast,
    });

    // console.log(resp.data.overview);
  };

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...state,
  };
};
