(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{135:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,h=p["".concat(o,".").concat(u)]||p[u]||b[u]||c;return a?n.a.createElement(h,i(i({ref:t},l),{},{components:a})):n.a.createElement(h,i({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),c=(a(0),a(135)),o={id:"ricardian-contracts",title:"Ricardian Contracts",sidebar_label:"Ricardian Contracts"},i={unversionedId:"eos-learn/ricardian-contracts",id:"eos-learn/ricardian-contracts",isDocsHomePage:!1,title:"Ricardian Contracts",description:"What are Ricardian Contracts?",source:"@site/docs/eos-learn/ricardian-contracts.md",slug:"/eos-learn/ricardian-contracts",permalink:"/docs/eos-learn/ricardian-contracts",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/ricardian-contracts.md",version:"current",lastUpdatedBy:"Paola Espinoza",lastUpdatedAt:1641481322,sidebar_label:"Ricardian Contracts",sidebar:"docs",previous:{title:"Smart Contracts",permalink:"/docs/eos-learn/smart-contract"},next:{title:"Markdown Guide",permalink:"/docs/tutorials/markdown-guide"}},s=[{value:"What are Ricardian Contracts?",id:"what-are-ricardian-contracts",children:[{value:"Characteristics of these contracts",id:"characteristics-of-these-contracts",children:[]},{value:"Ricardian contracts at EOSIO",id:"ricardian-contracts-at-eosio",children:[]}]},{value:"How to add a Ricardian Contract?",id:"how-to-add-a-ricardian-contract",children:[]},{value:"How to create a Ricardian Contract?",id:"how-to-create-a-ricardian-contract",children:[{value:"Contracts",id:"contracts",children:[]},{value:"Clauses",id:"clauses",children:[]}]},{value:"Compiling Process",id:"compiling-process",children:[]}],l={toc:s};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"what-are-ricardian-contracts"},"What are Ricardian Contracts?"),Object(c.b)("p",null,"They are digital documents that define the terms and conditions among those involved in the contract, these are signed and verified cryptographically and are readable by both humans and computer systems."),Object(c.b)("h3",{id:"characteristics-of-these-contracts"},"Characteristics of these contracts"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Human and software readable."),Object(c.b)("li",{parentName:"ul"},"It can be printed."),Object(c.b)("li",{parentName:"ul"},"All forms of documents (physical, virtual, encrypted) are equivalent."),Object(c.b)("li",{parentName:"ul"},"They are signed by all parties."),Object(c.b)("li",{parentName:"ul"},"They can be identified safely thanks to the has of each contract.")),Object(c.b)("h3",{id:"ricardian-contracts-at-eosio"},"Ricardian contracts at EOSIO"),Object(c.b)("p",null,"Blockchains operate under smart contracts, however, work is underway to include Ricardian contracts in the transactions of these networks. One of the main objectives is to convert the complexity of the code observed within Blockchain technology into a simpler language so that anyone could understand it."),Object(c.b)("p",null,"EOS Costa Rica has developed a react component that renders ricardian contracts for smart contracts on EOSIO networks. You can view the react component in the following ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://components.eosio.cr/?path=/story/ricardiancontract--ricardian-contract"}),"link"),". In that link, go to the ",Object(c.b)("inlineCode",{parentName:"p"},"Knobs")," section to modify ",Object(c.b)("inlineCode",{parentName:"p"},"httpEndpoint")," and ",Object(c.b)("inlineCode",{parentName:"p"},"contractName"),". Once done, check the Ricardian Contract for a Smart Contract. For example, set:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"httpEndpoint: https://lacchain.eosio.cr\ncontractName: eosio\n")),Object(c.b)("p",null,"The component will automatically load the content of the Ricardian Contract. The open source repository for this component is located here: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/eoscostarica/eoscr-components"}),"https://github.com/eoscostarica/eoscr-components"),"."),Object(c.b)("h2",{id:"how-to-add-a-ricardian-contract"},"How to add a Ricardian Contract?"),Object(c.b)("p",null,"The process is as similar as compiling a Smart Contract, is fact, it is done during the same process, eosio-cpp provide some extra configuration options when compiling and one of them are ",Object(c.b)("inlineCode",{parentName:"p"},"-R"),", which allow to set an extra resource in this case the Ricardian Contract with just providing the Ricardian path, the compiler then is responsible to add the contracts and clauses to the .abi file."),Object(c.b)("h2",{id:"how-to-create-a-ricardian-contract"},"How to create a Ricardian Contract?"),Object(c.b)("p",null,"Usually there is a contract folder called ",Object(c.b)("inlineCode",{parentName:"p"},"ricardian")," inside the smart contract folder which contains two main files that compose the Ricardian Contrant ",Object(c.b)("inlineCode",{parentName:"p"},"<contract name>.contracts.md")," and ",Object(c.b)("inlineCode",{parentName:"p"},"<contract name>.clauses.md"),"."),Object(c.b)("h3",{id:"contracts"},"Contracts"),Object(c.b)("p",null,"Its purpose is to declare and define all the actions inside of the Smart Contract. According to ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/EOSIO/ricardian-spec"}),"EOSIO ricardian-spec")," the are some Metadata Fields:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"spec_version"),Object(c.b)("li",{parentName:"ul"},"title"),Object(c.b)("li",{parentName:"ul"},"summary"),Object(c.b)("li",{parentName:"ul"},"icon")),Object(c.b)("p",null,"For example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'<h1 class="contract">Create Post</h1>\nspec_version: 0.0.0\ntitle: Create Post\nsummary: Create a blog post "{{title}}" by {{author}} tagged as "{{tag}}"\nicon: https://app.com/create-post.png#00506E08A55BCF269FE67F202BBC08CFF55F9E3C7CD4459ECB90205BF3C3B562\n')),Object(c.b)("h3",{id:"clauses"},"Clauses"),Object(c.b)("p",null,"Its purpose is to declare and define clauses or rules of the Smart Contract. It is simplier to create, for example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'<h1 class="clause">UserAgreement</h1>\n\nUser agreement for the chain can go here.\n')),Object(c.b)("p",null,"More examples on ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/EOSIO/eosio.contracts/master/contracts/eosio.system/ricardian/eosio.system.clauses.md"}),"EOSIO eosio.system"),"."),Object(c.b)("h2",{id:"compiling-process"},"Compiling Process"),Object(c.b)("p",null,"To compile a Smart Contract with its respective Ricardian Contract, execute next command adding the ",Object(c.b)("inlineCode",{parentName:"p"},"-R")," flag:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"eosio-cpp -abigen -R ./ricardian -contract contracttest -o contracttest.wasm src/contracttest.cpp\n")),Object(c.b)("p",null,"Click ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://es.cointelegraph.com/eos-101/how-eos-smart-contracts-work"}),"here")," to see more content on this topic."))}d.isMDXComponent=!0}}]);