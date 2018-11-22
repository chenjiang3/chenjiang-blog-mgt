import {randomString} from "./security";
import {createAuthHeader} from "src/utils/security";
import {getObject} from "./storage";

async function authHeader() {
  const user = getObject('user');
  const token = getObject('token');
  if (!user || !token) {
    return null;
  }
  const {
    clientId: cid,
    userId: uid,
  } = user;
  const {
    id: tid,
    token: tokenStr,
  } = token;
  if (!cid || !uid || !tid || !tokenStr) {
    return null;
  }
  const nonce = randomString(16);
  const authHeader = createAuthHeader({
    cid, uid, tid, nonce, token: tokenStr,
  });
  return {
    Authorization: authHeader,
  }
}

export default async (url, options, needToken = true) => {
  const defaultOptions = {
    credentials: 'include',
    headers: {},
  };
  const newOptions = {...defaultOptions, ...options};
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      }
    }
  }

  const authorization = await authHeader();
  if (needToken && authorization) {
     newOptions.headers = {
      ...newOptions.headers,
      ...authorization,
    }
  }

  try {
    let response = await fetch(`/api${url}`, newOptions);
    const json = response.json();
    console.log('response = ', json);
    return json;
  } catch (ex) {
    console.log('fetch exception ');
  }
}