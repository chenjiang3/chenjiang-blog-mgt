import user from './reducers/user';
import article from './reducers/article';
import articleSource from './reducers/articleSource';
import tag from './reducers/tag'

export default function combineReducers(state = {}, action) {
  return {
    user: user(state.user, action),
    article: article(state.article, action),
    articleSource: articleSource(state.articleSource, action),
    tag: tag(state.tag, action),
  }
}