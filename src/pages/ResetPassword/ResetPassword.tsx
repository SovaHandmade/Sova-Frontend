import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../api/api";
import "./ResetPassword.scss";
import { Popup } from "../../components/Popup";
import { setNewPassword } from "../../api/authApi";
import { InputWithLabel } from "../../components/InputWithLabel";

export const ResetPassword = () => {
  const [isSent, setIsSent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { token } = useParams();

  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const handleEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");

    if (!email || typeof email !== "string") {
      console.log(email);
      return;
    }

    const errors = {
      email: validateEmail(email) || "",
    };

    if (errors.email) {
      setEmailError(errors.email);
      return;
    }

    const result = resetPassword(formData);

    console.log(result);

    setIsSent(true);
  };

  const handleNewPassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const new_password1 = formData.get("newPassword");
    const new_password2 = formData.get("newPasswordRepeat");

    if (!new_password1 || !new_password2) {
      console.log(new_password1, new_password2);
      return;
    }

    const result = setNewPassword(formData);

    console.log(result);

    setShowPopup(true);
  };

  const handleClose = () => {
    navigate("/auth");
  };

  const validateEmail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(input)) {
      return "Email is incorrect";
    }

    setEmailError("");

    return;
  };

  return (
    <div className="reset-password centered">
      {showPopup ? (
        <Popup
          title="Пароль успішно знінений"
          subtitle="Ви можете перейти до входу в аккаунт"
          isSuccess={true}
          buttonCallback={handleClose}
        />
      ) : !isSent ? (
        <div className="reset-password__form">
          <div className="reset-password__form-top">
            <h2>Відновлення пароля</h2>
            <p className="body-text">
              {!token ? "Введіть свою електорну пошту" : "Введіть новий пароль"}
            </p>
          </div>

          {!token ? (
            <form onSubmit={handleEmail}>
              <InputWithLabel
                name="email"
                type="text"
                placeholder="Email"
                errorText={emailError}
                validateFunction={() => {}}
                required={true}
              />
              <button>Продовжити</button>
            </form>
          ) : (
            <form onSubmit={handleNewPassword}>
              <input
                name="newPassword"
                type="password"
                placeholder="Password"
                required
              />
              <input
                name="newPasswordRepeat"
                type="password"
                placeholder="Repeat password"
                required
              />
              <button>Зберегти</button>
            </form>
          )}
        </div>
      ) : (
        <>
          <div className="reset-password__sent">
            <div className="reset-password__sent-top">
              <h2>Перевірте вашу електронну пошту</h2>
              <p className="body-text">
                Ми надіслали вам лист із посиланням для зміни пароля. Будь
                ласка, перейдіть за посиланням у листі, щоб завершити процес
                відновлення доступу.
              </p>
            </div>
          </div>
          <button className="reset-password__sent-button">Продовжити</button>
        </>
      )}
    </div>
  );
};
