import React from 'react';
import { Bar } from 'react-chartjs-2';
import './GraphPromoter.css';
const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  datasets: [
    {
      legend: {
        display: false,
      },
      label: 'Ventas en Dolares',
      backgroundColor: '#194358',
      borderColor: '#00171f',
      borderWidth: 1,
      hoverBackgroundColor: '#00b4d8',
      hoverBorderColor: '#f1f1f1',
      data: [65, 59, 80, 81, 56, 55, 40, 52, 68, 74, 85, 55],
      maintainAspectRatio: false,
      fontColor: '#00b4d8',
    },
  ],
};
function GraphPromoter() {
  return (
    <div className="graphpromoter">
      <h2 className="prueba">Ventas</h2>
      <Bar data={data} />
    </div>
  );
}
export default GraphPromoter;
