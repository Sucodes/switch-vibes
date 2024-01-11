import Faq from "../faq/Faq";
import Credits from "../credits/Credits";
import About from "../about/About";
import Perks from "../perks/Perks";
import Header from "../header/Header";

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
