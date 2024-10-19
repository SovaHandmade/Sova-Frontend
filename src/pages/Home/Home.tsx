import { HomeColors } from "./components/HomeColors";
import { HomeCompositions } from "./components/HomeCompositions";
import { HomeFAQ } from "./components/HomeFAQ";
import { HomeMain } from "./components/HomeMain";
import "./Home.scss";

export const Home = () => {
  return (
    <main className="home">
      <HomeMain />
      <HomeCompositions />
      <HomeColors />
      <HomeFAQ />
    </main>
  );
};
