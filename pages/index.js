import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <Navbar></Navbar>

        <div className="card bg-light grey text-dark justify-content-center">
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
            <b>
              <h1 className="card-title">Stay Healthy!</h1>
            </b>
            <div className="card-text margin-top">
              <p>
                Being regular in maintaining the diet chart and workout routine
                and reducing heart attack risk
              </p>
              <p>
                has become an unwanted trend is what you need us for. Click on
                the link below to get your
              </p>
              <p>
                Body Mass Index (BMI) calculated and use it to get a suitable
                diet chart and workout routine to get fit.
              </p>
              <p>
                Always remember, no matter what you do, discipline and
                consistency is always the key.
              </p>
            </div>
            <div className="card-text">
              <Link href={"/BMICalculator"}>
                <button className="btn btn-dark" type="submit">
                  BMI Calculator
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}
