(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,d=p["".concat(o,".").concat(b)]||p[b]||f[b]||i;return n?a.a.createElement(d,c({ref:t},s,{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},129:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(131),a=n(130);function i(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var l=!n.startsWith(t)?t+n.replace(/^\//,""):n;return s?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},130:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},131:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},132:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(13),o=n(130),c=n(7),u=Object(r.createContext)({collectLink:function(){}}),s=n(129),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,p,f=e.isNavLink,b=e.to,d=e.href,g=e.activeClassName,h=e["data-noBrokenLinkCheck"],m=l(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),O=Object(s.b)().withBaseUrl,v=Object(r.useContext)(u),y=b||d,w=void 0!==y?function(e){return e.startsWith("/")}(n=y)?O(n):y:void 0,j=Object(o.a)(w),k=Object(r.useRef)(!1),x=f?i.e:i.c,C=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!C&&j&&window.docusaurus.prefetch(w),function(){C&&p&&p.disconnect()}}),[w,C,j]);var P=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,E=!w||!j||P;return w&&j&&!P&&!h&&v.collectLink(w),E?a.a.createElement("a",Object.assign({href:w},!j&&{target:"_blank",rel:"noopener noreferrer"},m)):a.a.createElement(x,Object.assign({},m,{onMouseEnter:function(){k.current||(window.docusaurus.preload(w),k.current=!0)},innerRef:function(e){var t,n;C&&e&&j&&(t=e,n=function(){window.docusaurus.prefetch(w)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:w},f&&{activeClassName:g}))}},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return f}));var r=n(2),a=n(6),i=(n(0),n(128)),o=n(129),c=n(132),u={id:"images-plugin",title:"Images"},s={unversionedId:"features/images-plugin",id:"features/images-plugin",isDocsHomePage:!1,title:"Images",description:"\u2192 See setup instructions for the images plugin",source:"@site/../docs/features/images-plugin.mdx",permalink:"/docs/features/images-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/features/images-plugin.mdx",sidebar:"features",previous:{title:"Databases",permalink:"/docs/features/databases-plugin"},next:{title:"Sandbox",permalink:"/docs/features/sandbox-plugin"}},l=[{value:"Cache Inspector",id:"cache-inspector",children:[]},{value:"Attribution",id:"attribution",children:[]},{value:"Leak Tracking",id:"leak-tracking",children:[]}],p={rightToc:l};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u2192 ",Object(i.b)(c.a,{to:Object(o.a)("/docs/setup/images-plugin"),mdxType:"Link"},"See setup instructions for the images plugin")),Object(i.b)("p",null,"The images plugin allows you to inspect what images were fetched, where they are\ncoming from and selectively clear caches. Currently, the plugin supports\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fresco/"}),"Fresco")," as backend."),Object(i.b)("img",{alt:"Images plugin",src:Object(o.a)("img/images-plugin.png")}),Object(i.b)("h2",{id:"cache-inspector"},"Cache Inspector"),Object(i.b)("p",null,"Images are grouped by the different caching layers they are stored in. The current\nfill rate of the cache is shown and you can choose to selectively clear caches."),Object(i.b)("h2",{id:"attribution"},"Attribution"),Object(i.b)("p",null,"Images can be annotated with attributes that can help to determine the context in\nwhich an image was loaded and displayed. You can use that information to filter\nby a particular surface or only inspect images that are in the critical path\nof your application, for instance during cold start."),Object(i.b)("h2",{id:"leak-tracking"},"Leak Tracking"),Object(i.b)("p",null,"Dealing with large resources can require special APIs to be used that circumvent\nusual garbage collection. The plugin allows tracking ",Object(i.b)("inlineCode",{parentName:"p"},"CloseableReference"),"s for\nFresco on Android that weren't properly closed, which can help you improve\nthe performance of your app."))}f.isMDXComponent=!0}}]);