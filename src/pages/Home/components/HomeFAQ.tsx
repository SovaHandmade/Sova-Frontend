import "./HomeFAQ.scss";

export const HomeFAQ = () => {
  return (
    <section className="home__faq">
      <h2 className="home__faq-title">Як все працює?</h2>

      <div className="home__faq-container">
        <div className="home__faq-question">
          <div className="home__faq-question-top">
            <div className="home__faq-question-number">1</div>
            <div className="home__faq-question-info">
              <h4 className="home__faq-question-title">
                Вибери комозицію та оформи замовлення
              </h4>
              <p className="small-text home__faq-question-subtitle">
                Лише кілька простих кроків, і все зроблено
              </p>
            </div>
          </div>
          <img
            className="home__faq-question-image"
            src="images/order.png"
            alt="Order image"
          />
        </div>

        <div className="home__faq-question">
          <div className="home__faq-question-top">
            <div className="home__faq-question-number">2</div>
            <div className="home__faq-question-info">
              <h4 className="home__faq-question-title">
                Ми зв’яжимось з тобою
              </h4>
              <p className="small-text home__faq-question-subtitle">
                Домовимось про деталі, доставку та оплату
              </p>
            </div>
          </div>
          <img
            className="home__faq-question-image"
            src="images/phone.png"
            alt="Order image"
          />
        </div>

        <div className="home__faq-question">
          <div className="home__faq-question-top">
            <div className="home__faq-question-number">3</div>
            <div className="home__faq-question-info">
              <h4 className="home__faq-question-title">
                Створемо вашу композицію всього за 1 день
              </h4>
              <p className="small-text home__faq-question-subtitle">
                Швидко і з любов'ю.
              </p>
            </div>
          </div>
          <img
            className="home__faq-question-image"
            src="images/work.png"
            alt="Order image"
          />
        </div>

        <div className="home__faq-question">
          <div className="home__faq-question-top">
            <div className="home__faq-question-number">4</div>
            <div className="home__faq-question-info">
              <h4 className="home__faq-question-title">Доставка поштою.</h4>
              <p className="small-text home__faq-question-subtitle">
                Насолоджуйтесь своїм оновленим простором!
              </p>
            </div>
          </div>
          <img
            className="home__faq-question-image"
            src="images/deliver.png"
            alt="Order image"
          />
        </div>
      </div>

      <button className="home__faq-button">Перейти до товарів</button>
    </section>
  );
};
