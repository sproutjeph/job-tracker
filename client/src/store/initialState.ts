import { IState } from "../types";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

const initialState: IState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  token: token!,
  user: user ? JSON.parse(user) : null,
  userLocation: userLocation! || "",
  jobLocation: userLocation || "",
  showSidebar: false,
  isEditing: false,
  editJobId: "",
  position: "",
  company: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "remote",
  statusOptions: ["pending", "interview", "declined"],
  status: "pending",
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: { pending: 0, interview: 0, declined: 0 },
  monthlyApplications: [],
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

export default initialState;
