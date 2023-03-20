import HDRequest from './request'
import { BASE_URL, TIME_OUT } from './config/index'

const hdRequest = new HDRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})

export default hdRequest
