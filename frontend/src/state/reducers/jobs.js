import { LOAD_JOBS_FAIL, LOAD_JOBS_SUCCESS } from "../actions/actionTypes";

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
  }
  return jobs;
};

export default jobs;
