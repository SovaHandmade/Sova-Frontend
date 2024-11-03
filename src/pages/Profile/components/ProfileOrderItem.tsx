import React, { Fragment, useState } from "react";
import "./ProfileOrderItem.scss";
import { Order } from "../../../types/Order";

type Props = {
  order: Order;
};

export const ProfileOrderItem: React.FC<Props> = ({ order }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div className="profile__orders-row" onClick={handleClick}>
        <p className="profile__orders-column button-text">{order.id}</p>
        <div className="profile__orders-row profile__orders-row-group">
          <p className="profile__orders-column small-text">{order.date}</p>
          <p className="profile__orders-column small-text">{order.status}</p>
          <p className="profile__orders-column small-text">
            {order.total_price}
          </p>
        </div>
      </div>

      {showDetails && (
        <Fragment>
          {order.items.map((item, index) => (
            <div className="profile__orders-row" key={index}>
              <div className="profile__order-details">
                <h4>test</h4>
                <div className="profile__order-details-info">
                  <p className="small-text">{item.quantity} units</p>
                  <p className="body-text">{item.total_price} grn</p>
                </div>
              </div>
            </div>
          ))}

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
        </Fragment>
      )}
    </>
  );
};
