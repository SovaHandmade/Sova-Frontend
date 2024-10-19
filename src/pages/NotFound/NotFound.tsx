import "./NotFound.scss";

export const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Ой, сторінка на знайдена</h1>
      <p className="body-text">Пошукай в іншому місці</p>
      <img src="404.svg" alt="404 text" />
      <img
        className="not-found__gradient"
        src="gradients/not-found/vector.svg"
        alt="Background gradient"
      />
    </div>
  );
};
