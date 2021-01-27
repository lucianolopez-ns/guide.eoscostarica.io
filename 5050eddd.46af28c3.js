(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{125:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),p=a,m=b["".concat(c,".").concat(p)]||b[p]||d[p]||o;return r?n.a.createElement(m,i(i({ref:t},u),{},{components:r})):n.a.createElement(m,i({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(125)),c={id:"devops",title:"DevOps",sidebar_label:"DevOps"},i={unversionedId:"devops",id:"devops",isDocsHomePage:!1,title:"DevOps",description:"At EOS Costa Rica we follow the DevOps principles to build and deploy software.",source:"@site/docs/devops.md",slug:"/devops",permalink:"/docs/devops",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/devops.md",version:"current",lastUpdatedBy:"Steph Delgado",lastUpdatedAt:1611765138,sidebar_label:"DevOps",sidebar:"docs",previous:{title:"Agile Methodologies",permalink:"/docs/agile-methodologies"},next:{title:"Our Favorite Tools",permalink:"/docs/developer-tools"}},s=[{value:"Infrastructure as Code ( IAC )",id:"infrastructure-as-code--iac-",children:[{value:"Introduction to Terraform",id:"introduction-to-terraform",children:[]},{value:"Introduction to HashiCorp Terraform",id:"introduction-to-hashicorp-terraform",children:[]}]},{value:"EOS Costa Rica Infrastructure as Code (IaC)",id:"eos-costa-rica-infrastructure-as-code-iac",children:[]},{value:"Introduction a Docker and Kubernetes",id:"introduction-a-docker-and-kubernetes",children:[{value:"Containers 101",id:"containers-101",children:[]},{value:"What is Docker?",id:"what-is-docker",children:[]},{value:"Kubernetes in 5 mins",id:"kubernetes-in-5-mins",children:[]},{value:"Kubernetes vs. Docker: It&#39;s Not an Either/Or Question",id:"kubernetes-vs-docker-its-not-an-eitheror-question",children:[]}]},{value:"Kubernetes at EOS Costa Rica",id:"kubernetes-at-eos-costa-rica",children:[]}],u={toc:s};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"At EOS Costa Rica we follow the DevOps principles to build and deploy software. "),Object(o.a)("p",null,"Automation is at the top of our priorities, everything from scaffolding to code optimization, testing, deploy and delivery."),Object(o.a)("p",null,"Continuous integration allows us to detect problems early reducing costs and help us deliver robust software more rapidly."),Object(o.a)("p",null,"Continuous communication and frequent one-on-one calls as well as pair programming are essential part of our day to day work."),Object(o.a)("hr",null),Object(o.a)("h2",{id:"infrastructure-as-code--iac-"},"Infrastructure as Code ( IAC )"),Object(o.a)("figure",{class:"video_container"},Object(o.a)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/53X-HAw7BbA",frameborder:"0",allowfullscreen:"true"})),Object(o.a)("hr",null),Object(o.a)("h3",{id:"introduction-to-terraform"},"Introduction to Terraform"),Object(o.a)("figure",{class:"video_container"},Object(o.a)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/cpxKbf51ccU",frameborder:"0",allowfullscreen:"true"})),Object(o.a)("hr",null),Object(o.a)("h3",{id:"introduction-to-hashicorp-terraform"},"Introduction to HashiCorp Terraform"),Object(o.a)("figure",{class:"video_container"},Object(o.a)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/h970ZBgKINg",frameborder:"0",allowfullscreen:"true"})),Object(o.a)("h2",{id:"eos-costa-rica-infrastructure-as-code-iac"},"EOS Costa Rica Infrastructure as Code (IaC)"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Openstack documentation")),Object(o.a)("p",null,Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/edenia/openstack-docs"}),"https://github.com/edenia/openstack-docs")),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Kubernetes documentation")),Object(o.a)("p",null,Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/edenia/openstack-docs/blob/master/Kubernetes.md"}),"https://github.com/edenia/openstack-docs/blob/master/Kubernetes.md")),Object(o.a)("h2",{id:"introduction-a-docker-and-kubernetes"},"Introduction a Docker and Kubernetes"),Object(o.a)("h3",{id:"containers-101"},"Containers 101"),Object(o.a)("figure",{class:"video_container"},Object(o.a)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/VqLcWftIaQI",frameborder:"0",allowfullscreen:"true"})),Object(o.a)("p",null,"Watch the full intro to containers playlist here",Object(o.a)("br",{parentName:"p"}),"\n",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/embed/EnJ7qX9fkcU&list=PL7bmigfV0EqQt5_pBPQ8tsZjI1w68-e0H"}),"https://www.youtube.com/embed/EnJ7qX9fkcU&list=PL7bmigfV0EqQt5_pBPQ8tsZjI1w68-e0H")),Object(o.a)("hr",null),Object(o.a)("h3",{id:"what-is-docker"},"What is Docker?"),Object(o.a)("figure",{class:"video_container"},Object(o.a)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/PfTKwblbkpE",frameborder:"0",allowfullscreen:"true"})),Object(o.a)("hr",null),Object(o.a)("h3",{id:"kubernetes-in-5-mins"},"Kubernetes in 5 mins"),Object(o.a)("figure",{class:"video_container"},Object(o.a)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/PH-2FfFD2PU",frameborder:"0",allowfullscreen:"true"})),Object(o.a)("hr",null),Object(o.a)("h3",{id:"kubernetes-vs-docker-its-not-an-eitheror-question"},"Kubernetes vs. Docker: It's Not an Either/Or Question"),Object(o.a)("figure",{class:"video_container"},Object(o.a)("iframe",{wwidth:"100%",height:"315",src:"https://www.youtube.com/embed/2vMEQ5zs1ko",frameborder:"0",allowfullscreen:"true"})),Object(o.a)("hr",null),Object(o.a)("h2",{id:"kubernetes-at-eos-costa-rica"},"Kubernetes at EOS Costa Rica"),Object(o.a)("p",null,"Following you can find a set of very convenient tutorials for learning kubernetes from scratch:"),Object(o.a)("p",null,Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"}),"https://kubernetes.io/docs/tutorials/kubernetes-basics/")),Object(o.a)("p",null,"To be able to try these tutorials in a real environment, you could try our Kubernetes installation\nin Openstack. If you prefer so, you may also create a local setup in your own machine: "),Object(o.a)("p",null,Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://computingforgeeks.com/how-to-install-minikube-on-ubuntu-debian-linux/"}),"https://computingforgeeks.com/how-to-install-minikube-on-ubuntu-debian-linux/"),". "),Object(o.a)("p",null,"Request to the administrators for access to our Openstack installation dashboard and the Sandbox\nproject. Then you can follow the next steps:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"First of all connect to the master node using the SSH tool:")),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{}),"ssh -i key.pem user@master-sandbox\n")),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Get information about the cluster:")),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{}),"kubectl cluster-info\n")),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Show the current available nodes in the cluster:")),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get nodes\n")))}l.isMDXComponent=!0}}]);