"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[7797],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return m}});var o=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,o,n=function(t,e){if(null==t)return{};var a,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)a=r[o],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)a=r[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=o.createContext({}),l=function(t){var e=o.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),h=l(a),m=n,d=h["".concat(c,".").concat(m)]||h[m]||u[m]||r;return a?o.createElement(d,i(i({ref:e},p),{},{components:a})):o.createElement(d,i({ref:e},p))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3919:function(t,e,a){function o(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!o(t)}a.d(e,{b:function(){return o},Z:function(){return n}})},4996:function(t,e,a){a.d(e,{C:function(){return r},Z:function(){return i}});var o=a(2263),n=a(3919);function r(){var t=(0,o.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,r=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,o){var r=void 0===o?{}:o,i=r.forcePrependBaseUrl,s=void 0!==i&&i,c=r.absolute,l=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(s)return e+a;var p=a.startsWith(e)?a:e+a.replace(/^\//,"");return l?t+p:p}(r,a,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,r().withBaseUrl)(t,e)}},9664:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),i=a(4996),s=["components"],c={id:"open-source-projects",title:"Open Source Projects",sidebar_label:"Open Source Projects"},l=void 0,p={unversionedId:"open-source-projects",id:"open-source-projects",isDocsHomePage:!1,title:"Open Source Projects",description:"EOSIO Dashboard",source:"@site/docs/open-source-projects.md",sourceDirName:".",slug:"/open-source-projects",permalink:"/docs/open-source-projects",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/open-source-projects.md",tags:[],version:"current",lastUpdatedBy:"AngeloCG97",lastUpdatedAt:1632806321,formattedLastUpdatedAt:"9/28/2021",frontMatter:{id:"open-source-projects",title:"Open Source Projects",sidebar_label:"Open Source Projects"},sidebar:"docs",previous:{title:"UX/UI",permalink:"/docs/developer-tools-ux-ui"},next:{title:"Project Boilerplate",permalink:"/docs/boilerplate"}},u=[{value:"EOSIO Dashboard",id:"eosio-dashboard",children:[{value:"Monitor EOSIO Networks",id:"monitor-eosio-networks",children:[]}]},{value:"EOS Rate",id:"eos-rate",children:[]},{value:"LACChain EOSIO Testnet",id:"lacchain-eosio-testnet",children:[]},{value:"Evodex",id:"evodex",children:[]},{value:"EOSIO Hackathons",id:"eosio-hackathons",children:[{value:"LifeBank",id:"lifebank",children:[]},{value:"gGoods",id:"ggoods",children:[]}]},{value:"React Components for EOSIO",id:"react-components-for-eosio",children:[]},{value:"EOS Foundation",id:"eos-foundation",children:[]},{value:"Digital Notary Smart Contract",id:"digital-notary-smart-contract",children:[]},{value:"NPM Packages",id:"npm-packages",children:[]}],h={toc:u};function m(t){var e=t.components,a=(0,n.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"eosio-dashboard"},"EOSIO Dashboard"),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/eosio-dashboard-logo.png",style:{width:"30%"}}),(0,r.kt)("p",null,"An EOSIO Infrastructure monitor and node dashboard."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GitHub")," : ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/eoscostarica/eosio-dashboard"},"https://github.com/eoscostarica/eosio-dashboard"))),(0,r.kt)("h3",{id:"monitor-eosio-networks"},"Monitor EOSIO Networks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"EOS Mainnet Network Dashboard")," : ",(0,r.kt)("a",{parentName:"li",href:"https://mainnet.eosio.online"},"https://mainnet.eosio.online")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LACChain EOSIO Network Dashboard")," : ",(0,r.kt)("a",{parentName:"li",href:"https://lacchain.eosio.online"},"https://lacchain.eosio.online")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Jungle Testnet Network Dashboard")," : ",(0,r.kt)("a",{parentName:"li",href:"https://jungle.eosio.online"},"https://jungle.eosio.online")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proton Testnet Network Dashboard")," : ",(0,r.kt)("a",{parentName:"li",href:"https://proton-testnet.eosio.online"},"https://proton-testnet.eosio.online")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Telos Testnet Network Dashboard")," : ",(0,r.kt)("a",{parentName:"li",href:"https://telos-testnet.eosio.online"},"https://telos-testnet.eosio.online"))),(0,r.kt)("img",{alt:"EOSIO network dashboard",src:(0,i.Z)("img/OSS_screnshots/EOSIO_Network_monitor.PNG")}),(0,r.kt)("img",{alt:"EOSIO network dashboard",src:(0,i.Z)("img/OSS_screnshots/EOSIO_Network_monitor_2.PNG")}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"eos-rate"},"EOS Rate"),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosrate/eosrate--horizontal-solid-transparent-overlight.png",style:{width:"30%"}}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://eosrate.io"},"EOS Rate")," is an open-source dApp that allows EOS token holders to rate Block Producers (BPs) in just a few clicks. Users can access a rating system and voting portal, making it easier for token holders to make an informed decision."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Website")," : ",(0,r.kt)("a",{parentName:"p",href:"https://eosrate.io"},"https://eosrate.io"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"GitHub")," : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/eos-rate"},"https://github.com/eoscostarica/eos-rate")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/EOS_Rate.PNG",alt:"EOS Rate"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/EOS_Rate_2.PNG",alt:"EOS Rate"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"lacchain-eosio-testnet"},"LACChain EOSIO Testnet"),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/lacchain/eosio.lacchain.net/master/static/img/logos/lacchain-eosio-logo.png",style:{width:"30%"}}),(0,r.kt)("p",null,"We are part of LACChain EOSIO, an open-source initiative that offers an EOSIO blockchain network that integrates into LACChain. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Website")," : ",(0,r.kt)("a",{parentName:"p",href:"https://eosio.lacchain.net/en/"},"https://eosio.lacchain.net/en/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"GitHub")," : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lacchain/eosio.lacchain.net"},"https://github.com/lacchain/eosio.lacchain.net")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/lacchain-eosio-homepage.png",alt:"LACChain EOSIO"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/lacchain-eosio-homepage1.png",alt:"LACChain EOSIO"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"evodex"},"Evodex"),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/eoscostarica/evodex/master/public/evodex-logo.png",style:{width:"30%"}}),(0,r.kt)("p",null,"Evolution DEX is a Protocol created by EOS Argentina that allows anyone to create and launch their own trading pairs in a decentralized exchange and gain trading fees by adding liquidity to the token\u2019s pool."),(0,r.kt)("p",null,"EOS Costa Rica is working with EOS Argentina creating a web interface that will provide access to liquidity amongst all exchanges that connect to Evolution DEX."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Website")," : ",(0,r.kt)("a",{parentName:"p",href:"https://evodex.io"},"https://evodex.io"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"GitHub")," : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/evodex"},"https://github.com/eoscostarica/evodex")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"eosio-hackathons"},"EOSIO Hackathons"),(0,r.kt)("h3",{id:"lifebank"},"LifeBank"),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/eoscostarica/lifebank/master/docs/logos/2-OverWhite-lifebank-logo-v1-may25-2020-01.svg",style:{width:"50%"}}),(0,r.kt)("p",null,"Lifebank is an EOSIO-based dapp that helps local communities create a virtuous circle of value exchange between three parties \u2014 eligible life donors, community donation centers, and participating local businesses (sponsors)."),(0,r.kt)("p",null,"Lifebank is an initiative of EOS Costa Rica, a company that develops blockchain-based solutions to solve real-world problems. Lifebank is our entry to the Coding for Change challenge organized by leading blockchain company, Block.one."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Website")," : ",(0,r.kt)("a",{parentName:"p",href:"https://lifebank.io/"},"https://lifebank.io/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"GitHub")," : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/lifebank"},"https://github.com/eoscostarica/lifebank")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/LifeBank.PNG",alt:"LifeBank"})),(0,r.kt)("h3",{id:"ggoods"},"gGoods"),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/eoscostarica/gGoods/main/docs/ggoods-logo.svg",style:{width:"50%"}}),(0,r.kt)("p",null,"gGoods is an open-source NFT standard that enables organizations and communities to create their own NFTs to raise funds. Creating an NFT is easy and straightforward using our avatar creator. The NFTs are then purchased by donors as collectibles that not only support a cause but can be integrated into countless applications such as games, emojis, chat stickers, avatars etc."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Website")," : ",(0,r.kt)("a",{parentName:"p",href:"https://ggoods.io/"},"https://ggoods.io/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Github")," : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/gGoods"},"https://github.com/eoscostarica/gGoods")," "))),(0,r.kt)("h2",{id:"react-components-for-eosio"},"React Components for EOSIO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Website")," : ",(0,r.kt)("a",{parentName:"p",href:"https://components.eosio.cr"},"https://components.eosio.cr"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"GitHub")," : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/eoscr-components"},"https://github.com/eoscostarica/eoscr-components")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"eos-foundation"},"EOS Foundation"),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/eoscostarica/eos-foundation/master/visual-guide/eos-foundation-logo.png",style:{width:"30%"}}),(0,r.kt)("p",null,"We view the EOS Foundation as a container for facilitating code, capital, and connections in ways which haven\u2019t been available so far for the EOS Mainnet community."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Website")," : ",(0,r.kt)("a",{parentName:"p",href:"https://eos-foundation.eosio.cr"},"https://eos-foundation.eosio.cr"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"GitHub")," : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/eos-foundation"},"https://github.com/eoscostarica/eos-foundation")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/EOS_Fundation.PNG",alt:"EOS Foundation"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/EOS_Fundation_2.PNG",alt:"EOS Foundation"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"digital-notary-smart-contract"},"Digital Notary Smart Contract"),(0,r.kt)("p",null,"This smart contract serves as a tool for any user who wishes to register the existence of digital documents (texts / images) at a certain moment in time."),(0,r.kt)("p",null,"It also allows anyone who owns the document to validate the record on the blockchain."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Website")," : ",(0,r.kt)("a",{parentName:"p",href:"https://notarize.eosio.cr/dashboard/notary"},"https://notarize.eosio.cr/dashboard/notary"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"GitHub")," : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/notarioeoscr"},"https://github.com/eoscostarica/notarioeoscr")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"npm-packages"},"NPM Packages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@eoscostarica/eoscr-components"},(0,r.kt)("strong",{parentName:"a"},"EOS Costa Rica components")),": A collection of React Components for EOSIO. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@eoscostarica/eoscr-theme"},(0,r.kt)("strong",{parentName:"a"},"EOS Costa Rica standard theme")),": EOS Costa Rica standard theme will allow us a faster developments of our web apps and at the same time it's availabe for anyone who will want to use it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@eoscostarica/eosjs-camel-api"},(0,r.kt)("strong",{parentName:"a"},"EOS API module ( in CamelCase \ud83d\udc2b)")),": This project wraps the official eosio/eosjs-api to provide camelcase output. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/fastify-eos"},(0,r.kt)("strong",{parentName:"a"},"Fastify EOS")),": A plugin that decorates Fastify with an EOS.js instance.")))}m.isMDXComponent=!0}}]);