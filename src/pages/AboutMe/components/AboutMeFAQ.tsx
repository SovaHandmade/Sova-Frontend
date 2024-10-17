import { Question } from "../../../types/Question";
import { AboutMeFAQItem } from "./AboutMeFAQItem";
import "./AboutMeFAQ.scss";

type Props = {
  questions: Question[];
};

export const AboutMeFAQ: React.FC<Props> = ({ questions }) => {
  return (
    <section className="about-me__faq">
      <h2 className="about-me__title">Часті запитання</h2>

      {questions.map((question) => (
        <AboutMeFAQItem title={question.title} answer={question.answer} />
      ))}
    </section>
  );
};
