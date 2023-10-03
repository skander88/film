import React from "react";
import MovieData from "./MovieData";
import MovieCard from "./MovieCards";

const MovieList = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {MovieData.map((el) => (
        <MovieCard min={el} />
      ))}
    </div>
  );
};

export default MovieList;
