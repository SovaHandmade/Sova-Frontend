import { HomeColors } from "./components/HomeColors";
import { HomeCompositions } from "./components/HomeCompositions";
import { HomeFAQ } from "./components/HomeFAQ";
import { HomeMain } from "./components/HomeMain";
import "./Home.scss";

export const Home = () => {
  return (
    <main className="home">
      <img
        className="home__background"
        src="background_gradient.svg"
        alt="Background gradient"
      />

      <HomeMain />
      <HomeCompositions />
      <HomeColors />
      <HomeFAQ />
    </main>
  );
};
