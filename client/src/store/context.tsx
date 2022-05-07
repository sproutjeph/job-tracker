import React, { ReactNode, useContext, useReducer } from "react";
import { ActionKinds, IRegUser, IResponse, IValues } from "../types";
import axios from "axios";

import Reducer from "./reducer";
import initialState from "./initialState";

const AppContext = React.createContext({} as IValues);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const baseUrl = "http://localhost:8000/api/v1";
  //axios
  // axios.defaults.headers.common["Authorization"] = `Bearer ${state.token}`;

  // const authFetch = axios.create({
  //   baseURL: baseUrl,
  //   headers: {
  //     Authorization: `Bearer ${state.token}`,
  //   },
  // });

  const authFetch = axios.create({
    baseURL: baseUrl,
  });

  //request
  authFetch.interceptors.request.use(
    (config: any) => {
      config.headers.common["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  //response
  authFetch.interceptors.response.use(
    (response: any) => {
      return response;
    },
    (err) => {
      if (err.response.status === 401) {
        logoutUser();
      }

      return Promise.reject(err);
    }
  );

  // my logic

  function displayAlert() {
    dispatch({ type: ActionKinds.DISPLAY_ALERT });
    clearAlert();
  }
  function clearAlert() {
    setTimeout(() => {
      dispatch({ type: ActionKinds.CLEAR_ALERT });
    }, 3000);
  }

  async function registerUser(currentUser: IRegUser) {
    dispatch({ type: ActionKinds.REGISTER_USER_BEGIN });
    try {
      const response = await axios.post(
        `${baseUrl}/auth/register`,
        currentUser
      );

      const { user, token, location } = response.data;

      dispatch({
        type: ActionKinds.REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (err) {
      dispatch({
        type: ActionKinds.REGISTER_USER_ERROR,
        // @ts-ignore
        payload: { msg: err.response.data.msg },
      });
    }
    clearAlert();
  }

  async function loginUser(currentUser: IRegUser) {
    dispatch({ type: ActionKinds.LOGIN_USER_BEGIN });

    try {
      const response = await axios.post(`${baseUrl}/auth/login`, currentUser);

      const { user, token, location } = response.data;

      dispatch({
        type: ActionKinds.LOGIN_USER_SUCCESS,
        payload: { user, token, location },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (err) {
      dispatch({
        type: ActionKinds.LOGIN_USER_ERROR,
        // @ts-ignore
        payload: { msg: err.response.data.msg },
      });
    }
    clearAlert();
  }

  function addUserToLocalStorage({ user, token, location }: IResponse) {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  }
  function removeUserToLocalStorage() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  }

  function logoutUser() {
    dispatch({ type: ActionKinds.LOGOUT_USER });
    removeUserToLocalStorage();
  }
  function toggleSidebar() {
    dispatch({ type: ActionKinds.TOGGLE_SIDEBAR });
  }

  async function updateUser(currentUser: IRegUser) {
    dispatch({ type: ActionKinds.UPDATE_USER_BEGIN });
    try {
      const response = await authFetch.patch(
        `${baseUrl}/auth/updateUser`,
        currentUser
      );
      const { user, location, token } = response.data;
      dispatch({
        type: ActionKinds.UPDATE_USER_SUCCESS,
        payload: { user, location, token },
      });

      addUserToLocalStorage({ user, location, token });
    } catch (error) {
      // @ts-ignore

      if (error.response.status !== 401) {
        dispatch({
          type: ActionKinds.UPDATE_USER_ERROR,
          // @ts-ignore
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  }

  function handleChange({ name, value }: any) {
    dispatch({ type: ActionKinds.HANDLE_CHANGE, payload: { name, value } });
  }

  function clearValues() {
    dispatch({ type: ActionKinds.CLEAR_VALUES });
  }
  async function createJob() {
    dispatch({ type: ActionKinds.CREATE_JOB_BEGIN });
    try {
      const { position, company, jobLocation, jobType, status } = state;
      await authFetch.post("/jobs", {
        position,
        company,
        jobLocation,
        jobType,
        status,
      });
      dispatch({ type: ActionKinds.CREATE_JOB_SUCCESS });
    } catch (error) {
      // @ts-ignore
      if (error.response.status === 401) {
        dispatch({
          type: ActionKinds.CREATE_JOB_ERROR,
          // @ts-ignore
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  }

  async function getJobs() {
    const { page, search, searchStatus, searchType, sort } = state;
    let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;

    if (search) {
      url = url + `&search=${search}`;
    }
    dispatch({ type: ActionKinds.GET_ALL_JOBS_BEGIN });
    try {
      const response = await authFetch.get(url);
      const { jobs, totalJobs, numOfPages } = response.data;

      dispatch({
        type: ActionKinds.GET_ALL_JOBS_SUCCESS,
        payload: { jobs, totalJobs, numOfPages },
      });
    } catch (error) {
      // @ts-ignore
      logoutUser();
    }
    clearAlert();
  }

  function setEditJob(id: string) {
    dispatch({ type: ActionKinds.SET_EDITJOB, payload: { id } });
  }

  async function editJob() {
    dispatch({ type: ActionKinds.EDIT_JOB_BEGIN });
    console.log(state.editJobId, state.isEditing);

    try {
      const { position, company, jobLocation, jobType, status } = state;

      const response = await authFetch.patch(`/jobs/${state.editJobId}`, {
        position,
        company,
        jobLocation,
        jobType,
        status,
      });
      console.log(response);

      dispatch({
        type: ActionKinds.EDIT_JOB_SUCCESS,
      });
    } catch (error) {
      // @ts-ignore
      if (error.response.status === 401) {
        dispatch({
          type: ActionKinds.EDIT_JOB_ERROR,
          // @ts-ignore
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  }
  async function deleteJob(id: string) {
    dispatch({ type: ActionKinds.DELETEJOB_BEGIN });
    try {
      await authFetch.delete(`/jobs/${id}`);
      getJobs();
    } catch (error) {
      // @ts-ignore
      logoutUser();
    }
    clearAlert();
  }

  async function showStats() {
    dispatch({ type: ActionKinds.SHOW_STATS_BEGIN });

    try {
      const response = await authFetch.get("/jobs/stats");

      dispatch({
        type: ActionKinds.SHOW_STATS_SUCCESS,
        payload: {
          stats: response.data.stats,
          monthlyApplications: response.data.monthlyApplications,
        },
      });
    } catch (error) {
      logoutUser();
    }
  }

  function clearFilters() {
    dispatch({ type: ActionKinds.CLEAR_FILTERS });
  }
  function changePage(page: number) {
    dispatch({ type: ActionKinds.CHANGE_PAGE, payload: { page } });
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        registerUser,
        addUserToLocalStorage,
        loginUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        createJob,
        getJobs,
        deleteJob,
        setEditJob,
        editJob,
        showStats,
        clearFilters,
        handleChange,
        clearValues,
        changePage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, initialState };
