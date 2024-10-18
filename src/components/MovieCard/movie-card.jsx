// src/components/MovieCard/movie-card.jsx
import React from 'react';

const MovieCard = ({ movie, onMovieSelect }) => {
  return (
    <div className="movie-card" onClick={() => onMovieSelect(movie)}>
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieCard;