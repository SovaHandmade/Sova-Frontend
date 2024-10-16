import "./HomeCompositions.scss";

const IMAGES = [
  "product-photo/1.jpg",
  "product-photo/1.jpg",
  "product-photo/1.jpg",
];

export const HomeCompositions = () => {
  return (
    <section className="home__compositions">
      <div className="home__text home__compositions-title ">
        Унікальні <strong className="home__text-gradient">композиції</strong>
        <br />
        для затишку і святкової
        <br />
        <strong className="home__text-gradient home__text-right">
          атмосфери
        </strong>
      </div>

      <p className="home__subtitle home__compositions-subtitle">
        Обирайте готовий виріб або замовляйте індивідуальну композицію, створену
        <br />
        спеціально для вашого простору.
      </p>

      <div className="home__compositions-images">
        {IMAGES.map((image, index) => (
          <img
            className="home__image"
            src={image}
            key={index}
            alt="Product photo"
          />
        ))}
      </div>
    </section>
  );
};
