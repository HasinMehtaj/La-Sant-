import { bmi } from "../express_api/bmi";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BMICalculator = () => {
  const [mass, setMass] = useState("");
  const [height, setHeight] = useState("");
  const [calculatedbmi, setCalculatedBMI] = useState("");

  const handleBMICalculator = async () => {
    try {
      let data = await bmi(mass, height);
      if (!data.error) {
        setCalculatedBMI(data.BMI.toFixed(2));
      }

      console.log(data);
    } catch (error) {
      console.log("bmi error", error);
    }
  };

  return (
    <>
      <div className={styles.main}>
        <Navbar></Navbar>
        <section className="vh-100 bg-light grey">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="shadow-2-strong bg-light grey">
                  <div className="card-body p-5 text-center">
                    <h1 className="mb-5">BMI Calculator</h1>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="text">
                        Mass (Kilograms)
                      </label>
                      <input
                        type="text"
                        id="text"
                        value={mass}
                        onChange={(event) => setMass(event.target.value)}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="text">
                        Height (Metres)
                      </label>
                      <input
                        type="text"
                        id="text"
                        value={height}
                        onChange={(event) => setHeight(event.target.value)}
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className={styles.btn}>
                      <button
                        className="btn 
                     btn-lg btn-block"
                        onClick={() => handleBMICalculator()}
                      >
                        Compute BMI
                      </button>
                    </div>
                    <br></br>
                    <br></br>

                    <input
                      disabled
                      type="text"
                      id="text"
                      value={calculatedbmi}
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
};

export default BMICalculator;
