import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import classNames from "classnames";

import { FilterBox } from "../../components/FilterBox";
import { ProductCard } from "../../components/ProductCard";
import { getProducts } from "../../api/api";
import { ProductType } from "../../types/ProductType";

import "./Shop.scss";

export const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchParams] = useSearchParams();

  const handleFiltersButton = () => {
    setShowFilters(!showFilters);
  };

  const fetch = async () => {
    setProducts([]);

    const params: { [key: string]: string } = {};
    const topic = searchParams.get("topic");
    const form = searchParams.get("form");

    if (topic && topic !== "All") {
      params.topic = topic;
    }

    if (form && form !== "All") {
      params.form = form;
    }

    setProducts(await getProducts(params));
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="shop">
      <div className="shop__top">
        <h2>Наші товари</h2>
        <button
          className="shop__filters-button button--secondary"
          onClick={handleFiltersButton}
        >
          Фільтри
        </button>
      </div>

      <div className="shop__container">
        <div
          className={classNames("shop__filter-box", {
            "shop__filter-box--show": showFilters,
          })}
        >
          <FilterBox applyCallback={fetch} showAllOption={true} />
        </div>
        <div className="shop__products-container">
          {products.map((product, index) => (
            <ProductCard
              name={product.name}
              image={product.image}
              size={product.size}
              price={product.price}
              id={index + 1}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
