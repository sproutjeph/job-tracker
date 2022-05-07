import { ActionKinds, IActions, IState } from "../types";
import { initialState } from "./context";

const reducer = (state: IState, action: IActions) => {
  if (action.type === ActionKinds.DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }
  if (action.type === ActionKinds.CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  if (action.type === ActionKinds.REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === ActionKinds.TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar };
  }
  if (action.type === ActionKinds.REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "User Created! Redirecting...",
    };
  }
  if (action.type === ActionKinds.REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === ActionKinds.LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === ActionKinds.LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "Login successful! Redirecting...",
    };
  }
  if (action.type === ActionKinds.LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === ActionKinds.UPDATE_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === ActionKinds.UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "User updated successful!",
    };
  }

  if (action.type === ActionKinds.UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === ActionKinds.LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      jobLocation: "",
      userLocation: "",
    };
  }

  if (action.type === ActionKinds.CREATE_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === ActionKinds.CREATE_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Job Created successful!",
    };
  }
  if (action.type === ActionKinds.CREATE_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === ActionKinds.HANDLE_CHANGE) {
    return {
      ...state,
      page: 1,
      [action.payload.name]: action.payload.value,
    };
  }

  if (action.type === ActionKinds.CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editJobId: "",
      position: "",
      company: "",
      jobLocation: state.userLocation,
      jobType: "full-time",
      status: "pending",
    };

    return {
      ...state,
      ...initialState,
    };
  }

  if (action.type === ActionKinds.GET_ALL_JOBS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === ActionKinds.GET_ALL_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      jobs: action.payload.jobs,
      totalJobs: action.payload.totalJobs,
      numOfPages: action.payload.numOfPages,
      alertText: "All Jobs successful!",
    };
  }
  if (action.type === ActionKinds.GET_ALL_JOBS_ERROR) {
    return {
      ...state,
      // isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === ActionKinds.SET_EDITJOB) {
    const job = state.jobs.find((job) => job._id === action.payload.id);

    const { _id, position, company, jobLocation, jobType, status } = job;

    return {
      ...state,
      isEditing: true,
      editJobId: _id,
      position,
      company,
      jobLocation,
      jobType,
      status,
    };
  }

  if (action.type === ActionKinds.DELETEJOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === ActionKinds.EDIT_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === ActionKinds.EDIT_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Job Update succeeded",
    };
  }
  if (action.type === ActionKinds.EDIT_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === ActionKinds.SHOW_STATS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if (action.type === ActionKinds.SHOW_STATS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      stats: action.payload.stats,
      monthlyApplications: action.payload.monthlyApplications,
    };
  }

  if (action.type === ActionKinds.CLEAR_FILTERS) {
    return {
      ...state,
      search: "",
      searchStatus: "all",
      searchType: "all",
      sort: "latest",
    };
  }

  if (action.type === ActionKinds.CHANGE_PAGE) {
    return {
      ...state,
      page: action.payload.page,
    };
  }

  return state;
};

export default reducer;
