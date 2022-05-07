import { useState } from "react";
import { useGlobalContext } from "../store/context";
import AreaChartComponent from "./AreaChart";
import BarChartComponent from "./BarChartComponent";

const ChartContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications } = useGlobalContext();
  return (
    <section className="mt-16 text-center">
      <h4 className="mb-3 text-center">Monthly Application</h4>

      {barChart ? (
        <BarChartComponent data={monthlyApplications} />
      ) : (
        <AreaChartComponent data={monthlyApplications} />
      )}
      <button
        className="text-2xl capitalize bg-transparent border-transparent text-mainColor"
        type="button"
        onClick={() => setBarChart(!barChart)}
      >
        {barChart ? "Arear Chart" : "Bar Chart"}
      </button>
    </section>
  );
};
export default ChartContainer;
