(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{128:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(r),h=n,d=s["".concat(o,".").concat(h)]||s[h]||p[h]||i;return r?a.a.createElement(d,b(b({ref:t},l),{},{components:r})):a.a.createElement(d,b({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},131:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return o}));var n=r(22),a=r(135);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,b=void 0!==o&&o,c=i.absolute,l=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(b)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+u:u}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},135:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),i=(r(0),r(128)),o=r(131),b={id:"github-guide",title:"GitHub Guide",sidebar_label:"GitHub Guide"},c={unversionedId:"tutorials/github-guide",id:"tutorials/github-guide",isDocsHomePage:!1,title:"GitHub Guide",description:"GitHub is a project management system in the cloud that allows developers to store and have code version control. This platform allows you to work collaboratively with other people around the world, track jobs, and manage projects. Learn more about GitHub.",source:"@site/docs/tutorials/github-guide.md",slug:"/tutorials/github-guide",permalink:"/docs/tutorials/github-guide",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/github-guide.md",version:"current",lastUpdatedBy:"Edgar Parra",lastUpdatedAt:1612582199,sidebar_label:"GitHub Guide",sidebar:"docs",previous:{title:"Markdown Guide",permalink:"/docs/tutorials/markdown-guide"},next:{title:"GitHub Keys",permalink:"/docs/tutorials/github-keys"}},l=[{value:"<strong>Tools</strong>",id:"tools",children:[{value:"GitHub CLI",id:"github-cli",children:[]},{value:"GitHub Desktop",id:"github-desktop",children:[]},{value:"GitHub for mobile",id:"github-for-mobile",children:[]},{value:"Git Bash",id:"git-bash",children:[]},{value:"Hub",id:"hub",children:[]},{value:"Git-extras",id:"git-extras",children:[]}]},{value:"<strong>Commands</strong>",id:"commands",children:[{value:"Start Repository",id:"start-repository",children:[]},{value:"Branches",id:"branches",children:[]},{value:"Upload Changes",id:"upload-changes",children:[]},{value:"Fork",id:"fork",children:[]},{value:"Other Commands",id:"other-commands",children:[]}]}],u={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github"},"GitHub")," is a project management system in the cloud that allows developers to store and have code version control. This platform allows you to work collaboratively with other people around the world, track jobs, and manage projects. ",Object(i.b)("a",{parentName:"p",href:"https://www.howtogeek.com/180167/htg-explains-what-is-github-and-what-do-geeks-use-it-for/"},"Learn more about GitHub"),"."),Object(i.b)("p",null,"For EOS Costa Rica, it is of utmost importance that our collaborators familiarize themselves with this tool, which is why we offer below a basic guide to get started in the world of GitHub."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"tools"},Object(i.b)("strong",{parentName:"h2"},"Tools")),Object(i.b)("h3",{id:"github-cli"},Object(i.b)("a",{parentName:"h3",href:"https://docs.github.com/es/free-pro-team@latest/github/getting-started-with-github/github-cli"},"GitHub CLI")),Object(i.b)("p",null,"GitHub ",Object(i.b)("a",{parentName:"p",href:"https://cli.github.com"},"CLI")," is a command line tool for using GitHub functions on your own computer."),Object(i.b)("img",{alt:"GitHub CLI Image",src:Object(o.a)("img/LogosGitHub/GitHub-CLI.png")}),Object(i.b)("h3",{id:"github-desktop"},Object(i.b)("a",{parentName:"h3",href:"https://docs.github.com/es/free-pro-team@latest/github/getting-started-with-github/github-desktop"},"GitHub Desktop")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/installing-github-desktop"},"GitHub Desktop")," is the desktop application that allows the user to interact with Github functionalities through the graphical interface, replacing the lines of code with a visual device."),Object(i.b)("img",{alt:"GitHub Desktop Image",src:Object(o.a)("img/LogosGitHub/GitHub-Desktop.png")}),Object(i.b)("h3",{id:"github-for-mobile"},Object(i.b)("a",{parentName:"h3",href:"https://docs.github.com/en/github/getting-started-with-github/github-for-mobile"},"GitHub for mobile")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.github.android&hl=es_419&gl=US"},"GitHub for mobile")," is available for Android and iOS, it gives you a way to get high-impact work on GitHub quickly, from anywhere. It also becomes a secure and stable way to access GitHub data through a trusted source client application."),Object(i.b)("img",{alt:"GitHub M\xf3vil Image",src:Object(o.a)("img/LogosGitHub/GitHub-Movil.png")}),Object(i.b)("h3",{id:"git-bash"},Object(i.b)("a",{parentName:"h3",href:"https://desarrolloweb.com/articulos/entiende-instala-configura-git.html#:~:text=Git%20Bash%20es%20la%20l%C3%ADnea,para%20usar%20Git%20en%20Windows."},"Git Bash")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://gitforwindows.org"},"Git Bash")," is a Git application for Windows, where it allows working through command lines managing projects found on GitHub."),Object(i.b)("img",{alt:"Git Bash Image",src:Object(o.a)("img/LogosGitHub/GitHub-Bash.png")}),Object(i.b)("h3",{id:"hub"},Object(i.b)("a",{parentName:"h3",href:"https://hub.github.com"},"Hub")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/github/hub"},"Hub")," is an extension to command-line git that helps you do everyday GitHub tasks without ever leaving the terminal."),Object(i.b)("h3",{id:"git-extras"},Object(i.b)("a",{parentName:"h3",href:"https://www.mankier.com/1/git-extras"},"Git-extras")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/tj/git-extras"},"Git-extras")," repo hosts more than 60 scripts that add to Git's basic functionality. More information about ",Object(i.b)("a",{parentName:"p",href:"https://github.com/tj/git-extras/blob/master/Commands.md"},"Commands"),"."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"commands"},Object(i.b)("strong",{parentName:"h2"},"Commands")),Object(i.b)("h3",{id:"start-repository"},"Start Repository"),Object(i.b)("p",null,"Create a new directory."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"}," git init\n")),Object(i.b)("p",null,"Clone an existing repository."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git clone <url>\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/joshnh/Git-Commands"},"More information"),"."),Object(i.b)("h3",{id:"branches"},"Branches"),Object(i.b)("p",null,"List the existing branches."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git branch \n")),Object(i.b)("p",null,"Create new branch."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git branch <name of the new branch> \n")),Object(i.b)("p",null,"Create new branch and switch to it."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git branch -m <name of the new branch>\ngit checkout -b <name of the new branch>\n")),Object(i.b)("p",null,"Change branch."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git checkout <branch name> \n")),Object(i.b)("p",null,"Delete a branch."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git branch -d <branch name> \n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://thenewstack.io/dont-mess-with-the-master-working-with-branches-in-git-and-github/"},"More information"),"."),Object(i.b)("h3",{id:"upload-changes"},"Upload Changes"),Object(i.b)("p",null,"Update your local repository."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git pull\n")),Object(i.b)("p",null,"Add a file to the repository."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git add <file name>\n")),Object(i.b)("p",null,"Add all the files to the repository."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git add .\n")),Object(i.b)("p",null,"Add all files omitting the new ones."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git add --all\n")),Object(i.b)("p",null,"Add all files within a directory."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git add <url> \n")),Object(i.b)("p",null,"Commit the changes."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'git commit -m <"commit title"> \n')),Object(i.b)("p",null,"Upload changes to the repository."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git push origin <branch name> \n")),Object(i.b)("p",null,"Merge another branch to the current one."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git merge <branch name> \n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.tutsmake.com/upload-project-files-on-github-using-command-line/"},"More information"),"."),Object(i.b)("h3",{id:"fork"},"Fork"),Object(i.b)("p",null,"Download remote from a fork"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git remote add upstream <url>\n")),Object(i.b)("p",null,"Merge with master"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git fetch upstream\ngit merge upstream/master \n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/"},"More information"),"."),Object(i.b)("h3",{id:"other-commands"},"Other Commands"),Object(i.b)("p",null,"Review commit logs."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git log\n")),Object(i.b)("p",null,"Show changes made to a file."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git diff \n")),Object(i.b)("p",null,"Take file out of a commit."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git reset HEAD <file> \n")),Object(i.b)("p",null,"Add remote repository."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git remote set-url origin <url> \n")),Object(i.b)("p",null,"Show list of repositories."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git renite -v \n")),Object(i.b)("p",null,"Show current repository status."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git status \n")),Object(i.b)("p",null,"Verify changes in the repository online with the local one."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git fetch \n")),Object(i.b)("p",null,"Delete file from repository."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git rm <file> \n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://dzone.com/articles/top-20-git-commands-with-examples"},"More information"),"."))}s.isMDXComponent=!0}}]);