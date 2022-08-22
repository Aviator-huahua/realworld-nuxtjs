/*
 * @Author: Aviator_huahua
 * @Date: 2022-08-21 09:47:49
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-21 15:18:45
 * @Description: 
 */

import {request} from '@/plugins/request'

export const getTags = ()=>{
  return request({
    method: 'GET',
    url: '/api/tags',
  })
}