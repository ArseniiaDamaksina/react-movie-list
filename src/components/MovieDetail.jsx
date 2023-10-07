import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import filmsData from "../film.json";
import Header from "./Header";

const MovieDetail = () => {
  const { id } = useParams();

  return (
    <div className="pageContainer">
      <Header />
      <div className="movieContainer">
        <div className="imgDescription">
          <div className="imgCont">
            <img src={filmsData[id].Images[0]} alt={filmsData[id].Title} />
          </div>
          <div className="content">
            <h1>{filmsData[id].Title}</h1>
            <p>
              <b>Year: </b>
              {filmsData[id].Year}
            </p>
            <p>
              <b>Rating: </b>
              {filmsData[id].imdbRating}
            </p>
            <p>
              <b>Genre: </b>
              {filmsData[id].Genre}
            </p>
            <p>
              <b>Runtime: </b>
              {filmsData[id].Runtime}
            </p>
            <p>
              <b>Actors: </b>
              {filmsData[id].Actors}
            </p>
            <p>
              <b>Plot: </b>
              {filmsData[id].Plot}
            </p>
            <p>
              <b>Language: </b>
              {filmsData[id].Language}
            </p>
            <p>
              <b>Country: </b>
              {filmsData[id].Country}
            </p>
          </div>
        </div>
        <div className="images">
          <div className="imgMini">
            <img src={filmsData[id].Images[1]} alt={filmsData[id].Title} />
          </div>
          <div className="imgMini">
            <img src={filmsData[id].Images[2]} alt={filmsData[id].Title} />
          </div>
          <div className="imgMini">
            <img src={filmsData[id].Images[3]} alt={filmsData[id].Title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
