/*
 * @Author: Aviator_huahua
 * @Date: 2022-08-15 20:40:19
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-15 20:53:09
 * @Description: 验证是否登录的中间件
 */
export default function({store, redirect}){
  if(!store.state.user){
    return redirect('/login')
  }
}