import React, { useState } from "react";
import { User } from "../../../types/User";
import { updateProfile, logout } from "../../../api/api";
import "./ProfilePersonalInfo.scss";
import { useNavigate } from "react-router-dom";
import { InputWithLabel } from "../../../components/InputWithLabel";

type Props = {
  user: User;
};

export const ProfilePersonalInfo: React.FC<Props> = ({ user }) => {
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");

  const validateName = (input: string) => {
    if (input.length < 2) {
      return "Name is too short";
    }

    setNameError("");

    return;
  };

  const validatePhoneNumber = (input: string) => {
    const phoneRegex = /^\+380\d{9}$/;

    if (!phoneRegex.test(input)) {
      return "Phone number is incorrect";
    }

    setPhoneError("");

    return;
  };

  const validateEmail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(input)) {
      return "Email is incorrect";
    }

    setEmailError("");

    return;
  };

  const validatePassword = (input: string) => {
    if (input.length < 8) {
      return "Use at least 8 characters";
    }

    setPasswordError("");

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

    const result = await updateProfile(updatedValues);

    console.log(result);
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
        />
        <InputWithLabel
          name="password"
          placeholder="Зміна паролю"
          type="password"
          errorText={passwordError}
          validateFunction={validatePassword}
        />
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
