(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[5487],{7201:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=o(2122),n=o(9756),i=(o(7294),o(3905)),a=["components"],l={description:"GoShimmer comes with a docker private network, integration tests and a CLI wallet to test the stability of the protocol.",image:"/img/logo/goshimmer_light.png",keywords:["tools","docker","private network","integration test","cli","wallet","cli wallet"]},c="Tooling",s={unversionedId:"tooling/overview",id:"tooling/overview",isDocsHomePage:!1,title:"Tooling",description:"GoShimmer comes with a docker private network, integration tests and a CLI wallet to test the stability of the protocol.",source:"@site/docs/tooling/overview.md",sourceDirName:"tooling",slug:"/tooling/overview",permalink:"/docs/tooling/overview",editUrl:"https://github.com/iotaledger/goshimmer/tree/develop/documentation/docs/tooling/overview.md",version:"current",frontMatter:{description:"GoShimmer comes with a docker private network, integration tests and a CLI wallet to test the stability of the protocol.",image:"/img/logo/goshimmer_light.png",keywords:["tools","docker","private network","integration test","cli","wallet","cli wallet"]},sidebar:"docs",previous:{title:"Tools API Methods",permalink:"/docs/apis/tools"},next:{title:"Docker Private Network",permalink:"/docs/tooling/docker_private_network"}},p=[],u={toc:p};function m(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tooling"},"Tooling"),(0,i.kt)("p",null,"GoShimmer comes with some tools to test the stability of the protocol. "),(0,i.kt)("p",null,"We provide a documentation for the following tools:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/docs/tooling/docker_private_network"},"docker private network")," with which a local test network can be set up locally with docker."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/docs/tooling/integration_tests"},"integration tests")," spins up a ",(0,i.kt)("inlineCode",{parentName:"li"},"tester")," container within which every test can specify its own GoShimmer network with Docker."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/wallet_library"},"cli-wallet")," is described as part of the tutorial section.")))}m.isMDXComponent=!0},3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return p},kt:function(){return d}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(o),d=n,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return o?r.createElement(f,a(a({ref:t},p),{},{components:o})):r.createElement(f,a({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);