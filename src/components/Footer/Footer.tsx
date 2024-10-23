import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <div className="footer__nav-left">
          <img className="footer__logo" src="/logo.svg" alt="Logo" />
          <ul className="footer__nav-list">
            <li className="footer__nav-list-item button-text">Shop</li>
            <li className="footer__nav-list-item button-text">About</li>
            <li className="footer__nav-list-item button-text">Q&A</li>
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
