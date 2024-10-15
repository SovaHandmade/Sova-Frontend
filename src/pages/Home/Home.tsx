import "./Home.scss";

export const Home = () => {
  return (
    <main className="home">
      <img
        className="home__background"
        src="background_gradient.svg"
        alt="Background gradient"
      />

      <section className="home__section">
        <div className="home__title">
          <div className="home__title-container">
            <p className="home__title-big">Я</p>
            ТІЛЬКИ
          </div>
          <div className="home__title-container">
            РОБЛЮ
            <p className="home__title-medium">магію</p>
          </div>
          <p className="home__title-small">і це все.</p>
        </div>

        <div className="home__subtitle">
          Я не просто прикрашаю простір. Я не намагаєюсь змінити весь інтер'єр.
          Я просто додаю деталі, що створюють затишок і тепло, найприроднішим
          чином.
        </div>

        <img className="home__logo" src="logo_big.svg" alt="Big logo" />
      </section>

      <section className="home__section home__compositions">
        <div className="home__compositions-title home__text">
          Унікальні <strong className="home__text-gradient">композиції</strong>
          <br />
          для затишку і святкової
          <br />
          <strong className="home__text-gradient home__text-right">
            атмосфери
          </strong>
        </div>

        <p className="home__compositions-subtitle home__section-subtitle">
          Обирайте готовий виріб або замовляйте індивідуальну композицію,
          створену
          <br />
          спеціально для вашого простору.
        </p>

        <div className="home__compositions-images">
          <img
            className="home__image"
            src="product-photo/1.jpg"
            alt="Product photo"
          />

          <img
            className="home__image"
            src="product-photo/1.jpg"
            alt="Product photo"
          />

          <img
            className="home__image"
            src="product-photo/1.jpg"
            alt="Product photo"
          />
        </div>
      </section>

      <section className="home__section home__colors">
        <div className="home__colors-title home__text">
          Ваш <strong className="home__text-gradient">декор,</strong> ваші{" "}
          <strong className="home__text-gradient">кольори</strong>
        </div>

        <p className="home__colors-subtitle home__section-subtitle">
          Ми створимо композицію в будь-якій кольоровій гамі за вашим вибором.
        </p>

        <div className="home__colors-container">
          <img
            className="home__image home__colors-image--big"
            src="product-photo/1.jpg"
            alt="Product photo"
          />
          <img
            className="home__image home__colors-image--small"
            src="product-photo/1.jpg"
            alt="Product photo"
          />
        </div>
      </section>
    </main>
  );
};
