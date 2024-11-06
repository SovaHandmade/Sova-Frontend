import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Question } from "../../../types/Question";

export const AboutMeFAQItem: React.FC<Question> = ({ title, answer }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textElement = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textElement.current) {
      return;
    }

    textElement.current.style.maxHeight = `${textElement.current.scrollHeight}px`;
  }, []);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="about-me__faq-question" onClick={handleClick}>
      <div className="about-me__faq-question-top">
        <h3>{title}</h3>
        <img src="icons/open_arrow.svg" alt="Open icon" />
      </div>

      <p
        ref={textElement}
        className={classNames("body-text", "about-me__faq-question-text", {
          "about-me__faq-question-text--hidden": !isVisible,
        })}
      >
        {answer}
      </p>
    </div>
  );
};
