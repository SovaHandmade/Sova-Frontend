import React from "react";
import "./Popup.scss";

type Props = {
  title: string;
  subtitle: string;
  isSuccess: boolean;
  buttonCallback: () => void;
};

export const Popup: React.FC<Props> = ({
  title,
  subtitle,
  isSuccess,
  buttonCallback,
}) => {
  return (
    <div className="popup">
      <div className="popup__container">
        {isSuccess && <img src="/icons/success.svg" alt="Success icon" />}

        <div className="popup__text">
          <h2>{title}</h2>
          <p className="body-text">{subtitle}</p>
        </div>

        <button className="popup__button" onClick={buttonCallback}>
          Продовжити
        </button>
      </div>
    </div>
  );
};
