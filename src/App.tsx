import { Header } from "./components/Header";
import "./App.scss";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="main">
      <Header />
      <ScrollToTop />

      <div className="container">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
