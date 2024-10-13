import { Filter } from "../Filter/Filter";
import "./FilterBox.scss";

export const FilterBox = () => {
  return (
    <div className="filter-box">
      <div className="filter-box__container">
        <p className="small-text">Topic</p>
        <div className="filter-box__filters filter-box__filters--selected">
          <Filter text="All" selected={true} />
          <Filter text="Spring" selected={false} />
          <Filter text="Winter" selected={false} />
          <Filter text="Autumn" selected={false} />
        </div>
      </div>
      <div className="filter-box__container">
        <p className="small-text">Form</p>
        <div className="filter-box__filters filter-box__filters--selected">
          <Filter text="All" selected={true} />
          <Filter text="Composition" selected={false} />
          <Filter text="Wreath" selected={false} />
          <Filter text="Candlestick" selected={false} />
        </div>
      </div>
      <div className="filter-box__buttons">
        <button className="filter-box__clear-button">Clear filters</button>
        <button className="filter-box__apply-button">Apply</button>
      </div>
    </div>
  );
};
