import React from "react";
import { Filter } from "../../../components/Filter";
import "./ProfileOrders.scss";
import { ProfileOrderItem } from "./ProfileOrderItem";

type Props = {
  isAdmin: boolean;
};

export const ProfileOrders: React.FC<Props> = ({ isAdmin }) => {
  return (
    <div className="profile__orders">
      <div className="profile__orders-container">
        {!!isAdmin && (
          <div className="profile__orders-filters">
            <Filter text="Всі" selected={true} />
            <Filter text="Нові" selected={false} />
            <Filter text="В обробці" selected={false} />
            <Filter text="Готові" selected={false} />
          </div>
        )}

        <div className="profile__orders-headers profile__orders-row">
          <div className="profile__orders-column">
            <h3>Замовлення</h3>
          </div>
          <div className="profile__orders-column">
            <h4>Дата</h4>
          </div>
          <div className="profile__orders-column">
            <h4>Стан</h4>
          </div>
          <div className="profile__orders-column">
            <h4>Разом</h4>
          </div>
        </div>

        <ProfileOrderItem />
      </div>
    </div>
  );
};
