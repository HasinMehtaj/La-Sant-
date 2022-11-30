import Navbar from "../components/Navbar";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const e25workoutroutine = () => {
  return (
    <>
      <div className={styles.main}>
        <Navbar></Navbar>
        <div className="bg-light grey">
          <div className="m-20 bg-light grey">
            <h1 className="text-center mb-3">Workout Routine for Fit People</h1>
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
                  <td>Jumping jacks </td>
                  <td>Yoga</td>
                  <td> Walking</td>
                  <td> 15-Minutes Cardio</td>
                </tr>

                <tr className="table-light secondary">
                  <td>2</td>
                  <td>Yoga</td>
                  <td> 15-Minutes Cardio </td>
                  <td>Yoga</td>
                  <td> Rest</td>
                </tr>

                <tr className="table-light secondary">
                  <td>3</td>
                  <td>Walking</td>
                  <td> Walking</td>
                  <td> Dumbbell Rows </td>
                  <td>Dumbbell Rows</td>
                </tr>

                <tr className="table-light secondary">
                  <td>4</td>
                  <td>15-Minutes Cardio</td>
                  <td> Pushups</td>
                  <td> Jogging</td>
                  <td> Jogging</td>
                </tr>

                <tr className="table-light secondary">
                  <td>5</td>
                  <td>Dumbbell Presses</td>
                  <td> Dumbbell Rows</td>
                  <td> 15-Minutes Cardio</td>
                  <td> Dumbbell Presses</td>
                </tr>

                <tr className="table-light secondary">
                  <td>6</td>

                  <td>Walking </td>
                  <td>15-Minutes Cardio</td>
                  <td>Dumbbell Presses </td>
                  <td>Yoga</td>
                </tr>
                <tr className="table-light secondary">
                  <td>7</td>
                  <td>Dumbbell Rows</td>
                  <td> Walking</td>
                  <td> Jogging</td>
                  <td> Jogging</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default e25workoutroutine;
