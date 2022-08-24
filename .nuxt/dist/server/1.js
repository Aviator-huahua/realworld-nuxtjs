exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getCommonArticles; });
/* unused harmony export createArticles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getArticlesDetail; });
/* unused harmony export updateArticles */
/* unused harmony export deleteArticles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteFavorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return publishComment; });
/* unused harmony export deleteComment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return unfollowUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return favoritePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return unfavoritePost; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/*
 * @Author: Aviator_huahua
 * @Date: 2022-08-15 21:16:45
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-24 21:47:50
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

const publishComment = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${data.slug}/comments`,
    data: {
      comment: {
        body: data.comment
      }
    }
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
/**
 * @description: 关注
 * @param {*} username
 * @return {*}
 */

const followUser = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  });
};
/**
 * @description: 取消关注
 * @param {*} username
 * @return {*}
 */

const unfollowUser = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  });
};
/**
 * @description: 点赞
 * @param {*} slug
 * @return {*}
 */

const favoritePost = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
};
/**
 * @description: 取消点赞
 * @param {*} slug
 * @return {*}
 */

const unfavoritePost = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=3d67b738&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "article-page"
  }, [_vm._ssrNode("<div class=\"banner\" data-v-3d67b738>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-3d67b738>", "</div>", [_vm._ssrNode("<h1 data-v-3d67b738>" + _vm._ssrEscape(_vm._s(_vm.article.title)) + "</h1> "), _vm._ssrNode("<div class=\"article-actions\" data-v-3d67b738>", "</div>", [_c('ArticleMeta', {
    attrs: {
      "article": _vm.article
    }
  })], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container page\" data-v-3d67b738>", "</div>", [_vm._ssrNode("<div class=\"row article-content\" data-v-3d67b738><div class=\"col-md-12\" data-v-3d67b738>" + _vm._s(_vm.article.body) + "</div></div> <hr data-v-3d67b738> "), _vm._ssrNode("<div class=\"article-actions\" data-v-3d67b738>", "</div>", [_c('ArticleMeta', {
    attrs: {
      "article": _vm.article
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\" data-v-3d67b738>", "</div>", [_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\" data-v-3d67b738>", "</div>", [_c('ArticleComments', {
    attrs: {
      "article": _vm.article
    }
  })], 1)])], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=3d67b738&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=217264ae&scoped=true&
var article_metavue_type_template_id_217264ae_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "article-meta"
  }, [_c('nuxt-link', {
    attrs: {
      "to": {
        name: 'profile',
        params: {
          username: _vm.article.author.username
        }
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.article.author.image
    }
  })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"info\" data-v-217264ae>", "</div>", [_c('nuxt-link', {
    staticClass: "author",
    attrs: {
      "to": {
        name: 'profile',
        params: {
          username: _vm.article.author.username
        }
      }
    }
  }, [_vm._v(_vm._s(_vm.article.author.username))]), _vm._ssrNode(" <span class=\"date\" data-v-217264ae>" + _vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt, 'MMM DD,YYYY'))) + "</span>")], 2), _vm._ssrNode(" <button" + _vm._ssrClass("btn btn-sm btn-outline-secondary", {
    active: _vm.article.author.following
  }) + " data-v-217264ae><i class=\"ion-plus-round\" data-v-217264ae></i>" + _vm._ssrEscape("\n     \n    " + _vm._s(_vm.article.author.following ? "Unfollow" : "Follow") + " " + _vm._s(_vm.article.author.username) + "\n  ") + "</button> <button" + _vm._ssrClass("btn btn-sm btn-outline-primary", {
    active: _vm.article.favorited
  }) + " data-v-217264ae><i class=\"ion-heart\" data-v-217264ae></i>" + _vm._ssrEscape("\n     \n    " + _vm._s(_vm.article.favorited ? "Unfavorite Post" : "Favorite Post") + " ") + "<span class=\"counter\" data-v-217264ae>" + _vm._ssrEscape("(" + _vm._s(_vm.article.favoritesCount) + ")") + "</span></button>")], 2);
};

var article_metavue_type_template_id_217264ae_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=217264ae&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&

/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: "ArticleMeta",
  props: ["article"],

  // 设置网页tab标题
  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [{
        hid: "description",
        name: "description",
        content: this.article.description
      }]
    };
  },

  methods: {
    async followAuthor(author) {
      const {
        following,
        username
      } = author;
      const api = following ? api_article["k" /* unfollowUser */] : api_article["d" /* followUser */];
      await api(username);
      author.following = !following;
    },

    async favoritePost(article) {
      const {
        favorited,
        slug
      } = article;
      const api = favorited ? api_article["j" /* unfavoritePost */] : api_article["c" /* favoritePost */];
      await api(slug);
      article.favorited = !favorited;
      article.favoritesCount += favorited ? -1 : 1;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_217264ae_scoped_true_render,
  article_metavue_type_template_id_217264ae_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "217264ae",
  "e0fb06b0"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=template&id=34f53df4&scoped=true&
var article_commentsvue_type_template_id_34f53df4_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<form class=\"card comment-form\" data-v-34f53df4><div class=\"card-block\" data-v-34f53df4><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\" data-v-34f53df4>" + _vm._ssrEscape(_vm._s(_vm.comment)) + "</textarea></div> <div class=\"card-footer\" data-v-34f53df4><img" + _vm._ssrAttr("src", _vm.user.image || 'https://s20.lgstatic.com/growth/activity/20210720/1626784734098.jpeg?x-oss-process=style/80') + " class=\"comment-author-img\" data-v-34f53df4> <button class=\"btn btn-sm btn-primary\" data-v-34f53df4>\n        Post Comment\n      </button></div></form> "), _vm._l(_vm.comments, function (comment) {
    return _vm._ssrNode("<div class=\"card\" data-v-34f53df4>", "</div>", [_vm._ssrNode("<div class=\"card-block\" data-v-34f53df4><p class=\"card-text\" data-v-34f53df4>" + _vm._ssrEscape(_vm._s(comment.body)) + "</p></div> "), _vm._ssrNode("<div class=\"card-footer\" data-v-34f53df4>", "</div>", [_c('nuxt-link', {
      staticClass: "comment-author",
      attrs: {
        "to": {
          name: 'profile',
          params: {
            username: comment.author.username
          }
        }
      }
    }, [_c('img', {
      staticClass: "comment-author-img",
      attrs: {
        "src": comment.author.image
      }
    })]), _vm._ssrNode("\n       \n      "), _c('nuxt-link', {
      staticClass: "comment-author",
      attrs: {
        "to": {
          name: 'profile',
          params: {
            username: comment.author.username
          }
        }
      }
    }, [_vm._v(_vm._s(comment.author.username))]), _vm._ssrNode(" <span class=\"date-posted\" data-v-34f53df4>" + _vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt, 'MMM DD,YYYY'))) + "</span>")], 2)], 2);
  })], 2);
};

