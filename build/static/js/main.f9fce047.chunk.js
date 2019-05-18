(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,n){},53:function(e,t,n){e.exports=n(93)},93:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(19),c=n.n(u),i=n(3),o=n(1),s=n.n(o),l=n(2),d=n(4),m=function(e){return function(t){t({type:"NEW_NOTIFICATION",content:e}),setTimeout(function(){t({type:"CLEAR_NOTIFICATION"})},5e3)}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_NOTIFICATION":return t.content;case"CLEAR_NOTIFICATION":return null;default:return e}},p=n(15),h=n(6),v=n.n(h),b="/api/threads",E=null,g={getAll:function(){return v.a.get(b).then(function(e){return e.data})},create:function(){var e=Object(l.a)(s.a.mark(function e(t){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null===E){e.next=6;break}return n={headers:{Authorization:E}},e.next=4,v.a.post(b,t,n);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),update:function(e){if(null!==E){var t={headers:{Authorization:E}};return v.a.put("".concat(b,"/").concat(e.id),e,t).then(function(e){return e.data})}return null},removeThread:function(e){if(null!==E){var t={headers:{Authorization:E}};return v.a.delete("".concat(b,"/").concat(e),t).then(function(e){return e.data})}return null},setToken:function(e){E="bearer ".concat(e)},removeToken:function(){E=null},getToken:function(){return E}},k=function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.removeThread(e);case 2:n({type:"DELETE_THREAD",data:e});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_THREAD":return[t.data].concat(Object(p.a)(e));case"INITIALIZE_THREADS":return t.data.reverse();case"EDIT_THREAD":var n=e.findIndex(function(e){return e.id===t.data.id}),r=Object(p.a)(e);return r[n]=t.data,r;case"DELETE_THREAD":return e.filter(function(e){return e.id!==t.data});default:return e}},w=n(9),O=n(10);function N(){var e=Object(w.a)(["\n\n  padding: 0.5em 1em;\n  border: 1px solid black;\n  background: white;\n  font-size: 1.2em;\n"]);return N=function(){return e},e}function y(){var e=Object(w.a)(["\n  margin: 0.5em;\n  padding: 0.5em 1em;\n  border: 1px solid black;\n  background: skyblue;\n  font-size: 0.75em;\n"]);return y=function(){return e},e}function j(){var e=Object(w.a)(["\n  margin: 0.3em;\n  padding: 0.5em 1em;\n  border: 1px solid black;\n  background: skyblue;\n"]);return j=function(){return e},e}function T(){var e=Object(w.a)(["\n  margin: 1em;\n  padding: 0.5em 1.3em;\n  border: 2px solid black;\n  border-radius: 2px;\n  background: white;\n"]);return T=function(){return e},e}function I(){var e=Object(w.a)(["\n  background: skyblue;\n  padding: 1em;\n  border: 1px solid black;\n  border-radius: 1px;\n"]);return I=function(){return e},e}function C(){var e=Object(w.a)(["\n  background: steelblue;\n  padding: 1em;\n  border: 1px solid black;\n  border-radius: 1px;\n  margin: 1em;\n  color: white;\n"]);return C=function(){return e},e}function U(){var e=Object(w.a)(["\n  padding: 1em;\n  background: mintcream;\n"]);return U=function(){return e},e}function A(){var e=Object(w.a)(["\nmargin: 0.25em;\n"]);return A=function(){return e},e}function S(){var e=Object(w.a)(["\n  margin: 0.25em;\n  "]);return S=function(){return e},e}function M(){var e=Object(w.a)(["\n  background: silver;\n  font-size: 0.75em;\n  margin: 0.25em;\n  padding: 0.1em 0.3em;\n  border: 1px solid black;\n  border-radius: 1px;\n  "]);return M=function(){return e},e}function D(){var e=Object(w.a)(["\n  background: silver;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid black;\n  border-radius: 3px;\n  "]);return D=function(){return e},e}var _=O.a.button(D()),L=O.a.button(M()),z=O.a.input(S()),B=O.a.textarea(A()),R=O.a.div(U()),W=O.a.div(C()),F=O.a.div(I()),H=O.a.div(T()),P=O.a.div(j()),Z=O.a.div(y()),G=O.a.div(N()),J={setNotification:m,addThread:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.create(e);case 2:r=t.sent,n({type:"NEW_THREAD",data:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},q=Object(i.b)(function(e){return{user:e.user}},J)(function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),u=n[0],c=n[1],i=Object(r.useState)(""),o=Object(d.a)(i,2),m=o[0],f=o[1],p=function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!((r={title:u,message:m,date:(new Date).toISOString(),userId:e.findUserIdByUsername(e.user.username).id}).title.length<3)){t.next=6;break}e.setNotification("Title must be at least three letters long"),t.next=29;break;case 6:if(!(r.title.length>100)){t.next=10;break}e.setNotification("Title must be shorter than 100 letters"),t.next=29;break;case 10:if(!(r.message.length<3)){t.next=14;break}e.setNotification("Message must be at least three letters long"),t.next=29;break;case 14:if(!(r.message.length>2e3)){t.next=18;break}e.setNotification("Message must be shorter than 2000 letters"),t.next=29;break;case 18:return t.prev=18,t.next=21,e.addThread(r);case 21:e.setNotification("New thread added"),c(""),f(""),t.next=29;break;case 26:t.prev=26,t.t0=t.catch(18),e.setNotification("Failed to create new comment");case 29:case"end":return t.stop()}},t,null,[[18,26]])}));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("h3",null,"Add new thread"),a.a.createElement("form",{onSubmit:p},a.a.createElement("div",null,"title:",a.a.createElement(z,{value:u,id:"NewTitle",onChange:function(e){c(e.target.value)}})),a.a.createElement("div",null,"message:",a.a.createElement("div",null,a.a.createElement(B,{cols:"50",rows:"3",value:m,id:"NewMessage",onChange:function(e){f(e.target.value)}}))),a.a.createElement(_,{type:"submit"},"add")))}),K=n(18),Q={login:function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},V=null,X={getAll:function(){return v.a.get("/api/comments").then(function(e){return e.data})},create:function(){var e=Object(l.a)(s.a.mark(function e(t){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null===V){e.next=6;break}return n={headers:{Authorization:V}},e.next=4,v.a.post("/api/comments",t,n);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){V="bearer ".concat(e)},removeToken:function(){V=null},update:function(){var e=Object(l.a)(s.a.mark(function e(t){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null===V){e.next=6;break}return n={headers:{Authorization:V}},e.next=4,v.a.put("".concat("/api/comments","/").concat(t.id),t,n);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),removeComment:function(){var e=Object(l.a)(s.a.mark(function e(t){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null===V){e.next=6;break}return n={headers:{Authorization:V}},e.next=4,v.a.delete("".concat("/api/comments","/").concat(t),n);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getToken:function(){return V}},Y=null,$={getAll:function(){return v.a.get("/api/users").then(function(e){return e.data})},create:function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),removeUser:function(){var e=Object(l.a)(s.a.mark(function e(t){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null===Y){e.next=4;break}return n={headers:{Authorization:Y}},r=v.a.delete("".concat("/api/users","/").concat(t),n),e.abrupt("return",r.then(function(e){return e.data}));case 4:return e.abrupt("return",null);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),removeToken:function(){Y=null},setToken:function(e){Y="bearer ".concat(e)},getToken:function(){return Y}},ee=function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.clear(),g.removeToken(),X.removeToken(),$.removeToken(),t({type:"LOGOUT"});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.data;case"LOGOUT":return null;default:return e}},ne={setNotification:m,login:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.login(e);case 2:r=t.sent,window.localStorage.setItem("Campus24User",JSON.stringify(r)),g.setToken(r.token),X.setToken(r.token),$.setToken(r.token),n({type:"LOGIN",data:r});case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},re=Object(i.b)(function(e){return{user:e.user}},ne)(function(e){if(null!==e.user)return a.a.createElement("div",null,a.a.createElement(K.a,{to:"/"}));var t=Object(r.useState)(""),n=Object(d.a)(t,2),u=n[0],c=n[1],i=Object(r.useState)(""),o=Object(d.a)(i,2),m=o[0],f=o[1],p=function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r={username:u,password:m},t.prev=2,t.next=5,e.login(r);case 5:e.setNotification("Welcome ".concat(r.username,"!")),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),e.setNotification("Wrong username or password!");case 11:case"end":return t.stop()}},t,null,[[2,8]])}));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("h2",null,"Login"),a.a.createElement("form",{onSubmit:p},a.a.createElement("div",null,"username",a.a.createElement(z,{type:"text",value:u,name:"Username",id:"Username",onChange:function(e){c(e.target.value)}})),a.a.createElement("div",null,"password",a.a.createElement(z,{type:"password",value:m,name:"Password",id:"Password",onChange:function(e){f(e.target.value)}})),a.a.createElement("div",null,a.a.createElement(_,{type:"submit"},"login"))))}),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_USER":return[].concat(Object(p.a)(e),[t.data]);case"INITIALIZE_USERS":return t.data;case"DELETE_USER":return e.filter(function(e){return e.id!==t.data});default:return e}},ue={addUser:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.create(e);case 2:r=t.sent,n({type:"NEW_USER",data:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setNotification:m},ce=Object(i.b)(function(e){return{user:e.user}},ue)(function(e){if(null!==e.user)return a.a.createElement("div",null,a.a.createElement(K.a,{to:"/"}));var t=Object(r.useState)(""),n=Object(d.a)(t,2),u=n[0],c=n[1],i=Object(r.useState)(""),o=Object(d.a)(i,2),m=o[0],f=o[1],p=Object(r.useState)(""),h=Object(d.a)(p,2),v=h[0],b=h[1],E=function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!((r={name:m,username:u,password:v}).username.length<3)){t.next=6;break}e.setNotification("Username must be at least three letters long"),t.next=38;break;case 6:if(!(r.name.length<3)){t.next=10;break}e.setNotification("Name must be at least three letters long"),t.next=38;break;case 10:if(!(r.password.length<5)){t.next=14;break}e.setNotification("Password must be at least five letters long"),t.next=38;break;case 14:if(!(r.username.length>15)){t.next=18;break}e.setNotification("Username must be at shorter than 16 letters"),t.next=38;break;case 18:if(!(r.name.length>15)){t.next=22;break}e.setNotification("Name must be at shorter than 16 letters"),t.next=38;break;case 22:if(!(r.password.length>30)){t.next=26;break}e.setNotification("Password must be at shorter than 31 letters"),t.next=38;break;case 26:return t.prev=26,t.next=29,e.addUser(r);case 29:e.setNotification("New user added!"),f(""),b(""),c(""),t.next=38;break;case 35:t.prev=35,t.t0=t.catch(26),e.setNotification("Username must be unique");case 38:case"end":return t.stop()}},t,null,[[26,35]])}));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("h3",null,"Create new user"),a.a.createElement("form",{onSubmit:E},a.a.createElement("div",null,"username",a.a.createElement(z,{type:"text",value:u,name:"newUsername",id:"newUsername",onChange:function(e){c(e.target.value)}})),a.a.createElement("div",null,"name",a.a.createElement(z,{type:"text",value:m,name:"newName",id:"newName",onChange:function(e){f(e.target.value)}})),a.a.createElement("div",null,"password",a.a.createElement(z,{type:"password",value:v,name:"newPassword",id:"newPassword",onChange:function(e){b(e.target.value)}})),a.a.createElement(_,{type:"submit"},"Add a new user")))}),ie=Object(i.b)(function(e){return{notification:e.notification}},null)(function(e){return null===e.notification||""===e.notification?null:a.a.createElement("div",null,a.a.createElement(H,null,e.notification))}),oe=n(7),se=n(21),le=n.n(se),de=Object(i.b)(function(e){return{threads:e.threads,comments:e.comments,users:e.users,user:e.user}},null)(function(e){for(var t=Object(r.useState)(1),n=Object(d.a)(t,2),u=n[0],c=n[1],i=u,o=[],s=e.threads.length,l=Math.ceil(s/5),m=function(e){o.push(a.a.createElement(le.a.Item,{onClick:function(){c(e)},key:e,active:e===i},e))},f=1;f<=l;f++)m(f);var p=a.a.createElement("div",null,a.a.createElement(le.a,{size:"sm"},o));return a.a.createElement("div",null,e.threads.slice(5*i-5,5*i).map(function(t){return a.a.createElement(P,{key:t.id},a.a.createElement(oe.b,{key:t.id,to:"/thread/".concat(t.id)}," ",t.title," "),"\xa0\xa0 comments ",(n=t,e.comments.filter(function(e){return e.thread===n.id}).length),"\xa0\xa0 started by: ",e.findUserNameById(t.user));var n}),p)}),me={logout:ee,setNotification:m},fe=Object(i.b)(function(e){return{user:e.user}},me)(function(e){if(null===e.user)return a.a.createElement("div",null,a.a.createElement(K.a,{to:"/"}));return a.a.createElement("div",null,a.a.createElement("h3",null,"Logout"),a.a.createElement(_,{onClick:function(){return function(){try{e.logout(),e.setNotification("See you soon!")}catch(t){console.log(t),e.setNotification("Logout failed!")}}()}},"logout"))}),pe=n(27),he=function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.removeComment(e);case 2:n({type:"DELETE_COMMENT",data:e});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_COMMENT":return[].concat(Object(p.a)(e),[t.data]);case"INITIALIZE_COMMENTS":return t.data;case"EDIT_COMMENT":var n=e.findIndex(function(e){return e.id===t.data.id}),r=Object(p.a)(e);return r[n]=t.data,r;case"DELETE_COMMENT":return e.filter(function(e){return e.id!==t.data});default:return e}},be={deleteComment:he,editComment:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.update(e);case 2:r=t.sent,n({type:"EDIT_COMMENT",data:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setNotification:m},Ee=Object(i.b)(function(e){return{notification:e.notification,threads:e.threads,comments:e.comments,users:e.users,user:e.user}},be)(function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),u=n[0],c=n[1],i=!1;if(void 0===e.comment||null===e.comment)return"";if(null===e.user)return a.a.createElement("div",null,a.a.createElement(Z,null," Author: ",e.findUserNameById(e.comment.user)," Date: ",e.comment.date,a.a.createElement(G,null," ",e.comment.message," ")));var o=function(e){c(e.target.value)},m=function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.deleteComment(n);case 3:e.setNotification("Comment deleted"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.setNotification("Failed to delete comment");case 9:case"end":return t.stop()}},t,null,[[0,6]])}));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(l.a)(s.a.mark(function t(n){var r,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.comments.find(function(e){return e.id===n}),!((a=Object(pe.a)({},r,{message:u})).message.length<3)){t.next=6;break}e.setNotification("Message must be at least three letters long"),t.next=21;break;case 6:if(!(a.message.length>2e3)){t.next=10;break}e.setNotification("Message must be shorter than 2000 letters"),t.next=21;break;case 10:return t.prev=10,t.next=13,e.editComment(a);case 13:e.setNotification("Comment edited"),c(""),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(10),console.log(t.t0),e.setNotification("Failed to edit comment");case 21:case"end":return t.stop()}},t,null,[[10,17]])}));return function(e){return t.apply(this,arguments)}}(),p=function(t){return e.users.find(function(e){return e.username===t})};return void 0!==p(e.user.username)&&e.comment.user===p(e.user.username).id&&(i=!0),a.a.createElement("div",null,a.a.createElement(Z,null," Author:  ",e.findUserNameById(e.comment.user)," Date: ",e.comment.date,a.a.createElement(G,null," ",e.comment.message),i&&a.a.createElement("div",null,a.a.createElement("div",null,"new message",a.a.createElement(z,{value:u,id:"editComment",onChange:o}),a.a.createElement(L,{onClick:function(){return f(e.comment.id,u)}}," edit comment ")),a.a.createElement(L,{id:"deleteComment",onClick:function(){return m(e.comment.id)}}," delete comment "))))}),ge={setNotification:m,addComment:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.create(e);case 2:r=t.sent,n({type:"NEW_COMMENT",data:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},ke=Object(i.b)(function(e){return{notification:e.notification,threads:e.threads,comments:e.comments,users:e.users,user:e.user}},ge)(function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),u=n[0],c=n[1],i=function(){var t=Object(l.a)(s.a.mark(function t(){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!((n={message:u,date:(new Date).toISOString(),userId:e.findUserIdByUsername(e.user.username).id,threadId:e.threadId}).message.length<3)){t.next=5;break}e.setNotification("Message must be at least three letters long"),t.next=19;break;case 5:if(!(n.message.length>2e3)){t.next=9;break}e.setNotification("Message must be shoter than 2000 letters"),t.next=19;break;case 9:return t.prev=9,t.next=12,e.addComment(n);case 12:e.setNotification("New comment added"),c(""),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(9),e.setNotification("Failed to create new comment");case 19:case"end":return t.stop()}},t,null,[[9,16]])}));return function(){return t.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("h4",null,"Add new comment"),a.a.createElement("div",null,a.a.createElement(B,{rows:"3",cols:"50",value:u,id:"newComment",onChange:function(e){c(e.target.value)}})),a.a.createElement(_,{onClick:function(){return i()}},"add"))}),xe={deleteThread:k,editThread:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.update(e);case 2:r=t.sent,n({type:"EDIT_THREAD",data:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setNotification:m},we=Object(i.b)(function(e){return{notification:e.notification,threads:e.threads,comments:e.comments,users:e.users,user:e.user}},xe)(function(e){var t=Object(r.useState)(!1),n=Object(d.a)(t,2),u=n[0],c=n[1],i=Object(r.useState)(""),o=Object(d.a)(i,2),m=o[0],f=o[1],p=Object(r.useState)(1),h=Object(d.a)(p,2),v=h[0],b=h[1],E=function(e){f(e.target.value)};if(u)return a.a.createElement("div",null,a.a.createElement(K.a,{to:"/"}));if(void 0===e.thread)return null;for(var g=function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.deleteThread(n);case 3:e.setNotification("Thread deleted"),c(!0),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.setNotification("Failed to delete thread");case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(l.a)(s.a.mark(function t(n){var r,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.threads.find(function(e){return e.id===n}),!((a=Object(pe.a)({},r,{message:m})).message.length<3)){t.next=6;break}e.setNotification("Message must be at least three letters long"),t.next=21;break;case 6:if(!(a.message.length>2e3)){t.next=10;break}e.setNotification("Message must be shorter than 2000 letters"),t.next=21;break;case 10:return t.prev=10,t.next=13,e.editThread(a);case 13:e.setNotification("Thread edited"),f(""),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(10),e.setNotification("Failed to edit thread"),f("");case 21:case"end":return t.stop()}},t,null,[[10,17]])}));return function(e){return t.apply(this,arguments)}}(),x=e.comments.filter(function(t){return t.thread===e.thread.id}),w=v,O=[],N=x.length,y=Math.ceil(N/5),j=function(e){O.push(a.a.createElement(le.a.Item,{onClick:function(){b(e)},key:e,active:e===w},e))},T=1;T<=y;T++)j(T);var I=a.a.createElement("div",null,a.a.createElement(le.a,{size:"sm"}," ",O," "));if(null===e.user)return a.a.createElement("div",{className:"thread"},a.a.createElement(Z,null,a.a.createElement("h3",null,e.thread.title),"Author: ",e.findUserNameById(e.thread.user),a.a.createElement(G,null,e.thread.message)),"Comments",x.slice(5*w-5,5*w).map(function(t){return a.a.createElement(Ee,{key:t.id,comment:t,findUserNameById:e.findUserNameById})}),I);var C=!1,U=function(t){return e.users.find(function(e){return e.username===t})};return void 0!==U(e.user.username)&&e.thread.user===U(e.user.username).id&&(C=!0),a.a.createElement("div",{className:"thread"},a.a.createElement(Z,null,a.a.createElement("h3",null,e.thread.title),"Author: ",e.findUserNameById(e.thread.user),a.a.createElement(G,null,e.thread.message),C&&a.a.createElement("div",null,a.a.createElement("div",null,"new message",a.a.createElement(z,{value:m,id:"editMessage",onChange:E}),a.a.createElement(L,{onClick:function(){return k(e.thread.id,m)}}," edit ")),a.a.createElement(L,{id:"deleteThread",onClick:function(){return g(e.thread.id)}}," delete "))),"Comments",x.slice(5*w-5,5*w).map(function(t){return a.a.createElement(Ee,{comment:t,key:t.id,findUserNameById:e.findUserNameById})}),I,a.a.createElement(ke,{findUserIdByUsername:e.findUserIdByUsername,threadId:e.thread.id}))}),Oe={logout:ee,setNotification:m,deleteUser:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.removeUser(e);case 2:n({type:"DELETE_USER",data:e});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},deleteThread:k,deleteComment:he},Ne=Object(i.b)(function(e){return{notification:e.notification,user:e.user,threads:e.threads,users:e.users,comments:e.comments}},Oe)(function(e){if(null===e.user)return a.a.createElement("div",null,a.a.createElement(K.a,{to:"/"}));var t=function(){var t=Object(l.a)(s.a.mark(function t(){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.users.find(function(t){return t.username===e.user.username}),t.prev=1,t.next=4,e.deleteUser(n.id);case 4:e.setNotification("Account deleted!"),e.logout(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log("error:",t.t0),e.setNotification("Could not delete account!");case 12:case"end":return t.stop()}},t,null,[[1,8]])}));return function(){return t.apply(this,arguments)}}();return a.a.createElement("div",null,"Are you sure that you want to delete your account?",a.a.createElement("div",null,a.a.createElement(_,{onClick:function(){return t()}},"Confirm")))}),ye=(n(45),{initializeThreads:function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getAll();case 2:n=e.sent,t({type:"INITIALIZE_THREADS",data:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},initializeComments:function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.getAll();case 2:n=e.sent,t({type:"INITIALIZE_COMMENTS",data:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},initializeUsers:function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.getAll();case 2:n=e.sent,t({type:"INITIALIZE_USERS",data:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},setUser:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:g.setToken(e.token),X.setToken(e.token),$.setToken(e.token),n({type:"LOGIN",data:e});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}}),je=Object(i.b)(function(e){return{notification:e.notification,threads:e.threads,comments:e.comments,users:e.users,user:e.user}},ye)(function(e){Object(r.useEffect)(function(){e.initializeThreads(),e.initializeComments(),e.initializeUsers();var t=window.localStorage.getItem("Campus24User");if(t){var n=JSON.parse(t);e.setUser(n)}},[]);var t=function(t){return e.users.find(function(e){return e.username===t})},n=function(t){var n=e.users.find(function(e){return e.id===t});return null===n||void 0===n?"unknown user":n.username},u={padding:5};return a.a.createElement("div",null,a.a.createElement(R,null,a.a.createElement(oe.a,null,a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(W,null,a.a.createElement("h1",null,"Campus24"),a.a.createElement(F,null,a.a.createElement(oe.b,{style:u,to:"/"},"Threads"),null===e.user&&a.a.createElement(oe.b,{style:u,to:"/login"},"Login"),null===e.user&&a.a.createElement(oe.b,{style:u,to:"/create"},"Create new user"),null!==e.user&&a.a.createElement(oe.b,{style:u,to:"/logout"},"Logout"),null!==e.user&&a.a.createElement(oe.b,{style:u,to:"/addNewThread"},"Add a new thread"),null!==e.user&&a.a.createElement(oe.b,{style:u,to:"/deleteAccount"},"Delete account"))),null!==e.notification&&a.a.createElement(ie,null)),a.a.createElement(K.b,{exact:!0,path:"/",render:function(){return a.a.createElement(de,{findUserNameById:n})}}),a.a.createElement(K.b,{exact:!0,path:"/login",render:function(){return a.a.createElement(re,null)}}),a.a.createElement(K.b,{exact:!0,path:"/create",render:function(){return a.a.createElement(ce,null)}}),a.a.createElement(K.b,{exact:!0,path:"/logout",render:function(){return a.a.createElement(fe,null)}}),a.a.createElement(K.b,{exact:!0,path:"/deleteAccount",render:function(){return a.a.createElement(Ne,null)}}),a.a.createElement(K.b,{exact:!0,path:"/addNewThread",render:function(){return a.a.createElement(q,{findUserIdByUsername:t})}}),a.a.createElement(K.b,{exact:!0,path:"/thread/:id",render:function(r){var u,c=r.match;return a.a.createElement(we,{thread:(u=c.params.id,e.threads.find(function(e){return e.id===u})),findUserIdByUsername:t,findUserNameById:n})}})))))}),Te=n(17),Ie=n(50),Ce=n(51),Ue=Object(Te.combineReducers)({notification:f,threads:x,comments:ve,users:ae,user:te}),Ae=Object(Te.createStore)(Ue,Object(Ce.composeWithDevTools)(Object(Te.applyMiddleware)(Ie.a))),Se=function(){c.a.render(a.a.createElement(i.a,{store:Ae},a.a.createElement(je,null)),document.getElementById("root"))};Se(),Ae.subscribe(Se)}},[[53,1,2]]]);
//# sourceMappingURL=main.f9fce047.chunk.js.map