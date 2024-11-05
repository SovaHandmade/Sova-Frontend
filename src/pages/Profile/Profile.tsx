import { useEffect, useState } from "react";
import { getOrders, isLoggedIn, profile } from "../../utils/api";
import { ProfileOrders } from "./components/ProfileOrders";
import { ProfilePersonalInfo } from "./components/ProfilePersonalInfo";
import { User } from "../../types/User";
import { Order } from "../../types/Order";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.scss";

export const Profile = () => {
  const [user, setUser] = useState<User>();
  const [orders, setOrders] = useState<Order[]>([]);
  const navigate = useNavigate();

  const fetchUser = async () => {
    setUser(await profile());
  };

  const fetchOrders = async () => {
    setOrders(await getOrders());
  };

  console.log(user);
  console.log(orders);

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/auth");
    }

    fetchUser();
    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Link
          className="profile__new-product-button button"
          to={"/product/create"}
        >
          Створти новий продукт
          <img src="/icons/plus_white.svg" alt="Plus icon" />
        </Link>
      )}

      <ProfileOrders isAdmin={user.is_staff} orders={orders} />

      {!user.is_staff && <ProfilePersonalInfo />}
    </div>
  );
};
