import { AuthForm } from "../../components/AuthForm";
import "./AuthPage.scss";

export const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-page__container">
        <h2 className="auth-page__title">Вхід</h2>
        <AuthForm />
      </div>
    </div>
  );
};
