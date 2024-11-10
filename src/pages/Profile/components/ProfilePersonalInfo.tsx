import React, { useState } from "react";
import { User } from "../../../types/User";
import { updateProfile, logout } from "../../../api/api";
import "./ProfilePersonalInfo.scss";
import { Link, useNavigate } from "react-router-dom";
import { InputWithLabel } from "../../../components/InputWithLabel";

type Props = {
  user: User;
};

export const ProfilePersonalInfo: React.FC<Props> = ({ user }) => {
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");

  const validateName = (input: string) => {
    if (input.length < 2) {
      return "Ім'я занадто коротке";
    }

    setNameError("");

    return;
  };

  const validatePhoneNumber = (input: string) => {
    const phoneRegex = /^\+380\d{9}$/;

    if (!phoneRegex.test(input)) {
      return "Некоректний номер телефону. Формат: +380000000000";
    }

    setPhoneError("");

    return;
  };

  const validateEmail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(input)) {
      return "Некоректна пошта";
    }

    setEmailError("");

    return;
  };

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

    const errors = {
      email: (updatedValues.email && validateEmail(updatedValues.email)) || "",
      name:
        (updatedValues.full_name && validateName(updatedValues.full_name)) ||
        "",
      phone:
        (updatedValues.phone_number &&
          validatePhoneNumber(updatedValues.phone_number)) ||
        "",
    };

    if (!!errors.email || !!errors.name || !!errors.phone) {
      setEmailError(errors.email);
      setNameError(errors.name);
      setPhoneError(errors.phone);

      console.log(errors);

      return;
    }

    await updateProfile(updatedValues);

    setEmailError("");
    setNameError("");
    setPhoneError("");

    window.location.reload();
  };

  return (
    <div className="profile__personal-info">
      <h3 className="profile__personal-info-title">Персональна інформація</h3>
      <form className="profile__personal-info-form" onSubmit={handleUpdate}>
        <InputWithLabel
          name="full_name"
          placeholder="Повне ім'я"
          type="text"
          errorText={nameError}
          validateFunction={validateName}
          defaultValue={user.full_name}
          maxLength={64}
        />
        <InputWithLabel
          name="phone_number"
          placeholder="Телефон"
          type="tel"
          errorText={phoneError}
          validateFunction={validatePhoneNumber}
          defaultValue={user.phone_number}
        />
        <InputWithLabel
          name="email"
          placeholder="E-mail"
          type="email"
          errorText={emailError}
          validateFunction={validateEmail}
          defaultValue={user.email}
          maxLength={64}
        />
        <Link
          to="/auth/reset"
          className="profile__personal-info-change-password button button--secondary"
        >
          Зміна паролю
        </Link>
        <button type="submit">Зберегти</button>
      </form>

      <button
        className="profile__personal-info-logout-button button--text"
        onClick={handleLogout}
      >
        Вийти
      </button>
    </div>
  );
};
