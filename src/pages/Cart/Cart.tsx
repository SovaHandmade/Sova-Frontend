import { BackButton } from "../../components/BackButton";
import "./Cart.scss";

export const Cart = () => {
  return (
    <div className="cart">
      <BackButton />

      <div className="cart__container">
        <h2>Shopping cart</h2>

        <div className="cart__products">
          <div className="cart__product">
            <img
              src="product-photo/1.jpg"
              alt="Product photo"
              className="cart__product-photo"
            />
            <div className="cart__product-info">
              <h3 className="cart__product-name">Autumn wreath</h3>
              <div className="cart__product-info-entry">
                <h4 className="cart__product-info-entry-name">Color:</h4>
                <p className="small-text cart__product-info-entry-value">
                  You can choose custom colors when we contact.
                </p>
              </div>
            </div>
            <div className="cart__product-order-info">
              <img
                src="icons/trash.svg"
                alt="Trash icon"
                className="cart__product-order-remove-icon"
              />

              <div className="cart__product-order-info-quantity">
                <img
                  src="icons/plus.svg"
                  alt="Plus icon  "
                  className="cart__product-order-plus-icon"
                />
                <p className="body-text">2</p>
                <img
                  src="icons/minus.svg"
                  alt="Minus icon  "
                  className="cart__product-order-minus-icon"
                />
              </div>
              <h3 className="product__price">1600 grn</h3>
            </div>
          </div>
          <div className="cart__product">
            <img
              src="product-photo/1.jpg"
              alt="Product photo"
              className="cart__product-photo"
            />
            <div className="cart__product-info">
              <h3 className="cart__product-name">Autumn wreath</h3>
              <div className="cart__product-info-entry">
                <h4 className="cart__product-info-entry-name">Color:</h4>
                <p className="small-text cart__product-info-entry-value">
                  You can choose custom colors when we contact.
                </p>
              </div>
            </div>
            <div className="cart__product-order-info">
              <img
                src="icons/trash.svg"
                alt="Trash icon"
                className="cart__product-order-remove-icon"
              />

              <div className="cart__product-order-info-quantity">
                <img
                  src="icons/plus.svg"
                  alt="Plus icon  "
                  className="cart__product-order-plus-icon"
                />
                <p className="body-text">2</p>
                <img
                  src="icons/minus.svg"
                  alt="Minus icon  "
                  className="cart__product-order-minus-icon"
                />
              </div>
              <h3 className="product__price">1600 grn</h3>
            </div>
          </div>
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
