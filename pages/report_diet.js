import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const report_diet = () => {
  const data = {
    labels: ["Week-1", "Week-2", "Week-3", "Week-4"],
    datasets: [
      {
        label: "Tasks completed per week",
        borderRadius: 5,
        data: [1, 5, 3, 7],
        backgroundColor: "rgb(163, 97, 218)",
        barThickness: 10,
        barPercentage: 0.5,
        maxBarThickness: 10,
        minBarLenght: 1,
        tension: 1,
      },
    ],
  };

  // const config = {
  //   type: "bar",
  //   data,
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //         ticks: {
  //           maxTicksLimit: 4,
  //           callback: (context, index) => {
  //             console.log(context);
  //             let response;
  //             if (context === 1) {
  //               response = "low";
  //             } else if (context === 2) {
  //               response = "Medium";
  //             } else if (context === 3) {
  //               response = "High";
  //             } else {
  //               response = "Start";
  //             }
  //             return response;
  //           },
  //         },
  //       },
  //     },
  //   },
  // };

  const options = {
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          boxWidth: 3,
          usePointStyle: true,
          pointStyle: "circle",
        },
        title: {
          text: "Progress Report",
          display: true,
          color: "#000",
          font: {
            size: 30,
          },
        },
      },
    },
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        max: 1,
        // suggestedMin: 0,
        // suggestedMax: 7,
      },
    },
    elements: {
      bar: {
        barPercentage: 0.3,
        categoryPercentage: 1,
      },
    },
  };

  return (
    <>
      <div className={styles.main}>
        <Navbar></Navbar>

        <div className={styles.chartBox}>
          <div className="justify-content-center">
            <Bar
              data={data}
              width={400}
              height={400}
              // config={config}
              option={options}
            ></Bar>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default report_diet;
