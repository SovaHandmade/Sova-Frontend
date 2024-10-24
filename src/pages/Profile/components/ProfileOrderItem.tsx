import React, { useState } from "react";
import "./ProfileOrderItem.scss";

type Props = {
  showDetails?: boolean;
};

export const ProfileOrderItem: React.FC<Props> = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div className="profile__orders-row" onClick={handleClick}>
        <div className="profile__orders-column">
          <p className="button-text">#4567</p>
        </div>
        <div className="profile__orders-column">
          <p className="small-text">03.10.2024</p>
        </div>
        <div className="profile__orders-column">
          <p className="small-text">Обробка</p>
        </div>
        <div className="profile__orders-column">
          <p className="small-text">2600 grh</p>
        </div>
      </div>

      {showDetails && (
        <>
          <div className="profile__orders-row">
            <div className="profile__order-details">
              <h4>Осінній віночок</h4>
              <div className="profile__order-details-info">
                <p className="small-text">2 од.</p>
                <p className="body-text">1600 грн</p>
              </div>
            </div>
          </div>

          <div className="profile__orders-row">
            <div className="profile__order-credentials">
              <h4>Данні покупця:</h4>
              <div className="profile__order-credentials-info">
                <p className="small-text">Брєд Пітт</p>
                <p className="small-text">+380 00 000 0000</p>
                <p className="small-text">емайл.ком</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
