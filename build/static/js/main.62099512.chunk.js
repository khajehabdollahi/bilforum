(this.webpackJsonpbilforum=this.webpackJsonpbilforum||[]).push([[0],{37:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(2),s=a.n(n),r=a(19),l=a.n(r),i=(a(37),a(10)),j=a.n(i),o=a(15),b=a(7),x=a(12),u=a(53),m=a(54),h=a(55),d=a(56),O=a(57),p=a(58),f=Object(n.createContext)(),v=function(e){var t=Object(n.useState)(null),a=Object(b.a)(t,2),s=a[0],r=a[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("token"));e&&r(e)}),[]);var l={user:s,setUser:r};return Object(c.jsx)(f.Provider,{value:l,children:e.children})},g=function(e){var t=Object(n.useState)(!1),a=Object(b.a)(t,2),s=a[0],r=a[1],l=Object(n.useContext)(f),i=l.user,v=l.setUser,g=function(){var e=Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/logout");case 2:v(null),localStorage.removeItem("token");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)(u.a,{className:"px-0 mx-0 bg-light",fluid:!0,children:Object(c.jsx)(u.a,{className:"mx-auto px-2",children:Object(c.jsxs)(m.a,{light:!0,expand:"md",className:" px-3",children:[Object(c.jsx)(x.b,{className:"nav-brand",to:"/",children:Object(c.jsx)("h3",{children:"Bil Forum"})}),Object(c.jsx)(h.a,{onClick:function(){return r(!s)}}),Object(c.jsx)(d.a,{isOpen:s,navbar:!0,children:Object(c.jsxs)(O.a,{className:"ml-auto",navbar:!0,children:[Object(c.jsx)(p.a,{className:"mr-lg-3",children:Object(c.jsx)(x.b,{to:"/about",children:"About us"})}),i?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p.a,{className:"mr-lg-3",children:Object(c.jsx)(x.b,{to:"/mypage",children:"My page"})}),Object(c.jsx)(p.a,{children:Object(c.jsx)(x.b,{onClick:g,to:"/",children:" Sign out"})})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p.a,{className:"mr-lg-3",children:Object(c.jsx)(x.b,{to:"/signup",children:"Sign up"})}),Object(c.jsx)(p.a,{children:Object(c.jsx)(x.b,{to:"/signin",children:"Sign in"})})]})]})})]})})})},N=a(59),y=a(60);function S(){return Object(c.jsx)(u.a,{className:"footer",fluid:!0,children:Object(c.jsx)(N.a,{className:"bg-light mt-5",children:Object(c.jsx)(y.a,{lg:"123",className:"mx-auto py-5",children:Object(c.jsx)("div",{style:{textAlign:"center"},children:Object(c.jsxs)("ul",{className:"nav",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{className:"nav-link",href:"https://www.facebook.com/khajehabdollahi/",children:"Facebook"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{className:"nav-link",href:"#",children:"Instagram"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{className:"nav-link",href:"https://www.youtube.com/c/SvenskaSwedish",children:"Youtube"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{className:"nav-link",href:"#",children:"Address"})})]})})})})})}function k(){return Object(c.jsxs)(u.a,{className:"bg.primary",children:[Object(c.jsx)("h1",{children:"Here you can discuss abou cars"}),Object(c.jsx)("a",{href:"Home",class:"btn btn-primary",children:"Back to home"})]})}var C=Object(n.createContext)();function w(e){var t=Object(n.useState)(),a=Object(b.a)(t,2),s=a[0],r=a[1],l=Object(n.useState)(),i=Object(b.a)(l,2),x=i[0],u=i[1],m=Object(n.useState)(),h=Object(b.a)(m,2),d=h[0],O=h[1],p=function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/threads");case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,r(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(j.a.mark((function e(t){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/threads/"+t);case 2:return a=e.sent,e.next=5,fetch("/api/threads/"+t+"/comments");case 5:return c=e.sent,e.next=8,a.json();case 8:return a=e.sent,e.next=11,c.json();case 11:c=e.sent,u(a),O(c),console.log(d);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){p()}),[]);var v={getForumText:p,threads:s,thread:x,getForumTextById:f,comments:d};return Object(c.jsx)(C.Provider,{value:v,children:e.children})}var E=function(){var e=Object(n.useContext)(C),t=e.threads,a=e.getForumTextById;return Object(c.jsxs)(u.a,{children:[Object(c.jsx)(N.a,{className:"my-3 mx-5",children:Object(c.jsxs)(y.a,{className:"my-3 mx-4",lg:"12",children:[Object(c.jsx)("h3",{className:"text-secondary text-center",children:"V\xe4lkommen till min"}),Object(c.jsx)("h1",{className:"text-info text-center",children:"FORUM"})]})}),Object(c.jsx)("hr",{}),Object(c.jsx)(N.a,{children:Object(c.jsx)(y.a,{className:"mt-1 px-0",lg:"12",style:{marginLeft:"25px"},children:function(){if(void 0!==t)return t.map((function(e,t){return Object(c.jsx)("div",{children:Object(c.jsx)(x.b,{to:"/".concat(e.topic),onClick:function(){return a(e.threadID)},style:{textDecoration:"none"},children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("h4",{className:"text-muted",children:[e.topic," "]}),Object(c.jsxs)("p",{children:["Skribent : ",e.name]})]})})},"res"+t+e.theadID)}))}()})})]})},T=a(61),I=a(62),D=a(63),P=a(64),q=a(65),F=function(e){var t=Object(n.useContext)(C).getForumText,a=Object(n.useContext)(f).user,s=Object(n.useState)(""),r=Object(b.a)(s,2),l=r[0],i=r[1],j=Object(n.useState)(""),o=Object(b.a)(j,2),x=o[0],m=o[1],h=function(c){c.preventDefault(),fetch("/api/forums",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({title:l,text:x,authorId:a.id})}).then((function(a){t(),a.ok&&(i(""),m(""),e.history.push("/"))}))};return Object(c.jsx)(u.a,{children:Object(c.jsx)(N.a,{className:"mt-5",children:Object(c.jsxs)(y.a,{lg:"6",className:"mx-auto",children:[Object(c.jsx)("h4",{className:"text-center",children:"Write a post"}),Object(c.jsxs)(T.a,{onSubmit:h,className:"mt-4",children:[Object(c.jsxs)(I.a,{children:[Object(c.jsx)(D.a,{for:"exampleEmail",children:"Title"}),Object(c.jsx)(P.a,{type:"text",name:"text",id:"exampleEmail",placeholder:"Write title",value:l,onChange:function(e){return i(e.target.value)},required:!0})]}),Object(c.jsxs)(I.a,{children:[Object(c.jsx)(D.a,{for:"exampleText",children:"Text Area"}),Object(c.jsx)(P.a,{type:"textarea",name:"text",id:"exampleText",value:x,onChange:function(e){return m(e.target.value)},required:!0})]}),Object(c.jsx)(q.a,{className:"btn-success",children:"Submit"})]})]})})})},J=function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),s=a[0],r=a[1],l=Object(n.useState)(""),i=Object(b.a)(l,2),x=i[0],m=i[1],h=Object(n.useState)(""),d=Object(b.a)(h,2),O=d[0],p=d[1],f=Object(n.useState)(""),v=Object(b.a)(f,2),g=v[0],S=v[1],k=function(){var t=Object(o.a)(j.a.mark((function t(a){var c,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),c={email:s,password:x,userRole:O,name:g},t.next=4,fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 4:return n=t.sent,t.prev=5,t.next=8,n.json();case 8:n=t.sent,e.history.push("/signin"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),console.log("Error!");case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsx)(u.a,{className:"mt-5",children:Object(c.jsx)(N.a,{children:Object(c.jsxs)(y.a,{lg:"5",className:"mx-auto",children:[Object(c.jsx)("h4",{children:"Sign up"}),Object(c.jsxs)(T.a,{onSubmit:k,children:[Object(c.jsxs)(I.a,{children:[Object(c.jsx)(D.a,{for:"exampleEmail",className:"mr-sm-2",children:"Email"}),Object(c.jsx)(P.a,{type:"email",name:"email",id:"email",placeholder:"something@idk.cool",value:s,onChange:function(e){return r(e.target.value)},required:!0})]}),Object(c.jsxs)(I.a,{children:[Object(c.jsx)(D.a,{for:"examplePassword",className:"mr-sm-2",children:"Password"}),Object(c.jsx)(P.a,{type:"password",name:"password",id:"examplePassword",placeholder:"don't tell!",value:x,onChange:function(e){return m(e.target.value)},required:!0})]}),Object(c.jsxs)(I.a,{children:[Object(c.jsx)(D.a,{for:"exampleEmail",className:"mr-sm-2",children:"Name"}),Object(c.jsx)(P.a,{type:"text",name:"text",id:"text",placeholder:"Name",value:g,onChange:function(e){return S(e.target.value)},required:!0})]}),Object(c.jsxs)(I.a,{children:[Object(c.jsx)(D.a,{for:"exampleEmail",className:"mr-sm-2",children:"Role"}),Object(c.jsx)(P.a,{type:"text",name:"text",id:"text",placeholder:"role",value:O,onChange:function(e){return p(e.target.value)},required:!0})]}),Object(c.jsx)(q.a,{children:"Submit"})]})]})})})},A=function(e){var t=Object(n.useContext)(f).setUser,a=Object(n.useState)(""),s=Object(b.a)(a,2),r=s[0],l=s[1],i=Object(n.useState)(""),x=Object(b.a)(i,2),m=x[0],h=x[1],d=Object(n.useState)(""),O=Object(b.a)(d,2),p=O[0],v=O[1],g=Object(n.useState)(""),S=Object(b.a)(g,2),k=S[0],C=S[1],w=function(){var a=Object(o.a)(j.a.mark((function a(c){var n,s;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),n={email:r,password:m,userRole:p},a.next=4,fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return s=a.sent,a.prev=5,a.next=8,s.json();case 8:null==(s=a.sent)?C("Fel email eller l\xf6senord!"):(t(s),localStorage.setItem("session",JSON.stringify(s)),e.history.push("/mypage")),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(5),console.log("Error!");case 15:case"end":return a.stop()}}),a,null,[[5,12]])})));return function(e){return a.apply(this,arguments)}}();return Object(c.jsx)(u.a,{className:"mt-5",children:Object(c.jsx)(N.a,{children:Object(c.jsxs)(y.a,{lg:"5",className:"mx-auto",children:[Object(c.jsx)("h4",{className:"pb-3",children:"Sign in"}),Object(c.jsxs)(T.a,{onSubmit:w,children:[Object(c.jsxs)(I.a,{children:[Object(c.jsx)(D.a,{for:"exampleEmail",className:"mr-sm-2",children:"Email"}),Object(c.jsx)(P.a,{type:"email",name:"email",id:"email",placeholder:"something@idk.cool",value:r,onChange:function(e){return l(e.target.value)},required:!0})]}),Object(c.jsxs)(I.a,{children:[Object(c.jsx)(D.a,{for:"examplePassword",className:"mr-sm-2",children:"Password"}),Object(c.jsx)(P.a,{type:"password",name:"password",id:"examplePassword",placeholder:"don't tell!",value:m,onChange:function(e){return h(e.target.value)},required:!0})]}),Object(c.jsxs)(I.a,{children:[Object(c.jsx)(D.a,{for:"exampleEmail",className:"mr-sm-2",children:"Role"}),Object(c.jsx)(P.a,{type:"text",name:"email",id:"email",placeholder:"admin",value:p,onChange:function(e){return v(e.target.value)},required:!0})]}),Object(c.jsx)(q.a,{children:"Submit"}),Object(c.jsx)("p",{children:k})]})]})})})},B=a(8),R=a(66),U=function(e){var t=Object(n.useState)(!1),a=Object(b.a)(t,2),s=a[0],r=a[1],l=function(){return r(!s)},i=Object(n.useContext)(C),j=i.thread,o=i.comments,x=Object(n.useState)(""),m=Object(b.a)(x,2),h=m[0],d=m[1],O=Object(n.useState)(""),p=Object(b.a)(O,2),f=p[0],v=p[1],g=function(t){t.preventDefault(),fetch("/api/threads/"+j.threadID,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify({title:h,text:f})}).then((function(t){t.ok&&(d(""),v(""),e.history.push("/"))}))};return Object(c.jsxs)(u.a,{children:[Object(c.jsx)(N.a,{className:"mt-5",children:Object(c.jsx)(y.a,{children:j&&Object(c.jsxs)(y.a,{lg:"12",children:[Object(c.jsxs)("h4",{className:"text-secondary",children:["\xc4mne:",Object(c.jsxs)("span",{className:"text-info",children:[" ",j.topic," "]})]}),Object(c.jsxs)("p",{children:["Skribent: ",j.name]}),Object(c.jsx)("p",{className:"mt-3",style:{fontSize:"18px"},children:j.text}),Object(c.jsxs)("div",{className:"mt-5",children:[Object(c.jsx)(q.a,{color:"success",className:"mr-2",children:"Comment"}),Object(c.jsx)(q.a,{color:"primary",className:"mr-2",onClick:l,children:"Edit"}),Object(c.jsx)(q.a,{color:"danger",onClick:function(){return t=j.id,void fetch("/api/threads/"+t,{method:"DELETE"}).then((function(t){e.history.push("/")}));var t},children:"Delete"})]}),Object(c.jsx)(R.a,{in:s,tag:"h5",className:"mt-3",children:s&&Object(c.jsx)(N.a,{className:"mt-5",children:Object(c.jsx)(y.a,{lg:"12",children:Object(c.jsxs)(T.a,{onSubmit:g,children:[Object(c.jsxs)(I.a,{children:[Object(c.jsx)(D.a,{for:"exampleEmail",children:"\xc4mne"}),Object(c.jsx)(P.a,{type:"text",name:"text",id:"exampleEmail",placeholder:"Write title",defaultValue:j.topic,onChange:function(e){return d(e.target.value)},required:!0})]}),Object(c.jsxs)(I.a,{children:[Object(c.jsx)(D.a,{for:"exampleText",children:"Text Area"}),Object(c.jsx)(P.a,{type:"textarea",name:"text",id:"exampleText",defaultValue:j.text,onChange:function(e){return v(e.target.value)},required:!0})]}),Object(c.jsx)(q.a,{className:"btn-success",children:"Skicka"})]})})})})]},"key"+j.threadID)})}),Object(c.jsx)("hr",{}),Object(c.jsx)(N.a,{className:"mt-3",children:Object(c.jsxs)(y.a,{children:[Object(c.jsx)("h5",{className:"ml-3",children:"Comments"}),Object(c.jsx)("hr",{}),o&&Object(c.jsxs)(y.a,{lg:"12",className:"mt-3",children:[Object(c.jsxs)("span",{children:["Commentator: ",Object(c.jsx)("h4",{className:"text-info",children:o.name})]}),Object(c.jsx)("p",{className:"mt-3 text-dark",style:{fontSize:"18px"},children:o.commentText})]},"key"+o.commentID)]})})]})},V=a(18),W=a(31),z=function(e){var t=e.component,a=Object(W.a)(e,["component"]),s=Object(n.useContext)(f).user;return Object(c.jsx)(B.b,Object(V.a)(Object(V.a)({},a),{},{render:function(e){return s?Object(c.jsx)(t,Object(V.a)(Object(V.a)({},a),e)):Object(c.jsx)(B.a,{to:{pathname:"/",state:{from:e.location}}})}}))};var H=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(x.a,{children:[Object(c.jsx)(w,{children:Object(c.jsxs)(v,{children:[Object(c.jsx)(g,{}),Object(c.jsx)("div",{className:"content",children:Object(c.jsxs)(B.d,{children:[Object(c.jsx)(z,{exact:!0,path:"/mypage",component:F}),Object(c.jsx)(B.b,{exact:!0,path:"/",component:E}),Object(c.jsx)(B.b,{exact:!0,path:"/signup",component:J}),Object(c.jsx)(B.b,{exact:!0,path:"/signin",component:A}),Object(c.jsx)(B.b,{exact:!0,path:"/mypage",component:F}),Object(c.jsx)(B.b,{exact:!0,path:"/about",component:k}),Object(c.jsx)(B.b,{exact:!0,path:"/:id",component:U})]})})]})}),Object(c.jsx)(S,{})]})})};a(51);l.a.render(Object(c.jsx)(s.a.Fragment,{children:Object(c.jsx)(H,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.62099512.chunk.js.map