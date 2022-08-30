 import request from './request'

// 请求首页数据
export const GetHomeData = (params) => request.get('/list',{params})