import store from 'store2';

export const globalSpace = 'global';

export function saveObject(key, value) {
  const v = JSON.stringify(value);
  if (v) {
    localStorage.setItem(key, v);
  }
}

export function getObject(key) {
  const v = localStorage.getItem(key);
  if (v) {
    return JSON.parse(v);
  }
  return null;
}

export async function remove(namespace, key) {
  return new Promise((resolve, reject) => {
    try {
      const storage = namespace ? store.namespace(namespace) : store;
      storage.remove(key);
      resolve();
    } catch (ex) {
      reject(ex);
    }
  })
}

export async function save(namespace, key, value) {
  return new Promise((resolve, reject) => {
    try {
      const storage = namespace ? store.namespace(namespace) : store;
      try {
        storage.set(key, value);
      } catch (ex) {
        // do nothing on save local failure
      }
    } catch (ex) {
      reject(ex);
    }
  });
}

export async function get(namespace, key, alt) {
  return new Promise((resolve, reject) => {
    try {
      const storage = namespace ? store.namespace(namespace) : store;
      resolve(storage.get(key) || store.get(key) || alt);
    } catch (ex) {
      reject(ex);
    }
  });
}
