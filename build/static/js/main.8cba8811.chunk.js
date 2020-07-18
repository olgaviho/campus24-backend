(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(21),c=n.n(u),i=n(3),o=n(4),s=n(5),l=n(16),d=n(1),m=n.n(d),f=n(2),p=function(e){return function(t){t({type:"NEW_NOTIFICATION",content:e}),setTimeout(function(){t({type:"CLEAR_NOTIFICATION"})},5e3)}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_NOTIFICATION":return t.content;case"CLEAR_NOTIFICATION":return null;default:return e}},b=n(15),v=n(8),E=n.n(v),g="/api/threads",w=null,k={getAll:function(){return E.a.get(g).then(function(e){return e.data})},create:function(){var e=Object(f.a)(m.a.mark(function e(t){var n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null===w){e.next=6;break}return n={headers:{Authorization:w}},e.next=4,E.a.post(g,t,n);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),update:function(e){if(null!==w){var t={headers:{Authorization:w}};return E.a.put("".concat(g,"/").concat(e.id),e,t).then(function(e){return e.data})}return null},removeThread:function(e){if(null!==w){var t={headers:{Authorization:w}};return E.a.delete("".concat(g,"/").concat(e),t).then(function(e){return e.data})}return null},setToken:function(e){w="bearer ".concat(e)},removeToken:function(){w=null},getToken:function(){return w}},x=function(e){return function(){var t=Object(f.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.removeThread(e);case 2:n({type:"DELETE_THREAD",data:e});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_THREAD":return[t.data].concat(Object(b.a)(e));case"INITIALIZE_THREADS":return t.data.reverse();case"EDIT_THREAD":var n=e.findIndex(function(e){return e.id===t.data.id}),r=Object(b.a)(e);return r[n]=t.data,r;case"DELETE_THREAD":return e.filter(function(e){return e.id!==t.data});case"CHANGE_ORDER":var a=e.filter(function(e){return e.id!==t.data.id});return[t.data].concat(Object(b.a)(a));default:return e}},N=n(9),j=n(6);function y(){var e=Object(N.a)(["\n  font-size: 0.75em;\n  "]);return y=function(){return e},e}function I(){var e=Object(N.a)(["\n  background: white;\n  font-size: 1em;\n  border: 1px solid white;\n  "]);return I=function(){return e},e}function T(){var e=Object(N.a)(["\n  float: right;\n  background: silver;\n  font-size: 1em;\n  border: 2px solid black;\n  border-radius: 3px;\n  padding: 0.1em 1em;\n  "]);return T=function(){return e},e}function C(){var e=Object(N.a)(["\n  float: right;\n  "]);return C=function(){return e},e}function U(){var e=Object(N.a)(["\n\n  padding: 0.5em 1em;\n  border: 1px solid black;\n  background: white;\n  font-size: 1.2em;\n  "]);return U=function(){return e},e}function A(){var e=Object(N.a)(["\n  margin: 0.5em;\n  padding: 0.5em 1em;\n  border: 1px solid black;\n  background: skyblue;\n  font-size: 0.75em;\n  width: 50%\n  "]);return A=function(){return e},e}function S(){var e=Object(N.a)(["\n  margin: 0.3em;\n  padding: 0.5em 1em;\n  border: 1px solid black;\n  background: skyblue;\n  width: 50%\n"]);return S=function(){return e},e}function D(){var e=Object(N.a)(["\n  margin: 1em;\n  padding: 0.5em 1.3em;\n  border: 2px solid black;\n  border-radius: 2px;\n  background: white;\n  "]);return D=function(){return e},e}function M(){var e=Object(N.a)(["\n  background: skyblue;\n  padding: 1em;\n  border: 1px solid black;\n  border-radius: 1px;\n  "]);return M=function(){return e},e}function _(){var e=Object(N.a)(["\n  background: steelblue;\n  padding: 1em;\n  border: 1px solid black;\n  border-radius: 1px;\n  margin: 1em;\n  color: white;\n  "]);return _=function(){return e},e}function L(){var e=Object(N.a)(["\n  padding: 1em;\n  background: mintcream;\n  "]);return L=function(){return e},e}function z(){var e=Object(N.a)(["\n  margin: 0.25em;\n  "]);return z=function(){return e},e}function B(){var e=Object(N.a)(["\n  margin: 0.25em;\n  "]);return B=function(){return e},e}function R(){var e=Object(N.a)(["\n  background: silver;\n  font-size: 0.75em;\n  margin: 0.25em;\n  padding: 0.1em 0.3em;\n  border: 1px solid black;\n  border-radius: 1px;\n  "]);return R=function(){return e},e}function W(){var e=Object(N.a)(["\n  background: silver;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid black;\n  border-radius: 3px;\n  "]);return W=function(){return e},e}var F=j.default.button(W()),P=j.default.button(R()),H=j.default.input(B()),G=j.default.textarea(z()),Z=j.default.div(L()),J=j.default.div(_()),q=j.default.div(M()),K=j.default.div(D()),Q=j.default.div(S()),V=j.default.div(A()),X=j.default.div(U()),Y=j.default.div(C()),$=j.default.div(T()),ee=j.default.div(I()),te=j.default.div(y()),ne={setNotification:p,addThread:function(e){return function(){var t=Object(f.a)(m.a.mark(function t(n){var r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.create(e);case 2:r=t.sent,n({type:"NEW_THREAD",data:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},re=Object(i.b)(function(e){return{user:e.user}},ne)(function(e){if(null===e.user)return a.a.createElement("div",null,a.a.createElement(l.a,{to:"/"}));var t=Object(l.f)(),n=Object(r.useState)(""),u=Object(o.a)(n,2),c=u[0],i=u[1],s=Object(r.useState)(""),d=Object(o.a)(s,2),p=d[0],h=d[1],b=function(){var n=Object(f.a)(m.a.mark(function n(r){var a;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),!((a={title:c,message:p,date:(new Date).toISOString(),userId:e.findUserIdByUsername(e.user.username).id}).title.length<3)){n.next=6;break}e.setNotification("Title must be at least three letters long"),n.next=30;break;case 6:if(!(a.title.length>100)){n.next=10;break}e.setNotification("Title must be shorter than 100 letters"),n.next=30;break;case 10:if(!(a.message.length<3)){n.next=14;break}e.setNotification("Message must be at least three letters long"),n.next=30;break;case 14:if(!(a.message.length>2e3)){n.next=18;break}e.setNotification("Message must be shorter than 2000 letters"),n.next=30;break;case 18:return n.prev=18,n.next=21,e.addThread(a);case 21:e.setNotification("New thread added"),i(""),h(""),t.push("/"),n.next=30;break;case 27:n.prev=27,n.t0=n.catch(18),e.setNotification("Failed to create new comment");case 30:case"end":return n.stop()}},n,null,[[18,27]])}));return function(e){return n.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("h3",null,"Add new thread"),a.a.createElement("form",{onSubmit:b},a.a.createElement("div",null,"title:",a.a.createElement(H,{value:c,id:"NewTitle",onChange:function(e){i(e.target.value)}})),a.a.createElement("div",null,"message:",a.a.createElement("div",null,a.a.createElement(G,{cols:"50",rows:"3",value:p,id:"NewMessage",onChange:function(e){h(e.target.value)}}))),a.a.createElement(F,{type:"submit"},"add")))}),ae={login:function(){var e=Object(f.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},ue=null,ce={getAll:function(){return E.a.get("/api/comments").then(function(e){return e.data})},create:function(){var e=Object(f.a)(m.a.mark(function e(t){var n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null===ue){e.next=6;break}return n={headers:{Authorization:ue}},e.next=4,E.a.post("/api/comments",t,n);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){ue="bearer ".concat(e)},removeToken:function(){ue=null},update:function(){var e=Object(f.a)(m.a.mark(function e(t){var n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null===ue){e.next=6;break}return n={headers:{Authorization:ue}},e.next=4,E.a.put("".concat("/api/comments","/").concat(t.id),t,n);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),removeComment:function(){var e=Object(f.a)(m.a.mark(function e(t){var n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("token",ue),null===ue){e.next=7;break}return n={headers:{Authorization:ue}},e.next=5,E.a.delete("".concat("/api/comments","/").concat(t),n);case 5:return r=e.sent,e.abrupt("return",r.data);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getToken:function(){return ue}},ie=null,oe={update:function(e){if(null!==ie){var t={headers:{Authorization:ie}};return E.a.put("".concat("/api/users","/").concat(e.id),e,t).then(function(e){return e.data})}return null},getAll:function(){return E.a.get("/api/users").then(function(e){return e.data})},create:function(){var e=Object(f.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),removeUser:function(){var e=Object(f.a)(m.a.mark(function e(t){var n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null===ie){e.next=4;break}return n={headers:{Authorization:ie}},r=E.a.delete("".concat("/api/users","/").concat(t),n),e.abrupt("return",r.then(function(e){return e.data}));case 4:return e.abrupt("return",null);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),removeToken:function(){ie=null},setToken:function(e){ie="bearer ".concat(e)},getToken:function(){return ie}},se=function(){return function(){var e=Object(f.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.clear(),k.removeToken(),ce.removeToken(),oe.removeToken(),t({type:"LOGOUT"});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.data;case"LOGOUT":return null;default:return e}},de={setNotification:p,login:function(e){return function(){var t=Object(f.a)(m.a.mark(function t(n){var r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ae.login(e);case 2:r=t.sent,window.localStorage.setItem("Campus24User",JSON.stringify(r)),k.setToken(r.token),ce.setToken(r.token),oe.setToken(r.token),n({type:"LOGIN",data:r});case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},me=Object(i.b)(function(e){return{user:e.user}},de)(function(e){if(null!==e.user)return a.a.createElement("div",null,a.a.createElement(l.a,{to:"/"}));var t=Object(r.useState)(""),n=Object(o.a)(t,2),u=n[0],c=n[1],i=Object(r.useState)(""),s=Object(o.a)(i,2),d=s[0],p=s[1],h=function(){var t=Object(f.a)(m.a.mark(function t(n){var r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r={username:u,password:d},t.prev=2,t.next=5,e.login(r);case 5:e.setNotification("Welcome ".concat(r.username,"!")),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),e.setNotification("Wrong username or password!");case 11:case"end":return t.stop()}},t,null,[[2,8]])}));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("h2",null,"Login"),a.a.createElement("form",{onSubmit:h},a.a.createElement("div",null,"username",a.a.createElement(H,{type:"text",value:u,name:"Username",id:"Username",onChange:function(e){c(e.target.value)}})),a.a.createElement("div",null,"password",a.a.createElement(H,{type:"password",value:d,name:"Password",id:"Password",onChange:function(e){p(e.target.value)}})),a.a.createElement("div",null,a.a.createElement(F,{type:"submit"},"login"))))}),fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_USER":return[].concat(Object(b.a)(e),[t.data]);case"INITIALIZE_USERS":return t.data;case"DELETE_USER":return e.filter(function(e){return e.id!==t.data});default:return e}},pe={addUser:function(e){return function(){var t=Object(f.a)(m.a.mark(function t(n){var r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe.create(e);case 2:r=t.sent,n({type:"NEW_USER",data:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setNotification:p},he=Object(i.b)(function(e){return{user:e.user}},pe)(function(e){if(null!==e.user)return a.a.createElement("div",null,a.a.createElement(l.a,{to:"/"}));var t=Object(l.f)(),n=Object(r.useState)(""),u=Object(o.a)(n,2),c=u[0],i=u[1],s=Object(r.useState)(""),d=Object(o.a)(s,2),p=d[0],h=d[1],b=Object(r.useState)(""),v=Object(o.a)(b,2),E=v[0],g=v[1],w=function(){var n=Object(f.a)(m.a.mark(function n(r){var a;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),!((a={name:p,username:c,password:E}).username.length<3)){n.next=6;break}e.setNotification("Username must be at least three letters long"),n.next=39;break;case 6:if(!(a.name.length<3)){n.next=10;break}e.setNotification("Name must be at least three letters long"),n.next=39;break;case 10:if(!(a.password.length<5)){n.next=14;break}e.setNotification("Password must be at least five letters long"),n.next=39;break;case 14:if(!(a.username.length>15)){n.next=18;break}e.setNotification("Username must be shorter than 16 letters"),n.next=39;break;case 18:if(!(a.name.length>15)){n.next=22;break}e.setNotification("Name must be shorter than 16 letters"),n.next=39;break;case 22:if(!(a.password.length>30)){n.next=26;break}e.setNotification("Password must be shorter than 31 letters"),n.next=39;break;case 26:return n.prev=26,n.next=29,e.addUser(a);case 29:e.setNotification("New user added!"),h(""),g(""),i(""),t.push("/login"),n.next=39;break;case 36:n.prev=36,n.t0=n.catch(26),e.setNotification("Username must be unique");case 39:case"end":return n.stop()}},n,null,[[26,36]])}));return function(e){return n.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("h3",null,"Create new user"),a.a.createElement("form",{onSubmit:w},a.a.createElement("div",null,"username",a.a.createElement(H,{type:"text",value:c,name:"newUsername",id:"newUsername",onChange:function(e){i(e.target.value)}})),a.a.createElement("div",null,"name",a.a.createElement(H,{type:"text",value:p,name:"newName",id:"newName",onChange:function(e){h(e.target.value)}})),a.a.createElement("div",null,"password",a.a.createElement(H,{type:"password",value:E,name:"newPassword",id:"newPassword",onChange:function(e){g(e.target.value)}})),a.a.createElement(F,{type:"submit"},"Add a new user")))}),be=Object(i.b)(function(e){return{notification:e.notification}},null)(function(e){return null===e.notification||""===e.notification?null:a.a.createElement("div",null,a.a.createElement(K,null,e.notification))}),ve=n(22),Ee=n.n(ve),ge=Object(i.b)(function(e){return{threads:e.threads,comments:e.comments,users:e.users,user:e.user}},null)(function(e){for(var t=Object(r.useState)(1),n=Object(o.a)(t,2),u=n[0],c=n[1],i=u,l=[],d=e.threads.length,m=Math.ceil(d/5),f=function(e){l.push(a.a.createElement(Ee.a.Item,{onClick:function(){c(e)},key:e,active:e===i},e))},p=1;p<=m;p++)f(p);var h=a.a.createElement("div",null,a.a.createElement(Ee.a,{size:"sm"},l));return a.a.createElement("div",null,e.threads.slice(5*i-5,5*i).map(function(t){return a.a.createElement(Q,{key:t.id},a.a.createElement(X,null,a.a.createElement(s.b,{key:t.id,to:"/thread/".concat(t.id)}," ",t.title," ")),a.a.createElement(te,null,"\xa0\xa0 comments ",(n=t,e.comments.filter(function(e){return e.thread===n.id}).length),"\xa0\xa0 started by: ",a.a.createElement(s.b,{key:t.user,to:"/user/".concat(t.user)}," ",e.findUserNameById(t.user)," ")));var n}),h)}),we=Object(i.b)(function(e){return{threads:e.threads,comments:e.comments,users:e.users,user:e.user}},null)(function(e){var t=Object(r.useState)(""),n=Object(o.a)(t,2),u=n[0],c=n[1];return a.a.createElement("div",null,"Search for",a.a.createElement(H,{value:u,id:"searchWord",onChange:function(e){c(e.target.value)}}),function(){var t=e.threads.map(function(e){return e.id});return 0===t.length?[]:e.comments.filter(function(e){return t.includes(e.thread)})}().filter(function(e){return!!u.length&&e.message.toLowerCase().includes(u.toLowerCase())}).map(function(t){return a.a.createElement(V,{key:t.id}," Author: ",e.findUserNameById(t.user)," Date: ",t.date,a.a.createElement(X,null," ",t.message," "),"Thread: ",a.a.createElement(s.b,{key:t.thread,to:"/thread/".concat(t.thread)}," ",e.findThreadById(t.thread).title," "))}))}),ke=n(30),xe=function(e){return function(){var t=Object(f.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce.removeComment(e);case 2:n({type:"DELETE_COMMENT",data:e});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_COMMENT":return[].concat(Object(b.a)(e),[t.data]);case"INITIALIZE_COMMENTS":return t.data;case"EDIT_COMMENT":var n=e.findIndex(function(e){return e.id===t.data.id}),r=Object(b.a)(e);return r[n]=t.data,r;case"DELETE_COMMENT":return e.filter(function(e){return e.id!==t.data});default:return e}},Ne={deleteComment:xe,editComment:function(e){return function(){var t=Object(f.a)(m.a.mark(function t(n){var r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce.update(e);case 2:r=t.sent,n({type:"EDIT_COMMENT",data:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setNotification:p},je=Object(i.b)(function(e){return{notification:e.notification,threads:e.threads,comments:e.comments,users:e.users,user:e.user}},Ne)(function(e){var t=Object(r.useState)(""),n=Object(o.a)(t,2),u=n[0],c=n[1],i=!1;if(void 0===e.comment||null===e.comment)return"";if(null===e.user)return a.a.createElement("div",null,a.a.createElement(V,null," Author: ",a.a.createElement(s.b,{to:"/user/".concat(e.comment.user)}," ",e.findUserNameById(e.comment.user)," ")," Date: ",e.comment.date,a.a.createElement(X,null," ",e.comment.message," ")));var l=function(e){c(e.target.value)},d=function(){var t=Object(f.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.deleteComment(n);case 3:e.setNotification("Comment deleted"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.setNotification("Failed to delete comment");case 9:case"end":return t.stop()}},t,null,[[0,6]])}));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(f.a)(m.a.mark(function t(n){var r,a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.comments.find(function(e){return e.id===n}),!((a=Object(ke.a)({},r,{message:u})).message.length<3)){t.next=6;break}e.setNotification("Message must be at least three letters long"),t.next=21;break;case 6:if(!(a.message.length>2e3)){t.next=10;break}e.setNotification("Message must be shorter than 2000 letters"),t.next=21;break;case 10:return t.prev=10,t.next=13,e.editComment(a);case 13:e.setNotification("Comment edited"),c(""),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(10),console.log(t.t0),e.setNotification("Failed to edit comment");case 21:case"end":return t.stop()}},t,null,[[10,17]])}));return function(e){return t.apply(this,arguments)}}(),h=function(t){return e.users.find(function(e){return e.username===t})};return void 0!==h(e.user.username)&&e.comment.user===h(e.user.username).id&&(i=!0),a.a.createElement("div",null,a.a.createElement(V,null," Author:  ",a.a.createElement(s.b,{to:"/user/".concat(e.comment.user)}," ",e.findUserNameById(e.comment.user)," ")," Date: ",e.comment.date,a.a.createElement(X,null," ",e.comment.message),i&&a.a.createElement("div",null,a.a.createElement("div",null,"new message",a.a.createElement(H,{value:u,id:"editComment",onChange:l}),a.a.createElement(P,{onClick:function(){return p(e.comment.id,u)}}," edit comment ")),a.a.createElement(P,{id:"deleteComment",onClick:function(){return d(e.comment.id)}}," delete comment "))))}),ye={setNotification:p,addComment:function(e){return function(){var t=Object(f.a)(m.a.mark(function t(n){var r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce.create(e);case 2:r=t.sent,n({type:"NEW_COMMENT",data:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},changeOrder:function(e){return function(){var t=Object(f.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"CHANGE_ORDER",data:e});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},Ie=Object(i.b)(function(e){return{notification:e.notification,threads:e.threads,comments:e.comments,users:e.users,user:e.user}},ye)(function(e){var t=Object(r.useState)(""),n=Object(o.a)(t,2),u=n[0],c=n[1],i=function(){var t=Object(f.a)(m.a.mark(function t(){var n,r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!((n={message:u,date:(new Date).toISOString(),userId:e.findUserIdByUsername(e.user.username).id,threadId:e.threadId}).message.length<3)){t.next=5;break}e.setNotification("Message must be at least three letters long"),t.next=22;break;case 5:if(!(n.message.length>2e3)){t.next=9;break}e.setNotification("Message must be shoter than 2000 letters"),t.next=22;break;case 9:return t.prev=9,t.next=12,e.addComment(n);case 12:return r=e.threads.filter(function(t){return t.id===e.threadId}),t.next=15,e.changeOrder(r[0]);case 15:e.setNotification("New comment added"),c(""),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(9),e.setNotification("Failed to create new comment");case 22:case"end":return t.stop()}},t,null,[[9,19]])}));return function(){return t.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("h4",null,"Add new comment"),a.a.createElement("div",null,a.a.createElement(G,{rows:"3",cols:"50",value:u,id:"newComment",onChange:function(e){c(e.target.value)}})),a.a.createElement(F,{onClick:function(){return i()}},"add"))}),Te={deleteThread:x,editThread:function(e){return function(){var t=Object(f.a)(m.a.mark(function t(n){var r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.update(e);case 2:r=t.sent,n({type:"EDIT_THREAD",data:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setNotification:p},Ce=Object(i.b)(function(e){return{notification:e.notification,threads:e.threads,comments:e.comments,users:e.users,user:e.user}},Te)(function(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),u=n[0],c=n[1],i=Object(r.useState)(""),d=Object(o.a)(i,2),p=d[0],h=d[1],b=Object(r.useState)(1),v=Object(o.a)(b,2),E=v[0],g=v[1],w=function(e){h(e.target.value)};if(u)return a.a.createElement("div",null,a.a.createElement(l.a,{to:"/"}));if(void 0===e.thread)return null;for(var k=function(){var t=Object(f.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.deleteThread(n);case 3:e.setNotification("Thread deleted"),c(!0),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.setNotification("Failed to delete thread");case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(f.a)(m.a.mark(function t(n){var r,a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.threads.find(function(e){return e.id===n}),!((a=Object(ke.a)({},r,{message:p})).message.length<3)){t.next=6;break}e.setNotification("Message must be at least three letters long"),t.next=21;break;case 6:if(!(a.message.length>2e3)){t.next=10;break}e.setNotification("Message must be shorter than 2000 letters"),t.next=21;break;case 10:return t.prev=10,t.next=13,e.editThread(a);case 13:e.setNotification("Thread edited"),h(""),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(10),e.setNotification("Failed to edit thread"),h("");case 21:case"end":return t.stop()}},t,null,[[10,17]])}));return function(e){return t.apply(this,arguments)}}(),O=e.comments.filter(function(t){return t.thread===e.thread.id}),N=E,j=[],y=O.length,I=Math.ceil(y/5),T=function(e){j.push(a.a.createElement(Ee.a.Item,{onClick:function(){g(e)},key:e,active:e===N},e))},C=1;C<=I;C++)T(C);var U=a.a.createElement("div",null,a.a.createElement(Ee.a,{size:"sm"}," ",j," "));if(null===e.user)return a.a.createElement("div",{className:"thread"},a.a.createElement(V,null,a.a.createElement("h3",null,e.thread.title),"Author: ",a.a.createElement(s.b,{to:"/user/".concat(e.thread.user)}," ",e.findUserNameById(e.thread.user)," "),a.a.createElement(X,null,e.thread.message)),"Comments",O.slice(5*N-5,5*N).map(function(t){return a.a.createElement(je,{key:t.id,comment:t,findUserNameById:e.findUserNameById})}),U);var A=!1,S=function(t){return e.users.find(function(e){return e.username===t})};return void 0!==S(e.user.username)&&e.thread.user===S(e.user.username).id&&(A=!0),a.a.createElement("div",{className:"thread"},a.a.createElement(V,null,a.a.createElement("h3",null,e.thread.title),"Author: ",a.a.createElement(s.b,{to:"/user/".concat(e.thread.user)}," ",e.findUserNameById(e.thread.user)," "),a.a.createElement(X,null,e.thread.message),A&&a.a.createElement("div",null,a.a.createElement("div",null,"new message",a.a.createElement(H,{value:p,id:"editMessage",onChange:w}),a.a.createElement(P,{onClick:function(){return x(e.thread.id,p)}}," edit ")),a.a.createElement(P,{id:"deleteThread",onClick:function(){return k(e.thread.id)}}," delete "))),"Comments",O.slice(5*N-5,5*N).map(function(t){return a.a.createElement(je,{comment:t,key:t.id,findUserNameById:e.findUserNameById})}),U,a.a.createElement(Ie,{findUserIdByUsername:e.findUserIdByUsername,threadId:e.thread.id}))}),Ue=Object(i.b)(function(e){return{notification:e.notification,threads:e.threads,comments:e.comments,users:e.users,user:e.user}},null)(function(e){return void 0===e.us||null===e.us?null:"unknown user"===e.us?a.a.createElement("div",null,"This user has been deleted :( "):a.a.createElement("div",null,a.a.createElement("h3",null," User: ",e.us.username),a.a.createElement("p",null,"Number of threads started: ",e.threads.filter(function(t){return t.user===e.us.id}).length),a.a.createElement("p",null,"Number of comments written: ",e.comments.filter(function(t){return t.user===e.us.id}).length))}),Ae={logout:se,setNotification:p,deleteUser:function(e){return function(){var t=Object(f.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe.removeUser(e);case 2:n({type:"DELETE_USER",data:e});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},deleteThread:x,deleteComment:xe},Se=Object(i.b)(function(e){return{notification:e.notification,user:e.user,threads:e.threads,users:e.users,comments:e.comments}},Ae)(function(e){if(null===e.user)return a.a.createElement("div",null,a.a.createElement(l.a,{to:"/"}));var t=function(){var t=Object(f.a)(m.a.mark(function t(){var n;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.users.find(function(t){return t.username===e.user.username}),t.prev=1,t.next=4,e.deleteUser(n.id);case 4:e.setNotification("Account deleted!"),e.logout(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setNotification("Could not delete account!");case 11:case"end":return t.stop()}},t,null,[[1,8]])}));return function(){return t.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement(F,{id:"deleteAccount",name:"deleteAccount",onClick:function(){return t()}},"Delete "))}),De={setNotification:p},Me=Object(i.b)(function(e){return{notification:e.notification,user:e.user,threads:e.threads,users:e.users,comments:e.comments}},De)(function(e){if(null===e.user)return a.a.createElement("div",null,a.a.createElement(l.a,{to:"/"}));var t=Object(r.useState)(""),n=Object(o.a)(t,2),u=n[0],c=n[1],i=function(){var t=Object(f.a)(m.a.mark(function t(){var n,r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.users.find(function(t){return t.username===e.user.username}),!((r={password:u,username:n.username,name:n.name,id:n.id}).password.length<3)){t.next=6;break}e.setNotification("Password must be at least three letters long"),t.next=21;break;case 6:if(!(r.password.length>20)){t.next=10;break}e.setNotification("Password must be shorter than 20 letters"),t.next=21;break;case 10:return t.prev=10,t.next=13,oe.update(r);case 13:e.setNotification("Password edited"),c(""),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(10),console.log(t.t0),e.setNotification("Failed to edit password");case 21:case"end":return t.stop()}},t,null,[[10,17]])}));return function(){return t.apply(this,arguments)}}();return a.a.createElement("div",null,"new password",a.a.createElement(H,{value:u,id:"changePassword",name:"changePassword",onChange:function(e){c(e.target.value)}}),a.a.createElement(F,{onClick:function(){return i()}},"Edit"))}),_e={setNotification:p},Le=Object(i.b)(function(e){return{user:e.user}},_e)(function(e){return null===e.user?a.a.createElement("div",null,a.a.createElement(l.a,{to:"/"})):a.a.createElement("div",null,a.a.createElement("h3",null,"Settings"),a.a.createElement("h5",null,"Change password"),a.a.createElement(Me,null),a.a.createElement("h5",null,"Delete Account"),a.a.createElement(Se,null))}),ze=n(20),Be=(n(50),{initializeThreads:function(){return function(){var e=Object(f.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getAll();case 2:n=e.sent,t({type:"INITIALIZE_THREADS",data:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},initializeComments:function(){return function(){var e=Object(f.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce.getAll();case 2:n=e.sent,t({type:"INITIALIZE_COMMENTS",data:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},initializeUsers:function(){return function(){var e=Object(f.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.getAll();case 2:n=e.sent,t({type:"INITIALIZE_USERS",data:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},setUser:function(e){return function(){var t=Object(f.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:k.setToken(e.token),ce.setToken(e.token),oe.setToken(e.token),n({type:"LOGIN",data:e});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},logout:se,setNotification:p}),Re=Object(i.b)(function(e){return{notification:e.notification,threads:e.threads,comments:e.comments,users:e.users,user:e.user}},Be)(function(e){Object(r.useEffect)(function(){e.initializeThreads(),e.initializeComments(),e.initializeUsers();var t=window.localStorage.getItem("Campus24User");if(t){var n=JSON.parse(t);e.setUser(n)}},[]);var t=function(t){return e.users.find(function(e){return e.username===t})},n=function(t){var n=e.users.find(function(e){return e.id===t});return null===n||void 0===n?"unknown user":n.username},u=function(t){var n=e.users.find(function(e){return e.id===t});return null===n||void 0===n?"unknown user":n},c=function(t){return e.threads.find(function(e){return e.id===t})},i={padding:5},d=Object(r.useState)(!0),m=Object(o.a)(d,2),f=m[0],p=m[1];return a.a.createElement("div",null,a.a.createElement(Z,null,a.a.createElement(s.a,null,a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(J,null,a.a.createElement("h1",null,"Campus24"),a.a.createElement(q,null,a.a.createElement(s.b,{style:i,to:"/"},"Threads"),a.a.createElement(s.b,{style:i,to:"/search"},"Search"),null!==e.user&&a.a.createElement(s.b,{style:i,to:"/addNewThread"},"Add new thread"),a.a.createElement(Y,null,a.a.createElement(ze.Dropdown,null,a.a.createElement($,{dropdownToggle:!0,onClick:function(){return p(!f)},id:"dropdown",name:"dropdown"},"Menu"),a.a.createElement(ze.DropdownMenu,{hidden:f,toggle:function(){return p(!f)}},null!==e.user&&a.a.createElement(ee,{onClick:function(){return function(){try{e.logout(),e.setNotification("See you soon!")}catch(t){e.setNotification("Logout failed!")}}()}}," ",a.a.createElement(ze.DropdownItem,{id:"logoutItem",name:"logoutItem"},"Logout")," "),null!==e.user&&a.a.createElement(s.b,{to:"/settings"},a.a.createElement(ze.DropdownItem,{id:"settingsItem",name:"settingItem"},"Settings")),null===e.user&&a.a.createElement(s.b,{to:"/login"},a.a.createElement(ze.DropdownItem,{id:"loginItem",name:"loginItem"},"Login")),null===e.user&&a.a.createElement(s.b,{to:"/create"},a.a.createElement(ze.DropdownItem,{id:"createUserItem",name:"createUserItem"},"Create User"))))))),null!==e.notification&&a.a.createElement(be,null)),a.a.createElement(l.b,{exact:!0,path:"/",render:function(){return a.a.createElement(ge,{findUserNameById:n})}}),a.a.createElement(l.b,{exact:!0,path:"/login",render:function(){return a.a.createElement(me,null)}}),a.a.createElement(l.b,{exact:!0,path:"/search",render:function(){return a.a.createElement(we,{findUserNameById:n,findThreadById:c})}}),a.a.createElement(l.b,{exact:!0,path:"/create",render:function(){return a.a.createElement(he,null)}}),a.a.createElement(l.b,{exact:!0,path:"/settings",render:function(){return a.a.createElement(Le,null)}}),a.a.createElement(l.b,{exact:!0,path:"/addNewThread",render:function(){return a.a.createElement(re,{findUserIdByUsername:t})}}),a.a.createElement(l.b,{exact:!0,path:"/thread/:id",render:function(e){var r=e.match;return a.a.createElement(Ce,{thread:c(r.params.id),findUserIdByUsername:t,findUserNameById:n})}}),a.a.createElement(l.b,{exact:!0,path:"/user/:id",render:function(e){var t=e.match;return a.a.createElement(Ue,{us:u(t.params.id)})}})))))}),We=n(18),Fe=n(55),Pe=n(56),He=Object(We.combineReducers)({notification:h,threads:O,comments:Oe,users:fe,user:le}),Ge=Object(We.createStore)(He,Object(Pe.composeWithDevTools)(Object(We.applyMiddleware)(Fe.a))),Ze=function(){c.a.render(a.a.createElement(i.a,{store:Ge},a.a.createElement(Re,null)),document.getElementById("root"))};Ze(),Ge.subscribe(Ze)},50:function(e,t,n){},58:function(e,t,n){e.exports=n(149)}},[[58,1,2]]]);
//# sourceMappingURL=main.8cba8811.chunk.js.map