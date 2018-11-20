import {all} from 'redux-saga/effects';
import {watchYieldLogin} from "src/saga/user";

export default function *rootSaga() {
  yield all([
    watchYieldLogin(),
  ]);
}
