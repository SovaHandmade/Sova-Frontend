import { useState } from "react";
import classNames from "classnames";
import { FilterBox } from "../../components/FilterBox";
import { ProductCard } from "../../components/ProductCard";
import "./Shop.scss";

export const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);

  const handleFiltersButton = () => {
    setShowFilters(!showFilters);
  };

  return (
    <section className="shop">
      <div className="shop__top">
        <h2>Our products</h2>
        <button className="shop__filters-button" onClick={handleFiltersButton}>
          Filters
        </button>
      </div>

      <div className="shop__container">
        <div
          className={classNames("shop__filter-box", {
            "shop__filter-box--show": showFilters,
          })}
        >
          <FilterBox />
        </div>
        <div className="shop__products-container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};
