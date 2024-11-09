import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import "./Footer.scss";

export const Footer = () => {
  const navClassnameHandler = ({ isActive }: { isActive: boolean }) =>
    classNames("header__nav-link button-text", {
      "header__nav-link--active": isActive,
    });

  return (
    <footer className="footer">
      <nav className="footer__nav">
        <div className="footer__nav-left">
          <Link to="/">
            <img className="footer__logo" src="logo.svg" alt="Logo" />
          </Link>
          <ul className="footer__nav-list">
            <li className="footer__nav-list-item button--text">
              <NavLink className={navClassnameHandler} to="/shop">
                Магазин
              </NavLink>
            </li>
            <li className="footer__nav-list-item button--text">
              <NavLink className={navClassnameHandler} to="/about-me">
                Про мене
              </NavLink>
            </li>
            <li className="footer__nav-list-item button--text">
              <NavLink className={navClassnameHandler} to="/about-me">
                Q&A
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer__nav-right">
          <ul className="footer__nav-list">
            <li className="footer__nav-list-item button--text small-text">
              <a
                className="footer__nav-list-item-link"
                href="tel:+380951310343"
              >
                +380 95 131 0343
              </a>
            </li>
            <li className="footer__nav-list-item button--text button-text">
              <a href="https://m.facebook.com/profile.php?id=100010911012013">
                <img
                  className="footer__user-icon"
                  src="icons/facebook.svg"
                  alt="Facebook icon"
                />
              </a>
            </li>
            <li className="footer__nav-list-item button--text button-text">
              <a href="https://www.instagram.com/olia.sosnovska/">
                <img
                  className="footer__user-icon"
                  src="icons/instagram.svg"
                  alt="Instagram icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};
