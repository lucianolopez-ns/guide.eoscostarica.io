"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[6154],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,b=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9416:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"web-app-boilerplate",title:"Web App Boilerplate",sidebar_label:"Webapp Boilerplate"},p=void 0,c={unversionedId:"web-app-boilerplate",id:"web-app-boilerplate",isDocsHomePage:!1,title:"Web App Boilerplate",description:"React Webapp Boilerplate",source:"@site/docs/web-app-boilerplate.md",sourceDirName:".",slug:"/web-app-boilerplate",permalink:"/docs/web-app-boilerplate",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/web-app-boilerplate.md",tags:[],version:"current",lastUpdatedBy:"AngeloCG97",lastUpdatedAt:1632806321,formattedLastUpdatedAt:"9/28/2021",frontMatter:{id:"web-app-boilerplate",title:"Web App Boilerplate",sidebar_label:"Webapp Boilerplate"}},s=[{value:"React Webapp Boilerplate",id:"react-webapp-boilerplate",children:[]},{value:"Technologies",id:"technologies",children:[]},{value:"Installation",id:"installation",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Step by step",id:"step-by-step",children:[]}]},{value:"Execution",id:"execution",children:[]},{value:"EOSCR React Components",id:"eoscr-react-components",children:[{value:"GitHub Repository",id:"github-repository",children:[]},{value:"StoryBook Preview",id:"storybook-preview",children:[]}]}],u={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"react-webapp-boilerplate"},"React Webapp Boilerplate"),(0,o.kt)("p",null,"A bare-bones react web app featuring UAL for EOSIO authenticators (wallets)"),(0,o.kt)("h2",{id:"technologies"},"Technologies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React.js - React 16\u2728, React Router 5"),(0,o.kt)("li",{parentName:"ul"},"Rematch/core - Rematch a Redux Framework"),(0,o.kt)("li",{parentName:"ul"},"Material-ui/core - React components for faster and easier web development"),(0,o.kt)("li",{parentName:"ul"},"universal-authenticator-library - A library for allowing apps to easily use different auth providers (optional)"),(0,o.kt)("li",{parentName:"ul"},"Lint - ESlint"),(0,o.kt)("li",{parentName:"ul"},"Styles - Material-UI Theme (customizable)")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Basic knowledge about Docker, Docker Compose and NodeJS is required."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/es/"},"node.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"yarn"))),(0,o.kt)("h3",{id:"step-by-step"},"Step by step"),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},".env.example")," then update the environment variables according to your needs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cp .env.example .env\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If you want to the boilerplate using UAL login integration, please make sure that ",(0,o.kt)("inlineCode",{parentName:"em"},"REACT_APP_USE_UAL")," env variable is set as true.")),(0,o.kt)("h2",{id:"execution"},"Execution"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone this repo using ",(0,o.kt)("inlineCode",{parentName:"li"},"git clone --depth=1 https://github.com/eoscostarica/webapp-boilerplate.git <YOUR_PROJECT_NAME>")),(0,o.kt)("li",{parentName:"ol"},"Move to the appropriate directory: ",(0,o.kt)("inlineCode",{parentName:"li"},"cd <YOUR_PROJECT_NAME>"),"."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn")," in order to install dependencies.\n",(0,o.kt)("em",{parentName:"li"},"At this point you can run ",(0,o.kt)("inlineCode",{parentName:"em"},"yarn start")," to see the example app at ",(0,o.kt)("inlineCode",{parentName:"em"},"http://localhost:3000"),"."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GitHub")," : ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/eoscostarica/webapp-boilerplate"},"https://github.com/eoscostarica/webapp-boilerplate"))),(0,o.kt)("h2",{id:"eoscr-react-components"},"EOSCR React Components"),(0,o.kt)("p",null,"A collection of React Components for EOSIO"),(0,o.kt)("h3",{id:"github-repository"},"GitHub Repository"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/eoscr-components"},"https://github.com/eoscostarica/eoscr-components")),(0,o.kt)("h3",{id:"storybook-preview"},"StoryBook Preview"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://components.eosio.cr"},"https://components.eosio.cr")))}m.isMDXComponent=!0}}]);