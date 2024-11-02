import React, { useEffect, useState } from "react";
import { Filter } from "../Filter/Filter";
import "./FilterBox.scss";
import { getTags } from "../../utils/api";

type Props = {
  showButtons?: boolean;
};

export const FilterBox: React.FC<Props> = ({ showButtons = true }) => {
  const [tags, setTags] = useState<{ topics: string[]; forms: string[] }>({
    forms: [],
    topics: [],
  });

  const fetchTags = async () => {
    console.log(await getTags());
  };

  useEffect(() => {
    fetchTags();
  }, []);

  if (!tags) {
    return <></>;
  }

  return (
    <div className="filter-box">
      <div className="filter-box__container">
        <p className="small-text">Topic</p>
        <div className="filter-box__filters filter-box__filters--selected">
          {tags.topics.map((topic, index) => {
            <Filter text="All" selected={index === 0} />;
          })}
        </div>
      </div>
      <div className="filter-box__container">
        <p className="small-text">Form</p>
        <div className="filter-box__filters filter-box__filters--selected">
          {tags.forms.map((form, index) => {
            <Filter text="All" selected={index === 0} />;
          })}
        </div>
      </div>

      {showButtons && (
        <div className="filter-box__buttons">
          <button className="filter-box__clear-button">Clear filters</button>
          <button className="filter-box__apply-button">Apply</button>
        </div>
      )}
    </div>
  );
};
