(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[5],{107:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),i=n(36),u=n(4),o=n(32),c=n(21),l=n(0),s=n.n(l),f=n(17),d=n(3),m=n(19),b=n(91),v=n.n(b),p=n(86),g=n(90),h=n(88),O=n(24),E=function(e){return s.a.createElement(p.b,{initialValues:{rememberMe:!0,passwordShown:!1},onSubmit:function(t){var n=t.email,r=t.password,a=t.rememberMe;return e.onSubmit({email:n,password:r,rememberMe:a})},render:function(t){var n=t.handleSubmit,r=t.pristine,a=t.form,i=t.submitting,u=t.submitError,o=t.values;return s.a.createElement("form",{onSubmit:n},e.loading&&s.a.createElement(O.a,null),s.a.createElement("div",{className:v.a.textInputWrap},s.a.createElement(p.a,{name:"email",component:h.a,placeholder:"Enter your email",validate:Object(g.a)(3,30,"Required field")})),s.a.createElement("div",{className:v.a.textInputWrap},s.a.createElement(p.a,{name:"password",component:h.a,type:o.passwordShown?"text":"password",placeholder:"Enter your password",validate:Object(g.a)(3,30,"Required field")})),s.a.createElement("div",null,s.a.createElement("label",null,s.a.createElement(p.a,{type:"checkbox",component:"input",name:"passwordShown"})," ","Show password")),s.a.createElement("div",null,s.a.createElement("label",null,s.a.createElement(p.a,{type:"checkbox",component:"input",name:"rememberMe"})," ","Remember me")),s.a.createElement("button",{type:"submit",disabled:i},"Log in"),s.a.createElement("button",{type:"button",disabled:r||i,onClick:a.reset},"Clear"),u&&s.a.createElement("div",{className:v.a.error},u))}})};t.default=Object(f.b)((function(e){return{isAuth:e.auth.isAuth,authUserId:e.auth.userId}}),{signIn:m.c,getAuthUserData:m.b})((function(e){var t=Object(l.useState)(!1),n=Object(o.a)(t,2),r=n[0],f=n[1],m=function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.next=3,e.signIn(n);case 3:if(r=t.sent,f(!1),!r){t.next=7;break}return t.abrupt("return",Object(i.a)({},c.a,r));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return e.isAuth?s.a.createElement(d.a,{to:"/profile/".concat(e.authUserId)}):s.a.createElement("div",{className:v.a.loginContainer},s.a.createElement("div",{className:v.a.greeting},s.a.createElement("p",null,"Welcome! For future use, enter the following data for authorization:"),s.a.createElement("p",null,"Email: ",s.a.createElement("mark",null,"free@samuraijs.com")),s.a.createElement("p",null,"Password: ",s.a.createElement("mark",null,"free"))),s.a.createElement(E,{onSubmit:m,loading:r}))}))},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return h}));var r=n(1),a=n(5),i=n(0),u=n.n(i),o=n(21);function c(e,t,n){var r=e.render,u=e.children,o=e.component,c=Object(a.a)(e,["render","children","component"]);if(o)return Object(i.createElement)(o,Object.assign(t,c,{children:u,render:r}));if(r)return r(void 0===u?Object.assign(t,c):Object.assign(t,c,{children:u}));if("function"!==typeof u)throw new Error("Must specify either a render prop, a render function as children, or a component prop to "+n);return u(Object.assign(t,c))}function l(e,t,n){void 0===n&&(n=function(e,t){return e===t});var r=u.a.useRef(e);u.a.useEffect((function(){n(e,r.current)||(t(),r.current=e)}))}var s=function(e,t){if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),i=0;i<n.length;i++){var u=n[i];if(!a(u)||e[u]!==t[u])return!1}return!0},f=function(e){return!(!e||"function"!==typeof e.stopPropagation)},d=Object(i.createContext)();function m(e){var t=u.a.useRef(e);return u.a.useEffect((function(){t.current=e})),t}var b=function(e,t,n){n.forEach((function(n){Object.defineProperty(e,n,{get:function(){return t[n]},enumerable:!0})}))},v=function(e,t){return b(e,t,["active","dirty","dirtyFields","dirtySinceLastSubmit","dirtyFieldsSinceLastSubmit","error","errors","hasSubmitErrors","hasValidationErrors","initialValues","invalid","modified","modifiedSinceLastSubmit","pristine","submitError","submitErrors","submitFailed","submitSucceeded","submitting","touched","valid","validating","values","visited"])},p={"final-form":o.e,"react-final-form":"6.5.0"},g=o.d.reduce((function(e,t){return e[t]=!0,e}),{});function h(e){var t=e.debug,n=e.decorators,b=e.destroyOnUnregister,h=e.form,O=e.initialValues,E=e.initialValuesEqual,y=e.keepDirtyOnReinitialize,j=e.mutators,S=e.onSubmit,w=e.subscription,x=void 0===w?g:w,k=e.validate,F=e.validateOnBlur,V=Object(a.a)(e,["debug","decorators","destroyOnUnregister","form","initialValues","initialValuesEqual","keepDirtyOnReinitialize","mutators","onSubmit","subscription","validate","validateOnBlur"]),C={debug:t,destroyOnUnregister:b,initialValues:O,keepDirtyOnReinitialize:y,mutators:j,onSubmit:S,validate:k,validateOnBlur:F},_=function(e){var t=u.a.useRef();return t.current||(t.current=e()),t.current}((function(){var e=h||Object(o.b)(C);return e.pauseValidation(),e})),R=Object(i.useState)((function(){var e={};return _.subscribe((function(t){e=t}),x)(),e})),L=R[0],A=R[1],I=m(L);Object(i.useEffect)((function(){_.isValidationPaused()&&_.resumeValidation();var e=[_.subscribe((function(e){s(e,I.current)||A(e)}),x)].concat(n?n.map((function(e){return e(_)})):[]);return function(){_.pauseValidation(),e.reverse().forEach((function(e){return e()}))}}),[n]),l(t,(function(){_.setConfig("debug",t)})),l(b,(function(){_.destroyOnUnregister=!!b})),l(y,(function(){_.setConfig("keepDirtyOnReinitialize",y)})),l(O,(function(){_.setConfig("initialValues",O)}),E||s),l(j,(function(){_.setConfig("mutators",j)})),l(S,(function(){_.setConfig("onSubmit",S)})),l(k,(function(){_.setConfig("validate",k)})),l(F,(function(){_.setConfig("validateOnBlur",F)}));var N={form:Object(r.a)({},_,{reset:function(e){f(e)?_.reset():_.reset(e)}}),handleSubmit:function(e){return e&&("function"===typeof e.preventDefault&&e.preventDefault(),"function"===typeof e.stopPropagation&&e.stopPropagation()),_.submit()}};return v(N,L),Object(i.createElement)(d.Provider,{value:_},c(Object(r.a)({},V,{__versions:p}),N,"ReactFinalForm"))}function O(e){var t=Object(i.useContext)(d);if(!t)throw new Error((e||"useForm")+" must be used inside of a <Form> component");return t}var E="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,y=o.c.reduce((function(e,t){return e[t]=!0,e}),{}),j=function(e,t){return void 0===e?"":e},S=function(e,t){return""===e?void 0:e},w=function(e,t){return e===t};function x(e,t){void 0===t&&(t={});var n=t,a=n.afterSubmit,u=n.allowNull,o=n.component,c=n.data,l=n.defaultValue,s=n.format,f=void 0===s?j:s,d=n.formatOnBlur,v=n.initialValue,p=n.multiple,g=n.parse,h=void 0===g?S:g,x=n.subscription,k=void 0===x?y:x,F=n.type,V=n.validateFields,C=n.value,_=O("useField"),R=m(t),L=function(t,n){return _.registerField(e,t,k,{afterSubmit:a,beforeSubmit:function(){var t=R.current,n=t.beforeSubmit,r=t.formatOnBlur,a=t.format,i=void 0===a?j:a;if(r){var u=_.getFieldState(e).value,o=i(u,e);o!==u&&_.change(e,o)}return n&&n()},data:c,defaultValue:l,getValidator:function(){return R.current.validate},initialValue:v,isEqual:function(e,t){return(R.current.isEqual||w)(e,t)},silent:n,validateFields:V})},A=Object(i.useRef)(!0),I=Object(i.useState)((function(){var e={},t=_.destroyOnUnregister;return _.destroyOnUnregister=!1,L((function(t){e=t}),!0)(),_.destroyOnUnregister=t,e})),N=I[0],P=I[1];Object(i.useEffect)((function(){return L((function(e){A.current?A.current=!1:P(e)}),!1)}),[e,c,l,v]);var q={onBlur:Object(i.useCallback)((function(e){if(N.blur(),d){var t=_.getFieldState(N.name);N.change(f(t.value,N.name))}}),[N.name,f,d]),onChange:Object(i.useCallback)((function(t){var n=t&&t.target?function(e,t,n,r){if(!r&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(r&&e.nativeEvent)return e.nativeEvent.text;var a=e.target,i=a.type,u=a.value,o=a.checked;switch(i){case"checkbox":if(void 0!==n){if(o)return Array.isArray(t)?t.concat(n):[n];if(!Array.isArray(t))return t;var c=t.indexOf(n);return c<0?t:t.slice(0,c).concat(t.slice(c+1))}return!!o;case"select-multiple":return function(e){var t=[];if(e)for(var n=0;n<e.length;n++){var r=e[n];r.selected&&t.push(r.value)}return t}(e.target.options);default:return u}}(t,N.value,C,E):t;N.change(h(n,e))}),[C,e,h,N.change,N.value,F]),onFocus:Object(i.useCallback)((function(e){N.focus()}),[])},B={};!function(e,t){b(e,t,["active","data","dirty","dirtySinceLastSubmit","error","initial","invalid","length","modified","modifiedSinceLastSubmit","pristine","submitError","submitFailed","submitSucceeded","submitting","touched","valid","validating","visited"])}(B,N);var U=Object(r.a)({name:e,get value(){var t=N.value;return d?"input"===o&&(t=j(t)):t=f(t,e),null!==t||u||(t=""),"checkbox"===F||"radio"===F?C:"select"===o&&p?t||[]:t},get checked(){return"checkbox"===F?void 0===C?!!N.value:!(!Array.isArray(N.value)||!~N.value.indexOf(C)):"radio"===F?N.value===C:void 0}},q);return p&&(U.multiple=p),void 0!==F&&(U.type=F),{input:U,meta:B}}var k=Object(i.forwardRef)((function(e,t){var n=e.afterSubmit,u=e.allowNull,o=e.beforeSubmit,l=e.children,s=e.component,f=e.data,d=e.defaultValue,m=e.format,b=e.formatOnBlur,v=e.initialValue,p=e.isEqual,g=e.multiple,h=e.name,O=e.parse,E=e.subscription,y=e.type,j=e.validate,S=e.validateFields,w=e.value,k=Object(a.a)(e,["afterSubmit","allowNull","beforeSubmit","children","component","data","defaultValue","format","formatOnBlur","initialValue","isEqual","multiple","name","parse","subscription","type","validate","validateFields","value"]),F=x(h,{afterSubmit:n,allowNull:u,beforeSubmit:o,children:l,component:s,data:f,defaultValue:d,format:m,formatOnBlur:b,initialValue:v,isEqual:p,multiple:g,parse:O,subscription:E,type:y,validate:j,validateFields:S,value:w});if("function"===typeof l)return l(Object(r.a)({},F,k));if("string"===typeof s)return Object(i.createElement)(s,Object(r.a)({},F.input,{children:l,ref:t},k));if(!h)throw new Error("prop name cannot be undefined in <Field> component");return c(Object(r.a)({children:l,component:s,ref:t},k),F,"Field("+h+")")}))},88:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var a=n(0),i=n.n(a),u=function(e){var t=e.input,n=e.meta,a=r(e,["input","meta"]),u=a.element;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,Object.assign({},t,{placeholder:a.placeholder,autoFocus:a.autoFocus,maxLength:a.maxLength})),(n.submitError||n.error)&&(t.value.length>5||n.touched)&&i.a.createElement("span",null,n.submitError||n.error))},o=function(e){return i.a.createElement(u,Object.assign({element:"input"},e))},c=function(e){return i.a.createElement(u,Object.assign({element:"textarea"},e))}},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t,n){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t||n(e)}),void 0)}}(function(e){return function(t){return t&&t.length<e?"Min length is ".concat(e," symbols"):void 0}}(e),function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}}(t),(r=n,function(e){return e?void 0:r}));var r}},91:function(e,t,n){e.exports={loginContainer:"Login_loginContainer__3equC",greeting:"Login_greeting__12QKJ",textInputWrap:"Login_textInputWrap__29_sN",error:"Login_error__PSmDI"}}}]);
//# sourceMappingURL=5.12d9d905.chunk.js.map