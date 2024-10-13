import "./CartProduct.scss";

export const CartProduct = () => {
  return (
    <div className="cart-product">
      <img
        src="product-photo/1.jpg"
        alt="Product photo"
        className="cart-product__photo"
      />
      <div className="cart-product__info">
        <h3 className="cart-product__name">Autumn wreath</h3>
        <div className="cart-product__info-entry">
          <h4 className="cart-product__info-entry-name">Color:</h4>
          <p className="small-text cart-product__info-entry-value">
            You can choose custom colors when we contact.
          </p>
        </div>
      </div>
      <div className="cart-product__order-info">
        <img
          src="icons/trash.svg"
          alt="Trash icon"
          className="cart-product__order-remove-icon"
        />

        <div className="cart-product__order-info-quantity">
          <img
            src="icons/plus.svg"
            alt="Plus icon  "
            className="cart-product__order-plus-icon"
          />
          <p className="body-text">2</p>
          <img
            src="icons/minus.svg"
            alt="Minus icon  "
            className="cart-product__order-minus-icon"
          />
        </div>
        <h3 className="cart-product__price">1600 grn</h3>
      </div>
    </div>
  );
};
