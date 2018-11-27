import {
  USER_FINDBYMOBILE_RSP,
  USER_LIST_REQUEST,
  USER_LIST_RESPONSE,
  USER_LOGIN_REQ,
  USER_LOGIN_RSP
} from "actions/user";

const initState = {
  user: {},
  token: {},
  userList: {
    list: {
      item: [],
      total: 0,
    },
    loading: false,
  }
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {
        ...state,
        userList: {
          ...state.userList,
          loading: true,
        }
      };
    case USER_LIST_RESPONSE:
      return {
        ...state,
        userList: {
          list: action.payload,
          loading: false,
        }
      };
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