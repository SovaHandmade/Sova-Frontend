import React from "react";
import "./Popup.scss";

type Props = {
  title: string;
  subtitle: string;
};

export const Popup: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="popup">
      <div className="popup__container">
        <img src="/icons/success.svg" alt="Success icon" />

        <h2>{title}</h2>
        <p className="body-text">{subtitle}</p>

        <button>Продовжити</button>
      </div>
    </div>
  );
};
