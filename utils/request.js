/*
 * @Author: Aviator_huahua
 * @Date: 2022-08-14 16:46:03
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-21 15:08:10
 * @Description: 基于 axios 封装请求模块
 */

import axios from 'axios'

const request = axios.create({
  baseURL: 'https://api.realworld.io'
})

// 请求拦截器

// 响应拦截器

export default request;