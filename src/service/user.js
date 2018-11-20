import request from 'src/utils/request';
import {stringify} from 'qs';

const USER_API = '/user';

export async function findByMobile({mobile}) {
  return request(`${USER_API}/find-by-mobile/${mobile}`, {
    method: 'GET',
  });
}

export async function doLogin(params) {
  return request(`${USER_API}/login`, {
    method: 'POST',
    body: params,
  });
}