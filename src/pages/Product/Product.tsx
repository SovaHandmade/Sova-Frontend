import { useNavigate, useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { Filter } from "../../components/Filter";
import { ProductCard } from "../../components/ProductCard";
import "./Product.scss";
import {
  addToLocalCart,
  getProduct,
  isInLocalCart,
  removeFromLocalCart,
} from "../../utils/api";
import { useEffect, useState } from "react";
import { ProductType } from "../../types/ProductType";

export const Product = () => {
  const [product, setProduct] = useState<ProductType>();
  const [isInCart, setIsInCart] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();
  const productId = Number(id);
  console.log(productId);

  const fetchProduct = async () => {
    setProduct(await getProduct(productId));
  };

  const handleAddToCart = () => {
    if (!id || !product) {
      return;
    }

    if (isInCart) {
      removeFromLocalCart(productId);
    } else {
      addToLocalCart(productId, product.price);
    }

    setIsInCart(isInLocalCart(productId));
  };

  const handleBuyNow = () => {
    if (!id || !product) {
      return;
    }

    if (!isInCart) {
      addToLocalCart(productId, product.price);
    }

    navigate("/cart");
  };

  useEffect(() => {
    setIsInCart(isInLocalCart(productId));

    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!product) {
    return <></>;
  }

  return (
    <>
      <div className="product">
        <BackButton />

        <div className="product__container">
          <img
            className="product__photo"
            src={product.image}
            alt="Product photo"
          />

          <div className="product__info">
            <div className="product__info-top">
              <h2 className="product__name">{product.name}</h2>
              <div className="product__info-entry">
                <h4 className="product__info-entry-name">Size :</h4>
                <p className="small-text product__info-entry-value">
                  {product.size}
                </p>
              </div>
              <div className="product__info-entry">
                <h4 className="product__info-entry-name">Material :</h4>
                <p className="small-text product__info-entry-value">
                  {product.material}
                </p>
              </div>
              <div className="product__info-entry">
                <h4 className="product__info-entry-name">Color :</h4>
                <p className="small-text product__info-entry-value">
                  {product.color}
                </p>
              </div>
              <div className="product__info-entry">
                <h4 className="product__info-entry-name">Description :</h4>
                <p className="small-text product__info-entry-value">
                  {product.description}
                </p>
              </div>

              <div className="product__tags">
                {product.topic_name && (
                  <Filter text={product.topic_name} selected={false} />
                )}
                {product.form_name && (
                  <Filter text={product.form_name} selected={false} />
                )}
              </div>
            </div>

            <div className="product__info-bottom">
              <div className="product__price">
                <p className="explanation-text product__price-text">Price:</p>
                <h2 className="product__price-value">{product.price} grn</h2>
              </div>

              <button className="product__buy-button" onClick={handleBuyNow}>
                Place an order
              </button>

              <button
                className="product__cart-button"
                onClick={handleAddToCart}
              >
                {isInCart ? "Remove From Cart" : "Add To Cart"}
                <img
                  src={
                    isInCart ? "/icons/basket_active.svg" : "/icons/basket.svg"
                  }
                  alt="Basket icon"
                />
              </button>
            </div>
          </div>

          <div className="product__delivery">
            <div className="product__section product__section--group">
              <div className="product__section">
                <h4>Delivery:</h4>

                <div className="product__methods product__methods-delivery">
                  <div className="product__method">
                    <img
                      className="product__method-icon"
                      src="/icons/expand.svg"
                      alt="Expand icon"
                    />
                    <p className="small-text product__method-text">
                      Free pickup in Lutsk
                    </p>
                  </div>
                  <div className="product__method">
                    <img
                      className="product__method-icon"
                      src="/icons/nova-poshta.png"
                      alt="Expand icon"
                    />
                    <div className="product__method--double-text">
                      <p className="small-text product__method-text">
                        Nova Post
                      </p>
                      <p className="explanation-text product__method-time">
                        1-3 days
                      </p>
                    </div>
                  </div>
                  <div className="product__method">
                    <img
                      className="product__method-icon"
                      src="/icons/ukr-poshta.png"
                      alt="Expand icon"
                    />
                    <div className="product__method--double-text">
                      <p className="small-text product__method-text">
                        Ukrposhta
                      </p>
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
                      src="/icons/credit_card.svg"
                      alt="Expand icon"
                    />
                    <p className="small-text product__method-text">
                      Prepay by Card
                    </p>
                  </div>

                  <div className="product__method">
                    <img
                      className="product__method-icon"
                      src="/icons/wallet.svg"
                      alt="Expand icon"
                    />
                    <p className="small-text product__method-text">
                      Cash on Delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="product__contact">
              <h4>Still have questions?</h4>
              <p className="explanation-text product__contact-text-gray">
                Just call us back:{" "}
              </p>
              <p className="body-text">+380 95 131 0343</p>
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
