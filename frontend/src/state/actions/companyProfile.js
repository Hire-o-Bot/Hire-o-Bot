import { PROFILE_CREATION_FAIL, PROFILE_CREATION_SUCCESS } from "./actionTypes";
import axios from "axios";

//ACTION TO CREATE PROFILE
export const createProfile =
  (name, description, phone, website, navigate) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, description, phone, website });
    try {
      const res = await axios.post("/api/profile/company", body, config);
      console.log(res.data);

      dispatch({
        type: PROFILE_CREATION_SUCCESS,
        payload: res.data,
      });
      navigate("/dashboard");
    } catch (err) {
      dispatch({
        type: PROFILE_CREATION_FAIL,
      });
    }
  };
