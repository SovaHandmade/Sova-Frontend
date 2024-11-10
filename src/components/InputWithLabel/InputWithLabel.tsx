import React, { useState } from "react";
import "./InputWithLabel.scss";
import classNames from "classnames";

type Props = {
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
  errorText: string;
  validateFunction: (input: string) => string | void;
  maxLength?: number;
  defaultValue?: string;
};

export const InputWithLabel: React.FC<Props> = ({
  type,
  name,
  placeholder,
  required,
  errorText,
  validateFunction,
  maxLength,
  defaultValue,
}) => {
  const [explanationText, setExplanationText] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      !event.currentTarget.value ||
      event.currentTarget.value === defaultValue
    ) {
      setExplanationText("");
      setIsSuccess(false);

      return;
    }

    const result = validateFunction(event.currentTarget.value);

    if (result) {
      setExplanationText(result);
      setIsSuccess(false);

      return;
    }

    setExplanationText("");
    setIsSuccess(true);
  };

  return (
    <div className="input-with-label">
      <div className="input-with-label__container">
        <input
          className={classNames("input-with-label__input small-text", {
            "input-with-label__input--danger": !!errorText,
            "input-with-label__input--explanation": !!explanationText,
            "input-with-label__input--success":
              !explanationText && !errorText && isSuccess,
          })}
          type={type}
          name={name}
          required={required}
          maxLength={maxLength}
          placeholder=""
          defaultValue={defaultValue}
          onChange={handleInput}
        />
        <span className="input-with-label__label small-text">
          {placeholder}
        </span>
      </div>

      {(explanationText || errorText) && (
        <p className="input-with-label__explanation explanation-text">
          {explanationText || errorText}
        </p>
      )}
    </div>
  );
};
