import {ARTICLE_ADD_REQ, ARTICLE_ADD_RSP} from "actions/article";

const initState = {
  article: {},
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case ARTICLE_ADD_RSP:
      return {
        ...state,
        article: action.payload.article,
      };
    default:
      return state;
  }
}