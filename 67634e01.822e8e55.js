(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{126:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,h=u["".concat(i,".").concat(m)]||u[m]||p[m]||n;return a?r.a.createElement(h,s(s({ref:t},c),{},{components:a})):r.a.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},130:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}));var o=a(22),r=a(134);function n(){var e=Object(o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,n=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,o){var n=void 0===o?{}:o,i=n.forcePrependBaseUrl,s=void 0!==i&&i,l=n.absolute,c=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(s)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+d:d}(n,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,n().withBaseUrl)(e,t)}},134:function(e,t,a){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return r}))},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var o=a(3),r=a(7),n=(a(0),a(126)),i=a(130),s={id:"agile-methodologies",title:"Agile Methodologies",sidebar_label:"Agile Methodologies"},l={unversionedId:"agile-methodologies",id:"agile-methodologies",isDocsHomePage:!1,title:"Agile Methodologies",description:"What are agile methodologies?",source:"@site/docs/agile-methodologies.md",slug:"/agile-methodologies",permalink:"/docs/agile-methodologies",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/agile-methodologies.md",version:"current",lastUpdatedBy:"Steph Delgado",lastUpdatedAt:1611951895,sidebar_label:"Agile Methodologies",sidebar:"docs",previous:{title:"Open Source Contributing Guidelines",permalink:"/docs/open-source-guidelines"},next:{title:"Software Development in Pair or Mob",permalink:"/docs/pair-mob-programming"}},c=[{value:"What are agile methodologies?",id:"what-are-agile-methodologies",children:[{value:"Modern Agile",id:"modern-agile",children:[]}]},{value:"Types of agile methodologies?",id:"types-of-agile-methodologies",children:[{value:"Scrum",id:"scrum",children:[]},{value:"Kanban",id:"kanban",children:[]},{value:"Extreme programming (XP)",id:"extreme-programming-xp",children:[]}]},{value:"Agile project management",id:"agile-project-management",children:[{value:"User Stories",id:"user-stories",children:[]}]},{value:"Work meetings",id:"work-meetings",children:[{value:"Planning Session",id:"planning-session",children:[]},{value:"Grooming Session",id:"grooming-session",children:[]},{value:"Stand-up Session",id:"stand-up-session",children:[]},{value:"Retrospective Session",id:"retrospective-session",children:[]},{value:"Demo Session",id:"demo-session",children:[]}]}],d={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.a)("wrapper",Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.a)("h2",{id:"what-are-agile-methodologies"},"What are agile methodologies?"),Object(n.a)("p",null,"These are work methodologies that allow adaptation to the circumstances of the projects and reduce the documentation processes, they are generally used in projects that do not have a defined scope with certainty, which causes them to be very prone to change, because in these methodologies deliveries of functional products in a short time (2 to 4 weeks) allow the process of changes and correction of errors to be fast and not have a very high cost for the project in general."),Object(n.a)("h3",{id:"modern-agile"},"Modern Agile"),Object(n.a)("p",null,"Modern Agile is far broader than the Agile Manifesto for Software Development. Modern Agile is a concept that is taking many different areas into account, not just software development. It can even be applied in organizations without software development.  "),Object(n.a)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/47RN5F525PA",frameborder:"0",allow:"true",allowfullscreen:!0}),Object(n.a)("p",null,"To clarify how Modern Agile came to be here\u2019s a snippet from the website: Over the past decade, innovative companies, software industry thought leaders and lean/agile pioneers have discovered simpler, sturdier, more streamlined ways to be agile. These modern approaches share a focus on producing exceptional outcomes and growing an outstanding culture. Today, it makes far more sense to bypass antiquated agility in favor of modern approaches.  "),Object(n.a)("p",null,"Modern Agile methods are defined by four guiding principles:"),Object(n.a)("img",{alt:"Imagen Modern Agile",src:Object(i.a)("img/ModernAgile.png")}),Object(n.a)("h2",{id:"types-of-agile-methodologies"},"Types of agile methodologies?"),Object(n.a)("p",null,"Some of the best known and used agile methodologies in the industry are:"),Object(n.a)("h3",{id:"scrum"},"Scrum"),Object(n.a)("p",null,"It is an agile methodology that is based on constant communication and review of the tasks performed (sprints), for each sprint the planning, quality assurance, development, quality inspection and feedback processes are carried out, this reduces the cost in the correction of errors because a sprint is terminated until the client accepts all the ",Object(n.a)("strong",{parentName:"p"}," acceptance criteria "),". The base values \u200b\u200bof this methodology are innovation, flexibility, competitiveness and productivity."),Object(n.a)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/9TycLR0TqFA",frameborder:"0",allowfullscreen:"true"}),Object(n.a)("h3",{id:"kanban"},"Kanban"),Object(n.a)("p",null,"It consists of the elaboration of a table or diagram in which three columns of tasks are reflected; pending, in process and finished. This table should be available to all team members, thus avoiding the repetition of tasks or the possibility of forgetting any of them. Therefore, it helps to improve the productivity and efficiency of the work team. Among its objectives is to improve work planning, improve performance, define continuous delivery times."),Object(n.a)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/jf0tlbt9lx0",frameborder:"0",allow:"true",allowfullscreen:!0}),Object(n.a)("h3",{id:"extreme-programming-xp"},"Extreme programming (XP)"),Object(n.a)("p",null,"It is a methodology based on a set of rules and good practices for software development in highly changing environments with imprecise requirements, therefore, it is focused on continuous feedback between the development team and the client. XP is based on simplicity and aims at customer satisfaction."),Object(n.a)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/hbFOwqYIOcU",frameborder:"0",allow:"true",allowfullscreen:!0}),Object(n.a)("h2",{id:"agile-project-management"},"Agile project management"),Object(n.a)("h3",{id:"user-stories"},"User Stories"),Object(n.a)("p",null,"A user story is a lightweight method for quickly capturing the ",Object(n.a)("strong",{parentName:"p"},"who"),", ",Object(n.a)("strong",{parentName:"p"},"what")," and ",Object(n.a)("strong",{parentName:"p"},"why")," of a product requirement. In simple terms, user stories are stated ideas of requirements that express what users need. User stories are brief, with each element often containing fewer than 10 or 15 words each.",Object(n.a)("br",{parentName:"p"}),"\n","The purpose of a user story is to articulate how a piece of work will deliver a particular value back to the customer. Note that ",Object(n.a)("strong",{parentName:"p"},"customers")," don't have to be external end users in the traditional sense, they can also be internal customers or colleagues within your organization who depend on your team."),Object(n.a)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/apOvF9NVguA",frameborder:"0",allow:"true",allowfullscreen:!0}),Object(n.a)("h4",{id:"how-to-write-user-stories"},"How to write user stories?"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},Object(n.a)("strong",{parentName:"li"},"Definition of Done:")," The story is generally \u201cdone\u201d when the user can complete the outlined task."),Object(n.a)("li",{parentName:"ul"},Object(n.a)("strong",{parentName:"li"},"Outline subtasks or tasks:")," Decide which specific steps need to be completed and who is responsible for each of them."),Object(n.a)("li",{parentName:"ul"},Object(n.a)("strong",{parentName:"li"},"User:")," For Whom? If there are multiple end users, consider making multiple stories."),Object(n.a)("li",{parentName:"ul"},Object(n.a)("strong",{parentName:"li"},"Ordered Steps:")," Write a story for each step in a larger process."),Object(n.a)("li",{parentName:"ul"},Object(n.a)("strong",{parentName:"li"},"Listen to feedback:")," Talk to your users and capture the problem or need in their words."),Object(n.a)("li",{parentName:"ul"},Object(n.a)("strong",{parentName:"li"},"Time:"),"  Since stories should be completable in one sprint, stories that might take weeks or months to complete should be broken up into smaller stories or should be considered their own epic.")),Object(n.a)("h4",{id:"examples"},"Examples:"),Object(n.a)("blockquote",null,Object(n.a)("ul",{parentName:"blockquote"},Object(n.a)("li",{parentName:"ul"},"As  ",Object(n.a)("strong",{parentName:"li"},"manager"),", I want to ",Object(n.a)("strong",{parentName:"li"},"be able to understand my colleagues progress"),", so I ",Object(n.a)("strong",{parentName:"li"},"can better report our success and failures"),". "),Object(n.a)("li",{parentName:"ul"},"As  ",Object(n.a)("strong",{parentName:"li"},"customer")," , I want ",Object(n.a)("strong",{parentName:"li"},"shopping cart feature")," so that ",Object(n.a)("strong",{parentName:"li"},"I can easily purchase items online"),"."),Object(n.a)("li",{parentName:"ul"},"As  ",Object(n.a)("strong",{parentName:"li"},"manager"),", I want to ",Object(n.a)("strong",{parentName:"li"},"generate a report")," so that ",Object(n.a)("strong",{parentName:"li"},"I can understand which departments need more resources"),"."))),Object(n.a)("h2",{id:"work-meetings"},"Work meetings"),Object(n.a)("h3",{id:"planning-session"},"Planning Session"),Object(n.a)("p",null,"Sprint planning is a timeboxed working session that lasts roughly 1 hour for every week of a sprint.\nIs an event in the Scrum framework where the team determines the product backlog items they will work on during that sprint and discusses their initial plan for completing those product backlog items.  "),Object(n.a)("p",null,"This agreement defines the sprint backlog and is based on the team\u2019s velocity or capacity and the length of the sprint."),Object(n.a)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/2A9rkiIcnVI",frameborder:"0",allow:"true",allowfullscreen:!0}),Object(n.a)("h4",{id:"who-is-involved"},"Who is involved?"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},Object(n.a)("p",{parentName:"li"},Object(n.a)("strong",{parentName:"p"},"Product Owner:")," Identifies the candidate product backlog items and their relative priorities, as well as proposes a sprint goal.")),Object(n.a)("li",{parentName:"ul"},Object(n.a)("p",{parentName:"li"},Object(n.a)("strong",{parentName:"p"},"Team Members:")," Determine how many of the product backlog items they forecast they will be able to complete and determine how they will deliver those product backlog items.")),Object(n.a)("li",{parentName:"ul"},Object(n.a)("p",{parentName:"li"},Object(n.a)("strong",{parentName:"p"},"Scrum Master:")," Typically facilitates sprint planning in order to ensure that the discussion is effective and that there is agreement to the sprint goal and that the appropriate product backlog items are included in the sprint backlog."))),Object(n.a)("h4",{id:"planning-steps"},"Planning steps"),Object(n.a)("ol",null,Object(n.a)("li",{parentName:"ol"},"Discuss any new information that may impact the plan."),Object(n.a)("li",{parentName:"ol"},"Confirm any currently known issues and concerns and record as appropriate."),Object(n.a)("li",{parentName:"ol"},"Review the definition of ",Object(n.a)("strong",{parentName:"li"},"Done")," and make any appropriate updates based on technology, skill, or team member changes since the last sprint."),Object(n.a)("li",{parentName:"ol"},"Present proposed product backlog items to consider for the sprint backlog."),Object(n.a)("li",{parentName:"ol"},"Determine the needs, sign up for work, and estimate the work owned."),Object(n.a)("li",{parentName:"ol"},"Product Owner answers clarifying questions and elaborates acceptance criteria."),Object(n.a)("li",{parentName:"ol"},"Confirm any new issues and concerns raised during meeting and record."),Object(n.a)("li",{parentName:"ol"},"Confirm any assumptions or dependencies discovered during planning and record."),Object(n.a)("li",{parentName:"ol"},"ScrumMaster calls for a group consensus on the plan."),Object(n.a)("li",{parentName:"ol"},"Team and Product Owner point out if this is the best plan they can make given what they know right now."),Object(n.a)("li",{parentName:"ol"},"Get back to work.")),Object(n.a)("h3",{id:"grooming-session"},"Grooming Session"),Object(n.a)("p",null,"Backlog grooming, also referred to as backlog refinement or story time, is a recurring event for agile product development teams. The primary purpose of a backlog grooming session is to ensure the next few sprints worth of user stories in the product backlog are prepared for sprint planning. Regular backlog grooming sessions also help ensure the right stories are prioritized."),Object(n.a)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/UpEBfS9SZGM",frameborder:"0",allow:"true",allowfullscreen:!0}),Object(n.a)("h4",{id:"who-is-involved-1"},"Who is involved?"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},Object(n.a)("strong",{parentName:"li"},"Product Owner:")," Is tasked with facilitating backlog refinement sessions. However, that doesn\u2019t mean they are solely responsible for holding backlog grooming sessions."),Object(n.a)("li",{parentName:"ul"},Object(n.a)("strong",{parentName:"li"},"Team Members:")," These events are meant to be collaborative. That means the entire cross-functional team should be represented at refinement sessions."),Object(n.a)("li",{parentName:"ul"},Object(n.a)("strong",{parentName:"li"},"QA representatives:")," You need the combined expertise of the various functions on your team to effectively flesh out your user stories.")),Object(n.a)("h4",{id:"grooming-steps"},"Grooming steps"),Object(n.a)("ol",null,Object(n.a)("li",{parentName:"ol"},"Removing user stories that no longer appear relevant."),Object(n.a)("li",{parentName:"ol"},"Creating new user stories in response to newly discovered needs."),Object(n.a)("li",{parentName:"ol"},"Re-assessing the relative priority of stories."),Object(n.a)("li",{parentName:"ol"},"Assigning estimates to stories which have yet to receive one\ncorrecting estimates in light of newly discovered information."),Object(n.a)("li",{parentName:"ol"},"Splitting user stories which are high priority."),Object(n.a)("li",{parentName:"ol"},"Get back to work.")),Object(n.a)("h3",{id:"stand-up-session"},"Stand-up Session"),Object(n.a)("p",null,"A daily stand-up meeting is an opportunity for the project team to discuss a project\u2019s progress at a high level. These meetings last approximately 15 minutes and allow each contributor to report on their accomplishments since the last stand-up meeting."),Object(n.a)("p",null,"True to its name, all participants in stand-ups usually remain standing to keep the meetings short and on-topic. However, virtual stand-ups are also possible. "),Object(n.a)("p",null,"In Agile project management, daily stand-up meetings are essential. These meetings allow project members to share critical information, openly discuss issues, and hold themselves and each other accountable."),Object(n.a)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/YHMw3CL5cXE",frameborder:"0",allow:"true",allowfullscreen:!0}),Object(n.a)("h4",{id:"benefits-of-daily-agile-stand-ups"},"Benefits of daily Agile stand-ups"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},"Daily stand-ups allow team members to work collaboratively toward project goals. "),Object(n.a)("li",{parentName:"ul"},"Daily stand-up meetings are important for keeping Agile teams focused and on-task while providing quick, project-level updates to the rest of the team. "),Object(n.a)("li",{parentName:"ul"},"The Agile methodology is all about versatility and flexibility, it\u2019s important to make tweaks and improvements to your meetings to fit your team\u2019s needs. "),Object(n.a)("li",{parentName:"ul"},"Your daily stand-up should inform and draw out issues so that you can keep your project on track and get ahead of issues before they pop up.")),Object(n.a)("h3",{id:"retrospective-session"},"Retrospective Session"),Object(n.a)("p",null,"Is a meeting held after a product ships to discuss what happened during the product development and release process, with the goal of improving things in the future based on those learnings and conversations.",Object(n.a)("br",{parentName:"p"}),"\n","An agile retrospective forces the entire team to pause and reflect on what transpired and discuss what worked and what didn\u2019t during a particular project."),Object(n.a)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/MiaZhJyYUj0",frameborder:"0",allow:"true",allowfullscreen:!0}),Object(n.a)("h4",{id:"how-often-should-you-hold-retrospectives"},"How often should you hold retrospectives?"),Object(n.a)("p",null,"Retrospectives can be held more frequently, including for minor releases, each sprint or even at daily or weekly standups."),Object(n.a)("h3",{id:"demo-session"},"Demo Session"),Object(n.a)("p",null,"The sprint demo is invaluable for keeping stakeholders up to speed with the progress of product development. It allows them to feedback and discuss with the Product Owner and Scrum team any possible amendments to the Product Backlog which would help to maximize value.",Object(n.a)("br",{parentName:"p"}),"\n","The sprint demo shouldn\u2019t take up too much of a Scrum team\u2019s time. Ensuring that the sprint review meeting is an informal affair where questions, feedback and discussion are welcome \u2013 allows for prep time to be kept to a minimum."),Object(n.a)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/Njxek3s3Shs",frameborder:"0",allow:"true",allowfullscreen:!0}),Object(n.a)("h4",{id:"demo-steps"},"Demo steps"),Object(n.a)("ol",null,Object(n.a)("li",{parentName:"ol"},Object(n.a)("strong",{parentName:"li"},"Tell a story:")," This is one of the most important factors for a great demo, and also the most overlooked. Given the structured nature of Agile stories and epics, it\u2019s easy to fall into the trap of simply enumerating the work that you\u2019ve done. This isn\u2019t necessarily bad, but it\u2019s unlikely to excite non-technical stakeholders."),Object(n.a)("li",{parentName:"ol"},Object(n.a)("strong",{parentName:"li"},"Let developers brag:")," Whenever possible, it\u2019s great to allow developers to present their own work, which helps to build confidence, morale, and a sense of ownership. A good compromise can be to have one organizing speaker with a different \u201cguest\u201d developer showing off their work each week."),Object(n.a)("li",{parentName:"ol"},Object(n.a)("strong",{parentName:"li"},"Set expectations:")," Setting expectations and providing context are critical for a successful demo. "),Object(n.a)("li",{parentName:"ol"},Object(n.a)("strong",{parentName:"li"},"Action items:")," List all completed stories in your agenda, weed out any stories that shouldn\u2019t be demoed, organize the remaining stories roughly into scenarios or topics, decide whether to have developers help give parts of the demo and always set expectations and give context throughout the demo.")))}p.isMDXComponent=!0}}]);