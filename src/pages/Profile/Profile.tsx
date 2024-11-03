import { useEffect, useState } from "react";
import { getOrders, profile } from "../../utils/api";
import { ProfileOrders } from "./components/ProfileOrders";
import { ProfilePersonalInfo } from "./components/ProfilePersonalInfo";
import "./Profile.scss";
import { User } from "../../types/User";
import { Order } from "../../types/Order";

export const Profile = () => {
  const [user, setUser] = useState<User>();
  const [orders, setOrders] = useState<Order[]>([]);

  const fetchUser = async () => {
    setUser(await profile());
  };

  const fetchOrders = async () => {
    setOrders(await getOrders());
  };

  console.log(user);
  console.log(orders);

  useEffect(() => {
    fetchUser();
    fetchOrders();
  }, []);

  if (!user) {
    return <></>;
  }

  return (
    <div className="profile">
      <div className="profile__top">
        <h2>Профіль</h2>
        <p className="body-text">Ласкаво просимо, {user.full_name}!</p>
      </div>

      {!!user.is_staff && (
        <button className="profile__new-product-button">
          Створти новий продукт
          <img src="/icons/plus_white.svg" alt="Plus icon" />
        </button>
      )}

      <ProfileOrders isAdmin={user.is_staff} orders={orders} />

      {!user.is_staff && <ProfilePersonalInfo />}
    </div>
  );
};
