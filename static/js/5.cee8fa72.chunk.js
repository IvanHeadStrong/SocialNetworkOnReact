(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[5],{107:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),u=n(35),o=n(4),i=n(90),c=n(0),l=n.n(c),s=n(17),m=n(3),p=n(19),d=n(91),b=n.n(d),f=n(88),h=n(86),v=n(87),E=function(e){return l.a.createElement(f.b,{initialValues:{rememberMe:!0,passwordShown:!1},onSubmit:function(t){var n=t.email,r=t.password,a=t.rememberMe;return e.onSubmit({email:n,password:r,rememberMe:a})},render:function(e){var t=e.handleSubmit,n=e.pristine,r=e.form,a=e.submitting,u=e.submitError,o=e.values;return l.a.createElement("form",{onSubmit:t},l.a.createElement("div",null,l.a.createElement(f.a,{name:"email",component:v.a,placeholder:"Enter your email",validate:Object(h.a)(3,30,"Required field")})),l.a.createElement("div",null,l.a.createElement(f.a,{name:"password",component:v.a,type:o.passwordShown?"text":"password",placeholder:"Enter your password",validate:Object(h.a)(3,30,"Required field")})),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement(f.a,{type:"checkbox",component:"input",name:"passwordShown"})," ","Show password")),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement(f.a,{type:"checkbox",component:"input",name:"rememberMe"})," ","Remember me")),l.a.createElement("button",{type:"submit",disabled:a},"Log in"),l.a.createElement("button",{type:"button",disabled:n||a,onClick:r.reset},"Clear"),u&&l.a.createElement("div",{className:b.a.error},u))}})};t.default=Object(s.b)((function(e){return{isAuth:e.auth.isAuth,authUserId:e.auth.userId}}),{signIn:p.c,getAuthUserData:p.b})((function(e){var t=function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.signIn(n);case 2:if(!(r=t.sent)){t.next=5;break}return t.abrupt("return",Object(u.a)({},i.a,r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return e.isAuth?l.a.createElement(m.a,{to:"/profile/".concat(e.authUserId)}):l.a.createElement("div",{className:b.a.loginContainer},l.a.createElement(E,{onSubmit:t}))}))},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t,n){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t||n(e)}),void 0)}}(function(e){return function(t){return t&&t.length<e?"Min length is ".concat(e," symbols"):void 0}}(e),function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}}(t),(r=n,function(e){return e?void 0:r}));var r}},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n(89),a=n(0),u=n.n(a),o=function(e){var t=e.input,n=e.meta,a=Object(r.a)(e,["input","meta"]),o=a.element;return u.a.createElement(u.a.Fragment,null,u.a.createElement(o,Object.assign({},t,{placeholder:a.placeholder})),n.error&&(t.value.length>5||n.touched)&&u.a.createElement("span",null,n.error))},i=function(e){return u.a.createElement(o,Object.assign({element:"input"},e))},c=function(e){return u.a.createElement(o,Object.assign({element:"textarea"},e))}},91:function(e,t,n){e.exports={loginContainer:"Login_loginContainer__3equC",error:"Login_error__PSmDI"}}}]);
//# sourceMappingURL=5.cee8fa72.chunk.js.map