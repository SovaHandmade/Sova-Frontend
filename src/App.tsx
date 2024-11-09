import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BurgerMenu } from "./components/BurgerMenu";
import ScrollToTop from "./utils/ScrollToTop";
import "./App.scss";

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