var article_commentsvue_type_template_id_34f53df4_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=template&id=34f53df4&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=script&lang=js&


/* harmony default export */ var article_commentsvue_type_script_lang_js_ = ({
  name: "ArticleComments",
  props: ["article"],

  data() {
    return {
      comments: [],
      comment: ""
    };
  },

  mounted() {
    this.initData();
  },

  methods: {
    async publishComments() {
      await Object(api_article["i" /* publishComment */])({
        slug: this.article.slug,
        comment: this.comment
      });
      this.initData();
    },

    async initData() {
      const {
        data
      } = await Object(api_article["g" /* getComments */])(this.article.slug);
      this.comments = data.comments;
    }

  },
  computed: { ...Object(external_vuex_["mapState"])(["user"])
  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentsvue_type_script_lang_js_ = (article_commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue



function article_comments_injectStyles (context) {
  
  
}

/* normalize component */

var article_comments_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentsvue_type_script_lang_js_,
  article_commentsvue_type_template_id_34f53df4_scoped_true_render,
  article_commentsvue_type_template_id_34f53df4_scoped_true_staticRenderFns,
  false,
  article_comments_injectStyles,
  "34f53df4",
  "4dab7797"
  
)

/* harmony default export */ var article_comments = (article_comments_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: "ArticleIndex",
  components: {
    ArticleMeta: article_meta,
    ArticleComments: article_comments
  },

  data() {
    return {};
  },

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["f" /* getArticlesDetail */])(params.slug);
    const {
      article
    } = data;
    const md = external_markdown_it_default()();
    article.body = md.render(article.body);
    return {
      article: data.article
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  "3d67b738",
  "1886c978"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map