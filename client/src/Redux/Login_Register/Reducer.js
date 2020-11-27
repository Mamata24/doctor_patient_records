import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from './actionTypes'

export const init = {
    isLoading: false,
    doctors: [],
    errMsg: "",
    successMsg: "",
    isAuth:false
}
const reducer = (state = init, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                successMsg: action.payload.message,
                doctors: action.payload.doctors,
                isAuth:true
            };
        }
        case LOGIN_USER_REQUEST:{
            return {
                ...state,
                isError: false,
                errMsg: action.payload,
            };
        }
            case LOGIN_USER_FAILURE: {
            return {
                ...state,
                loading: false,
                isError: true,
                errMsg:action.payload,
            };
        }
            case REGISTER_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                successMsg: action.payload.message,
                doctors: action.payload.doctors,
            };
        }
        case REGISTER_USER_REQUEST:{
            return {
                ...state,
                isError: false,
                errMsg: action.payload,
            };
        }
            case REGISTER_USER_FAILURE: {
            return {
                ...state,
                loading: false,
                isError: true,
                errMsg:action.payload,
            };
        }
            default:
      return state;
  }
};

export default reducer;