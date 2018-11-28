import {
  TAG_ADD_REQUEST,
  TAG_ADD_RESPONSE,
  TAG_LIST_REQUEST,
  TAG_LIST_RESPONSE,
} from "actions/tag";

const initState = {
  add: {
    loading: false
  },
  list: {
    data: [],
    loading: false,
  }
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case TAG_ADD_REQUEST:
      return {
        ...state,
        add: {
          ...state.add,
          loading: true,
        },
      };
    case TAG_ADD_RESPONSE:
      return {
        ...state,
        add: {
          ...state.add,
          loading: false
        }
      };
    case TAG_LIST_REQUEST:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        }
      };
    case TAG_LIST_RESPONSE:
      return {
        ...state,
        list: {
          list: action.payload,
          loading: false
        }
      };
    default:
      return state;
  }
}