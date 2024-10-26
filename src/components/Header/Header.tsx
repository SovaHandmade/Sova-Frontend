import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import "./Header.scss";

export const Header = () => {
  const navClassnameHandler = ({ isActive }: { isActive: boolean }) =>
    classNames("header__nav-link button-text", {
      "header__nav-link--active": isActive,
    });

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav-left">
          <Link to="/">
            <img className="header__logo" src="/logo.svg" alt="Logo" />
          </Link>
          <ul className="header__nav-list header__nav-list-left">
            <li className="header__nav-list-item">
              <NavLink className={navClassnameHandler} to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="header__nav-list-item">
              <NavLink className={navClassnameHandler} to="/about-me">
                About
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="header__nav-right">
          <ul className="header__nav-list">
            <li className="header__nav-list-item">
              <Link className="header__nav-link button-text" to="/cart">
                Cart
                <img
                  className="header__basket-icon"
                  src="/icons/basket.svg"
                  alt="Basket icon"
                />
              </Link>
            </li>

            <li className="header__nav-list-item header__nav-profile">
              <Link className="header__nav-link button-text" to="/profile">
                <img
                  className="header__user-icon"
                  src="/icons/user_light.svg"
                  alt="User icon"
                />
              </Link>
            </li>

            <li className="header__nav-list-item header__nav-menu">
              <Link className="header__nav-link button-text" to="#menu">
                <img
                  className="header__user-icon"
                  src="/icons/burger_menu.svg"
                  alt="Burger menu icon"
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
