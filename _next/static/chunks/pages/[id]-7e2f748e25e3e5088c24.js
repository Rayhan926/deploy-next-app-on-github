(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(1063),u=t(4651),i=t(7426);var l={};function f(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=u.useRouter(),s=a.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?c.resolveHref(o,e.as):u||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,_=e.shallow,g=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,E=i.useIntersection({rootMargin:"200px"}),m=r(E,2),L=m[0],w=m[1],M=a.default.useCallback((function(e){L(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,L]);a.default.useEffect((function(){var e=w&&t&&c.isLocalURL(d),n="undefined"!==typeof y?y:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&f(o,d,p,{locale:n})}),[p,d,w,y,t,o]);var k={ref:M,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:u}))}(e,o,d,p,h,_,g,y)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),f(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var x="undefined"!==typeof y?y:o&&o.locale,C=o&&o.isLocaleDomain&&c.getDomainLocale(p,x,o&&o.locales,o&&o.domainLocales);k.href=C||c.addBasePath(c.addLocale(p,x,o&&o.defaultLocale))}return a.default.cloneElement(n,k)};n.default=s},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=o.useRef(),l=o.useState(!1),f=r(l,2),s=f[0],d=f[1],p=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),t||s||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!c&&!s){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[p,s]};var o=t(7294),a=t(3447),c="undefined"!==typeof IntersectionObserver;var u=new Map},2173:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return a}});var r=t(5893),o=t(1664);var a=!0;n.default=function(e){var n=e.id;return console.log(n),(0,r.jsxs)("div",{children:[(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{children:"Go Home"})}),(0,r.jsxs)("p",{children:["Post No Is ",n]}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"".concat("/deploy-next-app-on-github/"+n,".png"),alt:"Img"})})]})}},1:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return t(2173)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=1,e(e.s=n);var n}));var n=e.O();_N_E=n}]);