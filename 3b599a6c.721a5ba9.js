(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{128:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),f=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},l=function(e){var t=f(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=f(r),d=n,b=l["".concat(a,".").concat(d)]||l[d]||p[d]||i;return r?o.a.createElement(b,c({ref:t},s,{components:r})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},129:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var n=r(131),o=r(130);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,c=void 0!==a&&a,u=i.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var f=!r.startsWith(t)?t+r.replace(/^\//,""):r;return s?e+f:f}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},130:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},131:function(e,t,r){"use strict";var n=r(0),o=r(19);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},132:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(13),a=r(130),c=r(7),u=Object(n.createContext)({collectLink:function(){}}),s=r(129),f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t,r,l,p=e.isNavLink,d=e.to,b=e.href,v=e.activeClassName,h=e["data-noBrokenLinkCheck"],O=f(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),y=Object(s.b)().withBaseUrl,m=Object(n.useContext)(u),g=d||b,j=void 0!==g?function(e){return e.startsWith("/")}(r=g)?y(r):g:void 0,w=Object(a.a)(j),k=Object(n.useRef)(!1),P=p?i.e:i.c,x=c.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!x&&w&&window.docusaurus.prefetch(j),function(){x&&l&&l.disconnect()}}),[j,x,w]);var E=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,C=!j||!w||E;return j&&w&&!E&&!h&&m.collectLink(j),C?o.a.createElement("a",Object.assign({href:j},!w&&{target:"_blank",rel:"noopener noreferrer"},O)):o.a.createElement(P,Object.assign({},O,{onMouseEnter:function(){k.current||(window.docusaurus.preload(j),k.current=!0)},innerRef:function(e){var t,r;x&&e&&w&&(t=e,r=function(){window.docusaurus.prefetch(j)},(l=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(t),l.disconnect(),r())}))}))).observe(t))},to:j},p&&{activeClassName:v}))}},77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return f})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),i=(r(0),r(128)),a=r(129),c=r(132),u={id:"shared-preferences-plugin",title:"Shared Preferences"},s={unversionedId:"features/shared-preferences-plugin",id:"features/shared-preferences-plugin",isDocsHomePage:!1,title:"Shared Preferences",description:"\u2192 See setup instructions for the Shared Preferences plugin",source:"@site/../docs/features/shared-preferences-plugin.mdx",permalink:"/docs/features/shared-preferences-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/features/shared-preferences-plugin.mdx",sidebar:"features",previous:{title:"Sandbox",permalink:"/docs/features/sandbox-plugin"},next:{title:"LeakCanary",permalink:"/docs/features/leak-canary-plugin"}},f=[],l={rightToc:f};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u2192 ",Object(i.b)(c.a,{to:Object(a.a)("/docs/setup/shared-preferences-plugin"),mdxType:"Link"},"See setup instructions for the Shared Preferences plugin")),Object(i.b)("p",null,"Easily inspect and modify the data contained within your app's shared preferences."),Object(i.b)("img",{alt:"Shared Preferences Plugin",src:Object(a.a)("img/shared-preferences.png")}),Object(i.b)("p",null,"All changes to the given shared preference file will automatically appear in Flipper. You may also edit the values in Flipper and have them synced to your device. This can be done by clicking on the value of the specific key you wish to edit, editing the value and then pressing enter."))}p.isMDXComponent=!0}}]);