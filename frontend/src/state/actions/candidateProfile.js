import {
  CANDIDATE_PROFILE_CREATION_FAIL,
  CANDIDATE_PROFILE_CREATION_SUCCESS,
} from "./actionTypes";
import axios from "axios";

//ACTION TO CREATE PROFILE
export const createProfile =
  (personalInfo, educationList, experienceList, skills, navigate) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    experienceList.forEach((cur) => {
      delete cur.id;
    });
    educationList.forEach((cur) => {
      delete cur.id;
    });
    const { fullname, github, linkedIn, phone, portfolio } = personalInfo;

    const body = JSON.stringify({
      name: fullname,
      github,
      portfolio,
      linkedIn,
      phone,
      education: educationList,
      experience: experienceList,
      skills,
    });
    try {
      const res = await axios.post("/api/profile/candidate", body, config);
      dispatch({
        type: CANDIDATE_PROFILE_CREATION_SUCCESS,
        payload: res.data,
      });
      navigate("/search");
    } catch (err) {
      dispatch({
        type: CANDIDATE_PROFILE_CREATION_FAIL,
      });
    }
  };
