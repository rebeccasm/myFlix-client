// src/components/MainView/main-view.jsx

import {useState} from "react";
import {MovieCard} from "../MovieCard/movie-card";
import {MovieView} from "../MovieView/movie-view";

export const MainView = () => {
  const[movies, setMovies] = useState ([
     {
      id: 1,
      title: "Ruby Red",
      description: "At first glance, teenager Gwendolyn Shepard seems like a normal schoolgirl next door. In reality, however, she and her family are keeping a secret. A time travel gene is passed down to each generation, which allows the bearer to switch from the present to the past. The The Shepard family is sure that Gwens cousin Charlotte has the gene and is preparing her for her future tasks.",
      genre: "Fantasy",
      image:
        "https://en.wikipedia.org/wiki/File:Ruby_Red_(film)_poster.jpg",
      director: "Felix Fuchssteiner"
    },
    {
      id: 2,
      title: "Vampire Academy",
      description: "Rose would actually be a completely normal teenager, were it not for one tiny detail: she is half human, half vampire - a Dhampir. Her friend Lissa, on the other hand, is a Moroi, a peaceful type of mortal vampire who must be protected from the Strigoi by Dhampir guards. But Dead animals and other strange incidents are piling up and threaten to tear the bond of friendship apart.",
      genre: "Horror",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQc_-ewqiAxBI7iXFC8oTxBHwfNyp_VpZ9GBKzzakAXh83ZLQMg",
      director: "Mark Waters"
    },
    {
      id: 3,
      title: "Pirates of the Carribbean",
      description: "Captain Barbossas pirates, burdened with a curse, take control of pirate captain Jack Sparrows ship, attack the port city of Port Royal and kidnap the beautiful Elizabeth Swann, the governors daughter. The adventurous blacksmith Will Turner, Elizabeths friend since childhood, takes up the pursuit together with the daring Jack Sparrow. Neither of them yet suspects the curse that lies upon the pirate.",
      genre: "Action",
      image: "https://en.wikipedia.org/wiki/File:Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png",
      director: "Gore Verbinski"
    }
  ]);

const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return (<MainView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)}/>
    );
    }

    if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key="movie.id" movie="movie" onMovieClick={(newSelectedMovie) => {
            setSelectedBook(newSelectedMovie);
          }}/>
      ))}
    </div>
  );
};
