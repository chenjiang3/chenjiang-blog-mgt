import request from 'src/utils/request';
import {stringify} from 'qs';

const API = '/article';

// export async function findByMobile({mobile}) {
//   return request(`${USER_API}/find-by-mobile/${mobile}`, {
//     method: 'GET',
//   });
// }

export async function addArticle(params) {
  return request(`${API}/add`, {
    method: 'POST',
    body: params,
  });
}