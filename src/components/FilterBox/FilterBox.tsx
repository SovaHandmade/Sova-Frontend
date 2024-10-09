import "./FilterBox.scss";

export const FilterBox = () => {
  return (
    <div className="filter-box">
      <div className="filter-box__container">
        <p className="small-text">Topic</p>
        <div className="filter-box__filters filter-box__filters--selected">
          <div className="filter-box__filter filter-box__filter--selected">
            <p className="button-text">All</p>
          </div>
          <div className="filter-box__filter">
            <p className="button-text">Spring</p>
          </div>
          <div className="filter-box__filter">
            <p className="button-text">Winter</p>
          </div>
          <div className="filter-box__filter">
            <p className="button-text">Autumn</p>
          </div>
        </div>
      </div>
      <div className="filter-box__container">
        <p className="small-text">Form</p>
        <div className="filter-box__filters filter-box__filters--selected">
          <div className="filter-box__filter filter-box__filter--selected">
            <p className="button-text">All</p>
          </div>
          <div className="filter-box__filter">
            <p className="button-text">Composition</p>
          </div>
          <div className="filter-box__filter">
            <p className="button-text">Wreath</p>
          </div>
          <div className="filter-box__filter">
            <p className="button-text">Candlestick</p>
          </div>
        </div>
      </div>
      <div className="filter-box__buttons">
        <button className="button-text filter-box__clear-button">
          Clear filters
        </button>
        <button className="button-text filter-box__apply-button">Apply</button>
      </div>
    </div>
  );
};
