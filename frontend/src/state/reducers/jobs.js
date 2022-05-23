import {
  LOAD_JOBS_FAIL,
  LOAD_JOBS_SUCCESS,
  DELETE_JOB_FAIL,
  DELETE_JOB_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  jobs: null,
};

const jobs = (jobs = initialState, action) => {
  const { type, payload } = action;
  if (type === LOAD_JOBS_SUCCESS) {
    return {
      ...jobs,
      jobs: payload,
      isLoading: false,
    };
  } else if (type === LOAD_JOBS_FAIL) {
    return {
      ...jobs,
      jobs: null,
      isLoading: false,
    };
  } else if (type === DELETE_JOB_SUCCESS) {
    const newState = jobs.filter((job) => job.id !== action.id); // Use filter method to remoreove the item that has been deleted from the st
    return newState;
  } else if (type === DELETE_JOB_FAIL) {
    return {
      ...jobs,
    };
  }
  return jobs;
};

export default jobs;
