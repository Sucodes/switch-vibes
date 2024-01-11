import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import styles from "./Layout.module.scss";
import Home from "../pages/home/Home";

const Layout = () => {
  return (
    <main className={styles.container}>
      <Navbar />
      <>
        <Home/>
      </>
      <Footer />
    </main>
  );
};

export default Layout;
