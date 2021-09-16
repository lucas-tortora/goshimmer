(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[1092],{1285:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return k}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i=["components"],s={description:"The communication layer represents the base Tangle layer where so called `Messages` are gossiped around. A `Message` contains payloads, and it is up to upper layers to interpret and derive functionality out of them.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","message","encoded message id","consensus","payload"]},d="Communication Layer APIs",m={unversionedId:"apis/communication",id:"apis/communication",isDocsHomePage:!1,title:"Communication Layer APIs",description:"The communication layer represents the base Tangle layer where so called `Messages` are gossiped around. A `Message` contains payloads, and it is up to upper layers to interpret and derive functionality out of them.",source:"@site/docs/apis/communication.md",sourceDirName:"apis",slug:"/apis/communication",permalink:"/docs/apis/communication",editUrl:"https://github.com/iotaledger/goshimmer/tree/develop/documentation/docs/apis/communication.md",version:"current",frontMatter:{description:"The communication layer represents the base Tangle layer where so called `Messages` are gossiped around. A `Message` contains payloads, and it is up to upper layers to interpret and derive functionality out of them.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","message","encoded message id","consensus","payload"]},sidebar:"docs",previous:{title:"Manual Peering API methods",permalink:"/docs/apis/manual_peering"},next:{title:"Ledgerstate API Methods",permalink:"/docs/apis/ledgerstate"}},p=[{value:"<code>/messages/:messageID</code>",id:"messagesmessageid",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Response Examples",id:"response-examples",children:[]},{value:"Results",id:"results",children:[]}]},{value:"<code>/messages/:messageID/metadata</code>",id:"messagesmessageidmetadata",children:[{value:"Parameters",id:"parameters-1",children:[]},{value:"Examples",id:"examples-1",children:[]},{value:"Response Examples",id:"response-examples-1",children:[]},{value:"Results",id:"results-1",children:[]}]},{value:"<code>/messages/:messageID/consensus</code>",id:"messagesmessageidconsensus",children:[{value:"Parameters",id:"parameters-2",children:[]},{value:"Examples",id:"examples-2",children:[]},{value:"Response Examples",id:"response-examples-2",children:[]},{value:"Results",id:"results-2",children:[]}]},{value:"<code>/data</code>",id:"data",children:[{value:"Parameters",id:"parameters-3",children:[]},{value:"Examples",id:"examples-3",children:[]},{value:"Response Examples",id:"response-examples-3",children:[]},{value:"Results",id:"results-3",children:[]}]},{value:"<code>/messages/payload</code>",id:"messagespayload",children:[{value:"Parameters",id:"parameters-4",children:[]},{value:"Examples",id:"examples-4",children:[]},{value:"Response Examples",id:"response-examples-4",children:[]},{value:"Results",id:"results-4",children:[]}]}],o={toc:p};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"communication-layer-apis"},"Communication Layer APIs"),(0,l.kt)("p",null,"The communication layer represents the base Tangle layer where so called ",(0,l.kt)("inlineCode",{parentName:"p"},"Messages")," are gossiped around. A ",(0,l.kt)("inlineCode",{parentName:"p"},"Message")," contains payloads and it is up to upper layers to interpret and derive functionality out of them."),(0,l.kt)("p",null,"The API provides the following functions to interact with this primitive layer:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#messagesmessageid"},"/messages/:messageID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#messagesmessageidmetadata"},"/messages/:messageID/metadata")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#messagesmessageidconsensus"},"/messages/:messageID/consensus")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#data"},"/data")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#messagespayload"},"/messages/payload"))),(0,l.kt)("p",null,"Client lib APIs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#client-lib---getmessage"},"GetMessage()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#client-lib---getmessagemetadata"},"GetMessageMetadata()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#client-lib---data"},"Data()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#client-lib---sendpayload"},"SendPayload()"))),(0,l.kt)("h2",{id:"messagesmessageid"},(0,l.kt)("inlineCode",{parentName:"h2"},"/messages/:messageID")),(0,l.kt)("p",null,"Return message from the tangle."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"messageID")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required or Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"ID of a message to retrieve")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"string")))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("h4",{id:"curl"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'http://localhost:8080/messages/:messageID'\n")),(0,l.kt)("p",null,"where ",(0,l.kt)("inlineCode",{parentName:"p"},":messageID")," is the base58 encoded message ID, e.g. 4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc."),(0,l.kt)("h4",{id:"client-lib---getmessage"},"Client lib - ",(0,l.kt)("inlineCode",{parentName:"h4"},"GetMessage")),(0,l.kt)("p",null,"Messages can be retrieved via ",(0,l.kt)("inlineCode",{parentName:"p"},"GetMessage(base58EncodedID string) (*jsonmodels.Message, error) ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'message, err := goshimAPI.GetMessage(base58EncodedMessageID)\nif err != nil {\n    // return error\n}\n\n// will print "Hello GoShimmer World"\nfmt.Println(string(message.Payload))\n')),(0,l.kt)("p",null,"Note that we're getting actual ",(0,l.kt)("inlineCode",{parentName:"p"},"Message")," objects from this call which represent a vertex in the communication layer Tangle. It does not matter what type of payload the message contains, meaning that this will also return messages which contain a transactions or DRNG payloads."),(0,l.kt)("h3",{id:"response-examples"},"Response Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc",\n    "strongParents": [\n        "6LrXyDCorw8bTWKFaEmm3CZG6Nb6Ga8Bmosi1GPypGc1",\n        "B89koPthm9zDx1p1fbkHwoyC1Buq896Spu3Mx1SmSete"\n    ],\n    "weakParents": [],\n    "strongApprovers": [\n        "4E4ucAA9UTTd1UC6ri4GYaS4dpzEnHPjs5gMEYhpUK8p",\n        "669BRH69afQ7VfZGmNTMTeh2wnwXGKdBxtUCcRQ9CPzq"\n    ],\n    "weakApprovers": [],\n    "issuerPublicKey": "9DB3j9cWYSuEEtkvanrzqkzCQMdH1FGv3TawJdVbDxkd",\n    "issuingTime": 1621873309,\n    "sequenceNumber": 4354,\n    "payloadType": "GenericDataPayloadType(0)",\n    "payload": "BAAAAAAAAAA=",\n    "signature": "2J5XuVnmaHo54WipirWo7drJeXG3iRsnLYfzaPPuy6TXKiVBqv6ZYg2NjYP75xvgvut1SKNm8oYTchGi5t2SjyWJ"\n}\n')),(0,l.kt)("h3",{id:"results"},"Results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Message ID.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"strongParents")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"List of strong parents' message IDs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"weakParents")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"List of weak parents' message IDs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"strongApprovers")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"List of strong approvers' message IDs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"weakApprovers")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"List of weak approvers' message IDs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"issuerPublicKey")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Public key of issuing node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"issuingTime")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int64")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Time this message was issued")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"sequenceNumber")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"uint64")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Message sequence number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"payloadType")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Payload type.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"payload")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]byte")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The contents of the message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"signature")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Message signature.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Error message. Omitted if success.")))),(0,l.kt)("h2",{id:"messagesmessageidmetadata"},(0,l.kt)("inlineCode",{parentName:"h2"},"/messages/:messageID/metadata")),(0,l.kt)("p",null,"Return message metadata."),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"messageID")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required or Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"ID of a message to retrieve")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"string")))),(0,l.kt)("h3",{id:"examples-1"},"Examples"),(0,l.kt)("h4",{id:"curl-1"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'http://localhost:8080/messages/:messageID/metadata'\n")),(0,l.kt)("p",null,"where ",(0,l.kt)("inlineCode",{parentName:"p"},":messageID")," is the base58 encoded message ID, e.g. 4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc."),(0,l.kt)("h4",{id:"client-lib---getmessagemetadata"},"Client lib - ",(0,l.kt)("inlineCode",{parentName:"h4"},"GetMessageMetadata")),(0,l.kt)("p",null,"Message metadata can be retrieved via ",(0,l.kt)("inlineCode",{parentName:"p"},"GetMessageMetadata(base58EncodedID string) (*jsonmodels.MessageMetadata, error)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"message, err := goshimAPI.GetMessageMetadata(base58EncodedMessageID)\nif err != nil {\n    // return error\n}\n\n// will print whether message is finalized\nfmt.Println(string(message.Finalized))\n")),(0,l.kt)("h3",{id:"response-examples-1"},"Response Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc",\n    "receivedTime": 1621873309,\n    "solid": true,\n    "solidificationTime": 1621873309,\n    "structureDetails": {\n        "rank": 23323,\n        "pastMarkerGap": 0,\n        "isPastMarker": true,\n        "pastMarkers": {\n            "markers": {\n                "1": 21904\n            },\n            "highestIndex": 21904,\n            "lowestIndex": 21904\n        },\n        "futureMarkers": {\n            "markers": {\n                "1": 21905\n            },\n            "highestIndex": 21905,\n            "lowestIndex": 21905\n        }\n    },\n    "branchID": "BranchID(MasterBranchID)",\n    "scheduled": false,\n    "booked": true,\n    "eligible": true,\n    "invalid": false,\n    "finalized": true,\n    "finalizedTime": 1621873310\n}\n')),(0,l.kt)("h3",{id:"results-1"},"Results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Message ID.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"receivedTime")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int64")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Time when message was received by the node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"solid")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flag indicating whether the message is solid.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"solidificationTime")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int64")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Time when message was solidified by the node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"structureDetails")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"StructureDetails")),(0,l.kt)("td",{parentName:"tr",align:"left"},"List of weak approvers' message IDs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"branchID")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Name of branch that the message is part of.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"scheduled")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flag indicating whether the message is scheduled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"booked")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flag indicating whether the message is booked.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"eligible")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flag indicating whether the message is eligible.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"invalid")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flag indicating whether the message is invalid.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"finalized")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flag indicating whether the message is finalized.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"finalizedTime")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Time when message was finalized.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Error message. Omitted if success.")))),(0,l.kt)("h2",{id:"messagesmessageidconsensus"},(0,l.kt)("inlineCode",{parentName:"h2"},"/messages/:messageID/consensus")),(0,l.kt)("p",null,"Return message consensus info such as opinion and FCoB data."),(0,l.kt)("h3",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"messageID")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required or Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"ID of a message to retrieve")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"string")))),(0,l.kt)("h3",{id:"examples-2"},"Examples"),(0,l.kt)("h4",{id:"curl-2"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'http://localhost:8080/messages/:messageID/consensus'\n")),(0,l.kt)("p",null,"where ",(0,l.kt)("inlineCode",{parentName:"p"},":messageID")," is the base58 encoded message ID, e.g. 4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc."),(0,l.kt)("h4",{id:"client-lib"},"Client lib"),(0,l.kt)("p",null,"This method is not available in the client library."),(0,l.kt)("h3",{id:"response-examples-2"},"Response Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "MessageID(4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc)",\n  "opinionFormedTime": 1621873309,\n  "payloadOpinionFormed": true,\n  "timestampOpinionFormed": true,\n  "messageOpinionFormed": true,\n  "messageOpinionTriggered": true,\n  "timestampOpinion": "Like",\n  "timestampLoK": "LevelOfKnowledge(Two)"\n}\n')),(0,l.kt)("h3",{id:"results-2"},"Results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Message ID.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"opinionFormedTime")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int64")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Time when the node formed full opinion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"payloadOpinionFormed")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flag indicating whether the node formed opinion about the payload.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"timestampOpinionFormed")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flag indicating whether the node formed opinion about the timestamp.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"messageOpinionFormed")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flag indicating whether the node formed opinion about the message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"messageOpinionTriggered")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flag indicating whether the node triggered an opinion formed event for the message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"timestampOpinion")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Opinion about the message's timestamp.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"timestampLoK")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Level of knowledge about message's timestamp.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Error message. Omitted if success.")))),(0,l.kt)("h2",{id:"data"},(0,l.kt)("inlineCode",{parentName:"h2"},"/data")),(0,l.kt)("p",null,"Method: ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")),(0,l.kt)("p",null,"A data message is simply a ",(0,l.kt)("inlineCode",{parentName:"p"},"Message")," containing some raw data (literally bytes). This type of message has therefore no real functionality other than that it is retrievable via ",(0,l.kt)("inlineCode",{parentName:"p"},"GetMessage"),"."),(0,l.kt)("h3",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"data")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required or Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"data bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"base64 serialized bytes")))),(0,l.kt)("h4",{id:"body"},"Body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": "dataBytes"\n}\n')),(0,l.kt)("h3",{id:"examples-3"},"Examples"),(0,l.kt)("h4",{id:"curl-3"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/data' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"data\": \"dataBytes\"}'\n")),(0,l.kt)("h4",{id:"client-lib---data"},"Client lib - ",(0,l.kt)("inlineCode",{parentName:"h4"},"Data")),(0,l.kt)("h5",{id:"datadata-byte-string-error"},(0,l.kt)("inlineCode",{parentName:"h5"},"Data(data []byte) (string, error)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'messageID, err := goshimAPI.Data([]byte("Hello GoShimmer World"))\nif err != nil {\n    // return error\n}\n')),(0,l.kt)("p",null,"Note that there is no need to do any additional work, since things like tip-selection, PoW and other tasks are done by the node itself."),(0,l.kt)("h3",{id:"response-examples-3"},"Response Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "messageID" \n}\n')),(0,l.kt)("h3",{id:"results-3"},"Results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Message ID of the message. Omitted if error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Error message. Omitted if success.")))),(0,l.kt)("h2",{id:"messagespayload"},(0,l.kt)("inlineCode",{parentName:"h2"},"/messages/payload")),(0,l.kt)("p",null,"Method: ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SendPayload()")," takes a ",(0,l.kt)("inlineCode",{parentName:"p"},"payload")," object of any type (data, transaction, drng, etc.) as a byte slice, issues a message with the given payload and returns its ",(0,l.kt)("inlineCode",{parentName:"p"},"messageID"),". Note that the payload must be valid, otherwise an error is returned."),(0,l.kt)("h3",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"payload")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required or Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"payload bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"base64 serialized bytes")))),(0,l.kt)("h4",{id:"body-1"},"Body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload": "payloadBytes"\n}\n')),(0,l.kt)("h3",{id:"examples-4"},"Examples"),(0,l.kt)("h4",{id:"curl-4"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/messages/payload' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"payload\": \"payloadBytes\"}'\n")),(0,l.kt)("h4",{id:"client-lib---sendpayload"},"Client lib - ",(0,l.kt)("inlineCode",{parentName:"h4"},"SendPayload")),(0,l.kt)("h5",{id:"sendpayloadpayload-byte-string-error"},(0,l.kt)("inlineCode",{parentName:"h5"},"SendPayload(payload []byte) (string, error)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'helloPayload := payload.NewData([]byte{"Hello GoShimmer World!"})\nmessageID, err := goshimAPI.SendPayload(helloPayload.Bytes())\n')),(0,l.kt)("h3",{id:"response-examples-4"},"Response Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "id": "messageID" \n}\n')),(0,l.kt)("h3",{id:"results-4"},"Results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Message ID of the message. Omitted if error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Error message. Omitted if success.")))),(0,l.kt)("p",null,"Note that there is no need to do any additional work, since things like tip-selection, PoW and other tasks are done by the node itself."))}k.isMDXComponent=!0},3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=m(a),g=r,N=k["".concat(d,".").concat(g)]||k[g]||o[g]||l;return a?n.createElement(N,i(i({ref:t},p),{},{components:a})):n.createElement(N,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"}}]);