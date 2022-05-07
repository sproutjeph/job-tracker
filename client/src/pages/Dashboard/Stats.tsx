import { useEffect } from "react";
import { ChartContainer, Loading, StatsContainer } from "../../components";
import { useGlobalContext } from "../../store/context";

const Stats = () => {
  const { isLoading, showStats, monthlyApplications } = useGlobalContext();

  useEffect(() => {
    showStats();
    // eslint-disable-next-line
  }, []);
  if (isLoading) {
    return <Loading center="center" />;
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartContainer />}
    </>
  );
};
export default Stats;
