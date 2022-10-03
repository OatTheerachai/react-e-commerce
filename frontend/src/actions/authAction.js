import { startFetch, endFetch, errorFetch } from "./statusAction";
import axios from "axios";

export const SET_AUTH = "SET_AUTH";

export const setAuth = (user) => {
  return {
    type: SET_AUTH,
    payload: user,
  };
};

export const login = (username, password) => async (dispatch) => {
  try {
    await dispatch(startFetch());

    const { data } = await axios.post(
      "http://localhost:5000/api/v1/auth/signin",
      {
        username: username,
        password: password,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    await dispatch({
      type: SET_AUTH,
      payload: data,
    });
  } catch (error) {
    await dispatch({
      type: SET_AUTH,
      payload: null,
    });
    await dispatch(errorFetch(error));
    await dispatch(endFetch());
  }
};
