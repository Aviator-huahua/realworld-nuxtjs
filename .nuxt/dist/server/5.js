exports.ids = [5];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=4a004712&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "auth-page"
  }, [_vm._ssrNode("<div class=\"container page\" data-v-4a004712>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-4a004712>", "</div>", [_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-4a004712>", "</div>", [_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-4a004712>" + _vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up')) + "</h1> "), _vm._ssrNode("<p class=\"text-xs-center\" data-v-4a004712>", "</p>", [_vm.isLogin ? _c('nuxt-link', {
    attrs: {
      "to": "/register"
    }
  }, [_vm._v("Need an account?")]) : _c('nuxt-link', {
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Have an account?")])], 1), _vm._ssrNode(" " + (_vm.errors !== {} ? "<ul class=\"error-messages\" data-v-4a004712>" + _vm._ssrList(_vm.errors, function (error, errorName) {
    return _vm._ssrList(error, function (msg, idx) {
      return "<li data-v-4a004712>" + _vm._ssrEscape(_vm._s(errorName + ' ' + msg)) + "</li>";
    });
  }) + "</ul>" : "<!---->") + " <form data-v-4a004712>" + (!_vm.isLogin ? "<fieldset class=\"form-group\" data-v-4a004712><span data-v-4a004712>Name:</span> <input type=\"text\" placeholder=\"Your Name\"" + _vm._ssrAttr("value", _vm.user.username) + " class=\"form-control form-control-lg\" data-v-4a004712></fieldset>" : "<!---->") + " <fieldset class=\"form-group\" data-v-4a004712><span data-v-4a004712>Email:</span> <input type=\"email\" placeholder=\"Email\" required=\"required\"" + _vm._ssrAttr("value", _vm.user.email) + " class=\"form-control form-control-lg\" data-v-4a004712></fieldset> <fieldset class=\"form-group\" data-v-4a004712><span data-v-4a004712>Password:</span> <input type=\"password\" placeholder=\"Password\" required=\"required\"" + _vm._ssrAttr("value", _vm.user.password) + " class=\"form-control form-control-lg\" data-v-4a004712></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-4a004712>" + _vm._ssrEscape("\n            " + _vm._s(_vm.isLogin ? 'Sign in' : 'Sign up') + "\n          ") + "</button></form>")], 2)])])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=4a004712&scoped=true&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/user.js
/*
 * @Author: Aviator_huahua
 * @Date: 2022-08-14 17:26:44
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-21 15:18:48
 * @Description: 
 */
 // 用户登录

const login = data => {
  return Object(request["b" /* request */])({
    url: "/api/users/login",
    method: "POST",
    data
  });
}; // 注册

const register = data => {
  return Object(request["b" /* request */])({
    url: "/api/users",
    method: "POST",
    data
  });
}; // 获取当前用户

const getUser = params => {
  return Object(request["b" /* request */])({
    url: "/api/user",
    method: "GET",
    params
  });
}; // 更新当前用户

const updateUser = data => {
  return Object(request["b" /* request */])({
    url: "/api/user",
    method: "PUT",
    data
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
 // 仅在客户端渲染时加载

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: "LoginIndex",
  middleware: 'noAuth',

  data() {
    return {
      user: {
        username: "",
        email: "",
        password: ""
      },
      errors: {} // 错误信息

    };
  },

  computed: {
    isLogin() {
      return this.$route.name === "login";
    }

  },
  methods: {
    async onSubmit() {
      // 登录请求
      try {
        const {
          data
        } = this.isLogin ? await login({
          user: this.user
        }) : await register({
          user: this.user
        }); // 保存用户登录状态

        const {
          user
        } = data;
        this.$store.commit("setUser", user); // 数据持久化，防止刷新页面数据丢失

        Cookie.set('user', JSON.stringify(user)); // 登录成功，跳转首页

        this.$router.push("/");
      } catch (err) {
        const {
          data
        } = err.response || {};
        this.errors = data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4a004712",
  "0cbec52b"
  
)

/* harmony default export */ var pages_login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map