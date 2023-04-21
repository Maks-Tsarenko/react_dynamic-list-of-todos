(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var s=c(9),a=c.n(s),n=c(5),l=c(10),i=c(2),r=c(3),d=c.n(r),o=c(1),j=(c(16),c(17),c(7)),u=c.n(j),b=c(0),h=function(e){var t=e.listOfTodos,c=e.selectedTodo,s=e.selectTodo;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"todo",className:u()({"has-background-info-light":c&&c.id===e.id}),children:[Object(b.jsx)("td",{className:"is-vcentered",children:e.id}),Object(b.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:u()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){return c&&c.id===e.id?s(null):s(e)}(e)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:u()({"far fa-eye-slash":c&&c.id===e.id,"far fa-eye":!c||c.id!==e.id})})})})})]},e.id)}))})]})},m=function(e){var t=e.setFilter,c=e.setSearchQuery,s=Object(o.useState)(!1),a=Object(i.a)(s,2),n=a[0],l=a[1];return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){t(e.target.value)},children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:"active",children:"Active"}),Object(b.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",onChange:function(e){var t=e.target.value;c(t),l(""!==t.trim())}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),n&&Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c(""),document.querySelector("input[data-cy=searchInput]").value="",l(!1)}})})]})]})},O=(c(19),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})});function x(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var f=function(e){var t=e.selectedTodo,c=e.closeModal,s=Object(o.useState)(null),a=Object(i.a)(s,2),l=a[0],r=a[1],j=function(){var e=Object(n.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,s=t.userId,x("/users/".concat(s));case 3:c=e.sent,r(c);case 5:case"end":return e.stop()}var s}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){j()}),[]),Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),t&&l?Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(b.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(l.email),children:l.name})]})]})]}):Object(b.jsx)(O,{})]})},p=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)("all"),r=Object(i.a)(a,2),j=r[0],u=r[1],p=Object(o.useState)(""),v=Object(i.a)(p,2),N=v[0],y=v[1],g=Object(o.useState)(null),k=Object(i.a)(g,2),S=k[0],w=k[1],T=Object(o.useState)(!0),C=Object(i.a)(T,2),_=C[0],E=C[1],I=function(){var e=Object(n.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("/todos");case 2:t=e.sent,s(t),E(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){I()}),[]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(m,{setFilter:u,setSearchQuery:y})}),Object(b.jsx)("div",{className:"block",children:_?Object(b.jsx)(O,{}):Object(b.jsx)(h,{listOfTodos:function(){var e=Object(l.a)(c);return"all"!==j&&(e=e.filter((function(e){return"completed"===j?e.completed:!e.completed}))),""!==N.trim()&&(e=e.filter((function(e){return e.title.toLowerCase().includes(N.toLowerCase())}))),e}(),selectedTodo:S,selectTodo:function(e){w(e)}})})]})})}),S&&Object(b.jsx)(f,{selectedTodo:S,closeModal:function(){w(null)}})]})};a.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a3a9d70b.chunk.js.map