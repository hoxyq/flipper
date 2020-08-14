(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{128:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},s=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(i.forwardRef)((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),b=i,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||r;return t?a.a.createElement(m,l({ref:n},u,{components:t})):a.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},129:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}));var i=t(131),a=t(130);function r(){var e=Object(i.a)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,r=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,i){var r=void 0===i?{}:i,o=r.forcePrependBaseUrl,l=void 0!==o&&o,c=r.absolute,u=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(l)return n+t;var p=!t.startsWith(n)?n+t.replace(/^\//,""):t;return u?e+p:p}(r,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,r().withBaseUrl)(e,n)}},130:function(e,n,t){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return a}))},131:function(e,n,t){"use strict";var i=t(0),a=t(19);n.a=function(){var e=Object(i.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},61:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));var i=t(2),a=t(6),r=(t(0),t(128)),o=t(129),l={id:"ios",title:"Building an iOS Plugin"},c={unversionedId:"tutorial/ios",id:"tutorial/ios",isDocsHomePage:!1,title:"Building an iOS Plugin",description:"For the purpose of the tutorial, we will assume you already have an existing iOS application in",source:"@site/../docs/tutorial/ios.mdx",permalink:"/docs/tutorial/ios",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/tutorial/ios.mdx",sidebar:"extending",previous:{title:"Intro",permalink:"/docs/tutorial/intro"},next:{title:"Building an Android Plugin",permalink:"/docs/tutorial/android"}},u=[{value:"Creating a Plugin",id:"creating-a-plugin",children:[]},{value:"Registering your Plugin",id:"registering-your-plugin",children:[]},{value:"What next",id:"what-next",children:[]}],p={rightToc:u};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("img",{alt:"iOS Tutorial App",src:Object(o.a)("img/ios-tutorial-app.png")}),Object(r.b)("p",null,"For the purpose of the tutorial, we will assume you already have an existing iOS application in\nwhich you have a feed or list of items. As the Flipper team, we obviously concern ourselves mostly\nwith sea mammals, so this is what our app displays. The actual display logic is not what's interesting\nhere, but how we can make this data available in our Flipper desktop app."),Object(r.b)("p",null,"You can find the source code of the project ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/facebook/flipper/tree/c55bebd1be545c63dde93e143dd5c341dc2fd20b/iOS/Tutorial/Tutorial"}),"on GitHub"),"."),Object(r.b)("h2",{id:"creating-a-plugin"},"Creating a Plugin"),Object(r.b)("p",null,"On iOS, a Flipper plugin is a class that implements the\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/facebook/flipper/blob/master/iOS/FlipperKit/FlipperPlugin.h"}),Object(r.b)("inlineCode",{parentName:"a"},"FlipperPlugin")),"\ninterface."),Object(r.b)("p",null,"The interface is rather small and only comprises four methods:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"(NSString *)identifier"),": Specify a unique string so the JavaScript side knows where to talk to. This must match the name attribute in the ",Object(r.b)("inlineCode",{parentName:"li"},"package.json")," we will look into later in this tutorial."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"(void)didConnect:(id<FlipperConnection>)connection"),": This method is called when the desktop client connects and is ready to receive or send data."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"(void)didDisconnect"),": We're sure you can figure this one out."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"(BOOL)runInBackground"),": Unless this is true, only the currently selected plugin in the Flipper UI can communicate with the device. Its an optional method which you can override. Default value used is ",Object(r.b)("inlineCode",{parentName:"li"},"false"),".")),Object(r.b)("p",null,"Let's implement these methods for our sealife app:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-swift"}),'import Foundation\nimport FlipperKit\n\nclass SeaMammalsPlugin: NSObject, FlipperPlugin {\n  var connection: FlipperConnection? = nil\n  let mammals: [MarineMammal]\n\n  init(_ marineMammals: [MarineMammal]) {\n      mammals = marineMammals\n  }\n\n  func identifier() -> String! {\n    return "sea-mammals"\n  }\n\n  func didConnect(_ connection: FlipperConnection!) {\n    self.connection = connection\n    for (index, mammal) in mammals.enumerated() {\n      connection.send("newRow", withParams: ["id": index, "title": mammal.name, "url": mammal.image.absoluteString])\n    }\n  }\n\n  func didDisconnect() {\n    connection = nil;\n  }\n}\n')),Object(r.b)("p",null,"The two interesting bits here are ",Object(r.b)("inlineCode",{parentName:"p"},"didConnect")," and ",Object(r.b)("inlineCode",{parentName:"p"},"connection.send"),". ",Object(r.b)("inlineCode",{parentName:"p"},"connection.send"),' sends a message\nto the desktop app and is identified with the name "newRow".'),Object(r.b)("p",null,"For our sample app, we're dealing with a static data source. However, in real\nlife, you will likely dynamically receive new data as the user interacts with\nthe app. So while we just send all the data we have at once in ",Object(r.b)("inlineCode",{parentName:"p"},"didConnect"),",\nyou would normally set up a listener here to instead call ",Object(r.b)("inlineCode",{parentName:"p"},'connection.send("newRow", params)')," as new data\narrives. ",Object(r.b)("inlineCode",{parentName:"p"},"params")," are nothing but a dictionary which contains the data which you want to send over the wire to the desktop app."),Object(r.b)("h2",{id:"registering-your-plugin"},"Registering your Plugin"),Object(r.b)("p",null,"Now all you need to do is let Flipper know about your new plugin. You do this\nby calling ",Object(r.b)("inlineCode",{parentName:"p"},"add")," on your ",Object(r.b)("inlineCode",{parentName:"p"},"FlipperClient"),", which is normally created\nat application startup."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-swift"}),"let client = FlipperClient.shared()\n// Add all sorts of other amazing plugins here ...\nclient?.add(SeaMammalsPlugin(MarineMammal.defaultList))\nclient?.start()\n")),Object(r.b)("h2",{id:"what-next"},"What next"),Object(r.b)("p",null,'When starting your application now, Flipper will tell the desktop application\nabout the plugin it supports, including "sea-mammals" and will look for a\ncorresponding JavaScript plugin by that name. Before building it\'s JavaScript counterpart, first lets build a Flipper Plugin in Android.'))}s.isMDXComponent=!0}}]);