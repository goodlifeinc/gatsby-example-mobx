(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(148);t.default=function(){return r.a.createElement(u.a,null,r.a.createElement("p",null,"B"))}},145:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),u=n(5),i=n.n(u),c=n(144),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var o=n(145),d=n.n(o);n.d(t,"PageRenderer",function(){return d.a});var s=n(35);n.d(t,"parsePath",function(){return s.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(e,t,n){"use strict";n.r(t);n(36);var a=n(0),r=n.n(a),u=n(5),i=n.n(u),c=n(50),l=n(3),o=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},148:function(e,t,n){"use strict";var a=n(0),r=n.n(a),u=n(5),i=n.n(u),c=n(146),l=n(149),o=n.n(l),d=n(49),s=Object(d.inject)("store")(Object(d.observer)(function(e){var t=e.store;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Counted to: ",t.Count),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return t.Increment()}},"Add"),r.a.createElement("button",{onClick:function(){return t.Decrement()}},"Subtract")))})),m=function(e){var t=e.children;return r.a.createElement("div",{style:{margin:"0 auto",width:900,maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement(c.Link,{to:"/"},r.a.createElement("h3",null,"MobX example")),r.a.createElement(o.a,null),r.a.createElement("div",null,r.a.createElement(s,null)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/a/"},"a")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/b/"},"b")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/c/"},"c"))),t)};m.propTypes={children:i.a.object.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-b-js-452377170a1a5e481693.js.map