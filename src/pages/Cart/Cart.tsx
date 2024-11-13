import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { CartProduct } from "../../components/CartProduct";
import { calculateTotal } from "../../utils/calculateTotal";
import { getCart, removeFromLocalCart } from "../../api/api";
import { CartItemType } from "../../types/CartItemType";
import "./Cart.scss";

export const Cart = () => {
  const [cart, setCart] = useState<CartItemType[]>();

  const updateCart = () => {
    setCart(getCart());
  };

  const loadCart = () => {
    const currentCart = getCart();

    for (const item of currentCart) {
      if (item.toRemove) {
        removeFromLocalCart(item.product_id);
      }
    }

    setCart(currentCart.filter((item) => !item.toRemove));
  };

  useEffect(() => {
    loadCart();
  }, []);

  if (!cart) {
    return <></>;
  }

  return (
    <div className="cart">
      <BackButton />

      <div className="cart__container">
        <h2>Корзина</h2>

        {cart.length ? (
          <>
            <div className="cart__products">
              {cart.map((cartItem, index) => (
                <CartProduct
                  cartItem={cartItem}
                  key={index}
                  updateCallback={updateCart}
                />
              ))}
              <div className="cart__total">
                <p className="explanation-text cart__total-text">
                  Загалом без вартості доставки:
                </p>

                <h2 className="cart__total-amount">
                  {calculateTotal(cart)} grn
                </h2>
              </div>
            </div>

            <div className="cart__buttons">
              <Link
                to="/shop"
                className="cart__shopping-button button button--secondary"
              >
                Продовжити покупки
                <img src="/icons/basket.svg" alt="Basket icon" />
              </Link>
              <Link to="/order" className="cart__order-button button">
                Замовити
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
