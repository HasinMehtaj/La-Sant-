import Navbar from "../components/Navbar";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const a25dietweek1 = () => {
  return (
    <>
      <div className={styles.main}>
        <Navbar></Navbar>
        <div className="bg-light grey">
          <div className="m-20 bg-light grey">
            <h1 className="text-center mb-3">Week-1 Diet Plan</h1>
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
                <tr className="table-light secondary">
                  <td>1</td>
                  <td>1 glass of lukewarm lemon water</td>
                  <td>Sour fruit salad</td>
                  <td>1 apple</td>

                  <td>1 glass of apple juice</td>
                  <td>Sour fruit salad with Greek yogurt dressing</td>
                  <td>1 glass of pomegranate juice</td>
                  <td>
                    Sour fruit salad with Greek yogurt dressing and drizzled
                    vinegar
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineFormCheck"
                      />
                    </div>
                  </td>
                </tr>

                <tr className="table-light secondary">
                  <td>2</td>
                  <td>1 glass of lukewarm lemon water</td>
                  <td>Vegetable salad with fat-free yogurt dressing</td>
                  <td>Sliced cucumber and tomatoes</td>

                  <td>1 glass of cucumber juice</td>
                  <td>Sautéed vegetables with potato nuggets</td>
                  <td>1 glass of carrot juice</td>
                  <td>Vegetable salad with vinegar</td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineFormCheck"
                      />
                    </div>
                  </td>
                </tr>

                <tr className="table-light secondary">
                  <td>3</td>
                  <td>1 glass of lukewarm lemon water</td>
                  <td>Sour fruit salad</td>
                  <td>1 apple</td>

                  <td>1 glass of apple juice</td>
                  <td>Sour fruit salad with Greek yogurt dressing</td>
                  <td>1 glass of pomegranate juice</td>
                  <td>
                    Sour fruit salad with Greek yogurt dressing and drizzled
                    vinegar{" "}
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineFormCheck"
                      />
                    </div>
                  </td>
                </tr>

                <tr className="table-light secondary">
                  <td>4</td>
                  <td>1 glass of lukewarm lemon water</td>
                  <td>Vegetable salad with fat-free yogurt dressing</td>
                  <td>Sliced cucumber and tomatoes</td>

                  <td>1 glass of cucumber juice</td>
                  <td>Sautéed vegetables with potato nuggets</td>
                  <td>1 glass of carrot juice</td>
                  <td>Vegetable salad with vinegar</td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineFormCheck"
                      />
                    </div>
                  </td>
                </tr>

                <tr className="table-light secondary">
                  <td>5</td>
                  <td>1 glass of lukewarm lemon water</td>
                  <td>Sour fruit salad</td>
                  <td>1 apple</td>

                  <td>1 glass of apple juice</td>
                  <td>Sour fruit salad with Greek yogurt dressing</td>
                  <td>1 glass of pomegranate juice</td>
                  <td>
                    Sour fruit salad with Greek yogurt dressing and drizzled
                    vinegar{" "}
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineFormCheck"
                      />
                    </div>
                  </td>
                </tr>

                <tr className="table-light secondary">
                  <td>6</td>
                  <td>1 glass of lukewarm lemon water</td>
                  <td>Vegetable salad with fat-free yogurt dressing</td>
                  <td>Sliced cucumber and tomatoes</td>

                  <td>1 glass of cucumber juice</td>
                  <td>Sautéed vegetables with potato nuggets</td>
                  <td>1 glass of carrot juice</td>
                  <td>Vegetable salad with vinegar</td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineFormCheck"
                      />
                    </div>
                  </td>
                </tr>

                <tr className="table-light secondary">
                  <td>7</td>
                  <td>1 glass of lukewarm lemon water</td>
                  <td>Sour fruit salad</td>
                  <td>1 apple</td>

                  <td>1 glass of apple juice</td>
                  <td>Sour fruit salad with Greek yogurt dressing</td>
                  <td>1 glass of pomegranate juice</td>
                  <td>
                    Sour fruit salad with Greek yogurt dressing and drizzled
                    vinegar{" "}
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineFormCheck"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default a25dietweek1;
