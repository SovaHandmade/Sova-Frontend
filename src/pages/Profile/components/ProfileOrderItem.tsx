import React, { Fragment, useEffect, useState } from "react";
import "./ProfileOrderItem.scss";
import { Order } from "../../../types/Order";
import { User } from "../../../types/User";
import { getProduct, getUser } from "../../../api/api";
import { ProductType } from "../../../types/ProductType";

type Props = {
  isAdmin: boolean;
  order: Order;
};

let isFetched = false;

export const ProfileOrderItem: React.FC<Props> = ({ isAdmin, order }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [user, setUser] = useState<User>();

  const handleClick = async () => {
    if (!products.length) {
      await fetchProducts();
    }

    setShowDetails(!showDetails);
  };

  const fetchUser = async () => {
    if (isAdmin) {
      setUser(await getUser(order.user));

      return;
    }
  };

  const fetchProducts = async () => {
    for (const item of order.items) {
      const product = await getProduct(item.product_id);

      setProducts((currentProducts) => [...currentProducts, product]);
    }
  };

  useEffect(() => {
    if (isFetched) {
      return;
    }

    fetchUser();

    isFetched = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!products) {
    return <></>;
  }

  return (
    <>
      <div className="profile__orders-row button--text" onClick={handleClick}>
        <p className="profile__orders-column button-text">{order.id}</p>
        <div className="profile__orders-row profile__orders-row-group">
          <p className="profile__orders-column small-text">{order.date}</p>
          <p className="profile__orders-column small-text">{order.status}</p>
          <p className="profile__orders-column small-text">
            {order.total_price} грн
          </p>
        </div>
      </div>

      {showDetails && (
        <Fragment>
          {order.items.map((item, index) => {
            if (!products[index]) {
              return;
            }

            return (
              <div className="profile__orders-row" key={index}>
                <div className="profile__order-details">
                  <h4>{products[index].name}</h4>
                  <div className="profile__order-details-info">
                    <p className="small-text">{item.quantity} од.</p>
                    <p className="body-text">{item.total_price} грн</p>
                  </div>
                </div>
              </div>
            );
          })}

          {isAdmin && !!user && (
            <div className="profile__orders-row">
              <div className="profile__order-credentials">
                <h4>Данні покупця:</h4>
                <div className="profile__order-credentials-info">
                  <p className="small-text">{user.full_name}</p>
                  <p className="small-text">{user.phone_number}</p>
                  <p className="small-text">{user.email}</p>
                </div>
              </div>
            </div>
          )}
        </Fragment>
      )}
    </>
  );
};
