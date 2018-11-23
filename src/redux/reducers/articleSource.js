import {
  ARTICLE_SOURCE_ADD_REQ, ARTICLE_SOURCE_ADD_RSP, ARTICLE_SOURCE_LIST_REQ,
  ARTICLE_SOURCE_LIST_RSP
} from "actions/articleSource";

const initState = {
  articleSourceList: [],
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case ARTICLE_SOURCE_LIST_RSP:
      return {
        ...state,
        articleSourceList: action.payload.articleSourceList,
      };
    default:
      return state;
  }
}