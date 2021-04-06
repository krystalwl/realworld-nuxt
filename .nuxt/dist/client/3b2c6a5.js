(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{192:function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"f",(function(){return o})),r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return m})),r.d(e,"c",(function(){return d})),r.d(e,"e",(function(){return v}));var n=r(79),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},m=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})}},267:function(t,e,r){"use strict";r.r(e);var n=r(4),c=(r(36),r(192)),o=r(211),l=r.n(o),m={name:"ArticleMeta",props:{article:{type:Object,required:!0}}},d=r(30),v=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[r("img",{attrs:{src:t.article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[t._v("\n      "+t._s(t.article.author.username)+"\n    ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.author.following}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n     \n    Follow Eric Simons "),r("span",{staticClass:"counter"},[t._v("(10)")])]),t._v("\n    \n  "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited}},[r("i",{staticClass:"ion-heart"}),t._v("\n     \n    Favorite Post "),r("span",{staticClass:"counter"},[t._v("(29)")])])],1)}),[],!1,null,null,null).exports,f={name:"ArticleComments",props:{article:{type:Object,required:!0}},data:function(){return{comments:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.e)(t.article.slug);case 2:r=e.sent,data=r.data,t.comments=data.comments;case 5:case"end":return e.stop()}}),e)})))()}},_={name:"ArticleIndex",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,article,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,Object(c.c)(r.slug);case 3:return n=e.sent,data=n.data,article=data.article,o=new l.a,article.body=o.render(article.body),e.abrupt("return",{article:article});case 9:case"end":return e.stop()}}),e)})))()},components:{ArticleMeta:v,ArticleComments:Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),t._l(t.comments,(function(e){return r("div",{key:e.id,staticClass:"card"},[r("div",{staticClass:"card-block"},[r("p",{staticClass:"card-text"},[t._v(t._s(e.body))])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[r("img",{staticClass:"comment-author-img",attrs:{src:e.author.image}})]),t._v("\n       \n      "),r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[t._v("\n        "+t._s(e.author.username)+"\n      ")]),t._v(" "),r("span",{staticClass:"date-posted"},[t._v(t._s(t._f("date")(e.createdAt,"MMM DD, YYYY")))])],1)])}))],2)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"card comment-form"},[r("div",{staticClass:"card-block"},[r("textarea",{staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"}})]),t._v(" "),r("div",{staticClass:"card-footer"},[r("img",{staticClass:"comment-author-img",attrs:{src:"http://i.imgur.com/Qr71crq.jpg"}}),t._v(" "),r("button",{staticClass:"btn btn-sm btn-primary"},[t._v("\n      Post Comment\n      ")])])])}],!1,null,null,null).exports},head:function(){return{title:"".concat(this.article.title," - RealWorld"),meta:[{hid:"description",name:"description",content:this.article.description}]}}},h=Object(d.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("article-meta",{attrs:{article:t.article}})],1)]),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row article-content"},[r("div",{staticClass:"col-md-12",domProps:{innerHTML:t._s(t.article.body)}})]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"article-actions"},[r("article-meta",{attrs:{article:t.article}})],1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[r("article-comments",{attrs:{article:t.article}})],1)])])])}),[],!1,null,null,null);e.default=h.exports}}]);