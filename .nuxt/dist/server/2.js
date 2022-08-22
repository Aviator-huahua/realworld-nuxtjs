exports.ids = [2];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getCommonArticles; });
/* unused harmony export createArticles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticlesDetail; });
/* unused harmony export updateArticles */
/* unused harmony export deleteArticles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteFavorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getComments; });
/* unused harmony export publishComment */
/* unused harmony export deleteComment */
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/*
 * @Author: Aviator_huahua
 * @Date: 2022-08-15 21:16:45
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-21 20:10:02
 * @Description: 
 */

/**
 * @description: 获取关注的文章列表
 * @param {*} params
 * @return {*}
 */

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
};
/**
 * @description: 获取公共的文章列表
 * @param {*} params
 * @return {*}
 */

const getCommonArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
};
/**
 * @description: 创建文章
 * @param {*} data
 * @return {*}
 */

const createArticles = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/articles',
    data
  });
};
/**
 * @description: 获取文章详情
 * @param {*} data
 * @return {*}
 */

const getArticlesDetail = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
};
/**
 * @description: 编辑文章
 * @param {*} data
 * @return {*}
 */

const updateArticles = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/articles/${slug}`
  });
};
/**
 * @description: 删除文章
 * @param {*} data
 * @return {*}
 */

const deleteArticles = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  });
};
/**
 * @description: 点赞
 * @param {*} data
 * @return {*}
 */

const addFavorites = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
};
/**
 * @description: 删除点赞
 * @param {*} data
 * @return {*}
 */

const deleteFavorites = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
};
/**
 * @description: 获取评论
 * @param {*} data
 * @return {*}
 */

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
};
/**
 * @description: 发布评论
 * @param {*} data
 * @return {*}
 */

const publishComment = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments`
  });
};
/**
 * @description: 删除评论
 * @param {*} data
 * @return {*}
 */

