import React, { useState } from "react";
import { resetPassword } from "../../api/api";
import "./ResetPassword.scss";

export const ResetPassword = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");

    if (!email || typeof email !== "string") {
      console.log(email);
      return;
    }

    const result = resetPassword(formData);

    console.log(result);

    setIsSent(true);
  };

  return (
    <div className="reset-password centered">
      {!isSent ? (
        <div className="reset-password__form">
          <div className="reset-password__form-top">
            <h2>Відновлення пароля</h2>
            <p className="body-text">Введіть свою електорну пошту</p>
          </div>

          <form onSubmit={handleSubmit}>
            <input name="email" type="text" placeholder="Email" required />
            <button>Продовжити</button>
          </form>
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
