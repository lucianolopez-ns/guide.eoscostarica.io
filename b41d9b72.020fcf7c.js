(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),c=(a(0),a(126)),o={id:"system-resources",title:"System Resources",sidebar_label:"System Resources"},i={unversionedId:"eos-learn/system-resources",id:"eos-learn/system-resources",isDocsHomePage:!1,title:"System Resources",description:"Type of Resources",source:"@site/docs/eos-learn/system-resources.md",slug:"/eos-learn/system-resources",permalink:"/docs/eos-learn/system-resources",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/system-resources.md",version:"current",lastUpdatedBy:"Steph Delgado",lastUpdatedAt:1611951895,sidebar_label:"System Resources",sidebar:"docs",previous:{title:"Consensus Mechanism",permalink:"/docs/eos-learn/consensus-mechanism"},next:{title:"Accounts And Permissions",permalink:"/docs/eos-learn/accounts-and-permissions"}},s=[{value:"Type of Resources",id:"type-of-resources",children:[]},{value:"RAM",id:"ram",children:[]},{value:"CPU",id:"cpu",children:[]},{value:"Network (NET)",id:"network-net",children:[]},{value:"Account resource limits",id:"account-resource-limits",children:[]},{value:"Resource billing",id:"resource-billing",children:[]},{value:"CPU and NET as elastic resources",id:"cpu-and-net-as-elastic-resources",children:[]},{value:"EOS resource allocation",id:"eos-resource-allocation",children:[]}],l={toc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h2",{id:"type-of-resources"},"Type of Resources"),Object(c.a)("p",null,"The accounts will be able to use the following resources in the network:"),Object(c.a)("h2",{id:"ram"},"RAM"),Object(c.a)("p",null,"In an EOSIO network, RAM is the memory storage space where the blockchain stores data, it is measured in kilobytes (KiB). If your contract needs to store data in a blockchain table, like in a database, then it can store it in the blockchain's RAM."),Object(c.a)("p",null,"RAM is a very important resource and it is a limited one. It is used when executing many actions that are available on the blockchain, when creating a new account for example the information for that account is stored in the blockchain\u2019s memory. Also when an account accepts a new type of token a new record has to be created somewhere in the blockchain memory that holds the balance of the new token accepted, and that memory, the storage space on the blockchain, has to be purchased either by the account that transfers the token or by the account that accepts the new token type."),Object(c.a)("p",null,"RAM is referred to as ",Object(c.a)("inlineCode",{parentName:"p"},"memory")," in the following ",Object(c.a)("inlineCode",{parentName:"p"},"cleos get account")," output:"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{}),"memory:\nquota: 86.68 KiB\nused:   11.62 KiB\n")),Object(c.a)("p",null,"You can find more details about RAM as a resource ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/ram"}),"here")),Object(c.a)("h2",{id:"cpu"},"CPU"),Object(c.a)("p",null,"CPU is processing power, the amount of CPU an account has is measured in microseconds (\u03bcs), it is referred to as ",Object(c.a)("inlineCode",{parentName:"p"},"CPU bandwidth")," the ",Object(c.a)("inlineCode",{parentName:"p"},"cleos get account")," command outputs the amount of processing time an account has at its disposal when pushing actions to a contract."),Object(c.a)("p",null,"You can find more details about the CPU as a resource ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/cpu"}),"here")),Object(c.a)("h2",{id:"network-net"},"Network (NET)"),Object(c.a)("p",null,"As CPU and RAM, NET is also a very important resource in EOSIO-based blockchains. NET is the network bandwidth measured in bytes of transactions and it is referred to as ",Object(c.a)("inlineCode",{parentName:"p"},"net bandwidth"),"."),Object(c.a)("p",null,"You can find more details about NET as a resource ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/net"}),"here")),Object(c.a)("h2",{id:"account-resource-limits"},"Account resource limits"),Object(c.a)("p",null,"Every account on a EOSIO-based blockchain has resource limits for CPU/NET and RAM associated with it. These limits specify how much of each resource can be used by the account and they can be dynamically changed by calling the privileged API ",Object(c.a)("inlineCode",{parentName:"p"},"set_resource_limits"),"."),Object(c.a)("p",null,"The difference between CPU/NET and RAM resource limits is that RAM, since its a limited resource, once used the only way to recover it is to free the storage space used. On the other side, CPU and NET will be fully replenished when the account is not using the network for a period of time. By default this period is set to 24 hours."),Object(c.a)("h2",{id:"resource-billing"},"Resource billing"),Object(c.a)("p",null,"When a user (account) wants to interact with a smart-contract (another account) a transaction is created with an action in it that specifies the smart function to call together with the account (permission level) that is authorizing the action."),Object(c.a)("p",null,"Then, after signing with the keys that authorize the permission level specified in the action, the transaction is broadcasted to the network until it reaches the current block-producer in the schedule."),Object(c.a)("p",null,"The block-producer will execute all actions inside the transaction and bill the time used to execute them (CPU) to the first account authorizing the first action. Also, it will bill the first authorizing account for the size of the transaction (NET)."),Object(c.a)("p",null,"If the actions performed by the smart-contract involves any kind of data storage, the smart-contract can choose to use the RAM resources of any of the transaction authorizing accounts or use the RAM resources of the smart-contract account."),Object(c.a)("h2",{id:"cpu-and-net-as-elastic-resources"},"CPU and NET as elastic resources"),Object(c.a)("p",null,"The ",Object(c.a)("inlineCode",{parentName:"p"},"resource limit manager")," of an EOSIO-based blockchain is the part of the protocol that keeps track of the amount of available network resources at any time and how much resources each account is using."),Object(c.a)("p",null,"In particular, it treats CPU and NET as elastic resources allowing users to consume more resources than what they are entitled to while this resource is below a desired usage (uncongested)."),Object(c.a)("p",null,"An elastic resource has the following properties."),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"The desired usage."),Object(c.a)("li",{parentName:"ul"},"The maximum usage."),Object(c.a)("li",{parentName:"ul"},"The number of aggregation periods that contribute to the average usage."),Object(c.a)("li",{parentName:"ul"},"The multiplier by which virtual space can oversell usage when uncongested."),Object(c.a)("li",{parentName:"ul"},"The rate at which a congested resource contracts its limit."),Object(c.a)("li",{parentName:"ul"},"The rate at which an uncongested resource expands its limits.")),Object(c.a)("p",null,"Let see at the default configuration for the CPU resource as an example:"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{}),"const static uint32_t default_max_block_cpu_usage = 200'000; /// max block cpu usage in microseconds\nconst static uint32_t default_target_block_cpu_usage_pct = 10 * percent_1;\nconst static uint32_t block_cpu_usage_average_window_ms = 60*1000l;\n")),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{}),"elastic_limit_parameters cpu_limit_parameters = {\n    EOS_PERCENT(config::default_max_block_cpu_usage, config::default_target_block_cpu_usage_pct),   //10% of 200ms\n    config::default_max_block_cpu_usage,//200ms\n    config::block_cpu_usage_average_window_ms config::block_interval_ms,                            // 60s (120 blocks)\n    1000,                                                                                           //x1000 multiplier \n    {99, 100},                                                                                      //contract ratio 0.99 \n    {1000, 999}                                                                                     //expand ratio 1.001\n    };\n")),Object(c.a)("p",null,"By making the CPU an elastic resource, a virtual cpu will be created that will range between the lowest possible value which is the maximun usage specified and the highest possible value which is the the lowest possible value times the multiplier."),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{}),"virtual cpu = [[maximum usage, maximum usage * multiplier]]\n")),Object(c.a)("p",null,"The virtual cpu limit will be contracted (expanded) by the ",Object(c.a)("inlineCode",{parentName:"p"},"contract (expand) ratio")," when the average utilization is above (below) the desired usage, meaning that ",Object(c.a)("inlineCode",{parentName:"p"},"the most an account can consume during idle periods is 1000x (multiplier) the bandwidth it is gauranteed under congestion.")),Object(c.a)("p",null,"The average CPU utilization is computed using an EMA (Exponential Moving Average) placing a greater weight and significance on the most recent usage."),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{}),"def update_elastic_limit(current_limit, average_usage, elastic_resource_limit) {\n   result = current_limit\n   if average_usage > elastic_resource_limit.target:\n      result = result * elastic_resource_limit.contract_rate\n   else:\n      result = result * elastic_resource_limit.expand_rate\n\n   return min(max(result, elastic_resource_limit.max), elastic_resource_limit.max * elastic_resource_limit.max_multiplier)\n")),Object(c.a)("h2",{id:"eos-resource-allocation"},"EOS resource allocation"),Object(c.a)("figure",{class:"video_container"},Object(c.a)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/N6CTRdx6NVE",frameborder:"0",allowfullscreen:"true"}," ")))}u.isMDXComponent=!0},126:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(a),d=n,m=h["".concat(o,".").concat(d)]||h[d]||p[d]||c;return a?r.a.createElement(m,i(i({ref:t},l),{},{components:a})):r.a.createElement(m,i({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);