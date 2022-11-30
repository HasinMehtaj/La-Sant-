import Navbar from "../components/Navbar";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const b25workoutroutine = () => {
  return (
    <>
      <div className={styles.main}>
        <Navbar></Navbar>
        <div className="bg-light grey">
          <div className="m-20 bg-light grey">
            <h1 className="text-center mb-3">
              Workout Routine for Underweight People
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
            <br></br>

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
                  <td>Crunches</td>
                  <td>Crunches</td>
                  <td> Triceps dips</td>
                  <td> Triceps dips</td>
                </tr>

                <tr className="table-light secondary">
                  <td>2</td>
                  <td>Pushups</td>
                  <td>Pushups</td>
                  <td>Bench Press</td>
                  <td> Bench Press</td>
                </tr>

                <tr className="table-light secondary">
                  <td>3</td>
                  <td>Lunges</td>
                  <td>Lunges</td>
                  <td>Deadlifts</td>
                  <td>Pullups</td>
                </tr>

                <tr className="table-light secondary">
                  <td>4</td>
                  <td>Squats</td>
                  <td>Squats</td>
                  <td>Pushups</td>
                  <td>Deadlifts</td>
                </tr>

                <tr className="table-light secondary">
                  <td>5</td>
                  <td>Pullups</td>
                  <td>Deadlifts</td>
                  <td>Lunges</td>
                  <td>Pushups</td>
                </tr>

                <tr className="table-light secondary">
                  <td>6</td>

                  <td>Bench Press</td>
                  <td>Pullups</td>
                  <td>Squats</td>
                  <td>Lunges</td>
                </tr>
                <tr className="table-light secondary">
                  <td>7</td>
                  <td>Deadlifts</td>
                  <td> Bench Press</td>
                  <td> Pullups</td>
                  <td> Squats</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default b25workoutroutine;
