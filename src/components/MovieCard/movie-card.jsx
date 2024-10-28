// src/components/MovieCard/movie-card.jsx

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <div onClick={() => onMovieClick(movie)}>
          {movie.title}
        </div>
    );
};
