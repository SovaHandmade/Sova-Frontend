import "./AuthForm.scss";

export const AuthForm = () => {
  return (
    <div className="auth-form">
      <div className="auth-form__options">
        <button className="auth-form__option auth-form__-signup">
          Я новий покупець
        </button>
        <button className="auth-form__option auth-form__login auth-form__option--selected">
          Я зареєстрований
        </button>
      </div>

      <form action="" className="auth-form__form">
        <input type="email" placeholder="Е-пошта" />
        <input type="password" placeholder="Пароль" />

        <p className="auth-form__form-reset button-text">Забули пароль?</p>

        <button>Увійти</button>
      </form>
    </div>
  );
};
