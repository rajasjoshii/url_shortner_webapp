(this.webpackJsonpurlshortner=this.webpackJsonpurlshortner||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},43:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),c=n(27),o=n.n(c),s=(n(37),n(38),n(22)),i=n.n(s),u=n(28),l=n(19),p=n(32).a.initializeApp({apiKey:"AIzaSyAnEG0UtFsn38z94vu8DFkOsp7oJW2_Yfk",authDomain:"urlshortner-4aa23.firebaseapp.com",projectId:"urlshortner-4aa23",storageBucket:"urlshortner-4aa23.appspot.com",messagingSenderId:"775779631800",appId:"1:775779631800:web:f3f83d61a340e989a8ea4d",measurementId:"G-B38X32L2SE"}).firestore(),j=n(51),d=(n(43),n(9));var b=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],c=function(){var e=Object(u.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!=n){e.next=5;break}alert("Please Enter Valid URL.....!"),e.next=9;break;case 5:return r=Object(j.a)(),e.next=8,p.collection("urls").add({url:n,code:r});case 8:alert("This is Your Url - http://localhost:3000/l/"+r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("center",{children:Object(d.jsx)("form",{className:"form_all",onSubmit:c,children:Object(d.jsxs)("div",{className:"input_coontainer",children:[Object(d.jsx)("input",{id:"txt",type:"text",value:n,onChange:function(e){return a(e.target.value)},placeholder:"Enter your URL Here..."}),Object(d.jsx)("input",{id:"btn",type:"submit",value:"Shortern The Url"})]})})})})},h=n(31),f=n(7);var O=function(){var e=Object(f.g)().code,t=Object(f.f)(),n=Object(r.useState)(""),a=Object(l.a)(n,2),c=(a[0],a[1]);return Object(r.useEffect)((function(){p.collection("urls").where("code","==",e).onSnapshot((function(e){if(e.empty)return t.push("/");var n=e.docs[0].data();c(n.url),window.location.replace(n.url)}))}),[]),Object(d.jsx)("div",{})};var x=function(){return Object(d.jsx)("div",{className:"app",children:Object(d.jsx)(h.a,{children:Object(d.jsxs)(f.c,{children:[Object(d.jsx)(f.a,{exact:!0,path:"/",component:b}),Object(d.jsx)(f.a,{exact:!0,path:"/l/:code",component:O})]})})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),m()}},[[49,1,2]]]);
//# sourceMappingURL=main.feea50cb.chunk.js.map