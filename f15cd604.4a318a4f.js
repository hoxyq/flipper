(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{119:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return u}));var n=o(2),r=o(6),i=(o(0),o(128)),a={id:"stetho",title:"Stetho Guidance",sidebar_label:"Stetho Guidance"},l={unversionedId:"stetho",id:"stetho",isDocsHomePage:!1,title:"Stetho Guidance",description:"In 2015, we introduced Stetho, an Android debugging bridge built on top of Chrome DevTools. While it was a valuable tool to us and many members of the community, we felt that it limited us in what we could do with it. Stetho is Android-only and while Chrome DevTools gave us a nice foundation to build upon, they also limited us in what we could build. Stetho is an Android tool and Chrome DevTools is built for web developers. This means we can only provide a good experience for the intersection of those two development environments, which was very limiting. With Flipper being built as a standalone app, we can do more things, like handling adb connections and supporting iOS, which wasn't easily achievable with Stetho.",source:"@site/../docs/stetho.mdx",permalink:"/docs/stetho",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/stetho.mdx",sidebar_label:"Stetho Guidance",sidebar:"setup",previous:{title:"Running Flipper with different ports",permalink:"/docs/custom-ports"}},s=[],c={rightToc:s};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In 2015, we introduced ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://facebook.github.io/stetho/"}),"Stetho"),", an Android debugging bridge built on top of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/tools/chrome-devtools/"}),"Chrome DevTools"),". While it was a valuable tool to us and many members of the community, we felt that it limited us in what we could do with it. Stetho is Android-only and while Chrome DevTools gave us a nice foundation to build upon, they also limited us in what we could build. Stetho is an Android tool and Chrome DevTools is built for web developers. This means we can only provide a good experience for the intersection of those two development environments, which was very limiting. With Flipper being built as a standalone app, we can do more things, like handling adb connections and supporting iOS, which wasn't easily achievable with Stetho."),Object(i.b)("p",null,"This is why we built Flipper. We wanted to create a platform that gives us all the flexibility we need to build more advanced features and support for iOS. One of Flipper's core concepts is its extensibility using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"extending/index"}),"plugins"),". Plugins are written in React and we provide a set of ready-to-use UI components that allow developers to build great plugin UIs with a few lines of code."),Object(i.b)("p",null,"While offering many new features, Flipper also already covers most of the features provided by Stetho. This includes network and layout inspection and an advanced log viewer. We are committed to continuously improving Flipper with new features and plugins, however, we are aware that not all Stetho features are currently supported by Flipper. If you are using a particular feature of Stetho which isn't supported by Flipper, we are more than happy to hear about your use-case. Stetho will continue to work and we are not abandoning it so you can choose the tool that fits your needs best. We are confident that Flipper will work well for most use-cases and are more than happy to accept contributions from the open-source community adding new features."))}u.isMDXComponent=!0},128:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return b}));var n=o(0),r=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l({},t,{},e)),o},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),h=n,b=p["".concat(a,".").concat(h)]||p[h]||d[h]||i;return o?r.a.createElement(b,l({ref:t},c,{components:o})):r.a.createElement(b,l({ref:t},c))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"}}]);