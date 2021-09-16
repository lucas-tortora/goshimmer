(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[5138],{5835:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),s=["components"],a={description:"Running the integration tests spins up a `tester` container within which every test can specify its own GoShimmer network with Docker.",image:"/img/tooling/integration-testing.png",keywords:["integration test","tester","network","docker","peer","docker compose","linux","macOS"]},c="Integration Tests with Docker",l={unversionedId:"tooling/integration_tests",id:"tooling/integration_tests",isDocsHomePage:!1,title:"Integration Tests with Docker",description:"Running the integration tests spins up a `tester` container within which every test can specify its own GoShimmer network with Docker.",source:"@site/docs/tooling/integration_tests.md",sourceDirName:"tooling",slug:"/tooling/integration_tests",permalink:"/docs/tooling/integration_tests",editUrl:"https://github.com/iotaledger/goshimmer/tree/develop/documentation/docs/tooling/integration_tests.md",version:"current",frontMatter:{description:"Running the integration tests spins up a `tester` container within which every test can specify its own GoShimmer network with Docker.",image:"/img/tooling/integration-testing.png",keywords:["integration test","tester","network","docker","peer","docker compose","linux","macOS"]},sidebar:"docs",previous:{title:"Docker Private Network",permalink:"/docs/tooling/docker_private_network"},next:{title:"How to Do a Release",permalink:"/docs/teamresources/release"}},p=[{value:"How to Run",id:"how-to-run",children:[]},{value:"Creating Tests",id:"creating-tests",children:[]},{value:"Other Tips",id:"other-tips",children:[]}],u={toc:p};function d(e){var t=e.components,a=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integration-tests-with-docker"},"Integration Tests with Docker"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(6914).Z},(0,o.kt)("img",{alt:"Integration testing",src:n(2466).Z,title:"Integration testing"}))),(0,o.kt)("p",null,"Running the integration tests spins up a ",(0,o.kt)("inlineCode",{parentName:"p"},"tester")," container within which every test can specify its own GoShimmer network with Docker as schematically shown in the figure above."),(0,o.kt)("p",null,"Peers can communicate freely within their Docker network and this is exactly how the tests are run using the ",(0,o.kt)("inlineCode",{parentName:"p"},"tester")," container.\nTest can be written in regular Go style while the framework provides convenience functions to create a new network, access a specific peer's web API or logs."),(0,o.kt)("h2",{id:"how-to-run"},"How to Run"),(0,o.kt)("p",null,"Prerequisites: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker 17.12.0+"),(0,o.kt)("li",{parentName:"ul"},"Docker compose: file format 3.5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Mac & Linux\ncd tools/integration-tests\n./runTests.sh\n")),(0,o.kt)("p",null,"The tests produce ",(0,o.kt)("inlineCode",{parentName:"p"},"*.log")," files for every networks' peer in the ",(0,o.kt)("inlineCode",{parentName:"p"},"logs")," folder after every run."),(0,o.kt)("p",null,"On GitHub logs of every peer are stored as artifacts and can be downloaded for closer inspection once the job finishes."),(0,o.kt)("h2",{id:"creating-tests"},"Creating Tests"),(0,o.kt)("p",null,"Tests can be written in regular Go style. Each tested component should reside in its own test file in ",(0,o.kt)("inlineCode",{parentName:"p"},"tools/integration-tests/tester/tests"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"main_test")," with its ",(0,o.kt)("inlineCode",{parentName:"p"},"TestMain")," function is executed before any test in the package and initializes the integration test framework."),(0,o.kt)("p",null,"Each test has to specify its network where the tests are run. This can be done via the framework at the beginning of a test."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// create a network with name 'testnetwork' with 6 peers and wait until every peer has at least 3 neighbors\nn := f.CreateNetwork(\"testnetwork\", 6, 3)\n// must be called to create log files and properly clean up\ndefer n.Shutdown() \n")),(0,o.kt)("h2",{id:"other-tips"},"Other Tips"),(0,o.kt)("p",null,"Useful for development is to only execute the test you're currently building. For that matter, simply modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"entrypoint: go test ./tests -run <YOUR_TEST_NAME> -v -mod=readonly\n")))}d.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),g=i,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6914:function(e,t,n){"use strict";t.Z=n.p+"assets/files/integration-testing-a5a2fd4ebdfb3fb42cd75d867de81efd.png"},2466:function(e,t,n){"use strict";t.Z=n.p+"assets/images/integration-testing-a5a2fd4ebdfb3fb42cd75d867de81efd.png"}}]);