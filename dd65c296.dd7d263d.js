(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(a),p=n,b=u["".concat(o,".").concat(p)]||u[p]||m[p]||c;return a?r.a.createElement(b,s(s({ref:t},l),{},{components:a})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},171:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/steps-237995356b038cbfd6f411698f7e2dd4.png"},172:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/datamodel-f09fc54e5c4d60b77cb7890a8c3aa209.png"},173:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/actions-ef6bc27cbec5bd9baa054e04ef8ddfdd.png"},174:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/prepostconditions-9f58d60fe9dc118abf3e4412d0ee5dd1.png"},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),c=(a(0),a(107)),o={id:"smart-contract",title:"Smart Contracts",sidebar_label:"Smart Contracts"},s={unversionedId:"eos-learn/smart-contract",id:"eos-learn/smart-contract",isDocsHomePage:!1,title:"Smart Contracts",description:'A contract is an agreement governing outcomes for actions, given a set of inputs. A contract can range from formal legal contracts (e.g., a financial transaction) to something as simple as the "rules" of a game. Typical actions can be things such as fund transfers (in the case of a financial contract) or game moves (in the case of a game contract).',source:"@site/docs/eos-learn/smart-contracts.md",slug:"/eos-learn/smart-contract",permalink:"/docs/eos-learn/smart-contract",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/smart-contracts.md",version:"current",lastUpdatedBy:"Xavier Fernandez",lastUpdatedAt:1599080078,sidebar_label:"Smart Contracts",sidebar:"docs",previous:{title:"EOS Blockchain",permalink:"/docs/eos-learn/eos-blockchain"},next:{title:"Ricardian contracts",permalink:"/docs/eos-learn/ricardian-contracts"}},i=[{value:"Smart Contract Design Framework",id:"smart-contract-design-framework",children:[{value:"Process Steps",id:"process-steps",children:[]},{value:"Data Model",id:"data-model",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Pre- and Post-Conditions",id:"pre--and-post-conditions",children:[]}]},{value:"Open Source Smart Contracts",id:"open-source-smart-contracts",children:[]},{value:"Basic smart contract scheme",id:"basic-smart-contract-scheme",children:[]}],l={rightToc:i};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,'A contract is an agreement governing outcomes for actions, given a set of inputs. A contract can range from formal legal contracts (e.g., a financial transaction) to something as simple as the "rules" of a game. Typical actions can be things such as fund transfers (in the case of a financial contract) or game moves (in the case of a game contract).'),Object(c.b)("p",null,'An EOSIO Smart Contract is software registered on the blockchain and executed on EOSIO nodes, that implements the semantics of a "contract" whose ledger of action requests are being stored on the blockchain. The Smart Contract defines the interface (actions, parameters, data structures) and the code that implements the interface. The code is compiled into a canonical bytecode format that nodes can retrieve and execute. The blockchain stores the transactions (e.g., legal transfers, game moves) of the contract. Each Smart Contract must be accompanied by a Ricardian Contract that defines the legally binding terms and conditions of the contract.'),Object(c.b)("p",null,"Read More : ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://guide.eoscostarica.io/docs/tutorials/modern-cpp"}),"https://guide.eoscostarica.io/docs/tutorials/modern-cpp")),Object(c.b)("h2",{id:"smart-contract-design-framework"},"Smart Contract Design Framework"),Object(c.b)("p",null,"Digital Scarcity's ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/digital-scarcity/equiprental"}),"github repo")," has an example designed to provide a step-by-step framework and example for creating a smart contract on EOS. It uses a simple use case of equipment rentals that list their equipment for rent and renters who pay rent for those items."),Object(c.b)("h3",{id:"process-steps"},"Process Steps"),Object(c.b)("p",null,"Here are the general steps to developing a smart contract.\n",Object(c.b)("img",{alt:"alt text",src:a(171).default,title:"Steps"})),Object(c.b)("h3",{id:"data-model"},"Data Model"),Object(c.b)("p",null,"Define the data that will be persisted in the smart contract\n",Object(c.b)("img",{alt:"alt text",src:a(172).default,title:"Data Model"})),Object(c.b)("h3",{id:"actions"},"Actions"),Object(c.b)("p",null,"Define the actions, or state changes, that must exist in your smart contract\n",Object(c.b)("img",{alt:"alt text",src:a(173).default,title:"Actions"})),Object(c.b)("h3",{id:"pre--and-post-conditions"},"Pre- and Post-Conditions"),Object(c.b)("p",null,"Define the actions, or state changes, that must exist in your smart contract\n",Object(c.b)("img",{alt:"alt text",src:a(174).default,title:"Pre- and Post-Conditions"})),Object(c.b)("h2",{id:"open-source-smart-contracts"},"Open Source Smart Contracts"),Object(c.b)("p",null,"We maintain a list of open source EOS Smart Contracts in the following repo:"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/eoscostarica/eos-contracts"}),"https://github.com/eoscostarica/eos-contracts")),Object(c.b)("p",null,"Also check out this list of open source contracts for EOSIO maintained by C\xe9sar Rodr\xedguez :"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kesar/eos-awesome-contracts"}),"https://github.com/kesar/eos-awesome-contracts")),Object(c.b)("h2",{id:"basic-smart-contract-scheme"},"Basic smart contract scheme"),Object(c.b)("figure",{class:"video_container"},Object(c.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/EbWDHrm2ETY",frameborder:"0",allowfullscreen:"true"}," ")),Object(c.b)("p",null,"You can see more on this channel: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/user/grandmoren1/videos"}),"https://www.youtube.com/user/grandmoren1/videos")))}d.isMDXComponent=!0}}]);