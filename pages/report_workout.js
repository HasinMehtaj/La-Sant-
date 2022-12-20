import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const report_workout = () => {
  return (
    <>
      <div className={styles.main}>
        <Navbar></Navbar>
        <Footer></Footer>
      </div>
    </>
  );
};

export default report_workout;
