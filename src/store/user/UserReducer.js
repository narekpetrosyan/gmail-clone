import { LOGIN_USER, LOGOUT_USER } from "./../types";
const initialState = {
  user: null,
};

export const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
      return {
        user: payload,
      };
    case LOGOUT_USER:
      return {
        user: null,
      };
    default:
      return state;
  }
};
