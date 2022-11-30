import Navbar from "../components/Navbar";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const a25workoutroutine = () => {
  return (
    <>
      <div className={styles.main}>
        <Navbar></Navbar>
        <div className="bg-light grey">
          <div className="m-20 bg-light grey">
            <h1 className="text-center mb-3">
              Workout Routine for Overweight People
            </h1>
            <div className="btn-group justify-content-center">
              <button
                type="button"
                className="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                Please choose the month for which you want to see the workout
                routine
              </button>
              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li>
                  <button className="dropdown-item" type="button">
                    January
                  </button>
                </li>

                <li>
                  <button className="dropdown-item" type="button">
                    February
                  </button>
                </li>

                <li>
                  <button className="dropdown-item" type="button">
                    March
                  </button>
                </li>

                <li>
                  <button className="dropdown-item" type="button">
                    April
                  </button>
                </li>

                <li>
                  <button className="dropdown-item" type="button">
                    May
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    June
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    July
                  </button>
                </li>

                <li>
                  <button className="dropdown-item" type="button">
                    August
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    September
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    October
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    November
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    December
                  </button>
                </li>
              </ul>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Week-1</th>
                  <th>Week-2</th>
                  <th>Week-3</th>
                  <th>Week-4</th>
                </tr>
              </thead>

              <tbody>
                <tr className="table-light secondary">
                  <td>1</td>
                  <td>Walking</td>
                  <td>Walking</td>
                  <td>Walking</td>
                  <td>Walking</td>
                </tr>

                <tr className="table-light secondary">
                  <td>2</td>
                  <td>Pushups</td>
                  <td> Stationary Bike</td>
                  <td>Pushups</td>
                  <td> Side Leg Lifts</td>
                </tr>

                <tr className="table-light secondary">
                  <td>3</td>
                  <td>Side Leg Lifts</td>
                  <td> Squats</td>
                  <td> Stationary Bike</td>
                  <td>Bridges</td>
                </tr>

                <tr className="table-light secondary">
                  <td>4</td>
                  <td>Stretching</td>
                  <td> Bridges</td>
                  <td>Stretching</td>
                  <td> Squats</td>
                </tr>

                <tr className="table-light secondary">
                  <td>5</td>
                  <td>Stationary Bike</td>
                  <td>Side Leg Lifts</td>
                  <td> Bridges</td>
                  <td>Stationary Bike</td>
                </tr>

                <tr className="table-light secondary">
                  <td>6</td>

                  <td>Bridges</td>
                  <td>Pushups </td>
                  <td>Squats</td>
                  <td> Pushups</td>
                </tr>
                <tr className="table-light secondary">
                  <td>7</td>
                  <td>Squats</td>
                  <td> Stretching</td>
                  <td> Side Leg Lifts</td>
                  <td> Stretching</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default a25workoutroutine;
