import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { getbmi } from "../express_api/bmi";
import { suggestPlan } from "../express_api/workout_api";
import format from "date-fns/format";

const a25workout = () => {
  const [BMI, setBMI] = useState(-1);
  const [plan, setPlan] = useState({});
  const [weekNumber, setWeekNumber] = useState(1);
  const [todos, setTodos] = useState([]);
  // const [month, setMonth] = useState(format(new Date(), "MMMM"));
  const [month, setMonth] = useState("January");

  const handleSetWeek = (weekNumber) => {
    setWeekNumber(weekNumber);
    let sliceStart = (weekNumber - 1) * 7;
    let sliceEnd = weekNumber * 7;
    setTodos(plan.todos.slice(sliceStart, sliceEnd));
  };

  const handleSetMonth = (month) => {
    setMonth(month);
    let sliceStart = (month - 1) * 28;
    let sliceEnd = month * 28;
    setTodos(plan.todos.slice(sliceStart, sliceEnd));
  };

  useEffect(() => {
    getbmi()
      .then((data) => {
        if (!data.error) {
          setBMI(data.BMI.toFixed(2));

          suggestPlan("Workout", data.BMI)
            .then((workoutPlan) => {
              setPlan(workoutPlan);
              setTodos(workoutPlan.todos.slice(0, 7));
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let bmiComment = "";
  if (BMI < 18) {
    bmiComment = "underweight";
  } else if (BMI >= 18 && BMI <= 25) {
    bmiComment = "fit";
  } else if (BMI > 25) {
    bmiComment = "overweight";
  }

  return (
    <>
      <div className={styles.main}>
        <Navbar></Navbar>
        <h1 className="text-center">
          {`Hello there! You are ${bmiComment}, let’s get you a suitable workout routine`}
          <br />
          <div className="btn-group justify-content-center">
            <button
              type="button"
              className="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              {`${month}`}
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetMonth("January")}
                >
                  January
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetMonth("February")}
                >
                  February
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetMonth("March")}
                >
                  March
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetMonth("April")}
                >
                  April
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetMonth("Mayy")}
                >
                  May
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetMonth("June")}
                >
                  June
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetMonth("July")}
                >
                  July
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetMonth("August")}
                >
                  August
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetMonth("September")}
                >
                  September
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetMonth("October")}
                >
                  October
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetMonth("November")}
                >
                  November
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetMonth("December")}
                >
                  December
                </button>
              </li>
            </ul>
          </div>
          <br></br>
          <div className="btn-group justify-content-center">
            <button
              type="button"
              className="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              {`Week-${weekNumber}`}
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetWeek(1)}
                >
                  Week-1
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetWeek(2)}
                >
                  Week-2
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetWeek(3)}
                >
                  Week-3
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetWeek(4)}
                >
                  Week-4
                </button>
              </li>
            </ul>
          </div>
        </h1>
        <div className="bg-light grey">
          <div className="m-20 bg-light grey">
            <h1 className="text-center mb-3">Weekly Workout Routine</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Week</th>
                </tr>
              </thead>

              <tbody>
                {todos.map((todo, todoIndex) => {
                  let splitTodos = todo.task.split(", ");

                  return (
                    <tr key={todoIndex}>
                      <td>{todoIndex + 1}</td>

                      {splitTodos.map((splitTodo, splitTodoIndex) => (
                        <td key={splitTodoIndex}>{splitTodo}</td>
                      ))}
                      <td>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default a25workout;
