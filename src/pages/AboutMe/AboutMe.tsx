import { BackButton } from "../../components/BackButton";
import { AboutMeContacts } from "./components/AboutMeContacts";
import { AboutMeFAQ } from "./components/AboutMeFAQ";
import { AboutMeMain } from "./components/AboutMeMain";
import "./AboutMe.scss";

const QUESTIONS = [
  {
    title: "Чи можна подивитися додаткові фотографії або відео товару?",
    answer:
      "Так, якщо потрібні додаткові матеріали з товаром, то за вказаним телефоном на сторінці продукту, Ви завжди зможете їх отримати",
  },
  {
    title:
      "Чи є можливість замовити декор під індивідуальні вимоги або на замовлення?",
    answer:
      "Так, для цього потрібно звернутись за номером +380951310343 (Viber і Telegram), або за соціальними мережами, вказаними внизу сторінки",
  },
  {
    title: "Чи можна змінити розмір декору?",
    answer:
      "Так, але про це потрібно попередити після замовлення товару, коли Вам напишуть або зателефонують",
  },
  {
    title: "Чи є безкоштовна доставка при замовленні на певну суму?",
    answer:
      "Так, при замовленні від 2 тисяч гривень оплату за доставку беремо на себе ",
  },
  {
    title: "Які умови повернення або обміну товару, якщо він не підійшов?",
    answer: "Товар обміну або поверненню не підлягає ",
  },
  {
    title: "Які є особливості догляду за товарами?",
    answer:
      "Якщо декор припадає пилом, достатньо протерти його сухою ганчіркою чи серветкою, або змахнути пил піпідастром",
  },
  {
    title: "Які є способи оплати?",
    answer:
      "Ви можете оплатити товар на пошті при отриманні, або за реквізитами перед відправкою",
  },
  {
    title: "Які є способи доставки?",
    answer:
      "Ви можете обрати зручний для Вас спосіб доставки після замовлення товару",
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
          <a
            href="Політика конфіденційності.docx"
            className="about-me__privacy-policy-button button-text button--text"
          >
            Політика конфіденційності
          </a>
        </div>
      </div>
    </div>
  );
};
