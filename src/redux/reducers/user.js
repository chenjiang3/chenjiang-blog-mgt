import {USER_FINDBYMOBILE_RSP, USER_LOGIN_REQ, USER_LOGIN_RSP} from "actions/user";

const initState = {
  user: {},
  token: {},
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case USER_LOGIN_RSP:
      return {
        ...state,
        token: action.payload.token,
      };
    case USER_FINDBYMOBILE_RSP:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
}