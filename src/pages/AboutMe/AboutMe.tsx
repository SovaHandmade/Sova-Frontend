import { BackButton } from "../../components/BackButton";
import "./AboutMe.scss";
import { AboutMeContacts } from "./components/AboutMeContacts";
import { AboutMeFAQ } from "./components/AboutMeFAQ";
import { AboutMeMain } from "./components/AboutMeMain";

const QUESTIONS = [
  {
    title: "Чи можна змінити розмір декору?",
    answer:
      "Так, про це потрібно попередити після замовлення товару, коли Вам напишуть або зателефонують.",
  },
];

export const AboutMe = () => {
  return (
    <div className="about-me">
      <BackButton />

      <div className="about-me__container">
        <div className="about-me__sections">
          <AboutMeMain />
          <AboutMeContacts />
          <AboutMeFAQ questions={QUESTIONS} />
        </div>
      </div>
    </div>
  );
};
