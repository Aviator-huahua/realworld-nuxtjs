/*
 * @Author: Aviator_huahua
 * @Date: 2022-08-14 17:26:44
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-21 15:18:48
 * @Description: 
 */
import {request} from '@/plugins/request'

// 用户登录
export const login = (data) => {
  return request({
    url: "/api/users/login",
    method: "POST",
    data,
  })
}

// 注册
export const register = (data) => {
  return request({
    url: "/api/users",
    method: "POST",
    data,
  })
}

// 获取当前用户
export const getUser = (params) => {
  return request({
    url: "/api/user",
    method: "GET",
    params,
  })
}

// 更新当前用户
export const updateUser = (data) => {
  return request({
    url: "/api/user",
    method: "PUT",
    data,
  })
}
