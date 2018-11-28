import {all} from 'redux-saga/effects';
import {watchYieldLogin, watchYieldLogout, watchYieldUserList} from "src/saga/user";
import {watchYieldAddArticle, watchYieldArticleList} from 'src/saga/article';
import {
  watchYieldAddArticleSource, watchYieldArticleSourceList,
  watchYieldDeleteArticleSource
} from "src/saga/articleSource";
import {watchYieldAddTag, watchYieldTagList} from "src/saga/tag";

export default function *rootSaga() {
  yield all([
    watchYieldLogin(),
    watchYieldAddArticle(),
    watchYieldLogout(),
    watchYieldArticleList(),
    watchYieldAddArticleSource(),
    watchYieldArticleSourceList(),
    watchYieldDeleteArticleSource(),
    watchYieldUserList(),
    watchYieldAddTag(),
    watchYieldTagList()
  ]);
}
