import {ARTICLE_ADD_REQ, ARTICLE_ADD_RSP, ARTICLE_LIST_RSP} from "actions/article";

const initState = {
  article: {},
  articleList: [],
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case ARTICLE_ADD_RSP:
      return {
        ...state,
        article: action.payload.article,
      };
    case ARTICLE_LIST_RSP:
      return {
        ...state,
        articleList: action.payload.map(_ => ({..._, action: 'action'})),
      };
    default:
      return state;
  }
}