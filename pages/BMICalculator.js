import { bmi } from "../express_api/bmi";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

const BMICalculator = () => {
  const [mass, setMass] = useState("");
  const [height, setHeight] = useState("");
  const [calculatedbmi, setCalculatedBMI] = useState("");

  const handleBMICalculator = async () => {
    try {
      let data = await bmi(mass, height);
      if (!data.error) {
        setCalculatedBMI(data.BMI);
      }

      console.log(data);
    } catch (error) {
      console.log("bmi error", error);
    }
  };

  return (
    <>
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
                      Mass (Pound)
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
                      Height (Feet)
                    </label>
                    <input
                      type="text"
                      id="text"
                      value={height}
                      onChange={(event) => setHeight(event.target.value)}
                      className="form-control form-control-lg"
                    />
                  </div>

                  <button
                    className="btn btn-dark btn-lg btn-block"
                    onClick={() => handleBMICalculator()}
                  >
                    Compute BMI
                  </button>

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
    </>
  );
};

export default BMICalculator;
