import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOAD_SUCCESS,
  LOAD_FAIL,
  REGISTER_FAIL,
  LOGIN_FAIL,
} from "./actionTypes";
import axios from "axios";
import setGlobalAuthToken from "../../utils/setToken";

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post("/api/user/login", body, config);
    setGlobalAuthToken(res.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const register =
  (email, password, role, navigate) => async (dispatch) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      email,
      password,
      role,
    };

    try {
      const res = await axios.post("/api/user/register", body, config);
      setGlobalAuthToken(res.data.token);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      if (role === "CANDIDATE") navigate("/profile/candidate/setup");
      else navigate("/profile/company/setup");
    } catch (err) {
      console.log(err);
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

export const loadUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    setGlobalAuthToken(token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const user = await axios.get("/api/user", config);
      dispatch({
        type: LOAD_SUCCESS,
        payload: {
          token: token,
          user: user.data,
        },
      });
    } catch (error) {
      dispatch({
        type: LOAD_FAIL,
      });
    }
  } else {
    dispatch({
      type: LOAD_FAIL,
    });
  }
};
