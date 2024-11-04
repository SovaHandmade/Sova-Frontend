import React, { useEffect, useState } from "react";
import { Filter } from "../Filter/Filter";
import { getTags } from "../../utils/api";
import { Tags } from "../../types/Tags";
import { useSearchParams } from "react-router-dom";
import "./FilterBox.scss";

type Props = {
  showButtons?: boolean;
  applyCallback: () => void;
};

export const FilterBox: React.FC<Props> = ({
  showButtons = true,
  applyCallback,
}) => {
  const [tags, setTags] = useState<Tags>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTopic, setSelectedTopic] = useState(
    searchParams.get("topic") || ""
  );
  const [selectedForm, setSelectedForm] = useState(
    searchParams.get("form") || ""
  );

  const fetchTags = async () => {
    setTags(await getTags());
  };

  useEffect(() => {
    const params: { [key: string]: string } = {};

    if (selectedTopic) {
      params.topic = selectedTopic;
    }

    if (selectedForm) {
      params.form = selectedForm;
    }
    setSearchParams(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedForm, selectedTopic]);

  const handleApply = () => {
    if (applyCallback) {
      applyCallback();
    }
  };

  const handleClear = () => {
    setSearchParams({});
    setSelectedTopic("");
    setSelectedForm("");

    if (applyCallback) {
      applyCallback();
    }
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
        <div className="filter-box__filters">
          {tags.topics.map((topic, index) => (
            <Filter
              name={topic.name}
              key={index}
              selected={
                selectedTopic === ""
                  ? index === 0
                  : topic.name === selectedTopic
              }
              selectCallback={setSelectedTopic}
            />
          ))}
        </div>
      </div>
      <div className="filter-box__container">
        <p className="small-text">Form</p>
        <div className="filter-box__filters">
          {tags.forms.map((form, index) => (
            <Filter
              name={form.name}
              key={index}
              selected={
                selectedForm === "" ? index === 0 : form.name === selectedForm
              }
              selectCallback={setSelectedForm}
            />
          ))}
        </div>
      </div>

      {showButtons && (
        <div className="filter-box__buttons">
          <button
            className="filter-box__clear-button button--text"
            onClick={handleClear}
          >
            Clear filters
          </button>
          <button className="filter-box__apply-button" onClick={handleApply}>
            Apply
          </button>
        </div>
      )}
    </div>
  );
};
