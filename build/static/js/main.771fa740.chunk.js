(this.webpackJsonpbilforum=this.webpackJsonpbilforum||[]).push([[0],{40:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(2),s=a.n(n),r=a(20),l=a.n(r),i=(a(40),a(10)),j=a.n(i),o=a(15),x=a(7),u=a(12),b=a(56),m=a(57),d=a(58),h=a(59),O=a(60),p=a(61),f=Object(n.createContext)(),v=function(e){var t=Object(n.useState)(null),a=Object(x.a)(t,2),s=a[0],r=a[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("token"));e&&r(e)}),[]);var l={user:s,setUser:r};return Object(c.jsx)(f.Provider,{value:l,children:e.children})},g=function(e){var t=Object(n.useState)(!1),a=Object(x.a)(t,2),s=a[0],r=a[1],l=Object(n.useContext)(f),i=l.user,v=l.setUser,g=function(){var e=Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/logout");case 2:v(null),localStorage.removeItem("token");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)(b.a,{className:"px-0 mx-0 bg-light",fluid:!0,children:Object(c.jsx)(b.a,{className:"mx-auto px-2",children:Object(c.jsxs)(m.a,{light:!0,expand:"md",className:" px-3",children:[Object(c.jsx)(u.b,{className:"nav-brand",to:"/",children:Object(c.jsx)("h3",{children:"Bil Forum"})}),Object(c.jsx)(d.a,{onClick:function(){return r(!s)}}),Object(c.jsx)(h.a,{isOpen:s,navbar:!0,children:Object(c.jsxs)(O.a,{className:"ml-auto",navbar:!0,children:[Object(c.jsx)(p.a,{className:"mr-lg-3",children:Object(c.jsx)(u.b,{to:"/about",children:"Om oss"})}),i?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p.a,{className:"mr-lg-3",children:Object(c.jsx)(u.b,{to:"/mypage",children:"Mina sidor"})}),Object(c.jsx)(p.a,{children:Object(c.jsx)(u.b,{onClick:g,to:"/",children:"Logga ut"})})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p.a,{className:"mr-lg-3",children:Object(c.jsx)(u.b,{to:"/signup",children:"Bli medlem"})}),Object(c.jsx)(p.a,{children:Object(c.jsx)(u.b,{to:"/signin",children:"Logga in"})})]})]})})]})})})},N=a(62),y=a(63);function S(){return Object(c.jsx)(b.a,{className:"footer",fluid:!0,children:Object(c.jsx)(N.a,{className:"bg-light mt-5",children:Object(c.jsx)(y.a,{lg:"123",className:"mx-auto py-5",children:Object(c.jsx)("div",{style:{textAlign:"center"},children:Object(c.jsxs)("ul",{className:"nav",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{className:"nav-link",href:"https://www.facebook.com/khajehabdollahi/",children:"Facebook"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{className:"nav-link",href:"#",children:"Instagram"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{className:"nav-link",href:"https://www.youtube.com/c/SvenskaSwedish",children:"Youtube"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{className:"nav-link",href:"#",children:"Address"})})]})})})})})}function k(){return Object(c.jsx)(b.a,{children:Object(c.jsx)(N.a,{children:Object(c.jsx)(y.a,{children:Object(c.jsx)("h1",{className:"text-center mt-5",children:"OM OSS"})})})})}var C=a(33),w=Object(n.createContext)();function E(e){var t=Object(n.useState)(),a=Object(x.a)(t,2),s=a[0],r=a[1],l=Object(n.useState)(),i=Object(x.a)(l,2),u=i[0],b=i[1],m=Object(n.useState)(),d=Object(x.a)(m,2),h=d[0],O=d[1],p=function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/threads");case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,r(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(j.a.mark((function e(t){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/threads/"+t);case 2:return a=e.sent,e.next=5,fetch("/api/threads/"+t+"/comments");case 5:return c=e.sent,e.next=8,a.json();case 8:return a=e.sent,e.next=11,c.json();case 11:c=e.sent,b(a),O(c),console.log(h);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){p()}),[]);var v={getForumText:p,threads:s,thread:u,getForumTextById:f,comments:h,appendThreads:function(e){r([].concat(Object(C.a)(s),[e]))}};return Object(c.jsx)(w.Provider,{value:v,children:e.children})}var T=function(){var e=Object(n.useContext)(w),t=e.threads,a=e.getForumTextById;return Object(c.jsxs)(b.a,{children:[Object(c.jsx)(N.a,{className:"my-3 mx-5",children:Object(c.jsxs)(y.a,{className:"my-3 mx-4",lg:"12",children:[Object(c.jsx)("h3",{className:"text-secondary text-center",children:"V\xe4lkommen till min"}),Object(c.jsx)("h1",{className:"text-info text-center",children:"FORUM"})]})}),Object(c.jsx)("hr",{}),Object(c.jsx)(N.a,{children:Object(c.jsx)(y.a,{className:"mt-1 px-0",lg:"12",style:{marginLeft:"25px"},children:function(){if(void 0!==t)return t.map((function(e,t){return Object(c.jsx)("div",{children:Object(c.jsx)(u.b,{to:"/".concat(e.topic),onClick:function(){return a(e.threadID)},style:{textDecoration:"none"},children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("h4",{className:"text-muted",children:[e.topic," "]}),Object(c.jsxs)("p",{children:["Skribent : ",e.name]})]})})},"res"+t+e.theadID)}))}()})})]})},D=a(64),I=a(65),F=a(66),P=a(67),q=a(68),J=function(e){var t=Object(n.useContext)(w).getForumText,a=Object(n.useContext)(f).user,s=Object(n.useState)(""),r=Object(x.a)(s,2),l=r[0],i=r[1],j=Object(n.useState)(""),o=Object(x.a)(j,2),u=o[0],m=o[1],d=function(c){c.preventDefault();var n={topic:l,text:u,writer:a.userID};fetch("/api/threads",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}).then((function(a){t(),a.ok&&(i(""),m(""),e.history.push("/"))}))};return Object(c.jsx)(b.a,{children:Object(c.jsx)(N.a,{className:"mt-5",children:Object(c.jsxs)(y.a,{lg:"6",className:"mx-auto",children:[Object(c.jsx)("h3",{children:a.name.toUpperCase()}),Object(c.jsx)("h4",{className:"text-center",children:"Skriv en post"}),Object(c.jsxs)(D.a,{onSubmit:d,className:"mt-4",children:[Object(c.jsxs)(I.a,{children:[Object(c.jsx)(F.a,{for:"exampleEmail",children:"\xc4mne"}),Object(c.jsx)(P.a,{type:"text",name:"text",id:"exampleEmail",placeholder:"Skriv \xe4mne",value:l,onChange:function(e){return i(e.target.value)},required:!0})]}),Object(c.jsxs)(I.a,{children:[Object(c.jsx)(F.a,{for:"exampleText",children:"Text Area"}),Object(c.jsx)(P.a,{type:"textarea",name:"text",id:"exampleText",value:u,onChange:function(e){return m(e.target.value)},required:!0})]}),Object(c.jsx)(q.a,{className:"btn-success",children:"Skicka"})]})]})})})},R=function(e){var t=Object(n.useState)(""),a=Object(x.a)(t,2),s=a[0],r=a[1],l=Object(n.useState)(""),i=Object(x.a)(l,2),u=i[0],m=i[1],d=Object(n.useState)(""),h=Object(x.a)(d,2),O=h[0],p=h[1],f=Object(n.useState)(""),v=Object(x.a)(f,2),g=v[0],S=v[1],k=function(){var t=Object(o.a)(j.a.mark((function t(a){var c,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),c={email:s,password:u,userRole:O,name:g},t.next=4,fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 4:return n=t.sent,t.prev=5,t.next=8,n.json();case 8:n=t.sent,e.history.push("/signin"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),console.log("Error!");case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsx)(b.a,{className:"mt-5",children:Object(c.jsx)(N.a,{children:Object(c.jsxs)(y.a,{lg:"5",className:"mx-auto",children:[Object(c.jsx)("h4",{children:"Sign up"}),Object(c.jsxs)(D.a,{onSubmit:k,children:[Object(c.jsxs)(I.a,{children:[Object(c.jsx)(F.a,{for:"exampleEmail",className:"mr-sm-2",children:"Email"}),Object(c.jsx)(P.a,{type:"email",name:"email",id:"email",placeholder:"something@idk.cool",value:s,onChange:function(e){return r(e.target.value)},required:!0})]}),Object(c.jsxs)(I.a,{children:[Object(c.jsx)(F.a,{for:"examplePassword",className:"mr-sm-2",children:"Password"}),Object(c.jsx)(P.a,{type:"password",name:"password",id:"examplePassword",placeholder:"don't tell!",value:u,onChange:function(e){return m(e.target.value)},required:!0})]}),Object(c.jsxs)(I.a,{children:[Object(c.jsx)(F.a,{for:"exampleEmail",className:"mr-sm-2",children:"Name"}),Object(c.jsx)(P.a,{type:"text",name:"text",id:"text",placeholder:"Name",value:g,onChange:function(e){return S(e.target.value)},required:!0})]}),Object(c.jsxs)(I.a,{children:[Object(c.jsx)(F.a,{for:"exampleEmail",className:"mr-sm-2",children:"Role"}),Object(c.jsx)(P.a,{type:"text",name:"text",id:"text",placeholder:"role",value:O,onChange:function(e){return p(e.target.value)},required:!0})]}),Object(c.jsx)(q.a,{children:"Submit"})]})]})})})},U=function(e){var t=Object(n.useContext)(f).setUser,a=Object(n.useState)(""),s=Object(x.a)(a,2),r=s[0],l=s[1],i=Object(n.useState)(""),u=Object(x.a)(i,2),m=u[0],d=u[1],h=Object(n.useState)(""),O=Object(x.a)(h,2),p=O[0],v=O[1],g=Object(n.useState)(""),S=Object(x.a)(g,2),k=S[0],C=S[1],w=function(){var a=Object(o.a)(j.a.mark((function a(c){var n,s;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),n={email:r,password:m,userRole:p},a.next=4,fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return s=a.sent,a.prev=5,a.next=8,s.json();case 8:null==(s=a.sent)?C("Fel email eller l\xf6senord!"):(t(s),localStorage.setItem("session",JSON.stringify(s)),e.history.push("/mypage")),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(5),console.log("Error!");case 15:case"end":return a.stop()}}),a,null,[[5,12]])})));return function(e){return a.apply(this,arguments)}}();return Object(c.jsx)(b.a,{className:"mt-5",children:Object(c.jsx)(N.a,{children:Object(c.jsxs)(y.a,{lg:"5",className:"mx-auto",children:[Object(c.jsx)("h4",{className:"pb-3",children:"Sign in"}),Object(c.jsxs)(D.a,{onSubmit:w,children:[Object(c.jsxs)(I.a,{children:[Object(c.jsx)(F.a,{for:"exampleEmail",className:"mr-sm-2",children:"Email"}),Object(c.jsx)(P.a,{type:"email",name:"email",id:"email",placeholder:"something@idk.cool",value:r,onChange:function(e){return l(e.target.value)},required:!0})]}),Object(c.jsxs)(I.a,{children:[Object(c.jsx)(F.a,{for:"examplePassword",className:"mr-sm-2",children:"Password"}),Object(c.jsx)(P.a,{type:"password",name:"password",id:"examplePassword",placeholder:"don't tell!",value:m,onChange:function(e){return d(e.target.value)},required:!0})]}),Object(c.jsxs)(I.a,{children:[Object(c.jsx)(F.a,{for:"exampleEmail",className:"mr-sm-2",children:"Role"}),Object(c.jsx)(P.a,{type:"text",name:"email",id:"email",placeholder:"admin",value:p,onChange:function(e){return v(e.target.value)},required:!0})]}),Object(c.jsx)(q.a,{children:"Submit"}),Object(c.jsx)("p",{children:k})]})]})})})},A=a(8),B=a(69),L=function(e){var t=Object(n.useState)(!1),a=Object(x.a)(t,2),s=a[0],r=a[1],l=function(){return r(!s)},i=Object(n.useContext)(w),j=i.thread,o=i.comments,u=i.getForumText,m=Object(n.useContext)(f).user,d=Object(n.useState)(""),h=Object(x.a)(d,2),O=h[0],p=h[1],v=Object(n.useState)(""),g=Object(x.a)(v,2),S=g[0],k=g[1],C=function(t){t.preventDefault(),fetch("/api/threads/"+j.threadID,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify({topic:O,text:S})}).then((function(t){t.ok&&(u(),p(""),k(""),e.history.push("/"))}))};return Object(c.jsxs)(b.a,{children:[Object(c.jsx)(N.a,{className:"mt-5",children:Object(c.jsx)(y.a,{children:j&&Object(c.jsxs)(y.a,{lg:"12",children:[Object(c.jsxs)("h4",{className:"text-secondary",children:["\xc4mne:",Object(c.jsxs)("span",{className:"text-info",children:[" ",j.topic," "]})]}),Object(c.jsxs)("p",{children:["Skribent: ",j.name]}),Object(c.jsx)("p",{className:"mt-3",style:{fontSize:"18px"},children:j.text}),Object(c.jsxs)("div",{className:"mt-5",children:[function(){if(null!==m)return Object(c.jsx)(q.a,{color:"success",className:"mr-2",children:"Comment"})}(),function(){if(null!==m&&(m.userID===j.writer||"admin"===m.userRole||"moderator"===m.userRole))return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(q.a,{color:"primary",className:"mr-2",onClick:l,children:"Edit"}),Object(c.jsx)(q.a,{color:"danger",onClick:function(){return t=j.threadID,void fetch("/api/threads/"+t,{method:"DELETE"}).then((function(t){u(),e.history.push("/")}));var t},children:"Delete"})]})}()]}),Object(c.jsx)(B.a,{in:s,tag:"h5",className:"mt-3",children:s&&Object(c.jsx)(N.a,{className:"mt-5",children:Object(c.jsx)(y.a,{lg:"12",children:Object(c.jsxs)(D.a,{onSubmit:C,children:[Object(c.jsxs)(I.a,{children:[Object(c.jsx)(F.a,{for:"exampleEmail",children:"\xc4mne"}),Object(c.jsx)(P.a,{type:"text",name:"text",id:"exampleEmail",placeholder:"Write title",defaultValue:j.topic,onChange:function(e){return p(e.target.value)},required:!0})]}),Object(c.jsxs)(I.a,{children:[Object(c.jsx)(F.a,{for:"exampleText",children:"Text Area"}),Object(c.jsx)(P.a,{type:"textarea",name:"text",id:"exampleText",defaultValue:j.text,onChange:function(e){return k(e.target.value)},required:!0})]}),Object(c.jsx)(q.a,{className:"btn-success",children:"Skicka"})]})})})})]},"key"+j.threadID)})}),Object(c.jsx)("hr",{}),Object(c.jsx)(N.a,{className:"mt-3",children:Object(c.jsxs)(y.a,{children:[Object(c.jsx)("h5",{className:"ml-3",children:"Comments"}),Object(c.jsx)("hr",{}),o&&Object(c.jsxs)(y.a,{lg:"12",className:"mt-3",children:[Object(c.jsxs)("span",{children:["Commentator: ",Object(c.jsx)("h4",{className:"text-info",children:o.name})]}),Object(c.jsx)("p",{className:"mt-3 text-dark",style:{fontSize:"18px"},children:o.commentText})]},"key"+o.commentID)]})})]})},M=a(19),V=a(34),z=function(e){var t=e.component,a=Object(V.a)(e,["component"]),s=Object(n.useContext)(f).user;return Object(c.jsx)(A.b,Object(M.a)(Object(M.a)({},a),{},{render:function(e){return s?Object(c.jsx)(t,Object(M.a)(Object(M.a)({},a),e)):Object(c.jsx)(A.a,{to:{pathname:"/",state:{from:e.location}}})}}))};var W=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(u.a,{children:[Object(c.jsx)(E,{children:Object(c.jsxs)(v,{children:[Object(c.jsx)(g,{}),Object(c.jsx)("div",{className:"content",children:Object(c.jsxs)(A.d,{children:[Object(c.jsx)(z,{exact:!0,path:"/mypage",component:J}),Object(c.jsx)(A.b,{exact:!0,path:"/",component:T}),Object(c.jsx)(A.b,{exact:!0,path:"/signup",component:R}),Object(c.jsx)(A.b,{exact:!0,path:"/signin",component:U}),Object(c.jsx)(A.b,{exact:!0,path:"/mypage",component:J}),Object(c.jsx)(A.b,{exact:!0,path:"/about",component:k}),Object(c.jsx)(A.b,{exact:!0,path:"/:id",component:L})]})})]})}),Object(c.jsx)(S,{})]})})};a(54);l.a.render(Object(c.jsx)(s.a.Fragment,{children:Object(c.jsx)(W,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.771fa740.chunk.js.map