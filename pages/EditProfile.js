import React from "react";
import Navbar from "../Components/Navbar";

const EditProfile = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="vh-100 bg-light grey">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="shadow-2-strong bg-light grey">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-0">Edit Profile</h3>

                  <div className="form-outline mb-3">
                    <label className="form-label" for="typePasswordX-2">
                      Name
                    </label>
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <label className="form-label" for="typePasswordX-2">
                      E-mail
                    </label>
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <label className="form-label" for="typePasswordX-2">
                      Gender
                    </label>
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <label className="form-label" for="typePasswordX-2">
                      Age
                    </label>
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <label className="form-label" for="typePasswordX-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <label className="form-label" for="typePasswordX-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <button
                    className="btn btn-dark btn-lg btn-block"
                    type="submit"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditProfile;
