import React, { Fragment, useEffect, useState } from "react";
import "./ProfileOrderItem.scss";
import { Order } from "../../../types/Order";
import { User } from "../../../types/User";
import { getProduct, getUser, profile } from "../../../api/api";
import { ProductType } from "../../../types/ProductType";

type Props = {
  isAdmin: boolean;
  order: Order;
};

export const ProfileOrderItem: React.FC<Props> = ({ isAdmin, order }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [user, setUser] = useState<User>();

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  const fetchUser = async () => {
    if (isAdmin) {
      setUser(await getUser(order.user));
      return;
    }

    setUser(await profile());
  };

  const fetchProducts = async () => {
    for (const item of order.items) {
      const product = await getProduct(item.product_id);

      setProducts((currentProducts) => [...currentProducts, product]);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchProducts();
  }, []);

  if (!user || !products) {
    return <></>;
  }

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
          {order.items.map((item, index) => {
            console.log(products, order.items);
            return (
              <div className="profile__orders-row" key={index}>
                <div className="profile__order-details">
                  <h4>{products[index].name}</h4>
                  <div className="profile__order-details-info">
                    <p className="small-text">{item.quantity} units</p>
                    <p className="body-text">{item.total_price} grn</p>
                  </div>
                </div>
              </div>
            );
          })}

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
        </Fragment>
      )}
    </>
  );
};
