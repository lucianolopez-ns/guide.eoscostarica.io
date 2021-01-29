(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),h=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=h(a),p=o,b=d["".concat(c,".").concat(p)]||d[p]||u[p]||r;return a?n.a.createElement(b,i(i({ref:t},s),{},{components:a})):n.a.createElement(b,i({ref:t},s))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return h}));var o=a(3),n=a(7),r=(a(0),a(125)),c={id:"hello-world-contract",title:"Hello World Contract",sidebar_label:"Hello World Contract"},i={unversionedId:"tutorials/hello-world-contract",id:"tutorials/hello-world-contract",isDocsHomePage:!1,title:"Hello World Contract",description:'We explain by example how to create an account and a "Hello World" contract to upload to a EOS.IO based blockchain. For this example, we based on the resources published by Block.one to share with the community.',source:"@site/docs/tutorials/hello-world-contract.md",slug:"/tutorials/hello-world-contract",permalink:"/docs/tutorials/hello-world-contract",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/hello-world-contract.md",version:"current",lastUpdatedBy:"Steph Delgado",lastUpdatedAt:1611889805,sidebar_label:"Hello World Contract",sidebar:"docs",previous:{title:"EOSIO Node Installation",permalink:"/docs/tutorials/node-installation"},next:{title:"Modern C++",permalink:"/docs/tutorials/modern-cpp"}},l=[{value:"Get your private keys",id:"get-your-private-keys",children:[]},{value:"Acquire RAM resource",id:"acquire-ram-resource",children:[]},{value:"Create a contract",id:"create-a-contract",children:[]},{value:"Publish the Contract",id:"publish-the-contract",children:[]},{value:"Video-Tutorial",id:"video-tutorial",children:[]}],s={toc:l};function h(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.a)("wrapper",Object(o.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,'We explain by example how to create an account and a "Hello World" contract to upload to a EOS.IO based blockchain. For this example, we based on the resources published by ',Object(r.a)("a",Object(o.a)({parentName:"p"},{href:"https://developers.eos.io/"}),"Block.one to share with the community"),"."),Object(r.a)("h2",{id:"get-your-private-keys"},"Get your private keys"),Object(r.a)("p",null,"More information ",Object(r.a)("a",Object(o.a)({parentName:"p"},{href:"https://guide.eoscostarica.io/docs/eos-learn/private-keys"}),"about private keys")),Object(r.a)("h2",{id:"acquire-ram-resource"},"Acquire RAM resource"),Object(r.a)("p",null,"We can use the Faucet to receive dummy tokens for free, that in this case will be EOS, necessary to use network resources (as long as we have participation on that network). The sense of that is, for the contract, we will be requiring to acquire RAM resources of the block producers, for which that we will need these EOS that were just sent to us."),Object(r.a)("p",null,"With this command, we can check the EOS quantity we have in this account (which in this case are 100 EOS), as well as the RAM resource, which at this moment is 5.366 KiB."),Object(r.a)("p",null,"To acquire RAM, we write the command ",Object(r.a)("inlineCode",{parentName:"p"},"buyram")," for our account. We must specify twice the name of the account, once to define where the EOS come out and again to indicate where to RAM is sent. In the same line, we must indicate the EOS quantity we will be providing. For this example, we are sending 50 EOS. By having the wallet unlocked, automatically we acquired the RAM for the amount of EOS that we indicated."),Object(r.a)("p",null,"After executing the buy, we can verify that now we have 86 KiB of RAM and just 50 EOS of the 100 that originally were assigned to us."),Object(r.a)("p",null,"In the Bloks.io explorer, we can search for the information in that account. Additionally, we can review the taken actions, including the RAM buy transactions, the Faucet tokens and the complete history of movements."),Object(r.a)("h2",{id:"create-a-contract"},"Create a contract"),Object(r.a)("p",null,'To continue, let\'s create a simple contract inside a new directory, which we call "hellocontract". As resources are needed on EOS, these should be associated with the account tokens, so first should put the same contract name previously created.'),Object(r.a)("p",null,"To edit the contract, a text editor can be used. For this example, Sublime Text was used."),Object(r.a)("p",null,"The first line includes a library in which we have access through the Contract Development Kit (CDT), a tool that allows access to resources to create the contracts."),Object(r.a)("p",null,'In the class line, our "hellocontract" contract should be exposed, which has an action defined, which in this case we call it "hello" and its argument is a user of the type name. Upon saving the contract, is left a C++ in the directory.'),Object(r.a)("p",null,"The C++ file needs to be compiled using the tool CDT (Contract Development Toolkit), that receives as input the C++ file and as output originates a web assembly (warm) file which is an executable file by the contract. Additionally to the wasm file, an abi file is also generated which functions for mapping the contract functions. The command is going to receive the contract as input and as output is going to generate a wasm file which is the file that is uploaded on the blockchain."),Object(r.a)("p",null,"As we didn't specify one, the system give us a message that there is no Ricardian clause. A Ricardian clause is a contract in prose, written in English, that describes the intention of the contract and should be aligned with the intention for which it was created. In the Block.one's site are resources for the Ricardian clauses. For the purposes of the example, we don't create one."),Object(r.a)("p",null,"Once the command has been executed for the set contract, the system reads the information in the contract and then publish it."),Object(r.a)("h2",{id:"publish-the-contract"},"Publish the Contract"),Object(r.a)("p",null,"To publish our contract, we should use the ",Object(r.a)("inlineCode",{parentName:"p"},"cleos")," and the API endpoint to upload the contract to the location we want with active permission to sign with the created wallet."),Object(r.a)("p",null,'Back in the block explorer (Bloks.io), we can verify that the account is the owner of the contract that exposes the "Hello" action and contains the abi information in which is specified in JSON structure the actions within the contract and associated components.'),Object(r.a)("p",null,'Once the contract is ready, we can execute one action in the contract. With cleos there is a command to specify the endpoint within the Jungle Testnet and execute the "Hello" action. For this example, we put as input: "eoscostarica". The output of the action will be the text "Hello eoscostarica".'),Object(r.a)("p",null,"We can verify in the blocks explorer the executed actions."),Object(r.a)("p",null,"Is necessary to wait some seconds to complete the irreversibility of the block, since the block producers should validate the data block for this."),Object(r.a)("p",null,"Finally, this is a sample of how you can interact with a blockchain. There are JavaScript tools, library ",Object(r.a)("a",Object(o.a)({parentName:"p"},{href:"https://guide.eoscostarica.io/docs/tools/eosio-sdk-libraries"}),"EOS JS")," that could be implemented to execute actions in a way more programmatic to integrate with dApps, data may persist, or even execute business logic on the blockchain with this same pattern."),Object(r.a)("h2",{id:"video-tutorial"},"Video-Tutorial"),Object(r.a)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/nMivNMvS09Y",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}h.isMDXComponent=!0}}]);