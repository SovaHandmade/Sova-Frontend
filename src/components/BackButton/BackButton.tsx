import { useNavigate } from "react-router-dom";
import "./BackButton.scss";

export const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button className="back-button button--secondary" onClick={handleClick}>
      <img
        className="back-button__image"
        src="/icons/arrow_left_dark.svg"
        alt="Arrow left"
      />
    </button>
  );
};
