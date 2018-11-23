import {call, put, takeLatest} from 'redux-saga/effects';
import {add, list} from "src/service/articleSource";
import {
  ARTICLE_SOURCE_ADD_RSP, ARTICLE_SOURCE_ADD_REQ, ARTICLE_SOURCE_LIST_REQ,
  ARTICLE_SOURCE_LIST_RSP
} from "actions/articleSource";
import {deleteArticleSource} from "../service/articleSource";

function *yieldAddArticleSource(action) {
  const rsp = yield call(add, action.payload);
  if (rsp === 1) {
    console.log('添加成功');
    const {success} = action.payload;
    success && success('添加成功');
  }
}

function *yieldGetList(action) {
  const rsp = yield call(list, action.payload);
  if (rsp) {
    yield put({
      type: ARTICLE_SOURCE_LIST_RSP,
      payload: {
        articleSourceList: rsp,
      }
    })
  }
}

function *yieldDeleteById(action) {
  const rsp = yield call(deleteArticleSource, action.payload);
  if (rsp) {
    const {success} = action.payload;
    success && success('删除成功');
  }
}

export function *watchYieldAddArticleSource() {
  yield takeLatest(ARTICLE_SOURCE_ADD_REQ, yieldAddArticleSource);
}

export function *watchYieldArticleSourceList() {
  yield takeLatest(ARTICLE_SOURCE_LIST_REQ, yieldGetList);
}
