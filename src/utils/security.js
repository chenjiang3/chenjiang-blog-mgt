import sha256 from 'js-sha256';

const charset = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function randomString(length) {
  let result = '';
  for (let i = length; i > 0; i -= 1) {
    result += charset[Math.round(Math.random() * (charset.length - 1))];
  }
  return result;
}

export function passwordWithSalt(salt, password) {
  const message = `${salt}-${password}`;
  const result = sha256(`${salt}-${password}`);
  return result;
}

export function createAuthHeader({cid, uid, tid, nonce, token}) {
  const message = `cid=${cid}&uid=${uid}&tid=${tid}&nonce=${nonce}`;
  const hash = sha256(`${message}&token=${token}`);
  const result = `${message}&hash=${hash}`;
  return result;
}





























