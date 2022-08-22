/*
 * @Author: Aviator_huahua
 * @Date: 2022-08-15 20:40:19
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-15 20:59:39
 * @Description: 已登录拦截
 */
export default function({store, redirect}){
  if(store.state.user){
    return redirect('/')
  }
}