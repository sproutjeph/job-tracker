import { IconType } from "react-icons";
import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from "react-icons/fa";
import { useGlobalContext } from "../store/context";
import StatItem from "./StatItem";

interface IStats {
  title: string;
  count: number;
  Icon: IconType;
  color: string;
  bcg: string;
}

const StatsContainer = () => {
  const { stats } = useGlobalContext();

  const defaultStats: IStats[] = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      Icon: FaSuitcaseRolling,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      Icon: FaCalendarCheck,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      Icon: FaBug,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];

  return (
    <section className="grid gap-8 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4">
      {defaultStats.map((item, index) => {
        return <StatItem {...item} key={index} />;
      })}
    </section>
  );
};
export default StatsContainer;
