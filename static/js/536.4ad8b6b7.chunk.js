"use strict";(self.webpackChunktoolspros=self.webpackChunktoolspros||[]).push([[536],{536:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var a=r(885),s=r(791),n="searchBar_searchBarDiv__UMib2",c="searchBar_productDiv__wQEWJ",i=r(666),u=r(871),d=r(129),o={productMain:"productList_productMain__1p-Z9",pageChangeBtns:"productList_pageChangeBtns__6-pl0",cardArticle:"productList_cardArticle__HE2bm",infoDiv:"productList_infoDiv__x+3dx",cartDiv:"productList_cartDiv__Bkqqv",changeAmountBtns:"productList_changeAmountBtns__LipWC",link:"productList_link__-NbLM",cartBtn:"productList_cartBtn__YaOaJ",addToCartMenu:"productList_addToCartMenu__57SuN",listItem:"productList_listItem__Yec4t"},l=r(184);var _=function(e){var t=e.filteredData,r=(0,s.useState)(1),n=(0,a.Z)(r,2),c=n[0],i=n[1],_=(0,s.useState)([]),p=(0,a.Z)(_,2),f=p[0],h=p[1],v=(0,u.s0)(),m=(0,s.useRef)(),x=(0,s.useRef)();function j(e){e.target===m.current?i(c+1):i(c-1)}function C(e){var t=e.id;v(t)}return(0,s.useEffect)((function(){!function(){x.current.disabled=!0,m.current.disabled=!0;var e=12*(c-1),r=e+12;t[e-1]&&(x.current.disabled=!1),t[r+1]&&(m.current.disabled=!1);var a=t.slice(e,r);h(a)}()}),[c,t]),(0,s.useEffect)((function(){i(1)}),[t]),(0,l.jsxs)("div",{className:o.productDiv,children:[(0,l.jsx)("main",{className:o.productMain,children:(0,l.jsx)("ul",{children:f&&f.map((function(e){return(0,l.jsx)("li",{className:o.listItem,children:(0,l.jsx)(d.Z,{product:e,handleProductClick:C,styles:o})},e.id)}))})}),(0,l.jsxs)("div",{className:o.pageChangeBtns,children:[(0,l.jsx)("button",{onClick:j,ref:x,children:"Previous"}),(0,l.jsx)("button",{onClick:j,ref:m,children:"Next"})]})]})},p=r(341);var f=function(){var e=(0,s.useContext)(i.mZ),t=e.receivedData,r=e.loading,u=(0,s.useState)(""),d=(0,a.Z)(u,2),o=d[0],f=d[1],h=(0,s.useDeferredValue)(o),v=(0,s.useState)([]),m=(0,a.Z)(v,2),x=m[0],j=m[1];return(0,s.useMemo)((function(){if(h){var e=[];t.map((function(t){var r=h.toLowerCase();t.name.toLowerCase().includes(r)&&e.push(t)})),j(e)}else j(t)}),[h,t]),(0,l.jsxs)("div",{className:n,children:[(0,l.jsx)(p.Z,{loading:r}),(0,l.jsx)("h1",{children:"Best products on the market"}),(0,l.jsx)("form",{children:(0,l.jsx)("input",{type:"search",placeholder:"Search...",value:o,onChange:function(e){var t=e.target.value;f(t)}})}),(0,l.jsx)("div",{className:c,children:(0,l.jsx)(_,{filteredData:x})})]})}}}]);
//# sourceMappingURL=536.4ad8b6b7.chunk.js.map