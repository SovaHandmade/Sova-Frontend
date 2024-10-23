import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav-left">
          <img className="header__logo" src="/logo.svg" alt="Logo" />
          <ul className="header__nav-list">
            <li className="header__nav-list-item button-text">Shop</li>
            <li className="header__nav-list-item button-text">About</li>
          </ul>
        </div>

        <div className="header__nav-right">
          <ul className="header__nav-list">
            <li className="header__nav-list-item button-text">
              Cart
              <img
                className="header__basket-icon"
                src="/icons/basket.svg"
                alt="Basket icon"
              />
            </li>
            <li className="header__nav-list-item button-text">
              <img
                className="header__user-icon"
                src="/icons/user_light.svg"
                alt="User icon"
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
