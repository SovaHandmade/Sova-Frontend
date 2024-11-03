import { useState } from "react";
import { BackButton } from "../../components/BackButton";
import { CartProduct } from "../../components/CartProduct";
import { getCart } from "../../utils/api";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { calculateTotal } from "../../utils/calculateTotal";

export const Cart = () => {
  const [cart, setCart] = useState(getCart());

  const update = () => {
    setCart(getCart());
  };

  return (
    <div className="cart">
      <BackButton />

      <div className="cart__container">
        <h2>Shopping cart</h2>

        {cart.length ? (
          <>
            <div className="cart__products">
              {cart.map((cartItem, index) => (
                <CartProduct
                  cartItem={cartItem}
                  key={index}
                  updateCallback={update}
                />
              ))}
              <div className="cart__total">
                <p className="explanation-text cart__total-text">
                  Total without delivery:
                </p>

                <h2>{calculateTotal(cart)} grn</h2>
              </div>
            </div>

            <div className="cart__buttons">
              <Link to="/shop" className="cart__shopping-button button">
                Continue shopping
                <img src="/icons/basket.svg" alt="Basket icon" />
              </Link>
              <Link to="/order" className="cart__order-button button">
                Order
              </Link>
            </div>
          </>
        ) : (
          <div className="cart__empty">
            <h1 className="cart__empty-text">Немає доданих товарів.</h1>
            <Link to="/shop" className="cart__empty-button button">
              Перейти до каталогу товарів
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
