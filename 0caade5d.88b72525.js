(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=r,h=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return a?n.a.createElement(h,c(c({ref:t},s),{},{components:a})):n.a.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},55:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(2),n=a(6),o=(a(0),a(107)),i={id:"backend-boilerplate",title:"Backend Boilerplate",sidebar_label:"Backend Boilerplate"},c={unversionedId:"backend-boilerplate",id:"backend-boilerplate",isDocsHomePage:!1,title:"Backend Boilerplate",description:"A highly scalable skeleton with best practices, made for quick start backend projects.",source:"@site/docs/backend-boilerplate.md",slug:"/backend-boilerplate",permalink:"/docs/backend-boilerplate",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/backend-boilerplate.md",version:"current",lastUpdatedBy:"Xavier Fernandez",lastUpdatedAt:1599080078,sidebar_label:"Backend Boilerplate",sidebar:"docs",previous:{title:"Web App Boilerplate",permalink:"/docs/web-app-boilerplate"},next:{title:"Material UI & Theme",permalink:"/docs/material-ui"}},l=[{value:"Technologies",id:"technologies",children:[{value:"<strong>hasura</strong>",id:"hasura",children:[]},{value:"<strong>hapi</strong>",id:"hapi",children:[]},{value:"<strong>docker-compose</strong>",id:"docker-compose",children:[]}]},{value:"Instalation",id:"instalation",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Step by step",id:"step-by-step",children:[]}]},{value:"Execution",id:"execution",children:[]}],s={rightToc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A highly scalable skeleton with best practices, made for quick start backend projects.\nThis template features all the latest tools and best practices in the industry. You can find the repository ","[here]"," (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/eoscostarica/backend-boilerplate"}),"https://github.com/eoscostarica/backend-boilerplate"),")."),Object(o.b)("h2",{id:"technologies"},"Technologies"),Object(o.b)("h3",{id:"hasura"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://hasura.io"}),"hasura"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Hasura GraphQL Engine is an opensource service that connects to your databases & microservices and auto-generates a production-ready GraphQL backend with ACL.")),Object(o.b)("h3",{id:"hapi"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://hapi.dev/"}),"hapi"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A backend service for custom busines logic integrated with hasura using ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://hasura.io/docs/1.0/graphql/manual/actions/index.html#actions"}),"actions"))),Object(o.b)("h3",{id:"docker-compose"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://docs.docker.com/compose/"}),"docker-compose"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Compose is a tool for defining and running multi-container Docker applications")),Object(o.b)("h2",{id:"instalation"},"Instalation"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Basic knowledge of Docker, Docker Compose, and NodeJS is required.")),Object(o.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://git-scm.com/"}),"git")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org"}),"nodejs")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://hasura.io/docs/2.0/graphql/manual/hasura-cli/install-hasura-cli.html#install-hasura-cli"}),"hasura"))),Object(o.b)("h3",{id:"step-by-step"},"Step by step"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Clone the repo using the command ",Object(o.b)("inlineCode",{parentName:"li"},"git clone --depth=1 https://github.com/eoscostarica/backend-boilerplate.git")),Object(o.b)("li",{parentName:"ol"},"Access the directory using the command: ",Object(o.b)("inlineCode",{parentName:"li"},"cd backend-boilerplate")),Object(o.b)("li",{parentName:"ol"},"Copy ",Object(o.b)("inlineCode",{parentName:"li"},".env.example")," file and then update the variables according to your needs.")),Object(o.b)("h2",{id:"execution"},"Execution"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You need to have a terminal that is capable of run the ",Object(o.b)("inlineCode",{parentName:"p"},"makefile"),", which is in the root directory. You can find more information about make ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.gnu.org/software/make/manual/make.html"}),"here"),".")),Object(o.b)("p",null,"We proceed to execute the command ",Object(o.b)("inlineCode",{parentName:"p"},"make run"),". After that, the following services will be available:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"hapi at http://localhost:9090"),Object(o.b)("li",{parentName:"ul"},"hasura at http://localhost:9695")))}b.isMDXComponent=!0}}]);