/*
 * @Author: Aviator_huahua
 * @Date: 2022-08-14 11:28:48
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-24 21:58:50
 * @Description: nuxt配置文件
 */
module.exports = {
  plugins: ['~/plugins/request.js', '~/plugins/dayjs.js'],

  router: {
    // middleware: ['auth', 'noAuth'],
    linkActiveClass: 'active',
    // 自定义路由表规则
    extendRoutes(routes, resolve) {
      // 清空默认路由配置
      routes.splice(0)

      routes.push(...[{
        path: '/',
        component: resolve(__dirname, 'pages/layout'),
        children: [{
            path: '', //默认子路由
            name: 'home',
            component: resolve(__dirname, 'pages/home')
          },
          {
            path: '/login', //登录
            name: 'login',
            component: resolve(__dirname, 'pages/login')
          },
          {
            path: '/register', //注册
            name: 'register',
            component: resolve(__dirname, 'pages/login')
          },
          {
            path: '/profile/:username', //个人资料
            name: 'profile',
            component: resolve(__dirname, 'pages/profile')
          },
          {
            path: '/settings', //设置
            name: 'settings',
            component: resolve(__dirname, 'pages/settings')
          },
          {
            path: '/editor', //编辑
            name: 'editor',
            component: resolve(__dirname, 'pages/editor')
          },
          {
            path: '/article/:slug', //详情
            name: 'article',
            component: resolve(__dirname, 'pages/article')
          },
        ]
      }, ])
    },
  },

  server: {
    host: '0.0.0.0', // 生产环境
    port: 3000
  }
}