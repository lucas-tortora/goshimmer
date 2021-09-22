(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[3517],{720:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=["components"],s={description:"How to set up your own GoShimmer node in the GoShimmer testnet with Docker",image:"/img/tutorials/setup/dashboard.png",keywords:["node","set up","docker","http API","tcp","dashboard","prometheus","grafana"]},l="Setting up a GoShimmer node",d={unversionedId:"tutorials/setup",id:"tutorials/setup",isDocsHomePage:!1,title:"Setting up a GoShimmer node",description:"How to set up your own GoShimmer node in the GoShimmer testnet with Docker",source:"@site/docs/tutorials/setup.md",sourceDirName:"tutorials",slug:"/tutorials/setup",permalink:"/docs/tutorials/setup",editUrl:"https://github.com/iotaledger/goshimmer/tree/develop/documentation/docs/tutorials/setup.md",version:"current",frontMatter:{description:"How to set up your own GoShimmer node in the GoShimmer testnet with Docker",image:"/img/tutorials/setup/dashboard.png",keywords:["node","set up","docker","http API","tcp","dashboard","prometheus","grafana"]},sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/faq"},next:{title:"How to Obtain Tokens From the Faucet",permalink:"/docs/tutorials/obtain_tokens"}},p=[{value:"Why You Should Run a Node",id:"why-you-should-run-a-node",children:[]},{value:"Installing GoShimmer with Docker",id:"installing-goshimmer-with-docker",children:[{value:"Install Docker Compose",id:"install-docker-compose",children:[]},{value:"Define the docker-compose.yml",id:"define-the-docker-composeyml",children:[]}]},{value:"Running the GoShimmer Node",id:"running-the-goshimmer-node",children:[{value:"Syncing",id:"syncing",children:[]}]},{value:"Managing the GoShimmer node lifecycle",id:"managing-the-goshimmer-node-lifecycle",children:[{value:"Stopping the Node",id:"stopping-the-node",children:[]},{value:"Resetting the Node",id:"resetting-the-node",children:[]},{value:"Upgrading the Node",id:"upgrading-the-node",children:[]},{value:"Following Log Output",id:"following-log-output",children:[]},{value:"Create a log.txt",id:"create-a-logtxt",children:[]},{value:"Update Grafana Dashboard",id:"update-grafana-dashboard",children:[]}]},{value:"Setting up the Grafana dashboard",id:"setting-up-the-grafana-dashboard",children:[{value:"Add Prometheus and Grafana Containers to <code>docker-compose.yml</code>",id:"add-prometheus-and-grafana-containers-to-docker-composeyml",children:[]}]}],m={toc:p};function c(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-a-goshimmer-node"},"Setting up a GoShimmer node"),(0,r.kt)("p",null,"This page describes how to set up your own GoShimmer node in the GoShimmer testnet with Docker."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"DISCLAIMER")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Note that there will be breaking changes frequently (approx. bi-weekly) where the entire network needs to upgrade. If you don't have time to continuously monitor and upgrade your node, then running a GoShimmer node might not be for you."),"  "),(0,r.kt)("p",{parentName:"div"},"We want to emphasize that running a GoShimmer node requires proper knowledge in Linux and IT related topics such as networking and so on. It is not meant as a node to be run by people with little experience in the mentioned fields. ",(0,r.kt)("strong",{parentName:"p"},"Do not plan to run any production level services on your node/network.")))),(0,r.kt)("h2",{id:"why-you-should-run-a-node"},"Why You Should Run a Node"),(0,r.kt)("p",null,"Running a node in the GoShimmer testnet helps us in the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It increases the amount of nodes in the network and thus lets it form a more realistic network."),(0,r.kt)("li",{parentName:"ul"},"Your node will be configured to send debug log messages to a centralized logger from which we can assess and debug research questions and occurring problems."),(0,r.kt)("li",{parentName:"ul"},"Your node is configured to send metric data to a centralized analysis server where we store information such as resource consumption, traffic, FPC vote context processing and so on. This data helps us further fostering the development of GoShimmer and assessing network behavior."),(0,r.kt)("li",{parentName:"ul"},"If you expose your HTTP API port, you provide an entrypoint for other people to interact with the network.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Any metric data is anonymous."))),(0,r.kt)("h2",{id:"installing-goshimmer-with-docker"},"Installing GoShimmer with Docker"),(0,r.kt)("h4",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We do not provide a Docker image or binaries for ARM based systems such as Raspberry Pis."))),(0,r.kt)("p",null,"We recommend running GoShimmer on a x86 VPS with following minimum hardware specs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2 cores / 4 threads"),(0,r.kt)("li",{parentName:"ul"},"4 GB of memory"),(0,r.kt)("li",{parentName:"ul"},"40 GB of disk space")),(0,r.kt)("p",null,"A cheap ",(0,r.kt)("a",{parentName:"p",href:"https://www.hetzner.de/cloud"},"CX21 Hetzner instance")," is thereby sufficient."),(0,r.kt)("p",null,"If you plan on running your GoShimmer node from home, please only do so if you know how to properly configure NAT on your router, as otherwise your node will not correctly participate in the network."),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In the following sections we are going to use a CX21 Hetzner instance with Ubuntu 20.04 while being logged in as root"))),(0,r.kt)("p",null,"Lets first upgrade the packages on our system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt update && apt dist-upgrade -y\n")),(0,r.kt)("h4",{id:"install-docker"},"Install Docker"),(0,r.kt)("p",null,"Install needed dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt-get install \\\n     apt-transport-https \\\n     ca-certificates \\\n     curl \\\n     gnupg-agent \\\n     software-properties-common\n")),(0,r.kt)("p",null,"Add Docker\u2019s official GPG key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -\n")),(0,r.kt)("p",null,"Verify that the GPG key matches:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt-key fingerprint 0EBFCD88\npub   rsa4096 2017-02-22 [SCEA]\n      9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88\nuid           [ unknown] Docker Release (CE deb) <docker@docker.com>\nsub   rsa4096 2017-02-22 [S]\n\n")),(0,r.kt)("p",null,"Add the actual repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'add-apt-repository \\\n   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n   $(lsb_release -cs) \\\n   stable"\n')),(0,r.kt)("p",null,"Update the package index:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt-get update\n")),(0,r.kt)("p",null,"And finally, install docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt-get install docker-ce docker-ce-cli containerd.io\n")),(0,r.kt)("p",null,"On windows-subsystem for Linux (WSL2) it may be necessary to start docker seperately:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/etc/init.d/docker start\n")),(0,r.kt)("p",null,"Note, this may not work on WSL1."),(0,r.kt)("p",null,"Check whether docker is running by executing ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker ps\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES\n")),(0,r.kt)("h3",{id:"install-docker-compose"},"Install Docker Compose"),(0,r.kt)("p",null,"Docker compose gives us the ability to define our services with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," files instead of having to define all container parameters directly on the CLI."),(0,r.kt)("p",null,"Download docker compose:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n')),(0,r.kt)("p",null,"Make it executable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"chmod +x /usr/local/bin/docker-compose\n")),(0,r.kt)("p",null,"Check that docker compose works:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose --version\ndocker-compose version 1.26.0, build d4451659\n")),(0,r.kt)("h3",{id:"define-the-docker-composeyml"},"Define the docker-compose.yml"),(0,r.kt)("p",null,"First, lets create a user defined bridged network. Unlike the already existing ",(0,r.kt)("inlineCode",{parentName:"p"},"bridge")," network, the user defined one will have container name DNS resolution for containers within that network. This is useful if later we want to setup additional containers which need to speak with the GoShimmer container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker network create --driver=bridge shimmer\nc726034d295c3df66803b92c71ca517a0cf0e3c65c1c6d84ee5fa34ae76cbcd4\n")),(0,r.kt)("p",null,"Lets create a folder holding our ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir /opt/goshimmer\n")),(0,r.kt)("p",null,"Lets create a folder holding our database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd /opt/goshimmer\nmkdir db\nchmod 0777 db\n")),(0,r.kt)("p",null,"Finally, lets create our ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nano docker-compose.yml\n")),(0,r.kt)("p",null,"and add following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'3.3\'\n\nnetworks:\n  outside:\n    external:\n      name: shimmer\n\nservices:\n  goshimmer:\n    image: iotaledger/goshimmer:latest\n    container_name: goshimmer\n    hostname: goshimmer\n    stop_grace_period: 2m\n    volumes:\n      - "./db:/tmp/mainnetdb:rw"   \n      - "/etc/localtime:/etc/localtime:ro"\n    ports:\n      # Autopeering \n      - "0.0.0.0:14626:14626/udp"\n      # Gossip\n      - "0.0.0.0:14666:14666/tcp"\n      # FPC\n      - "0.0.0.0:10895:10895/tcp"\n      # HTTP API\n      - "0.0.0.0:8080:8080/tcp"\n      # Dashboard\n      - "0.0.0.0:8081:8081/tcp"\n      # pprof profiling\n      - "0.0.0.0:6061:6061/tcp"\n    environment:\n      - ANALYSIS_CLIENT_SERVERADDRESS=analysisentry-01.devnet.shimmer.iota.cafe:21888\n      - AUTOPEERING_BINDADDRESS=0.0.0.0:14626\n      - DASHBOARD_BINDADDRESS=0.0.0.0:8081\n      - GOSSIP_BINDADDRESS=0.0.0.0:14666\n      - WEBAPI_BINDADDRESS=0.0.0.0:8080\n      - PROFILING_BINDADDRESS=0.0.0.0:6061\n      - NETWORKDELAY_ORIGINPUBLICKEY=9DB3j9cWYSuEEtkvanrzqkzCQMdH1FGv3TawJdVbDxkd\n      - FPC_BINDADDRESS=0.0.0.0:10895\n      - PROMETHEUS_BINDADDRESS=0.0.0.0:9311\n    command: >\n      --skip-config=true\n      --autoPeering.entryNodes=2PV5487xMw5rasGBXXWeqSi4hLz7r19YBt8Y1TGAsQbj@analysisentry-01.devnet.shimmer.iota.cafe:15626,5EDH4uY78EA6wrBkHHAVBWBMDt7EcksRq6pjzipoW15B@entry-devnet.tanglebay.com:14646\n      --node.disablePlugins=\n      --node.enablePlugins=remotelog,networkdelay,spammer,prometheus\n      --logger.level=info\n      --logger.disableEvents=false\n      --logger.remotelog.serverAddress=metrics-01.devnet.shimmer.iota.cafe:5213\n      --drng.pollen.instanceID=1\n      --drng.pollen.threshold=3\n      --drng.pollen.committeeMembers=AheLpbhRs1XZsRF8t8VBwuyQh9mqPHXQvthV5rsHytDG,FZ28bSTidszUBn8TTCAT9X1nVMwFNnoYBmZ1xfafez2z,GT3UxryW4rA9RN9ojnMGmZgE2wP7psagQxgVdA4B9L1P,4pB5boPvvk2o5MbMySDhqsmC2CtUdXyotPPEpb7YQPD7,64wCsTZpmKjRVHtBKXiFojw7uw3GszumfvC4kHdWsHga\n      --drng.xTeam.instanceID=1339\n      --drng.xTeam.threshold=4\n      --drng.xTeam.committeeMembers=GUdTwLDb6t6vZ7X5XzEnjFNDEVPteU7tVQ9nzKLfPjdo,68vNzBFE9HpmWLb2x4599AUUQNuimuhwn3XahTZZYUHt,Dc9n3JxYecaX3gpxVnWb4jS3KVz1K1SgSK1KpV1dzqT1,75g6r4tqGZhrgpDYZyZxVje1Qo54ezFYkCw94ELTLhPs,CN1XLXLHT9hv7fy3qNhpgNMD6uoHFkHtaNNKyNVCKybf,7SmttyqrKMkLo5NPYaiFoHs8LE6s7oCoWCQaZhui8m16,CypSmrHpTe3WQmCw54KP91F5gTmrQEL7EmTX38YStFXx\n    networks:\n      - outside\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If performance is a concern, you can also run your containers with ",(0,r.kt)("inlineCode",{parentName:"p"},'network_mode: "host"'),", however, you must then adjust the hostnames in the configs for the corresponding containers and perhaps also create some iptable rules to block traffic from outside accessing your services directly."))),(0,r.kt)("p",null,"Note how we are setting up NATs for different ports:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Functionality"),(0,r.kt)("th",{parentName:"tr",align:null},"Protocol"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14626"),(0,r.kt)("td",{parentName:"tr",align:null},"Autopeering"),(0,r.kt)("td",{parentName:"tr",align:null},"UDP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14666"),(0,r.kt)("td",{parentName:"tr",align:null},"Gossip"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10895"),(0,r.kt)("td",{parentName:"tr",align:null},"FPC"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP/HTTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8080"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP API"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP/HTTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8081"),(0,r.kt)("td",{parentName:"tr",align:null},"Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP/HTTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6061"),(0,r.kt)("td",{parentName:"tr",align:null},"pprof HTTP API"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP/HTTP")))),(0,r.kt)("p",null,"It is important that the ports are correctly mapped so that the node for example actively participates in FPC votes or can gain inbound neighbors."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"INFO")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the UDP NAT mapping is not configured correctly, GoShimmer will terminate with an error message stating to check the NAT configuration"))),(0,r.kt)("h2",{id:"running-the-goshimmer-node"},"Running the GoShimmer Node"),(0,r.kt)("p",null,"Within the ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/goshimmer")," folder where the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," resides, simply execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose up -d\nPulling goshimmer (iotaledger/goshimmer:0.2.0)...\n...\n")),(0,r.kt)("p",null,"to start the GoShimmer node."),(0,r.kt)("p",null,"You should see your container running now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                                                                                                                    NAMES\n687f52b78cb5        iotaledger/goshimmer:0.2.0       "/run/goshimmer --sk\u2026"   19 seconds ago      Up 17 seconds       0.0.0.0:6061->6061/tcp, 0.0.0.0:8080-8081->8080-8081/tcp, 0.0.0.0:10895->10895/tcp, 0.0.0.0:14666->14666/tcp, 0.0.0.0:14626->14626/udp   goshimmer\n')),(0,r.kt)("p",null,"You can follow the log output of the node via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker logs -f --since=1m goshimmer\n")),(0,r.kt)("h3",{id:"syncing"},"Syncing"),(0,r.kt)("p",null,"When the node starts for the first time, it must synchronize its state with the rest of the network. GoShimmer currently uses the Tangle Time to help nodes determine their synced status."),(0,r.kt)("h4",{id:"dashboard"},"Dashboard"),(0,r.kt)("p",null,"The dashboard of your GoShimmer node should be accessible via ",(0,r.kt)("inlineCode",{parentName:"p"},"http://<your-ip>:8081"),". If your node is still synchronizing, you might see a higher inflow of MPS."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(3770).Z},(0,r.kt)("img",{alt:"GoShimmer Dashboard",src:n(173).Z}))),(0,r.kt)("p",null,"After a while, your node's dashboard should also display up to 8 neighbors:\n",(0,r.kt)("a",{target:"_blank",href:n(4776).Z},(0,r.kt)("img",{alt:"GoShimmer Dashboard Neighbors",src:n(7762).Z}))),(0,r.kt)("h4",{id:"http-api"},"HTTP API"),(0,r.kt)("p",null,"GoShimmer also exposes an HTTP API. To check whether that works correctly, you can access it via ",(0,r.kt)("inlineCode",{parentName:"p"},"http://<your-ip>:8080/info")," which should return a JSON response in the form of:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "version": "v0.6.2",\n  "networkVersion": 30,\n  "tangleTime": {\n    "messageID": "6ndfmfogpH9H8C9X9Fbb7Jmuf8RJHQgSjsHNPdKUUhoJ",\n    "time": 1621879864032595415,\n    "synced": true\n  },\n  "identityID": "D9SPFofAGhA5V9QRDngc1E8qG9bTrnATmpZMdoyRiBoW",\n  "identityIDShort": "XBgY5DsUPng",\n  "publicKey": "9DB3j9cWYSuEEtkvanrzqkzCQMdH1FGv3TawJdVbDxkd",\n  "solidMessageCount": 74088,\n  "totalMessageCount": 74088,\n  "enabledPlugins": [\n    ...\n  ],\n  "disabledPlugins": [\n    ...\n  ],\n  "mana": {\n    "access": 1,\n    "accessTimestamp": "2021-05-24T20:11:05.451224937+02:00",\n    "consensus": 10439991680906,\n    "consensusTimestamp": "2021-05-24T20:11:05.451228137+02:00"\n  },\n  "manaDelegationAddress": "1HMQic52dz3xLY2aeDXcDhX53LgbsHghdfD8eGXR1qVHy",\n  "mana_decay": 0.00003209,\n  "scheduler": {\n    "running": true,\n    "rate": "5ms",\n    "nodeQueueSizes": {}\n  },\n  "rateSetter": {\n    "rate": 20000,\n    "size": 0\n  }\n}\n')),(0,r.kt)("h2",{id:"managing-the-goshimmer-node-lifecycle"},"Managing the GoShimmer node lifecycle"),(0,r.kt)("h3",{id:"stopping-the-node"},"Stopping the Node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose stop\n")),(0,r.kt)("h3",{id:"resetting-the-node"},"Resetting the Node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose down\n")),(0,r.kt)("h3",{id:"upgrading-the-node"},"Upgrading the Node"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ensure that the image version in the ",(0,r.kt)("inlineCode",{parentName:"strong"},"docker-compose.yml")," is ",(0,r.kt)("inlineCode",{parentName:"strong"},"latest"))," then execute following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose down\nrm db/*\ndocker-compose pull\ndocker-compose up -d\n")),(0,r.kt)("h3",{id:"following-log-output"},"Following Log Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker logs -f --since=1m goshimmer\n")),(0,r.kt)("h3",{id:"create-a-logtxt"},"Create a log.txt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker logs goshimmer > log.txt\n")),(0,r.kt)("h3",{id:"update-grafana-dashboard"},"Update Grafana Dashboard"),(0,r.kt)("p",null,'If you set up the Grafana dashboard for your node according to the next section "Setting up the Grafana dashboard", the following method will help you to update when a new version is released.'),(0,r.kt)("p",null,"You have to manually copy the new ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/blob/master/tools/monitoring/grafana/dashboards/local_dashboard.json"},"dashboard file")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/goshimmer/grafana/dashboards")," directory.\nSupposing you are at ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/goshimmer/"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget https://raw.githubusercontent.com/iotaledger/goshimmer/master/tools/monitoring/grafana/dashboards/local_dashboard.json\ncp local_dashboard.json grafana/dashboards\n")),(0,r.kt)("p",null,"Restart the grafana container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker restart grafana\n")),(0,r.kt)("h2",{id:"setting-up-the-grafana-dashboard"},"Setting up the Grafana dashboard"),(0,r.kt)("h3",{id:"add-prometheus-and-grafana-containers-to-docker-composeyml"},"Add Prometheus and Grafana Containers to ",(0,r.kt)("inlineCode",{parentName:"h3"},"docker-compose.yml")),(0,r.kt)("p",null,"Append the following to the previously described ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file (",(0,r.kt)("strong",{parentName:"p"},'make sure to also copy the space in front of "prometheus"/the entire whitespace'),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'  prometheus:\n    image: prom/prometheus:latest\n    container_name: prometheus\n    restart: unless-stopped\n    ports:\n      - "9090:9090/tcp"\n    command:\n      - --config.file=/etc/prometheus/prometheus.yml\n    volumes:\n      - ./prometheus/prometheus.yml:/etc/prometheus/prometheus.yml:ro\n      - ./prometheus/data:/prometheus:rw\n    depends_on:\n      - goshimmer\n    networks:\n      - outside\n\n  grafana:\n    image: grafana/grafana:latest\n    container_name: grafana\n    restart: unless-stopped\n    environment:\n      # path to provisioning definitions can only be defined as\n      # environment variables for grafana within docker\n      - GF_PATHS_PROVISIONING=/var/lib/grafana/provisioning\n    ports:\n      - "3000:3000/tcp"\n    user: "472"\n    volumes:\n      - ./grafana:/var/lib/grafana:rw\n    networks:\n      - outside\n')),(0,r.kt)("h4",{id:"create-prometheus-config"},"Create Prometheus config"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"prometheus/data")," directory in ",(0,r.kt)("inlineCode",{parentName:"li"},"/opt/goshimmer"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd /opt/goshimmer\nmkdir -p prometheus/data\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"prometheus.yml")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"prometheus")," directory:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nano prometheus/prometheus.yml\n")),(0,r.kt)("p",null,"The content of the file should be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n    - job_name: goshimmer_local\n      scrape_interval: 5s\n      static_configs:\n      - targets:\n        - goshimmer:9311\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Add permissions to ",(0,r.kt)("inlineCode",{parentName:"li"},"prometheus")," config directory:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"chmod -R 777 prometheus\n")),(0,r.kt)("h4",{id:"create-grafana-configs"},"Create Grafana configs"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create necessary config dirs in ",(0,r.kt)("inlineCode",{parentName:"li"},"/opt/goshimmer/"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir -p grafana/provisioning/datasources grafana/provisioning/dashboards grafana/provisioning/notifiers grafana/provisioning/plugins\nmkdir -p grafana/dashboards\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create a datasource configuration file in ",(0,r.kt)("inlineCode",{parentName:"li"},"grafana/provisioning/datasources"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nano grafana/provisioning/datasources/datasources.yaml\n")),(0,r.kt)("p",null,"With the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: 1\n\ndatasources:\n  - name: Prometheus\n    type: prometheus\n    # <string, required> access mode. proxy or direct (Server or Browser in the UI). Required\n    access: proxy\n    orgId: 1\n    url: http://prometheus:9090\n    jsonData:\n      graphiteVersion: '1.1'\n      timeInterval: '1s'\n    # <string> json object of data that will be encrypted.\n    secureJsonData:\n      # <string> database password, if used\n      password:\n      # <string> basic auth password\n      basicAuthPassword:\n    version: 1\n    # <bool> allow users to edit datasources from the UI.\n    editable: true\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Create a dashboard configuration file in ",(0,r.kt)("inlineCode",{parentName:"li"},"grafana/provisioning/dashboards"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nano grafana/provisioning/dashboards/dashboards.yaml\n")),(0,r.kt)("p",null,"With the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: 1\n\nproviders:\n  - name: 'GoShimmer Local Metrics'\n    orgId: 1\n    folder: ''\n    type: file\n    disableDeletion: false\n    editable: true\n    updateIntervalSeconds: 10\n    allowUiUpdates: true\n    options:\n      path: /var/lib/grafana/dashboards\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Add predefined GoShimmer Local Metrics Dashboard.")),(0,r.kt)("p",null,"Head over to the GoShimmer repository and download ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/blob/master/tools/monitoring/grafana/dashboards/local_dashboard.json"},"local_dashboard.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget https://raw.githubusercontent.com/iotaledger/goshimmer/master/tools/monitoring/grafana/dashboards/local_dashboard.json\ncp local_dashboard.json grafana/dashboards\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Add permissions to Grafana config folder")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"chmod -R 777 grafana\n")),(0,r.kt)("h4",{id:"run-goshimmer-with-prometheus-and-grafana"},"Run GoShimmer with Prometheus and Grafana:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose up -d\n")),(0,r.kt)("p",null,"The Grafana dashboard should be accessible at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://<your-ip>:3000"),"."),(0,r.kt)("p",null,"Default login credentials are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"username"),": admin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"password"),": admin")))}c.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=o,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3770:function(e,t,n){"use strict";t.Z=n.p+"assets/files/dashboard-c7237f83e216a88a9e3d3eba956daf4a.png"},4776:function(e,t,n){"use strict";t.Z=n.p+"assets/files/dashboard_neighbors-aeb66260b5fc05df4a6c2d61bad8339e.png"},173:function(e,t,n){"use strict";t.Z=n.p+"assets/images/dashboard-c7237f83e216a88a9e3d3eba956daf4a.png"},7762:function(e,t,n){"use strict";t.Z=n.p+"assets/images/dashboard_neighbors-aeb66260b5fc05df4a6c2d61bad8339e.png"}}]);