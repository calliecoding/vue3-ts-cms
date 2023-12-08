// service统一出口
import CCRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const ccRequest = new CCRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
export default ccRequest
