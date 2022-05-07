import moment from "moment";
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../store/context";
import JobInfo from "./JobInfo";

interface IProps {
  company: string;
  createdAt: any;
  position: string;
  jobLocation: string;
  jobType: string;
  status: string;
  _id: string;
}
const Job = ({
  company,
  createdAt,
  position,
  jobLocation,
  jobType,
  status,
  _id,
}: IProps) => {
  let date: any = moment(createdAt);
  date = date.format("MMM Do, YYYY");

  const { deleteJob, setEditJob } = useGlobalContext();
  let statusClass = "";
  if (status === "pending") {
    statusClass = "bg-[#fcefc7] text-[#e9b949]";
  }
  if (status === "interview") {
    statusClass = "bg-[#e0e8f9] text-[#647acb]";
  }
  if (status === "declined") {
    statusClass = "bg-[#ffeeee] text-[#d66a6a]";
  }
  return (
    <article className="bg-white rounded-md shadow-sm grid-cols-grid2R">
      <header className="py-4 px-6 border-b-[1px] border-b-gray-300 grid grid-cols-grid2 items-center">
        <div className="w-[60px] h-[60px] grid place-items-center bg-mainBlack rounded-sm text-2xl uppercase text-white mr-8">
          {company.charAt(0)}
        </div>

        <div className="">
          <h5 className="mb-1 text-2xl text-gray-700 capitalize">{position}</h5>
          <p className="m-0 tracking-wider text-gray-400 capitalize">
            {company}
          </p>
        </div>
      </header>

      <div className="px-6 py-4">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-1fr_1fr lg:grid-cols-1">
          <JobInfo Icon={FaLocationArrow} text={jobLocation} />
          <JobInfo Icon={FaCalendarAlt} text={date} />
          <JobInfo Icon={FaBriefcase} text={jobType} />
          <div
            className={`${statusClass} rounded-sm capitalize tracking-wider text-center w-[100px] h-[30px]`}
          >
            {status}
          </div>
        </div>

        <footer className="mt-4">
          <div className="flex gap-4">
            <Link
              onClick={() => setEditJob(_id)}
              to="/add-job"
              className="text-green-800 bg-green-200 border-transparent rounded-sm tracking-wide py-[0.37rem] px-[0.75rem] shadow-sm transition-all duration-300 capitalize inline-block h-[30px]"
            >
              Edit
            </Link>

            <button
              onClick={() => deleteJob(_id)}
              type="button"
              className=" text-red-800 bg-red-200 border-transparent rounded-sm tracking-wide py-[0.37rem] px-[0.75rem] shadow-sm transition-all duration-300 capitalize inline-block h-[30px]"
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </article>
  );
};
export default Job;
