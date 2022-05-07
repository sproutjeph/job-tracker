// import { IconType } from "react-icons";

export enum ActionKinds {
  "LOADING" = "LOADING",
  "DISPLAY_ALERT" = "DISPLAY_ALERT",
  "CLEAR_ALERT" = "CLEAR_ALERT",

  "REGISTER_USER_BEGIN" = "REGISTER_USER_BEGIN",
  "REGISTER_USER_SUCCESS" = "REGISTER_USER_SUCCESS",
  "REGISTER_USER_ERROR" = "REGISTER_USER_ERROR",

  "LOGIN_USER_BEGIN" = "LOGIN_USER_BEGIN",
  "LOGIN_USER_SUCCESS" = "LOGIN_USER_SUCCESS",
  "LOGIN_USER_ERROR" = "LOGIN_USER_ERROR",

  "UPDATE_USER_BEGIN" = "UPDATE_USER_BEGIN",
  "UPDATE_USER_SUCCESS" = "UPDATE_USER_SUCCESS",
  "UPDATE_USER_ERROR" = "UPDATE_USER_ERROR",

  "CREATE_JOB_BEGIN" = "CREATE_JOB_BEGIN",
  "CREATE_JOB_SUCCESS" = "CREATE_JOB_SUCCESS",
  "CREATE_JOB_ERROR" = "CREATE_JOB_ERROR",

  "GET_ALL_JOBS_BEGIN" = "GET_ALL_JOBS_BEGIN",
  "GET_ALL_JOBS_SUCCESS" = "GET_ALL_JOBS_SUCCESS",
  "GET_ALL_JOBS_ERROR" = "GET_ALL_JOBS_ERROR",

  "TOGGLE_SIDEBAR" = "TOGGLE_SIDEBAR",
  "LOGOUT_USER" = "LOGOUT_USER",
  "CLEAR_VALUES" = "CLEAR_VALUES",
  "SET_EDITJOB" = "SET_EDITJOB",
  "DELETEJOB" = "DELETEJOB",
  "DELETEJOB_BEGIN" = "DELETEJOB_BEGIN",

  "EDIT_JOB_BEGIN" = "EDIT_JOB_BEGIN",
  "EDIT_JOB_SUCCESS" = "EDIT_JOB_SUCCESS",
  "EDIT_JOB_ERROR" = "EDIT_JOB_ERROR",

  "SHOW_STATS_BEGIN" = "SHOW_STATS_BEGIN",
  "SHOW_STATS_SUCCESS" = "SHOW_STATS_SUCCESS",
  "HANDLE_CHANGE" = "HANDLE_CHANGE",
  "CLEAR_FILTERS" = "CLEAR_FILTERS",
  "CHANGE_PAGE" = "CHANGE_PAGE",
}

export interface IValues extends IState {
  toggleSidebar: () => void;
  logoutUser: () => void;
  displayAlert: () => void;
  clearAlert: () => void;
  registerUser: (currentUser: IRegUser) => any;
  loginUser: (currentUser: IRegUser) => any;
  updateUser: (currentUser: IRegUser) => any;
  addUserToLocalStorage: ({ user, token, location }: IResponse) => void;
  createJob: () => void;
  getJobs: () => void;
  setEditJob: (id: string) => void;
  deleteJob: (id: string) => void;
  editJob: () => void;
  showStats: () => void;
  clearFilters: () => void;
  clearValues: () => void;
  handleChange: ({ name, value }: any) => void;
  changePage: (page: number) => void;
}

export interface IState {
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
  user: any;
  token: string;
  userLocation: string;
  jobLocation: string;
  showSidebar: boolean;
  isEditing: boolean;
  editJobId: string;
  position: string;
  company: string;
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"];
  jobType: "remote" | "full-time" | "part-time";
  statusOptions: ["pending", "interview", "declined"];
  status: string;

  jobs: any[];
  totalJobs: number;
  numOfPages: number;
  page: number;

  stats: { pending: number; interview: number; declined: number };
  monthlyApplications: any[];
  search: string;
  searchStatus: string;
  searchType: string;
  sort: string;
  sortOptions: string[];
}

export interface IActions {
  type: ActionKinds;
  payload?: any;
}

export interface IRegUser {
  name?: string;
  email: string;
  password?: string;
  location?: string;
  lastName?: string;
}

export interface IResponse {
  user: any;
  token: string;
  location: string;
}

export interface IJob {
  company: string;
  position: string;
  status: string;
  jobType: string;
  location?: string;
}

// "interview" | "declined" | "pending" |

// "full-time" | "remote" | "internship"
