import { Header } from "./components/Header";
import "./App.scss";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
