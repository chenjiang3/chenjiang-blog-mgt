import {call, put, takeLatest} from 'redux-saga/effects';
import {doLogin, doLogout, findByMobile, userList} from "src/service/user";
import {
  USER_LOGIN_REQ,
  USER_LOGIN_RSP,
  USER_FINDBYMOBILE_RSP,
  USER_LOGOUT_REQ,
  USER_LIST_RESPONSE,
  USER_LIST_REQUEST
} from "actions/user";
import {passwordWithSalt, randomString} from "../utils/security";
import {saveObject} from "src/utils/storage";

const SALT_LENGTH = 16;

function *yieldLogout(action) {
  const result = yield call(doLogout, action.payload);
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  const {success} = action.payload || {};
  success && success();
}

function *yieldLogin(action) {
  const user = yield call(findByMobile, action.payload);
  yield put({
    type: USER_FINDBYMOBILE_RSP,
    payload: {
      user,
    }
  });
  if (!user) {
    return;
  }

  saveObject('user', user);
  const loginSalt = randomString(SALT_LENGTH);
  const {
    userId,
    salt,
  } = user;
  const {
    mobile,
    password,
  } = action.payload;
  const passwordSalt = passwordWithSalt(salt, password);
  const passwordLoginSalt = passwordWithSalt(loginSalt, passwordSalt);
  const param = {
    clientId: '10000',
    salt: loginSalt,
    mobile,
    password: passwordLoginSalt,
    userId,
  };
  const token = yield call(doLogin, param);
  yield put({
    type: USER_LOGIN_RSP,
    payload: {
      token,
    }
  });
  if (token) {
    saveObject('token', token);
  }

  const {success} = action.payload || {};
  success && success();
}

function *yieldUserList(action) {
  const response = yield call(userList, action.payload);
  if (response) {
    yield put({
      type: USER_LIST_RESPONSE,
      payload: {
        item: response,
        total: response.length,
      }
    })
  }
}

export function *watchYieldLogout() {
  yield takeLatest(USER_LOGOUT_REQ, yieldLogout);
}

export function *watchYieldLogin() {
  yield takeLatest(USER_LOGIN_REQ, yieldLogin);
}

export function *watchYieldUserList() {
  yield takeLatest(USER_LIST_REQUEST, yieldUserList);
}