// src/components/App.jsx
import React, { useState } from 'react';
import MainView from './MainView/MainView';
import MovieView from './MovieView/MovieView';

import "./index.scss";

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const movies = [
      {
  Title: "Ruby Red",
  Description: "A At first glance, teenager Gwendolyn Shepard seems like a normal schoolgirl next door. In reality, however, she and her family are keeping a secret. A time travel gene is passed down to each generation, which allows the bearer to switch from the present to the past. The The Shepard family is sure that Gwens cousin Charlotte has the gene and is preparing her for her future tasks.",
  Genre: {
    Name: "Fantasy",
    Description: "Fantasy is a genre of speculative fiction which involves themes of the supernatural, magic, and imaginary worlds and creatures."
  },
  Director: {
    Name: "Felix Fuchssteiner",
    Bio: "Felix Fuchssteiner is a German director, screenwriter and film producer.",
    Birth: "1975"
  },
  ImagePath: "rubyred.png",
  Featured: true
},
{
  Title: "Vampire Academy",
  Description: "Rose would actually be a completely normal teenager, were it not for one tiny detail: she is half human, half vampire - a Dhampir. Her friend Lissa, on the other hand, is a Moroi, a peaceful type of mortal vampire who must be protected from the Strigoi by Dhampir guards. But Dead animals and other strange incidents are piling up and threaten to tear the bond of friendship apart.",
  Genre: {
    Name: "Horror",
    Description: "Horror is a genre of speculative fiction intended to frighten, scare or disgust."
  },
  Director: {
    Name: "Mark Waters",
    Bio: "Mark Stephen Waters is an American film director.",
    Birth: "1964"
  },
  ImagePath: "vampireacademy.png",
  Featured: true
},
{
  Title: "Pirates of the Caribbean",
  Description: "Captain Barbossas pirates, burdened with a curse, take control of pirate captain Jack Sparrows ship, attack the port city of Port Royal and kidnap the beautiful Elizabeth Swann, the governors daughter. The adventurous blacksmith Will Turner, Elizabeths friend since childhood, takes up the pursuit together with the daring Jack Sparrow. Neither of them yet suspects the curse that lies upon the pirate.",
  Genre: {
    Name: "Action",
    Description: "The action film is a film genre that predominantly features chase sequences, fights, shootouts, explosions, and stunt work."
  },
  Director: {
    Name: "Gore Verbinski",
    Bio: "Gore Verbinski is an American film director.",
    Birth: "1964"
  },
  ImagePath: "piratesofthecaribbean.png",
  Featured: true
},
  ];

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBack = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="app">
      {selectedMovie ? (
        <MovieView movie={selectedMovie} onBack={handleBack} />
      ) : (
        <MainView movies={movies} onMovieSelect={handleMovieSelect} />
      )}
    </div>
  );
};

export default App;