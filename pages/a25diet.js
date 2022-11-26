import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";

const a25diet = () => {
  return (
    <>
      <Navbar></Navbar>

      <h1>
        Hello there! You are overweight, let's make you follow a proper diet
        plan to get you fit and healthy.
        <br />
        <div className="btn-group justify-content-center">
          <button
            type="button"
            className="btn btn-dark dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            Please choose the week number for which you want the diet chart
          </button>
          <ul className="dropdown-menu dropdown-menu-lg-end">
            <Link href={"/a25dietweek1"}>
              <li>
                <button className="dropdown-item" type="button">
                  Week-1
                </button>
              </li>
            </Link>

            <Link href={"/a25dietweek2"}>
              <li>
                <button className="dropdown-item" type="button">
                  Week-2
                </button>
              </li>
            </Link>

            <Link href={"/a25dietweek3"}>
              <li>
                <button className="dropdown-item" type="button">
                  Week-3
                </button>
              </li>
            </Link>

            <Link href={"/a25dietweek4"}>
              <li>
                <button className="dropdown-item" type="button">
                  Week-4
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </h1>
      <Footer></Footer>
    </>
  );
};

export default a25diet;
