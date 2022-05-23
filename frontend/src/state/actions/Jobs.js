import { JOB_CREATION_FAIL, JOB_CREATION_SUCCESS } from "./actionTypes";
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
