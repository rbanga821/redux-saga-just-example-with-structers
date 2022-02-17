import {ApiRequest} from '@constant';
import {API_END_POINTS} from '@constant';

export function pincodeList(params) {
  console.log("pincodeList----->"+params);
  console.log('pincodeList----->' + `${API_END_POINTS.PINCODE_LIST}` + params);
  return ApiRequest.fetch({
    method: 'get',
    url: `${API_END_POINTS.PINCODE_LIST}` + params,
  }).then(response => response);
}
// export function fetchAccounts() {
//   return ApiRequest.fetch({
//     method: 'get',
//     url: API_END_POINTS.ACCOUNTS,
//   }).then(response => response.data.accounts);
// }

// export function createBankAccount(params) {
//   return ApiRequest.fetch({
//     method: 'post',
//     url: API_END_POINTS.CREATE_BANK_ACCOUNT,
//     data: params,
//   }).then(response => response.data);
// }