import "./MovieList.css";
import filmsData from "../film.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import SearchInput from "./SearchInput";
import Button from "./Button";
import MovieCard from "./MovieCard";

const App = () => {
  const [movieName, setMovieName] = useState("");
  const [genre, setGenre] = useState("");
  const [filteredFilms, setFilteredFilms] = useState(filmsData);

  useEffect(() => {
    const filtered = filmsData.filter((film, index) => {
      const movieNameMatch = film.Title.toLowerCase().includes(
        movieName.toLowerCase()
      );
      const genreMatch = film.Genre.toLowerCase().includes(genre.toLowerCase());

      return (!movieName || movieNameMatch) && (!genre || genreMatch);
    });

    setFilteredFilms(filtered);
  }, [movieName, genre]);

  return (
    <div className="appContainer">
      <Header />
      <div className="filtersContainer">
        <div className="searchContainer">
          <SearchInput
            placeholder="Type a genre"
            value={genre}
            onChange={setGenre}
          />
          <FontAwesomeIcon
            icon={faXmark}
            style={{ color: "yellow", margin: "20px 0px" }}
            onClick={() => setGenre("")}
          />
        </div>
        <div className="searchContainer">
          <SearchInput
            placeholder="Type a movie"
            value={movieName}
            onChange={setMovieName}
          />
          <FontAwesomeIcon
            icon={faXmark}
            style={{ color: "yellow", margin: "20px 0px" }}
            onClick={() => setMovieName("")}
          />
        </div>
        <Button />
      </div>
      <div className="moviesContainer">
        {filteredFilms.map((film, index) => (
          <div key={index}>
            <MovieCard
              title={film.Title}
              year={film.Year}
              imgSrc={film.Images[0]}
              genre={film.Genre}
            />
            <Link to={`/movie/${index}`} style={{color: "yellow"}}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
