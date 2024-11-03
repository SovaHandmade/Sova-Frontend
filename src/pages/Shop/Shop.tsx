import { useEffect, useState } from "react";
import classNames from "classnames";
import { FilterBox } from "../../components/FilterBox";
import { ProductCard } from "../../components/ProductCard";
import "./Shop.scss";
import { getProducts } from "../../utils/api";

export const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState<
    {
      name: string;
      image: string;
      size: string;
      price: string;
    }[]
  >([]);

  const handleFiltersButton = () => {
    setShowFilters(!showFilters);
  };

  const fetch = async () => {
    console.log(await getProducts());
    setProducts(await getProducts());
  };

  useEffect(() => {
    fetch();
  }, []);

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
