import { FilterBox } from "../../components/FilterBox";
import { ProductCard } from "../../components/ProductCard";
import "./Shop.scss";

export const Shop = () => {
  return (
    <section className="shop">
      <h2>Our products</h2>
      <div className="shop__container">
        <FilterBox />
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
