import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  const router = useRouter();
  const [token, setToken] = useState({ value: null });
  const data = Cookies.get("token");

  const logout = () => {
    Cookies.remove("token");
    router.push("/");
  };

  useEffect(() => {
    if (data) {
      setToken({ value: data });
    } else {
      setToken({ value: null });
    }

    if (token.value) {
      getname(username);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light grey">
      <div className="container-fluid">
        <b>
          <a className="navbar-brand" href="#">
            La Santé
          </a>
        </b>

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
            {!token.value && (
              <button className="btn btn-light disabled">Home</button>
            )}

            {token.value && (
              <Link href={"/"}>
                <button className="btn btn-light">Home</button>
              </Link>
            )}

            {!token.value && (
              <button className="btn btn-light disabled">About</button>
            )}
            {token.value && (
              <Link href={"/About"}>
                <button className="btn btn-light">About</button>
              </Link>
            )}
            {!token.value && (
              <button className="btn btn-light disabled">BMI Calculator</button>
            )}
            {token.value && (
              <Link href={"/BMICalculator"}>
                <button className="btn btn-light">BMI Calculator</button>
              </Link>
            )}
            {!token.value && (
              <button className="btn btn-light disabled">
                Plans and Progress
              </button>
            )}

            {token.value && (
              <div className="btn-group justify-content-center">
                <button
                  type="button"
                  className="btn btn-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                >
                  Plans and Progress
                </button>

                <ul className="dropdown-menu dropdown-menu-lg-end">
                  <li>
                    <Link href={"/a25diet"}>
                      <button className="btn btn-light">Diet Chart</button>
                    </Link>
                  </li>
                  <Link href={"/a25workout"}>
                    <li>
                      <button className="btn btn-light">Workout Routine</button>
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </ul>

          {token.value && (
            <div className="btn-group justify-content-center">
              <button
                type="button"
                className="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                {/* {`${username}`} */}
                {`Name`}
              </button>

              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li>
                  <Link href={"/editprofile"}>
                    <button className="btn btn-light">Edit Profile</button>
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
          {!token.value && (
            <Link href={"/Login"}>
              <button className="btn btn-dark">Login/Signup</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
