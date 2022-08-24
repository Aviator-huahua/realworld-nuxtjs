(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{207:function(t,e,r){"use strict";r.d(e,"e",(function(){return c})),r.d(e,"h",(function(){return o})),r.d(e,"f",(function(){return l})),r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return f})),r.d(e,"g",(function(){return d})),r.d(e,"i",(function(){return v})),r.d(e,"d",(function(){return h})),r.d(e,"k",(function(){return O})),r.d(e,"c",(function(){return _})),r.d(e,"j",(function(){return C}));var n=r(68),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},l=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},m=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},v=function(data){return Object(n.b)({method:"POST",url:"/api/articles/".concat(data.slug,"/comments"),data:{comment:{body:data.comment}}})},h=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t,"/follow")})},O=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})},_=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},C=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})}},283:function(t,e,r){"use strict";r.r(e);var n=r(4),c=(r(37),r(207)),o=r(225),l=r.n(o),m={name:"ArticleMeta",props:["article"],head:function(){return{title:"".concat(this.article.title," - RealWorld"),meta:[{hid:"description",name:"description",content:this.article.description}]}},methods:{followAuthor:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.following,n=t.username,o=r?c.k:c.d,e.next=4,o(n);case 4:t.following=!r;case 5:case"end":return e.stop()}}),e)})))()},favoritePost:function(article){return Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=article.favorited,r=article.slug,n=e?c.j:c.c,t.next=4,n(r);case 4:article.favorited=!e,article.favoritesCount+=e?-1:1;case 6:case"end":return t.stop()}}),t)})))()}}},f=r(31),d=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"article-meta"},[e("nuxt-link",{attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[e("img",{attrs:{src:t.article.author.image}})]),t._v(" "),e("div",{staticClass:"info"},[e("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[t._v(t._s(t.article.author.username))]),t._v(" "),e("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.article.createdAt,"MMM DD,YYYY")))])],1),t._v(" "),e("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.author.following},on:{click:function(e){return t.followAuthor(t.article.author)}}},[e("i",{staticClass:"ion-plus-round"}),t._v("\n     \n    "+t._s(t.article.author.following?"Unfollow":"Follow")+" "+t._s(t.article.author.username)+"\n  ")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited},on:{click:function(e){return t.favoritePost(t.article)}}},[e("i",{staticClass:"ion-heart"}),t._v("\n     \n    "+t._s(t.article.favorited?"Unfavorite Post":"Favorite Post")+" "),e("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")])])],1)}),[],!1,null,"217264ae",null).exports,v=(r(38),r(23),r(24),r(50),r(51),r(21)),h=r(49);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var _={name:"ArticleComments",props:["article"],data:function(){return{comments:[],comment:""}},mounted:function(){this.initData()},methods:{publishComments:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.i)({slug:t.article.slug,comment:t.comment});case 2:t.initData();case 3:case"end":return e.stop()}}),e)})))()},initData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.g)(t.article.slug);case 2:r=e.sent,data=r.data,t.comments=data.comments;case 5:case"end":return e.stop()}}),e)})))()}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(h.b)(["user"]))},C=_,j={name:"ArticleIndex",components:{ArticleMeta:d,ArticleComments:Object(f.a)(C,(function(){var t=this,e=t._self._c;return e("div",[e("form",{staticClass:"card comment-form"},[e("div",{staticClass:"card-block"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"card-footer"},[e("img",{staticClass:"comment-author-img",attrs:{src:t.user.image||"https://s20.lgstatic.com/growth/activity/20210720/1626784734098.jpeg?x-oss-process=style/80"}}),t._v(" "),e("button",{staticClass:"btn btn-sm btn-primary",on:{click:t.publishComments}},[t._v("\n        Post Comment\n      ")])])]),t._v(" "),t._l(t.comments,(function(r){return e("div",{key:r.id,staticClass:"card"},[e("div",{staticClass:"card-block"},[e("p",{staticClass:"card-text"},[t._v(t._s(r.body))])]),t._v(" "),e("div",{staticClass:"card-footer"},[e("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:r.author.username}}}},[e("img",{staticClass:"comment-author-img",attrs:{src:r.author.image}})]),t._v("\n       \n      "),e("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:r.author.username}}}},[t._v(t._s(r.author.username))]),t._v(" "),e("span",{staticClass:"date-posted"},[t._v(t._s(t._f("date")(r.createdAt,"MMM DD,YYYY")))])],1)])}))],2)}),[],!1,null,"34f53df4",null).exports},data:function(){return{}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,article,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,Object(c.f)(r.slug);case 3:return n=e.sent,data=n.data,article=data.article,o=l()(),article.body=o.render(article.body),e.abrupt("return",{article:data.article});case 9:case"end":return e.stop()}}),e)})))()}},w=Object(f.a)(j,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"article-page"},[e("div",{staticClass:"banner"},[e("div",{staticClass:"container"},[e("h1",[t._v(t._s(t.article.title))]),t._v(" "),e("div",{staticClass:"article-actions"},[e("ArticleMeta",{attrs:{article:t.article}})],1)])]),t._v(" "),e("div",{staticClass:"container page"},[e("div",{staticClass:"row article-content"},[e("div",{staticClass:"col-md-12",domProps:{innerHTML:t._s(t.article.body)}})]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"article-actions"},[e("ArticleMeta",{attrs:{article:t.article}})],1),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[e("ArticleComments",{attrs:{article:t.article}})],1)])])])}),[],!1,null,"3d67b738",null);e.default=w.exports}}]);