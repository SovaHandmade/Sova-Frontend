import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../api/api";
import "./ResetPassword.scss";
import { Popup } from "../../components/Popup";
import { setNewPassword, validateResetToken } from "../../api/authApi";
import { InputWithLabel } from "../../components/InputWithLabel";

export const ResetPassword = () => {
  const [isSent, setIsSent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupSubtitle, setPopupSubtitle] = useState("");
  const [popupIsSuccess, setPopupIsSuccess] = useState(true);

  const [firstPassword, setFirstPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const { token } = useParams();

  const navigate = useNavigate();

  const handleEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");

    if (!email || typeof email !== "string") {
      return;
    }

    const errors = {
      email: validateEmail(email) || "",
    };

    if (errors.email) {
      setEmailError(errors.email);
      return;
    }

    try {
      await resetPassword(email);

      setIsSent(true);
    } catch {
      setShowPopup(true);
      setPopupTitle("Помилка");
      setPopupSubtitle("Виникла помилка при надсиланні");
      setPopupIsSuccess(false);
    }
  };

  const handleNewPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!token) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    const newPassword = formData.get("newPassword") as string;
    const newPasswordRepeat = formData.get("newPasswordRepeat") as string;

    if (!newPassword || !newPasswordRepeat) {
      return;
    }

    const errors = {
      password: newPasswordRepeat && validateSecondPassword(newPasswordRepeat),
    };

    if (errors.password) {
      setPasswordError(errors.password);

      return;
    }

    try {
      await setNewPassword(newPassword, token);

      setShowPopup(true);
      setPopupTitle("Пароль успішно знінений");
      setPopupSubtitle("Ви можете перейти до входу в аккаунт");
      setPopupIsSuccess(true);
    } catch (exception) {
      let error = "Виникла помилка при зміні паролю";

      if (exception.response.data.password) {
        error = exception.response.data.password;
      }

      setShowPopup(true);
      setPopupTitle("Помилка");
      setPopupSubtitle(error);
      setPopupIsSuccess(false);
    }
  };

  const handleContinue = () => {
    navigate("/auth");
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const validateEmail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(input)) {
      return "Некоректна пошта";
    }

    setEmailError("");

    return;
  };

  const validateFirstPassword = (input: string) => {
    if (input.length < 8) {
      return "Пароль занадто короткий";
    }

    setFirstPassword(input);

    setPasswordError("");

    return;
  };

  const validateSecondPassword = (input: string) => {
    if (input !== firstPassword) {
      return "Обидва паролі повинні співпадати";
    }

    setPasswordError("");

    return;
  };

  const checkToken = async () => {
    if (!token) {
      return;
    }

    try {
      await validateResetToken(token);
    } catch {
      navigate("/");
    }
  };

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div className="reset-password centered">
      {showPopup ? (
        <Popup
          title={popupTitle}
          subtitle={popupSubtitle}
          isSuccess={popupIsSuccess}
          buttonCallback={handleClosePopup}
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
                validateFunction={validateEmail}
                required={true}
              />
              <button>Продовжити</button>
            </form>
          ) : (
            <form onSubmit={handleNewPassword}>
              <InputWithLabel
                name="newPassword"
                type="password"
                placeholder="Новий пароль"
                errorText=""
                validateFunction={validateFirstPassword}
                required
              />
              <InputWithLabel
                name="newPasswordRepeat"
                type="password"
                placeholder="Повторіть новий пароль"
                errorText={passwordError}
                validateFunction={validateSecondPassword}
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
          <button
            className="reset-password__sent-button"
            onClick={handleContinue}
          >
            Продовжити
          </button>
        </>
      )}
    </div>
  );
};
