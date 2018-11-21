import {call, put, takeLatest} from 'redux-saga/effects';
import {addArticle} from "src/service/article";
import {ARTICLE_ADD_RSP, ARTICLE_ADD_REQ} from "actions/article";
import {passwordWithSalt, randomString} from "../utils/security";

const SALT_LENGTH = 16;

function *yieldAddArticle(action) {
  const result = yield call(addArticle, action.payload);
  yield put({
    type: ARTICLE_ADD_RSP,
    payload: {
      result,
    }
  });
}

export function *watchYieldAddArticle() {
  yield takeLatest(ARTICLE_ADD_REQ, yieldAddArticle);
}