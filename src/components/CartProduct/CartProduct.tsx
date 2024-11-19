import React, { useEffect, useState } from "react";
import { ProductType } from "../../types/ProductType";
import { getProduct, updateInLocalCart } from "../../api/api";
import { CartItemType } from "../../types/CartItemType";
import "./CartProduct.scss";
import classNames from "classnames";
import { Loader } from "../Loader";

type Props = {
  cartItem: CartItemType;
  updateCallback: () => void;
};

export const CartProduct: React.FC<Props> = ({ cartItem, updateCallback }) => {
  const [product, setProduct] = useState<ProductType>();
  const [toRemove, setToRemove] = useState(false);

  const fetchProduct = async () => {
    setProduct(await getProduct(cartItem.product_id));
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePlus = () => {
    updateInLocalCart(cartItem.product_id, { quantity: cartItem.quantity + 1 });
    updateCallback();
  };

  const handleMinus = () => {
    if (cartItem.quantity === 1) {
      return;
    }

    updateInLocalCart(cartItem.product_id, { quantity: cartItem.quantity - 1 });
    updateCallback();
  };

  const handleRemove = () => {
    updateInLocalCart(cartItem.product_id, { toRemove: true });
    setToRemove(true);
  };

  const handleReturn = () => {
    updateInLocalCart(cartItem.product_id, { toRemove: false });
    setToRemove(false);
  };

  if (!product) {
    return <Loader isSmall={true} />;
  }

  return (
    <div className="cart-product">
      <div
        className={classNames("cart-product__top", {
          "cart-product__top--opacity": toRemove,
        })}
      >
        <img
          src={product.image}
          alt="Product photo"
          className="cart-product__photo"
        />
        <div className="cart-product__info">
          <h3 className="cart-product__name">{product.name}</h3>
          <div className="cart-product__info-entry">
            <h4 className="cart-product__info-entry-name">Колір:</h4>
            <p className="small-text cart-product__info-entry-value">
              {product.color}
            </p>
          </div>
        </div>
      </div>
      {toRemove ? (
        <div className="cart-product__order-top-right">
          <p className="cart-product__order-removed-text body-text">
            Товар видалено.
          </p>
          <p
            className="cart-product__order-return-button button-text button--text"
            onClick={handleReturn}
          >
            Повернути в корзину
          </p>
        </div>
      ) : (
        <img
          onClick={handleRemove}
          src="/icons/trash.svg"
          alt="Trash icon"
          className="cart-product__order-remove-icon button--text"
        />
      )}
      <div className="cart-product__order-info">
        <div
          className="cart-product__order-info-quantity"
          aria-disabled={toRemove}
        >
          <img
            onClick={handleMinus}
            src="/icons/minus.svg"
            alt="Minus icon"
            aria-disabled={cartItem.quantity === 1}
            className="cart-product__order-minus-icon button--text"
          />
          <p className="body-text">{cartItem.quantity}</p>
          <img
            onClick={handlePlus}
            src="/icons/plus.svg"
            alt="Plus icon"
            className="cart-product__order-plus-icon button--text"
          />
        </div>
        <h3 className="cart-product__price">
          {cartItem.price * cartItem.quantity} грн
        </h3>
      </div>
    </div>
  );
};
