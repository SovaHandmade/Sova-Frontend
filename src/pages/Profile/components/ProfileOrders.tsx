import React from "react";
import { ProfileOrderItem } from "./ProfileOrderItem";
import { Filter } from "../../../components/Filter";
import { Order } from "../../../types/Order";
import "./ProfileOrders.scss";

type Props = {
  isAdmin: boolean;
  orders: Order[];
};

export const ProfileOrders: React.FC<Props> = ({ isAdmin, orders }) => {
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

        <div className="profile__orders-headers profile__orders-headers-row profile__orders-row">
          <div className="profile__orders-column">
            <h3>Замовлення</h3>
          </div>
          <div className="profile__orders-row profile__orders-headers-group">
            <div className="profile__orders-column profile__orders-column--header">
              <h4>Дата</h4>
            </div>
            <div className="profile__orders-column profile__orders-column--header">
              <h4>Стан</h4>
            </div>
            <div className="profile__orders-column profile__orders-column--header">
              <h4>Разом</h4>
            </div>
          </div>
        </div>

        {!isAdmin && !orders.length ? (
          <div className="profile__orders-empty">
            <p className="profile__orders-empty-text body-text">
              Тут з’являться ваші замовлення
            </p>
            <button className="profile__orders-empty-button">
              Перейти до каталогу товарів
            </button>
          </div>
        ) : (
          <>
            <ProfileOrderItem />
            <ProfileOrderItem />
          </>
        )}
      </div>
    </div>
  );
};
