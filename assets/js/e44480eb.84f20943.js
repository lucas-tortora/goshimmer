(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[9856],{5911:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=["components"],o={},s="Event driven model",c={unversionedId:"implementation_design/event_driven_model",id:"implementation_design/event_driven_model",isDocsHomePage:!1,title:"Event driven model",description:"Event driven model is popular approach often used for example in GUI applications, where a program is waiting for some external event to take place (e.g. mouse click) in order to perform some action.",source:"@site/docs/implementation_design/event_driven_model.md",sourceDirName:"implementation_design",slug:"/implementation_design/event_driven_model",permalink:"/docs/implementation_design/event_driven_model",editUrl:"https://github.com/iotaledger/Goshimmer/tree/develop/docOps/docs/implementation_design/event_driven_model.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"How to send transaction",permalink:"/docs/tutorials/send_transaction"},next:{title:"Dependency of packages and plugins",permalink:"/docs/implementation_design/packages_plugins"}},p=[{value:"Glossary:",id:"glossary",children:[]},{value:"Creating new event with custom callbacks",id:"creating-new-event-with-custom-callbacks",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"event-driven-model"},"Event driven model"),(0,i.kt)("p",null,"Event driven model is popular approach often used for example in GUI applications, where a program is waiting for some external event to take place (e.g. mouse click) in order to perform some action.\nIn case of GoShimmer there is no GUI, however it applies this architecture approach as it's really flexible and is used to handle communication with other nodes and other internal parts.\nIn GoShimmer some of those events can be e.g. arrival of new tangle message, peering request or plugin start.\nWhen an event is triggered, an event handler (or a collection of handlers) is executed and the state of the application is updated as necessary."),(0,i.kt)("h2",{id:"glossary"},"Glossary:"),(0,i.kt)("p",null,"At first let's define some terms used further to avoid misunderstandings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Event - represents the type of event (e.g. new message or peering request) as well as set of handlers and trigger functions. Each type of event is separately defined\nwhich means that events are independent of each other - each event has its own set of handlers and is triggered separately.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Event handler (callback) - is a function that is executed when an event of given type occurs. An event handler can accept multiple arguments (e.g. message ID or plugin) so that it can perform appropriate actions.\nEvery handler must accept the same set of parameters. Each event has a different set of handlers (there can be multiple handlers) that are executed when the event is triggered.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Trigger - is a method that triggers execution of event handlers with given parameter values."))),(0,i.kt)("h2",{id:"creating-new-event-with-custom-callbacks"},"Creating new event with custom callbacks"),(0,i.kt)("p",null,"Below are the steps that show the example code necessary to create a custom event, attach a handler and trigger the event. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a function that will call event handlers (handler caller) for a specific event.\nEach event has only one handler caller. It enforces that all handlers for the event must share the same interface, because the caller will pass a fixed set of arguments of specific types to handler function.\nIt's not possible to pass different number of arguments or types to the handler function.\nCallers for all events must also share the same interface - the first argument represents the handler function that will be called represented by a generic argument.\nFurther arguments represent parameters that will be passed to the handler during execution. Below are example callers that accept one and two parameters respectively.\nMore arguments can be passed in similar manner. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func singleArgCaller(handler interface{}, params ...interface{}) {\n    handler.(func (*Plugin))(params[0].(*Plugin))\n}\n\nfunc twoArgsCaller(handler interface{}, params ...interface{}) {\n    handler.(func(*peer.Peer, error))(params[0].(*peer.Peer), params[1].(error))\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"handler.(func (*Plugin))(params[0].(*Plugin))")," - this code seems a little complicated, so to make things simpler we will divide into smaller parts and explain each:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"handler.(func (*Plugin))")," (A) - this part does type-cast the handler from generic type onto type of desired, specific function type - in this case it's a function that accepts ",(0,i.kt)("inlineCode",{parentName:"li"},"*Plugin")," as its only parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params[0].(*Plugin)")," (B)- similarly to previous part, first element of parameter slice is type-casted onto ",(0,i.kt)("inlineCode",{parentName:"li"},"*Plugin")," type, so that it matches the handler function interface."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"handler.(func (*Plugin))(params[0].(*Plugin))")," - the whole expression calls the type-casted handler function with the type-casted parameter value. We can also write this as ",(0,i.kt)("inlineCode",{parentName:"li"},"A(B)")," to make things simpler.")),(0,i.kt)("p",null,"The above explanation also allows a better understanding of why all handlers must share the same interface - handler caller passes fixed number of parameters and does type-casting of arguments onto specific types."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Next, a new event object needs to be created. We pass the handler caller as an argument, which is saved inside the object to be called when the event is triggered.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/iotaledger/hive.go/events"\n\nThisEvent := events.NewEvent(singleArgCaller)\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"After creating the event, handlers (or callbacks) can be attached to it. An event can have multiple callbacks, however they all need to share the same interface.\nOne thing to note, is that functions are not passed directly - first they are wrapped into a ",(0,i.kt)("inlineCode",{parentName:"li"},"events.Closure")," object like in the example below. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"ThisEvent.Attach(events.NewClosure(func (arg *Plugin) {\n    // do something\n}))\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"In order to trigger the event with some parameters we need to run the ",(0,i.kt)("inlineCode",{parentName:"li"},".Trigger")," method on the event object with parameters that handler functions will receive:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"somePlugin Plugin\nThisEvent.Trigger(&somePlugin)\n")))}m.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);