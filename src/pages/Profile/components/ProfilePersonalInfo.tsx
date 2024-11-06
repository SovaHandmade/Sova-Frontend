import React from "react";
import { User } from "../../../types/User";
import { updateProfile, logout } from "../../../api/api";
import "./ProfilePersonalInfo.scss";
import { useNavigate } from "react-router-dom";

type Props = {
  user: User;
};

export const ProfilePersonalInfo: React.FC<Props> = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();

    navigate("/");
  };

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const values = new FormData(event.currentTarget);
    const updatedValues: Partial<User> = {};

    if (values.get("full_name") !== user.full_name) {
      updatedValues.full_name = values.get("full_name") as string;
    }

    if (values.get("phone_number") !== user.phone_number) {
      updatedValues.phone_number = values.get("phone_number") as string;
    }

    if (values.get("email") !== user.email) {
      updatedValues.email = values.get("email") as string;
    }

    const result = await updateProfile(updatedValues);

    console.log(result);
  };

  return (
    <div className="profile__personal-info">
      <h3 className="profile__personal-info-title">Персональна інформація</h3>
      <form className="profile__personal-info-form" onSubmit={handleUpdate}>
        <input
          name="full_name"
          placeholder="Повне ім'я"
          type="text"
          defaultValue={user.full_name}
        />
        <input
          name="phone_number"
          placeholder="Телефон"
          type="tel"
          defaultValue={user.phone_number}
        />
        <input
          name="email"
          placeholder="Е-пошта"
          type="email"
          defaultValue={user.email}
        />
        <input name="password" placeholder="Зміна паролю" type="password" />
        <button type="submit" className="profile__personal-info-save-button">
          Зберегти
        </button>
      </form>

      <button
        className="profile__personal-info-logout-button"
        onClick={handleLogout}
      >
        Вийти
      </button>
    </div>
  );
};
