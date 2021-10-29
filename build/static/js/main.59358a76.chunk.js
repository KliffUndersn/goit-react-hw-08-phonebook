(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{28:function(e,t,n){e.exports={menu:"NavbarMenu_menu__30d7D",link:"NavbarMenu_link__1sJom",activeLink:"NavbarMenu_activeLink__1yVqL"}},44:function(e,t,n){e.exports={form:"LoginForm_form__2dHBG"}},45:function(e,t,n){e.exports={form:"RegisterForm_form__2a0by"}},47:function(e,t,n){e.exports={row:"Navbar_row__1Dg6N"}},53:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var r,c,a,u=n(0),s=n.n(u),i=n(24),o=n.n(i),b=(n(53),n(3)),j=n(16),O=n(9),f=n(5),d=n(35),l=n(32),h=n.n(l),p=Object(b.b)("contacts/filter"),m=Object(b.b)("contacts/getRequest"),v=Object(b.b)("contacts/getSuccess"),x=Object(b.b)("contacts/getError"),g=Object(b.b)("contacts/addRequest"),w=Object(b.b)("contacts/addSuccess"),k=Object(b.b)("contacts/addError"),y=Object(b.b)("contacts/removeRequest"),C=Object(b.b)("contacts/removeSuccess"),R=Object(b.b)("contacts/removeError"),L=Object(b.c)({filter:"",items:[]},(r={},Object(f.a)(r,v,(function(e,t){return{filter:"",items:t.payload}})),Object(f.a)(r,w,(function(e,t){var n=t.payload;return{filter:e.filter,items:[].concat(Object(d.a)(e.items),[n])}})),Object(f.a)(r,C,(function(e,t){var n=t.payload;return{filter:e.filter,items:e.items.filter((function(e){return e.id!==n}))}})),Object(f.a)(r,p,(function(e,t){return{filter:t.payload,items:Object(d.a)(e.items)}})),r)),_=Object(O.b)({items:L}),A=n(2),S=Object(b.b)("auth/userRegisterRequest"),q=Object(b.b)("auth/userRegisterSuccess"),E=Object(b.b)("auth/userRegisterError"),N=Object(b.b)("auth/userLoginRequest"),P=Object(b.b)("auth/userLoginSuccess"),z=Object(b.b)("auth/userLoginError"),F=Object(b.b)("auth/userLogOutRequest"),T=Object(b.b)("auth/userLogOutSuccess"),D=Object(b.b)("auth/userLogOutError"),M=Object(b.b)("auth/userRefreshRequest"),B=Object(b.b)("auth/userRefreshSuccess"),G=Object(b.b)("auth/userRefreshError"),J={token:null,user:{email:"",name:""}},Z=Object(b.c)(J,(c={},Object(f.a)(c,q,(function(e,t){return t.payload})),Object(f.a)(c,P,(function(e,t){return t.payload})),Object(f.a)(c,T,(function(){return J})),Object(f.a)(c,B,(function(e,t){var n=t.payload;return Object(A.a)(Object(A.a)({},e),{},{user:n})})),Object(f.a)(c,G,(function(){return J})),c)),H=Object(b.c)(!1,(a={},Object(f.a)(a,q,(function(){return!0})),Object(f.a)(a,P,(function(){return!0})),Object(f.a)(a,T,(function(){return!1})),Object(f.a)(a,B,(function(){return!0})),Object(f.a)(a,G,(function(){return!1})),a)),I={key:"token",version:1,storage:h.a,whitelist:["token"]},U=Object(j.g)(I,Z),V=Object(O.b)({user:U,isAuth:H}),$=Object(O.b)({contacts:_,auth:V}),K=Object(b.a)({reducer:$,middleware:function(e){return e({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})}}),Q=Object(j.h)(K),W=K,X=n(17),Y=n(8),ee=n(6),te=n(7),ne=n.n(te),re=n(15),ce=n(33),ae=n.n(ce).a.create({baseURL:"https://connections-api.herokuapp.com/"}),ue=function(e){ae.defaults.headers.common.Authorization="Bearer ".concat(e)},se=function(){ae.defaults.headers.common.Authorization=""},ie=function(){var e=Object(re.a)(ne.a.mark((function e(){var t,n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.get("/contacts");case 2:return t=e.sent,n=t.data,console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(re.a)(ne.a.mark((function e(t){var n,r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.post("/contacts",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(re.a)(ne.a.mark((function e(t){var n,r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.delete("/contacts/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(re.a)(ne.a.mark((function e(t){var n,r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ue(t),e.next=3,ae.get("/users/current");case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(re.a)(ne.a.mark((function e(t){var n,r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.post("/users/signup",t);case 2:return n=e.sent,r=n.data,ue(r.token),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=Object(re.a)(ne.a.mark((function e(t){var n,r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.post("/users/login",t);case 2:return n=e.sent,r=n.data,ue(r.token),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=Object(re.a)(ne.a.mark((function e(t){var n,r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.post("/users/logout",t);case 2:return n=e.sent,r=n.data,se(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le={fetchAllContacts:ie,fetchAddContact:oe,fetchRemoveContact:be,fetchGetCurrent:je,fetchPostSignup:Oe,fetchPostLogin:fe,fetchPostLogout:de},he=function(){var e=function(){var e=Object(re.a)(ne.a.mark((function e(t){var n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(m()),e.prev=1,e.next=4,le.fetchAllContacts();case 4:n=e.sent,t(v(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(x(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return e},pe=function(e){var t=function(){var t=Object(re.a)(ne.a.mark((function t(n){var r;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(g()),t.prev=1,t.next=4,le.fetchAddContact(e);case 4:r=t.sent,n(w(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n(k(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return t},me=function(e){var t=function(){var t=Object(re.a)(ne.a.mark((function t(n){return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(y()),t.prev=1,t.next=4,le.fetchRemoveContact(e);case 4:t.sent,n(C(e)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n(R(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return t},ve=n(1),xe=function(){var e=Object(ee.c)((function(e){return e.contacts.items.items})),t=Object(ee.c)((function(e){return e.contacts.items.filter})),n=function(n){return e.filter((function(e){return e.name.toLowerCase().includes(t)}))},r=Object(ee.b)();return Object(ve.jsx)(ve.Fragment,{children:n&&Object(ve.jsxs)(ve.Fragment,{children:[Object(ve.jsx)("h3",{children:"Contacts"}),Object(ve.jsx)("ul",{children:n().map((function(e){return Object(ve.jsxs)("li",{children:[e.name," : ",e.number,Object(ve.jsx)("button",{onClick:function(){return r(me(e.id))},children:"Delete"})]},e.id)}))})]})})},ge=n(19),we={name:{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0},number:{type:"tel",name:"number",pattern:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}},ke=function(){var e=Object(ee.b)(),t=Object(ee.c)((function(e){return e.contacts.items.items})),n=Object(ee.c)((function(e){return e.auth.user.user.name})),r=Object(u.useState)({name:"",number:""}),c=Object(ge.a)(r,2),a=c[0],s=c[1];Object(u.useEffect)((function(){e(he())}),[]);var i=function(e){var t=e.target;s(Object(A.a)(Object(A.a)({},a),{},Object(f.a)({},t.name,t.value)))};return Object(ve.jsxs)("div",{children:[Object(ve.jsx)("button",{type:"button",onClick:function(){e((function(e,t){e(F());var n=t().auth.user.token;de(n).then((function(){return e(T())})).catch((function(t){return e(D(t.message))}))}))},children:"Logout"}),Object(ve.jsxs)("div",{children:["Greetings ",n]}),Object(ve.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=a.name,c=a.number,u=t.map((function(e){return e.name}));if(u.includes(n.target.name.value))return alert("".concat(n.target.name.value," says hello from chat"));e(pe({name:r,number:c}))},children:[Object(ve.jsx)("h1",{children:"Phonebook"}),Object(ve.jsx)("h2",{children:"Name"}),Object(ve.jsx)("input",Object(A.a)(Object(A.a)({},we.name),{},{onChange:i})),Object(ve.jsx)("h2",{children:"Number"}),Object(ve.jsx)("input",Object(A.a)(Object(A.a)({},we.number),{},{onChange:i})),Object(ve.jsx)("button",{type:"submit",children:"Add contact"})]})]})},ye={name:"email",type:"email",placeholder:"Enter email",required:!0},Ce={name:"password",type:"password",placeholder:"Enter password",required:!0},Re={email:"",password:""},Le=n(44),_e=n.n(Le),Ae=function(){var e=Object(u.useState)(Re),t=Object(ge.a)(e,2),n=t[0],r=t[1],c=Object(ee.b)(),a=function(e){var t;c((t=e,function(e){e(N()),fe(t).then((function(t){return e(P(t))})).catch((function(t){return e(z(t.message))}))}))},s=function(e){var t=e.target,c=t.name,a=t.value;r(Object(A.a)(Object(A.a)({},n),{},Object(f.a)({},c,a)))};return Object(ve.jsxs)(ve.Fragment,{children:[Object(ve.jsx)("h2",{children:"Login"}),Object(ve.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(n),r(Object(A.a)({},Re))},className:_e.a.form,children:[Object(ve.jsx)("div",{children:Object(ve.jsx)("input",Object(A.a)(Object(A.a)({},ye),{},{value:n.email,onChange:s}))}),Object(ve.jsx)("div",{children:Object(ve.jsx)("input",Object(A.a)(Object(A.a)({},Ce),{},{value:n.password,onChange:s}))}),Object(ve.jsx)("button",{type:"submit",children:"Login"})]})]})},Se={name:"email",type:"email",placeholder:"Enter email",required:!0},qe={name:"password",type:"password",placeholder:"Enter password",required:!0},Ee={name:"name",type:"text",placeholder:"Enter name",required:!0},Ne={email:"",password:"",name:""},Pe=n(45),ze=n.n(Pe),Fe=function(){var e=Object(u.useState)(Ne),t=Object(ge.a)(e,2),n=t[0],r=t[1],c=Object(ee.b)(),a=function(e){var t;c((t=e,function(e){e(S()),Oe(t).then((function(t){return e(q(t))})).catch((function(t){return e(E(t.message))}))}))},s=function(e){var t=e.target,c=t.name,a=t.value;r(Object(A.a)(Object(A.a)({},n),{},Object(f.a)({},c,a)))};return Object(ve.jsxs)(ve.Fragment,{children:[Object(ve.jsx)("h2",{children:"Register"}),Object(ve.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(n),r(Object(A.a)({},Ne))},className:ze.a.form,children:[Object(ve.jsx)("div",{children:Object(ve.jsx)("input",Object(A.a)(Object(A.a)({},Se),{},{value:n.email,onChange:s}))}),Object(ve.jsx)("div",{children:Object(ve.jsx)("input",Object(A.a)(Object(A.a)({},qe),{},{value:n.password,onChange:s}))}),Object(ve.jsx)("div",{children:Object(ve.jsx)("input",Object(A.a)(Object(A.a)({},Ee),{},{value:n.name,onChange:s}))}),Object(ve.jsx)("button",{type:"submit",children:"Register"})]})]})},Te=n(27),De=["children","redirectTo"];function Me(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,c=Object(Te.a)(e,De),a=Object(ee.c)((function(e){return e.auth.isAuth}));return Object(ve.jsx)(Y.b,Object(A.a)(Object(A.a)({},c),{},{children:a?t:Object(ve.jsx)(Y.a,{to:r})}))}var Be=["children","restricted","redirectTo"];function Ge(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,c=e.redirectTo,a=void 0===c?"/":c,u=Object(Te.a)(e,Be),s=Object(ee.c)((function(e){return e.auth.isAuth}))&&r;return Object(ve.jsx)(Y.b,Object(A.a)(Object(A.a)({},u),{},{children:s?Object(ve.jsx)(Y.a,{to:a}):t}))}var Je=function(){return Object(ve.jsxs)(Y.d,{children:[Object(ve.jsx)(Ge,{restricted:!0,exact:!0,path:"/",redirectTo:"/contacts",children:Object(ve.jsx)(Ae,{})}),Object(ve.jsx)(Ge,{restricted:!0,exact:!0,path:"/register",redirectTo:"/contacts",children:Object(ve.jsx)(Fe,{})}),Object(ve.jsxs)(Me,{exact:!0,path:"/contacts",redirectTo:"/",children:[Object(ve.jsx)(ke,{}),Object(ve.jsx)(xe,{})]})]})},Ze=n(28),He=n.n(Ze),Ie=n(29),Ue=[{id:Object(Ie.a)(),to:"/",text:"HomePage"},{id:Object(Ie.a)(),to:"/register",text:"Register page"}],Ve=[{id:Object(Ie.a)(),to:"/contacts",text:"Phonebook Page"}],$e=function(){var e=(Object(ee.c)((function(e){return e.auth.isAuth}))?Ve:Ue).map((function(e){var t=e.id,n=e.to,r=e.text;return Object(ve.jsx)("li",{children:Object(ve.jsx)(X.b,{exact:!0,activeClassName:He.a.activeLink,className:He.a.link,to:n,children:r})},t)}));return Object(ve.jsx)("ul",{className:He.a.menu,children:e})},Ke=n(47),Qe=n.n(Ke),We=function(){return Object(ve.jsx)("nav",{children:Object(ve.jsx)("div",{className:"container",children:Object(ve.jsx)("div",{className:Qe.a.row,children:Object(ve.jsx)($e,{})})})})};W.getState();var Xe=function(){var e=Object(ee.b)();return Object(u.useEffect)((function(){e((function(e,t){e(M());var n=t().auth.user.token;je(n).then((function(t){return e(B(t))})).catch((function(t){return e(G(t.message))}))}))}),[]),Object(ve.jsx)(ve.Fragment,{children:Object(ve.jsxs)(X.a,{children:[Object(ve.jsx)(We,{}),Object(ve.jsx)(Je,{})]})})},Ye=n(48);o.a.render(Object(ve.jsx)(s.a.StrictMode,{children:Object(ve.jsx)(ee.a,{store:W,children:Object(ve.jsx)(Ye.PersistGate,{persistor:Q,children:Object(ve.jsx)(Xe,{})})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.59358a76.chunk.js.map