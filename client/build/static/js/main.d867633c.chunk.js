(this["webpackJsonpcomplete-react-course"]=this["webpackJsonpcomplete-react-course"]||[]).push([[0],{227:function(e,t,a){e.exports=a(455)},421:function(e,t,a){},422:function(e,t,a){},424:function(e,t,a){},425:function(e,t,a){},426:function(e,t,a){},427:function(e,t,a){},428:function(e,t,a){},429:function(e,t,a){},430:function(e,t,a){},431:function(e,t,a){},432:function(e,t,a){},433:function(e,t,a){},434:function(e,t,a){},451:function(e,t,a){},452:function(e,t,a){},453:function(e,t,a){},454:function(e,t,a){},455:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(86),l=a.n(c),i=a(26),o=(a(232),a(2)),s=a(222),u=a(46),m=a(58),p=a(28),d=a.n(p),f=a(7),E=a.n(f),h=a(4),v=a(21),b=(a(416),a(419),function(){var e=Object(v.a)(E.a.mark((function e(t,a){var n,r,c,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=y.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,l=new Date,e.prev=9,e.next=12,n.set(Object(h.a)({displayName:r,email:c,createdAt:l},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}());d.a.initializeApp({apiKey:"AIzaSyAByu0PbfC4ivc5XuMh_Tj3nbzppyGRbw8",authDomain:"crown-db-b1c97.firebaseapp.com",databaseURL:"https://crown-db-b1c97.firebaseio.com",projectId:"crown-db-b1c97",storageBucket:"crown-db-b1c97.appspot.com",messagingSenderId:"693624680939",appId:"1:693624680939:web:64bdeefa29dbdf4dfa69ae",measurementId:"G-6R40MGLKQ8"});var g=d.a.auth(),y=d.a.firestore(),O=new d.a.auth.GoogleAuthProvider;O.setCustomParameters({prompt:"select_account"});var N=d.a,w={user:null,collection:[],directory:[]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_USER":return Object(h.a)({},e,{user:t.user});case"UPDATE_COLLECTION":return Object(h.a)({},e,{collection:t.result});case"UPDATE_DIRECTORY":return Object(h.a)({},e,{directory:t.result});default:return e}},C=a(226),k={hidden:!0,cartItems:[],totalPrice:0},R=function(e,t){return e.cartItems.find((function(e){return e.id===t.payload.id}))?e.cartItems.map((function(e){return e.id===t.payload.id?Object(h.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(C.a)(e.cartItems),[Object(h.a)({},t.payload,{quantity:1})])},I=function(e,t){return e.cartItems.filter((function(e){return e.id!==t.payload.id}))},x=function(e,t){return 1===t.payload.quantity?I(e,t):e.cartItems.map((function(e){return e.id===t.payload.id?Object(h.a)({},e,{quantity:e.quantity-1}):e}))},S=function(e){var t=[];return e.cartItems.map((function(e){return t.push(e.quantity*e.price)})),console.log(t,"total"),t.reduce((function(e,t){return e+t}),0)},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return Object(h.a)({},e,{cartItems:R(e,t),totalPrice:S(e)});case"TOGGLE_CART_HIDDEN":return Object(h.a)({},e,{hidden:!e.hidden});case"CLEAR_ITEM_FROM_CART":return Object(h.a)({},e,{cartItems:I(e,t),totalPrice:S(e)});case"REMOVE_ITEM":return Object(h.a)({},e,{cartItems:x(e,t),totalPrice:S(e)});default:return e}},A=Object(i.c)({shop:j,cart:P,firestore:u.firestoreReducer,firebase:m.firebaseReducer}),_=function(e,t){return A(e,t)},T=a(9),D=(a(421),function(){return r.a.createElement("div",{className:"spinner-overlay"},r.a.createElement("div",{className:"spinner-container"}))}),U=a(27),L=(a(422),Object(U.g)((function(e){var t=e.title,a=e.item,n=e.size;return r.a.createElement("div",{className:"".concat(n,"  menu-item")},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a.imageUrl,")")}}),r.a.createElement(T.b,{to:"/shop/".concat(a.title),className:"content"},r.a.createElement("h1",null,t.toUpperCase()),r.a.createElement("span",null," Shop Now")))}))),G=(a(424),function(){var e=Object(o.c)((function(e){return e.shop})).directory;return r.a.createElement("div",{className:"directory-menu"},e.map((function(e){return r.a.createElement(L,{key:e.id,title:e.title,item:e,size:e.size})})))}),q=(a(425),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(G,null))}),M=(a(426),function(e){var t=e.item,a=t.price,n=t.imageUrl,c=t.name,l=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"}," ",l," x $",a)))}),F=a(59),z=a(138),H=a(139),W=function(e){return function(t){N.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return y.collection("users").doc(t.user.uid).set({displayName:e.displayName})})).then((function(){t({type:"CREATE_USER_SUCCESS"})})).catch((function(e){t({type:"CREATE_USER_ERROR",err:e})}))}},B=(a(427),function(e){var t=e.handleChange,a=e.label,n=Object(H.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"signin group"},r.a.createElement("div",{className:"input"},r.a.createElement("input",{name:n.name,type:n.type,value:n.value,className:"form-input",onChange:function(e){return t(e.target)},required:n.required,autoComplete:"new-password"}),r.a.createElement("label",{for:n.name,className:"".concat(n.value.length?"shrink":"")},a)))}),V=function(e){var t=e.title,a=e.isGoogleSignIn,n=e.inverted,c=Object(H.a)(e,["title","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({},c,{className:"".concat(n?"inverted":""," custom-button ").concat(a?"google-sign-in":""," ")}),t)},$=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(z.a)(e,2),a=t[0],c=t[1],l=Object(o.b)(),i=function(e){var t=e.name,n=e.value;c(Object(h.a)({},a,Object(F.a)({},t,n)))},s=function(e){var t;e.preventDefault(),(t=a,function(e){N.auth().signInWithEmailAndPassword(t.email,t.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))})(l)};return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null," I already have an account"),r.a.createElement("span",null," Sign in with your email and password"),r.a.createElement("form",{onSubmit:function(e){return s(e)}},r.a.createElement(B,{name:"email",type:"email",handleChange:i,label:"Email",value:a.email,autoComplete:"new-password",required:!0}),r.a.createElement(B,{name:"password",type:"password",handleChange:i,label:"Password",value:a.password,autoComplete:"new-password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(V,{type:"submit",title:"Sign In"}),r.a.createElement(V,{type:"button",onClick:function(){return g.signInWithPopup(O)},isGoogleSignIn:!0,title:"Sign In With Google"}))))},Y=function(){var e=Object(n.useState)({displayName:"",email:"",password:"",confirmPassword:""}),t=Object(z.a)(e,2),a=t[0],c=t[1],l=Object(o.b)(),i=function(e){var t=e.name,n=e.value;c(Object(h.a)({},a,Object(F.a)({},t,n)))},s=function(){var e=Object(v.a)(E.a.mark((function e(t){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.password,r=a.confirmPassword,n===r){e.next=5;break}return alert("passwords don't match"),e.abrupt("return");case 5:W(a)(l);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"}," I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:function(e){return s(e)}},r.a.createElement(B,{type:"text",name:"displayName",value:a.displayName,handleChange:i,label:"Display Name",required:!0}),r.a.createElement(B,{type:"email",name:"email",value:a.email,handleChange:i,label:"Email",required:!0}),r.a.createElement(B,{type:"password",name:"password",value:a.password,handleChange:i,label:"Password",required:!0}),r.a.createElement(B,{type:"password",name:"confirmPassword",value:a.confirmPassword,handleChange:i,label:"Confirm Password",required:!0}),r.a.createElement(V,{type:"submit",title:"Sign Up"})))},J=(a(428),Object(U.g)((function(e){var t=e.history,a=Object(o.b)(),n=Object(o.c)((function(e){return e.cart})).cartItems;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},n.length?n.map((function(e){return r.a.createElement(M,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"}," Your cart is empty ")),r.a.createElement(V,{title:"Go To Checkout",onClick:function(){a({type:"TOGGLE_CART_HIDDEN"}),t.push("/checkout")}}))})));function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var X=r.a.createElement("g",null),Z=r.a.createElement("g",null),ee=r.a.createElement("g",null),te=r.a.createElement("g",null),ae=r.a.createElement("g",null),ne=r.a.createElement("g",null),re=r.a.createElement("g",null),ce=r.a.createElement("g",null),le=r.a.createElement("g",null),ie=r.a.createElement("g",null),oe=r.a.createElement("g",null),se=r.a.createElement("g",null),ue=r.a.createElement("g",null),me=r.a.createElement("g",null),pe=r.a.createElement("g",null),de=function(e){var t=e.svgRef,a=e.title,n=Q(e,["svgRef","title"]);return r.a.createElement("svg",K({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),X,Z,ee,te,ae,ne,re,ce,le,ie,oe,se,ue,me,pe)},fe=r.a.forwardRef((function(e,t){return r.a.createElement(de,K({svgRef:t},e))})),Ee=(a.p,a(429),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.cart})).cartItems;return r.a.createElement("div",{className:"cart-icon",onClick:function(){return e({type:"TOGGLE_CART_HIDDEN"})}},r.a.createElement(fe,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},t.length))});function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var be=r.a.createElement("title",null,"Group"),ge=r.a.createElement("desc",null,"Created with Sketch."),ye=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Oe=function(e){var t=e.svgRef,a=e.title,n=ve(e,["svgRef","title"]);return r.a.createElement("svg",he({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?be:a?r.a.createElement("title",null,a):null,ge,ye)},Ne=r.a.forwardRef((function(e,t){return r.a.createElement(Oe,he({svgRef:t},e))})),we=(a.p,a(430),Object(U.g)((function(e){var t=e.history,a=Object(o.c)((function(e){return e.firebase.auth.uid})),n=Object(o.c)((function(e){return e.cart})).hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(T.b,{to:"/",className:"logo-container"},r.a.createElement(Ne,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(T.b,{to:"/shop",className:"option"}," Shop"),r.a.createElement(T.b,{className:"option"}," Contact"),a?r.a.createElement("div",{className:"option",onClick:function(){return g.signOut().then((function(){return t.push("/sign-in")}))}},"Sign Out"):r.a.createElement(T.b,{to:"/sign-in"}," ",r.a.createElement("div",{className:"option"}," Sign In ")),r.a.createElement(Ee,null)),n?null:r.a.createElement(J,null))}))),je=(a(431),a(432),function(e){var t=Object(o.b)(),a=e.item,n=a.id,c=a.name,l=a.price,i=a.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},"$",l)),r.a.createElement(V,{inverted:!0,title:"Add to cart",onClick:function(){t({type:"ADD_TO_CART",payload:{id:n,name:c,price:l,imageUrl:i}})}}))}),Ce=function(e){var t=e.title,a=e.items,n=e.name,c=e.match;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement(T.b,{className:"title",to:"".concat(c.path,"/").concat(n)},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(je,{key:e.id,item:e})}))))},ke=(a(433),function(e){var t=e.match,a=Object(o.c)((function(e){return e.shop})).collection;return r.a.createElement("div",{className:"collection-preview"},a.length>0?a.map((function(e){return r.a.createElement(Ce,{key:e.id,name:e.routeName,title:e.title,items:e.items,match:t})})):r.a.createElement(D,null))}),Re=(a(434),function(e){var t=e.match.params.collectionid,a=Object(o.c)((function(e){return e.shop})).collection;return r.a.createElement("div",{className:"collection-page"},a.length>1?a.filter((function(e){return e.routeName===t})).map((function(e){return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h2",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"items"},e.items.map((function(e){return r.a.createElement(je,{key:e.id,item:e})}))))})):r.a.createElement(D,null))}),Ie=function(e){var t=e.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(U.b,{exact:!0,path:"".concat(t.path),component:ke}),r.a.createElement(U.b,{exact:!0,path:"".concat(t.path,"/:collectionid"),component:Re}))},xe=a(224),Se=a.n(xe),Pe=a(225),Ae=a.n(Pe),_e=function(e){var t=e.price,a=100*t;return r.a.createElement(Se.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"your total is $".concat(t),amount:a,panelLabel:"Pay Now",token:function(e){Ae()({url:"payment",method:"post",data:{amount:a,token:e}}).then((function(e){alert("payment Successful")})).catch((function(e){console.log("payment error: ",JSON.parse(e)),alert("there was an issue with your payment. please ensure you use the provided credit card info")}))},stripeKey:"pk_test_N5lhtYeoEgfo2FgjefRDSokr002u11l1XM"})},Te=(a(451),function(e){var t=e.item,a=t.imageUrl,n=t.name,c=t.quantity,l=t.price,i=Object(o.b)();return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:a,alt:"item"})),r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return i({type:"REMOVE_ITEM",payload:e.item})}}," \u276e "),r.a.createElement("span",{className:"value"}," ",c," "),r.a.createElement("div",{className:"arrow",onClick:function(){return i({type:"ADD_TO_CART",payload:e.item})}}," \u276f ")),r.a.createElement("span",{className:"price"},"$",l," "),r.a.createElement("div",{className:"remove-button",onClick:function(){return i({type:"CLEAR_ITEM_FROM_CART",payload:e.item})}}," \u2715 "))}),De=(a(452),function(){var e=Object(o.c)((function(e){return e.cart})),t=e.cartItems,a=e.totalPrice;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t&&t.map((function(e){return r.a.createElement(Te,{key:e.id,item:e})})),r.a.createElement("div",{className:"total"}," TOTAL: $",a),r.a.createElement("div",{className:"test-warning"},"* Please use the following test credit card for Payments*",r.a.createElement("br",null),"Card number: 4242424242424242 - Exp: 01/2025 - CVV: 123"),r.a.createElement(_e,{price:a,disabled:0===a}))}),Ue=(a(453),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement($,null),r.a.createElement(Y,null))}),Le=(a(454),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.firebase.auth})),a=Object(o.c)((function(e){return e.shop})),c=a.directory,l=a.collection,i=function(t){e({type:"LOAD_USER",user:t})};return Object(n.useEffect)((function(){var t=g.onAuthStateChanged(function(){var e=Object(v.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}return e.next=3,b(t);case 3:e.sent.onSnapshot((function(e){i(Object(h.a)({id:e.id},e.data()))})),console.log(t,"user"),e.next=9;break;case 8:i(t);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return c.length<1&&function(e){try{y.collection("directory").onSnapshot(function(){var t=Object(v.a)(E.a.mark((function t(a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=a.docs.map((function(e){var t=e.data(),a=t.title,n=t.imageUrl,r=t.linkUrl;return{id:e.id,title:a,imageUrl:n,linkUrl:r}})),e({type:"UPDATE_DIRECTORY",result:n});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}catch(t){alert(t)}}(e),l.length<1&&function(e){try{y.collection("collections").onSnapshot(function(){var t=Object(v.a)(E.a.mark((function t(a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=a.docs.map((function(e){var t=e.data(),a=t.title,n=t.items;return{routeName:encodeURI(a.toLowerCase()),id:e.id,title:a.toLowerCase(),items:n}})),e({type:"UPDATE_COLLECTION",result:n});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}catch(t){alert(t)}}(e),function(){t()}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(we,null),r.a.createElement(U.d,null,r.a.createElement(U.b,{exact:!0,path:"/",render:function(){return t?r.a.createElement(q,null):r.a.createElement(Ue,null)}}),r.a.createElement(U.b,{exact:!0,path:"/shop",component:Ie}),r.a.createElement(U.b,{exact:!0,path:"/checkout",render:function(){return t.uid?r.a.createElement(De,null):r.a.createElement(Ue,null)}}),r.a.createElement(U.b,{exact:!0,path:"/sign-in",render:function(){return t.uid?r.a.createElement(U.a,{to:"/"}):r.a.createElement(Ue,null)}}),r.a.createElement(U.b,{path:"/shop/:collectionid",component:Re})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ge=[s.a.withExtraArgument({getFirebase:m.getFirebase,getFirestore:u.getFirestore})];var qe=Object(i.e)(_,Object(i.d)(i.a.apply(void 0,Ge),Object(u.reduxFirestore)(N))),Me={firebase:d.a,config:{userProfile:"users",useFirestoreForProfile:!0,enableRedirectHandling:!1,resetBeforeLogin:!1},dispatch:qe.dispatch,createFirestoreInstance:u.createFirestoreInstance},Fe=function(e){var t=e.children;return Object(o.c)((function(e){return e.firebase.auth})).isLoaded?t:r.a.createElement(D,null)};l.a.render(r.a.createElement(T.a,null,r.a.createElement(o.a,{store:qe},r.a.createElement(m.ReactReduxFirebaseProvider,Me,r.a.createElement(Fe,null,r.a.createElement(Le,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[227,1,2]]]);
//# sourceMappingURL=main.d867633c.chunk.js.map