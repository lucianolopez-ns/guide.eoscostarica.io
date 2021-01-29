(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{120:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(125)),i={id:"open-source-guidelines",title:"Open Source Contributing Guidelines",sidebar_label:"Open Source Guidelines"},s={unversionedId:"open-source-guidelines",id:"open-source-guidelines",isDocsHomePage:!1,title:"Open Source Contributing Guidelines",description:"Development Process",source:"@site/docs/open-source-guidelines.md",slug:"/open-source-guidelines",permalink:"/docs/open-source-guidelines",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/open-source-guidelines.md",version:"current",lastUpdatedBy:"Steph Delgado",lastUpdatedAt:1611889805,sidebar_label:"Open Source Guidelines",sidebar:"docs",previous:{title:"Engineering Culture",permalink:"/docs/engineering-culture"},next:{title:"Agile Methodologies",permalink:"/docs/agile-methodologies"}},l=[{value:"Development Process",id:"development-process",children:[]},{value:"Pull Request General Guidelines",id:"pull-request-general-guidelines",children:[]},{value:"Commit Message Guidelines",id:"commit-message-guidelines",children:[{value:"Commit Message Format",id:"commit-message-format",children:[]},{value:"Revert",id:"revert",children:[]},{value:"Type",id:"type",children:[]},{value:"Scope",id:"scope",children:[]},{value:"Subject",id:"subject",children:[]},{value:"Body",id:"body",children:[]},{value:"Footer",id:"footer",children:[]}]},{value:"Reporting bugs",id:"reporting-bugs",children:[]},{value:"Releases",id:"releases",children:[{value:"Changelog Generation",id:"changelog-generation",children:[]}]},{value:"Advanced Git tools",id:"advanced-git-tools",children:[]},{value:"Code Standards",id:"code-standards",children:[]},{value:"Continuous Integration and Delivery",id:"continuous-integration-and-delivery",children:[]},{value:"Pre-commit Hooks",id:"pre-commit-hooks",children:[]}],c={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h2",{id:"development-process"},"Development Process"),Object(o.a)("p",null,"We use a Kanban-style board to prioritize the work. For example the ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/eoscostarica/eos-rate/projects/1"}),"EOS rate project board"),"."),Object(o.a)("p",null,"We have added a additional column to the default automated board in order to maintain a prioritized To Do column.\nWhen a new issues is create you need to explicitly use the project option on the GitHub issue to include it in the board; Once you do that it gets automatically added to the New Issues column."),Object(o.a)("p",null,"Periodically we move the new Issues to the To Do column and manually and give it the appropriate priority."),Object(o.a)("p",null,"When you start working on a task you must manually move it to In Progress column."),Object(o.a)("p",null,"We use GitHub flow ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://guides.github.com/introduction/flow/"}),"https://guides.github.com/introduction/flow/")," to request code changes.\nWe develop on master and release using tags with semver versioning."),Object(o.a)("p",null,Object(o.a)("img",Object(n.a)({parentName:"p"},{src:"https://gaboesquivel.com/img/2018/05/github-flow.png",alt:null}))),Object(o.a)("p",null,"New and reopened pull request are automatically added to the board in the In Progress column."),Object(o.a)("p",null,"When the pull request is closed is moved to the Done column automatically. If the pull request closes and issues it is properly stated with the GitHub keywords closes in the pull request it gets automatically moved to the Done column too."),Object(o.a)("h2",{id:"pull-request-general-guidelines"},"Pull Request General Guidelines"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Please check to make sure that there aren't existing pull requests attempting to address the issue mentioned."),Object(o.a)("li",{parentName:"ul"},"Check for related issues on the issue tracker."),Object(o.a)("li",{parentName:"ul"},"Non-trivial changes should be discussed on an issue first."),Object(o.a)("li",{parentName:"ul"},"Develop in a topic branch, never on master: ",Object(o.a)("inlineCode",{parentName:"li"},"git checkout -b topic-branch"),"."),Object(o.a)("li",{parentName:"ul"},"Provide useful pull request description."),Object(o.a)("li",{parentName:"ul"},'Make "atomic", well scoped pull requests. 1 PR per feature of bug fix.'),Object(o.a)("li",{parentName:"ul"},"Link the issue on the pull request description for cross references between code and issues.")),Object(o.a)("p",null,"We only support support ",Object(o.a)("strong",{parentName:"p"},"squash merge"),' of the pull requests as a best practice for ensure the master log is maintained clean and relevant, without requiring the pull request to be rebased. This strategy requires that all pull request made are "atomic", in other words they solve one thing only.  One pull request per feature, bug fix or documentation update.'),Object(o.a)("h2",{id:"commit-message-guidelines"},"Commit Message Guidelines"),Object(o.a)("p",null,"We have very precise rules over how our git commit messages can be formatted.  This leads to ",Object(o.a)("strong",{parentName:"p"},"more\nreadable messages")," that are easy to follow when looking through the ",Object(o.a)("strong",{parentName:"p"},"project history"),".  But also,\nwe use the git commit messages to ",Object(o.a)("strong",{parentName:"p"},"generate the project change log"),"."),Object(o.a)("p",null,"We follow angularJS commit message conventions as follows:"),Object(o.a)("h3",{id:"commit-message-format"},"Commit Message Format"),Object(o.a)("p",null,"Each commit message consists of a ",Object(o.a)("strong",{parentName:"p"},"header"),", a ",Object(o.a)("strong",{parentName:"p"},"body")," and a ",Object(o.a)("strong",{parentName:"p"},"footer"),".  The header has a special\nformat that includes a ",Object(o.a)("strong",{parentName:"p"},"type"),", a ",Object(o.a)("strong",{parentName:"p"},"scope")," and a ",Object(o.a)("strong",{parentName:"p"},"subject"),":"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),"<type>(<scope>): <subject>\n<BLANK LINE>\n<body>\n<BLANK LINE>\n<footer>\n")),Object(o.a)("p",null,"The ",Object(o.a)("strong",{parentName:"p"},"header")," is mandatory and the ",Object(o.a)("strong",{parentName:"p"},"scope")," of the header is optional."),Object(o.a)("p",null,"Any line of the commit message cannot be longer 100 characters! This allows the message to be easier\nto read on GitHub as well as in various git tools."),Object(o.a)("p",null,"The footer should contain a ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/articles/closing-issues-via-commit-messages/"}),"closing reference to an issue")," if any."),Object(o.a)("p",null,"Samples:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),"docs(changelog): update changelog to beta.5\n")),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),"fix(release): need to depend on latest rxjs and zone.js\n\nThe version in our package.json gets copied to the one we publish, and users need the latest of these.\n")),Object(o.a)("p",null,"even more ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/angular/angular/commits/master"}),"samples")),Object(o.a)("h3",{id:"revert"},"Revert"),Object(o.a)("p",null,"If the commit reverts a previous commit, it should begin with ",Object(o.a)("inlineCode",{parentName:"p"},"revert: "),", followed by the header of the reverted commit. In the body it should say: ",Object(o.a)("inlineCode",{parentName:"p"},"This reverts commit <hash>."),", where the hash is the SHA of the commit being reverted."),Object(o.a)("h3",{id:"type"},"Type"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"build"),": Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"ci"),": Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"docs"),": Documentation only changes"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"feat"),": A new feature"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"fix"),": A bug fix"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"perf"),": A code change that improves performance"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"refactor"),": A code change that neither fixes a bug nor adds a feature"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"style"),": Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"test"),": Adding missing tests or correcting existing tests"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"content"),": Adding or removing content"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"devtools"),": Developer tooling related")),Object(o.a)("h3",{id:"scope"},"Scope"),Object(o.a)("p",null,"The scope is the name of the component or service that it affects. Eg:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"common")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"smart-contracts")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"webapp")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"storage")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"graphql")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"frontend")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"demux")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"docker"))),Object(o.a)("h3",{id:"subject"},"Subject"),Object(o.a)("p",null,"The subject contains a succinct description of the change:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},'use the imperative, present tense: "change" not "changed" nor "changes"'),Object(o.a)("li",{parentName:"ul"},"don't capitalize the first letter"),Object(o.a)("li",{parentName:"ul"},"no dot (.) at the end")),Object(o.a)("h3",{id:"body"},"Body"),Object(o.a)("p",null,"Just as in the ",Object(o.a)("strong",{parentName:"p"},"subject"),', use the imperative, present tense: "change" not "changed" nor "changes".\nThe body should include the motivation for the change and contrast this with previous behavior.'),Object(o.a)("h3",{id:"footer"},"Footer"),Object(o.a)("p",null,"The footer should contain any information about ",Object(o.a)("strong",{parentName:"p"},"Breaking Changes")," and is also the place to\nreference GitHub issues that this commit ",Object(o.a)("strong",{parentName:"p"},"Closes"),"."),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Breaking Changes")," should start with the word ",Object(o.a)("inlineCode",{parentName:"p"},"BREAKING CHANGE:")," with a space or two newlines. The rest of the commit message is then used for this."),Object(o.a)("h2",{id:"reporting-bugs"},"Reporting bugs"),Object(o.a)("p",null,"Before submitting your issue please check that you've completed the following steps:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Made sure you're on the latest version."),Object(o.a)("li",{parentName:"ul"},"Used the search feature to ensure that the bug hasn't been reported before.")),Object(o.a)("p",null,"Bug reports should contain the following information:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Summary: A brief description."),Object(o.a)("li",{parentName:"ul"},"Steps to reproduce: How did you encounter the bug? Instructions to reproduce it."),Object(o.a)("li",{parentName:"ul"},"Expected behavior: How did you expect it to behave?"),Object(o.a)("li",{parentName:"ul"},"Actual behavior: How did it actually behave?"),Object(o.a)("li",{parentName:"ul"},"References: Links to any related tickets or information sources."),Object(o.a)("li",{parentName:"ul"},"If possible, attach visual documentation of the bug. Screenshot or animated gif.")),Object(o.a)("h2",{id:"releases"},"Releases"),Object(o.a)("p",null,"We release the production software version using github tags following ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"http://semver.org"}),"Semver"),', except the version roles have the semantic names, "Breaking.Feature.Fix" instead of "Major.Minor.Patch".'),Object(o.a)("h4",{id:"breakingfeaturefix"},"Breaking.Feature.Fix"),Object(o.a)("p",null,"We don't decide what the version will be. The API changes decide. Version numbers are for computers, not people. Release names are for people."),Object(o.a)("h5",{id:"breaking"},"Breaking"),Object(o.a)("p",null,"Any breaking change, no matter how small increments the Breaking version number. Incrementing the Breaking version number has absolutely no relationship with issuing a release."),Object(o.a)("h5",{id:"feature"},"Feature"),Object(o.a)("p",null,"When any new feature is added. This could be as small as a new public property, or as large as a new module contract being exposed."),Object(o.a)("h5",{id:"fix"},"Fix"),Object(o.a)("p",null,"When a documented feature does not behave as documented, or when a security issue is discovered and fixed without altering documented behavior."),Object(o.a)("h3",{id:"changelog-generation"},"Changelog Generation"),Object(o.a)("p",null,"On each release we generate a changelog file to document changes using the standard ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rafinskipg/git-changelog"}),"git-changelog")," package. There's an npm task for it."),Object(o.a)("h2",{id:"advanced-git-tools"},"Advanced Git tools"),Object(o.a)("p",null,"There are also tools like ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://hub.github.com/"}),"Hub")," and ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tj/git-extras"}),"git-extras")," that facilitate interacting with Github. You can leverage these tools to contribute to this repository."),Object(o.a)("h2",{id:"code-standards"},"Code Standards"),Object(o.a)("p",null,"We use the ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://standardjs.com"}),"standardjs code style"),"."),Object(o.a)("h2",{id:"continuous-integration-and-delivery"},"Continuous Integration and Delivery"),Object(o.a)("p",null,"This is a work in progress, we are going to probably want to use Netifly and TravisCI."),Object(o.a)("h2",{id:"pre-commit-hooks"},"Pre-commit Hooks"),Object(o.a)("p",null,"We use pre-commit hooks to ensure that both the code standards and commit message conventions are met."))}u.isMDXComponent=!0},125:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return a?r.a.createElement(h,s(s({ref:t},c),{},{components:a})):r.a.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);