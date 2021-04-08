(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{135:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),d=r,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||n;return a?o.a.createElement(h,c(c({ref:t},s),{},{components:a})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<n;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(3),o=a(8),n=(a(0),a(135)),i={id:"boilerplate",title:"Project Boilerplate",sidebar_label:"Project Boilerplate"},c={unversionedId:"boilerplate",id:"boilerplate",isDocsHomePage:!1,title:"Project Boilerplate",description:"What is a Boilerplate?",source:"@site/docs/boilerplate.md",slug:"/boilerplate",permalink:"/docs/boilerplate",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/boilerplate.md",version:"current",lastUpdatedBy:"JustinCast",lastUpdatedAt:1617898469,formattedLastUpdatedAt:"4/8/2021",sidebar_label:"Project Boilerplate",sidebar:"docs",previous:{title:"Open Source Projects",permalink:"/docs/open-source-projects"},next:{title:"Material UI & Theme",permalink:"/docs/material-ui"}},l=[{value:"What is a Boilerplate?",id:"what-is-a-boilerplate",children:[]},{value:"Front-End Boilerplate",id:"front-end-boilerplate",children:[{value:"Front-End Tech Stack",id:"front-end-tech-stack",children:[]},{value:"React Component Collections",id:"react-component-collections",children:[]}]},{value:"Back-End Boilerplate",id:"back-end-boilerplate",children:[{value:"Back-End Tech Stack",id:"back-end-tech-stack",children:[]},{value:"Infrastructure",id:"infrastructure",children:[]},{value:"GraphQL / Hasura",id:"graphql--hasura",children:[]},{value:"HTTP API (HAPI)",id:"http-api-hapi",children:[]},{value:"EOSIO",id:"eosio",children:[]},{value:"PostgresDB",id:"postgresdb",children:[]}]},{value:"Full-Stack Boilerplate",id:"full-stack-boilerplate",children:[{value:"Full-Stack Diagram",id:"full-stack-diagram",children:[]}]}],s={toc:l};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"what-is-a-boilerplate"},"What is a Boilerplate?"),Object(n.b)("p",null,"A boilerplate is a framework or template for the development of a project. It is a project structure already defined in advance that serves to streamline the organization and development of the software. Accelerates the integration of solutions and formats that serve to drive the development of a new project to production."),Object(n.b)("p",null,"At EOS Costa Rica we have created three boilerplate repositories: ",Object(n.b)("strong",{parentName:"p"}," Front-End Boilerplate "),", ",Object(n.b)("strong",{parentName:"p"}," Back-End Boilerplate ")," and ",Object(n.b)("strong",{parentName:"p"}," Full-Stack Boilerplate"),"."),Object(n.b)("h2",{id:"front-end-boilerplate"},"Front-End Boilerplate"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/eoscostarica/webapp-boilerplate"},Object(n.b)("strong",{parentName:"a"},"EOS Costa Rica Front-End Boilerplate"))),Object(n.b)("p",null,'"Front-end" refers to the user interface and in the context of a web application is the application that runs in the user\'s web browser.'),Object(n.b)("p",null,"We use ",Object(n.b)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/tutoriales/tutorial-react"},"React JS"),", a JavaScript library for building high-performance and component-based user interfaces that facilitates the development of user interfaces. complex user with predictable code and easy to debug."),Object(n.b)("h3",{id:"front-end-tech-stack"},"Front-End Tech Stack"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://reactjs.org/"},"React")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://www.apollographql.com/docs/react/v3.0-beta/"},"Apollo Client")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://material-ui.com/"},"Material UI")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://react.i18next.com/"},"i18 next"))),Object(n.b)("h3",{id:"react-component-collections"},"React Component Collections"),Object(n.b)("p",null,"We have developed a collection of components in React for EOSIO. You can see the components we have built in our ","[EOS Costa Rica React Components Storybook]"," (",Object(n.b)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/tutoriales/tutorial-react#componentes-en-eos-costa-rica"},"https://guias.eoscostarica.io/docs/tutoriales/tutorial-react#componentes-en-eos-costa-rica"),")\nFor more information about the components you can visit ",Object(n.b)("a",{parentName:"p",href:"https://github.com/eoscostarica/eoscr-components"},"Component Repository"),"."),Object(n.b)("h2",{id:"back-end-boilerplate"},"Back-End Boilerplate"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/eoscostarica/backend-boilerplate"},Object(n.b)("strong",{parentName:"a"}," EOS Costa Rica Back-End Boilerplate "))),Object(n.b)("p",null,'"Back-end" refers to the server application, can be described is the data access layer of an application that contains the business logic for managing data within the application.'),Object(n.b)("h3",{id:"back-end-tech-stack"},"Back-End Tech Stack"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://hasura.io/"},"Hasura")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://hapi.dev/"},"Hapi")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://ipfs.io/"},"IPFS")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://eos.io/"},"EOSIO"))),Object(n.b)("h3",{id:"infrastructure"},"Infrastructure"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://kubernetes.io/"},"K8s"))),Object(n.b)("h3",{id:"graphql--hasura"},"GraphQL / Hasura"),Object(n.b)("p",null,"The Hasura GraphQL engine automatically generates your GraphQL schema and resolvers based on your tables / views in Postgres. You do not need to write a GraphQL schema or solvers."),Object(n.b)("p",null,"The Hasura console gives you user interface tools that speed up your data modeling process or working with your existing database. The console also automatically generates migrations or metadata files that you can edit directly and check in your version control."),Object(n.b)("p",null,"The Hasura GraphQL engine allows you to do anything you would normally do with Postgres by providing GraphQL on top of native Postgres constructs."),Object(n.b)("p",null,"Get more information at ",Object(n.b)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/herramdamientos-para-desarrolladores#hasura"},"Hasura"),"."),Object(n.b)("h3",{id:"http-api-hapi"},"HTTP API (HAPI)"),Object(n.b)("p",null,"hapi.js (commonly known as hapi) is short for HTTP API. It is a rich framework for creating applications and services. It was originally designed for rapid development of RESTful API services using JavaScript, but has since grown into a complete web application framework with out-of-the-box features, input validation, authentication, caching, and more recently, support. for real-time applications with web socket support."),Object(n.b)("p",null,"Get more information at ",Object(n.b)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/herramdamientos-para-desarrolladores#hapi"},"hapi"),"."),Object(n.b)("h3",{id:"eosio"},"EOSIO"),Object(n.b)("p",null,"EOSIO is a third generation blockchain that will achieve the goal of providing an immutable, permanent, traceable and verifiable record of all activity in container warehouses. These data will be public and may be consumed by any external third party."),Object(n.b)("p",null,"Get more information at ",Object(n.b)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/aprender-eosio/componentes-eosio"},"EOSIO components"),"."),Object(n.b)("h3",{id:"postgresdb"},"PostgresDB"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},'"PostgreSQL is a powerful open source object relational database system with over 30 years of active development that has earned it a solid reputation for reliability, robustness and performance"'),"."),Object(n.b)("p",null,"PostgreSQL comes with many features intended to help developers build applications, administrators protect data integrity and create fault tolerant environments, and manage their data no matter how large or small the data set is.\nGet more information at ",Object(n.b)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/herramdamientos-para-desarrolladores#postgresdb"},"PostgresDB"),"."),Object(n.b)("h2",{id:"full-stack-boilerplate"},"Full-Stack Boilerplate"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/eoscostarica/full-stack-boilerplate"},Object(n.b)("strong",{parentName:"a"},"EOS Costa Rica Full-Stack Boilerplate")),"."),Object(n.b)("p",null,"The Full-Stack Boilerplate contains both the client and server software. We have created a highly scalable skeleton with best practices, fullstack monorepo that contains our front-end and back-end boilerplates."),Object(n.b)("h3",{id:"full-stack-diagram"},"Full-Stack Diagram"),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5632966/106770009-2cf32780-6603-11eb-98dd-c1a6a9aa8451.png",alt:"full-stack-boilerplate"})))}p.isMDXComponent=!0}}]);