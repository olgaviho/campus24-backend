(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(38)},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),u=n.n(l),c=n(12),i=n(2),o=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),l=n[0],u=n[1];return r.a.createElement("div",null,r.a.createElement("h4",null,"Thread:"),r.a.createElement("button",{onClick:function(){return e.deleteThread(e.id)}}," delete "),r.a.createElement("p",null,"Title: ",e.title),r.a.createElement("p",null,"Message: ",e.message),r.a.createElement("form",null,r.a.createElement("div",null,"new message",r.a.createElement("input",{value:l,onChange:function(e){u(e.target.value)}})),r.a.createElement("button",{onClick:function(){return e.editThread(e.id,l)}}," edit ")))},d=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"Add new thread"),r.a.createElement("form",{onSubmit:e.addNewThread},r.a.createElement("div",null,"title:",r.a.createElement("input",{value:e.newTitle,onChange:function(t){e.setNewTitle(t.target.value)}})),r.a.createElement("div",null,"message:",r.a.createElement("input",{value:e.newMessage,onChange:function(t){e.setNewMessage(t.target.value)}})),r.a.createElement("button",{type:"submit"},"add")))},s=n(3),m=n.n(s),f="/api/threads",h=function(){return console.log("yrite\xe4\xe4n saada yhteys"),m.a.get(f).then(function(e){return e.data})},E=function(e){return m.a.post(f,e).then(function(e){return e.data})},g=function(e){return m.a.put("".concat(f,"/").concat(e.id),e).then(function(e){return e.data})},p=function(e){return m.a.delete("".concat(f,"/").concat(e)).then(function(e){return e.data})},v=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],l=t[1],u=Object(a.useState)(""),s=Object(i.a)(u,2),m=s[0],f=s[1],v=Object(a.useState)(""),w=Object(i.a)(v,2),b=w[0],T=w[1];Object(a.useEffect)(function(){h().then(function(e){l(e),console.log("hiphei"),console.log(n)}).catch(function(e){console.log("error",e)})},[]);var O=function(e){p(e).then(function(){l(n.filter(function(t){return t.id!==e}))})},j=function(e,t){var a=n.find(function(t){return t.id===e}),r=Object(c.a)({},a,{message:t});g(r).then(function(e){l(n.map(function(t){return t.id!==r.id?t:e}))})};return r.a.createElement("div",null,r.a.createElement("h2",null,"Campus24"),r.a.createElement("h3",null,"Threads"),r.a.createElement("ul",null,n.map(function(e){return r.a.createElement(o,{key:e.id,id:e.id,title:e.title,message:e.message,deleteThread:O,editThread:j})})),r.a.createElement(d,{addNewThread:function(e){e.preventDefault();var t={title:m,message:b,date:(new Date).toISOString(),id:Math.floor(1e4*Math.random())};f(""),T(""),E(t).then(function(e){l(n.concat(e))})},setNewTitle:f,setNewMessage:T,newTitle:m,newMessage:b}))};u.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.57850f5d.chunk.js.map