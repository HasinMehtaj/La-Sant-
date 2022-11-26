import Link from "next/link";

const Navbar = () => {
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

            <Link href={"/chartandroutine"}>
              <li className="nav-item nav-link active">Chart and Routine</li>
            </Link>

            <Link href={"/TrackProgress"}>
              <li className="nav-item nav-link active">Track Progress</li>
            </Link>
          </ul>

          <Link href={"/Login"}>
            <button className="btn btn-dark">Login/Signup</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
