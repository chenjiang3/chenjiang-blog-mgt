import {call, put, takeLatest} from 'redux-saga/effects';
import {addTag, tagList} from "src/service/tag";
import {
  TAG_ADD_RESPONSE,
  TAG_ADD_REQUEST, TAG_LIST_RESPONSE,
  TAG_LIST_REQUEST
} from "actions/tag";

function *yieldAddTag(action) {
  const rsp = yield call(addTag, action.payload);
  if (rsp) {
    const {success} = action.payload;
    success && success('添加成功！');
  }
}

function *yieldTagList(action) {
  const rsp = yield call(tagList, action.payload);
  if (rsp) {
    yield put({
      type: TAG_LIST_RESPONSE,
      payload: rsp,
    })
  }
}

export function *watchYieldAddTag() {
  yield takeLatest(TAG_ADD_REQUEST, yieldAddTag);
}

export function *watchYieldTagList() {
  yield takeLatest(TAG_LIST_REQUEST, yieldTagList);
}