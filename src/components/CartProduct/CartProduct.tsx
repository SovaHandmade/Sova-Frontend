import React, { useEffect, useState } from "react";
import { ProductType } from "../../types/ProductType";
import {
  getProduct,
  removeFromLocalCart,
  updateInLocalCart,
} from "../../utils/api";
import { CartItemType } from "../../types/CartItemType";
import "./CartProduct.scss";

type Props = {
  cartItem: CartItemType;
  updateCallback: () => void;
};

export const CartProduct: React.FC<Props> = ({ cartItem, updateCallback }) => {
  const [product, setProduct] = useState<ProductType>();

  const fetchProduct = async () => {
    setProduct(await getProduct(cartItem.product_id));
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePlus = () => {
    updateInLocalCart(cartItem.product_id, cartItem.quantity + 1);
    updateCallback();
  };

  const handleMinus = () => {
    if (cartItem.quantity === 1) {
      return;
    }

    updateInLocalCart(cartItem.product_id, cartItem.quantity - 1);
    updateCallback();
  };

  const handleRemove = () => {
    removeFromLocalCart(cartItem.product_id);
    updateCallback();
  };

  if (!product) {
    return <></>;
  }

  return (
    <div className="cart-product">
      <div className="cart-product__top">
        <img
          src={product.image}
          alt="Product photo"
          className="cart-product__photo"
        />
        <div className="cart-product__info">
          <h3 className="cart-product__name">{product.name}</h3>
          <div className="cart-product__info-entry">
            <h4 className="cart-product__info-entry-name">Color:</h4>
            <p className="small-text cart-product__info-entry-value">
              {product.color}
            </p>
          </div>
        </div>
      </div>
      <img
        onClick={handleRemove}
        src="/icons/trash.svg"
        alt="Trash icon"
        className="cart-product__order-remove-icon"
      />
      <div className="cart-product__order-info">
        <div className="cart-product__order-info-quantity">
          <img
            onClick={handlePlus}
            src="/icons/plus.svg"
            alt="Plus icon  "
            className="cart-product__order-plus-icon"
          />
          <p className="body-text">{cartItem.quantity}</p>
          <img
            onClick={handleMinus}
            src="/icons/minus.svg"
            alt="Minus icon  "
            className="cart-product__order-minus-icon"
          />
        </div>
        <h3 className="cart-product__price">
          {cartItem.price * cartItem.quantity} grn
        </h3>
      </div>
    </div>
  );
};
