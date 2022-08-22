/*
 * @Author: Aviator_huahua
 * @Date: 2022-08-21 15:07:32
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-21 15:19:36
 * @Description: 请求插件
 */

import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://api.realworld.io'
  // baseURL: 'https://realworld.api.fed.lagounews.com'
})

export default ({
  store
}) => {
  // 请求拦截器
  request.interceptors.request.use(config => {
    const {
      user
    } = store.state;
    if (user && user.token) {
      config.headers.authorization = `Token ${user.token}`
    }
    return config;
  }, error => {
    // 此时请求还没发出
    console.log(error);
  })

  // 响应拦截器
};