import { Filter } from "../../components/Filter";
import { ProductCard } from "../../components/ProductCard";
import "./Product.scss";

export const Product = () => {
  return (
    <>
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
            <div className="product__info-top">
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
                  This spring composition is a great way to decorate your home,
                  and can also be an original gift
                </p>
              </div>

              <div className="product__tags">
                <Filter text="Autumn" selected={false} />
                <Filter text="Wreath" selected={false} />
              </div>
            </div>

            <div className="product__info-bottom">
              <div className="product__price">
                <p className="explanation-text product__price-text">Price:</p>
                <h2 className="product__price-value">800 grn</h2>
              </div>

              <button className="product__buy-button button-text">
                Place an order
              </button>

              <button className="product__cart-button button-text">
                Add To Cart
                <img src="icons/basket.svg" alt="Basket icon" />
              </button>
            </div>
          </div>

          <div className="product__delivery">
            <div className="product__section">
              <h4>Delivery:</h4>

              <div className="product__methods">
                <div className="product__method">
                  <img
                    className="product__method-icon"
                    src="icons/expand.svg"
                    alt="Expand icon"
                  />
                  <p className="small-text product__method-text">
                    Free pickup in Lutsk
                  </p>
                </div>
                <div className="product__method">
                  <img
                    className="product__method-icon"
                    src="icons/nova-poshta.png"
                    alt="Expand icon"
                  />
                  <div className="product__method--double-text">
                    <p className="small-text product__method-text">Nova Post</p>
                    <p className="explanation-text product__method-time">
                      1-3 days
                    </p>
                  </div>
                </div>
                <div className="product__method">
                  <img
                    className="product__method-icon"
                    src="icons/ukr-poshta.png"
                    alt="Expand icon"
                  />
                  <div className="product__method--double-text">
                    <p className="small-text product__method-text">Ukrposhta</p>
                    <p className="explanation-text product__method-time">
                      2-5 days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="product__section">
              <h4>Payment:</h4>

              <div className="product__methods">
                <div className="product__method">
                  <img
                    className="product__method-icon"
                    src="icons/credit_card.svg"
                    alt="Expand icon"
                  />
                  <p className="small-text product__method-text">
                    Prepay by Card
                  </p>
                </div>

                <div className="product__method">
                  <img
                    className="product__method-icon"
                    src="icons/wallet.svg"
                    alt="Expand icon"
                  />
                  <p className="small-text product__method-text">
                    Cash on Delivery
                  </p>
                </div>
              </div>
            </div>

            <div className="product__contact">
              <h4>Still have questions?</h4>
              <p className="explanation-text product__contact-text-gray">
                Just call us back:{" "}
              </p>
              <p className="body-text">+00000000000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="suggestions">
        <h2>You may also like</h2>
        <div className="suggestions__products">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};
