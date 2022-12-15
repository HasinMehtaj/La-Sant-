import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { getbmi } from "../express_api/bmi";
import { suggestPlan } from "../express_api/diet_api";
import { checkTodos, getUserProgress } from "../express_api/progress_api";
import format from "date-fns/format";

const a25diet = ({}) => {
  const [BMI, setBMI] = useState(-1);
  const [plan, setPlan] = useState({});
  const [weekNumber, setWeekNumber] = useState(1);
  const [todos, setTodos] = useState([]);
  const [month, setMonth] = useState(format(new Date(), "MMMM"));
  // const [month, setMonth] = useState("January");
  const [year, setYear] = useState(format(new Date(), "yyyy"));
  // const [year, setYear] = useState(2022);

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

  const handleSetYear = (year) => {
    setYear(year);
    let sliceStart = (year - 1) * 355;
    let sliceEnd = year * 355;
    setTodos(plan.todos.slice(sliceStart, sliceEnd));
  };

  function monthNameToNumber(monthName) {
    const date = new Date(`${monthName} 1, 2020`);

    const monthNumber = date.getMonth();

    return monthNumber + 1;
  }

  const handleCheckTodos = async (splitTodoIndex) => {
    try {
      let data = await checkTodos(
        plan._id,
        monthNameToNumber(month),
        2022,
        splitTodoIndex + 7 * (weekNumber - 1)
      );

      let planCopy = { ...plan };
      planCopy.todos[splitTodoIndex + 7 * (weekNumber - 1)].isComplete =
        !planCopy.todos[splitTodoIndex + 7 * (weekNumber - 1)].isComplete;
      setPlan(planCopy);

      if (!data.error) {
        console.log(data);
      }
    } catch (error) {
      console.log("checkTodos error", error);
    }
  };

  useEffect(() => {
    getbmi()
      .then((data) => {
        if (!data.error) {
          setBMI(data.BMI.toFixed(2));

          suggestPlan("Diet", data.BMI)
            .then((dietPlan) => {
              getUserProgress(
                dietPlan._id,
                monthNameToNumber(month),
                2022
              ).then((progress) => {
                console.log("progress", progress.todos);
                console.log("dietPlan.todos", dietPlan.todos);

                for (
                  let progressTodoIndex = 0;
                  progressTodoIndex < progress.todos.length;
                  progressTodoIndex++
                ) {
                  const progressTodo = progress.todos[progressTodoIndex];
                  if (progressTodo.isComplete) {
                    dietPlan.todos[progressTodoIndex].isComplete = true;
                  } else {
                    dietPlan.todos[progressTodoIndex].isComplete = false;
                  }
                }

                setPlan(dietPlan);
                setTodos(dietPlan.todos.slice(0, 7));
              });
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
          {`Hello there! You are ${bmiComment}, let's get you a suitable diet`}
          <br />

          <div className="btn-group justify-content-center">
            <button
              type="button"
              className="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              {`${year}`}
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetYear(2022)}
                >
                  2022
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetYear(2023)}
                >
                  2023
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetYear(2024)}
                >
                  2024
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetYear(2025)}
                >
                  2025
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetYear(2026)}
                >
                  2026
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetYear(2027)}
                >
                  2027
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetYear(2028)}
                >
                  2028
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetYear(2029)}
                >
                  2029
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetYear(2030)}
                >
                  2030
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSetYear(2031)}
                >
                  2031
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
                  onClick={() => handleSetMonth("May")}
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
            <h1 className="text-center mb-3">Weekly Diet Chart</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>6 am</th>
                  <th>6:30 am</th>
                  <th>8 am</th>
                  <th>10 am</th>
                  <th>1 pm</th>
                  <th>4 pm</th>
                  <th>8 pm</th>
                  <th>Tasks Completed</th>
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
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={todo.isComplete}
                            onChange={() => handleCheckTodos(todoIndex)}
                          />
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

export default a25diet;
