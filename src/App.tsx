import { Header } from "./components/Header";
import "./App.scss";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
