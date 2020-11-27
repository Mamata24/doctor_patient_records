import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
    LOGOUT
  } from "./actionTypes";
import axios from "axios";

export const registerUserRequest = () => ({
  type: REGISTER_USER_REQUEST,
});

export const registerUserSuccess = (payload) => ({
  type: REGISTER_USER_SUCCESS,
  payload,
});

export const registerUserFailure = (payload) => ({
  type: REGISTER_USER_FAILURE,
  payload,
});

// export const registerUser = (payload) => (dispatch) => {
//   console.log(payload);
//   dispatch(registerUserRequest());
//   // axios
//   //   .post("http://localhost:5000/signupDoctor", payload)
//   //   .then((res) => {
//   //     //console.log(res.data)
//   //     dispatch(registerUserSuccess(res.data))
    
//   //   })
//   //   .catch((err) => dispatch(registerUserFailure(err)));
// var data = JSON.stringify({...payload});
// var config = {
//   method: 'post',
//   url: 'localhost:5000/signupDoctor',
//   headers: { 
//     'Content-Type': 'application/json',
//     "Access-Control-Allow-Origin": "*"
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
//     dispatch(registerUserSuccess(response.data))
// })
// .catch(function (error) {
//   console.log(error);
// });

// };
export const registerUser = (payload) => (dispatch) => {
  dispatch(registerUserRequest());
  axios
    .post("http://localhost:5000/signupDoctor", payload)
    .then((res) => dispatch(registerUserSuccess(res.data)))
    .catch((err) => dispatch(registerUserFailure(err)));
};


// login a user

export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST,
});

export const loginUserSuccess = (payload) => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserFailure = (payload) => ({
  type: LOGIN_USER_FAILURE,
  payload,
});

export const loginUser = (payload) => (dispatch) => {
  dispatch(loginUserRequest());
  axios
    .post("http://localhost:5000/loginDoctor", payload)
    .then((res) => dispatch(loginUserSuccess(res.data)))
    .catch((err) => dispatch(loginUserFailure(err)));
};

// logout

export const logoutUser = () => ({
  type: LOGOUT,
});