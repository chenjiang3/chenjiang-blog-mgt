import {all} from 'redux-saga/effects';
import {watchYieldLogin} from "src/saga/user";
import {watchYieldAddArticle} from 'src/saga/article';

export default function *rootSaga() {
  yield all([
    watchYieldLogin(),
    watchYieldAddArticle(),
  ]);
}
