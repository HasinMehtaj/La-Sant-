import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";

const TrackProgress = () => {
  return (
    <>
      <Navbar></Navbar>

      <section className="vh-100 bg-light grey">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="shadow-2-strong bg-light grey">
                <div className="card-body p-5 text-center">
                  <h1>Select the type of report you want to view</h1>
                  <div className="form-outline mb-3">
                    <label className="form-label">
                      The reports will illustrate respective graph of week
                      against the tasks that have been completed.
                    </label>
                  </div>

                  <Link href={"/report_diet"}>
                    <button
                      className="btn btn-dark btn-lg btn-block"
                      type="submit"
                    >
                      Report for Diet Chart
                    </button>
                  </Link>

                  <div className="mt-5">
                    <Link href={"/report_workout"}>
                      <button className="btn btn-dark btn-lg btn-block" type="">
                        Report for Workout Routine
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

export default TrackProgress;
