import "./HomeMain.scss";

export const HomeMain = () => {
  return (
    <section>
      <div className="home__main-title">
        <div className="home__main-title-container">
          <p className="home__main-title-big">Я</p>
          ТІЛЬКИ
        </div>

        <img
          className="home__gradient home__gradient-1"
          src="gradients/home/vector_1.svg"
          alt=""
        />

        <div className="home__main-title-container">
          РОБЛЮ
          <p className="home__main-title-medium">магію</p>
        </div>
        <p className="home__main-title-small">і це все.</p>
      </div>

      <div className="home__main-subtitle">
        Я не просто прикрашаю простір. Я не намагаєюсь змінити весь інтер'єр. Я
        просто додаю деталі, що створюють затишок і тепло, найприроднішим чином.
      </div>

      <img className="home__main-logo" src="logo_big.svg" alt="Big logo" />

      <img
        className="home__gradient home__gradient-2"
        src="gradients/home/vector_2.svg"
        alt=""
      />
    </section>
  );
};
