// import { updateProfile } from "../express_api/updateProfile";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

const editprofile = () => {
  // const router = useRouter();
  const [username, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    try {
      const token = Cookies.get("token");
      const user = JSON.parse(Cookies.get("user"));
      let response = await fetch(`/api/auth/updateProfile/${user._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(data),
      });

      console.log("response", response);
      let res = await response.json();
      console.log("res", res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  // const handleupdateProfile = async () => {
  //   try {
  //     let data = await updateProfile(username, email, password);
  //     if (!data.error) {
  //       Cookies.get("token", data.token);
  //       Cookies.get("user", JSON.stringify(data.user));
  //       router.push("/");
  //     }
  //   } catch (error) {
  //     console.log("updaeProfile error", error);
  //   }
  // };

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
                    <label className="form-label" htmlFor="typePasswordX-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="text"
                      className="form-control form-control-lg"
                      value={username}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="typePasswordX-2">
                      E-mail
                    </label>
                    <input
                      type="text"
                      id="text"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="typePasswordX-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>

                  <button
                    className="btn btn-dark btn-lg btn-block"
                    type="submit"
                    onClick={handleSubmit}
                    // onClick={() => handleupdateProfile()}
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

export default editprofile;
