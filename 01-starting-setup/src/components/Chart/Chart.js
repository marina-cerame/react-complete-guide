import './Chart.css';

import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
  return (
    <div className="chart">
      {dataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={null}
          label={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;
