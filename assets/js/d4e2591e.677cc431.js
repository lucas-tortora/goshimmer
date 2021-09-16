(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[6327],{5511:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),s=["components"],i={description:"The snapshot API allows retrieving current snapshot.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","snapshot","retrieve","current"]},l="Snapshot API Methods",p={unversionedId:"apis/snapshot",id:"apis/snapshot",isDocsHomePage:!1,title:"Snapshot API Methods",description:"The snapshot API allows retrieving current snapshot.",source:"@site/docs/apis/snapshot.md",sourceDirName:"apis",slug:"/apis/snapshot",permalink:"/docs/apis/snapshot",editUrl:"https://github.com/iotaledger/goshimmer/tree/develop/documentation/docs/apis/snapshot.md",version:"current",frontMatter:{description:"The snapshot API allows retrieving current snapshot.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","snapshot","retrieve","current"]},sidebar:"docs",previous:{title:"dRNG API Methods",permalink:"/docs/apis/dRNG"},next:{title:"Faucet API Methods",permalink:"/docs/apis/faucet"}},c=[{value:"<code>/snapshot</code>",id:"snapshot",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}]}],u={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snapshot-api-methods"},"Snapshot API Methods"),(0,a.kt)("p",null,"Snapshot API allows retrieving current snapshot."),(0,a.kt)("p",null,"The API provides the following functions and endpoints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#snapshot"},"/snapshot"))),(0,a.kt)("h2",{id:"snapshot"},(0,a.kt)("inlineCode",{parentName:"h2"},"/snapshot")),(0,a.kt)("p",null,"Returns a snapshot file."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("h4",{id:"curl"},"cURL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/snapshot'\n")),(0,a.kt)("h4",{id:"client-lib"},"Client lib"),(0,a.kt)("p",null,"Method not available in the client library."),(0,a.kt)("h4",{id:"results"},"Results"),(0,a.kt)("p",null,"Snapshot file is returned."))}h.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);