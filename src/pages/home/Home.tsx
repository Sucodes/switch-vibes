import Faq from "pages/faq/Faq";
import Credits from "pages/credits/Credits";
import About from "pages/about/About";
import Perks from "pages/perks/Perks";
import Header from "pages/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Perks />
      <Faq />
      <Credits />
    </>
  );
};

export default Home;
