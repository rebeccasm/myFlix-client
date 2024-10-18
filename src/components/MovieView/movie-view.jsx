// src/components/MovieView/movie-view.jsx
import React from 'react';

const MovieView = ({ movie, onBack }) => {
  return (
    <div className="movie-view">
      <h1>{movie.title}</h1>
      <img src={movie.posterUrl} alt={movie.title} />
      <p>{movie.description}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <button onClick={onBack}>Back to Main View</button>
    </div>
  );
};

export default MovieView;