(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{224:function(e,t,r){e.exports=function(){"use strict";function e(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)e[t]=source[t]}return e}function t(r,n){function o(t,o,c){if("undefined"!=typeof document){"number"==typeof(c=e({},n,c)).expires&&(c.expires=new Date(Date.now()+864e5*c.expires)),c.expires&&(c.expires=c.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var m in c)c[m]&&(l+="; "+m,!0!==c[m]&&(l+="="+c[m].split(";")[0]));return document.cookie=t+"="+r.write(o,t)+l}}function c(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],n={},i=0;i<t.length;i++){var o=t[i].split("="),c=o.slice(1).join("=");try{var l=decodeURIComponent(o[0]);if(n[l]=r.read(c,l),e===l)break}catch(e){}}return e?n[e]:n}}return Object.create({set:o,get:c,remove:function(t,r){o(t,"",e({},r,{expires:-1}))},withAttributes:function(r){return t(this.converter,e({},this.attributes,r))},withConverter:function(r){return t(e({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(r)}})}return t({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()},285:function(e,t,r){"use strict";r.r(t);var n=r(4),o=(r(37),r(33),r(68)),c=function(data){return Object(o.b)({url:"/api/users/login",method:"POST",data:data})},l=function(data){return Object(o.b)({url:"/api/users",method:"POST",data:data})},m=r(224),d={name:"LoginIndex",middleware:"noAuth",data:function(){return{user:{username:"",email:"",password:""},errors:{}}},computed:{isLogin:function(){return"login"===this.$route.name}},methods:{onSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data,n,o,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.isLogin){t.next=7;break}return t.next=4,c({user:e.user});case 4:t.t0=t.sent,t.next=10;break;case 7:return t.next=9,l({user:e.user});case 9:t.t0=t.sent;case 10:r=t.t0,data=r.data,n=data.user,e.$store.commit("setUser",n),m.set("user",JSON.stringify(n)),e.$router.push("/"),t.next=22;break;case 18:t.prev=18,t.t1=t.catch(0),o=t.t1.response||{},d=o.data,e.errors=d.errors;case 22:case"end":return t.stop()}}),t,null,[[0,18]])})))()}}},f=r(31),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"auth-page"},[t("div",{staticClass:"container page"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[t("h1",{staticClass:"text-xs-center"},[e._v(e._s(e.isLogin?"Sign in":"Sign up"))]),e._v(" "),t("p",{staticClass:"text-xs-center"},[e.isLogin?t("nuxt-link",{attrs:{to:"/register"}},[e._v("Need an account?")]):t("nuxt-link",{attrs:{to:"/login"}},[e._v("Have an account?")])],1),e._v(" "),e.errors!=={}?t("ul",{staticClass:"error-messages"},[e._l(e.errors,(function(r,n){return e._l(r,(function(r,o){return t("li",{key:o},[e._v(e._s(n+" "+r))])}))}))],2):e._e(),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e.isLogin?e._e():t("fieldset",{staticClass:"form-group"},[t("span",[e._v("Name:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e._v(" "),t("fieldset",{staticClass:"form-group"},[t("span",[e._v("Email:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),t("fieldset",{staticClass:"form-group"},[t("span",[e._v("Password:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),t("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n            "+e._s(e.isLogin?"Sign in":"Sign up")+"\n          ")])])])])])])}),[],!1,null,"4a004712",null);t.default=component.exports}}]);