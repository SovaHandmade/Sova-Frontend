import "./ResetPassword.scss";

const SENT = true;

export const ResetPassword = () => {
  return (
    <div className="reset-password centered">
      {!SENT ? (
        <div className="reset-password__form">
          <div className="reset-password__form-top">
            <h2>Відновлення пароля</h2>
            <p className="body-text">Введіть свою електорну пошту</p>
          </div>

          <form action="">
            <input type="text" placeholder="Email" required />
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
