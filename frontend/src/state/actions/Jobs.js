import {
  JOB_CREATION_FAIL,
  JOB_CREATION_SUCCESS,
  LOAD_JOBS_FAIL,
  LOAD_JOBS_SUCCESS,
  DELETE_JOB_FAIL,
  DELETE_JOB_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const addJob =
  (
    jobPosition,
    minExperience,
    lowerRange,
    upperRange,
    jobDescription,
    techList
  ) =>
  async (dispatch) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      jobPosition,
      minExperience,
      lowerRange,
      upperRange,
      jobDescription,
      techList,
    };

    try {
      const res = await axios.post("/api/addnewjob", body, config);
      dispatch({
        type: JOB_CREATION_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: JOB_CREATION_FAIL,
      });
    }
  };

export const getJobs = () => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get("/api/jobs", config);
    dispatch({
      type: LOAD_JOBS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOAD_JOBS_FAIL,
    });
  }
};

export const deleteJob =
  ({ jobID }) =>
  async (dispatch) => {
    const config = {
      header: {
        Content_Type: "application/json",
      },
    };

    const body = { jobID };

    try {
      const res = await axios.delete("/api/jobs/delete", body, config);
      dispatch({
        type: DELETE_JOB_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: DELETE_JOB_FAIL,
      });
    }
  };
