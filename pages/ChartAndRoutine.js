import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";

const chartandroutine = () => {
  return (
    <>
      <Navbar></Navbar>

      <section className="vh-100 bg-light grey">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="shadow-2-strong bg-light grey">
                <div className="card-body p-5 text-center">
                  <h1>Diet Chart and Routine</h1>
                  <div className="form-outline mb-3">
                    <label className="form-label">
                      Get your suitable diet chart and workout routine from us
                      and make sure to be persistent with the activities. Do set
                      small goals for yourself, be your own motivation, and be
                      disciplined.
                    </label>
                  </div>

                  <button
                    className="btn btn-dark btn-lg btn-block"
                    type="submit"
                  >
                    Diet Chart
                  </button>

                  <div className="mt-5">
                    <Link href={"/a25workout"}>
                      <button className="btn btn-dark btn-lg btn-block" type="">
                        Workout Routine
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default chartandroutine;
