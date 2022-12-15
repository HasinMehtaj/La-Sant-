import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [token, setToken] = useState({ value: null });
  const data = Cookies.get("token");
  // const [username, setName] = useState("");

  const logout = () => {
    Cookies.remove("token");
  };

  useEffect(() => {
    if (data) {
      setToken({ value: data });
    } else {
      setToken({ value: null });
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light grey">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          La Sante
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link href={"/"}>
              <li className="nav-item nav-link active">Home</li>
            </Link>

            <Link href={"/About"}>
              <li className="nav-item nav-link active">About</li>
            </Link>

            <Link href={"/BMICalculator"}>
              <li className="nav-item nav-link active">BMI Calculator</li>
            </Link>

            <Link href={"/ChartAndRoutine"}>
              <li className="nav-item nav-link active">Chart and Routine</li>
            </Link>

            <Link href={"/TrackProgress"}>
              <li className="nav-item nav-link active">Track Progress</li>
            </Link>
          </ul>
          {!token.value && (
            <Link href={"/Login"}>
              <button className="btn btn-dark">Login/Signup</button>
            </Link>
          )}
          {token.value && (
            <div className="btn-group justify-content-center">
              <button
                type="button"
                className="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                {`Name`}
              </button>

              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li>
                  <Link href={"/editprofile"}>
                    <button className="dropdown-item" type="button">
                      Edit Profile
                    </button>
                  </Link>
                </li>

                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
