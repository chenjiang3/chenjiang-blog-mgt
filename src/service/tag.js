import request from 'src/utils/request';
import {stringify} from 'qs';

const API = '/tags';

export async function addTag(params) {
  return request(`${API}/add`, {
    method: 'PUT',
    body: params,
  });
}

export async function tagList() {
  return request(`${API}/list`, {
    method: 'GET'
  })
}
