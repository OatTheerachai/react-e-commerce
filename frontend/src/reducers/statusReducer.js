import { FETCH_START, FETCH_END, FETCH_ERROR } from "../actions/statusAction";

const initialState = {
  loading: false,
  error: "",
};

export const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        loading: true,
      };
    case FETCH_END:
      return {
        loading: true,
      };
    case FETCH_ERROR:
      return {
        loading: true,
        error: action.playload,
      };

    default:
      return state;
  }
};
