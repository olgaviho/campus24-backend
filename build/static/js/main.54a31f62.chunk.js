(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(42)},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(13),c=n.n(u),l=n(14),o=n(3),i=n.n(o),s=n(5),d=n(2),m=function(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),u=n[0],c=n[1];return r.a.createElement("div",null,r.a.createElement("h4",null,"Thread:"),r.a.createElement("button",{onClick:function(){return e.deleteThread(e.id)}}," delete "),r.a.createElement("p",null,"Title: ",e.title),r.a.createElement("p",null,"Message: ",e.message),r.a.createElement("form",null,r.a.createElement("div",null,"new message",r.a.createElement("input",{value:u,onChange:function(e){c(e.target.value)}})),r.a.createElement("button",{onClick:function(){return e.editThread(e.id,u)}}," edit ")))},f=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"Add new thread"),r.a.createElement("form",{onSubmit:e.addNewThread},r.a.createElement("div",null,"title:",r.a.createElement("input",{value:e.newTitle,onChange:function(t){e.setNewTitle(t.target.value)}})),r.a.createElement("div",null,"message:",r.a.createElement("input",{value:e.newMessage,onChange:function(t){e.setNewMessage(t.target.value)}})),r.a.createElement("button",{type:"submit"},"add")))},p=n(4),g=n.n(p),h="/api/threads",v=null,E={getAll:function(){return g.a.get(h).then(function(e){return e.data})},create:function(){var e=Object(s.a)(i.a.mark(function e(t){var n,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:v}},e.next=3,g.a.post(h,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),update:function(e){return g.a.put("".concat(h,"/").concat(e.id),e).then(function(e){return e.data})},removeThread:function(e){return g.a.delete("".concat(h,"/").concat(e)).then(function(e){return e.data})},setToken:function(e){v="bearer ".concat(e)}},w={login:function(){var e=Object(s.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},b=function(){return g.a.get("/api/users").then(function(e){return e.data})},O=function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.handleLogin},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:e.username,name:"Username",onChange:function(t){e.setUsername(t.target.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:e.password,name:"Password",onChange:function(t){e.setPassword(t.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"login"))))},j=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],u=t[1],c=Object(a.useState)(""),o=Object(d.a)(c,2),p=o[0],g=o[1],h=Object(a.useState)(""),v=Object(d.a)(h,2),j=v[0],T=v[1],S=Object(a.useState)(null),k=Object(d.a)(S,2),C=k[0],y=k[1],x=Object(a.useState)(""),N=Object(d.a)(x,2),I=N[0],M=N[1],U=Object(a.useState)(""),A=Object(d.a)(U,2),J=A[0],D=A[1],P=Object(a.useState)([]),L=Object(d.a)(P,2),z=L[0],B=L[1];Object(a.useEffect)(function(){b().then(function(e){B(e)}).catch(function(e){console.log("error",e)})},[]),Object(a.useEffect)(function(){E.getAll().then(function(e){u(e)}).catch(function(e){console.log("error",e)})},[]),Object(a.useEffect)(function(){var e=window.localStorage.getItem("loggedCampus24User");if(e){var t=JSON.parse(e);y(t),E.setToken(t.token)}});var H=function(){var e=Object(s.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,w.login({username:I,password:J});case 4:n=e.sent,window.localStorage.setItem("loggedCampus24User",JSON.stringify(n)),E.setToken(n.token),y(n),M(""),D(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("error",e.t0);case 15:case"end":return e.stop()}},e,null,[[1,12]])}));return function(t){return e.apply(this,arguments)}}(),q=function(e){E.removeThread(e).then(function(){u(n.filter(function(t){return t.id!==e}))})},F=function(e){e.preventDefault();var t={title:p,message:j,date:(new Date).toISOString(),userId:Q(C.name).id};g(""),T(""),E.create(t).then(function(e){u(n.concat(e))})},G=function(e,t){var a=n.find(function(t){return t.id===e}),r=Object(l.a)({},a,{message:t});E.update(r).then(function(e){u(n.map(function(t){return t.id!==r.id?t:e}))})},K=function(){y(null),window.localStorage.clear()},Q=function(e){return z.find(function(t){return t.username=e})};return r.a.createElement("div",null,r.a.createElement("h2",null,"Campus24"),null===C?r.a.createElement("div",null,r.a.createElement(O,{handleLogin:H,username:I,password:J,setUsername:M,setPassword:D})):r.a.createElement("div",null,r.a.createElement("p",null,"Hi ",C.name,"!"),r.a.createElement("button",{onClick:K},"logout"),r.a.createElement(f,{addNewThread:F,editThread:G,setNewTitle:g,setNewMessage:T,newTitle:p,newMessage:j})),r.a.createElement("h3",null,"Threads"),r.a.createElement("ul",null,n.map(function(e){return r.a.createElement(m,{key:e.id,id:e.id,title:e.title,message:e.message,deleteThread:q,editThread:G})})))};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.54a31f62.chunk.js.map