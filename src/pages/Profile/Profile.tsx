import { ProfileOrders } from "./components/ProfileOrders";
import { ProfilePersonalInfo } from "./components/ProfilePersonalInfo";
import "./Profile.scss";

type Props = {
  isAdmin?: boolean;
};

export const Profile: React.FC<Props> = ({ isAdmin = false }) => {
  return (
    <div className="profile">
      <div className="profile__top">
        <h2>Профіль</h2>
        <p className="body-text">Ласкаво просимо, Brad Pitt!</p>
      </div>

      {!!isAdmin && (
        <button className="profile__new-product-button">
          Створти новий продукт
          <img src="/icons/plus_white.svg" alt="Plus icon" />
        </button>
      )}

      <ProfileOrders isAdmin={isAdmin} orders={[1]} />

      {!isAdmin && <ProfilePersonalInfo />}
    </div>
  );
};
