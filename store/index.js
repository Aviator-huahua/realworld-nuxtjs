/*
 * @Author: Aviator_huahua
 * @Date: 2022-08-14 21:30:45
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-14 22:28:27
 * @Description: 状态仓库
 */

const cookieparser = process.server ? require('cookieparser') : undefined
// 在服务端渲染期间，运行的都是同一个实例
// 为了防止数据冲突，务必要把数据定义为一个函数，返回一个对象
const state = () => {
  return {
    // 当前登录用户的登录状态
    user: null
  }
}

const mutations = {
  setUser(state, data) {
    state.user = data
  }
}

const actions = {
  // 这个特殊的action只会在服务端渲染期间自动调用
  // 初始化容器以及需要传递给客户端的数据
  nuxtServerInit({
    commit
  }, {
    req
  }) {
    let user = null
    // 如果请求头中有Cookie
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
      }
    }

    commit('setUser', user)
  }
}

export default {
  state,
  mutations,
  actions
}