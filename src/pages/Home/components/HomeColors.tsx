import "./HomeColors.scss";

export const HomeColors = () => {
  return (
    <section className="home__colors">
      <div className="home__colors-title home__text">
        Ваш <strong className="home__text-gradient">декор,</strong> ваші{" "}
        <strong className="home__text-gradient">кольори</strong>
      </div>

      <p className="home__colors-subtitle home__subtitle">
        Ми створимо композицію в будь-якій кольоровій гамі за вашим вибором.
      </p>

      <img
        className="home__gradient home__gradient-3"
        src="gradients/home/vector_3.svg"
        alt=""
      />

      <img
        className="home__gradient home__gradient-4"
        src="gradients/home/vector_4.svg"
        alt=""
      />

      <div className="home__colors-container">
        <img
          className="home__image home__colors-image--big"
          src="product-photo/1.jpg"
          alt="Product photo"
        />
        <img
          className="home__colors-arrow home__colors-arrow--left"
          src="arrow_drawing.svg"
          alt="Arrow"
        />
        <img
          className="home__image home__colors-image--small"
          src="product-photo/1.jpg"
          alt="Product photo"
        />
        <img
          className="home__colors-arrow home__colors-arrow--right"
          src="arrow_drawing.svg"
          alt="Arrow"
        />
      </div>
    </section>
  );
};
