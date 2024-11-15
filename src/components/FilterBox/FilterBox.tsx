import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter } from "../Filter/Filter";
import { getTags } from "../../api/api";
import { Tags } from "../../types/Tags";
import { Loader } from "../Loader";
import "./FilterBox.scss";

type Props = {
  showButtons?: boolean;
  showAllOption?: boolean;
  applyCallback?: (form?: number, topic?: number) => void;
};

export const FilterBox: React.FC<Props> = ({
  showButtons = true,
  showAllOption = false,
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
    const serverTags = (await getTags()) as Tags;

    if (showAllOption) {
      serverTags.forms.unshift({
        id: 0,
        name: "Всі",
      });

      serverTags.topics.unshift({
        id: 0,
        name: "Всі",
      });
    }

    setTags(serverTags);
  };

  useEffect(() => {
    if (!showButtons && applyCallback) {
      applyCallback(
        tags?.forms.findIndex((form) => form.name === selectedForm),
        tags?.topics.findIndex((topic) => topic.name === selectedTopic)
      );
    }
    const params: { [key: string]: string } = {};

    if (selectedTopic && selectedTopic !== "Всі") {
      params.topic = selectedTopic;
    }

    if (selectedForm && selectedForm !== "Всі") {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="filter-box">
      {!tags ? (
        <Loader isSmall={true} />
      ) : (
        <>
          <div className="filter-box__container">
            <p className="small-text">Тема</p>
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
            <p className="small-text">Форма</p>
            <div className="filter-box__filters">
              {tags.forms.map((form, index) => (
                <Filter
                  name={form.name}
                  key={index}
                  selected={
                    selectedForm === ""
                      ? index === 0
                      : form.name === selectedForm
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
                Очистити
              </button>
              <button
                className="filter-box__apply-button"
                onClick={handleApply}
              >
                Застосувати
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
