import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { isLoggedIn } from "../../api/api";
import "./BurgerMenu.scss";

export const BurgerMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const { pathname } = useLocation();
  const location = useLocation();

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, [pathname]);

  useEffect(() => {
    const newHash = location.hash;

    if (newHash) {
      if (newHash === "#menu") {
        setIsVisible(true);
      }
    } else {
      setIsVisible(false);
    }
  }, [location]);

  return (
    <div
      className={classNames("burger-menu", {
        "burger-menu--visible": isVisible,
      })}
    >
      <div className="burger-menu__top">
        <Link className="burger-menu__logo" to="/">
          <img src="logo.svg" alt="Logo" />
        </Link>
        <Link className="burger-menu__menu" to="#">
          <img src="icons/burger_menu.svg" alt="Burger menu icon" />
        </Link>
      </div>

      <nav className="burger-menu__nav">
        <ul className="burger-menu__nav-list">
          <li className="burger-menu__nav-item">
            <Link to="/shop" className="button-text">
              Магазин
            </Link>
          </li>
          <li className="burger-menu__nav-item">
            <Link to="/about-me" className="button-text">
              Про мене
            </Link>
          </li>
          <li className="burger-menu__nav-item">
            <Link to="" className="button-text">
              Корзина
              <img
                className="header__basket-icon"
                src="icons/basket.svg"
                alt="Basket icon"
              />
            </Link>
          </li>
          <li className="burger-menu__nav-item">
            <Link to={loggedIn ? "/profile" : "/auth"} className="button-text">
              {loggedIn ? (
                <>
                  Профіль
                  <img
                    className="header__user-icon"
                    src="icons/user_light.svg"
                    alt="User icon"
                  />
                </>
              ) : (
                "Увійти"
              )}
            </Link>
          </li>
        </ul>
      </nav>

      <div className="burger-menu__bottom">
        <p className="small-text">+380 95 131 0343</p>
        <img
          className="footer__user-icon"
          src="icons/facebook.svg"
          alt="Facebook icon"
        />
        <img
          className="footer__user-icon"
          src="icons/instagram.svg"
          alt="Instagram icon"
        />
      </div>
    </div>
  );
};
