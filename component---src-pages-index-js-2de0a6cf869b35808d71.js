(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{136:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(142);t.default=function(){return a.a.createElement(u.a,null,a.a.createElement("p",null,"Home"))}},139:function(e,t,n){var r;e.exports=(r=n(141))&&r.default||r},140:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var r=n(0),a=n.n(r),u=n(5),i=n.n(u),o=n(138),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var l=n(139),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(31);n.d(t,"parsePath",function(){return d.a});var p=a.a.createContext({}),f=function(e){return a.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},141:function(e,t,n){"use strict";n.r(t);n(32);var r=n(0),a=n.n(r),u=n(5),i=n.n(u),o=n(49),c=n(3),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},142:function(e,t,n){"use strict";var r,a=n(7),u=n.n(a),i=n(0),o=n.n(i),c=n(140),l=n(48),s=Object(l.inject)("store")(r=Object(l.observer)(r=function(e){function t(t){return e.call(this,t)||this}return u()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"Count: ",this.props.store.Count),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return e.props.store.Increment()}},"Add"),o.a.createElement("button",{onClick:function(){return e.props.store.Decrement()}},"Subtract")))},t}(i.Component))||r)||r,d=n(143),p=n.n(d),f=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement(c.Link,{to:"/"},o.a.createElement("h3",null,"MobX example")),o.a.createElement(p.a,null),o.a.createElement(s,null),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/a/"},"a")),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/b/"},"b")),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/c/"},"c"))),this.props.children)},t}(i.Component);t.a=f}}]);
//# sourceMappingURL=component---src-pages-index-js-2de0a6cf869b35808d71.js.map