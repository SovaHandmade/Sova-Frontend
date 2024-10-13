import { BackButton } from "../../components/BackButton";
import { CartProduct } from "../../components/CartProduct";
import "./Cart.scss";

export const Cart = () => {
  return (
    <div className="cart">
      <BackButton />

      <div className="cart__container">
        <h2>Shopping cart</h2>

        <div className="cart__products">
          <CartProduct />
          <CartProduct />
          <div className="cart__total">
            <p className="explanation-text cart__total-text">
              Total without delivery:
            </p>

            <h2>2600 grn</h2>
          </div>
        </div>

        <div className="cart__buttons">
          <button className="cart__shopping-button button-text">
            Continue shopping
            <img src="icons/basket.svg" alt="Basket icon" />
          </button>
          <button className="cart__order-button button-text">Order</button>
        </div>
      </div>
    </div>
  );
};
