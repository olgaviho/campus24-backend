(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n(73)},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(19),c=n.n(u),o=n(3),i=n(1),s=n.n(i),l=n(2),d=n(4),f=function(e){return function(t){t({type:"NEW_NOTIFICATION",content:e}),setTimeout(function(){t({type:"CLEAR_NOTIFICATION"})},5e3)}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_NOTIFICATION":return t.content;case"CLEAR_NOTIFICATION":return null;default:return e}},p=n(13),v=n(6),h=n.n(v),E="/api/threads",b=null,g={getAll:function(){return h.a.get(E).then(function(e){return e.data})},create:function(){var e=Object(l.a)(s.a.mark(function e(t){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null===b){e.next=6;break}return n={headers:{Authorization:b}},e.next=4,h.a.post(E,t,n);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),update:function(e){if(null!==b){var t={headers:{Authorization:b}};return h.a.put("".concat(E,"/").concat(e.id),e,t).then(function(e){return e.data})}return null},removeThread:function(e){if(null!==b){var t={headers:{Authorization:b}};return h.a.delete("".concat(E,"/").concat(e),t).then(function(e){return e.data})}return null},setToken:function(e){b="bearer ".concat(e)},removeToken:function(){b=null},getToken:function(){return b}},w=function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.removeThread(e);case 2:n({type:"DELETE_THREAD",data:e});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_THREAD":return[].concat(Object(p.a)(e),[t.data]);case"INITIALIZE_THREADS":return t.data;case"EDIT_THREAD":var n=e.findIndex(function(e){return e.id===t.data.id}),r=Object(p.a)(e);return r[n]=t.data,r;case"DELETE_THREAD":return e.filter(function(e){return e.id!==t.data});default:return e}},k={setNotification:f,addThread:function(e){var t=g.getToken();return console.log("thread token",t),function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.create(e);case 2:r=t.sent,n({type:"NEW_THREAD",data:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},T=Object(o.b)(function(e){return{user:e.user}},k)(function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),u=n[0],c=n[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),f=i[0],m=i[1],p=function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r={title:u,message:f,date:(new Date).toISOString(),userId:e.findUserIdByUsername(e.user.username).id},c(""),m(""),t.prev=4,t.next=7,e.addThread(r);case 7:e.setNotification("New thread added"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(4),console.log(t.t0),e.setNotification("Failed to create new comment");case 14:case"end":return t.stop()}},t,null,[[4,10]])}));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("h3",null,"Add new thread"),a.a.createElement("form",{onSubmit:p},a.a.createElement("div",null,"title:",a.a.createElement("input",{value:u,onChange:function(e){c(e.target.value)}})),a.a.createElement("div",null,"message:",a.a.createElement("input",{value:f,onChange:function(e){m(e.target.value)}})),a.a.createElement("button",{type:"submit"},"add")))}),x=n(15),y={login:function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/login",t);case 2:return n=e.sent,console.log("response",n),e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},j=null,N={getAll:function(){return h.a.get("/api/comments").then(function(e){return e.data})},create:function(){var e=Object(l.a)(s.a.mark(function e(t){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null===j){e.next=6;break}return n={headers:{Authorization:j}},e.next=4,h.a.post("/api/comments",t,n);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){j="bearer ".concat(e)},removeToken:function(){j=null},update:function(){var e=Object(l.a)(s.a.mark(function e(t){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null===j){e.next=6;break}return n={headers:{Authorization:j}},e.next=4,h.a.put("".concat("/api/comments","/").concat(t.id),t,n);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),removeComment:function(){var e=Object(l.a)(s.a.mark(function e(t){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null===j){e.next=6;break}return n={headers:{Authorization:j}},e.next=4,h.a.delete("".concat("/api/comments","/").concat(t),n);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getToken:function(){return j}},I=null,C={getAll:function(){return h.a.get("/api/users").then(function(e){return e.data})},create:function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),removeUser:function(){var e=Object(l.a)(s.a.mark(function e(t){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("id",t),console.log("token",I),null===I){e.next=9;break}return console.log("token",I),n={headers:{Authorization:I}},console.log("config",n),r=h.a.delete("".concat("/api/users","/").concat(t),n),console.log("request",r),e.abrupt("return",r.then(function(e){return e.data}));case 9:return console.log("failed"),e.abrupt("return",null);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),removeToken:function(){I=null},setToken:function(e){I="bearer ".concat(e)},getToken:function(){return I}},A=function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.clear(),g.removeToken(),N.removeToken(),C.removeToken(),t({type:"LOGOUT"});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.data;case"LOGOUT":return null;default:return e}},U={setNotification:f,login:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){var r,a,u,c;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.login(e);case 2:r=t.sent,window.localStorage.setItem("Campus24User",JSON.stringify(r)),console.log("user",r),g.setToken(r.token),N.setToken(r.token),C.setToken(r.token),a=g.getToken(),u=C.getToken(),c=N.getToken(),console.log("thread token",a),console.log("userstoken",u),console.log("commenttoken",c),n({type:"LOGIN",data:r});case 15:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},D=Object(o.b)(function(e){return{user:e.user}},U)(function(e){if(null!==e.user)return a.a.createElement("div",null,a.a.createElement(x.a,{to:"/"}));var t=Object(r.useState)(""),n=Object(d.a)(t,2),u=n[0],c=n[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),f=i[0],m=i[1],p=function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r={username:u,password:f},t.prev=2,t.next=5,e.login(r);case 5:e.setNotification("Welcome!"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(2),console.log(t.t0),e.setNotification("Wrong username or password!");case 12:case"end":return t.stop()}},t,null,[[2,8]])}));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("h2",null,"Login"),a.a.createElement("form",{onSubmit:p},a.a.createElement("div",null,"username",a.a.createElement("input",{type:"text",value:u,name:"Username",onChange:function(e){c(e.target.value)}})),a.a.createElement("div",null,"password",a.a.createElement("input",{type:"password",value:f,name:"Password",onChange:function(e){m(e.target.value)}})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"login"))))}),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_USER":return[].concat(Object(p.a)(e),[t.data]);case"INITIALIZE_USERS":return t.data;case"DELETE_USER":return console.log("action.data",t.data),e.filter(function(e){return e.id!==t.data});default:return e}},L={addUser:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.create(e);case 2:r=t.sent,n({type:"NEW_USER",data:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setNotification:f},M=Object(o.b)(function(e){return{user:e.user}},L)(function(e){if(null!==e.user)return a.a.createElement("div",null,a.a.createElement(x.a,{to:"/"}));var t=Object(r.useState)(""),n=Object(d.a)(t,2),u=n[0],c=n[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),f=i[0],m=i[1],p=Object(r.useState)(""),v=Object(d.a)(p,2),h=v[0],E=v[1],b=function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r={name:f,username:u,password:h},m(""),E(""),c(""),t.prev=5,t.next=8,e.addUser(r);case 8:e.setNotification("New user added!"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),e.setNotification("Username must be unique");case 14:case"end":return t.stop()}},t,null,[[5,11]])}));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("h3",null,"Create new user"),a.a.createElement("form",{onSubmit:b},a.a.createElement("div",null,"username",a.a.createElement("input",{type:"text",value:u,name:"newUsername",onChange:function(e){c(e.target.value)}})),a.a.createElement("div",null,"name",a.a.createElement("input",{type:"text",value:f,name:"newName",onChange:function(e){m(e.target.value)}})),a.a.createElement("div",null,"password",a.a.createElement("input",{type:"password",value:h,name:"newPassword",onChange:function(e){E(e.target.value)}})),a.a.createElement("button",{type:"submit"},"Add a new user")))}),R=Object(o.b)(function(e){return{notification:e.notification}},null)(function(e){return null===e.notification||""===e.notification?null:a.a.createElement("div",{className:"notification"},e.notification)}),z=n(7),W=Object(o.b)(function(e){return{threads:e.threads,comments:e.comments,users:e.users,user:e.user}},null)(function(e){return a.a.createElement("div",null,a.a.createElement("h2",null,"Threads"),e.threads.map(function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(z.b,{key:e.id,to:"/threads/".concat(e.id)}," ",e.title," "))}))}),F={logout:A,setNotification:f},H=Object(o.b)(function(e){return{user:e.user}},F)(function(e){if(null===e.user)return a.a.createElement("div",null,a.a.createElement(x.a,{to:"/"}));return a.a.createElement("div",null,a.a.createElement("h3",null,"Logout"),a.a.createElement("button",{onClick:function(){return function(){try{e.logout(),e.setNotification("See you soon!")}catch(t){console.log(t),e.setNotification("Logout failed!")}}()}},"logout"))}),B=n(21),Z=function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.removeComment(e);case 2:n({type:"DELETE_COMMENT",data:e});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_COMMENT":return[].concat(Object(p.a)(e),[t.data]);case"INITIALIZE_COMMENTS":return t.data;case"EDIT_COMMENT":var n=e.findIndex(function(e){return e.id===t.data.id}),r=Object(p.a)(e);return r[n]=t.data,r;case"DELETE_COMMENT":return e.filter(function(e){return e.id!==t.data});default:return e}},J={deleteComment:Z,editComment:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.update(e);case 2:r=t.sent,n({type:"EDIT_COMMENT",data:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setNotification:f},q=Object(o.b)(function(e){return{notification:e.notification,threads:e.threads,comments:e.comments,users:e.users,user:e.user}},J)(function(e){var t,n=Object(r.useState)(""),u=Object(d.a)(n,2),c=u[0],o=u[1],i=!1,f=(t=e.id,e.allComments.find(function(e){return e.id===t}));if(void 0===f||null===f)return"";if(null===e.user)return null===f.user&&(f.user={username:"deleted account"}),a.a.createElement("div",null,a.a.createElement("p",null,"Message: ",f.message),a.a.createElement("p",null,"Author:  ",f.user.username," Date: ",f.date));var m=function(e){o(e.target.value)},p=function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.deleteComment(n);case 3:e.setNotification("Comment deleted"),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0),e.setNotification("Failed to delete comment");case 10:case"end":return t.stop()}},t,null,[[0,6]])}));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(l.a)(s.a.mark(function t(n){var r,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.comments.find(function(e){return e.id===n}),a=Object(B.a)({},r,{message:c}),t.prev=2,t.next=5,e.editComment(a);case 5:e.setNotification("Comment edited"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(2),console.log(t.t0),e.setNotification("Failed to edit comment");case 12:case"end":return t.stop()}},t,null,[[2,8]])}));return function(e){return t.apply(this,arguments)}}();if(null!==f.user&&void 0!==f.user.username&&null!==f.user.username)f.user.username===e.user.username&&(i=!0);else{var h=e.users.find(function(e){return e.id===f.user});null!==h&&void 0!==h&&h.username===e.user.username&&(i=!0)}return null===f.user&&(f.user={username:"deleted account"}),a.a.createElement("div",null,a.a.createElement("p",null,"Message: ",f.message),a.a.createElement("p",null,"Author:  ",f.user.username," Date: ",f.date),i&&a.a.createElement("div",null,a.a.createElement("form",null,a.a.createElement("div",null,"new message",a.a.createElement("input",{value:c,onChange:m})),a.a.createElement("button",{onClick:function(){return v(f.id,c)}}," edit ")),a.a.createElement("button",{onClick:function(){return p(f.id)}}," delete ")))}),P={setNotification:f,addComment:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.create(e);case 2:r=t.sent,n({type:"NEW_COMMENT",data:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},K=Object(o.b)(function(e){return{notification:e.notification,threads:e.threads,comments:e.comments,users:e.users,user:e.user}},P)(function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),u=n[0],c=n[1],o=function(){var t=Object(l.a)(s.a.mark(function t(){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={message:u,date:(new Date).toISOString(),userId:e.findUserIdByUsername(e.user.username).id,threadId:e.threadId},t.prev=1,t.next=4,e.addComment(n);case 4:e.setNotification("New comment added"),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0),e.setNotification("Failed to create new comment");case 11:case"end":return t.stop()}},t,null,[[1,7]])}));return function(){return t.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("h4",null,"Add new comment"),a.a.createElement("form",null,a.a.createElement("div",null,"message:",a.a.createElement("input",{value:u,onChange:function(e){c(e.target.value)}})),a.a.createElement("button",{onClick:function(){return o()}},"add")))}),Q={deleteThread:w,editThread:function(e){var t=g.getToken();return console.log("thread token",t),function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.update(e);case 2:r=t.sent,n({type:"EDIT_THREAD",data:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setNotification:f},V=Object(o.b)(function(e){return{notification:e.notification,threads:e.threads,comments:e.comments,users:e.users,user:e.user}},Q)(function(e){var t=Object(r.useState)(!1),n=Object(d.a)(t,2),u=n[0],c=n[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),f=i[0],m=i[1],p=function(e){m(e.target.value)};if(u)return a.a.createElement("div",null,a.a.createElement(x.a,{to:"/"}));if(void 0===e.thread)return null;var v=function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.deleteThread(n);case 3:e.setNotification("Thread deleted"),c(!0),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0),e.setNotification("Failed to delete thread");case 11:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(l.a)(s.a.mark(function t(n){var r,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.threads.find(function(e){return e.id===n}),a=Object(B.a)({},r,{message:f}),t.prev=2,t.next=5,e.editThread(a);case 5:e.setNotification("Thread edited"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(2),console.log(t.t0),e.setNotification("Failed to edit thread");case 12:case"end":return t.stop()}},t,null,[[2,8]])}));return function(e){return t.apply(this,arguments)}}();if(null===e.user)return a.a.createElement("div",null,a.a.createElement("h3",null,e.thread.title),a.a.createElement("h4",null,"Comments:"),e.thread.comments.map(function(t){return a.a.createElement(q,{key:t,id:t,allComments:e.comments})}));var E=!1;if(null!==e.thread.user&&void 0!==e.thread.user.username)e.thread.user.username===e.user.username&&(E=!0);else{var b=e.users.find(function(t){return t.id===e.thread.user});void 0!==b&&b.username===e.user.username&&(E=!0)}return null===e.thread.user&&(e.thread.user={username:"deleted account"}),a.a.createElement("div",null,a.a.createElement("h3",null,e.thread.title),a.a.createElement("h4",null,"Message: ",e.thread.message),"Author: ",e.thread.user.username,E&&a.a.createElement("div",null,a.a.createElement("form",null,a.a.createElement("div",null,"new message",a.a.createElement("input",{value:f,onChange:p})),a.a.createElement("button",{onClick:function(){return h(e.thread.id,f)}}," edit ")),a.a.createElement("button",{onClick:function(){return v(e.thread.id)}}," delete ")),a.a.createElement("h4",null,"Comments:"),e.thread.comments.map(function(t){return a.a.createElement(q,{key:t,id:t,allComments:e.comments})}),a.a.createElement(K,{findUserIdByUsername:e.findUserIdByUsername,threadId:e.thread.id}))}),X={logout:A,setNotification:f,deleteUser:function(e){var t=C.getToken();return console.log("users token",t),console.log("id",e),function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.removeUser(e);case 2:n({type:"DELETE_USER",data:e});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},deleteThread:w,deleteComment:Z},Y=Object(o.b)(function(e){return{notification:e.notification,user:e.user,threads:e.threads,users:e.users,comments:e.comments}},X)(function(e){if(null===e.user)return a.a.createElement("div",null,a.a.createElement(x.a,{to:"/"}));var t=function(){var t=Object(l.a)(s.a.mark(function t(){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.users.find(function(t){return t.username===e.user.username}),t.prev=1,t.next=4,e.deleteUser(n.id);case 4:e.setNotification("Account deleted!"),e.logout(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log("error:",t.t0),e.setNotification("Could not delete account!");case 12:case"end":return t.stop()}},t,null,[[1,8]])}));return function(){return t.apply(this,arguments)}}();return a.a.createElement("div",null,"Are you sure that you want to delete your account?",a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return t()}},"Confirm")))}),$=(n(72),{initializeThreads:function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getAll();case 2:n=e.sent,t({type:"INITIALIZE_THREADS",data:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},initializeComments:function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getAll();case 2:n=e.sent,t({type:"INITIALIZE_COMMENTS",data:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},initializeUsers:function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getAll();case 2:n=e.sent,t({type:"INITIALIZE_USERS",data:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},setUser:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:g.setToken(e.token),N.setToken(e.token),C.setToken(e.token),n({type:"LOGIN",data:e});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}}),ee=Object(o.b)(function(e){return{notification:e.notification,threads:e.threads,comments:e.comments,users:e.users,user:e.user}},$)(function(e){Object(r.useEffect)(function(){e.initializeThreads(),e.initializeComments(),e.initializeUsers();var t=window.localStorage.getItem("Campus24User");if(t){var n=JSON.parse(t);e.setUser(n)}},[]);var t=function(t){return e.users.find(function(e){return e.username===t})},n={padding:5};return a.a.createElement("div",null,a.a.createElement(z.a,null,a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(z.b,{style:n,to:"/"},"Threads"),null===e.user&&a.a.createElement(z.b,{style:n,to:"/login"},"Login"),null===e.user&&a.a.createElement(z.b,{style:n,to:"/create"},"Create new user"),null!==e.user&&a.a.createElement(z.b,{style:n,to:"/logout"},"Logout"),null!==e.user&&a.a.createElement(z.b,{style:n,to:"/addNewThread"},"Add a new thread"),null!==e.user&&a.a.createElement(z.b,{style:n,to:"/deleteAccount"},"Delete account"),null!==e.notification&&a.a.createElement(R,null)),a.a.createElement(x.b,{exact:!0,path:"/",render:function(){return a.a.createElement(W,null)}}),a.a.createElement(x.b,{exact:!0,path:"/login",render:function(){return a.a.createElement(D,null)}}),a.a.createElement(x.b,{exact:!0,path:"/create",render:function(){return a.a.createElement(M,null)}}),a.a.createElement(x.b,{exact:!0,path:"/logout",render:function(){return a.a.createElement(H,null)}}),a.a.createElement(x.b,{exact:!0,path:"/deleteAccount",render:function(){return a.a.createElement(Y,null)}}),a.a.createElement(x.b,{exact:!0,path:"/addNewThread",render:function(){return a.a.createElement(T,{findUserIdByUsername:t})}}),a.a.createElement(x.b,{exact:!0,path:"/threads/:id",render:function(n){var r,u=n.match;return a.a.createElement(V,{thread:(r=u.params.id,e.threads.find(function(e){return e.id===r})),findUserIdByUsername:t})}}))))}),te=n(14),ne=n(35),re=n(36),ae=Object(te.combineReducers)({notification:m,threads:O,comments:G,users:_,user:S}),ue=Object(te.createStore)(ae,Object(re.composeWithDevTools)(Object(te.applyMiddleware)(ne.a))),ce=function(){c.a.render(a.a.createElement(o.a,{store:ue},a.a.createElement(ee,null)),document.getElementById("root"))};ce(),ue.subscribe(ce)}},[[37,1,2]]]);
//# sourceMappingURL=main.9207f4e7.chunk.js.map