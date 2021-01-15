import { LOGIN_USER, SIGNUP_USER, AUTH_USER } from "../_actions/types";

/* eslint-disable import/no-anonymous-default-export */
export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, success: action.payload };
    case SIGNUP_USER:
      return { ...state, success: action.payload };
    case AUTH_USER:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
}
