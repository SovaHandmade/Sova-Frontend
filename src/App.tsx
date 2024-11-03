import { Header } from "./components/Header";
import "./App.scss";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import { BurgerMenu } from "./components/BurgerMenu";

function App() {
  return (
    <div className="main">
      <Header />
      <BurgerMenu />

      <ScrollToTop />

      <div className="container">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
