import React, { Fragment, useEffect, useState } from "react";
import "./ProfileOrderItem.scss";
import { Order } from "../../../types/Order";
import { User } from "../../../types/User";
import { getProduct, getUser, updateStatus } from "../../../api/api";
import { ProductType } from "../../../types/ProductType";
import { Link } from "react-router-dom";

type Props = {
  isAdmin: boolean;
  order: Order;
};

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
      const serverUser = await getUser(order.user);

      console.log(serverUser);

      setUser(serverUser);

      return;
    }
  };

  const fetchProducts = async () => {
    for (const item of order.items) {
      const product = await getProduct(item.product_id);

      setProducts((currentProducts) => [...currentProducts, product]);
    }
  };

  const handleStatusChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (
      !event.currentTarget.value ||
      !event.currentTarget.dataset["order_id"]
    ) {
      return;
    }

    await updateStatus(
      event.currentTarget.dataset["order_id"],
      event.currentTarget.value
    );

    window.location.reload();
  };

  const stopPropagation = (
    event: React.MouseEvent<HTMLSelectElement, MouseEvent>
  ) => {
    event?.stopPropagation();
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!products) {
    return <></>;
  }

  return (
    <>
      <div className="profile__orders-row ">
        <p
          className="profile__orders-column button-text button--text"
          onClick={handleClick}
        >
          {order.id}
        </p>
        <div className="profile__orders-row profile__orders-row-group">
          <p className="profile__orders-column small-text">{order.date}</p>
          <p className="profile__orders-column small-text">
            {isAdmin ? (
              <select
                className="profile__order-status-select button--text"
                name="status"
                defaultValue={order.status}
                data-order_id={order.id}
                onClick={stopPropagation}
                onChange={handleStatusChange}
              >
                <option value="Processing">Processing</option>
                <option value="In process">In process</option>
                <option value="Done">Done</option>
              </select>
            ) : (
              order.status
            )}
          </p>
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
                  <Link
                    to={`/product/${products[index].id}`}
                    className="profile__order-details-link button--text"
                  >
                    <h4>{products[index].name}</h4>
                  </Link>
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
