import React, { useState } from "react";
import { login, register } from "../../api/api";
import "./AuthForm.scss";
import classNames from "classnames";
import { Popup } from "../Popup";
import { Link, useNavigate } from "react-router-dom";
import { InputWithLabel } from "../InputWithLabel";

interface FormFields {
  name: HTMLInputElement;
  phone_number: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
}

type Props = {
  callback?: () => void;
  buttonText?: string;
};

export const AuthForm: React.FC<Props> = ({ callback, buttonText }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupSuccess, setPopupSuccess] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupSubtitle, setPopupSubtitle] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");

  const navigate = useNavigate();

  const addPopup = (isSuccess: boolean, title: string, subtitle: string) => {
    setShowPopup(true);
    setPopupSuccess(isSuccess);
    setPopupTitle(title);
    setPopupSubtitle(subtitle);
  };

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const { name, phone_number, email, password } =
      form.elements as unknown as FormFields;

    const errors = {
      email: validateEmail(email.value) || "",
      password: validatePassword(password.value) || "",
      name: (!isLogin && validateName(name.value)) || "",
      phone: (!isLogin && validatePhoneNumber(phone_number.value)) || "",
    };

    if (isLogin) {
      if (
        !email.value ||
        !password.value ||
        !!errors.email ||
        !!errors.password
      ) {
        setEmailError(errors.email);
        setPasswordError(errors.password);

        console.log(errors);

        return;
      }

      try {
        await login(email.value, password.value);

        if (callback) {
          callback();
        } else {
          navigate("/profile");
        }
      } catch {
        addPopup(false, "Помилка", "Неправильний пароль");
      }
    } else {
      if (
        !name.value ||
        !phone_number.value ||
        !email.value ||
        !password.value ||
        !!errors.email ||
        !!errors.password ||
        !!errors.name ||
        !!errors.phone
      ) {
        setEmailError(errors.email);
        setPasswordError(errors.password);
        setNameError(errors.name);
        setPhoneError(errors.phone);

        return;
      }

      try {
        await register(
          name.value,
          phone_number.value,
          email.value,
          password.value
        );

        addPopup(
          true,
          "Дякуємо за реєстрацію!",
          "Ваш обліковий запис створено."
        );
      } catch {
        addPopup(true, "Помилка", "Виникла помилка при реєстрації");
      }
    }
  };

  const handleLoginButton = () => {
    setIsLogin(true);
  };

  const handleRegisterButton = () => {
    setIsLogin(false);
  };

  const closePopup = () => {
    setShowPopup(false);

    if (callback) {
      callback();
    } else {
      navigate("/profile");
    }
  };

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

  return (
    <div className="auth-form">
      {showPopup && (
        <Popup
          title={popupTitle}
          subtitle={popupSubtitle}
          isSuccess={popupSuccess}
          buttonCallback={closePopup}
        />
      )}
      <div className="auth-form__options">
        <button
          className={classNames("auth-form__option auth-form__register", {
            "auth-form__option--selected": !isLogin,
          })}
          onClick={handleRegisterButton}
        >
          Я новий покупець
        </button>
        <button
          className={classNames("auth-form__option auth-form__login", {
            "auth-form__option--selected": isLogin,
          })}
          onClick={handleLoginButton}
        >
          Я зареєстрований
        </button>
      </div>

      <form action="" className="auth-form__form" onSubmit={handleForm}>
        {!isLogin && (
          <>
            <InputWithLabel
              type="text"
              name="name"
              placeholder="Ім'я"
              errorText={nameError}
              validateFunction={validateName}
              required={true}
              maxLength={32}
            />
            <InputWithLabel
              type="tel"
              name="phone_number"
              placeholder="Номер телефону"
              errorText={phoneError}
              validateFunction={validatePhoneNumber}
              required={true}
            />
          </>
        )}
        <InputWithLabel
          type="email"
          name="email"
          placeholder="Е-пошта"
          errorText={emailError}
          validateFunction={validateEmail}
          required={true}
        />
        <InputWithLabel
          type="password"
          name="password"
          placeholder="Пароль"
          errorText={passwordError}
          validateFunction={validatePassword}
          required={true}
          maxLength={64}
        />

        {!!isLogin && (
          <Link to="/auth/reset" className="auth-form__form-reset button-text">
            Забули пароль?
          </Link>
        )}

        <button>{buttonText || isLogin ? "Увійти" : "Зареєструватись"}</button>
      </form>
    </div>
  );
};
