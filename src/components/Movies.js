import React from "react";
import { movies } from "../data";

function Movies() {
  const movieDetails=movies.map((movie)=>(
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <h3>{movie.time}</h3>
      <ul>
        {movie.genres.map((genre)=>(
          <li>
            {genre}
          </li>
        ))}
      </ul>
    </div>
  ))
  return <div>
    <h1>Movie Page</h1>
   {movieDetails}
  </div>;
}

export default Movies;
