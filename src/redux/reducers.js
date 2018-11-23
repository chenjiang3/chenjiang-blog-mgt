import counter from './reducers/counter';
import userInfo from './reducers/userInfo';
import user from './reducers/user';
import article from './reducers/article';
import articleSource from './reducers/articleSource';

export default function combineReducers(state = {}, action) {
  return {
    counter: counter(state.counter, action),
    userInfo: userInfo(state.userInfo, action),
    user: user(state.user, action),
    article: article(state.article, action),
    articleSource: articleSource(state.articleSource, action),
  }
}