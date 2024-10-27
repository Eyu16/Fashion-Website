// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// import Styles from "./chat.module.css";

// // Register the components you need
// Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const SalesDistributionChart = () => {
//   const data = {
//     labels: ["Men", "Women", "Accessories", "Shoes", "Others"],
//     datasets: [
//       {
//         label: "Sales Distribution",
//         data: [30, 40, 20, 5, 5], // Replace these numbers with actual sales data
//         backgroundColor: [
//           "rgba(75, 192, 192, 0.6)",
//           "rgba(255, 99, 132, 0.6)",
//           "rgba(255, 206, 86, 0.6)",
//           "rgba(54, 162, 235, 0.6)",
//           "rgba(153, 102, 255, 0.6)",
//         ],
//         borderColor: [
//           "rgba(75, 192, 192, 1)",
//           "rgba(255, 99, 132, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(153, 102, 255, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };
//   const options = {
//     responsive: true,
//     // maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Sales Distribution by Category",
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Categories",
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Sales ($)",
//         },
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className={Styles.chart_container}>
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default SalesDistributionChart;
