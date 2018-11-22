import request from 'src/utils/request';
import {stringify} from 'qs';

const API = '/article';

export async function articleList({pageIndex, pageSize}) {
  const params = {
    pageIndex: pageIndex || 1,
    pageSize: pageSize || 100,
  };
  return request(`${API}/list?${stringify(params)}`, {
    method: 'GET',
  })
}

export async function addArticle(params) {
  return request(`${API}/add`, {
    method: 'POST',
    body: params,
  });
}