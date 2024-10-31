import { AuthForm } from "../../components/AuthForm";
import { BackButton } from "../../components/BackButton";
import "./Order.scss";

export const Order = () => {
  return (
    <div className="order">
      <BackButton />

      <div className="order__summary">
        <h2>Ваше замовлення</h2>

        <div className="order__products">
          <div className="order__product">
            <h4>Осінній віночок</h4>
            <div className="order__product-info">
              <p className="small-text order__product-value">2 од.</p>
              <p className="body-text order__product-value">1600 грн</p>
            </div>
          </div>

          <div className="order__product">
            <h4>Осінній віночок</h4>
            <div className="order__product-info">
              <p className="small-text order__product-nowrap">2 од.</p>
              <p className="body-text order__product-nowrap">1600 грн</p>
            </div>
          </div>
        </div>

        <div className="order__total">
          <p className="order__total-text explanation-text">
            Разом без вартості доставки:
          </p>
          <h2 className="order__total-amount">2600 грн</h2>
        </div>
      </div>

      <p className="order__contact-notice body-text">
        Шановний клієнте, ми зв’яжемося з вами, щоб підтвердити адресу доставки
        та способи оплати.
      </p>

      <div className="order__form">
        <AuthForm />
      </div>
    </div>
  );
};
