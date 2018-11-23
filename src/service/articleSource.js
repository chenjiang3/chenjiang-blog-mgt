import request from 'src/utils/request';
import {stringify} from 'qs';

const API = '/article-source';

export async function add(params) {
  return request(`${API}/add`, {
    method: 'PUT',
    body: params,
  })
}

export async function list() {
  return request(`${API}/list`, {
    method: 'GET'
  });
}

export async function deleteArticleSource({id}) {
  return request(`${API}/${id}`, {
    method: 'DELETE',
  });
}
