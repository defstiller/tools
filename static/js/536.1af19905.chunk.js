"use strict";(self.webpackChunktoolspros=self.webpackChunktoolspros||[]).push([[536],{536:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var a=r(885),s=r(791),n="searchBar_searchBarDiv__7yA4S",c="searchBar_productDiv__wZY+-",i=r(666),u=r(871),o=r(129),d={productMain:"productList_productMain__8yjz-",pageChangeBtns:"productList_pageChangeBtns__ZcMJJ",cardArticle:"productList_cardArticle__CXlEY",infoDiv:"productList_infoDiv__aZSW5",cartDiv:"productList_cartDiv__8MTje",changeAmountBtns:"productList_changeAmountBtns__KN8+5",link:"productList_link__uFrJF",cartBtn:"productList_cartBtn__fo5KB",addToCartMenu:"productList_addToCartMenu__4c38a",listItem:"productList_listItem__1LCzX"},l=r(184);var _=function(e){var t=e.filteredData,r=(0,s.useState)(1),n=(0,a.Z)(r,2),c=n[0],i=n[1],_=(0,s.useState)([]),f=(0,a.Z)(_,2),p=f[0],h=f[1],v=(0,u.s0)(),m=(0,s.useRef)(),j=(0,s.useRef)();function x(e){e.target===m.current?i(c+1):i(c-1)}function C(e){var t=e.id;v(t)}return(0,s.useEffect)((function(){!function(){j.current.disabled=!0,m.current.disabled=!0;var e=10*(c-1),r=e+10;t[e-1]&&(j.current.disabled=!1),t[r+1]&&(m.current.disabled=!1);var a=t.slice(e,r);h(a)}()}),[c,t]),(0,s.useEffect)((function(){i(1)}),[t]),(0,l.jsxs)("div",{className:d.productDiv,children:[(0,l.jsx)("main",{className:d.productMain,children:(0,l.jsx)("ul",{children:p&&p.map((function(e){return(0,l.jsx)("li",{className:d.listItem,children:(0,l.jsx)(o.Z,{product:e,handleProductClick:C,styles:d})},e.id)}))})}),(0,l.jsxs)("div",{className:d.pageChangeBtns,children:[(0,l.jsx)("button",{onClick:x,ref:j,children:"Previous"}),(0,l.jsx)("button",{onClick:x,ref:m,children:"Next"})]})]})},f=r(341);var p=function(){var e=(0,s.useContext)(i.mZ),t=e.receivedData,r=e.loading,u=(e.error,(0,s.useState)("")),o=(0,a.Z)(u,2),d=o[0],p=o[1],h=(0,s.useDeferredValue)(d),v=(0,s.useState)([]),m=(0,a.Z)(v,2),j=m[0],x=m[1];return(0,s.useMemo)((function(){if(h){var e=[];t.map((function(t){var r=h.toLowerCase();t.name.toLowerCase().includes(r)&&e.push(t)})),x(e)}else x(t)}),[h,t]),(0,l.jsxs)("div",{className:n,children:[(0,l.jsx)(f.Z,{loading:r}),(0,l.jsx)("h1",{children:"Best products on the market"}),(0,l.jsx)("form",{children:(0,l.jsx)("input",{type:"search",placeholder:"Search...",value:d,onChange:function(e){var t=e.target.value;p(t)}})}),(0,l.jsx)("div",{className:c,children:(0,l.jsx)(_,{filteredData:j})})]})}}}]);
//# sourceMappingURL=536.1af19905.chunk.js.map