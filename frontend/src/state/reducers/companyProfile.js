import {
  PROFILE_CREATION_FAIL,
  PROFILE_CREATION_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  data: null,
};

const company = (company = initialState, action) => {
  const { type, payload } = action;
  if (type === PROFILE_CREATION_SUCCESS) {
    return {
      ...company,
      data: payload,
      isLoading: false,
    };
  } else if (type === PROFILE_CREATION_FAIL) {
    localStorage.removeItem("token");
    return {
      ...company,
      data: null,
      isLoading: false,
    };
  }
  return company;
};

export default company;
