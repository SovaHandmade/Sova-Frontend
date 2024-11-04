import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  image: string;
  size: string;
  price: number;
  id: number;
};

export const ProductCard: React.FC<Props> = ({
  name,
  image,
  size,
  price,
  id,
}) => {
  return (
    <div className="product-card">
      <img src={image} alt="Product photo" className="product-card__image" />

      <div className="product-card__container">
        <div className="product-card__info">
          <h3 className="product-card__info-name">{name}</h3>
          <p className="small-text product-card__info-size">Розмір {size}</p>
          <h3 className="product-card__info-price">{price} grn</h3>
        </div>

        <Link to={`/product/${id}`} className="product-card__buy-button button">
          Buy
        </Link>
      </div>
    </div>
  );
};
