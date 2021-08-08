(this["webpackJsonpstock-manager"]=this["webpackJsonpstock-manager"]||[]).push([[0],{120:function(e,t,a){},124:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(14),r=a.n(c),o=a(33),s=(a(120),a(91)),l=a(17),u=a(57);a(132),a(122);u.a.initializeApp({apiKey:"AIzaSyDrC-Fz80eWezeDNlscZ_gB9QooILNuJ6k",authDomain:"kistone-stock.firebaseapp.com",projectId:"kistone-stock",storageBucket:"kistone-stock.appspot.com",messagingSenderId:"602515706055",appId:"1:602515706055:web:271be76a0fdc249f6eeee2",measurementId:"G-1CFXPBLJZE"});u.a.auth.Auth.Persistence.LOCAL;var d={google:{get:new u.a.auth.GoogleAuthProvider,id:"google.com"}},b=u.a.auth(),j=u.a.firestore(),h=(a(124),a(5));var p=function(e){var t=e.type,a={google:{background:"#ffffff",color:"#757575",title:"Sign in with Google",titleShort:"Google",icon:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"},github:{background:"#333333",title:"Sign in with GitHub",titleShort:"GitHub",icon:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg"},facebook:{background:"#3b5998",title:"Sign in with Facebook",titleShort:"Facebook",icon:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg"}}[t],n=d[t];return Object(h.jsx)("div",{className:"signinButton",children:Object(h.jsxs)("button",{className:"firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-id-idp-button","data-provider-id":n.id,style:{backgroundColor:a.background},"data-upgraded":",MaterialButton",onClick:function(){b.signInWithPopup(n.get).then((function(e){})).catch((function(e){alert(e)}))},children:[Object(h.jsx)("span",{className:"firebaseui-idp-icon-wrapper",children:Object(h.jsx)("img",{className:"firebaseui-idp-icon",alt:"",src:a.icon})}),Object(h.jsx)("span",{className:"firebaseui-idp-text firebaseui-idp-text-long",style:{color:a.color},children:a.title})]})})},m=a(60),g=a(78),O=Object(g.b)({name:"ReduxStore",initialState:{authenticate:{user:void 0,isAuth:!1}},reducers:{login:function(e,t){return console.log(t),Object(m.a)(Object(m.a)({},e),{},{authenticate:t.payload})},logout:function(e,t){return Object(m.a)(Object(m.a)({},e),{},{authenticate:{user:void 0,isAuth:!1}})}}}),f=Object(g.a)({reducer:O.reducer}),x=O.actions,y=x.login,v=x.logout,k=f;a(126);var N=Object(o.b)(null,(function(e){return{doLogin:function(t){return e(y({user:t,isAuth:!0}))}}}))((function(e){var t=e.history,a=e.doLogin;return Object(n.useEffect)((function(){return b.onAuthStateChanged((function(e){e&&(a(e.email),t.push("/main"))}))}),[t,a]),Object(h.jsxs)("div",{className:"login_main",children:[Object(h.jsx)("div",{className:"title",children:"React Stock"}),Object(h.jsx)("div",{className:"button",children:Object(h.jsx)(p,{type:"google"})})]})})),S=a(30),w=a(158),C=a(168),B=a(171),I=a(89),_=a.n(I),A=a(90),q=a.n(A);a(127);var D=Object(o.b)((function(e){return{store:e}}),null)((function(e){var t=e.trading,a=e.store,i=Object(n.useState)([]),c=Object(S.a)(i,2),r=c[0],o=c[1],s=t.key,l=t.data,u=l.color,d=l.display,b=a.authenticate;return Object(n.useEffect)((function(){return j.collection("user").doc(b.user).collection("trading").doc(s).collection("items").orderBy("indate","desc").onSnapshot((function(e){o(e.docs.map((function(e){return e.data()})))}))}),[b,s]),Object(h.jsxs)("div",{className:"stocktable",children:[Object(h.jsx)("div",{className:"table_title",style:{color:u},children:Object(h.jsx)("strong",{children:d})}),Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"stock_name",children:"\uc885\ubaa9\uba85"}),Object(h.jsx)("th",{className:"stock_price",children:"\ub2e8\uac00"}),Object(h.jsx)("th",{className:"stock_quantity",children:"\uc218\ub7c9"}),Object(h.jsx)("th",{className:"stock_indate",children:"\uc785\uace0\uc77c"})]})}),Object(h.jsx)("tbody",{children:r.map((function(e){var t=new Date(e.indate),a=((new Date).getTime()-t.getTime())/864e5,n={color:"white"},i=!1;return a>=-1&&a<0?(n={color:"red"},i=!0):a<-1&&(n={color:"green"}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"item_name",children:e.name}),Object(h.jsx)("td",{className:"item_price",children:String(e.price).replace(/\B(?=(\d{3})+(?!\d))/g,",")}),Object(h.jsx)("td",{className:"item_quantity",children:e.quantity}),Object(h.jsxs)("td",{className:"item_date",style:n,children:[Object(h.jsx)("span",{className:"main_text",children:t.getMonth()+1+"/"+t.getDate()}),i&&Object(h.jsx)("span",{className:"sub_text",children:"\uc785\uace0\uc608\uc815"})]})]},e.name)}))})]})]})})),F=(a(128),a(92)),L=a(161),P=a(172),z=a(170),E=a(175),M=a(174),G=a(166),T=a(167),J=a(22),W=a(169),H=[{key:"namuh",display:"\ub098\ubb34(NAMUH)",priority:0,color:"#00a383"},{key:"hankook",display:"\ud55c\uad6d\ud22c\uc790",priority:1,color:"#104e81"},{key:"mirae",display:"\ubbf8\ub798\uc5d0\uc14b",priority:2,color:"#e97f20"},{key:"kb",display:"KB\uc99d\uad8c",priority:3,color:"#f2b200"},{key:"shinhan",display:"\uc2e0\ud55c\uc54c\ud30c",priority:4,color:"#2e62da"},{key:"samsung",display:"\uc0bc\uc131\uc99d\uad8c",priority:5,color:"#14279b"}],K=Object(w.a)((function(e){return{paper:{boxSizing:"border-box",position:"absolute",width:"80%",maxWidth:"600px",backgroundColor:e.palette.background.paper,borderRadius:"10px",boxShadow:e.shadows[5],padding:e.spacing(2,2,1),top:"50%",left:"50%",transform:"translate(-50%, -50%)"},selectEmpty:{marginTop:e.spacing(1),marginBottom:e.spacing(3)},formTrading:{minWidth:120},formInput:{width:"100%",marginBottom:"10px"}}}));var R=Object(o.b)((function(e){return{store:e}}),null)((function(e){var t=e.setOpen,a=e.store,i=K(),c=Object(n.useState)(0),r=Object(S.a)(c,2),o=r[0],s=r[1],l=Object(n.useState)(""),u=Object(S.a)(l,2),d=u[0],b=u[1],p=Object(n.useState)(""),m=Object(S.a)(p,2),g=m[0],O=m[1],f=Object(n.useState)(""),x=Object(S.a)(f,2),y=x[0],v=x[1],k=Object(n.useState)(new Date),N=Object(S.a)(k,2),w=N[0],C=N[1],B=a.authenticate;return Object(h.jsx)("div",{className:i.paper,children:Object(h.jsxs)("form",{children:[Object(h.jsxs)(L.a,{className:i.formTrading,children:[Object(h.jsx)(P.a,{id:"trading-select-label",children:"\uc99d\uad8c\uacc4\uc88c"}),Object(h.jsx)(z.a,{labelId:"trading-select-label",id:"trading-select",value:o,onChange:function(e){s(e.target.value)},className:i.selectEmpty,required:!0,children:H.map((function(e,t){return Object(h.jsx)(E.a,{value:t,children:e.display},e.key)}))})]}),Object(h.jsxs)(L.a,{variant:"outlined",className:i.formInput,children:[Object(h.jsx)(P.a,{htmlFor:"name-input",children:"\uc885\ubaa9\uba85"}),Object(h.jsx)(M.a,{id:"name-input",value:d,onChange:function(e){b(e.target.value)},label:"Name",required:!0})]}),Object(h.jsxs)(L.a,{variant:"outlined",className:i.formInput,children:[Object(h.jsx)(P.a,{htmlFor:"price-input",children:"\ub2e8\uac00"}),Object(h.jsx)(M.a,{id:"price-input",value:g,onChange:function(e){O(e.target.value)},label:"Price",type:"number",required:!0})]}),Object(h.jsxs)(L.a,{variant:"outlined",className:i.formInput,children:[Object(h.jsx)(P.a,{htmlFor:"quantity-input",children:"\uc218\ub7c9"}),Object(h.jsx)(M.a,{id:"quantity-input",value:y,onChange:function(e){v(e.target.value)},label:"Quantity",type:"number"})]}),Object(h.jsx)(J.a,{utils:F.a,children:Object(h.jsx)(W.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:"Month/Day/Year",value:w,onChange:function(e){C(e)},KeyboardButtonProps:{"aria-label":"change date"},PopoverProps:{anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"}},className:i.formInput})}),Object(h.jsxs)(G.a,{children:[Object(h.jsx)(T.a,{color:"primary",onClick:function(){return t(!1)},children:"\ucde8\uc18c"}),Object(h.jsx)(T.a,{color:"primary",onClick:function(e){e.preventDefault();var a=H[o],n=j.collection("user").doc(B.user).collection("trading");n.doc(a.key).set({display:a.display,priority:a.priority,color:a.color}),n.doc(a.key).collection("items").doc(d).set({name:d,price:g,quantity:y,indate:w.valueOf()}),t(!1)},type:"submit",autoFocus:!0,children:"\ucd94\uac00"})]})]})})})),Q=Object(w.a)((function(){return{fav:{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",marginBottom:"30px"}}}));var X=Object(o.b)((function(e){return{store:e}}),(function(e){return{doLogout:function(){return e(v())}}}))((function(e){var t=e.history,a=e.store,i=e.doLogout,c=Q(),r=Object(n.useState)(!1),o=Object(S.a)(r,2),s=o[0],l=o[1],u=Object(n.useState)([]),d=Object(S.a)(u,2),p=d[0],m=d[1],g=a.authenticate;return g.isAuth||t.replace("/"),Object(n.useEffect)((function(){return j.collection("user").doc(null===g||void 0===g?void 0:g.user).collection("trading").orderBy("priority","asc").onSnapshot((function(e){m(e.docs.map((function(e){return{key:e.id,data:e.data()}})))}))}),[g]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("header",{children:Object(h.jsxs)("div",{className:"header_main",children:[Object(h.jsx)("span",{className:"username",children:g.user}),Object(h.jsxs)("div",{className:"logout",onClick:function(){b.signOut().then((function(){i(!1)}))},children:[Object(h.jsx)("span",{children:"Logout"}),Object(h.jsx)(_.a,{})]})]})}),Object(h.jsx)("div",{className:"main",children:p.map((function(e){return Object(h.jsx)(D,{trading:e},e.key)}))}),Object(h.jsx)(C.a,{className:c.fav,color:"primary","aria-label":"add",onClick:function(){l(!0)},children:Object(h.jsx)(q.a,{})}),Object(h.jsx)(B.a,{open:s,onClose:function(){l(!1)},"aria-labelledby":"add-stock","aria-describedby":"add-stock",children:Object(h.jsx)("div",{children:Object(h.jsx)(R,{setOpen:l})})})]})}));var Z=function(){return Object(h.jsx)(s.a,{children:Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{exact:!0,path:"/",render:function(){return Object(h.jsx)(l.a,{to:"/login"})}}),Object(h.jsx)(l.b,{exact:!0,path:"/login",component:N}),Object(h.jsx)(l.b,{exact:!0,path:"/main",component:X})]})})};r.a.render(Object(h.jsx)(o.a,{store:k,children:Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(Z,{})})}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.f4fc42ae.chunk.js.map