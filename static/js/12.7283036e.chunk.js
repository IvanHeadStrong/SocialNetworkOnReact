(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[12],{165:function(e,a,t){e.exports={loginContainer:"Login_loginContainer__73dZ_",greeting:"Login_greeting__3j1Aq",textField:"Login_textField__24Mqm",inputWrap:"Login_inputWrap__3WCBf",checkboxWrap:"Login_checkboxWrap__KZ-W6",captcha:"Login_captcha__JkvBf",captchaImg:"Login_captchaImg__2uuVp",buttons:"Login_buttons__2U3JT",error:"Login_error__1tL77"}},196:function(e,a,t){e.exports=t.p+"static/media/refresh.8c6e329c.svg"},251:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),c=t(4),s=t(25),l=t(0),o=t.n(l),i=t(16),m=t(3),u=t(18),p=t(165),d=t.n(p),h=t(22),b=t(139),E=t(106),g=t(234),w=t(246),v=t(254),f=t(255),_=t(253),S=t(237),x=t(239),y=t(233),I=t(242),k=t(249),N=t(240),C=t(241),L=b.a().shape({email:b.b().email("Must be a valid email").required("Required").max(30,"Must be 30 characters or less"),password:b.b().required("Required").max(30,"Must be 30 characters or less")}),M=function(e){var a;return e?e.length>15&&(a="Must be 30 characters or less"):a="Required",a},W=function(e){return o.a.createElement(o.a.Fragment,null,e.loading&&o.a.createElement(h.a,null),o.a.createElement(E.b,{initialValues:{rememberMe:!0,email:"",password:"",captcha:""},validationSchema:L,onSubmit:function(a,t){var r=a.email,n=a.password,c=a.rememberMe,s=a.captcha;return e.onSubmit({email:r,password:n,rememberMe:c,captcha:s},t)}},(function(a){var t=a.handleSubmit,r=a.errors,n=a.touched,c=a.values,s=a.isSubmitting,l=a.status,i=a.handleReset,m=a.setFieldValue;return o.a.createElement("form",{onSubmit:t},o.a.createElement("div",{className:d.a.inputWrap},o.a.createElement(E.a,{className:d.a.textField,name:"email",type:"email",as:w.a,placeholder:"Enter your email",error:Boolean(r.email&&n.email||r.emailServer),label:"Email",variant:"outlined",helperText:n.email&&r.email})),o.a.createElement("div",{className:d.a.inputWrap},o.a.createElement(v.a,{className:d.a.textField,variant:"outlined",error:Boolean(r.password&&n.password)||r.passwordServer},o.a.createElement(f.a,{htmlFor:"sign-in-password"},"Password"),o.a.createElement(E.a,{id:"sign-in-password",name:"password",as:_.a,type:c.passwordShown?"text":"password",placeholder:"Enter your password",labelWidth:65,endAdornment:o.a.createElement(S.a,{position:"end"},o.a.createElement(x.a,{onMouseDown:function(){c.passwordShown?m("passwordShown",!1):m("passwordShown",!0)}},c.passwordShown?o.a.createElement(N.a,null):o.a.createElement(C.a,null)))}),o.a.createElement(y.a,null,n.password&&r.password))),o.a.createElement("div",{className:d.a.checkboxWrap},o.a.createElement(I.a,{label:"Remember me",control:o.a.createElement(E.a,{type:"checkbox",as:k.a,name:"rememberMe",color:"primary"})})),e.captchaUrl&&o.a.createElement("div",{className:d.a.captcha},o.a.createElement("div",{className:d.a.captchaImg},o.a.createElement("button",{type:"button",onClick:e.getCaptcha},o.a.createElement("img",{src:e.refreshImg,alt:""})),o.a.createElement("img",{src:e.captchaUrl,alt:"Captcha"})),o.a.createElement("div",null,o.a.createElement(E.a,{className:d.a.textField,as:w.a,name:"captcha",label:"Type the characters above",error:Boolean(r.captcha&&n.captcha||r.captchaServer),validate:M,variant:"outlined",helperText:n.captcha&&r.captcha}))),o.a.createElement("div",{className:d.a.buttons},o.a.createElement(g.a,{type:"submit",disabled:s,variant:"contained",color:"primary"},"Log in"),o.a.createElement(g.a,{onClick:i,type:"button",disabled:s,variant:"contained",color:"primary"},"Reset")),o.a.createElement("div",{className:d.a.error},l))})))},F=t(196),U=t.n(F),j=t(88);a.default=Object(i.b)((function(e){return{isAuth:e.auth.isAuth,authUserId:e.auth.userId,captchaUrl:e.auth.captchaUrl}}),{signIn:u.d,getAuthUserData:u.b,getCaptcha:u.c})((function(e){Object(j.a)();var a=Object(l.useState)(!1),t=Object(s.a)(a,2),r=t[0],i=t[1],u=function(){var a=Object(c.a)(n.a.mark((function a(t,r){var c,s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.setStatus(),i(!0),a.next=4,e.signIn(t);case 4:c=a.sent,r.resetForm({values:{rememberMe:!0,passwordShown:!1,email:t.email,password:t.password,captcha:""}}),i(!1),c&&(s={},r.setStatus(c),"Incorrect Email or Password"===c&&(s.emailServer="Incorrect Email or Password",s.passwordServer="Incorrect Email or Password",r.setErrors(s)),"Incorrect anti-bot symbols"===c&&(s.captchaServer="Incorrect anti-bot symbols",r.setErrors(s)));case 8:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}();return e.isAuth?o.a.createElement(m.a,{to:"/profile/".concat(e.authUserId)}):o.a.createElement("div",{className:d.a.loginContainer},o.a.createElement("div",{className:d.a.greeting},o.a.createElement("p",null,"Welcome! For future use, enter the following data for authorization:"),o.a.createElement("p",null,"Email: ",o.a.createElement("mark",null,"free@samuraijs.com")),o.a.createElement("p",null,"Password: ",o.a.createElement("mark",null,"free"))),o.a.createElement(W,{refreshImg:U.a,captchaUrl:e.captchaUrl,onSubmit:u,loading:r,getCaptcha:e.getCaptcha}))}))},88:function(e,a,t){"use strict";var r=t(0),n=t(3);a.a=function(){var e=Object(n.g)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}}}]);
//# sourceMappingURL=12.7283036e.chunk.js.map