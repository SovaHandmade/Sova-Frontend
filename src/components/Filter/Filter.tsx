import classNames from "classnames";
import "./Filter.scss";

type Props = {
  text: string;
  selected: boolean;
};

export const Filter: React.FC<Props> = ({ text, selected }) => {
  return (
    <div className={classNames("filter", { "filter--selected": selected })}>
      <p className="button-text">{text}</p>
    </div>
  );
};
