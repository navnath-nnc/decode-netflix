import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    movies.nowPlayingMovies &&
    movies.popularMovies &&
    movies.topRatedMovies &&
    movies.upcomingMovies && (
      <div className="bg-black w-screen aspect-video">
        <div className="-mt-40 relative z-20 pl-12">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />

          {/*
      MovieList - Popular
        - MovieCards * n
      MovieList - Now Playing
      MovieList - Trending
      
      */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
