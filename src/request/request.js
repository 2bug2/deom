//  拦截器

import axios from 'axios'
// console.log(process.env)
const BASEURL = process.env.NODE_ENV === 'production'?'/devApi':'/devApi'
const instance = axios.create({
  baseURL: BASEURL,
  timeout: 5000
})

// 请求拦截
instance.interceptors.request.use(config => {
  // console.log(config)
  return config
}, err => {
  return Promise.reject(err)
}
)

// 响应拦截
instance.interceptors.response.use(res => {
  return res.data
}, err => {
  return Promise.reject(err)
})

// 导出
export default instance