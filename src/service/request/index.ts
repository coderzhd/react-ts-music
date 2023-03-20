import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface HDInteceptors<T> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}
interface HDRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HDInteceptors<T>
}

class HDRequest {
  // 创建这个类的目的：每个创建出的HDRequest的实例都对应一个axios实例

  // 创建实例的方法：constructor()构造实例
  instance: AxiosInstance
  constructor(config: HDRequestConfig) {
    this.instance = axios.create(config)

    // 添加全局拦截器，每个实例都有
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局请求成功的拦截')
        return config
      },
      (err) => {
        console.log('全局请求失败的拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局响应成功的拦截')
        // 在这里提取出响应数据中的data，那么在此之后的拦截器拦截到的数据就是res.data
        return res.data
      },
      (err) => {
        console.log('全局响应失败的拦截')
        return err
      }
    )

    // 针对特定的hdRequest实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )

    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.requestFailureFn
    )
  }

  // 二次封装网络请求的方法
  request<T = any>(config: HDRequestConfig<T>) {
    // 为同一个request实例的不同网络请求设置不同的拦截器
    // 不能将拦截器放在实例上，这样的话同一个实例的拦截器都是一样的了
    // 只能判断传进来的config中是否设置了拦截器，若设置了就直接执行
    if (config.interceptors?.requestSuccessFn) {
      //立即调用拦截器函数执行requestSuccessFn
      config = config.interceptors.requestSuccessFn(config)
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: HDRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: HDRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: HDRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: HDRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default HDRequest
