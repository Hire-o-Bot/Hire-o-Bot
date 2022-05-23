import {
  CANDIDATE_PROFILE_CREATION_FAIL,
  CANDIDATE_PROFILE_CREATION_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  data: null,
};

const candidate = (candidate = initialState, action) => {
  const { type, payload } = action;
  if (type === CANDIDATE_PROFILE_CREATION_SUCCESS) {
    return {
      ...candidate,
      data: payload,
      isLoading: false,
    };
  } else if (type === CANDIDATE_PROFILE_CREATION_FAIL) {
    return {
      ...candidate,
      data: null,
      isLoading: false,
    };
  }
  return candidate;
};

export default candidate;
