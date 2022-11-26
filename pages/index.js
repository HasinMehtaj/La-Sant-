import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.main}>
        <div className="card bg-light grey text-dark">
          <Image
            src="/HomepageImage.jpg"
            width={1800}
            height={1000}
            className="mt-6"
          ></Image>
          <div className="card-img-overlay">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <b>
              <h1 className="card-title">Stay Healthy!</h1>
            </b>
            <div className="card-text margin-top">
              Being regular in maintaining the diet chart and workout routine
              and reducing heart attack risk that
            </div>
            <p>
              needless to say has become an unwanted trend is what you need us
              for.
            </p>
            <div className="card-text">
              <button className="btn btn-dark" type="submit">
                BMI Calculator
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
