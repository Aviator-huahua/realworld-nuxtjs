<!--
 * @Author: Aviator_huahua
 * @Date: 2022-08-14 11:55:55
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-15 21:00:29
 * @Description: 
-->
<template>

  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{isLogin ? 'Sign in' : 'Sign up'}}</h1>
          <p class="text-xs-center">
            <!-- <a href="">Have an account?</a> -->
            <nuxt-link
              v-if="isLogin"
              to="/register"
            >Need an account?</nuxt-link>
            <nuxt-link
              v-else
              to="/login"
            >Have an account?</nuxt-link>
          </p>

          <ul
            v-if="errors!=={}"
            class="error-messages"
          >
            <template v-for="(error,errorName) in errors">
              <li
                v-for="(msg,idx) in error"
                :key="idx"
              >{{errorName +' '+ msg}}</li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset
              v-if="!isLogin"
              class="form-group"
            >
              <span>Name:</span>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                v-model="user.username"
              >
            </fieldset>
            <fieldset class="form-group">
              <span>Email:</span>
              <input
                class="form-control form-control-lg"
                type="email"
                placeholder="Email"
                v-model="user.email"
                required
              >
            </fieldset>
            <fieldset class="form-group">
              <span>Password:</span>
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="user.password"
                required
              >
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{isLogin ? 'Sign in' : 'Sign up'}}
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from "@/api/user";
// 仅在客户端渲染时加载
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  name: "LoginIndex",
  middleware:'noAuth',
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      errors: {}, // 错误信息
    };
  },
  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },
  methods: {
    async onSubmit() {
      // 登录请求
      try {
        const { data } = this.isLogin
          ? await login({ user: this.user })
          : await register({ user: this.user });

        // 保存用户登录状态
        const { user } = data;
        this.$store.commit("setUser", user);
        // 数据持久化，防止刷新页面数据丢失
        Cookie.set('user',JSON.stringify(user))

        // 登录成功，跳转首页
        this.$router.push("/");
      } catch (err) {
        const { data } = err.response || {};
        this.errors = data.errors;
      }
    },
  },
};
</script>

<style scoped>
</style>