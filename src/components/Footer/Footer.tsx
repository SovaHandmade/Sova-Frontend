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
            <img className="footer__logo" src="/logo.svg" alt="Logo" />
          </Link>
          <ul className="footer__nav-list">
            <li className="footer__nav-list-item">
              <NavLink className={navClassnameHandler} to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="footer__nav-list-item">
              <NavLink className={navClassnameHandler} to="/about-me">
                About
              </NavLink>
            </li>
            <li className="footer__nav-list-item">
              <NavLink className={navClassnameHandler} to="/about-me">
                Q&A
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer__nav-right">
          <ul className="footer__nav-list">
            <li className="footer__nav-list-item small-text">
              +380 95 131 0343
            </li>
            <li className="footer__nav-list-item button-text">
              <img
                className="footer__user-icon"
                src="/icons/facebook.svg"
                alt="Facebook icon"
              />
            </li>
            <li className="footer__nav-list-item button-text">
              <img
                className="footer__user-icon"
                src="/icons/instagram.svg"
                alt="Instagram icon"
              />
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};
