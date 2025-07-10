import { message } from 'antd'
import axios from 'axios'
import { removeToken, getToken } from './token'

import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

const apiHost =
  import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_REACT_APP_ONLINE_API
    : import.meta.env.VITE_REACT_APP_API

const requests = axios.create({
  baseURL: `${apiHost || '/'}api/v1`,
  timeout: 300000,
})

// 添加请求拦截器
requests.interceptors.request.use(
  (config) => {
    // if not login add token
    const token = getToken()
    if (token) {
      if (config && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
requests.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.code !== 200) {
      message.error(response.data.message)
      return
    } else {
      return response.data
    }
  },
  (error) => {
    if (error.response.status === 401) {
      // 删除token
      removeToken()
      // 跳转到登录页
      history.push('/login')
    }
    return Promise.reject(error)
  }
)

export default requests
