import "./MovieCard.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ title, year, imgSrc, genre  }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="MovieCard">
      <div className="imgContainer">
        <img className="movieImg" src={imgSrc} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="genre">{genre}</div>
      <div className="yearLikeContainer">
        <div>{year}</div>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: liked ? "yellow" : "white" }}
          onClick={toggleLike}
        />
      </div>
    </div>
  );
};

export default MovieCard;