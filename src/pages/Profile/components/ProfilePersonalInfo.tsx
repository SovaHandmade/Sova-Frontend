import { logout } from "../../../utils/api";
import "./ProfilePersonalInfo.scss";

export const ProfilePersonalInfo = () => {
  const handleLogout = async () => {
    await logout();

    window.location.href = "/";
  };

  return (
    <div className="profile__personal-info">
      <h3 className="profile__personal-info-title">Персональна інформація</h3>
      <form className="profile__personal-info-form" action="">
        <input placeholder="Повне ім'я" type="text" />
        <input placeholder="Телефон" type="tel" />
        <input placeholder="Е-пошта" type="email" />
        <input placeholder="Пароль" type="password" />
        <input placeholder="Зміна паролю" type="password" />
      </form>

      <button className="profile__personal-info-save-button">Зберегти</button>

      <button
        className="profile__personal-info-logout-button"
        onClick={handleLogout}
      >
        Вийти
      </button>
    </div>
  );
};
