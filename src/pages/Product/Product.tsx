import "./Product.scss";

export const Product = () => {
  return (
    <div className="product">
      <div className="product__back-button">
        <img
          className="product__back-button-image"
          src="icons/arrow_left_dark.svg"
          alt="Arrow left"
        />
      </div>

      <div className="product__container">
        <img
          className="product__photo"
          src="product-photo/1.jpg"
          alt="Product photo"
        />
        <div className="product__info">
          <h2 className="product__name">Autumn wreath</h2>
          <div className="product__info-entry">
            <h4 className="product__info-entry-name">Size :</h4>
            <p className="small-text product__info-entry-value">50*50 cm</p>
          </div>
          <div className="product__info-entry">
            <h4 className="product__info-entry-name">Material :</h4>
            <p className="small-text product__info-entry-value">
              Plastic, natural
            </p>
          </div>
          <div className="product__info-entry">
            <h4 className="product__info-entry-name">Color :</h4>
            <p className="small-text product__info-entry-value">
              You can choose custom colors when we contact.
            </p>
          </div>
          <div className="product__info-entry">
            <h4 className="product__info-entry-name">Description :</h4>
            <p className="small-text product__info-entry-value">
              This spring composition is a great way to decorate your home, and
              can also be an original gift
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
