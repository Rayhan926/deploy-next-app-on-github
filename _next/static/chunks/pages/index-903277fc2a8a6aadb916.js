(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,r){"use strict";var t=r(3038);n.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},u=r(1063),c=r(4651),i=r(7426);var f={};function l(e,n,r,t){if(e&&u.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;f[n+"%"+r+(o?"%"+o:"")]=!0}}var s=function(e){var n,r=!1!==e.prefetch,o=c.useRouter(),s=a.default.useMemo((function(){var n=u.resolveHref(o,e.href,!0),r=t(n,2),a=r[0],c=r[1];return{href:a,as:e.as?u.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,y=e.shallow,b=e.scroll,m=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,_=i.useIntersection({rootMargin:"200px"}),E=t(_,2),w=E[0],L=E[1],M=a.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);a.default.useEffect((function(){var e=L&&r&&u.isLocalURL(d),n="undefined"!==typeof m?m:o&&o.locale,t=f[d+"%"+p+(n?"%"+n:"")];e&&!t&&l(o,d,p,{locale:n})}),[p,d,L,m,r,o]);var j={ref:M,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,c,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),null==c&&t.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](r,t,{shallow:a,locale:i,scroll:c}))}(e,o,d,p,h,y,b,m)},onMouseEnter:function(e){u.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof m?m:o&&o.locale,C=o&&o.isLocaleDomain&&u.getDomainLocale(p,k,o&&o.locales,o&&o.domainLocales);j.href=C||u.addBasePath(u.addLocale(p,k,o&&o.defaultLocale))}return a.default.cloneElement(n,j)};n.default=s},7426:function(e,n,r){"use strict";var t=r(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!u,i=o.useRef(),f=o.useState(!1),l=t(f,2),s=l[0],d=l[1],p=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),r||s||e&&e.tagName&&(i.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=c.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,a=t.observer,u=t.elements;return u.set(e,n),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,s]);return o.useEffect((function(){if(!u&&!s){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[p,s]};var o=r(7294),a=r(3447),u="undefined"!==typeof IntersectionObserver;var c=new Map},5523:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r(5893);function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function a(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return o(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=r(1664);var c=function(){return(0,t.jsx)("div",{children:a(Array(5)).map((function(e,n){return(0,t.jsx)("p",{children:(0,t.jsx)(u.default,{href:n+1+"",children:(0,t.jsxs)("a",{children:["Go to post ",n+1]})})},n)}))})}},8581:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5523)}])},1664:function(e,n,r){e.exports=r(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);