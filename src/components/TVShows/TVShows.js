import React, { useState } from "react";
import logo from "../../logo.svg";
import "./styles.css";
import Header from "../Header";
import Footer from "../Homepage/Footer";

const TVShows = () => {
  const [movies] = useState([
    { name: "Squid Game" },
    { name: "Teen Wolf" },
    { name: "Arcane" },
    { name: "Merlin" },
    { name: "Money Heist" },
    { name: "Vicenzo" },
  ]);

  return (
    <div>
      <Header />
      <div className="tv-style">
        <h1>TV Shows</h1>
        <p>
          These days, the small screen has some very big things to offer. From
          sitcoms to dramas to travel and talk shows, these are all the best
          programs on TV.
        </p>

        <div className="movies">
          {movies.map((movie) => {
            return (
              <div className="movie" key={movie}>
                <img src={logo} alt={movie.name} />
                <p>{movie.name}</p>
              </div>
            );
          })}
        </div>

        <div className="more">
          <h3 >There’s even more to watch.</h3>
          <p>
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </p>
          <button>Join now</button>
        </div>
      </div>

      <Footer />

    </div>
  );
};


export default TVShows;
