(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return c}));var n=a(2),r=a(6),i=(a(0),a(128)),l={id:"databases-plugin",title:"Databases Plugin Setup",sidebar_label:"Databases"},s={unversionedId:"setup/databases-plugin",id:"setup/databases-plugin",isDocsHomePage:!1,title:"Databases Plugin Setup",description:"To use the databases plugin, you need to add the plugin to your Flipper client instance. The plugin is currently only available for Android.",source:"@site/../docs/setup/databases-plugin.mdx",permalink:"/docs/setup/databases-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/setup/databases-plugin.mdx",sidebar_label:"Databases",sidebar:"setup",previous:{title:"Network Setup",permalink:"/docs/setup/network-plugin"},next:{title:"Images Setup",permalink:"/docs/setup/images-plugin"}},o=[{value:"Android",id:"android",children:[]}],u={rightToc:o};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To use the databases plugin, you need to add the plugin to your Flipper client instance. The plugin is currently only available for Android."),Object(i.b)("h2",{id:"android"},"Android"),Object(i.b)("p",null,"Instantiate and add the plugin in ",Object(i.b)("inlineCode",{parentName:"p"},"FlipperClient"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"import com.facebook.flipper.plugins.databases.DatabasesFlipperPlugin;\n\nclient.addPlugin(new DatabasesFlipperPlugin(context));\n")),Object(i.b)("p",null,"By default it will list all sqlite databases returned by the context. If you are storing a sqlite database somewhere else, you can specify a ",Object(i.b)("inlineCode",{parentName:"p"},"File")," to it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'client.addPlugin(new DatabasesFlipperPlugin(new SqliteDatabaseDriver(context, new SqliteDatabaseProvider() {\n    @Override\n    public List<File> getDatabaseFiles() {\n        List<File> databaseFiles = new ArrayList<>();\n        for (String databaseName : context.databaseList()) {\n            databaseFiles.add(context.getDatabasePath(databaseName));\n        }\n        databaseFiles.add("...path_to_your_db...")\n        return databaseFiles;\n    }\n})));\n')),Object(i.b)("p",null,"If you use a different type of database other than sqlite, you can implement a driver to be able to access it via Flipper. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"client.addPlugin(new DatabasesFlipperPlugin(new DatabaseDriver(context) {\n    @Override\n    public List getDatabases() {\n        return null;\n    }\n\n    @Override\n    public List<String> getTableNames(DatabaseDescriptor databaseDescriptor) {\n        return null;\n    }\n\n    @Override\n    public DatabaseGetTableDataResponse getTableData(DatabaseDescriptor databaseDescriptor, String table, String order, boolean reverse, int start, int count) {\n        return null;\n    }\n\n    @Override\n    public DatabaseGetTableStructureResponse getTableStructure(DatabaseDescriptor databaseDescriptor, String table) {\n        return null;\n    }\n\n    @Override\n    public DatabaseExecuteSqlResponse executeSQL(DatabaseDescriptor databaseDescriptor, String query) {\n        return null;\n    }\n    }));\n")))}c.isMDXComponent=!0},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),c=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},p=function(e){var t=c(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,g=p["".concat(l,".").concat(d)]||p[d]||b[d]||i;return a?r.a.createElement(g,s({ref:t},u,{components:a})):r.a.createElement(g,s({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);