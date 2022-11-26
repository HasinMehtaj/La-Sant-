import { register } from "../express_api/register";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    try {
      let data = await register(username, email, password);
      if (!data.error) {
        Cookies.set("token", data.token);
        Cookies.set("user", JSON.stringify(data.user));
        router.push("/");
      }
    } catch (error) {
      console.log("register error", error);
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
                  <h3 className="mb-5">Create Account</h3>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="text">
                      Name
                    </label>
                    <input
                      type="text"
                      id="text"
                      value={username}
                      onChange={(event) => setName(event.target.value)}
                      className="form-control form-control-lg"
                    />

                    <label className="form-label" htmlFor="text">
                      E-mail
                    </label>
                    <input
                      type="text"
                      id="text"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typePasswordX-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="typePasswordX-2"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typePasswordX-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="typePasswordX-2"
                      value={confirmpassword}
                      onChange={(event) =>
                        setConfirmPassword(event.target.value)
                      }
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      &nbsp;Remember password{" "}
                    </label>
                  </div>

                  <button
                    className="btn btn-dark btn-lg btn-block"
                    onClick={() => handleRegister()}
                  >
                    Register
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

export default Register;
