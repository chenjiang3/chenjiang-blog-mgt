import {call, put, takeLatest} from 'redux-saga/effects';
import {addArticle, articleList} from "src/service/article";
import {ARTICLE_ADD_RSP, ARTICLE_ADD_REQ, ARTICLE_LIST_REQ, ARTICLE_LIST_RSP} from "actions/article";
import {passwordWithSalt, randomString} from "../utils/security";

const SALT_LENGTH = 16;

function *yieldAddArticle(action) {
  const {
    title,
    tags,
    type,
    abstractContent,
    content,
    rawFileLink,
    success
  } = action.payload;
  const result = yield call(addArticle, {
    title, tags, type, abstractContent, content, rawFileLink
  });
  if (result === true) {
    success && success();
  } else {
    // MARK: -- TODO
  }
}

function *yieldArticleList(action) {
  const result = yield call(articleList, action.payload || {pageIndex: 1, pageSize: 100});
  if (result) {
    yield put({
      type: ARTICLE_LIST_RSP,
      payload: result
    })
  }
}

export function *watchYieldAddArticle() {
  yield takeLatest(ARTICLE_ADD_REQ, yieldAddArticle);
}

export function *watchYieldArticleList() {
  yield takeLatest(ARTICLE_LIST_REQ, yieldArticleList);
}