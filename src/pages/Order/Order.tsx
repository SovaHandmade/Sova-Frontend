import { useEffect, useRef, useState } from "react";
import { AuthForm } from "../../components/AuthForm";
import { BackButton } from "../../components/BackButton";
import {
  clearCart,
  createOrder,
  getCart,
  getProduct,
  isLoggedIn,
} from "../../api/api";
import { calculateTotal } from "../../utils/calculateTotal";
import "./Order.scss";
import { ProductType } from "../../types/ProductType";
import { Popup } from "../../components/Popup";
import { useNavigate } from "react-router-dom";

export const Order = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupSuccess, setPopupSuccess] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupSubtitle, setPopupSubtitle] = useState("");
  const navigate = useNavigate();
  const isFetched = useRef(false);

  const cart = getCart();

  const fetchProducts = async () => {
    for (const cartItem of cart) {
      try {
        const product = await getProduct(cartItem.product_id);

        setProducts((currentProducts) => [...currentProducts, product]);
      } catch {
        console.log("Error when fetching product_id ", cartItem.product_id);
      }
    }

    isFetched.current = true;
  };

  const handleOrder = async () => {
    const result = await createOrder(cart);

    if (result) {
      setShowPopup(true);
      setPopupTitle("Дякуємо за замовлення!");
      setPopupSubtitle(
        "Ми зв’яжемося з вами найближчим часом для підтвердження."
      );
      setPopupSuccess(true);
    } else {
      setShowPopup(true);
      setPopupTitle("Помилка");
      setPopupSubtitle("Виникла помилка під час замовлення");
      setPopupSuccess(false);
    }
  };

  useEffect(() => {
    if (isFetched.current) {
      return;
    }
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePopup = () => {
    setShowPopup(false);
    clearCart();
    navigate("/shop");
  };

  if (!isFetched.current) {
    return <></>;
  }

  return (
    <div className="order">
      <BackButton />

      <div className="order__summary">
        <h2>Ваше замовлення</h2>

        {showPopup && (
          <Popup
            title={popupTitle}
            subtitle={popupSubtitle}
            isSuccess={popupSuccess}
            buttonCallback={handlePopup}
          />
        )}

        <div className="order__products">
          {cart.map((cartItem, index) => (
            <div className="order__product" key={index}>
              <h4>{products[index].name}</h4>
              <div className="order__product-info">
                <p className="small-text order__product-value">
                  {cartItem.quantity} од.
                </p>
                <p className="body-text order__product-value">
                  {cartItem.price * cartItem.quantity} грн
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="order__total">
          <p className="order__total-text explanation-text">
            Разом без вартості доставки:
          </p>
          <h2 className="order__total-amount">{calculateTotal(cart)} grn</h2>
        </div>
      </div>

      <p className="order__contact-notice body-text">
        Шановний клієнте, ми зв’яжемося з вами, щоб підтвердити адресу доставки
        та способи оплати.
      </p>

      <div className="order__form">
        {!isLoggedIn() ? (
          <AuthForm callback={handleOrder} buttonText="Confirm order" />
        ) : (
          <button className="order__form-button" onClick={handleOrder}>
            Підтвердити замовлення
          </button>
        )}
      </div>
    </div>
  );
};
