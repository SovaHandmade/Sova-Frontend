import React, { useMemo, useState } from "react";
import { ProfileOrderItem } from "./ProfileOrderItem";
import { Filter } from "../../../components/Filter";
import { Order } from "../../../types/Order";
import "./ProfileOrders.scss";
import { Link } from "react-router-dom";
import { Loader } from "../../../components/Loader";

type Props = {
  isAdmin: boolean;
  orders: Order[] | null;
};

const FILTERS = ["All", "Processing", "In process", "Done"];

export const ProfileOrders: React.FC<Props> = ({ isAdmin, orders }) => {
  const [filter, setFilter] = useState("All");

  const filteredOrders = useMemo(() => {
    if (!orders) {
      return;
    }

    return orders.filter((order) => {
      if (filter === "All") {
        return true;
      }

      console.log(filter, order.status, order.status === filter);
      return order.status === filter;
    });
  }, [orders, filter]);

  const handleFilter = (name: string) => {
    setFilter(name);
  };

  return (
    <div className="profile__orders">
      <div className="profile__orders-container">
        {!!isAdmin && (
          <div className="profile__orders-filters">
            {FILTERS.map((item) => (
              <Filter
                name={item}
                selected={filter === item}
                selectCallback={handleFilter}
                key={item}
              />
            ))}
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

        {!filteredOrders ? (
          <Loader isSmall={true} />
        ) : !filteredOrders.length ? (
          isAdmin ? (
            <div className="profile__orders-empty">
              <p className="profile__orders-empty-text body-text">
                Немає замовлень з вибраним критерієм
              </p>
            </div>
          ) : (
            <div className="profile__orders-empty">
              <p className="profile__orders-empty-text body-text">
                Тут з’являться ваші замовлення
              </p>
              <Link to="/shop" className="profile__orders-empty-button button">
                Перейти до каталогу товарів
              </Link>
            </div>
          )
        ) : (
          filteredOrders.map((order) => (
            <ProfileOrderItem order={order} isAdmin={isAdmin} key={order.id} />
          ))
        )}
      </div>
    </div>
  );
};
