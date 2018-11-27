import request from 'src/utils/request';
import {stringify} from 'qs';

const USER_API = '/user';

export async function findByMobile({mobile}) {
  return request(`${USER_API}/find-by-mobile/${mobile}`, {
    method: 'GET',
  }, false);
}

export async function doLogin(params) {
  return request(`${USER_API}/login`, {
    method: 'POST',
    body: params,
  }, false);
}

export async function doLogout() {
  return request(`${USER_API}/logout`, {
    method: 'DELETE',
  });
}

export async function userList({pageIndex, pageSize}) {
  const param = {
    pageIndex: pageIndex || 1,
    pageSize: pageSize || 100,
  };
  return request(`${USER_API}/list?${stringify(param)}`, {
    method: 'GET'
  });
}