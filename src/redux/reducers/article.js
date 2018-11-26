import {ARTICLE_ADD_REQ, ARTICLE_ADD_RSP, ARTICLE_LIST_REQ, ARTICLE_LIST_RSP} from "actions/article";

const initState = {
  article: {},
  articleList: [],
  loading: false,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case ARTICLE_ADD_RSP:
      return {
        ...state,
        article: action.payload.article,
      };
    case ARTICLE_LIST_REQ:
      return {
        ...state,
        loading: true,
      };
    case ARTICLE_LIST_RSP:
      return {
        ...state,
        articleList: action.payload.map(_ => ({..._, action: 'action'})),
        loading: false,
      };
    default:
      return state;
  }
}