import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <span>Movie List</span>
      <FontAwesomeIcon
        icon={faHouse}
        className="icon"
        style={{ color: "yellow", fontSize: "24px", marginRight: "9%" }}
        onClick={handleIconClick}
      />
    </header>
  );
};

export default Header;
