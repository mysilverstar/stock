(this["webpackJsonpstock-manager"]=this["webpackJsonpstock-manager"]||[]).push([[0],{129:function(e,t,c){},133:function(e,t,c){},135:function(e,t,c){},136:function(e,t,c){},137:function(e,t,c){},138:function(e,t,c){},139:function(e,t,c){},141:function(e,t,c){},142:function(e,t,c){},143:function(e,t,c){},144:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(15),r=c.n(i),s=c(18),o=(c(129),c(22)),l=c(11),d=c(54),u=c(19),b=c(63);c(146),c(131);b.a.initializeApp({apiKey:"AIzaSyDrC-Fz80eWezeDNlscZ_gB9QooILNuJ6k",authDomain:"kistone-stock.firebaseapp.com",projectId:"kistone-stock",storageBucket:"kistone-stock.appspot.com",messagingSenderId:"602515706055",appId:"1:602515706055:web:271be76a0fdc249f6eeee2",measurementId:"G-1CFXPBLJZE"});b.a.auth.Auth.Persistence.LOCAL;var j={google:{get:new b.a.auth.GoogleAuthProvider,id:"google.com"}},p=b.a.auth(),m=b.a.firestore(),h=(c(133),c(3));var O=function(e){var t=e.type,c={google:{background:"#ffffff",color:"#757575",title:"Sign in with Google",titleShort:"Google",icon:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"},github:{background:"#333333",title:"Sign in with GitHub",titleShort:"GitHub",icon:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg"},facebook:{background:"#3b5998",title:"Sign in with Facebook",titleShort:"Facebook",icon:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg"}}[t],a=j[t];return Object(h.jsx)("div",{className:"signinButton",children:Object(h.jsxs)("button",{className:"firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-id-idp-button","data-provider-id":a.id,style:{backgroundColor:c.background},"data-upgraded":",MaterialButton",onClick:function(){p.signInWithRedirect(a.get).then((function(e){})).catch((function(e){alert(e)}))},children:[Object(h.jsx)("span",{className:"firebaseui-idp-icon-wrapper",children:Object(h.jsx)("img",{className:"firebaseui-idp-icon",alt:"",src:c.icon})}),Object(h.jsx)("span",{className:"firebaseui-idp-text firebaseui-idp-text-long",style:{color:c.color},children:c.title})]})})};c(135);var x=Object(s.b)((function(e){return{store:e}}),null)((function(e){var t=e.history,c=e.store,n=e.setLoading,i=c.authenticate;return console.log("Login START"),Object(a.useEffect)((function(){i.checked&&i.isAuth&&t.push("/main")}),[t,i]),Object(h.jsxs)("div",{className:"login_main",children:[Object(h.jsx)("div",{className:"title",children:"Stock Manager"}),Object(h.jsx)("div",{className:"button",children:Object(h.jsx)(O,{type:"google"})}),Object(h.jsx)("div",{className:"guest_button",onClick:function(){n(!0),p.signInWithEmailAndPassword("guest@guest.com","password")},children:"Guest Login"})]})})),f=(c(136),c(86)),g=Object(f.b)({name:"ReduxStore",initialState:{authenticate:{user:void 0,isAuth:!1,checked:!1},guestlock:!0},reducers:{logon:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{authenticate:{user:t.payload,isAuth:!!t.payload,checked:!0}})},testmode:function(e,t){return Object(o.a)(Object(o.a)({},e),{},{guestlock:!t.payload})}}}),v=Object(f.a)({reducer:g.reducer}),y=g.actions,k=y.logon,N=(y.testmode,v),S=(c(137),c(187)),C=[{key:"namuh",display:"\ub098\ubb34(NAMUH)",priority:0,color:"#00a383"},{key:"hankook",display:"\ud55c\uad6d\ud22c\uc790",priority:1,color:"#104e81"},{key:"mirae",display:"\ubbf8\ub798\uc5d0\uc14b",priority:2,color:"#e97f20"},{key:"kb",display:"KB\uc99d\uad8c",priority:3,color:"#f2b200"},{key:"shinhan",display:"\uc2e0\ud55c\uc54c\ud30c",priority:4,color:"#2e62da"},{key:"samsung",display:"\uc0bc\uc131\uc99d\uad8c",priority:5,color:"#14279b"},{key:"sk",display:"SK\uc99d\uad8c",priority:6,color:"#e31937"}],w=c(173),q=c(176),I=c(188),T=c(189),A=c(178),_=c(179),E=c(180),B=Object(w.a)((function(e){return{paper:{boxSizing:"border-box",position:"absolute",width:"80%",maxWidth:"600px",backgroundColor:e.palette.background.paper,borderRadius:"10px",boxShadow:e.shadows[5],padding:e.spacing(2,2,1),top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#000"},formInput:{width:"100%",marginBottom:"10px"}}}));var D=function(e){var t=e.swipeItem,c=e.onConfirm,n=e.onCancel,i=B(),r=Object(a.useState)(t.price),s=Object(l.a)(r,2),o=s[0],d=s[1],u=Object(a.useState)({val:t.quantity,exceed:!1,empty:0===t.quantity}),b=Object(l.a)(u,2),j=b[0],p=b[1];return Object(h.jsxs)("div",{className:i.paper,children:[Object(h.jsx)("h3",{style:{fontSize:"20px",margin:"0 0 20px"},children:"\ub9e4\ub9e4 \uc815\ubcf4"}),Object(h.jsxs)("form",{children:[Object(h.jsxs)(q.a,{variant:"outlined",className:i.formInput,children:[Object(h.jsx)(I.a,{htmlFor:"name-input",children:"\uc885\ubaa9\uba85"}),Object(h.jsx)(T.a,{id:"name-input",value:t.key,label:"\uc885\ubaa9\uba85",disabled:!0})]}),Object(h.jsxs)(q.a,{variant:"outlined",className:i.formInput,children:[Object(h.jsx)(I.a,{htmlFor:"price-input",children:"\ub9e4\ub9e4\uac00"}),Object(h.jsx)(T.a,{id:"price-input",value:o,onChange:function(e){d(e.target.value)},label:"\ub9e4\ub9e4\uac00",type:"number",required:!0})]}),Object(h.jsxs)(q.a,{variant:"outlined",className:i.formInput,children:[Object(h.jsx)(I.a,{error:j.exceed||j.empty,htmlFor:"quantity-input",children:"\uc218\ub7c9"}),Object(h.jsx)(T.a,{id:"quantity-input",value:j.val,onChange:function(e){var c=e.target.value;p({val:c,exceed:Number(c)>Number(t.quantity),empty:0===Number(c)})},label:"\uc218\ub7c9",type:"number",required:!0,error:j.exceed||j.empty}),j.empty&&Object(h.jsx)(A.a,{error:!0,id:"accountId-error",children:"\ub9e4\ub9e4\uc218\ub7c9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),j.exceed&&Object(h.jsx)(A.a,{error:!0,id:"accountId-error",children:"\ubcf4\uc720\uc218\ub7c9\uc744 \ucd08\uacfc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."})]}),Object(h.jsxs)(_.a,{children:[Object(h.jsx)(E.a,{color:"primary",onClick:n,children:"\ucde8\uc18c"}),Object(h.jsx)(E.a,{color:"primary",onClick:function(e){e.preventDefault(),j.exceed||j.empty||c({key:t.key,price:t.price,quantity:t.quantity,indate:t.indate,sellquantity:Number(j.val),sellprice:Number(o),backupAll:t.quantity===Number(j.val)})},type:"submit",children:"\ud655\uc778"})]})]})]})};c(138);function F(e){var t=e.tradingKey,c=e.item,n=e.handleItemSelect,i=e.store.authenticate,r=Object(a.useRef)(!1),s=Object(a.useState)(null),d=Object(l.a)(s,2),u=d[0],b=d[1],j=Object(a.useState)(null),p=Object(l.a)(j,2),O=p[0],x=p[1],f=Object(a.useState)(!1),g=Object(l.a)(f,2),v=g[0],y=g[1];Object(a.useEffect)((function(){return r.current=!0,function(){r.current=!1}}),[]);var k=function(e){var t=new Date(e.indate);t.setHours(9,0,0,0);var c=((new Date).getTime()-t.getTime())/864e5,a={color:"gray"},n=0;return c>=0&&c<1?(a={color:"chartreuse"},n=1):c>=-2&&c<0?(a={color:"red"},n=2):c<-2&&(a={color:"darkgreen"}),{ddayState:n,changeStyle:a,displayDate:t.getMonth()+1+"/"+t.getDate()}}(c),N=k.ddayState,w=k.changeStyle,q=k.displayDate,I=Object(a.useCallback)((function(){if(O){var e=m.collection("user").doc(i.user),c=e.collection("trading").doc(t).collection("items").doc(O.key),a=e.collection("backup").doc(t),n=a.collection("items").doc(O.key),s=C.find((function(e){return e.key===t}));m.runTransaction((function(e){return e.get(n).then((function(t){var i=t.data();if(e.set(a,{display:s.display,priority:s.priority,color:s.color}),t.exists){var r=(i.sellprice*i.quantity+O.sellprice*O.sellquantity)/(i.quantity+O.sellquantity);e.update(n,{sellprice:Number(r.toFixed(0)),quantity:i.quantity+O.sellquantity,outdate:(new Date).valueOf()})}else e.set(n,{name:O.key,price:O.price,sellprice:O.sellprice,quantity:O.sellquantity,indate:O.indate,outdate:(new Date).valueOf()});O.backupAll?e.delete(c):e.update(c,{quantity:O.quantity-O.sellquantity})}))})).then((function(){console.log("Transaction successfully committed!"),r.current&&x(null)})).catch((function(e){console.log("Transaction failed: ",e),r.current&&x(null)}))}}),[t,i,O]),T=function(e){var t=e.clientX;return t||(t=e.touches[0].screenX),Number(t.toFixed())},A=Object(a.useCallback)((function(e){Math.abs(T(e)-(null===u||void 0===u?void 0:u.startX))>10||(e.currentTarget.setAttribute("class","tr selected"),n({target:e.currentTarget,tradingKey:t}),e.stopPropagation())}),[t,n,u]),_=Object(a.useCallback)((function(e){b({target:e.currentTarget,key:e.currentTarget.children[0].innerText,price:Number(e.currentTarget.children[1].textContent.replace(",","")),quantity:Number(e.currentTarget.children[2].textContent),indate:Number(e.currentTarget.children[3].getAttribute("originaldate")),startX:T(e),dx:T(e)})}),[]),E=Object(a.useCallback)((function(e){if(u){var t=T(e),c=u.startX>t?t:u.startX;b(Object(o.a)(Object(o.a)({},u),{},{dx:c}))}}),[u]),B=Object(a.useCallback)((function(e){u&&(u.startX-u.dx>100?y(!0):b(null))}),[u]),F=Object(a.useCallback)((function(e){O.backupAll&&"hiderow"===e.animationName?(e.currentTarget.parentElement.setAttribute("style","display: none"),I(),b(null)):O.backupAll||"swipeout"!==e.animationName||(e.currentTarget.setAttribute("class","tr"),I(),b(null))}),[O,I]),R=Object(a.useCallback)((function(e){x(e),y(!1),u.quantity===e.quantity?u.target.setAttribute("class","tr swipeouthide"):u.target.setAttribute("class","tr swipeout")}),[u]),M=Object(a.useCallback)((function(){y(!1),b(null)}),[]);return Object(h.jsxs)("div",{className:"tableitem",children:[Object(h.jsx)("div",{className:"tr-bg",children:"\ubcf4\uad00"}),Object(h.jsxs)("div",{className:"tr",onClick:A,onTouchStart:_,onTouchMove:E,onTouchEnd:B,onMouseDown:_,onMouseMove:E,onMouseUpCapture:B,onAnimationEnd:F,style:(null===u||void 0===u?void 0:u.key)===c.name?{left:"".concat(u.dx-u.startX,"px")}:{},children:[Object(h.jsx)("div",{className:"item stock_name",children:c.name}),Object(h.jsx)("div",{className:"item stock_price",children:String(c.price).replace(/\B(?=(\d{3})+(?!\d))/g,",")}),Object(h.jsx)("div",{className:"item stock_quantity",children:c.quantity}),Object(h.jsxs)("div",{className:"item stock_indate",style:w,originaldate:c.indate,children:[Object(h.jsx)("span",{className:"main_text",children:q}),N>0&&Object(h.jsx)("span",{className:"sub_text",style:{color:"inherit"},children:1===N?"\uc785\uace0\uc644\ub8cc":"\uc785\uace0\uc608\uc815"})]})]}),Object(h.jsx)(S.a,{open:v,onClose:function(){return y(!1)},"aria-labelledby":"add-stock","aria-describedby":"add-stock",children:Object(h.jsx)("div",{children:Object(h.jsx)(D,{swipeItem:u,onConfirm:R,onCancel:M})})})]})}var R=Object(s.b)((function(e){return{store:e}}),null)(n.a.memo(F));var M=Object(s.b)((function(e){return{store:e}}),null)((function(e){var t=e.trading,c=e.store,n=e.handleItemSelect,i=t.key,r=t.data,s=r.color,o=r.display,d=c.authenticate,u=Object(a.useState)([]),b=Object(l.a)(u,2),j=b[0],p=b[1];return Object(a.useEffect)((function(){return m.collection("user").doc(d.user).collection("trading").doc(i).collection("items").orderBy("indate","desc").onSnapshot((function(e){e.size>0?p(e.docs.map((function(e){return e.data()}))):m.collection("user").doc(d.user).collection("trading").doc(i).delete()}))}),[d,i]),Object(h.jsxs)("div",{className:"stocktable",children:[Object(h.jsx)("div",{className:"table_title",style:{color:s},children:Object(h.jsx)("strong",{children:o})}),Object(h.jsxs)("div",{className:"table",children:[Object(h.jsx)("div",{className:"thead",children:Object(h.jsxs)("div",{className:"tr",children:[Object(h.jsx)("div",{className:"stock_name",children:"\uc885\ubaa9\uba85"}),Object(h.jsx)("div",{className:"stock_price",children:"\ub2e8\uac00"}),Object(h.jsx)("div",{className:"stock_quantity",children:"\uc218\ub7c9"}),Object(h.jsx)("div",{className:"stock_indate",children:"\uc0c1\uc7a5\uc77c"})]})}),Object(h.jsx)("div",{className:"tbody",children:j.map((function(e){return Object(h.jsx)(R,{tradingKey:i,item:e,handleItemSelect:n},e.name)}))})]})]})})),z=c(102),L=c(186),K=c(191),P=c(25),X=c(185),W=Object(w.a)((function(e){return{paper:{boxSizing:"border-box",position:"absolute",width:"80%",maxWidth:"600px",backgroundColor:e.palette.background.paper,borderRadius:"10px",boxShadow:e.shadows[5],padding:e.spacing(2,2,1),top:"50%",left:"50%",transform:"translate(-50%, -50%)"},selectEmpty:{marginTop:e.spacing(1),marginBottom:e.spacing(3)},formTrading:{minWidth:120},formInput:{width:"100%",marginBottom:"10px"}}}));var G=Object(s.b)((function(e){return{store:e}}),null)((function(e){var t=e.setOpen,c=e.store,n=e.selectedItem,i=e.handleItemSelect,r=0,s="",o="",d="",u=new Date;n&&(C.forEach((function(e,t){e.key===n.tradingKey&&(r=t)})),s=n.target.children[0].textContent,o=n.target.children[1].textContent.replace(",",""),d=n.target.children[2].textContent,u=new Date(Number(n.target.children[3].getAttribute("originaldate"))));var b=W(),j=Object(a.useState)(r),p=Object(l.a)(j,2),O=p[0],x=p[1],f=Object(a.useState)(s),g=Object(l.a)(f,2),v=g[0],y=g[1],k=Object(a.useState)(o),N=Object(l.a)(k,2),S=N[0],w=N[1],A=Object(a.useState)(d),B=Object(l.a)(A,2),D=B[0],F=B[1],R=Object(a.useState)(u),M=Object(l.a)(R,2),G=M[0],U=M[1],H=c.authenticate,J=!!n;return Object(h.jsx)("div",{className:b.paper,children:Object(h.jsxs)("form",{children:[Object(h.jsxs)(q.a,{className:b.formTrading,children:[Object(h.jsx)(I.a,{id:"trading-select-label",children:"\uc99d\uad8c\uacc4\uc88c"}),Object(h.jsx)(L.a,{labelId:"trading-select-label",id:"trading-select",value:O,onChange:function(e){x(e.target.value)},className:b.selectEmpty,required:!0,disabled:J,children:C.map((function(e,t){return Object(h.jsx)(K.a,{value:t,children:e.display},e.key)}))})]}),Object(h.jsxs)(q.a,{variant:"outlined",className:b.formInput,children:[Object(h.jsx)(I.a,{htmlFor:"name-input",children:"\uc885\ubaa9\uba85"}),Object(h.jsx)(T.a,{id:"name-input",value:v,onChange:function(e){y(e.target.value)},label:"\uc885\ubaa9\uba85",required:!0,disabled:J})]}),Object(h.jsxs)(q.a,{variant:"outlined",className:b.formInput,children:[Object(h.jsx)(I.a,{htmlFor:"price-input",children:"\ub2e8\uac00"}),Object(h.jsx)(T.a,{id:"price-input",value:S,onChange:function(e){w(e.target.value)},label:"\ub2e8\uac00",type:"number"})]}),Object(h.jsxs)(q.a,{variant:"outlined",className:b.formInput,children:[Object(h.jsx)(I.a,{htmlFor:"quantity-input",children:"\uc218\ub7c9"}),Object(h.jsx)(T.a,{id:"quantity-input",value:D,onChange:function(e){F(e.target.value)},label:"\uc218\ub7c9",type:"number"})]}),Object(h.jsx)(P.a,{utils:z.a,children:Object(h.jsx)(X.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:"\uc0c1\uc7a5\uc77c(Month/Day/Year)",value:G,onChange:function(e){U(e)},KeyboardButtonProps:{"aria-label":"change date"},PopoverProps:{anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"}},className:b.formInput})}),Object(h.jsxs)(_.a,{children:[Object(h.jsx)(E.a,{color:"primary",onClick:function(){return t(!1)},children:"\ucde8\uc18c"}),Object(h.jsx)(E.a,{color:"primary",onClick:function(e){if(e.preventDefault(),c.guestlock&&"guest@guest.com"===H.user)return alert("please sign-in with private account"),t(!1),void i(null);var a=C[O],n=m.collection("user").doc(H.user).collection("trading");n.doc(a.key).set({display:a.display,priority:a.priority,color:a.color}),n.doc(a.key).collection("items").doc(v).set({name:v,price:Number(S),quantity:Number(D),indate:G.valueOf()}).catch((function(e){console.error("Error adding document: ",e)})),t(!1),i(null)},type:"submit",autoFocus:!0,children:n?"\uc218\uc815":"\ucd94\uac00"})]})]})})})),U=c(184),H=c(95),J=c.n(H),Y=c(96),Z=c.n(Y),Q=c(97),V=c.n(Q),$=c(98),ee=c.n($),te=c(76),ce=c.n(te),ae=c(77),ne=Object(w.a)((function(e){return{paper:{boxSizing:"border-box",position:"absolute",width:"80%",maxWidth:"600px",backgroundColor:e.palette.background.paper,borderRadius:"10px",boxShadow:e.shadows[5],padding:e.spacing(2,3,1),top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"black"}}}));var ie=Object(s.b)((function(e){return{store:e}}),null)((function(e){var t=e.setOpen,c=e.store,a=e.selectedItem,n=e.handleItemSelect,i=e.backup;a||t(!1);var r=null===a||void 0===a?void 0:a.target.children[0].innerText,s=ne(),o=c.authenticate;return Object(h.jsxs)("div",{className:s.paper,children:[Object(h.jsx)("h3",{id:"simple-modal-title",children:"\uc0ad\uc81c"}),Object(h.jsx)("div",{style:{marginBottom:"20px"},children:"\uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),Object(h.jsxs)(_.a,{children:[Object(h.jsx)(E.a,{color:"primary",onClick:function(){return t(!1)},children:"\ucde8\uc18c"}),Object(h.jsx)(E.a,{color:"primary",onClick:function(){if(c.guestlock&&"guest@guest.com"===o.user)return alert("please sign-in with private account"),t(!1),void n(null);m.collection("user").doc(o.user).collection(i?"backup":"trading").doc(a.tradingKey).collection("items").doc(r).delete().catch((function(e){console.error("Error removing document: ",e)})),t(!1),n(null)},type:"submit",autoFocus:!0,children:"\uc0ad\uc81c"})]})]})})),re=c(94),se=c.n(re);c(139);var oe=function(){return Object(h.jsx)("div",{className:"loading-area",children:Object(h.jsx)(se.a,{type:"spinningBubbles",color:"gray",height:100,width:100})})},le=Object(w.a)((function(e){return{fab:{},fabEdit:{color:e.palette.common.white,backgroundColor:ae.a[500],"&:hover":{backgroundColor:ae.a[600]}},icon:{color:"gray",fontSize:30,position:"absolute",left:"20px",top:"50%",transform:"translateY(-50%)"}}}));var de=Object(s.b)((function(e){return{store:e}}),(function(e){return{setUser:function(t){return e(k(t))}}}))((function(e){var t,c=e.history,n=e.store,i=e.setUser,r=e.setLoading;console.log("Main START");var s=le(),o=n.authenticate,u=Object(a.useState)(!1),b=Object(l.a)(u,2),j=b[0],O=b[1],x=Object(a.useState)(!1),f=Object(l.a)(x,2),g=f[0],v=f[1],y=Object(a.useState)([]),k=Object(l.a)(y,2),N=k[0],C=k[1],w=Object(a.useState)(void 0),q=Object(l.a)(w,2),I=q[0],T=q[1],A=Object(a.useState)(!0),_=Object(l.a)(A,2),E=_[0],B=_[1];Object(a.useEffect)((function(){return console.log("Main RENDERED"),o.checked&&!o.isAuth?(console.log("Main goRoot!!"),void c.replace("/")):m.collection("user").doc(o.user).collection("trading").orderBy("priority","asc").onSnapshot((function(e){C(e.docs.map((function(e){return{key:e.id,data:e.data()}}))),setTimeout((function(){r(!1),B(!1)}),500)}))}),[o,c,r]);var D=function(){O(!0)},F=Object(a.useCallback)((function(e){null===I||void 0===I||I.target.setAttribute("class","tr"),(null===I||void 0===I?void 0:I.target)!==(null===e||void 0===e?void 0:e.target)?T(e):T(null)}),[I]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("header",{children:Object(h.jsxs)("div",{className:"header_main",children:[Object(h.jsx)(d.b,{to:"/backup",children:Object(h.jsx)(J.a,{className:s.icon})}),Object(h.jsx)(d.b,{to:"/ipolist",target:"_blank",rel:"noopener noreferrer",children:Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("span",{className:"main-title",children:"Stock Manager"}),Object(h.jsx)("span",{className:"sub-title",children:"@"+(null===(t=o.user)||void 0===t?void 0:t.split("@")[0])})]})}),Object(h.jsxs)("div",{className:"logout",onClick:function(){p.signOut().then((function(){i(void 0)}))},children:[Object(h.jsx)("span",{children:"Logout"}),Object(h.jsx)(Z.a,{})]})]})}),E&&Object(h.jsx)(oe,{}),Object(h.jsx)("div",{className:"main",onClick:function(){F(null)},children:N.map((function(e){return Object(h.jsx)(M,{trading:e,handleItemSelect:F},e.key)}))}),Object(h.jsx)("div",{className:I?"fab-area unselect fadeout":"fab-area unselect fadein",children:Object(h.jsx)(U.a,{className:s.fab,color:"primary","aria-label":"add",onClick:D,children:Object(h.jsx)(V.a,{})})}),void 0!==I&&Object(h.jsxs)("div",{className:I?"fab-area select slidein":"fab-area select slideout",children:[Object(h.jsx)(U.a,{className:s.fabEdit,"aria-label":"edit",onClick:D,children:Object(h.jsx)(ee.a,{})}),Object(h.jsx)(U.a,{className:s.fab,color:"secondary","aria-label":"delete",onClick:function(){v(!0)},children:Object(h.jsx)(ce.a,{})})]}),Object(h.jsx)(S.a,{open:j,onClose:function(){O(!1)},"aria-labelledby":"add-stock","aria-describedby":"add-stock",children:Object(h.jsx)("div",{children:Object(h.jsx)(G,{setOpen:O,selectedItem:I,handleItemSelect:F})})}),Object(h.jsx)(S.a,{open:g,onClose:function(){v(!1)},"aria-labelledby":"del-stock","aria-describedby":"del-stock",children:Object(h.jsx)("div",{children:Object(h.jsx)(ie,{setOpen:v,selectedItem:I,handleItemSelect:F})})})]})})),ue=(c(141),c(71));c(142);var be=Object(s.b)((function(e){return{store:e}}),null)((function(e){var t=e.trading,c=e.store,n=e.handleItemSelect,i=e.setFinance,r=t.key,s=t.data,d=s.color,u=s.display,b=c.authenticate,j=Object(a.useState)([]),p=Object(l.a)(j,2),O=p[0],x=p[1];Object(a.useEffect)((function(){return m.collection("user").doc(b.user).collection("backup").doc(r).collection("items").orderBy("outdate","desc").onSnapshot((function(e){if(e.size>0){var t=0,c=0;x(e.docs.map((function(e){var a=e.data();return t+=a.price*a.quantity,c+=a.sellprice*a.quantity,a}))),i((function(e){return Object(o.a)(Object(o.a)({},e),Object(ue.a)({},r,{price:t,sellprice:c}))}))}else m.collection("user").doc(b.user).collection("backup").doc(r).delete()}))}),[b,r,i]);var f=Object(a.useCallback)((function(e){e.currentTarget.setAttribute("class","tr selected"),n({target:e.currentTarget,tradingKey:r}),e.stopPropagation()}),[r,n]);return Object(h.jsxs)("div",{className:"historytable",children:[Object(h.jsx)("div",{className:"table_title",style:{color:d},children:Object(h.jsx)("strong",{children:u})}),Object(h.jsxs)("div",{className:"table",children:[Object(h.jsx)("div",{className:"thead",children:Object(h.jsxs)("div",{className:"tr",children:[Object(h.jsx)("div",{className:"head stock_name",children:"\uc885\ubaa9\uba85"}),Object(h.jsxs)("div",{className:"head stock_profit",children:[Object(h.jsx)("span",{className:"main_text",children:"\ud3c9\uac00\uc190\uc775"}),Object(h.jsx)("span",{className:"sub_text",children:"\uc190\uc775\ub960"})]}),Object(h.jsx)("div",{className:"head stock_quantity",children:"\uc218\ub7c9"}),Object(h.jsxs)("div",{className:"head stock_price",children:[Object(h.jsx)("span",{className:"main_text",children:"\ub9e4\ub9e4\uac00"}),Object(h.jsx)("span",{className:"sub_text",children:"\ub9e4\uc785\uac00"})]})]})}),Object(h.jsx)("div",{className:"tbody",children:O.map((function(e){var t=e.sellprice,c=e.price,a=e.quantity,n=(t-c)*a,i=(t-c)/c*100,r={color:"white"};return n>0?r={color:"#d24f45"}:n<0&&(r={color:"#1261c4"}),Object(h.jsxs)("div",{className:"tr",onClick:f,children:[Object(h.jsx)("div",{className:"item stock_name",children:e.name}),Object(h.jsxs)("div",{className:"item stock_profit",style:r,children:[Object(h.jsx)("span",{className:"main_text",children:n.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,",")}),Object(h.jsx)("span",{className:"sub_text",children:i.toFixed(2)+" %"})]}),Object(h.jsx)("div",{className:"item stock_quantity",children:a}),Object(h.jsxs)("div",{className:"item stock_price",children:[Object(h.jsx)("span",{className:"main_text",style:r,children:String(t).replace(/\B(?=(\d{3})+(?!\d))/g,",")}),Object(h.jsx)("span",{className:"sub_text",style:{color:"gray"},children:String(c).replace(/\B(?=(\d{3})+(?!\d))/g,",")})]})]},e.name)}))})]})]})})),je=c(99),pe=c.n(je),me=c(100),he=c.n(me),Oe=c(101),xe=c.n(Oe),fe=Object(w.a)((function(e){return{paper:{boxSizing:"border-box",position:"absolute",width:"80%",maxWidth:"600px",backgroundColor:e.palette.background.paper,borderRadius:"10px",boxShadow:e.shadows[5],padding:e.spacing(2,3,1),top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"black"}}}));var ge=Object(s.b)((function(e){return{store:e}}),null)((function(e){var t=e.setOpen,c=e.store,a=e.selectedItem,n=e.handleItemSelect;a||t(!1);var i=fe(),r=c.authenticate;return Object(h.jsxs)("div",{className:i.paper,children:[Object(h.jsx)("h3",{id:"simple-modal-title",children:"\ubcf5\uc6d0"}),Object(h.jsx)("div",{style:{marginBottom:"20px"},children:"\ubcf5\uc6d0 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),Object(h.jsxs)(_.a,{children:[Object(h.jsx)(E.a,{color:"primary",onClick:function(){return t(!1)},children:"\ucde8\uc18c"}),Object(h.jsx)(E.a,{color:"primary",onClick:function(){if(c.guestlock&&"guest@guest.com"===r.user)return alert("please sign-in with private account"),t(!1),void n(null);var e=a.tradingKey,i=a.target.children[0].textContent,s=m.collection("user").doc(r.user),o=s.collection("trading").doc(e),l=o.collection("items").doc(i),d=s.collection("backup").doc(e).collection("items").doc(i),u=C.find((function(t){return t.key===e}));m.runTransaction((function(e){return e.get(d).then((function(t){var c=t.data();return e.delete(d),c}))})).then((function(e){console.log("Transaction successfully committed!"),m.runTransaction((function(t){return t.get(l).then((function(c){var a=c.data();if(t.set(o,{display:u.display,priority:u.priority,color:u.color}),c.exists)t.update(l,{quantity:a.quantity+e.quantity});else{var n=e.name,i=e.price,r=e.quantity,s=e.indate;t.set(l,{name:n,price:i,quantity:r,indate:s})}}))}))})).catch((function(e){console.log("Transaction failed: ",e)})),t(!1),n(null)},type:"submit",autoFocus:!0,children:"\ubcf5\uc6d0"})]})]})}));c(143);var ve=function(e){var t=e.finance,c=Object(a.useMemo)((function(){var e=0,c=0;for(var a in t){var n=t[a];e+=n.price,c+=n.sellprice}return{profit:c-e,profitRatio:(c-e)/e*100}}),[t]),n=c.profit,i=c.profitRatio,r={color:"white"};return(n>0||n<0)&&(r={color:"#d24f45"}),Object(h.jsxs)("div",{className:"profittable",children:[Object(h.jsxs)("div",{className:"tr",children:[Object(h.jsx)("div",{className:"th",children:"\ucd1d\ud3c9\uac00\uc190\uc775"}),Object(h.jsx)("div",{className:"td",style:r,children:String(n).replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),Object(h.jsxs)("div",{className:"tr",children:[Object(h.jsx)("div",{className:"th",children:"\ucd1d\ud3c9\uac00\uc218\uc775\ub960"}),Object(h.jsxs)("div",{className:"td",style:r,children:[i.toFixed(2),"%"]})]})]})},ye=Object(w.a)({fab:{},icon:{fontSize:30,position:"absolute",left:"20px",top:"50%",transform:"translateY(-50%)"},empty:{fill:"gray",fontSize:100}});var ke=Object(s.b)((function(e){return{store:e}}),null)((function(e){var t=e.history,c=e.store,n=e.setLoading;console.log("Backup START");var i=ye(),r=c.authenticate,s=Object(a.useState)([]),o=Object(l.a)(s,2),u=o[0],b=o[1],j=Object(a.useState)(!1),p=Object(l.a)(j,2),O=p[0],x=p[1],f=Object(a.useState)(!1),g=Object(l.a)(f,2),v=g[0],y=g[1],k=Object(a.useState)(void 0),N=Object(l.a)(k,2),C=N[0],w=N[1],q=Object(a.useState)(!0),I=Object(l.a)(q,2),T=I[0],A=I[1],_=Object(a.useState)({}),E=Object(l.a)(_,2),B=E[0],D=E[1];Object(a.useEffect)((function(){return console.log("Backup RENDERED"),r.checked&&!r.isAuth?(console.log("Backup goRoot!!"),void t.replace("/")):m.collection("user").doc(r.user).collection("backup").orderBy("priority","asc").onSnapshot((function(e){b(e.docs.map((function(e){return{key:e.id,data:e.data()}}))),setTimeout((function(){n(!1),A(!1)}),500)}))}),[r,t,n]);var F=Object(a.useCallback)((function(e){null===C||void 0===C||C.target.setAttribute("class","tr"),(null===C||void 0===C?void 0:C.target)!==(null===e||void 0===e?void 0:e.target)?w(e):w(null)}),[C]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("header",{children:Object(h.jsxs)("div",{className:"header_backup",children:[Object(h.jsx)(d.b,{to:"/main",children:Object(h.jsx)(pe.a,{className:i.icon})}),Object(h.jsx)("div",{className:"title",children:Object(h.jsx)("span",{className:"main-title",children:"\ub9e4\ub9e4\uc190\uc775"})})]})}),T&&Object(h.jsx)(oe,{}),Object(h.jsxs)("div",{className:"backup",onClick:function(){F(null)},children:[0===u.length&&Object(h.jsxs)("div",{className:"backup-empty",children:[Object(h.jsx)(he.a,{className:i.empty}),Object(h.jsx)("p",{children:"\ubc31\uc5c5\ub41c \uc790\ub8cc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})]}),u.length>0&&Object(h.jsx)(ve,{finance:B}),u.map((function(e){return Object(h.jsx)(be,{trading:e,handleItemSelect:F,setFinance:D},e.key)}))]}),void 0!==C&&Object(h.jsxs)("div",{className:C?"fab-area select slidein":"fab-area select slideout",children:[Object(h.jsx)(U.a,{className:i.fab,color:"primary","aria-label":"restore",onClick:function(){x(!0)},children:Object(h.jsx)(xe.a,{})}),Object(h.jsx)(U.a,{className:i.fab,color:"secondary","aria-label":"delete",onClick:function(){y(!0)},children:Object(h.jsx)(ce.a,{})})]}),Object(h.jsx)(S.a,{open:O,onClose:function(){x(!1)},"aria-labelledby":"restore-stock","aria-describedby":"restore-stock",children:Object(h.jsx)("div",{children:Object(h.jsx)(ge,{setOpen:x,selectedItem:C,handleItemSelect:F,backup:!0})})}),Object(h.jsx)(S.a,{open:v,onClose:function(){y(!1)},"aria-labelledby":"del-stock","aria-describedby":"del-stock",children:Object(h.jsx)("div",{children:Object(h.jsx)(ie,{setOpen:y,selectedItem:C,handleItemSelect:F,backup:!0})})})]})}));var Ne=Object(s.b)((function(e){return{store:e}}),(function(e){return{setUser:function(t){return e(k(t))}}}))((function(e){var t=e.store,c=e.setUser,n=t.authenticate;console.log("App START");var i=Object(a.useState)(!0),r=Object(l.a)(i,2),s=r[0],b=r[1];return Object(a.useEffect)((function(){return console.log("App RENDERED - registering"),p.onAuthStateChanged((function(e){console.log("App onAuthStateChanged",e),c(null===e||void 0===e?void 0:e.email),e||setTimeout((function(){b(!1)}),500)}))}),[c]),Object(h.jsxs)(d.a,{children:[s&&Object(h.jsx)(oe,{}),Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{exact:!0,path:"/",render:function(){return n.isAuth?Object(h.jsx)(u.a,{to:"/main"}):Object(h.jsx)(u.a,{to:"/login"})}}),Object(h.jsx)(u.b,{exact:!0,path:"/login",render:function(e){return Object(h.jsx)(x,Object(o.a)(Object(o.a)({},e),{},{setLoading:b}))}}),Object(h.jsx)(u.b,{exact:!0,path:"/main",render:function(e){return Object(h.jsx)(de,Object(o.a)(Object(o.a)({},e),{},{setLoading:b}))}}),Object(h.jsx)(u.b,{exact:!0,path:"/backup",render:function(e){return Object(h.jsx)(ke,Object(o.a)(Object(o.a)({},e),{},{setLoading:b}))}}),Object(h.jsx)(u.b,{exact:!0,path:"/ipolist",component:function(){return window.location.href="http://sereon.synology.me:38888/po/IPOlist",null}})]})]})}));r.a.render(Object(h.jsx)(s.a,{store:N,children:Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(Ne,{})})}),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.9c72d715.chunk.js.map