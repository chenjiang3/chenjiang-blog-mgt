import {
  ARTICLE_SOURCE_ADD_REQ, ARTICLE_SOURCE_ADD_RSP, ARTICLE_SOURCE_LIST_REQ,
  ARTICLE_SOURCE_LIST_RSP
} from "actions/articleSource";

const initState = {
  articleSourceList: [],
  loading: false,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case ARTICLE_SOURCE_LIST_REQ:
      return {
        ...state,
        loading: true,
      };
    case ARTICLE_SOURCE_LIST_RSP:
      return {
        ...state,
        articleSourceList: action.payload.articleSourceList,
        loading: false,
      };
    default:
      return state;
  }
}