(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{148:function(e,t,a){e.exports=a(169)},153:function(e,t,a){},154:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},155:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l),c=(a(153),a(154),a(155),a(79)),i=a(65),u=a(48),s=a(13),d=a(25),m=a(15),p=a(69),f=a(70),g=a(42),b=a.n(g),h=(a(157),a(159),a(170),a(66)),v=a(103),E=a(71),O={user:N&&N.user};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET":e=Object(E.set)(e,t.payload.key,t.payload.value);break;case"CLEAR":e=O}return console.log("STORE:: ",t,t.value,e),e},y=Object(h.c)(j,Object(h.a)(v.a));function w(e){return S("user",e)}function k(e){return console.error(e),S("error",e)}var S=function(e,t){return{type:"SET",payload:{key:e,value:t}}},C=function(e,t){return t(k(e))},x=function(e,t){N.getStoreRef("/products/").on("value",(function(t){var a;e((a=t.val(),S("products",a)))}),C)};b.a.initializeApp({apiKey:"AIzaSyA6ZvIfSNbAQ4cPi85BdWkftAjRzlYzUfY",authDomain:"dashboard-152b8.firebaseapp.com",databaseURL:"https://dashboard-152b8.firebaseio.com",projectId:"dashboard-152b8",storageBucket:"dashboard-152b8.appspot.com",messagingSenderId:"965967275969",appId:"1:965967275969:web:1c2abccbed760ec8dcb140",measurementId:"G-S1CEDL3LSB"});var P=b.a.database(),R=b.a.storage(),I=function(){function e(){Object(p.a)(this,e)}return Object(f.a)(e,null,[{key:"paths",value:function(){var e=this;return{store:function(){return"/stores/"+e.getStore()},productImage:function(t){return e.getStore()+"/products/images/"+t}}}},{key:"resetListeners",value:function(){P.ref().off(),this.user&&x(y.dispatch,y.getState)}},{key:"getPlaceholderImagePath",value:function(){return R.ref("images/").child("Placeholder.png").toString()}},{key:"getStoreImagePath",value:function(e){return R.ref().child(this.paths().productImage(e)).getDownloadURL()}},{key:"uploadStoreImage",value:function(e,t){return R.ref().child(this.paths().productImage(e)).put(t)}},{key:"getRef",value:function(e){return P.ref(e)}},{key:"getStoreRef",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return P.ref(this.paths().store()+e)}},{key:"getStore",value:function(){var e;return Object.keys((null===(e=this.user)||void 0===e?void 0:e.stores)||{})[0]}},{key:"fetchStore",value:function(e){var t=e.uid;return this.getRef("/users/"+t).once("value")}},{key:"deleteProducts",value:function(e){var t={};return e.forEach((function(e){return t=Object(E.set)(t,e,null)})),this.getStoreRef().child("products").update(t)}},{key:"writeNewProduct",value:function(e){var t=this.getStoreRef().child("products").push().key;return t||console.error("Could not get new key for update"),this.getStoreRef().child("products").update(Object(m.a)({},t||"error",e))}},{key:"addMemberToStore",value:function(e,t){return this.getRef("/stores/"+e+"/members").update(Object(m.a)({},t,!0))}},{key:"addMember",value:function(e,t){return this.addMemberToStore(e,t),this.getRef("/users").update(Object(m.a)({},t,{stores:Object(m.a)({},e,!0)}))}},{key:"signUp",value:function(e,t,a){var n=this;return b.a.auth().createUserWithEmailAndPassword(e,t).then((function(e){var t;n.addMember(a,(null===(t=b.a.auth().currentUser)||void 0===t?void 0:t.uid)||"error")})).catch((function(e){e.code;var t=e.message;alert(t),console.error(t)}))}},{key:"signIn",value:function(e,t){return b.a.auth().signInWithEmailAndPassword(e,t).catch((function(e){e.code;var t=e.message;alert(t),console.error(t)}))}},{key:"signOut",value:function(){return console.log("SIGN OUT"),b.a.auth().signOut().catch((function(e){var t=e.message;alert(t),console.error(t)}))}}]),e}();I.user=void 0,b.a.auth().onAuthStateChanged((function(e){e?I.fetchStore(e).then((function(t){var a=Object(d.a)({},e,{},t.val());I.user=a,y.dispatch(w(a)),I.resetListeners()})):(I.user=null,y.dispatch(w(null)),y.dispatch({type:"CLEAR"})),I.resetListeners()})),new I;var N=I,D=a(119),A=a(105),F=a(120),U=a(261),M=a(231),W=a(224),L=a(256),T=a(230),G=a(258),H=a(221),B=a(232),z=a(253),Y=a(75),q=a.n(Y),J=a(50),V=a(222),_=a(223);function K(){return r.a.createElement(J.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(H.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var Q=Object(V.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),Z=function(e){var t=Q();return r.a.createElement(_.a,{component:"main",maxWidth:"xs"},r.a.createElement(W.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(U.a,{className:t.avatar},r.a.createElement(q.a,null)),r.a.createElement(J.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(L.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(t){t.preventDefault(),e.setUsername(t.target.value)}}),r.a.createElement(L.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(t){t.preventDefault(),e.setPassword(t.target.value)}}),r.a.createElement(T.a,{control:r.a.createElement(G.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(M.a,{fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:e.signin},"Sign In"),r.a.createElement(B.a,{container:!0},r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(H.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(B.a,{item:!0},r.a.createElement(H.a,{href:"/signup",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(z.a,{mt:8},r.a.createElement(K,null)))},$=function(e){function t(){return Object(p.a)(this,t),Object(D.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.props.user?r.a.createElement("div",null):r.a.createElement(Z,this.props)}}]),t}(r.a.Component),X=a(29),ee=Object(X.b)((function(e){return{user:e.user}}))((function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),c=Object(s.a)(o,2),i=c[0],u=c[1];return r.a.createElement($,{user:N.user,signin:function(){N.signIn(i,a)},setPassword:l,setUsername:u})}));function te(){return r.a.createElement(J.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(H.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var ae=Object(V.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),ne=function(e){var t=ae();return r.a.createElement(_.a,{component:"main",maxWidth:"xs"},r.a.createElement(W.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(U.a,{className:t.avatar},r.a.createElement(q.a,null)),r.a.createElement(J.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(B.a,{container:!0,spacing:2},r.a.createElement(B.a,{item:!0,xs:12},r.a.createElement(L.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(t){t.preventDefault(),e.setUsername(t.target.value)}})),r.a.createElement(B.a,{item:!0,xs:12},r.a.createElement(L.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(t){t.preventDefault(),e.setPassword(t.target.value)}})),r.a.createElement(B.a,{item:!0,xs:12},r.a.createElement(L.a,{variant:"outlined",required:!0,fullWidth:!0,id:"store",label:"Store ID",name:"store",onChange:function(t){t.preventDefault(),e.setStore(t.target.value)}}))),r.a.createElement(M.a,{fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:e.signin},"Sign Up"),r.a.createElement(B.a,{container:!0,justify:"flex-end"},r.a.createElement(B.a,{item:!0},r.a.createElement(H.a,{href:"/",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(z.a,{mt:5},r.a.createElement(te,null)))},re=Object(X.b)((function(e){return{user:e.user}}))((function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),c=Object(s.a)(o,2),i=c[0],d=c[1],m=Object(n.useState)(""),p=Object(s.a)(m,2),f=p[0],g=p[1];return N.user?r.a.createElement(u.a,{to:"/"}):r.a.createElement(ne,{signin:function(){N.signUp(i,a,f)},setPassword:l,setUsername:d,setStore:g})})),le=a(237),oe=a(236),ce=a(260),ie=a(255),ue=a(172),se=a(111),de=a.n(se),me=a(229),pe=a(233),fe=a(234),ge=a(235),be=a(113),he=a.n(be),ve=a(110),Ee=a.n(ve),Oe=a(112),je=a.n(Oe),ye=a(238),we=a(259),ke=a(14),Se=Object(V.a)((function(e){return Object(we.a)({root:{display:function(e){return e.user?"flex":"none"}},drawer:Object(m.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(m.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(m.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}})})),Ce=Object(X.b)((function(e){return{user:e.user}}))((function(e){var t=e.container,a=Se({user:N}),n=Object(ke.a)(),l=r.a.useState(!1),o=Object(s.a)(l,2),c=o[0],u=o[1],d=function(){u(!c)},m=function(e){var t=e.text,a=e.url,n=e.Icon,l=e.onClick;return r.a.createElement(pe.a,{button:!0,component:i.b,key:t,to:a||"#",onClick:l},r.a.createElement(fe.a,null,n?r.a.createElement(n,null):r.a.createElement("div",null)),r.a.createElement(ge.a,{primary:t}))},p=r.a.createElement("div",null,r.a.createElement("div",{className:a.toolbar}),r.a.createElement(oe.a,null),r.a.createElement(me.a,null,r.a.createElement(m,{text:"Home",Icon:Ee.a,url:"/"}),r.a.createElement(m,{text:"Orders",Icon:de.a}),r.a.createElement(m,{text:"Products",Icon:je.a}),r.a.createElement(m,{text:"All Products",url:"/all_products"})),r.a.createElement(oe.a,null),r.a.createElement(me.a,null,r.a.createElement(m,{text:"Inventory"}),r.a.createElement(m,{text:"Customers"}),r.a.createElement(m,{text:"Log Out",onClick:N.signOut})));return r.a.createElement("div",{className:a.root},r.a.createElement(W.a,null),r.a.createElement(le.a,{position:"fixed",className:a.appBar},r.a.createElement(ye.a,null,r.a.createElement(ue.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:d,className:a.menuButton},r.a.createElement(he.a,null)),r.a.createElement(J.a,{variant:"h6",noWrap:!0},"Responsive drawer"))),r.a.createElement("nav",{className:a.drawer,"aria-label":"mailbox folders"},r.a.createElement(ie.a,{smUp:!0,implementation:"css"},r.a.createElement(ce.a,{container:t,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:c,onClose:d,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},p)),r.a.createElement(ie.a,{xsDown:!0,implementation:"css"},r.a.createElement(ce.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},p))))})),xe=a(20),Pe=a(240),Re=a(244),Ie=a(243),Ne=a(239),De=a(245),Ae=a(241),Fe=a(257),Ue=a(91),Me=a.n(Ue),We=a(93),Le=a.n(We),Te=a(92),Ge=a.n(Te),He=a(90),Be=a.n(He),ze=Object(V.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}})),Ye=function(e){var t=ze(),a=Object(ke.a)(),n=e.count,l=e.page,o=e.rowsPerPage,c=e.onChangePage;return r.a.createElement("div",{className:t.root},r.a.createElement(ue.a,{onClick:function(e){c(e,0)},disabled:0===l,"aria-label":"first page"},"rtl"===a.direction?r.a.createElement(Be.a,null):r.a.createElement(Me.a,null)),r.a.createElement(ue.a,{onClick:function(e){c(e,l-1)},disabled:0===l,"aria-label":"previous page"},"rtl"===a.direction?r.a.createElement(Ge.a,null):r.a.createElement(Le.a,null)),r.a.createElement(ue.a,{onClick:function(e){c(e,l+1)},disabled:l>=Math.ceil(n/o)-1,"aria-label":"next page"},"rtl"===a.direction?r.a.createElement(Le.a,null):r.a.createElement(Ge.a,null)),r.a.createElement(ue.a,{onClick:function(e){c(e,Math.max(0,Math.ceil(n/o)-1))},disabled:l>=Math.ceil(n/o)-1,"aria-label":"last page"},"rtl"===a.direction?r.a.createElement(Me.a,null):r.a.createElement(Be.a,null)))},qe=a(242),Je=a(265),Ve=a(3),_e=a(116),Ke=a.n(_e),Qe=a(123),Ze=a(9),$e=a(114),Xe=a.n($e),et=Object(V.a)((function(e){return{search:Object(m.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Ze.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Ze.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(m.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200})}})),tt=function(e){var t=e.preGlobalFilteredRows,a=e.globalFilter,n=e.setGlobalFilter,l=et(),o=t.length;return r.a.createElement("div",{className:l.search},r.a.createElement("div",{className:l.searchIcon},r.a.createElement(Xe.a,null)),r.a.createElement(Qe.a,{value:a||"",onChange:function(e){n(e.target.value||void 0)},placeholder:"".concat(o," records..."),classes:{root:l.inputRoot,input:l.inputInput},inputProps:{"aria-label":"search"}}))},at=a(264),nt=Object(V.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(Ze.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),rt=function(e){var t=nt(),a=e.numSelected,n=(e.addUserHandler,e.deleteUserHandler),l=e.preGlobalFilteredRows,o=e.setGlobalFilter,c=e.globalFilter;return r.a.createElement(ye.a,{className:Object(Ve.a)(t.root,Object(m.a)({},t.highlight,a>0))},a>0?r.a.createElement(J.a,{className:t.title,color:"inherit",variant:"subtitle1"},a," selected"):r.a.createElement(J.a,{className:t.title,variant:"h6",id:"tableTitle"}),a>0?r.a.createElement(at.a,{title:"Delete"},r.a.createElement(ue.a,{"aria-label":"delete",onClick:n},r.a.createElement(Ke.a,null))):r.a.createElement(tt,{preGlobalFilteredRows:l,globalFilter:c,setGlobalFilter:o}))},lt=a(63),ot=r.a.forwardRef((function(e,t){var a=e.indeterminate,n=Object(c.a)(e,["indeterminate"]),l=r.a.useRef(),o=t||l;return r.a.useEffect((function(){o.current.indeterminate=a}),[o,a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,Object.assign({ref:o},n)))})),ct=function(e){var t=e.columns,a=e.data,n=e.setData,l=e.updateMyData,o=e.skipPageReset,c=Object(lt.useTable)({columns:t,data:a,autoResetPage:!o,updateMyData:l},lt.useGlobalFilter,lt.useSortBy,lt.usePagination,lt.useRowSelect,(function(e){e.allColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return r.a.createElement("div",null,r.a.createElement(ot,t()))},Cell:function(e){var t=e.row;return r.a.createElement("div",null,r.a.createElement(ot,t.getToggleRowSelectedProps()))}}].concat(Object(xe.a)(e))}))})),i=c.getTableProps,u=c.headerGroups,s=c.prepareRow,d=c.page,m=c.gotoPage,p=c.setPageSize,f=c.preGlobalFilteredRows,g=c.setGlobalFilter,b=c.state,h=b.pageIndex,v=b.pageSize,E=b.selectedRowIds,O=b.globalFilter;return r.a.createElement(Ne.a,null,r.a.createElement(rt,{numSelected:Object.keys(E).length,deleteUserHandler:function(e){console.log("Remove",a,E);var t,r,l=(t=a,r=Object.keys(E).map((function(e){return parseInt(e,10)})),t.filter((function(e,t){return!r.includes(t)})));n(l),N.deleteProducts(Object.keys(E).map((function(e){return a[e].id}))).catch((function(e){return alert(e.message)}))},addUserHandler:function(e){var t=a.concat([e]);n(t)},preGlobalFilteredRows:f,setGlobalFilter:g,globalFilter:O}),r.a.createElement(Pe.a,i(),r.a.createElement(Ae.a,null,u.map((function(e){return r.a.createElement(qe.a,e.getHeaderGroupProps(),e.headers.map((function(e){return r.a.createElement(Ie.a,"selection"===e.id?e.getHeaderProps():e.getHeaderProps(e.getSortByToggleProps()),e.render("Header"),"selection"!==e.id?r.a.createElement(Je.a,{active:e.isSorted,direction:e.isSortedDesc?"desc":"asc"}):null)})))}))),r.a.createElement(Re.a,null,d.map((function(e,t){return s(e),r.a.createElement(qe.a,e.getRowProps(),e.cells.map((function(e){return r.a.createElement(Ie.a,e.getCellProps(),e.render("Cell"))})))}))),r.a.createElement(De.a,null,r.a.createElement(qe.a,null,r.a.createElement(Fe.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:a.length}],colSpan:3,count:a.length,rowsPerPage:v,page:h,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,t){m(t)},onChangeRowsPerPage:function(e){p(Number(e.target.value))},ActionsComponent:Ye})))))},it=Object(V.a)((function(e){return Object(we.a)({image:{width:140,display:"inline-block"},text:{display:"inline-block"}})})),ut=function(e){var t=e.cell,a=it(),n=(null===t||void 0===t?void 0:t.value)||t.row.original,l=n.image,o=n.name;return r.a.createElement("div",null,r.a.createElement("img",{src:l,className:a.image}),r.a.createElement(J.a,{className:a.text},o))},st=function(e){var t=e.cell;return r.a.createElement("div",null,t.value," in Stock")},dt=function(e){var t=e.products,a=r.a.useMemo((function(){return[{Header:"Product",accessor:"product",Cell:ut},{Header:"Inventory",accessor:"stock",Cell:st}]}),[]),l=r.a.useMemo((function(){return Object.entries(t||{}).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(d.a)({},n,{id:a})}))}),[t]),o=r.a.useState(l),c=Object(s.a)(o,2),i=c[0],u=c[1],p=r.a.useState(!1),f=Object(s.a)(p,2),g=f[0],b=f[1];Object(n.useEffect)((function(){var e=Object.values(t||{});i!=e&&u(e)}),[t]);return r.a.createElement("div",null,r.a.createElement(W.a,null),r.a.createElement(ct,{columns:a,data:l,setData:u,updateMyData:function(e,t,a){b(!0),u((function(n){return n.map((function(r,l){return l===e?Object(d.a)({},n[e],Object(m.a)({},t,a)):r}))}))},skipPageReset:g}))},mt=a(49),pt=a.n(mt),ft=a(80),gt=a(81),bt=a(247),ht=a(251),vt=a(249),Et=a(250),Ot=a(248),jt=a(252),yt=a(118),wt={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},kt={borderColor:"#2196f3"},St={borderColor:"#00e676"},Ct={borderColor:"#ff1744"},xt={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},Pt={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},Rt={display:"flex",minWidth:0,overflow:"hidden"},It={display:"block",width:"auto",height:"100%"},Nt=function(e){var t=e.setFiles,a=e.files,l=Object(n.useCallback)((function(e){t(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}),[]),o=Object(yt.a)({accept:"image/*",onDrop:l}),c=o.getRootProps,i=o.getInputProps,u=o.isDragActive,s=o.isDragAccept,m=o.isDragReject,p=Object(n.useMemo)((function(){return Object(d.a)({},wt,{},u?kt:{},{},s?St:{},{},m?Ct:{})}),[u,m]),f=a.map((function(e){return r.a.createElement("div",{style:Pt,key:e.name},r.a.createElement("div",{style:Rt},r.a.createElement("img",{src:e.preview,style:It})))}));return Object(n.useEffect)((function(){return function(){a.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[a]),r.a.createElement("section",{className:"container"},r.a.createElement("div",c({style:p}),r.a.createElement("input",i()),r.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")),r.a.createElement("aside",{style:xt},f[f.length-1]))},Dt=a(246),At={name:"",stock:0,image:N.getPlaceholderImagePath()},Ft=function(e){var t,a=Object(n.useState)(At),l=Object(s.a)(a,2),o=l[0],c=l[1],i=Object(n.useState)([]),u=Object(s.a)(i,2),p=u[0],f=u[1],g=Object(n.useState)(!1),b=Object(s.a)(g,2),h=b[0],v=b[1],E=e.addHandler,O=r.a.useState({addMultiple:!1}),j=Object(s.a)(O,2),y=j[0],w=j[1],k=function(){e.toggle(!1),w({addMultiple:!1})},S=function(){var t=Object(ft.a)(pt.a.mark((function t(a){var n;return pt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(gt.a)(p)){t.next=3;break}return t.next=3,N.uploadStoreImage(Object(gt.b)(p).name,Object(gt.b)(p));case 3:return t.next=5,x(p);case 5:n=t.sent,E(Object(d.a)({},o,{image:n})),console.log("STATE",Object(d.a)({},o,{image:n})),c(At),f([]),y.addMultiple?e.toggle(!0):e.toggle(!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(e){return function(){var t=Object(ft.a)(pt.a.mark((function t(a){var n;return pt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.target.value,t.next=3,c(Object(d.a)({},o,Object(m.a)({},e,n)));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(){var e=Object(ft.a)(pt.a.mark((function e(t){var a;return pt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=t[t.length-1],v(!0),e.prev=2,e.next=5,N.getStoreImagePath(t.name);case 5:return a=e.sent,e.next=8,c(Object(d.a)({},o,{image:a}));case 8:return console.log("URL",o),e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(2),alert(e.t0.message);case 15:v(!1);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,h&&r.a.createElement(Dt.a,null),r.a.createElement(bt.a,{open:e.open,onClose:k,"aria-labelledby":"form-dialog-title"},r.a.createElement(Ot.a,{id:"form-dialog-title"},"Add Product"),r.a.createElement(vt.a,null,r.a.createElement(Et.a,null,"Add new product to table."),r.a.createElement(J.a,null,"Product Image"),r.a.createElement(Nt,{setFiles:f,files:p}),r.a.createElement(L.a,{autoFocus:!0,margin:"dense",label:"Product Name",type:"text",fullWidth:!0,value:o.name,onChange:C("name")}),r.a.createElement(L.a,{margin:"dense",label:"Inventory",type:"number",fullWidth:!0,value:0===o.stock?void 0:o.stock,onChange:C("stock")})),r.a.createElement(ht.a,null,r.a.createElement(at.a,{title:"Add multiple"},r.a.createElement(jt.a,{checked:y.addMultiple,onChange:(t="addMultiple",function(e){w(Object(d.a)({},y,Object(m.a)({},t,e.target.checked)))}),value:"addMultiple",inputProps:{"aria-label":"secondary checkbox"}})),r.a.createElement(M.a,{onClick:k,color:"primary"},"Cancel"),r.a.createElement(M.a,{onClick:S,color:"primary"},"Add"))))},Ut=Object(V.a)((function(e){return Object(we.a)({title:{textAlign:"left",display:"inline-block",float:"left"},button:{float:"right"}})})),Mt=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],o=a[1],c=Ut();return r.a.createElement("div",null,r.a.createElement(J.a,{variant:"h3",className:c.title},"Products"),r.a.createElement(M.a,{color:"primary",variant:"contained",className:c.button,onClick:o.bind(null,!0)},"Add Product"),console.log("Props",e),r.a.createElement(dt,e),r.a.createElement(Ft,{addHandler:e.addNewProduct,open:l,toggle:o}))},Wt=Object(X.b)((function(e){return{user:e.user,products:e.products}}),(function(e){return{addNewProduct:function(t){return e(function(e){return function(t){return t(S("loading",!0)),N.writeNewProduct(e).catch((function(e){return t(k(e))})).finally((function(){return t(S("loading",!1))}))}}(t))}}}))((function(e){return console.log("container",e),r.a.createElement(Mt,e)})),Lt=Object(V.a)((function(e){return Object(we.a)({content:{flexGrow:1,padding:e.spacing(4),paddingLeft:function(e){return e.user?310:0},paddingTop:function(e){return e.user?100:0}}})})),Tt=function(e){var t=e.Component,a=e.path;return r.a.createElement(u.b,{path:a},r.a.createElement(t,null))},Gt=function(e){var t=e.Component,a=Object(c.a)(e,["Component"]);return r.a.createElement(u.b,Object.assign({},a,{render:function(e){return N.user?r.a.createElement(t,e):r.a.createElement(u.a,{to:"/"})}}))},Ht=function(e){var t=Lt(e);return r.a.createElement(i.a,null,e.user&&r.a.createElement(Ce,null),r.a.createElement("div",{className:t.content},r.a.createElement(u.d,null,r.a.createElement(Tt,{path:"/signup",Component:re}),r.a.createElement(Gt,{path:"/all_products",Component:Wt}),r.a.createElement(Tt,{path:"/",Component:ee}))))};var Bt=Object(X.b)((function(e){return{user:e.user}}))((function(e){var t=e.user;return r.a.createElement("div",{className:"App"},r.a.createElement(Ht,{user:t}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(X.a,{store:y},r.a.createElement(Bt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[148,1,2]]]);
//# sourceMappingURL=main.4e64b7e7.chunk.js.map