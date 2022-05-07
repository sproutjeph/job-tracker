import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IconType } from "react-icons";

interface ILinks {
  id: number;
  text: string;
  path: string;
  Icon: IconType;
}

const links: ILinks[] = [
  { id: 1, text: "stats", path: "/", Icon: IoBarChartSharp },
  { id: 2, text: "all jobs", path: "all-jobs", Icon: MdQueryStats },
  { id: 3, text: "add job", path: "add-job", Icon: FaWpforms },
  { id: 4, text: "profile", path: "profile", Icon: ImProfile },
];

export default links;
