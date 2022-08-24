/*
 * @Author: Aviator_huahua
 * @Date: 2022-08-14 17:26:44
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-24 21:13:51
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
export const getUser = () => {
  return request({
    url: "/api/user",
    method: "GET",
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
