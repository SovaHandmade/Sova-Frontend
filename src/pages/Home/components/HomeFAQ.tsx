import { Link } from "react-router-dom";
import "./HomeFAQ.scss";

const QUESTIONS = [
  {
    title: "Вибери комозицію та оформи замовлення",
    subtitle: "Лише кілька простих кроків, і все зроблено",
    image: "images/order.png",
  },
  {
    title: "Ми зв’яжимось з тобою",
    subtitle: "Домовимось про деталі, доставку та оплату",
    image: "images/phone.png",
  },
  {
    title: "Створемо вашу композицію всього за 1 день",
    subtitle: "Швидко і з любов'ю.",
    image: "images/work.png",
  },
  {
    title: "Доставка поштою.",
    subtitle: "Насолоджуйтесь своїм оновленим простором!",
    image: "images/deliver.png",
  },
];

export const HomeFAQ = () => {
  const questionsElements = QUESTIONS.map((question, index) => (
    <div className="home__faq-question" key={index}>
      <div className="home__faq-question-top">
        <div className="home__faq-question-number">{index + 1}</div>
        <div className="home__faq-question-info">
          <h4 className="home__faq-question-title">{question.title}</h4>
          <p className="small-text home__faq-question-subtitle">
            {question.subtitle}
          </p>
        </div>
      </div>
      <img
        className="home__faq-question-image"
        src={question.image}
        alt="Order image"
      />
    </div>
  ));

  return (
    <section className="home__faq">
      <h2 className="home__faq-title">Як все працює?</h2>

      <div className="home__faq-container">
        <div className="home__faq-container--top">
          {questionsElements.slice(0, 2).map((question) => question)}
        </div>
        <div className="home__faq-container--bottom">
          {questionsElements.slice(2).map((question) => question)}
        </div>
      </div>

      <Link className="home__faq-button button" to="/shop">
        Перейти до товарів
      </Link>
    </section>
  );
};
