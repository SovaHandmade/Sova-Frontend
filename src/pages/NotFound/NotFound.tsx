import "./NotFound.scss";

export const NotFound = () => {
  return (
    <div className="not-found centered">
      <div className="not-found__top">
        <h1>Ой, сторінка на знайдена</h1>
        <p className="body-text">Пошукай в іншому місці</p>
      </div>

      <img className="not-found__text" src="/404.svg" alt="404 text" />
      <img
        className="not-found__gradient"
        src="/gradients/not-found/vector.svg"
        alt="Background gradient"
      />
    </div>
  );
};
