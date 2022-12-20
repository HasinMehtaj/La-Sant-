import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className={styles.main}>
        <Navbar></Navbar>

        <div className={styles.main}>
          <div className="card bg-light grey text-dark justify-content-evenly">
            <Image
              src="/About.jpg"
              width={1700}
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
                <h1 className="card-title">About</h1>
              </b>
              <p className="card-text margin-top">
                La Santé is a fitness tracker web application that helps people
                to get their
              </p>
              <p>
                Body Mass Index (BMI) calculated and get a diet chart a proper
                workout routine
              </p>
              <p>
                based on that calculated value. Later on, the user will be able
                to track his/her
              </p>
              <p> progress by viewing reports from the report sections.</p>

              <div className="card-text">
                <Link href={"/BMICalculator"}>
                  <button className="btn btn-dark" type="submit">
                    BMI Calculator
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
