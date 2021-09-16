(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[9263],{9238:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var i=t(2122),r=t(9756),a=(t(7294),t(3905)),o=["components"],s={description:"GoShimmer uses the adapter design pattern to easily switch between different implementations and internal interfaces just by using a different plugin, without having to rewrite the code using it.",image:"/img/logo/goshimmer_light.png",keywords:["dependency","plugins","plugin system","code","internal logic","package","adapter design pattern","adapter","circular dependency"]},p="Dependency of Packages and Plugins",c={unversionedId:"implementation_design/packages_plugins",id:"implementation_design/packages_plugins",isDocsHomePage:!1,title:"Dependency of Packages and Plugins",description:"GoShimmer uses the adapter design pattern to easily switch between different implementations and internal interfaces just by using a different plugin, without having to rewrite the code using it.",source:"@site/docs/implementation_design/packages_plugins.md",sourceDirName:"implementation_design",slug:"/implementation_design/packages_plugins",permalink:"/docs/implementation_design/packages_plugins",editUrl:"https://github.com/iotaledger/goshimmer/tree/develop/documentation/docs/implementation_design/packages_plugins.md",version:"current",frontMatter:{description:"GoShimmer uses the adapter design pattern to easily switch between different implementations and internal interfaces just by using a different plugin, without having to rewrite the code using it.",image:"/img/logo/goshimmer_light.png",keywords:["dependency","plugins","plugin system","code","internal logic","package","adapter design pattern","adapter","circular dependency"]},sidebar:"docs",previous:{title:"Event Driven Model",permalink:"/docs/implementation_design/event_driven_model"},next:{title:"Plugin System",permalink:"/docs/implementation_design/plugin"}},l=[],u={toc:l};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dependency-of-packages-and-plugins"},"Dependency of Packages and Plugins"),(0,a.kt)("p",null,"In GoShimmer, new features are added through the ",(0,a.kt)("a",{parentName:"p",href:"/docs/implementation_design/plugin"},"plugin system"),".\nWhen creating a new plugin, it must implement an interface shared with all other plugins, so it's easy to add new\nplugins and change their internal implementation without worrying about compatibility.\nBecause of this, to make the code clean and easily manageable the plugin's internal logic has to be implemented in a different package.\nThis is an example of an ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Adapter_pattern"},"adapter design pattern")," that is often used in plugin systems.\nIt's really useful in a prototype software like GoShimmer, because it's possible to easily switch between different implementations\nand internal interfaces just by using a different plugin, without having to rewrite the code using it. "),(0,a.kt)("p",null,"When creating a new plugin, the logic should be implemented in a separate package stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/")," directory.\nThe package should contain all struct and interface definitions used, as well as the specific logic.\nIt should not reference any ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin")," packages from the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin/")," directory as this could lead to circular dependencies between packages."),(0,a.kt)("p",null,"There are no special interfaces or requirements that packages in the ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/")," directory are forced to follow. However, they should be independent of other packages if possible,\nto avoid problems due to changing interfaces in other packages."))}d.isMDXComponent=!0},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return g}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=r,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||a;return t?i.createElement(m,o(o({ref:n},l),{},{components:t})):i.createElement(m,o({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);