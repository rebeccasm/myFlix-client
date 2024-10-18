// src/components/MainView/main-view.jsx
import React from 'react';
import MovieCard from '../MovieCard/movie-card';

const MainView = ({ movies, onMovieSelect }) => {
  return (
    <div className="main-view">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onMovieSelect={onMovieSelect} />
      ))}
    </div>
  );
};

export default MainView;