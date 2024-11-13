import classNames from "classnames";
import "./Loader.scss";
import React from "react";

type Props = {
  isSmall?: boolean;
};

export const Loader: React.FC<Props> = ({ isSmall = false }) => {
  return (
    <div className="loader centered">
      <img
        src="/loader.png"
        alt="Loader"
        className={classNames("loader__spinner", {
          "loader__spinner--small": isSmall,
        })}
      />
    </div>
  );
};
