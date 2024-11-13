import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { Filter } from "../../components/Filter";
import { ProductCard } from "../../components/ProductCard";
import { ProductType } from "../../types/ProductType";
import { Loader } from "../../components/Loader";
import {
  addToLocalCart,
  getProduct,
  getProducts,
  isInLocalCart,
  removeFromLocalCart,
} from "../../api/api";
import "./Product.scss";

export const Product = () => {
  const [product, setProduct] = useState<ProductType>();
  const [suggestions, setSuggestions] = useState<ProductType[]>([]);
  const [isInCart, setIsInCart] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();
  const productId = Number(id);

  const fetchProduct = async () => {
    setProduct(await getProduct(productId));
  };

  const fetchSuggestions = async () => {
    setSuggestions(
      await getProducts({
        exclude: productId,
        max_length: 5,
      })
    );
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
    fetchSuggestions();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!product) {
    return <Loader />;
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
                <h4 className="product__info-entry-name">Розмір :</h4>
                <p className="small-text product__info-entry-value">
                  {product.size}
                </p>
              </div>
              <div className="product__info-entry">
                <h4 className="product__info-entry-name">Матеріал :</h4>
                <p className="small-text product__info-entry-value">
                  {product.material}
                </p>
              </div>
              <div className="product__info-entry">
                <h4 className="product__info-entry-name">Колір :</h4>
                <p className="small-text product__info-entry-value">
                  {product.color}
                </p>
              </div>
              <div className="product__info-entry">
                <h4 className="product__info-entry-name">Опис :</h4>
                <p className="small-text product__info-entry-value">
                  {product.description}
                </p>
              </div>

              <div className="product__tags">
                {product.topic_name && (
                  <Filter name={product.topic_name} selected={false} />
                )}
                {product.form_name && (
                  <Filter name={product.form_name} selected={false} />
                )}
              </div>
            </div>

            <div className="product__info-bottom">
              <div className="product__price">
                <p className="explanation-text product__price-text">Ціна:</p>
                <h2 className="product__price-value">{product.price} грн</h2>
              </div>

              <button className="product__buy-button" onClick={handleBuyNow}>
                Замовити
              </button>

              <button
                className="product__cart-button button--secondary"
                onClick={handleAddToCart}
              >
                {isInCart ? "Видалити з корзини" : "Додати в корзину"}
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
                <h4>Доставка:</h4>

                <div className="product__methods product__methods-delivery">
                  <div className="product__method">
                    <img
                      className="product__method-icon"
                      src="/icons/expand.svg"
                      alt="Expand icon"
                    />
                    <p className="small-text product__method-text">
                      Самовивіз з Луцька
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
                        Нова пошта
                      </p>
                      <p className="explanation-text product__method-time">
                        1-3 робочі дні
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
                        Укрпошта
                      </p>
                      <p className="explanation-text product__method-time">
                        2-5 робочі дні
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product__section">
                <h4>Оплата:</h4>

                <div className="product__methods">
                  <div className="product__method">
                    <img
                      className="product__method-icon"
                      src="/icons/credit_card.svg"
                      alt="Expand icon"
                    />
                    <p className="small-text product__method-text">
                      Передоплата
                      <br />
                      картою
                    </p>
                  </div>

                  <div className="product__method">
                    <img
                      className="product__method-icon"
                      src="/icons/wallet.svg"
                      alt="Expand icon"
                    />
                    <p className="small-text product__method-text">
                      Готівкою при
                      <br />
                      отриманні
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="product__contact">
              <h4>Є ще запитання?</h4>
              <p className="explanation-text product__contact-text-gray">
                Зателефонуйте:
              </p>
              <p className="body-text">+380 95 131 0343</p>
            </div>
          </div>
        </div>
      </div>
      <div className="suggestions">
        <h2>Вам також може сподобатись</h2>
        <div className="suggestions__products">
          {!suggestions.length ? (
            <Loader />
          ) : (
            suggestions.map((suggestion, index) => (
              <ProductCard
                name={suggestion.name}
                image={suggestion.image}
                price={suggestion.price}
                size={suggestion.size}
                id={index + 1}
                key={index}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};
