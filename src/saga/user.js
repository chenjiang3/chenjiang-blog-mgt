import {call, put, takeLatest} from 'redux-saga/effects';
import {doLogin, findByMobile} from "src/service/user";
import {USER_LOGIN_REQ, USER_LOGIN_RSP, USER_FINDBYMOBILE_RSP} from "actions/user";
import {passwordWithSalt, randomString} from "../utils/security";

const SALT_LENGTH = 16;

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
}

export function *watchYieldLogin() {
  yield takeLatest(USER_LOGIN_REQ, yieldLogin);
}