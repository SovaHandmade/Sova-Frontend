import { useState } from "react";
import { login, register } from "../../utils/api";
import "./AuthForm.scss";
import classNames from "classnames";
import { Popup } from "../Popup";

interface FormFields {
  name: HTMLInputElement;
  phone_number: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
}

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupSuccess, setPopupSuccess] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupSubtitle, setPopupSubtitle] = useState("");

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

    if (isLogin) {
      if (!email.value || !password.value) {
        return;
      }

      try {
        await login(email.value, password.value);

        window.location.href = "/profile";
      } catch {
        addPopup(false, "Помилка", "Неправильний пароль");
      }
    } else {
      if (
        !name.value ||
        !phone_number.value ||
        !email.value ||
        !password.value
      ) {
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
            <input
              type="text"
              name="name"
              placeholder="Ім'я"
              required
              maxLength={32}
            />
            <input
              type="tel"
              name="phone_number"
              placeholder="Номер телефону"
              required
            />
          </>
        )}
        <input type="email" name="email" placeholder="Е-пошта" required />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          required
          maxLength={64}
        />

        <p className="auth-form__form-reset button-text">Забули пароль?</p>

        <button>Увійти</button>
      </form>
    </div>
  );
};
