/*
 * @Author: Aviator_huahua
 * @Date: 2022-08-21 15:25:21
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-21 15:28:16
 * @Description: 
 */
import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('date', (value, format='YYYY-MM-DD hh:mm:ss') => {
  return dayjs(value).format(format)
})