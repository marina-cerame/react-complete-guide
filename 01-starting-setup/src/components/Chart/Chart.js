import './Chart.css';

import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((point) => point.value);
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={maxValue}
          label={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;
