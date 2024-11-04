import classNames from "classnames";
import "./Filter.scss";

type Props = {
  name: string;
  selected: boolean;
  selectCallback?: (name: string) => void;
};

export const Filter: React.FC<Props> = ({ name, selected, selectCallback }) => {
  const handleSelect = () => {
    if (selectCallback) {
      selectCallback(name);
    }
  };

  return (
    <div
      onClick={handleSelect}
      className={classNames("filter", { "filter--selected": selected })}
    >
      <p className="button-text">{name}</p>
    </div>
  );
};
