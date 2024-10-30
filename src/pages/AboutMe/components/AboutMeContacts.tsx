import "./AboutMeContacts.scss";

export const AboutMeContacts = () => {
  return (
    <section className="about-me__contacts">
      <h2 className="about-me__title">Зв’язатись зі мною</h2>

      <div className="about-me__contacts-container">
        <div className="about-me__contacts-number">
          <h3>Телефон: +380951310343</h3>

          <div className="about-me__contacts-socials">
            <img src="/icons/telegram.svg" alt="" />
            <p className="small-text">або</p>
            <img src="/icons/viber.svg" alt="" />
          </div>
        </div>
        <h3>Email: sosnovska.0625@gmail.com</h3>
      </div>
    </section>
  );
};
