import {useEffect, useState} from "react";
import movieDB from "../api/movieDB";
import {Movie, MovieDBMoviesResponse} from "../interfaces/movie";

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

const initialState = {
  nowPlaying: [],
  popular: [],
  topRated: [],
  upcoming: [],
};

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>(initialState);

  const getMovies = async () => {
    const nowPlayingPromise =
      movieDB.get<MovieDBMoviesResponse>("/now_playing");
    const popularPromise = movieDB.get<MovieDBMoviesResponse>("/popular");
    const topRatedPromise = movieDB.get<MovieDBMoviesResponse>("/top_rated");
    const upcomingPromise = movieDB.get<MovieDBMoviesResponse>("/upcoming");

    //Múltiples peticiones de forma simultanea
    const resps = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: resps[0].data.results,
      popular: resps[1].data.results,
      topRated: resps[2].data.results,
      upcoming: resps[3].data.results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
