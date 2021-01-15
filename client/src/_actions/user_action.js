/* eslint-disable no-unused-vars */
import axios from "axios";
import { LOGIN_USER, SIGNUP_USER, AUTH_USER } from "./types";

export function loginUser(dataToSubmit) {
  const req = axios
    .post("/api/users/login", dataToSubmit)
    .then((res) => res.data);

  return {
    type: LOGIN_USER,
    payload: req,
  };
}

export function signupUser(dataToSubmit) {
  const req = axios
    .post("/api/users/register", dataToSubmit)
    .then((res) => res.data);

  return {
    type: SIGNUP_USER,
    payload: req,
  };
}

export function auth() {
  const req = axios.get("/api/users/auth").then((res) => res.data);

  return {
    type: AUTH_USER,
    payload: req,
  };
}