const deleteComment = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${data.slug}/comments/${data.id}`
  });
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=13aa03e2&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "home-page"
  }, [_vm._ssrNode("<div class=\"banner\" data-v-13aa03e2><div class=\"container\" data-v-13aa03e2><h1 class=\"logo-font\" data-v-13aa03e2>conduit</h1> <p data-v-13aa03e2>A place to share your knowledge.</p></div></div> "), _vm._ssrNode("<div class=\"container page\" data-v-13aa03e2>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-13aa03e2>", "</div>", [_vm._ssrNode("<div class=\"col-md-9\" data-v-13aa03e2>", "</div>", [_vm._ssrNode("<div class=\"feed-toggle\" data-v-13aa03e2>", "</div>", [_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-13aa03e2>", "</ul>", [_vm.user ? _vm._ssrNode("<li class=\"nav-item\" data-v-13aa03e2>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    class: {
      active: _vm.tab === 'your_feed'
    },
    attrs: {
      "exact": "",
      "to": {
        name: 'home',
        query: {
          tab: 'your_feed'
        }
      }
    }
  }, [_vm._v("Your Feed")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item\" data-v-13aa03e2>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    class: {
      active: _vm.tab === 'global_feed'
    },
    attrs: {
      "exact": "",
      "to": {
        name: 'home',
        query: {
          tab: 'global_feed'
        }
      }
    }
  }, [_vm._v("Global Feed")])], 1), _vm._ssrNode(" "), _vm.tag ? _vm._ssrNode("<li class=\"nav-item\" data-v-13aa03e2>", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    class: {
      active: _vm.tab === 'tag'
    },
    attrs: {
      "to": {
        name: 'home',
        query: {
          tab: 'tag',
          tag: _vm.tag
        }
      }
    }
  }, [_vm._v("#" + _vm._s(_vm.tag))])], 1) : _vm._e()], 2)]), _vm._ssrNode(" "), _vm._l(_vm.articles, function (article) {
    return _vm._ssrNode("<div class=\"article-preview\" data-v-13aa03e2>", "</div>", [_vm._ssrNode("<div class=\"article-meta\" data-v-13aa03e2>", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": {
          name: 'profile',
          params: {
            username: article.author.username
          }
        }
      }
    }, [_c('img', {
      attrs: {
        "src": article.author.image
      }
    })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"info\" data-v-13aa03e2>", "</div>", [_c('nuxt-link', {
      staticClass: "author",
      attrs: {
        "to": {
          name: 'profile',
          params: {
            username: article.author.username
          }
        }
      }
    }, [_vm._v("\n                " + _vm._s(article.author.username) + "\n              ")]), _vm._ssrNode(" <span class=\"date\" data-v-13aa03e2>" + _vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt, 'MMM DD,YYYY'))) + "</span>")], 2), _vm._ssrNode(" <button" + _vm._ssrAttr("disabled", article.favoriteDisabled) + _vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right", {
      active: article.favorited
    }) + " data-v-13aa03e2><i class=\"ion-heart\" data-v-13aa03e2></i>" + _vm._ssrEscape(" " + _vm._s(article.favoritesCount) + "\n            ") + "</button>")], 2), _vm._ssrNode(" "), _c('nuxt-link', {
      staticClass: "preview-link",
      attrs: {
        "to": {
          name: 'article',
          params: {
            slug: article.slug
          }
        }
      }
    }, [_c('h1', [_vm._v(_vm._s(article.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(article.description))]), _vm._v(" "), _c('span', [_vm._v("Read more...")])])], 2);
  }), _vm._ssrNode(" "), _vm._ssrNode("<nav data-v-13aa03e2>", "</nav>", [_vm._ssrNode("<ul class=\"pagination\" data-v-13aa03e2>", "</ul>", _vm._l(_vm.totalPage, function (item) {
    return _vm._ssrNode("<li" + _vm._ssrClass("page-item", {
      active: item === _vm.page
    }) + " data-v-13aa03e2>", "</li>", [_c('nuxt-link', {
      staticClass: "page-link",
      attrs: {
        "to": {
          name: 'home',
          query: {
            page: item,
            tab: _vm.tab,
            tag: _vm.tag
          }
        }
      }
    }, [_vm._v(_vm._s(item))])], 1);
  }), 0)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-3\" data-v-13aa03e2>", "</div>", [_vm._ssrNode("<div class=\"sidebar\" data-v-13aa03e2>", "</div>", [_vm._ssrNode("<p data-v-13aa03e2>Popular Tags</p> "), _vm._ssrNode("<div class=\"tag-list\" data-v-13aa03e2>", "</div>", _vm._l(_vm.tags, function (tag, idx) {
    return _c('nuxt-link', {
      key: idx,
      staticClass: "tag-pill tag-default",
      attrs: {
        "to": {
          name: 'home',
          query: {
            tab: 'tag',
            tag
          }
        }
      }
    }, [_vm._v(_vm._s(tag))]);
  }), 1)], 2)])], 2)])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=13aa03e2&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/tags.js
/*
 * @Author: Aviator_huahua
 * @Date: 2022-08-21 09:47:49
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-21 15:18:45
 * @Description: 
 */

const getTags = () => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/tags'
  });
};
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: "HomeIndex",

  data() {
    return {};
  },

  // watchQuery:true,
  watchQuery: ["page", "tag", "tab"],

  async asyncData({
    query,
    store
  }) {
    // 分页参数
    const limit = 2,
          page = Number.parseInt(query.page || 1),
          {
      tag,
      tab = "global_feed"
    } = query; // 获取文章列表

    const loadAritcles = store.state.user && tab === "your_feed" ? api_article["c" /* getArticles */] : api_article["f" /* getCommonArticles */];
    const [articleRes, totalRes, tagRes] = await Promise.all([// 获取文章列表
    loadAritcles({
      tag,
      limit,
      offset: (page - 1) * limit
    }), // 获取数据总条数
    loadAritcles({
      tag,
      limit: 999
    }), // 获取tag
    getTags()]);
    const {
      articles
    } = articleRes.data || {};
    const {
      articlesCount
    } = totalRes.data || {};
    const {
      tags
    } = tagRes.data || {};
    articles.forEach(article => article.favoriteDisabled = false);
    return {
      articles,
      articlesCount,
      limit,
      page,
      tags,
      tag,
      tab
    };
  },

  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true;

      if (article.favorited) {
        // 取消点赞
        await Object(api_article["b" /* deleteFavorites */])(article.slug);
        article.favorited = false;
        article.favoritesCount -= 1;
      } else {
        // 添加点赞
        await Object(api_article["a" /* addFavorites */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisabled = false;
    }

  },
  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },

    ...Object(external_vuex_["mapState"])(["user"])
  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "13aa03e2",
  "4c09b9b9"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map