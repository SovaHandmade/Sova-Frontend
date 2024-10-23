import "./ProductCard.scss";

export const ProductCard = () => {
  return (
    <div className="product-card">
      <img
        src="/product-photo/1.jpg"
        alt="Product photo"
        className="product-card__image"
      />

      <div className="product-card__container">
        <div className="product-card__info">
          <h3 className="product-card__info-name">Spring Basket</h3>
          <p className="small-text product-card__info-size">Розмір 50*50 см </p>
          <h3 className="product-card__info-price">800grn</h3>
        </div>

        <button className="product-card__buy-button">Buy</button>
      </div>
    </div>
  );
};
