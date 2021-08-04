(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[6405],{7243:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var n=a(2122),s=a(9756),r=(a(7294),a(3905)),i=["components"],l={},o="Tools API Methods",p={unversionedId:"apis/tools",id:"apis/tools",isDocsHomePage:!1,title:"Tools API Methods",description:"Tools API allows retrieving technical info about the state of the node.",source:"@site/docs/apis/tools.md",sourceDirName:"apis",slug:"/apis/tools",permalink:"/docs/apis/tools",editUrl:"https://github.com/iotaledger/goshimmer/tree/develop/documentation/docs/apis/tools.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Spammer API Methods",permalink:"/docs/apis/spammer"},next:{title:"Tooling",permalink:"/docs/tooling"}},d=[{value:"<code>/tools/message/pastcone</code>",id:"toolsmessagepastcone",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}]},{value:"<code>/tools/message/missing</code>",id:"toolsmessagemissing",children:[{value:"Parameters",id:"parameters-1",children:[]},{value:"Examples",id:"examples-1",children:[]}]},{value:"<code>/tools/message/approval</code>",id:"toolsmessageapproval",children:[{value:"Parameters",id:"parameters-2",children:[]},{value:"Examples",id:"examples-2",children:[]}]},{value:"<code>tools/message/orphanage</code>",id:"toolsmessageorphanage",children:[{value:"Parameters",id:"parameters-3",children:[]},{value:"Examples",id:"examples-3",children:[]}]},{value:"<code>tools/diagnostic/messages</code>",id:"toolsdiagnosticmessages",children:[{value:"Parameters",id:"parameters-4",children:[]},{value:"Examples",id:"examples-4",children:[]}]},{value:"<code>tools/diagnostic/messages/firstweakreferences</code>",id:"toolsdiagnosticmessagesfirstweakreferences",children:[{value:"Parameters",id:"parameters-5",children:[]},{value:"Examples",id:"examples-5",children:[]}]},{value:"<code>tools/diagnostic/messages/rank/:rank</code>",id:"toolsdiagnosticmessagesrankrank",children:[{value:"Parameters",id:"parameters-6",children:[]},{value:"Examples",id:"examples-6",children:[]}]},{value:"<code>tools/diagnostic/utxodag</code>",id:"toolsdiagnosticutxodag",children:[{value:"Parameters",id:"parameters-7",children:[]},{value:"Examples",id:"examples-7",children:[]}]},{value:"<code>tools/diagnostic/branches</code>",id:"toolsdiagnosticbranches",children:[{value:"Parameters",id:"parameters-8",children:[]},{value:"Examples",id:"examples-8",children:[]}]},{value:"<code>tools/diagnostic/branches/lazybooked</code>",id:"toolsdiagnosticbrancheslazybooked",children:[{value:"Parameters",id:"parameters-9",children:[]},{value:"Examples",id:"examples-9",children:[]}]},{value:"<code>tools/diagnostic/branches/invalid</code>",id:"toolsdiagnosticbranchesinvalid",children:[{value:"Parameters",id:"parameters-10",children:[]},{value:"Examples",id:"examples-10",children:[]}]},{value:"<code>tools/diagnostic/tips</code>",id:"toolsdiagnostictips",children:[{value:"Parameters",id:"parameters-11",children:[]},{value:"Examples",id:"examples-11",children:[]}]},{value:"<code>tools/diagnostic/tips/strong</code>",id:"toolsdiagnostictipsstrong",children:[{value:"Parameters",id:"parameters-12",children:[]},{value:"Examples",id:"examples-12",children:[]}]},{value:"<code>tools/diagnostic/tips/weak</code>",id:"toolsdiagnostictipsweak",children:[{value:"Parameters",id:"parameters-13",children:[]},{value:"Examples",id:"examples-13",children:[]}]},{value:"<code>tools/diagnostic/drng</code>",id:"toolsdiagnosticdrng",children:[{value:"Parameters",id:"parameters-14",children:[]},{value:"Examples",id:"examples-14",children:[]}]}],m={toc:d};function c(e){var t=e.components,a=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tools-api-methods"},"Tools API Methods"),(0,r.kt)("p",null,"Tools API allows retrieving technical info about the state of the node."),(0,r.kt)("p",null,"The API provides the following functions and endpoints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toolsmessagepastcone"},"/tools/message/pastcone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toolsmessagemissing"},"/tools/message/missing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tools/message/approval"},"/tools/message/approval")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toolsmessageorphanage"},"/tools/message/orphanage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toolsdiagnosticmessages"},"tools/diagnostic/messages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toolsdiagnosticmessagesfirstweakreferences"},"tools/diagnostic/messages/firstweakreferences")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toolsdiagnosticmessagesrankrank"},"tools/diagnostic/messages/rank/:rank")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toolsdiagnosticutxodag"},"tools/diagnostic/utxodag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toolsdiagnosticbranches"},"tools/diagnostic/branches")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toolsdiagnosticbrancheslazybooked"},"tools/diagnostic/branches/lazybooked")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toolsdiagnosticbranchesinvalid"},"tools/diagnostic/branches/invalid")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toolsdiagnostictips"},"tools/diagnostic/tips")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toolsdiagnostictipsstrong"},"tools/diagnostic/tips/strong")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toolsdiagnostictipsweak"},"tools/diagnostic/tips/weak")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#toolsdiagnosticdrng"},"tools/diagnostic/drng"))),(0,r.kt)("p",null,"Client lib APIs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#client-lib---pastconeexist"},"PastConeExist()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#client-lib---missing"},"Missing()"))),(0,r.kt)("h2",{id:"toolsmessagepastcone"},(0,r.kt)("inlineCode",{parentName:"h2"},"/tools/message/pastcone")),(0,r.kt)("p",null,"Checks that all the messages in the past cone of a message are existing on the node down to the genesis. Returns the number of messages in the past cone as well."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"ID")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required or Optional")),(0,r.kt)("td",{parentName:"tr",align:null},"required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"Message ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"string")))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("h4",{id:"curl"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/message/pastcone?ID=4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc'\n")),(0,r.kt)("h4",{id:"client-lib---pastconeexist"},"Client lib - ",(0,r.kt)("inlineCode",{parentName:"h4"},"PastConeExist()")),(0,r.kt)("p",null,"Past cone can be checked using ",(0,r.kt)("inlineCode",{parentName:"p"},"PastConeExist(base58EncodedMessageID string) (*jsonmodels.PastconeResponse, error)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"pastConeCheck, err := goshimAPI.PastConeExist(base58EncodedMessageID)\nif err != nil {\n    // return error\n}\n\n// will print the past cone size\nfmt.Println(string(pastConeCheck.PastConeSize))\n")),(0,r.kt)("h4",{id:"response-examples"},"Response examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "exist": true,\n  "pastConeSize": 475855\n}\n')),(0,r.kt)("h4",{id:"results"},"Results"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"exist")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A boolean indicates if the message and its past cone exist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pastConeSize")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Size of the past cone of the given message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Error message. Omitted if success.")))),(0,r.kt)("h2",{id:"toolsmessagemissing"},(0,r.kt)("inlineCode",{parentName:"h2"},"/tools/message/missing")),(0,r.kt)("p",null,"Returns all the missing messages and their count."),(0,r.kt)("h3",{id:"parameters-1"},"Parameters"),(0,r.kt)("p",null,"None"),(0,r.kt)("h3",{id:"examples-1"},"Examples"),(0,r.kt)("h4",{id:"curl-1"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/message/missing'\n")),(0,r.kt)("h4",{id:"client-lib---missing"},"Client lib - ",(0,r.kt)("inlineCode",{parentName:"h4"},"Missing()")),(0,r.kt)("p",null,"Missing messages can be retrieved using ",(0,r.kt)("inlineCode",{parentName:"p"},"Missing() (*jsonmodels.MissingResponse, error)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"missingMsgs, err := goshimAPI.Missing()\nif err != nil {\n    // return error\n}\n\n// will print number of missing messages\nfmt.Println(string(missingMsgs.Count))\n")),(0,r.kt)("h4",{id:"response-examples-1"},"Response examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ids": [],\n  "count": 0\n}\n')),(0,r.kt)("h4",{id:"results-1"},"Results"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ids")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[]string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of missing messages' IDs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"count")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count of missing messages.")))),(0,r.kt)("h2",{id:"toolsmessageapproval"},(0,r.kt)("inlineCode",{parentName:"h2"},"/tools/message/approval")),(0,r.kt)("p",null,"Returns the first approver of all messages."),(0,r.kt)("h3",{id:"parameters-2"},"Parameters"),(0,r.kt)("p",null,"None"),(0,r.kt)("h3",{id:"examples-2"},"Examples"),(0,r.kt)("h4",{id:"curl-2"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/message/approval'\n")),(0,r.kt)("h4",{id:"response-examples-2"},"Response examples"),(0,r.kt)("p",null,"The response is written in a csv file."),(0,r.kt)("h2",{id:"toolsmessageorphanage"},(0,r.kt)("inlineCode",{parentName:"h2"},"tools/message/orphanage")),(0,r.kt)("p",null,"Returns orphaned messages of the future cone of the given message ID."),(0,r.kt)("h3",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"msgID")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required or Optional")),(0,r.kt)("td",{parentName:"tr",align:null},"required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"Message ID encoded in Bases58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"string")))),(0,r.kt)("h3",{id:"examples-3"},"Examples"),(0,r.kt)("h4",{id:"curl-3"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/message/orphanage?msgID=4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc'\n")),(0,r.kt)("h4",{id:"response-examples-3"},"Response examples"),(0,r.kt)("p",null,"The response is written in a csv file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"MsgID,MsgIssuerID,MsgIssuanceTime,MsgArrivalTime,MsgSolidTime,MsgApprovedBy\n...\n\n7h7arHrxYhuuzgpvRtuw6jn5AwtAA5AEiKnAzdQheyDW,dAnF7pQ6k7a,1622100376301474621,1622100390350323240,1622100390350376317,true\n")),(0,r.kt)("h2",{id:"toolsdiagnosticmessages"},(0,r.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/messages")),(0,r.kt)("p",null,"Returns all the messages in the storage."),(0,r.kt)("h3",{id:"parameters-4"},"Parameters"),(0,r.kt)("p",null,"None"),(0,r.kt)("h3",{id:"examples-4"},"Examples"),(0,r.kt)("h4",{id:"curl-4"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/messages\n")),(0,r.kt)("h4",{id:"response-examples-4"},"Response examples"),(0,r.kt)("p",null,"The response is written in a csv file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ID,IssuerID,IssuerPublicKey,IssuanceTime,ArrivalTime,SolidTime,ScheduledTime,BookedTime,OpinionFormedTime,FinalizedTime,StrongParents,WeakParents,StrongApprovers,WeakApprovers,BranchID,InclusionState,Scheduled,Booked,Eligible,Invalid,Finalized,Rank,IsPastMarker,PastMarkers,PMHI,PMLI,FutureMarkers,FMHI,FMLI,PayloadType,TransactionID,PayloadOpinionFormed,TimestampOpinionFormed,MessageOpinionFormed,MessageOpinionTriggered,TimestampOpinion,TimestampLoK\n\n...\n\n7h7arHrxYhuuzgpvRtuw6jn5AwtAA5AEiKnAzdQheyDW,dAnF7pQ6k7a,CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3,1622100376301474621,1622100390350323240,1622100390350376317,1622100390350655597,1622100390497058485,1622100394498368012,11111111111111111111111111111111,,E8jiyKgouhbk8GK8xNiwSnLM4FSzmCfvCmBijbKd8z8A,,BranchID(MasterBranchID),InclusionState(Confirmed),true,true,true,false,1,false,0:0,0,0,1:2,2,2,TransactionType(1337),DBejuv32xNJdZQurbitPTktm5HJML5SdnmN6ic6xQGKd,true,true,true,true,Like,LevelOfKnowledge(Two)\n")),(0,r.kt)("h2",{id:"toolsdiagnosticmessagesfirstweakreferences"},(0,r.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/messages/firstweakreferences")),(0,r.kt)("p",null,"Returns the first weak reference of all messages in the storage."),(0,r.kt)("h3",{id:"parameters-5"},"Parameters"),(0,r.kt)("p",null,"None"),(0,r.kt)("h3",{id:"examples-5"},"Examples"),(0,r.kt)("h4",{id:"curl-5"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/messages/firstweakreferences\n")),(0,r.kt)("h4",{id:"response-examples-5"},"Response examples"),(0,r.kt)("p",null,"The response is written in a csv file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ID,IssuerID,IssuerPublicKey,IssuanceTime,ArrivalTime,SolidTime,ScheduledTime,BookedTime,OpinionFormedTime,FinalizedTime,StrongParents,WeakParents,StrongApprovers,WeakApprovers,BranchID,InclusionState,Scheduled,Booked,Eligible,Invalid,Finalized,Rank,IsPastMarker,PastMarkers,PMHI,PMLI,FutureMarkers,FMHI,FMLI,PayloadType,TransactionID,PayloadOpinionFormed,TimestampOpinionFormed,MessageOpinionFormed,MessageOpinionTriggered,TimestampOpinion,TimestampLoK\n\n...\n\n7h7arHrxYhuuzgpvRtuw6jn5AwtAA5AEiKnAzdQheyDW,dAnF7pQ6k7a,CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3,1622100376301474621,1622100390350323240,1622100390350376317,1622100390350655597,1622100390497058485,1622100394498368012,11111111111111111111111111111111,,E8jiyKgouhbk8GK8xNiwSnLM4FSzmCfvCmBijbKd8z8A,,BranchID(MasterBranchID),InclusionState(Confirmed),true,true,true,false,1,false,0:0,0,0,1:2,2,2,TransactionType(1337),DBejuv32xNJdZQurbitPTktm5HJML5SdnmN6ic6xQGKd,true,true,true,true,Like,LevelOfKnowledge(Two)\n")),(0,r.kt)("h2",{id:"toolsdiagnosticmessagesrankrank"},(0,r.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/messages/rank/:rank")),(0,r.kt)("p",null,"Returns a list of messages with rank >= of the given rank parameter."),(0,r.kt)("h3",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"rank")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required or Optional")),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"message rank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"uint64")))),(0,r.kt)("h3",{id:"examples-6"},"Examples"),(0,r.kt)("h4",{id:"curl-6"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/messages/rank/:rank\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},":rank")," is the uint64, e.g. 20."),(0,r.kt)("h4",{id:"response-examples-6"},"Response examples"),(0,r.kt)("p",null,"The response is written in a csv file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ID,IssuerID,IssuerPublicKey,IssuanceTime,ArrivalTime,SolidTime,ScheduledTime,BookedTime,OpinionFormedTime,FinalizedTime,StrongParents,WeakParents,StrongApprovers,WeakApprovers,BranchID,InclusionState,Scheduled,Booked,Eligible,Invalid,Finalized,Rank,IsPastMarker,PastMarkers,PMHI,PMLI,FutureMarkers,FMHI,FMLI,PayloadType,TransactionID,PayloadOpinionFormed,TimestampOpinionFormed,MessageOpinionFormed,MessageOpinionTriggered,TimestampOpinion,TimestampLoK\n\n...\n\nGk4QS3sjiuUGnXNJhd4i6ZcTE3ZtpTKAj31XnmkG3i2g,dAnF7pQ6k7a,CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3,1622100453303518895,1622100453307914949,1622100453308087594,-6795364578871345152,1622100453308973957,1622100453309435279,59Y7xDxqyQmDkwFXeGwbMLVMAXFgToApdVwdewzuiSsp;BZfTFhPrvx4hh6vgX9uGiHHm3mr7UXAssieYrFZA84YC,,3KmrREsvgngdqCQGEWVxcGGMG3DwHnBXCmC8TvEvWB4R;GyoUwTsXCEDx796EgGoXm9wc6XwHdtompz4B8s8RkaLq,,BranchID(MasterBranchID),InclusionState(Confirmed),false,true,true,false,50,true,1:50,50,50,1:51,51,51,Statement(3),,true,true,true,true,Like,LevelOfKnowledge(Two)\n")),(0,r.kt)("h2",{id:"toolsdiagnosticutxodag"},(0,r.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/utxodag")),(0,r.kt)("p",null,"Returns the information of all transactions in the storage."),(0,r.kt)("h3",{id:"parameters-7"},"Parameters"),(0,r.kt)("p",null,"None."),(0,r.kt)("h3",{id:"examples-7"},"Examples"),(0,r.kt)("h4",{id:"curl-7"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/utxodag\n")),(0,r.kt)("h4",{id:"response-examples-7"},"Response examples"),(0,r.kt)("p",null,"The response is written in a csv file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ID,IssuanceTime,SolidTime,OpinionFormedTime,AccessManaPledgeID,ConsensusManaPledgeID,Inputs,Outputs,Attachments,BranchID,BranchLiked,BranchMonotonicallyLiked,Conflicting,InclusionState,Finalized,LazyBooked,Liked,LoK,FCOB1Time,FCOB2Time\n\n...\n\nuNUZMoAdYZu74ZREoZr84AbYb9du1fC8vTbXpsX3rj6,1622102040372947362,1622102040419353230,1622102044420491940,2GtxMQD94KvDH1SJPJV7icxofkyV1njuUZKtsqKmtux5,2GtxMQD94KvDH1SJPJV7icxofkyV1njuUZKtsqKmtux5,DBejuv32xNJdZQurbitPTktm5HJML5SdnmN6ic6xQGKd:83,uNUZMoAdYZu74ZREoZr84AbYb9du1fC8vTbXpsX3rj6:0,3Lu696zF21tCAeqX7mEjwC1xPocWMnQVHAPMtd9CCdep,BranchID(MasterBranchID),true,true,false,InclusionState(Confirmed),true,false,true,LevelOfKnowledge(Two),1622102042419829963,1622102044420266997\n")),(0,r.kt)("h2",{id:"toolsdiagnosticbranches"},(0,r.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/branches")),(0,r.kt)("p",null,"Returns the information of all conflict and aggregated branches in the storag."),(0,r.kt)("h3",{id:"parameters-8"},"Parameters"),(0,r.kt)("p",null,"None."),(0,r.kt)("h3",{id:"examples-8"},"Examples"),(0,r.kt)("h4",{id:"curl-8"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/branches\n")),(0,r.kt)("h4",{id:"response-examples-8"},"Response examples"),(0,r.kt)("p",null,"The response is written in a csv file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ID,ConflictSet,IssuanceTime,SolidTime,OpinionFormedTime,Liked,MonotonicallyLiked,InclusionState,Finalized,LazyBooked,TransactionLiked\n\n...\n\n9vtFVukmqAbrNd4Y2iUPJ1XrqJofirv2Gg4BeJvQVSxu,CgN1qBu44ZsDD8WCCyvaBhRaRZPA4ioQfj86dosjLWJo;9vtFVukmqAbrNd4Y2iUPJ1XrqJofirv2Gg4BeJvQVSxu,1622102719697156578,1622102719714912166,-6795364578871345152,false,false,InclusionState(Pending),false,false,false\n")),(0,r.kt)("h2",{id:"toolsdiagnosticbrancheslazybooked"},(0,r.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/branches/lazybooked")),(0,r.kt)("p",null,"Returns the information of all lazy booked branches."),(0,r.kt)("h3",{id:"parameters-9"},"Parameters"),(0,r.kt)("p",null,"None."),(0,r.kt)("h3",{id:"examples-9"},"Examples"),(0,r.kt)("h4",{id:"curl-9"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/branches/lazybooked\n")),(0,r.kt)("h4",{id:"response-examples-9"},"Response examples"),(0,r.kt)("p",null,"The response is written in a csv file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ID,ConflictSet,IssuanceTime,SolidTime,OpinionFormedTime,Liked,MonotonicallyLiked,InclusionState,Finalized,LazyBooked,TransactionLiked\n\n...\n\n7tDqL25HYMjpuFziNGZksQ7BigCB85XqfYRskEwTovKo,,1622044058080683973,1622044102712464942,1622044102702350700,false,false,InclusionState(Rejected),false,true,false\n")),(0,r.kt)("h2",{id:"toolsdiagnosticbranchesinvalid"},(0,r.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/branches/invalid")),(0,r.kt)("p",null,"Returns the information of all invalid branches."),(0,r.kt)("h3",{id:"parameters-10"},"Parameters"),(0,r.kt)("p",null,"None."),(0,r.kt)("h3",{id:"examples-10"},"Examples"),(0,r.kt)("h4",{id:"curl-10"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/branches/invalid\n")),(0,r.kt)("h4",{id:"response-examples-10"},"Response examples"),(0,r.kt)("p",null,"The response is written in a csv file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ID,ConflictSet,IssuanceTime,SolidTime,OpinionFormedTime,Liked,MonotonicallyLiked,InclusionState,Finalized,LazyBooked,TransactionLiked\n\n...\n\n7tDqL25HYMjpuFziNGZksQ7BigCB85XqfYRskEwTovKo,,1622044058080683973,1622044102712464942,1622044102702350700,false,false,InclusionState(Rejected),false,false,false\n")),(0,r.kt)("h2",{id:"toolsdiagnostictips"},(0,r.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/tips")),(0,r.kt)("p",null,"Returns the information of all tips."),(0,r.kt)("h3",{id:"parameters-11"},"Parameters"),(0,r.kt)("p",null,"None."),(0,r.kt)("h3",{id:"examples-11"},"Examples"),(0,r.kt)("h4",{id:"curl-11"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/tips\n")),(0,r.kt)("h4",{id:"response-examples-11"},"Response examples"),(0,r.kt)("p",null,"The response is written in a csv file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tipType,ID,IssuerID,IssuerPublicKey,IssuanceTime,ArrivalTime,SolidTime,ScheduledTime,BookedTime,OpinionFormedTime,FinalizedTime,StrongParents,WeakParents,StrongApprovers,WeakApprovers,BranchID,InclusionState,Scheduled,Booked,Eligible,Invalid,Finalized,Rank,IsPastMarker,PastMarkers,PMHI,PMLI,FutureMarkers,FMHI,FMLI,PayloadType,TransactionID,PayloadOpinionFormed,TimestampOpinionFormed,MessageOpinionFormed,MessageOpinionTriggered,TimestampOpinion,TimestampLoK\n\n...\n\nTipType(StrongTip),6fK6KYG8LroV5qZ6n7YSaG83Sd4rRLFqy5hYggvBZ1WU,dAnF7pQ6k7a,CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3,1622103153705255685,1622103153707874989,1622103153707971187,-6795364578871345152,1622103153708819166,1622103153709133607,71NdGRvB2MFNutfQFsrcj5uMuEqv6fRw4vQ3GCqjEX9F,,,,BranchID(MasterBranchID),InclusionState(Confirmed),false,true,true,false,1987,true,3:1972,1972,1972,,0,0,Statement(3),,true,true,true,true,Like,LevelOfKnowledge(Two)\n")),(0,r.kt)("h2",{id:"toolsdiagnostictipsstrong"},(0,r.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/tips/strong")),(0,r.kt)("p",null,"Returns the information of all strong tips."),(0,r.kt)("h3",{id:"parameters-12"},"Parameters"),(0,r.kt)("p",null,"None."),(0,r.kt)("h3",{id:"examples-12"},"Examples"),(0,r.kt)("h4",{id:"curl-12"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/tips/strong\n")),(0,r.kt)("h4",{id:"response-examples-12"},"Response examples"),(0,r.kt)("p",null,"The response is written in a csv file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tipType,ID,IssuerID,IssuerPublicKey,IssuanceTime,ArrivalTime,SolidTime,ScheduledTime,BookedTime,OpinionFormedTime,FinalizedTime,StrongParents,WeakParents,StrongApprovers,WeakApprovers,BranchID,InclusionState,Scheduled,Booked,Eligible,Invalid,Finalized,Rank,IsPastMarker,PastMarkers,PMHI,PMLI,FutureMarkers,FMHI,FMLI,PayloadType,TransactionID,PayloadOpinionFormed,TimestampOpinionFormed,MessageOpinionFormed,MessageOpinionTriggered,TimestampOpinion,TimestampLoK\n\n...\n\nTipType(StrongTip),5rjGXZE5ZLhfnNS7sbgviDCCS3857Su9h8JjuQSb2zYH,dAnF7pQ6k7a,CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3,1622103297295336333,1622103297297702646,1622103297297817779,-6795364578871345152,1622103297302792080,1622103297303196243,3F3KwuyLesP4zzqLLz5p3da5LqahRwygdQS7qAZkTQsZ,,,,BranchID(MasterBranchID),InclusionState(Confirmed),false,true,true,false,2088,true,3:2073,2073,2073,,0,0,GenericDataPayloadType(0),,true,true,true,true,Like,LevelOfKnowledge(Two)\n")),(0,r.kt)("h2",{id:"toolsdiagnostictipsweak"},(0,r.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/tips/weak")),(0,r.kt)("p",null,"Returns the information of all weak tips."),(0,r.kt)("h3",{id:"parameters-13"},"Parameters"),(0,r.kt)("p",null,"None."),(0,r.kt)("h3",{id:"examples-13"},"Examples"),(0,r.kt)("h4",{id:"curl-13"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/tips/weak\n")),(0,r.kt)("h4",{id:"response-examples-13"},"Response examples"),(0,r.kt)("p",null,"The response is written in a csv file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tipType,ID,IssuerID,IssuerPublicKey,IssuanceTime,ArrivalTime,SolidTime,ScheduledTime,BookedTime,OpinionFormedTime,FinalizedTime,StrongParents,WeakParents,StrongApprovers,WeakApprovers,BranchID,InclusionState,Scheduled,Booked,Eligible,Invalid,Finalized,Rank,IsPastMarker,PastMarkers,PMHI,PMLI,FutureMarkers,FMHI,FMLI,PayloadType,TransactionID,PayloadOpinionFormed,TimestampOpinionFormed,MessageOpinionFormed,MessageOpinionTriggered,TimestampOpinion,TimestampLoK\n\n...\n\nTipType(WeakTip),5rjGXZE5ZLhfnNS7sbgviDCCS3857Su9h8JjuQSb2zYH,dAnF7pQ6k7a,CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3,1622103297295336333,1622103297297702646,1622103297297817779,-6795364578871345152,1622103297302792080,1622103297303196243,3F3KwuyLesP4zzqLLz5p3da5LqahRwygdQS7qAZkTQsZ,,,,BranchID(MasterBranchID),InclusionState(Confirmed),false,true,true,false,2088,true,3:2073,2073,2073,,0,0,GenericDataPayloadType(0),,true,true,true,true,Like,LevelOfKnowledge(Two)\n")),(0,r.kt)("h2",{id:"toolsdiagnosticdrng"},(0,r.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/drng")),(0,r.kt)("p",null,"Returns the information of all dRNG messages."),(0,r.kt)("h3",{id:"parameters-14"},"Parameters"),(0,r.kt)("p",null,"None."),(0,r.kt)("h3",{id:"examples-14"},"Examples"),(0,r.kt)("h4",{id:"curl-14"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/drng\n")),(0,r.kt)("h4",{id:"response-examples-14"},"Response examples"),(0,r.kt)("p",null,"The response is written in a csv file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ID,IssuerID,IssuerPublicKey,IssuanceTime,ArrivalTime,SolidTime,ScheduledTime,BookedTime,OpinionFormedTime,dRNGPayloadType,InstanceID,Round,PreviousSignature,Signature,DistributedPK\n\n...\n\nBsSw31y4BufNoPp93TRfgDfXdrjnevsm7Up2mHtybzdK,CRPFWYijV1T,GUdTwLDb6t6vZ7X5XzEnjFNDEVPteU7tVQ9nzKLfPjdo,1621963390710701221,1621963391011675455,1621963391011749004,1621963391011818075,1621963391011903917,1621963391012012853,dRNG(111),1339,2210960,us8vrWKdKtNvXdx424hgqGYpM65Cs2KAGmAyhinCncn6PQ8Dv4hLh1rZ3ugvk2QZkGofJhwNvx2EmD5Vzcz3RQTowfiNBTpLJYEUM4swAPXaFwSGntWhvWDYtpyHrXtGtBP,24LuByAUakW36DmEyCz58Ld5utTeKh3zCUbJ4mn6Eo6rZmhb7wnZnjQN3KMm59TjHwSm158iAviP1fS2mc2kuMc4Vf2k4M88hgN1reCUVGn5ufwxHmMEAZVXi82L2k6XLxNY,6HbdGdict6Egw8gwBRYmdgrMWt46qw1LtqkVk51D4sQx51XMDNEbsX6mcXZ1PjJJDy\n")))}c.isMDXComponent=!0},3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=s,k=c["".concat(o,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);