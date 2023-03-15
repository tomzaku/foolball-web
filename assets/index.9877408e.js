(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var _s,xe,tc,cs,Wo,nc,Ks={},ic=[],xu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function wn(r,e){for(var t in e)r[t]=e[t];return r}function sc(r){var e=r.parentNode;e&&e.removeChild(r)}function Ot(r,e,t){var n,i,s,o={};for(s in e)s=="key"?n=e[s]:s=="ref"?i=e[s]:o[s]=e[s];if(arguments.length>2&&(o.children=arguments.length>3?_s.call(arguments,2):t),typeof r=="function"&&r.defaultProps!=null)for(s in r.defaultProps)o[s]===void 0&&(o[s]=r.defaultProps[s]);return us(r,o,n,i,null)}function us(r,e,t,n,i){var s={type:r,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++tc:i};return i==null&&xe.vnode!=null&&xe.vnode(s),s}function yu(){return{current:null}}function un(r){return r.children}function an(r,e){this.props=r,this.context=e}function zi(r,e){if(e==null)return r.__?zi(r.__,r.__.__k.indexOf(r)+1):null;for(var t;e<r.__k.length;e++)if((t=r.__k[e])!=null&&t.__e!=null)return t.__e;return typeof r.type=="function"?zi(r):null}function rc(r){var e,t;if((r=r.__)!=null&&r.__c!=null){for(r.__e=r.__c.base=null,e=0;e<r.__k.length;e++)if((t=r.__k[e])!=null&&t.__e!=null){r.__e=r.__c.base=t.__e;break}return rc(r)}}function co(r){(!r.__d&&(r.__d=!0)&&cs.push(r)&&!Js.__r++||Wo!==xe.debounceRendering)&&((Wo=xe.debounceRendering)||setTimeout)(Js)}function Js(){for(var r;Js.__r=cs.length;)r=cs.sort(function(e,t){return e.__v.__b-t.__v.__b}),cs=[],r.some(function(e){var t,n,i,s,o,a;e.__d&&(o=(s=(t=e).__v).__e,(a=t.__P)&&(n=[],(i=wn({},s)).__v=s.__v+1,Eo(a,s,i,t.__n,a.ownerSVGElement!==void 0,s.__h!=null?[o]:null,n,o==null?zi(s):o,s.__h),cc(n,s),s.__e!=o&&rc(s)))})}function oc(r,e,t,n,i,s,o,a,l,u){var c,d,h,m,g,p,f,_=n&&n.__k||ic,v=_.length;for(t.__k=[],c=0;c<e.length;c++)if((m=t.__k[c]=(m=e[c])==null||typeof m=="boolean"?null:typeof m=="string"||typeof m=="number"||typeof m=="bigint"?us(null,m,null,null,m):Array.isArray(m)?us(un,{children:m},null,null,null):m.__b>0?us(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)!=null){if(m.__=t,m.__b=t.__b+1,(h=_[c])===null||h&&m.key==h.key&&m.type===h.type)_[c]=void 0;else for(d=0;d<v;d++){if((h=_[d])&&m.key==h.key&&m.type===h.type){_[d]=void 0;break}h=null}Eo(r,m,h=h||Ks,i,s,o,a,l,u),g=m.__e,(d=m.ref)&&h.ref!=d&&(f||(f=[]),h.ref&&f.push(h.ref,null,m),f.push(d,m.__c||g,m)),g!=null?(p==null&&(p=g),typeof m.type=="function"&&m.__k===h.__k?m.__d=l=ac(m,l,r):l=lc(r,m,h,_,g,l),typeof t.type=="function"&&(t.__d=l)):l&&h.__e==l&&l.parentNode!=r&&(l=zi(h))}for(t.__e=p,c=v;c--;)_[c]!=null&&(typeof t.type=="function"&&_[c].__e!=null&&_[c].__e==t.__d&&(t.__d=zi(n,c+1)),hc(_[c],_[c]));if(f)for(c=0;c<f.length;c++)uc(f[c],f[++c],f[++c])}function ac(r,e,t){for(var n,i=r.__k,s=0;i&&s<i.length;s++)(n=i[s])&&(n.__=r,e=typeof n.type=="function"?ac(n,e,t):lc(t,n,n,i,n.__e,e));return e}function Sn(r,e){return e=e||[],r==null||typeof r=="boolean"||(Array.isArray(r)?r.some(function(t){Sn(t,e)}):e.push(r)),e}function lc(r,e,t,n,i,s){var o,a,l;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(t==null||i!=s||i.parentNode==null)e:if(s==null||s.parentNode!==r)r.appendChild(i),o=null;else{for(a=s,l=0;(a=a.nextSibling)&&l<n.length;l+=2)if(a==i)break e;r.insertBefore(i,s),o=s}return o!==void 0?o:i.nextSibling}function Mu(r,e,t,n,i){var s;for(s in t)s==="children"||s==="key"||s in e||Qs(r,s,null,t[s],n);for(s in e)i&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||t[s]===e[s]||Qs(r,s,e[s],t[s],n)}function Ho(r,e,t){e[0]==="-"?r.setProperty(e,t):r[e]=t==null?"":typeof t!="number"||xu.test(e)?t:t+"px"}function Qs(r,e,t,n,i){var s;e:if(e==="style")if(typeof t=="string")r.style.cssText=t;else{if(typeof n=="string"&&(r.style.cssText=n=""),n)for(e in n)t&&e in t||Ho(r.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||Ho(r.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in r?e.toLowerCase().slice(2):e.slice(2),r.l||(r.l={}),r.l[e+s]=t,t?n||r.addEventListener(e,s?jo:qo,s):r.removeEventListener(e,s?jo:qo,s);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in r)try{r[e]=t==null?"":t;break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||e[0]==="a"&&e[1]==="r")?r.setAttribute(e,t):r.removeAttribute(e))}}function qo(r){this.l[r.type+!1](xe.event?xe.event(r):r)}function jo(r){this.l[r.type+!0](xe.event?xe.event(r):r)}function Eo(r,e,t,n,i,s,o,a,l){var u,c,d,h,m,g,p,f,_,v,y,b,M,S=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(l=t.__h,a=e.__e=t.__e,e.__h=null,s=[a]),(u=xe.__b)&&u(e);try{e:if(typeof S=="function"){if(f=e.props,_=(u=S.contextType)&&n[u.__c],v=u?_?_.props.value:u.__:n,t.__c?p=(c=e.__c=t.__c).__=c.__E:("prototype"in S&&S.prototype.render?e.__c=c=new S(f,v):(e.__c=c=new an(f,v),c.constructor=S,c.render=wu),_&&_.sub(c),c.props=f,c.state||(c.state={}),c.context=v,c.__n=n,d=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),S.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=wn({},c.__s)),wn(c.__s,S.getDerivedStateFromProps(f,c.__s))),h=c.props,m=c.state,d)S.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(S.getDerivedStateFromProps==null&&f!==h&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(f,v),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(f,c.__s,v)===!1||e.__v===t.__v){c.props=f,c.state=c.__s,e.__v!==t.__v&&(c.__d=!1),c.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(C){C&&(C.__=e)}),c.__h.length&&o.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(f,c.__s,v),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(h,m,g)})}if(c.context=v,c.props=f,c.__v=e,c.__P=r,y=xe.__r,b=0,"prototype"in S&&S.prototype.render)c.state=c.__s,c.__d=!1,y&&y(e),u=c.render(c.props,c.state,c.context);else do c.__d=!1,y&&y(e),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++b<25);c.state=c.__s,c.getChildContext!=null&&(n=wn(wn({},n),c.getChildContext())),d||c.getSnapshotBeforeUpdate==null||(g=c.getSnapshotBeforeUpdate(h,m)),M=u!=null&&u.type===un&&u.key==null?u.props.children:u,oc(r,Array.isArray(M)?M:[M],e,t,n,i,s,o,a,l),c.base=e.__e,e.__h=null,c.__h.length&&o.push(c),p&&(c.__E=c.__=null),c.__e=!1}else s==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=bu(t.__e,e,t,n,i,s,o,l);(u=xe.diffed)&&u(e)}catch(C){e.__v=null,(l||s!=null)&&(e.__e=a,e.__h=!!l,s[s.indexOf(a)]=null),xe.__e(C,e,t)}}function cc(r,e){xe.__c&&xe.__c(e,r),r.some(function(t){try{r=t.__h,t.__h=[],r.some(function(n){n.call(t)})}catch(n){xe.__e(n,t.__v)}})}function bu(r,e,t,n,i,s,o,a){var l,u,c,d=t.props,h=e.props,m=e.type,g=0;if(m==="svg"&&(i=!0),s!=null){for(;g<s.length;g++)if((l=s[g])&&"setAttribute"in l==!!m&&(m?l.localName===m:l.nodeType===3)){r=l,s[g]=null;break}}if(r==null){if(m===null)return document.createTextNode(h);r=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,h.is&&h),s=null,a=!1}if(m===null)d===h||a&&r.data===h||(r.data=h);else{if(s=s&&_s.call(r.childNodes),u=(d=t.props||Ks).dangerouslySetInnerHTML,c=h.dangerouslySetInnerHTML,!a){if(s!=null)for(d={},g=0;g<r.attributes.length;g++)d[r.attributes[g].name]=r.attributes[g].value;(c||u)&&(c&&(u&&c.__html==u.__html||c.__html===r.innerHTML)||(r.innerHTML=c&&c.__html||""))}if(Mu(r,h,d,i,a),c)e.__k=[];else if(g=e.props.children,oc(r,Array.isArray(g)?g:[g],e,t,n,i&&m!=="foreignObject",s,o,s?s[0]:t.__k&&zi(t,0),a),s!=null)for(g=s.length;g--;)s[g]!=null&&sc(s[g]);a||("value"in h&&(g=h.value)!==void 0&&(g!==r.value||m==="progress"&&!g||m==="option"&&g!==d.value)&&Qs(r,"value",g,d.value,!1),"checked"in h&&(g=h.checked)!==void 0&&g!==r.checked&&Qs(r,"checked",g,d.checked,!1))}return r}function uc(r,e,t){try{typeof r=="function"?r(e):r.current=e}catch(n){xe.__e(n,t)}}function hc(r,e,t){var n,i;if(xe.unmount&&xe.unmount(r),(n=r.ref)&&(n.current&&n.current!==r.__e||uc(n,null,e)),(n=r.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){xe.__e(s,e)}n.base=n.__P=null,r.__c=void 0}if(n=r.__k)for(i=0;i<n.length;i++)n[i]&&hc(n[i],e,typeof r.type!="function");t||r.__e==null||sc(r.__e),r.__=r.__e=r.__d=void 0}function wu(r,e,t){return this.constructor(r,t)}function ds(r,e,t){var n,i,s;xe.__&&xe.__(r,e),i=(n=typeof t=="function")?null:t&&t.__k||e.__k,s=[],Eo(e,r=(!n&&t||e).__k=Ot(un,null,[r]),i||Ks,Ks,e.ownerSVGElement!==void 0,!n&&t?[t]:i?null:e.firstChild?_s.call(e.childNodes):null,s,!n&&t?t:i?i.__e:e.firstChild,n),cc(s,r)}function dc(r,e){ds(r,e,dc)}function Su(r,e,t){var n,i,s,o=wn({},r.props);for(s in e)s=="key"?n=e[s]:s=="ref"?i=e[s]:o[s]=e[s];return arguments.length>2&&(o.children=arguments.length>3?_s.call(arguments,2):t),us(r.type,o,n||r.key,i||r.ref,null)}function sr(r,e){var t={__c:e="__cC"+nc++,__:r,Consumer:function(n,i){return n.children(i)},Provider:function(n){var i,s;return this.getChildContext||(i=[],(s={})[e]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&i.some(co)},this.sub=function(o){i.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){i.splice(i.indexOf(o),1),a&&a.call(o)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t}_s=ic.slice,xe={__e:function(r,e,t,n){for(var i,s,o;e=e.__;)if((i=e.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(r)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(r,n||{}),o=i.__d),o)return i.__E=i}catch(a){r=a}throw r}},tc=0,an.prototype.setState=function(r,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=wn({},this.state),typeof r=="function"&&(r=r(wn({},t),this.props)),r&&wn(t,r),r!=null&&this.__v&&(e&&this.__h.push(e),co(this))},an.prototype.forceUpdate=function(r){this.__v&&(this.__e=!0,r&&this.__h.push(r),co(this))},an.prototype.render=un,cs=[],Js.__r=0,nc=0;var zn,je,xr,Xo,Fi=0,fc=[],js=[],Yo=xe.__b,$o=xe.__r,Zo=xe.diffed,Ko=xe.__c,Jo=xe.unmount;function Vi(r,e){xe.__h&&xe.__h(je,r,Fi||e),Fi=0;var t=je.__H||(je.__H={__:[],__h:[]});return r>=t.__.length&&t.__.push({__V:js}),t.__[r]}function Pi(r){return Fi=1,pc(_c,r)}function pc(r,e,t){var n=Vi(zn++,2);if(n.t=r,!n.__c&&(n.__=[t?t(e):_c(void 0,e),function(s){var o=n.__N?n.__N[0]:n.__[0],a=n.t(o,s);o!==a&&(n.__N=[a,n.__[1]],n.__c.setState({}))}],n.__c=je,!je.u)){je.u=!0;var i=je.shouldComponentUpdate;je.shouldComponentUpdate=function(s,o,a){if(!n.__c.__H)return!0;var l=n.__c.__H.__.filter(function(c){return c.__c});if(l.every(function(c){return!c.__N}))return!i||i.call(this,s,o,a);var u=!1;return l.forEach(function(c){if(c.__N){var d=c.__[0];c.__=c.__N,c.__N=void 0,d!==c.__[0]&&(u=!0)}}),!!u&&(!i||i.call(this,s,o,a))}}return n.__N||n.__}function mc(r,e){var t=Vi(zn++,3);!xe.__s&&To(t.__H,e)&&(t.__=r,t.i=e,je.__H.__h.push(t))}function vs(r,e){var t=Vi(zn++,4);!xe.__s&&To(t.__H,e)&&(t.__=r,t.i=e,je.__h.push(t))}function gc(r){return Fi=5,fs(function(){return{current:r}},[])}function Eu(r,e,t){Fi=6,vs(function(){return typeof r=="function"?(r(e()),function(){return r(null)}):r?(r.current=e(),function(){return r.current=null}):void 0},t==null?t:t.concat(r))}function fs(r,e){var t=Vi(zn++,7);return To(t.__H,e)?(t.__V=r(),t.i=e,t.__h=r,t.__V):t.__}function Tu(r,e){return Fi=8,fs(function(){return r},e)}function rr(r){var e=je.context[r.__c],t=Vi(zn++,9);return t.c=r,e?(t.__==null&&(t.__=!0,e.sub(je)),e.props.value):r.__}function Au(r,e){xe.useDebugValue&&xe.useDebugValue(e?e(r):r)}function Cu(){var r=Vi(zn++,11);return r.__||(r.__="P"+function(e){for(var t=0,n=e.length;n>0;)t=(t<<5)-t+e.charCodeAt(--n)|0;return t}(je.__v.o)+zn),r.__}function Lu(){for(var r;r=fc.shift();)if(r.__P&&r.__H)try{r.__H.__h.forEach(Xs),r.__H.__h.forEach(uo),r.__H.__h=[]}catch(e){r.__H.__h=[],xe.__e(e,r.__v)}}xe.__b=function(r){typeof r.type!="function"||r.o||r.type===un?r.o||(r.o=r.__&&r.__.o?r.__.o:""):r.o=(r.__&&r.__.o?r.__.o:"")+(r.__&&r.__.__k?r.__.__k.indexOf(r):0),je=null,Yo&&Yo(r)},xe.__r=function(r){$o&&$o(r),zn=0;var e=(je=r.__c).__H;e&&(xr===je?(e.__h=[],je.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=js,t.__N=t.i=void 0})):(e.__h.forEach(Xs),e.__h.forEach(uo),e.__h=[])),xr=je},xe.diffed=function(r){Zo&&Zo(r);var e=r.__c;e&&e.__H&&(e.__H.__h.length&&(fc.push(e)!==1&&Xo===xe.requestAnimationFrame||((Xo=xe.requestAnimationFrame)||Pu)(Lu)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==js&&(t.__=t.__V),t.i=void 0,t.__V=js})),xr=je=null},xe.__c=function(r,e){e.some(function(t){try{t.__h.forEach(Xs),t.__h=t.__h.filter(function(n){return!n.__||uo(n)})}catch(n){e.some(function(i){i.__h&&(i.__h=[])}),e=[],xe.__e(n,t.__v)}}),Ko&&Ko(r,e)},xe.unmount=function(r){Jo&&Jo(r);var e,t=r.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{Xs(n)}catch(i){e=i}}),t.__H=void 0,e&&xe.__e(e,t.__v))};var Qo=typeof requestAnimationFrame=="function";function Pu(r){var e,t=function(){clearTimeout(n),Qo&&cancelAnimationFrame(e),setTimeout(r)},n=setTimeout(t,100);Qo&&(e=requestAnimationFrame(t))}function Xs(r){var e=je,t=r.__c;typeof t=="function"&&(r.__c=void 0,t()),je=e}function uo(r){var e=je;r.__c=r.__(),je=e}function To(r,e){return!r||r.length!==e.length||e.some(function(t,n){return t!==r[n]})}function _c(r,e){return typeof e=="function"?e(r):e}function vc(r,e){for(var t in e)r[t]=e[t];return r}function ho(r,e){for(var t in r)if(t!=="__source"&&!(t in e))return!0;for(var n in e)if(n!=="__source"&&r[n]!==e[n])return!0;return!1}function fo(r){this.props=r}function Ru(r,e){function t(i){var s=this.props.ref,o=s==i.ref;return!o&&s&&(s.call?s(null):s.current=null),e?!e(this.props,i)||!o:ho(this.props,i)}function n(i){return this.shouldComponentUpdate=t,Ot(r,i)}return n.displayName="Memo("+(r.displayName||r.name)+")",n.prototype.isReactComponent=!0,n.__f=!0,n}(fo.prototype=new an).isPureReactComponent=!0,fo.prototype.shouldComponentUpdate=function(r,e){return ho(this.props,r)||ho(this.state,e)};var ea=xe.__b;xe.__b=function(r){r.type&&r.type.__f&&r.ref&&(r.props.ref=r.ref,r.ref=null),ea&&ea(r)};var Du=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Iu(r){function e(t){var n=vc({},t);return delete n.ref,r(n,t.ref||null)}return e.$$typeof=Du,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(r.displayName||r.name)+")",e}var ta=function(r,e){return r==null?null:Sn(Sn(r).map(e))},xc={map:ta,forEach:ta,count:function(r){return r?Sn(r).length:0},only:function(r){var e=Sn(r);if(e.length!==1)throw"Children.only";return e[0]},toArray:Sn},Nu=xe.__e;xe.__e=function(r,e,t,n){if(r.then){for(var i,s=e;s=s.__;)if((i=s.__c)&&i.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),i.__c(r,e)}Nu(r,e,t,n)};var na=xe.unmount;function yc(r,e,t){return r&&(r.__c&&r.__c.__H&&(r.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),r.__c.__H=null),(r=vc({},r)).__c!=null&&(r.__c.__P===t&&(r.__c.__P=e),r.__c=null),r.__k=r.__k&&r.__k.map(function(n){return yc(n,e,t)})),r}function Mc(r,e,t){return r&&(r.__v=null,r.__k=r.__k&&r.__k.map(function(n){return Mc(n,e,t)}),r.__c&&r.__c.__P===e&&(r.__e&&t.insertBefore(r.__e,r.__d),r.__c.__e=!0,r.__c.__P=t)),r}function Ys(){this.__u=0,this.t=null,this.__b=null}function bc(r){var e=r.__.__c;return e&&e.__a&&e.__a(r)}function zu(r){var e,t,n;function i(s){if(e||(e=r()).then(function(o){t=o.default||o},function(o){n=o}),n)throw n;if(!t)throw e;return Ot(t,s)}return i.displayName="Lazy",i.__f=!0,i}function os(){this.u=null,this.o=null}xe.unmount=function(r){var e=r.__c;e&&e.__R&&e.__R(),e&&r.__h===!0&&(r.type=null),na&&na(r)},(Ys.prototype=new an).__c=function(r,e){var t=e.__c,n=this;n.t==null&&(n.t=[]),n.t.push(t);var i=bc(n.__v),s=!1,o=function(){s||(s=!0,t.__R=null,i?i(a):a())};t.__R=o;var a=function(){if(!--n.__u){if(n.state.__a){var u=n.state.__a;n.__v.__k[0]=Mc(u,u.__c.__P,u.__c.__O)}var c;for(n.setState({__a:n.__b=null});c=n.t.pop();)c.forceUpdate()}},l=e.__h===!0;n.__u++||l||n.setState({__a:n.__b=n.__v.__k[0]}),r.then(o,o)},Ys.prototype.componentWillUnmount=function(){this.t=[]},Ys.prototype.render=function(r,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=yc(this.__b,t,n.__O=n.__P)}this.__b=null}var i=e.__a&&Ot(un,null,r.fallback);return i&&(i.__h=null),[Ot(un,null,e.__a?null:r.children),i]};var ia=function(r,e,t){if(++t[1]===t[0]&&r.o.delete(e),r.props.revealOrder&&(r.props.revealOrder[0]!=="t"||!r.o.size))for(t=r.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;r.u=t=t[2]}};function Fu(r){return this.getChildContext=function(){return r.context},r.children}function Ou(r){var e=this,t=r.i;e.componentWillUnmount=function(){ds(null,e.l),e.l=null,e.i=null},e.i&&e.i!==t&&e.componentWillUnmount(),r.__v?(e.l||(e.i=t,e.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,i){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),ds(Ot(Fu,{context:e.context},r.__v),e.l)):e.l&&e.componentWillUnmount()}function Bu(r,e){var t=Ot(Ou,{__v:r,i:e});return t.containerInfo=e,t}(os.prototype=new an).__a=function(r){var e=this,t=bc(e.__v),n=e.o.get(r);return n[0]++,function(i){var s=function(){e.props.revealOrder?(n.push(i),ia(e,r,n)):i()};t?t(s):s()}},os.prototype.render=function(r){this.u=null,this.o=new Map;var e=Sn(r.children);r.revealOrder&&r.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return r.children},os.prototype.componentDidUpdate=os.prototype.componentDidMount=function(){var r=this;this.o.forEach(function(e,t){ia(r,t,e)})};var wc=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Uu=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ku=typeof document<"u",Gu=function(r){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(r)};function Sc(r,e,t){return e.__k==null&&(e.textContent=""),ds(r,e),typeof t=="function"&&t(),r?r.__c:null}function Vu(r,e,t){return dc(r,e),typeof t=="function"&&t(),r?r.__c:null}an.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(r){Object.defineProperty(an.prototype,r,{configurable:!0,get:function(){return this["UNSAFE_"+r]},set:function(e){Object.defineProperty(this,r,{configurable:!0,writable:!0,value:e})}})});var sa=xe.event;function Wu(){}function Hu(){return this.cancelBubble}function qu(){return this.defaultPrevented}xe.event=function(r){return sa&&(r=sa(r)),r.persist=Wu,r.isPropagationStopped=Hu,r.isDefaultPrevented=qu,r.nativeEvent=r};var Ec,ra={configurable:!0,get:function(){return this.class}},oa=xe.vnode;xe.vnode=function(r){var e=r.type,t=r.props,n=t;if(typeof e=="string"){var i=e.indexOf("-")===-1;for(var s in n={},t){var o=t[s];ku&&s==="children"&&e==="noscript"||s==="value"&&"defaultValue"in t&&o==null||(s==="defaultValue"&&"value"in t&&t.value==null?s="value":s==="download"&&o===!0?o="":/ondoubleclick/i.test(s)?s="ondblclick":/^onchange(textarea|input)/i.test(s+e)&&!Gu(t.type)?s="oninput":/^onfocus$/i.test(s)?s="onfocusin":/^onblur$/i.test(s)?s="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s)?s=s.toLowerCase():i&&Uu.test(s)?s=s.replace(/[A-Z0-9]/g,"-$&").toLowerCase():o===null&&(o=void 0),/^oninput$/i.test(s)&&(s=s.toLowerCase(),n[s]&&(s="oninputCapture")),n[s]=o)}e=="select"&&n.multiple&&Array.isArray(n.value)&&(n.value=Sn(t.children).forEach(function(a){a.props.selected=n.value.indexOf(a.props.value)!=-1})),e=="select"&&n.defaultValue!=null&&(n.value=Sn(t.children).forEach(function(a){a.props.selected=n.multiple?n.defaultValue.indexOf(a.props.value)!=-1:n.defaultValue==a.props.value})),r.props=n,t.class!=t.className&&(ra.enumerable="className"in t,t.className!=null&&(n.class=t.className),Object.defineProperty(n,"className",ra))}r.$$typeof=wc,oa&&oa(r)};var aa=xe.__r;xe.__r=function(r){aa&&aa(r),Ec=r.__c};var ju={ReactCurrentDispatcher:{current:{readContext:function(r){return Ec.__n[r.__c].props.value}}}};function Xu(r){return Ot.bind(null,r)}function Ao(r){return!!r&&r.$$typeof===wc}function Yu(r){return Ao(r)?Su.apply(null,arguments):r}function $u(r){return!!r.__k&&(ds(null,r),!0)}function Zu(r){return r&&(r.base||r.nodeType===1&&r)||null}var Ku=function(r,e){return r(e)},Ju=function(r,e){return r(e)},Qu=un;function Tc(r){r()}function eh(r){return r}function th(){return[!1,Tc]}var nh=vs;function ih(r,e){var t=e(),n=Pi({h:{__:t,v:e}}),i=n[0].h,s=n[1];return vs(function(){i.__=t,i.v=e,i.__!==e()&&s({h:i})},[r,t,e]),mc(function(){return i.__!==i.v()&&s({h:i}),r(function(){i.__!==i.v()&&s({h:i})})},[r]),t}var It={useState:Pi,useId:Cu,useReducer:pc,useEffect:mc,useLayoutEffect:vs,useInsertionEffect:nh,useTransition:th,useDeferredValue:eh,useSyncExternalStore:ih,startTransition:Tc,useRef:gc,useImperativeHandle:Eu,useMemo:fs,useCallback:Tu,useContext:rr,useDebugValue:Au,version:"17.0.2",Children:xc,render:Sc,hydrate:Vu,unmountComponentAtNode:$u,createPortal:Bu,createElement:Ot,createContext:sr,createFactory:Xu,cloneElement:Yu,createRef:yu,Fragment:un,isValidElement:Ao,findDOMNode:Zu,Component:an,PureComponent:fo,memo:Ru,forwardRef:Iu,flushSync:Ju,unstable_batchedUpdates:Ku,StrictMode:Qu,Suspense:Ys,SuspenseList:os,lazy:zu,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ju};function er(){return er=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},er.apply(this,arguments)}var Qn;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Qn||(Qn={}));var la=function(r){return r},ca="beforeunload",sh="popstate";function rh(r){r===void 0&&(r={});var e=r,t=e.window,n=t===void 0?document.defaultView:t,i=n.history;function s(){var C=n.location,w=C.pathname,T=C.search,I=C.hash,V=i.state||{};return[V.idx,la({pathname:w,search:T,hash:I,state:V.usr||null,key:V.key||"default"})]}var o=null;function a(){if(o)m.call(o),o=null;else{var C=Qn.Pop,w=s(),T=w[0],I=w[1];if(m.length){if(T!=null){var V=c-T;V&&(o={action:C,location:I,retry:function(){M(V*-1)}},M(V))}}else v(C)}}n.addEventListener(sh,a);var l=Qn.Pop,u=s(),c=u[0],d=u[1],h=ha(),m=ha();c==null&&(c=0,i.replaceState(er({},i.state,{idx:c}),""));function g(C){return typeof C=="string"?C:ah(C)}function p(C,w){return w===void 0&&(w=null),la(er({pathname:d.pathname,hash:"",search:""},typeof C=="string"?or(C):C,{state:w,key:oh()}))}function f(C,w){return[{usr:C.state,key:C.key,idx:w},g(C)]}function _(C,w,T){return!m.length||(m.call({action:C,location:w,retry:T}),!1)}function v(C){l=C;var w=s();c=w[0],d=w[1],h.call({action:l,location:d})}function y(C,w){var T=Qn.Push,I=p(C,w);function V(){y(C,w)}if(_(T,I,V)){var q=f(I,c+1),P=q[0],R=q[1];try{i.pushState(P,"",R)}catch{n.location.assign(R)}v(T)}}function b(C,w){var T=Qn.Replace,I=p(C,w);function V(){b(C,w)}if(_(T,I,V)){var q=f(I,c),P=q[0],R=q[1];i.replaceState(P,"",R),v(T)}}function M(C){i.go(C)}var S={get action(){return l},get location(){return d},createHref:g,push:y,replace:b,go:M,back:function(){M(-1)},forward:function(){M(1)},listen:function(w){return h.push(w)},block:function(w){var T=m.push(w);return m.length===1&&n.addEventListener(ca,ua),function(){T(),m.length||n.removeEventListener(ca,ua)}}};return S}function ua(r){r.preventDefault(),r.returnValue=""}function ha(){var r=[];return{get length(){return r.length},push:function(t){return r.push(t),function(){r=r.filter(function(n){return n!==t})}},call:function(t){r.forEach(function(n){return n&&n(t)})}}}function oh(){return Math.random().toString(36).substr(2,8)}function ah(r){var e=r.pathname,t=e===void 0?"/":e,n=r.search,i=n===void 0?"":n,s=r.hash,o=s===void 0?"":s;return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function or(r){var e={};if(r){var t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));var n=r.indexOf("?");n>=0&&(e.search=r.substr(n),r=r.substr(0,n)),r&&(e.pathname=r)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const lh=sr(null),Co=sr(null),Ac=sr({outlet:null,matches:[]});function Fn(r,e){if(!r)throw new Error(e)}function ch(r,e,t){t===void 0&&(t="/");let n=typeof e=="string"?or(e):e,i=Lc(n.pathname||"/",t);if(i==null)return null;let s=Cc(r);uh(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=xh(s[a],i);return o}function Cc(r,e,t,n){return e===void 0&&(e=[]),t===void 0&&(t=[]),n===void 0&&(n=""),r.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(n)||Fn(!1),o.relativePath=o.relativePath.slice(n.length));let a=Ri([n,o.relativePath]),l=t.concat(o);i.children&&i.children.length>0&&(i.index===!0&&Fn(!1),Cc(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:_h(a,i.index),routesMeta:l})}),e}function uh(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:vh(e.routesMeta.map(n=>n.childrenIndex),t.routesMeta.map(n=>n.childrenIndex)))}const hh=/^:\w+$/,dh=3,fh=2,ph=1,mh=10,gh=-2,da=r=>r==="*";function _h(r,e){let t=r.split("/"),n=t.length;return t.some(da)&&(n+=gh),e&&(n+=fh),t.filter(i=>!da(i)).reduce((i,s)=>i+(hh.test(s)?dh:s===""?ph:mh),n)}function vh(r,e){return r.length===e.length&&r.slice(0,-1).every((n,i)=>n===e[i])?r[r.length-1]-e[e.length-1]:0}function xh(r,e){let{routesMeta:t}=r,n={},i="/",s=[];for(let o=0;o<t.length;++o){let a=t[o],l=o===t.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=yh({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(n,c.params);let d=a.route;s.push({params:n,pathname:Ri([i,c.pathname]),pathnameBase:Pc(Ri([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Ri([i,c.pathnameBase]))}return s}function yh(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,n]=Mh(r.path,r.caseSensitive,r.end),i=e.match(t);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:n.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=bh(a[d]||""),u},{}),pathname:s,pathnameBase:o,pattern:r}}function Mh(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0);let n=[],i="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(n.push(a),"([^\\/]+)"));return r.endsWith("*")?(n.push("*"),i+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=t?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),n]}function bh(r,e){try{return decodeURIComponent(r)}catch{return r}}function Lc(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=r.charAt(e.length);return t&&t!=="/"?null:r.slice(e.length)||"/"}const Ri=r=>r.join("/").replace(/\/\/+/g,"/"),Pc=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/");function Lo(){return rr(Co)!=null}function wh(){return Lo()||Fn(!1),rr(Co).location}function Sh(r,e){Lo()||Fn(!1);let{matches:t}=rr(Ac),n=t[t.length-1],i=n?n.params:{};n&&n.pathname;let s=n?n.pathnameBase:"/";n&&n.route;let o=wh(),a;if(e){var l;let h=typeof e=="string"?or(e):e;s==="/"||((l=h.pathname)==null?void 0:l.startsWith(s))||Fn(!1),a=h}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",d=ch(r,{pathname:c});return Eh(d&&d.map(h=>Object.assign({},h,{params:Object.assign({},i,h.params),pathname:Ri([s,h.pathname]),pathnameBase:h.pathnameBase==="/"?s:Ri([s,h.pathnameBase])})),t)}function Eh(r,e){return e===void 0&&(e=[]),r==null?null:r.reduceRight((t,n,i)=>Ot(Ac.Provider,{children:n.route.element!==void 0?n.route.element:t,value:{outlet:t,matches:e.concat(r.slice(0,i+1))}}),null)}function Rc(r){Fn(!1)}function Th(r){let{basename:e="/",children:t=null,location:n,navigationType:i=Qn.Pop,navigator:s,static:o=!1}=r;Lo()&&Fn(!1);let a=Pc(e),l=fs(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof n=="string"&&(n=or(n));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:m="default"}=n,g=fs(()=>{let p=Lc(u,a);return p==null?null:{pathname:p,search:c,hash:d,state:h,key:m}},[a,u,c,d,h,m]);return g==null?null:Ot(lh.Provider,{value:l},Ot(Co.Provider,{children:t,value:{location:g,navigationType:i}}))}function Ah(r){let{children:e,location:t}=r;return Sh(po(e),t)}function po(r){let e=[];return xc.forEach(r,t=>{if(!Ao(t))return;if(t.type===un){e.push.apply(e,po(t.props.children));return}t.type!==Rc&&Fn(!1);let n={caseSensitive:t.props.caseSensitive,element:t.props.element,index:t.props.index,path:t.props.path};t.props.children&&(n.children=po(t.props.children)),e.push(n)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ch(r){let{basename:e,children:t,window:n}=r,i=gc();i.current==null&&(i.current=rh({window:n}));let s=i.current,[o,a]=Pi({action:s.action,location:s.location});return vs(()=>s.listen(a),[s]),Ot(Th,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:s})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Po="150",ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lh=0,fa=1,Ph=2,Dc=1,Ic=2,as=3,On=0,Ft=1,Dn=2,Nn=0,Di=1,pa=2,ma=3,ga=4,Rh=5,Ci=100,Dh=101,Ih=102,_a=103,va=104,Nh=200,zh=201,Fh=202,Oh=203,Nc=204,zc=205,Bh=206,Uh=207,kh=208,Gh=209,Vh=210,Wh=0,Hh=1,qh=2,mo=3,jh=4,Xh=5,Yh=6,$h=7,ar=0,Zh=1,Kh=2,En=0,Jh=1,Qh=2,ed=3,td=4,nd=5,Fc=300,Oi=301,Bi=302,go=303,_o=304,lr=306,vo=1e3,Yt=1001,xo=1002,yt=1003,xa=1004,yr=1005,Vt=1006,id=1007,ps=1008,ii=1009,sd=1010,rd=1011,Oc=1012,od=1013,ei=1014,ti=1015,ms=1016,ad=1017,ld=1018,Ii=1020,cd=1021,$t=1023,ud=1024,hd=1025,ni=1026,Ui=1027,dd=1028,fd=1029,pd=1030,md=1031,gd=1033,Mr=33776,br=33777,wr=33778,Sr=33779,ya=35840,Ma=35841,ba=35842,wa=35843,_d=36196,Sa=37492,Ea=37496,Ta=37808,Aa=37809,Ca=37810,La=37811,Pa=37812,Ra=37813,Da=37814,Ia=37815,Na=37816,za=37817,Fa=37818,Oa=37819,Ba=37820,Ua=37821,Er=36492,vd=36283,ka=36284,Ga=36285,Va=36286,si=3e3,He=3001,xd=3200,yd=3201,cr=0,Md=1,rn="srgb",gs="srgb-linear",Bc="display-p3",Tr=7680,bd=519,Wa=35044,Ha="300 es",yo=1035;class ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ar=Math.PI/180,Mo=180/Math.PI;function xs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[r&255]+ht[r>>8&255]+ht[r>>16&255]+ht[r>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toLowerCase()}function St(r,e,t){return Math.max(e,Math.min(t,r))}function wd(r,e){return(r%e+e)%e}function Cr(r,e,t){return(1-t)*r+t*e}function qa(r){return(r&r-1)===0&&r!==0}function Sd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ms(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mt{constructor(){Mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=n,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],c=n[4],d=n[7],h=n[2],m=n[5],g=n[8],p=i[0],f=i[3],_=i[6],v=i[1],y=i[4],b=i[7],M=i[2],S=i[5],C=i[8];return s[0]=o*p+a*v+l*M,s[3]=o*f+a*y+l*S,s[6]=o*_+a*b+l*C,s[1]=u*p+c*v+d*M,s[4]=u*f+c*y+d*S,s[7]=u*_+c*b+d*C,s[2]=h*p+m*v+g*M,s[5]=h*f+m*y+g*S,s[8]=h*_+m*b+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-n*s*c+n*a*l+i*s*u-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,m=u*s-o*l,g=t*d+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=d*p,e[1]=(i*u-c*n)*p,e[2]=(a*n-i*o)*p,e[3]=h*p,e[4]=(c*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*l-u*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-i*u,i*l,-i*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lr.makeScale(e,t)),this}rotate(e){return this.premultiply(Lr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lr=new Mt;function Uc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function tr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class Bn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],u=n[i+1],c=n[i+2],d=n[i+3];const h=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(d!==p||l!==h||u!==m||c!==g){let f=1-a;const _=l*h+u*m+c*g+d*p,v=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const M=Math.sqrt(y),S=Math.atan2(M,_*v);f=Math.sin(f*S)/M,a=Math.sin(a*S)/M}const b=a*v;if(l=l*f+h*b,u=u*f+m*b,c=c*f+g*b,d=d*f+p*b,f===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=M,u*=M,c*=M,d*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],u=n[i+2],c=n[i+3],d=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+c*d+l*m-u*h,e[t+1]=l*g+c*h+u*d-a*m,e[t+2]=u*g+c*m+a*h-l*d,e[t+3]=c*g-a*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),c=a(i/2),d=a(s/2),h=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*m*g,this._y=u*m*d-h*c*g,this._z=u*c*g+h*m*d,this._w=u*c*d-h*m*g;break;case"YXZ":this._x=h*c*d+u*m*g,this._y=u*m*d-h*c*g,this._z=u*c*g-h*m*d,this._w=u*c*d+h*m*g;break;case"ZXY":this._x=h*c*d-u*m*g,this._y=u*m*d+h*c*g,this._z=u*c*g+h*m*d,this._w=u*c*d-h*m*g;break;case"ZYX":this._x=h*c*d-u*m*g,this._y=u*m*d+h*c*g,this._z=u*c*g-h*m*d,this._w=u*c*d+h*m*g;break;case"YZX":this._x=h*c*d+u*m*g,this._y=u*m*d+h*c*g,this._z=u*c*g-h*m*d,this._w=u*c*d-h*m*g;break;case"XZY":this._x=h*c*d-u*m*g,this._y=u*m*d-h*c*g,this._z=u*c*g+h*m*d,this._w=u*c*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],h=n+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(c-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-u)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+o*a+i*u-s*l,this._y=i*c+o*l+s*a-n*u,this._z=s*c+o*u+n*l-i*a,this._w=o*c-n*a-i*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ja.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ja.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*i-a*n,c=l*n+a*t-s*i,d=l*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=u*l+h*-s+c*-a-d*-o,this.y=c*l+h*-o+d*-s-u*-a,this.z=d*l+h*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pr.copy(this).projectOnVector(e),this.sub(Pr)}reflect(e){return this.sub(Pr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pr=new W,ja=new Bn;function Ni(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ed=new Mt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Td=new Mt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),In=new W;function Ad(r){return r.convertSRGBToLinear(),In.set(r.r,r.g,r.b).applyMatrix3(Td),r.setRGB(In.x,In.y,In.z)}function Cd(r){return In.set(r.r,r.g,r.b).applyMatrix3(Ed),r.setRGB(In.x,In.y,In.z).convertLinearToSRGB()}const Ld={[gs]:r=>r,[rn]:r=>r.convertSRGBToLinear(),[Bc]:Ad},Pd={[gs]:r=>r,[rn]:r=>r.convertLinearToSRGB(),[Bc]:Cd},vt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return gs},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ld[e],i=Pd[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let di;class kc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{di===void 0&&(di=tr("canvas")),di.width=e.width,di.height=e.height;const n=di.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ni(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ni(t[n]/255)*255):t[n]=Ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Gc{constructor(e=null){this.isSource=!0,this.uuid=xs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Dr(i[o].image)):s.push(Dr(i[o]))}else s=Dr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Dr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?kc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rd=0;class Et extends ai{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=Yt,i=Yt,s=Vt,o=ps,a=$t,l=ii,u=Et.DEFAULT_ANISOTROPY,c=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=xs(),this.name="",this.source=new Gc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vo:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vo:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Fc;Et.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,i=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],m=l[5],g=l[9],p=l[2],f=l[6],_=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+p)<.1&&Math.abs(g+f)<.1&&Math.abs(u+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,b=(m+1)/2,M=(_+1)/2,S=(c+h)/4,C=(d+p)/4,w=(g+f)/4;return y>b&&y>M?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=S/n,s=C/n):b>M?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=S/i,s=w/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=C/s,i=w/s),this.set(n,i,s,t),this}let v=Math.sqrt((f-g)*(f-g)+(d-p)*(d-p)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(f-g)/v,this.y=(d-p)/v,this.z=(h-c)/v,this.w=Math.acos((u+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ri extends ai{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Et(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vc extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dd extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],h=e[l+2];c<t&&(t=c),d<n&&(n=d),h<i&&(i=h),c>s&&(s=c),d>o&&(o=d),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),h=e.getZ(l);c<t&&(t=c),d<n&&(n=d),h<i&&(i=h),c>s&&(s=c),d>o&&(o=d),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Hn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Hn)}else n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox),Ir.applyMatrix4(e.matrixWorld),this.union(Ir);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),bs.subVectors(this.max,ji),fi.subVectors(e.a,ji),pi.subVectors(e.b,ji),mi.subVectors(e.c,ji),Tn.subVectors(pi,fi),An.subVectors(mi,pi),qn.subVectors(fi,mi);let t=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-qn.z,qn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,qn.z,0,-qn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-qn.y,qn.x,0];return!Nr(t,fi,pi,mi,bs)||(t=[1,0,0,0,1,0,0,0,1],!Nr(t,fi,pi,mi,bs))?!1:(ws.crossVectors(Tn,An),t=[ws.x,ws.y,ws.z],Nr(t,fi,pi,mi,bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new W,new W,new W,new W,new W,new W,new W,new W],Hn=new W,Ir=new ys,fi=new W,pi=new W,mi=new W,Tn=new W,An=new W,qn=new W,ji=new W,bs=new W,ws=new W,jn=new W;function Nr(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){jn.fromArray(r,s);const a=i.x*Math.abs(jn.x)+i.y*Math.abs(jn.y)+i.z*Math.abs(jn.z),l=e.dot(jn),u=t.dot(jn),c=n.dot(jn);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Id=new ys,Xi=new W,zr=new W;class Ro{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Id.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);const t=Xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(zr)),this.expandByPoint(Xi.copy(e.center).sub(zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new W,Fr=new W,Ss=new W,Cn=new W,Or=new W,Es=new W,Br=new W;class Nd{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fr.copy(e).add(t).multiplyScalar(.5),Ss.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(Fr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ss),a=Cn.dot(this.direction),l=-Cn.dot(Ss),u=Cn.lengthSq(),c=Math.abs(1-o*o);let d,h,m,g;if(c>0)if(d=o*l-a,h=o*a-l,g=s*c,d>=0)if(h>=-g)if(h<=g){const p=1/c;d*=p,h*=p,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+u):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Fr).addScaledVector(Ss,h),m}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),i=fn.dot(fn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(n=(e.min.x-h.x)*u,i=(e.max.x-h.x)*u):(n=(e.max.x-h.x)*u,i=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,i,s){Or.subVectors(t,e),Es.subVectors(n,e),Br.crossVectors(Or,Es);let o=this.direction.dot(Br),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cn.subVectors(this.origin,e);const l=a*this.direction.dot(Es.crossVectors(Cn,Es));if(l<0)return null;const u=a*this.direction.dot(Or.cross(Cn));if(u<0||l+u>o)return null;const c=-a*Cn.dot(Br);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,u,c,d,h,m,g,p,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=u,_[6]=c,_[10]=d,_[14]=h,_[3]=m,_[7]=g,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gi.setFromMatrixColumn(e,0).length(),s=1/gi.setFromMatrixColumn(e,1).length(),o=1/gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),u=Math.sin(i),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,m=o*d,g=a*c,p=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=m+g*u,t[5]=h-p*u,t[9]=-a*l,t[2]=p-h*u,t[6]=g+m*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,m=l*d,g=u*c,p=u*d;t[0]=h+p*a,t[4]=g*a-m,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=m*a-g,t[6]=p+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,m=l*d,g=u*c,p=u*d;t[0]=h-p*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*c,t[9]=p-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,m=o*d,g=a*c,p=a*d;t[0]=l*c,t[4]=g*u-m,t[8]=h*u+p,t[1]=l*d,t[5]=p*u+h,t[9]=m*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,g=a*l,p=a*u;t[0]=l*c,t[4]=p-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*d+g,t[10]=h-p*d}else if(e.order==="XZY"){const h=o*l,m=o*u,g=a*l,p=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=h*d+p,t[5]=o*c,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*c,t[10]=p*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zd,e,Fd)}lookAt(e,t,n){const i=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),Ln.crossVectors(n,Pt),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),Ln.crossVectors(n,Pt)),Ln.normalize(),Ts.crossVectors(Pt,Ln),i[0]=Ln.x,i[4]=Ts.x,i[8]=Pt.x,i[1]=Ln.y,i[5]=Ts.y,i[9]=Pt.y,i[2]=Ln.z,i[6]=Ts.z,i[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],c=n[1],d=n[5],h=n[9],m=n[13],g=n[2],p=n[6],f=n[10],_=n[14],v=n[3],y=n[7],b=n[11],M=n[15],S=i[0],C=i[4],w=i[8],T=i[12],I=i[1],V=i[5],q=i[9],P=i[13],R=i[2],N=i[6],F=i[10],K=i[14],B=i[3],j=i[7],X=i[11],ae=i[15];return s[0]=o*S+a*I+l*R+u*B,s[4]=o*C+a*V+l*N+u*j,s[8]=o*w+a*q+l*F+u*X,s[12]=o*T+a*P+l*K+u*ae,s[1]=c*S+d*I+h*R+m*B,s[5]=c*C+d*V+h*N+m*j,s[9]=c*w+d*q+h*F+m*X,s[13]=c*T+d*P+h*K+m*ae,s[2]=g*S+p*I+f*R+_*B,s[6]=g*C+p*V+f*N+_*j,s[10]=g*w+p*q+f*F+_*X,s[14]=g*T+p*P+f*K+_*ae,s[3]=v*S+y*I+b*R+M*B,s[7]=v*C+y*V+b*N+M*j,s[11]=v*w+y*q+b*F+M*X,s[15]=v*T+y*P+b*K+M*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],m=e[14],g=e[3],p=e[7],f=e[11],_=e[15];return g*(+s*l*d-i*u*d-s*a*h+n*u*h+i*a*m-n*l*m)+p*(+t*l*m-t*u*h+s*o*h-i*o*m+i*u*c-s*l*c)+f*(+t*u*d-t*a*m-s*o*d+n*o*m+s*a*c-n*u*c)+_*(-i*a*c-t*l*d+t*a*h+i*o*d-n*o*h+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],m=e[11],g=e[12],p=e[13],f=e[14],_=e[15],v=d*f*u-p*h*u+p*l*m-a*f*m-d*l*_+a*h*_,y=g*h*u-c*f*u-g*l*m+o*f*m+c*l*_-o*h*_,b=c*p*u-g*d*u+g*a*m-o*p*m-c*a*_+o*d*_,M=g*d*l-c*p*l-g*a*h+o*p*h+c*a*f-o*d*f,S=t*v+n*y+i*b+s*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/S;return e[0]=v*C,e[1]=(p*h*s-d*f*s-p*i*m+n*f*m+d*i*_-n*h*_)*C,e[2]=(a*f*s-p*l*s+p*i*u-n*f*u-a*i*_+n*l*_)*C,e[3]=(d*l*s-a*h*s-d*i*u+n*h*u+a*i*m-n*l*m)*C,e[4]=y*C,e[5]=(c*f*s-g*h*s+g*i*m-t*f*m-c*i*_+t*h*_)*C,e[6]=(g*l*s-o*f*s-g*i*u+t*f*u+o*i*_-t*l*_)*C,e[7]=(o*h*s-c*l*s+c*i*u-t*h*u-o*i*m+t*l*m)*C,e[8]=b*C,e[9]=(g*d*s-c*p*s-g*n*m+t*p*m+c*n*_-t*d*_)*C,e[10]=(o*p*s-g*a*s+g*n*u-t*p*u-o*n*_+t*a*_)*C,e[11]=(c*a*s-o*d*s-c*n*u+t*d*u+o*n*m-t*a*m)*C,e[12]=M*C,e[13]=(c*p*i-g*d*i+g*n*h-t*p*h-c*n*f+t*d*f)*C,e[14]=(g*a*i-o*p*i-g*n*l+t*p*l+o*n*f-t*a*f)*C,e[15]=(o*d*i-c*a*i+c*n*l-t*d*l-o*n*h+t*a*h)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+n,u*a-i*l,u*l+i*a,0,u*a+i*l,c*a+n,c*l-i*o,0,u*l-i*a,c*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,h=s*u,m=s*c,g=s*d,p=o*c,f=o*d,_=a*d,v=l*u,y=l*c,b=l*d,M=n.x,S=n.y,C=n.z;return i[0]=(1-(p+_))*M,i[1]=(m+b)*M,i[2]=(g-y)*M,i[3]=0,i[4]=(m-b)*S,i[5]=(1-(h+_))*S,i[6]=(f+v)*S,i[7]=0,i[8]=(g+y)*C,i[9]=(f-v)*C,i[10]=(1-(h+p))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=gi.set(i[0],i[1],i[2]).length();const o=gi.set(i[4],i[5],i[6]).length(),a=gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Wt.copy(this);const u=1/s,c=1/o,d=1/a;return Wt.elements[0]*=u,Wt.elements[1]*=u,Wt.elements[2]*=u,Wt.elements[4]*=c,Wt.elements[5]*=c,Wt.elements[6]*=c,Wt.elements[8]*=d,Wt.elements[9]*=d,Wt.elements[10]*=d,t.setFromRotationMatrix(Wt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(n-i),c=(t+e)/(t-e),d=(n+i)/(n-i),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),u=1/(n-i),c=1/(o-s),d=(t+e)*l,h=(n+i)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gi=new W,Wt=new tt,zd=new W(0,0,0),Fd=new W(1,1,1),Ln=new W,Ts=new W,Pt=new W,Xa=new tt,Ya=new Bn;class ur{constructor(e=0,t=0,n=0,i=ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],u=i[5],c=i[9],d=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ya.setFromEuler(this),this.setFromQuaternion(Ya,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ur.DEFAULT_ORDER="XYZ";class Wc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Od=0;const $a=new W,_i=new Bn,pn=new tt,As=new W,Yi=new W,Bd=new W,Ud=new Bn,Za=new W(1,0,0),Ka=new W(0,1,0),Ja=new W(0,0,1),kd={type:"added"},Qa={type:"removed"};class ft extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new W,t=new ur,n=new Bn,i=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new Mt}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(Za,e)}rotateY(e){return this.rotateOnAxis(Ka,e)}rotateZ(e){return this.rotateOnAxis(Ja,e)}translateOnAxis(e,t){return $a.copy(e).applyQuaternion(this.quaternion),this.position.add($a.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Za,e)}translateY(e){return this.translateOnAxis(Ka,e)}translateZ(e){return this.translateOnAxis(Ja,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?As.copy(e):As.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Yi,As,this.up):pn.lookAt(As,Yi,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),_i.setFromRotationMatrix(pn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Qa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,Bd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,Ud,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new W(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ht=new W,mn=new W,Ur=new W,gn=new W,vi=new W,xi=new W,el=new W,kr=new W,Gr=new W,Vr=new W;class bn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ht.subVectors(e,t),i.cross(Ht);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ht.subVectors(i,t),mn.subVectors(n,t),Ur.subVectors(e,t);const o=Ht.dot(Ht),a=Ht.dot(mn),l=Ht.dot(Ur),u=mn.dot(mn),c=mn.dot(Ur),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,m=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gn),gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,gn),l.set(0,0),l.addScaledVector(s,gn.x),l.addScaledVector(o,gn.y),l.addScaledVector(a,gn.z),l}static isFrontFacing(e,t,n,i){return Ht.subVectors(n,t),mn.subVectors(e,t),Ht.cross(mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Ht.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return bn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;vi.subVectors(i,n),xi.subVectors(s,n),kr.subVectors(e,n);const l=vi.dot(kr),u=xi.dot(kr);if(l<=0&&u<=0)return t.copy(n);Gr.subVectors(e,i);const c=vi.dot(Gr),d=xi.dot(Gr);if(c>=0&&d<=c)return t.copy(i);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(n).addScaledVector(vi,o);Vr.subVectors(e,s);const m=vi.dot(Vr),g=xi.dot(Vr);if(g>=0&&m<=g)return t.copy(s);const p=m*u-l*g;if(p<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(n).addScaledVector(xi,a);const f=c*g-m*d;if(f<=0&&d-c>=0&&m-g>=0)return el.subVectors(s,i),a=(d-c)/(d-c+(m-g)),t.copy(i).addScaledVector(el,a);const _=1/(f+p+h);return o=p*_,a=h*_,t.copy(n).addScaledVector(vi,o).addScaledVector(xi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Gd=0;class li extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=Di,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Nc,this.blendDst=zc,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qt={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Wr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=vt.workingColorSpace){if(e=wd(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Wr(o,s,e+1/3),this.g=Wr(o,s,e),this.b=Wr(o,s,e-1/3)}return vt.toWorkingColorSpace(this,i),this}setStyle(e,t=rn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,vt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,vt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,u,c,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,vt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,vt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const n=Hc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return vt.fromWorkingColorSpace(dt.copy(this),e),St(dt.r*255,0,255)<<16^St(dt.g*255,0,255)<<8^St(dt.b*255,0,255)<<0}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(dt.copy(this),t);const n=dt.r,i=dt.g,s=dt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(dt.copy(this),t),e.r=dt.r,e.g=dt.g,e.b=dt.b,e}getStyle(e=rn){vt.fromWorkingColorSpace(dt.copy(this),e);const t=dt.r,n=dt.g,i=dt.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(qt),qt.h+=e,qt.s+=t,qt.l+=n,this.setHSL(qt.h,qt.s,qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qt),e.getHSL(Cs);const n=Cr(qt.h,Cs.h,t),i=Cr(qt.s,Cs.s,t),s=Cr(qt.l,Cs.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dt=new Ue;Ue.NAMES=Hc;class Do extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ze=new W,Ls=new Te;class ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ls.fromBufferAttribute(this,t),Ls.applyMatrix3(e),this.setXY(t,Ls.x,Ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix3(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix4(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyNormalMatrix(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.transformDirection(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ms(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ms(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ms(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ms(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class qc extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jc extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class cn extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Vd=0;const kt=new tt,Hr=new ft,yi=new W,Rt=new ys,$i=new ys,ct=new W;class kn extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uc(e)?jc:qc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Mt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return Hr.lookAt(e),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new cn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];$i.setFromBufferAttribute(a),this.morphTargetsRelative?(ct.addVectors(Rt.min,$i.min),Rt.expandByPoint(ct),ct.addVectors(Rt.max,$i.max),Rt.expandByPoint(ct)):(Rt.expandByPoint($i.min),Rt.expandByPoint($i.max))}Rt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ct.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)ct.fromBufferAttribute(a,u),l&&(yi.fromBufferAttribute(e,u),ct.add(yi)),i=Math.max(i,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let I=0;I<a;I++)u[I]=new W,c[I]=new W;const d=new W,h=new W,m=new W,g=new Te,p=new Te,f=new Te,_=new W,v=new W;function y(I,V,q){d.fromArray(i,I*3),h.fromArray(i,V*3),m.fromArray(i,q*3),g.fromArray(o,I*2),p.fromArray(o,V*2),f.fromArray(o,q*2),h.sub(d),m.sub(d),p.sub(g),f.sub(g);const P=1/(p.x*f.y-f.x*p.y);!isFinite(P)||(_.copy(h).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(P),v.copy(m).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(P),u[I].add(_),u[V].add(_),u[q].add(_),c[I].add(v),c[V].add(v),c[q].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let I=0,V=b.length;I<V;++I){const q=b[I],P=q.start,R=q.count;for(let N=P,F=P+R;N<F;N+=3)y(n[N+0],n[N+1],n[N+2])}const M=new W,S=new W,C=new W,w=new W;function T(I){C.fromArray(s,I*3),w.copy(C);const V=u[I];M.copy(V),M.sub(C.multiplyScalar(C.dot(V))).normalize(),S.crossVectors(w,V);const P=S.dot(c[I])<0?-1:1;l[I*4]=M.x,l[I*4+1]=M.y,l[I*4+2]=M.z,l[I*4+3]=P}for(let I=0,V=b.length;I<V;++I){const q=b[I],P=q.start,R=q.count;for(let N=P,F=P+R;N<F;N+=3)T(n[N+0]),T(n[N+1]),T(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new W,s=new W,o=new W,a=new W,l=new W,u=new W,c=new W,d=new W;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),p=e.getX(h+1),f=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),c.subVectors(o,s),d.subVectors(i,s),c.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),u.fromBufferAttribute(n,f),a.add(c),l.add(c),u.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(f,u.x,u.y,u.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),d.subVectors(i,s),c.cross(d),n.setXYZ(h+0,c.x,c.y,c.z),n.setXYZ(h+1,c.x,c.y,c.z),n.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let m=0,g=0;for(let p=0,f=l.length;p<f;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*c;for(let _=0;_<c;_++)h[g++]=u[m++]}return new ln(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],u=e(l,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];c.push(m.toJSON(e.data))}c.length>0&&(i[l]=c,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const c=i[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,m=d.length;h<m;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tl=new tt,Qt=new Nd,Ps=new Ro,nl=new W,Zi=new W,Ki=new W,Ji=new W,qr=new W,Rs=new W,Ds=new Te,Is=new Te,Ns=new Te,jr=new W,zs=new W;class zt extends ft{constructor(e=new kn,t=new Do){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Rs.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(qr.fromBufferAttribute(d,e),o?Rs.addScaledVector(qr,c):Rs.addScaledVector(qr.sub(t),c))}t.add(Rs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(s),Qt.copy(e.ray).recast(e.near),Ps.containsPoint(Qt.origin)===!1&&(Qt.intersectSphere(Ps,nl)===null||Qt.origin.distanceToSquared(nl)>(e.far-e.near)**2))||(tl.copy(s).invert(),Qt.copy(e.ray).applyMatrix4(tl),n.boundingBox!==null&&Qt.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,u=n.attributes.uv,c=n.attributes.uv2,d=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const p=d[m],f=i[p.materialIndex],_=Math.max(p.start,h.start),v=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let y=_,b=v;y<b;y+=3){const M=a.getX(y),S=a.getX(y+1),C=a.getX(y+2);o=Fs(this,f,e,Qt,u,c,M,S,C),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let p=m,f=g;p<f;p+=3){const _=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);o=Fs(this,i,e,Qt,u,c,_,v,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const p=d[m],f=i[p.materialIndex],_=Math.max(p.start,h.start),v=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let y=_,b=v;y<b;y+=3){const M=y,S=y+1,C=y+2;o=Fs(this,f,e,Qt,u,c,M,S,C),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let p=m,f=g;p<f;p+=3){const _=p,v=p+1,y=p+2;o=Fs(this,i,e,Qt,u,c,_,v,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Wd(r,e,t,n,i,s,o,a){let l;if(e.side===Ft?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===On,a),l===null)return null;zs.copy(a),zs.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(zs);return u<t.near||u>t.far?null:{distance:u,point:zs.clone(),object:r}}function Fs(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,Zi),r.getVertexPosition(a,Ki),r.getVertexPosition(l,Ji);const u=Wd(r,e,t,n,Zi,Ki,Ji,jr);if(u){i&&(Ds.fromBufferAttribute(i,o),Is.fromBufferAttribute(i,a),Ns.fromBufferAttribute(i,l),u.uv=bn.getUV(jr,Zi,Ki,Ji,Ds,Is,Ns,new Te)),s&&(Ds.fromBufferAttribute(s,o),Is.fromBufferAttribute(s,a),Ns.fromBufferAttribute(s,l),u.uv2=bn.getUV(jr,Zi,Ki,Ji,Ds,Is,Ns,new Te));const c={a:o,b:a,c:l,normal:new W,materialIndex:0};bn.getNormal(Zi,Ki,Ji,c.normal),u.face=c}return u}class Un extends kn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new cn(u,3)),this.setAttribute("normal",new cn(c,3)),this.setAttribute("uv",new cn(d,2));function g(p,f,_,v,y,b,M,S,C,w,T){const I=b/C,V=M/w,q=b/2,P=M/2,R=S/2,N=C+1,F=w+1;let K=0,B=0;const j=new W;for(let X=0;X<F;X++){const ae=X*V-P;for(let z=0;z<N;z++){const Q=z*I-q;j[p]=Q*v,j[f]=ae*y,j[_]=R,u.push(j.x,j.y,j.z),j[p]=0,j[f]=0,j[_]=S>0?1:-1,c.push(j.x,j.y,j.z),d.push(z/C),d.push(1-X/w),K+=1}}for(let X=0;X<w;X++)for(let ae=0;ae<C;ae++){const z=h+ae+N*X,Q=h+ae+N*(X+1),ne=h+(ae+1)+N*(X+1),G=h+(ae+1)+N*X;l.push(z,Q,G),l.push(Q,ne,G),B+=6}a.addGroup(m,B,T),m+=B,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function xt(r){const e={};for(let t=0;t<r.length;t++){const n=ki(r[t]);for(const i in n)e[i]=n[i]}return e}function Hd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Xc(r){return r.getRenderTarget()===null&&r.outputEncoding===He?rn:gs}const qd={clone:ki,merge:xt};var jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=Xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=Hd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yc extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends Yc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/u,i*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mi=-90,bi=1;class Yd extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Nt(Mi,bi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Nt(Mi,bi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Nt(Mi,bi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Nt(Mi,bi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Nt(Mi,bi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new Nt(Mi,bi,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=En,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class $c extends Et{constructor(e,t,n,i,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Oi,super(e,t,n,i,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $d extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $c(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Un(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:Nn});s.uniforms.tEquirect.value=t;const o=new zt(i,s),a=t.minFilter;return t.minFilter===ps&&(t.minFilter=Vt),new Yd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Xr=new W,Zd=new W,Kd=new Mt;class $n{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Xr.subVectors(n,t).cross(Zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kd.getNormalMatrix(e),i=this.coplanarPoint(Xr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new Ro,Os=new W;class Io{constructor(e=new $n,t=new $n,n=new $n,i=new $n,s=new $n,o=new $n){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],u=n[5],c=n[6],d=n[7],h=n[8],m=n[9],g=n[10],p=n[11],f=n[12],_=n[13],v=n[14],y=n[15];return t[0].setComponents(a-i,d-l,p-h,y-f).normalize(),t[1].setComponents(a+i,d+l,p+h,y+f).normalize(),t[2].setComponents(a+s,d+u,p+m,y+_).normalize(),t[3].setComponents(a-s,d-u,p-m,y-_).normalize(),t[4].setComponents(a-o,d-c,p-g,y-v).normalize(),t[5].setComponents(a+o,d+c,p+g,y+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Os.x=i.normal.x>0?e.max.x:e.min.x,Os.y=i.normal.y>0?e.max.y:e.min.y,Os.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zc(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Jd(r,e){const t=e.isWebGL2,n=new WeakMap;function i(u,c){const d=u.array,h=u.usage,m=r.createBuffer();r.bindBuffer(c,m),r.bufferData(c,d,h),u.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const h=c.array,m=c.updateRange;r.bindBuffer(d,u),m.count===-1?r.bufferSubData(d,0,h):(t?r.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):r.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);c&&(r.deleteBuffer(c.buffer),n.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=n.get(u);(!h||h.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d===void 0?n.set(u,i(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class hr extends kn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),u=a+1,c=l+1,d=e/a,h=t/l,m=[],g=[],p=[],f=[];for(let _=0;_<c;_++){const v=_*h-o;for(let y=0;y<u;y++){const b=y*d-s;g.push(b,-v,0),p.push(0,0,1),f.push(y/a),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<a;v++){const y=v+u*_,b=v+u*(_+1),M=v+1+u*(_+1),S=v+1+u*_;m.push(y,b,S),m.push(b,M,S)}this.setIndex(m),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(p,3)),this.setAttribute("uv",new cn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of="vec3 transformed = vec3( position );",af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,cf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
float w0( float a ) {
	return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
}
float w1( float a ) {
	return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
}
float w2( float a ){
    return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
}
float w3( float a ) {
	return ( 1.0 / 6.0 ) * ( a * a * a );
}
float g0( float a ) {
	return w0( a ) + w1( a );
}
float g1( float a ) {
	return w2( a ) + w3( a );
}
float h0( float a ) {
	return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
}
float h1( float a ) {
    return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
}
vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
	uv = uv * texelSize.zw + 0.5;
	vec2 iuv = floor( uv );
    vec2 fuv = fract( uv );
    float g0x = g0( fuv.x );
    float g1x = g1( fuv.x );
    float h0x = h0( fuv.x );
    float h1x = h1( fuv.x );
    float h0y = h0( fuv.y );
    float h1y = h1( fuv.y );
    vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
    vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
    vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
    vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
    
    vec2 lodFudge = pow( 1.95, lod ) / fullSize;
	return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
		   g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
}
vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
	vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
	vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
	vec2 fLodSizeInv = 1.0 / fLodSize;
	vec2 cLodSizeInv = 1.0 / cLodSize;
	vec2 fullSize = vec2( textureSize( sampler, 0 ) );
	vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
	vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
	return mix( fSample, cSample, fract( lod ) );
}`,yf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,If=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Of=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,$f=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Qf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,pp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Np=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Hp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,qp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,jp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Xp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Yp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,$p=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Zp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,om=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,am=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,um=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_m=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ae={alphamap_fragment:Qd,alphamap_pars_fragment:ef,alphatest_fragment:tf,alphatest_pars_fragment:nf,aomap_fragment:sf,aomap_pars_fragment:rf,begin_vertex:of,beginnormal_vertex:af,bsdfs:lf,iridescence_fragment:cf,bumpmap_pars_fragment:uf,clipping_planes_fragment:hf,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:ff,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:gf,color_pars_vertex:_f,color_vertex:vf,common:xf,cube_uv_reflection_fragment:yf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:bf,displacementmap_vertex:wf,emissivemap_fragment:Sf,emissivemap_pars_fragment:Ef,encodings_fragment:Tf,encodings_pars_fragment:Af,envmap_fragment:Cf,envmap_common_pars_fragment:Lf,envmap_pars_fragment:Pf,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:Wf,envmap_vertex:Df,fog_vertex:If,fog_pars_vertex:Nf,fog_fragment:zf,fog_pars_fragment:Ff,gradientmap_pars_fragment:Of,lightmap_fragment:Bf,lightmap_pars_fragment:Uf,lights_lambert_fragment:kf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Vf,lights_toon_fragment:Hf,lights_toon_pars_fragment:qf,lights_phong_fragment:jf,lights_phong_pars_fragment:Xf,lights_physical_fragment:Yf,lights_physical_pars_fragment:$f,lights_fragment_begin:Zf,lights_fragment_maps:Kf,lights_fragment_end:Jf,logdepthbuf_fragment:Qf,logdepthbuf_pars_fragment:ep,logdepthbuf_pars_vertex:tp,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:sp,map_particle_fragment:rp,map_particle_pars_fragment:op,metalnessmap_fragment:ap,metalnessmap_pars_fragment:lp,morphcolor_vertex:cp,morphnormal_vertex:up,morphtarget_pars_vertex:hp,morphtarget_vertex:dp,normal_fragment_begin:fp,normal_fragment_maps:pp,normal_pars_fragment:mp,normal_pars_vertex:gp,normal_vertex:_p,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:yp,clearcoat_pars_fragment:Mp,iridescence_pars_fragment:bp,output_fragment:wp,packing:Sp,premultiplied_alpha_fragment:Ep,project_vertex:Tp,dithering_fragment:Ap,dithering_pars_fragment:Cp,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Rp,shadowmap_pars_vertex:Dp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Np,skinbase_vertex:zp,skinning_pars_vertex:Fp,skinning_vertex:Op,skinnormal_vertex:Bp,specularmap_fragment:Up,specularmap_pars_fragment:kp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Vp,transmission_fragment:Wp,transmission_pars_fragment:Hp,uv_pars_fragment:qp,uv_pars_vertex:jp,uv_vertex:Xp,uv2_pars_fragment:Yp,uv2_pars_vertex:$p,uv2_vertex:Zp,worldpos_vertex:Kp,background_vert:Jp,background_frag:Qp,backgroundCube_vert:em,backgroundCube_frag:tm,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distanceRGBA_vert:om,distanceRGBA_frag:am,equirect_vert:lm,equirect_frag:cm,linedashed_vert:um,linedashed_frag:hm,meshbasic_vert:dm,meshbasic_frag:fm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:_m,meshnormal_vert:vm,meshnormal_frag:xm,meshphong_vert:ym,meshphong_frag:Mm,meshphysical_vert:bm,meshphysical_frag:wm,meshtoon_vert:Sm,meshtoon_frag:Em,points_vert:Tm,points_frag:Am,shadow_vert:Cm,shadow_frag:Lm,sprite_vert:Pm,sprite_frag:Rm},re={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Mt},uv2Transform:{value:new Mt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Mt}}},on={basic:{uniforms:xt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:xt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:xt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:xt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:xt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:xt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:xt([re.points,re.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:xt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:xt([re.common,re.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:xt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:xt([re.sprite,re.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:xt([re.common,re.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:xt([re.lights,re.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};on.physical={uniforms:xt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Te(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const Bs={r:0,b:0,g:0};function Dm(r,e,t,n,i,s,o){const a=new Ue(0);let l=s===!0?0:1,u,c,d=null,h=0,m=null;function g(f,_){let v=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y));const b=r.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(y=null),y===null?p(a,l):y&&y.isColor&&(p(y,1),v=!0),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===lr)?(c===void 0&&(c=new zt(new Un(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:ki(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=y.encoding!==He,(d!==y||h!==y.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,m=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new zt(new hr(2,2),new oi({name:"BackgroundMaterial",uniforms:ki(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=y.encoding!==He,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,m=r.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null))}function p(f,_){f.getRGB(Bs,Xc(r)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(f,_=1){a.set(f),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,p(a,l)},render:g}}function Im(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let u=l,c=!1;function d(R,N,F,K,B){let j=!1;if(o){const X=p(K,F,N);u!==X&&(u=X,m(u.object)),j=_(R,K,F,B),j&&v(R,K,F,B)}else{const X=N.wireframe===!0;(u.geometry!==K.id||u.program!==F.id||u.wireframe!==X)&&(u.geometry=K.id,u.program=F.id,u.wireframe=X,j=!0)}B!==null&&t.update(B,34963),(j||c)&&(c=!1,w(R,N,F,K),B!==null&&r.bindBuffer(34963,t.get(B).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,N,F){const K=F.wireframe===!0;let B=a[R.id];B===void 0&&(B={},a[R.id]=B);let j=B[N.id];j===void 0&&(j={},B[N.id]=j);let X=j[K];return X===void 0&&(X=f(h()),j[K]=X),X}function f(R){const N=[],F=[],K=[];for(let B=0;B<i;B++)N[B]=0,F[B]=0,K[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:K,object:R,attributes:{},index:null}}function _(R,N,F,K){const B=u.attributes,j=N.attributes;let X=0;const ae=F.getAttributes();for(const z in ae)if(ae[z].location>=0){const ne=B[z];let G=j[z];if(G===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(G=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(G=R.instanceColor)),ne===void 0||ne.attribute!==G||G&&ne.data!==G.data)return!0;X++}return u.attributesNum!==X||u.index!==K}function v(R,N,F,K){const B={},j=N.attributes;let X=0;const ae=F.getAttributes();for(const z in ae)if(ae[z].location>=0){let ne=j[z];ne===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor));const G={};G.attribute=ne,ne&&ne.data&&(G.data=ne.data),B[z]=G,X++}u.attributes=B,u.attributesNum=X,u.index=K}function y(){const R=u.newAttributes;for(let N=0,F=R.length;N<F;N++)R[N]=0}function b(R){M(R,0)}function M(R,N){const F=u.newAttributes,K=u.enabledAttributes,B=u.attributeDivisors;F[R]=1,K[R]===0&&(r.enableVertexAttribArray(R),K[R]=1),B[R]!==N&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,N),B[R]=N)}function S(){const R=u.newAttributes,N=u.enabledAttributes;for(let F=0,K=N.length;F<K;F++)N[F]!==R[F]&&(r.disableVertexAttribArray(F),N[F]=0)}function C(R,N,F,K,B,j){n.isWebGL2===!0&&(F===5124||F===5125)?r.vertexAttribIPointer(R,N,F,B,j):r.vertexAttribPointer(R,N,F,K,B,j)}function w(R,N,F,K){if(n.isWebGL2===!1&&(R.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const B=K.attributes,j=F.getAttributes(),X=N.defaultAttributeValues;for(const ae in j){const z=j[ae];if(z.location>=0){let Q=B[ae];if(Q===void 0&&(ae==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),ae==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),Q!==void 0){const ne=Q.normalized,G=Q.itemSize,ue=t.get(Q);if(ue===void 0)continue;const te=ue.buffer,me=ue.type,pe=ue.bytesPerElement;if(Q.isInterleavedBufferAttribute){const we=Q.data,Ee=we.stride,Ce=Q.offset;if(we.isInstancedInterleavedBuffer){for(let ze=0;ze<z.locationSize;ze++)M(z.location+ze,we.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let ze=0;ze<z.locationSize;ze++)b(z.location+ze);r.bindBuffer(34962,te);for(let ze=0;ze<z.locationSize;ze++)C(z.location+ze,G/z.locationSize,me,ne,Ee*pe,(Ce+G/z.locationSize*ze)*pe)}else{if(Q.isInstancedBufferAttribute){for(let we=0;we<z.locationSize;we++)M(z.location+we,Q.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let we=0;we<z.locationSize;we++)b(z.location+we);r.bindBuffer(34962,te);for(let we=0;we<z.locationSize;we++)C(z.location+we,G/z.locationSize,me,ne,G*pe,G/z.locationSize*we*pe)}}else if(X!==void 0){const ne=X[ae];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(z.location,ne);break;case 3:r.vertexAttrib3fv(z.location,ne);break;case 4:r.vertexAttrib4fv(z.location,ne);break;default:r.vertexAttrib1fv(z.location,ne)}}}}S()}function T(){q();for(const R in a){const N=a[R];for(const F in N){const K=N[F];for(const B in K)g(K[B].object),delete K[B];delete N[F]}delete a[R]}}function I(R){if(a[R.id]===void 0)return;const N=a[R.id];for(const F in N){const K=N[F];for(const B in K)g(K[B].object),delete K[B];delete N[F]}delete a[R.id]}function V(R){for(const N in a){const F=a[N];if(F[R.id]===void 0)continue;const K=F[R.id];for(const B in K)g(K[B].object),delete K[B];delete F[R.id]}}function q(){P(),c=!0,u!==l&&(u=l,m(u.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:I,releaseStatesOfProgram:V,initAttributes:y,enableAttribute:b,disableUnusedAttributes:S}}function Nm(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,c){r.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,d){if(d===0)return;let h,m;if(i)h=r,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,u,c,d),t.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function zm(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),h=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),_=r.getParameter(36348),v=r.getParameter(36349),y=h>0,b=o||e.has("OES_texture_float"),M=y&&b,S=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:M,maxSamples:S}}function Fm(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new $n,a=new Mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||i;return i=h,n=d.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,p=d.clipIntersection,f=d.clipShadows,_=r.get(d);if(!i||g===null||g.length===0||s&&!f)s?c(null):u();else{const v=s?0:n,y=v*4;let b=_.clippingState||null;l.value=b,b=c(g,h,y,m);for(let M=0;M!==y;++M)b[M]=t[M];_.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(d,h,m,g){const p=d!==null?d.length:0;let f=null;if(p!==0){if(f=l.value,g!==!0||f===null){const _=m+p*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(f===null||f.length<_)&&(f=new Float32Array(_));for(let y=0,b=m;y!==p;++y,b+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(f,b),f[b+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function Om(r){let e=new WeakMap;function t(o,a){return a===go?o.mapping=Oi:a===_o&&(o.mapping=Bi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===go||a===_o)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new $d(l.height/2);return u.fromEquirectangularTexture(r,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Bm extends Yc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Li=4,il=[.125,.215,.35,.446,.526,.582],Kn=20,Yr=new Bm,sl=new Ue;let $r=null;const Zn=(1+Math.sqrt(5))/2,Si=1/Zn,rl=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Zn,Si),new W(0,Zn,-Si),new W(Si,0,Zn),new W(-Si,0,Zn),new W(Zn,Si,0),new W(-Zn,Si,0)];class ol{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$r=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($r),e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$r=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:ms,format:$t,encoding:si,depthBuffer:!1},i=al(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=al(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Um(s)),this._blurMaterial=km(s,e,t)}return i}_compileMaterial(e){const t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,Yr)}_sceneToCubeUV(e,t,n,i){const a=new Nt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(sl),c.toneMapping=En,c.autoClear=!1;const m=new Do({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new zt(new Un,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(sl),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(a.up.set(0,l[_],0),a.lookAt(u[_],0,0)):v===1?(a.up.set(0,0,l[_]),a.lookAt(0,u[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,u[_]));const y=this._cubeSize;Us(i,v*y,_>2?y:0,y,y),c.setRenderTarget(i),p&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Oi||e.mapping===Bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ll());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Us(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Yr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=rl[(i-1)%rl.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new zt(this._lodPlanes[i],u),h=u.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),p=s/g,f=isFinite(s)?1+Math.floor(c*p):Kn;f>Kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Kn}`);const _=[];let v=0;for(let C=0;C<Kn;++C){const w=C/p,T=Math.exp(-w*w/2);_.push(T),C===0?v+=T:C<f&&(v+=2*T)}for(let C=0;C<_.length;C++)_[C]=_[C]/v;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const b=this._sizeLods[i],M=3*b*(i>y-Li?i-y+Li:0),S=4*(this._cubeSize-b);Us(t,M,S,3*b,2*b),l.setRenderTarget(t),l.render(d,Yr)}}function Um(r){const e=[],t=[],n=[];let i=r;const s=r-Li+1+il.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Li?l=il[o-r+Li-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,g=6,p=3,f=2,_=1,v=new Float32Array(p*g*m),y=new Float32Array(f*g*m),b=new Float32Array(_*g*m);for(let S=0;S<m;S++){const C=S%3*2/3-1,w=S>2?0:-1,T=[C,w,0,C+2/3,w,0,C+2/3,w+1,0,C,w,0,C+2/3,w+1,0,C,w+1,0];v.set(T,p*g*S),y.set(h,f*g*S);const I=[S,S,S,S,S,S];b.set(I,_*g*S)}const M=new kn;M.setAttribute("position",new ln(v,p)),M.setAttribute("uv",new ln(y,f)),M.setAttribute("faceIndex",new ln(b,_)),e.push(M),i>Li&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function al(r,e,t){const n=new ri(r,e,t);return n.texture.mapping=lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Us(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function km(r,e,t){const n=new Float32Array(Kn),i=new W(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function ll(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function cl(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function No(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gm(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===go||l===_o,c=l===Oi||l===Bi;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new ol(r)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&i(d)){t===null&&(t=new ol(r));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Vm(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wm(r,e,t,n){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],34962);const m=d.morphAttributes;for(const g in m){const p=m[g];for(let f=0,_=p.length;f<_;f++)e.update(p[f],34962)}}function u(d){const h=[],m=d.index,g=d.attributes.position;let p=0;if(m!==null){const v=m.array;p=m.version;for(let y=0,b=v.length;y<b;y+=3){const M=v[y+0],S=v[y+1],C=v[y+2];h.push(M,S,S,C,C,M)}}else{const v=g.array;p=g.version;for(let y=0,b=v.length/3-1;y<b;y+=3){const M=y+0,S=y+1,C=y+2;h.push(M,S,S,C,C,M)}}const f=new(Uc(h)?jc:qc)(h,1);f.version=p;const _=s.get(d);_&&e.remove(_),s.set(d,f)}function c(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function Hm(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,m){r.drawElements(s,m,a,h*l),t.update(m,s,1)}function d(h,m,g){if(g===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,a,h*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function qm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jm(r,e){return r[0]-e[0]}function Xm(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Ym(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new ut,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=g!==void 0?g.length:0;let f=s.get(c);if(f===void 0||f.count!==p){let N=function(){P.dispose(),s.delete(c),c.removeEventListener("dispose",N)};var m=N;f!==void 0&&f.texture.dispose();const y=c.morphAttributes.position!==void 0,b=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let T=0;y===!0&&(T=1),b===!0&&(T=2),M===!0&&(T=3);let I=c.attributes.position.count*T,V=1;I>e.maxTextureSize&&(V=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const q=new Float32Array(I*V*4*p),P=new Vc(q,I,V,p);P.type=ti,P.needsUpdate=!0;const R=T*4;for(let F=0;F<p;F++){const K=S[F],B=C[F],j=w[F],X=I*V*4*F;for(let ae=0;ae<K.count;ae++){const z=ae*R;y===!0&&(o.fromBufferAttribute(K,ae),q[X+z+0]=o.x,q[X+z+1]=o.y,q[X+z+2]=o.z,q[X+z+3]=0),b===!0&&(o.fromBufferAttribute(B,ae),q[X+z+4]=o.x,q[X+z+5]=o.y,q[X+z+6]=o.z,q[X+z+7]=0),M===!0&&(o.fromBufferAttribute(j,ae),q[X+z+8]=o.x,q[X+z+9]=o.y,q[X+z+10]=o.z,q[X+z+11]=j.itemSize===4?o.w:1)}}f={count:p,texture:P,size:new Te(I,V)},s.set(c,f),c.addEventListener("dispose",N)}let _=0;for(let y=0;y<h.length;y++)_+=h[y];const v=c.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",v),d.getUniforms().setValue(r,"morphTargetInfluences",h),d.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{const g=h===void 0?0:h.length;let p=n[c.id];if(p===void 0||p.length!==g){p=[];for(let b=0;b<g;b++)p[b]=[b,0];n[c.id]=p}for(let b=0;b<g;b++){const M=p[b];M[0]=b,M[1]=h[b]}p.sort(Xm);for(let b=0;b<8;b++)b<g&&p[b][1]?(a[b][0]=p[b][0],a[b][1]=p[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(jm);const f=c.morphAttributes.position,_=c.morphAttributes.normal;let v=0;for(let b=0;b<8;b++){const M=a[b],S=M[0],C=M[1];S!==Number.MAX_SAFE_INTEGER&&C?(f&&c.getAttribute("morphTarget"+b)!==f[S]&&c.setAttribute("morphTarget"+b,f[S]),_&&c.getAttribute("morphNormal"+b)!==_[S]&&c.setAttribute("morphNormal"+b,_[S]),i[b]=C,v+=C):(f&&c.hasAttribute("morphTarget"+b)===!0&&c.deleteAttribute("morphTarget"+b),_&&c.hasAttribute("morphNormal"+b)===!0&&c.deleteAttribute("morphNormal"+b),i[b]=0)}const y=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(r,"morphTargetBaseInfluence",y),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function $m(r,e,t,n){let i=new WeakMap;function s(l){const u=n.render.frame,c=l.geometry,d=e.get(l,c);return i.get(d)!==u&&(e.update(d),i.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){i=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Kc=new Et,Jc=new Vc,Qc=new Dd,eu=new $c,ul=[],hl=[],dl=new Float32Array(16),fl=new Float32Array(9),pl=new Float32Array(4);function Wi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ul[i];if(s===void 0&&(s=new Float32Array(i),ul[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function nt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function it(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function dr(r,e){let t=hl[e];t===void 0&&(t=new Int32Array(e),hl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Zm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Km(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;r.uniform2fv(this.addr,e),it(t,e)}}function Jm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nt(t,e))return;r.uniform3fv(this.addr,e),it(t,e)}}function Qm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;r.uniform4fv(this.addr,e),it(t,e)}}function eg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;pl.set(n),r.uniformMatrix2fv(this.addr,!1,pl),it(t,n)}}function tg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;fl.set(n),r.uniformMatrix3fv(this.addr,!1,fl),it(t,n)}}function ng(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;dl.set(n),r.uniformMatrix4fv(this.addr,!1,dl),it(t,n)}}function ig(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function sg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;r.uniform2iv(this.addr,e),it(t,e)}}function rg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;r.uniform3iv(this.addr,e),it(t,e)}}function og(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;r.uniform4iv(this.addr,e),it(t,e)}}function ag(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function lg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;r.uniform2uiv(this.addr,e),it(t,e)}}function cg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;r.uniform3uiv(this.addr,e),it(t,e)}}function ug(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;r.uniform4uiv(this.addr,e),it(t,e)}}function hg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Kc,i)}function dg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qc,i)}function fg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||eu,i)}function pg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jc,i)}function mg(r){switch(r){case 5126:return Zm;case 35664:return Km;case 35665:return Jm;case 35666:return Qm;case 35674:return eg;case 35675:return tg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return og;case 5125:return ag;case 36294:return lg;case 36295:return cg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}function gg(r,e){r.uniform1fv(this.addr,e)}function _g(r,e){const t=Wi(e,this.size,2);r.uniform2fv(this.addr,t)}function vg(r,e){const t=Wi(e,this.size,3);r.uniform3fv(this.addr,t)}function xg(r,e){const t=Wi(e,this.size,4);r.uniform4fv(this.addr,t)}function yg(r,e){const t=Wi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Mg(r,e){const t=Wi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function bg(r,e){const t=Wi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function wg(r,e){r.uniform1iv(this.addr,e)}function Sg(r,e){r.uniform2iv(this.addr,e)}function Eg(r,e){r.uniform3iv(this.addr,e)}function Tg(r,e){r.uniform4iv(this.addr,e)}function Ag(r,e){r.uniform1uiv(this.addr,e)}function Cg(r,e){r.uniform2uiv(this.addr,e)}function Lg(r,e){r.uniform3uiv(this.addr,e)}function Pg(r,e){r.uniform4uiv(this.addr,e)}function Rg(r,e,t){const n=this.cache,i=e.length,s=dr(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Kc,s[o])}function Dg(r,e,t){const n=this.cache,i=e.length,s=dr(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Qc,s[o])}function Ig(r,e,t){const n=this.cache,i=e.length,s=dr(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||eu,s[o])}function Ng(r,e,t){const n=this.cache,i=e.length,s=dr(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Jc,s[o])}function zg(r){switch(r){case 5126:return gg;case 35664:return _g;case 35665:return vg;case 35666:return xg;case 35674:return yg;case 35675:return Mg;case 35676:return bg;case 5124:case 35670:return wg;case 35667:case 35671:return Sg;case 35668:case 35672:return Eg;case 35669:case 35673:return Tg;case 5125:return Ag;case 36294:return Cg;case 36295:return Lg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Ng}}class Fg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=mg(t.type)}}class Og{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=zg(t.type)}}class Bg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Zr=/(\w+)(\])?(\[|\.)?/g;function ml(r,e){r.seq.push(e),r.map[e.id]=e}function Ug(r,e,t){const n=r.name,i=n.length;for(Zr.lastIndex=0;;){const s=Zr.exec(n),o=Zr.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===i){ml(t,u===void 0?new Fg(a,r,e):new Og(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new Bg(a),ml(t,d)),t=d}}}class $s{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Ug(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function gl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let kg=0;function Gg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Vg(r){switch(r){case si:return["Linear","( value )"];case He:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function _l(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Gg(r.getShaderSource(e),o)}else return i}function Wg(r,e){const t=Vg(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Hg(r,e){let t;switch(e){case Jh:t="Linear";break;case Qh:t="Reinhard";break;case ed:t="OptimizedCineon";break;case td:t="ACESFilmic";break;case nd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qg(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ls).join(`
`)}function jg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xg(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ls(r){return r!==""}function vl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(r){return r.replace(Yg,$g)}function $g(r,e){const t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return bo(t)}const Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yl(r){return r.replace(Zg,Kg)}function Kg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ml(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Dc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ic?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===as&&(e="SHADOWMAP_TYPE_VSM"),e}function Qg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Oi:case Bi:e="ENVMAP_TYPE_CUBE";break;case lr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function e_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Bi:e="ENVMAP_MODE_REFRACTION";break}return e}function t_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ar:e="ENVMAP_BLENDING_MULTIPLY";break;case Zh:e="ENVMAP_BLENDING_MIX";break;case Kh:e="ENVMAP_BLENDING_ADD";break}return e}function n_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function i_(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Jg(t),u=Qg(t),c=e_(t),d=t_(t),h=n_(t),m=t.isWebGL2?"":qg(t),g=jg(s),p=i.createProgram();let f,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(ls).join(`
`),f.length>0&&(f+=`
`),_=[m,g].filter(ls).join(`
`),_.length>0&&(_+=`
`)):(f=[Ml(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),_=[m,Ml(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Ae.tonemapping_pars_fragment:"",t.toneMapping!==En?Hg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,Wg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),o=bo(o),o=vl(o,t),o=xl(o,t),a=bo(a),a=vl(a,t),a=xl(a,t),o=yl(o),a=yl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===Ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=v+f+o,b=v+_+a,M=gl(i,35633,y),S=gl(i,35632,b);if(i.attachShader(p,M),i.attachShader(p,S),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(M).trim(),V=i.getShaderInfoLog(S).trim();let q=!0,P=!0;if(i.getProgramParameter(p,35714)===!1){q=!1;const R=_l(i,M,"vertex"),N=_l(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+R+`
`+N)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(I===""||V==="")&&(P=!1);P&&(this.diagnostics={runnable:q,programLog:T,vertexShader:{log:I,prefix:f},fragmentShader:{log:V,prefix:_}})}i.deleteShader(M),i.deleteShader(S);let C;this.getUniforms=function(){return C===void 0&&(C=new $s(i,p)),C};let w;return this.getAttributes=function(){return w===void 0&&(w=Xg(i,p)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=kg++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=S,this}let s_=0;class r_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new o_(e),t.set(e,n)),n}}class o_{constructor(e){this.id=s_++,this.code=e,this.usedTimes=0}}function a_(r,e,t,n,i,s,o){const a=new Wc,l=new r_,u=[],c=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(w,T,I,V,q){const P=V.fog,R=q.geometry,N=w.isMeshStandardMaterial?V.environment:null,F=(w.isMeshStandardMaterial?t:e).get(w.envMap||N),K=!!F&&F.mapping===lr?F.image.height:null,B=g[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const j=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,X=j!==void 0?j.length:0;let ae=0;R.morphAttributes.position!==void 0&&(ae=1),R.morphAttributes.normal!==void 0&&(ae=2),R.morphAttributes.color!==void 0&&(ae=3);let z,Q,ne,G;if(B){const Ee=on[B];z=Ee.vertexShader,Q=Ee.fragmentShader}else z=w.vertexShader,Q=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),G=l.getFragmentShaderID(w);const ue=r.getRenderTarget(),te=w.alphaTest>0,me=w.clearcoat>0,pe=w.iridescence>0;return{isWebGL2:c,shaderID:B,shaderName:w.type,vertexShader:z,fragmentShader:Q,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:G,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:h,outputEncoding:ue===null?r.outputEncoding:ue.isXRRenderTarget===!0?ue.texture.encoding:si,map:!!w.map,matcap:!!w.matcap,envMap:!!F,envMapMode:F&&F.mapping,envMapCubeUVHeight:K,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===Md,tangentSpaceNormalMap:w.normalMapType===cr,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===He,clearcoat:me,clearcoatMap:me&&!!w.clearcoatMap,clearcoatRoughnessMap:me&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:me&&!!w.clearcoatNormalMap,iridescence:pe,iridescenceMap:pe&&!!w.iridescenceMap,iridescenceThicknessMap:pe&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===Di,alphaMap:!!w.alphaMap,alphaTest:te,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!R.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||w.transmission>0||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||w.sheen>0||!!w.sheenColorMap||!!w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!P,useFog:w.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:d,skinning:q.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:w.toneMapped?r.toneMapping:En,useLegacyLights:r.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Dn,flipSided:w.side===Ft,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function f(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)T.push(I),T.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(_(T,w),v(T,w),T.push(r.outputEncoding)),T.push(w.customProgramCacheKey),T.join()}function _(w,T){w.push(T.precision),w.push(T.outputEncoding),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.combine),w.push(T.vertexUvs),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function v(w,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),w.push(a.mask)}function y(w){const T=g[w.type];let I;if(T){const V=on[T];I=qd.clone(V.uniforms)}else I=w.uniforms;return I}function b(w,T){let I;for(let V=0,q=u.length;V<q;V++){const P=u[V];if(P.cacheKey===T){I=P,++I.usedTimes;break}}return I===void 0&&(I=new i_(r,T,w,s),u.push(I)),I}function M(w){if(--w.usedTimes===0){const T=u.indexOf(w);u[T]=u[u.length-1],u.pop(),w.destroy()}}function S(w){l.remove(w)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:b,releaseProgram:M,releaseShaderCache:S,programs:u,dispose:C}}function l_(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function c_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function bl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,h,m,g,p,f){let _=r[e];return _===void 0?(_={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:p,group:f},r[e]=_):(_.id=d.id,_.object=d,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=p,_.group=f),e++,_}function a(d,h,m,g,p,f){const _=o(d,h,m,g,p,f);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(d,h,m,g,p,f){const _=o(d,h,m,g,p,f);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function u(d,h){t.length>1&&t.sort(d||c_),n.length>1&&n.sort(h||bl),i.length>1&&i.sort(h||bl)}function c(){for(let d=e,h=r.length;d<h;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:c,sort:u}}function u_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new wl,r.set(n,[o])):i>=s.length?(o=new wl,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function h_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Ue};break;case"SpotLight":t={position:new W,direction:new W,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new W,halfWidth:new W,halfHeight:new W};break}return r[e.id]=t,t}}}function d_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let f_=0;function p_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function m_(r,e){const t=new h_,n=d_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new W);const s=new W,o=new tt,a=new tt;function l(c,d){let h=0,m=0,g=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,f=0,_=0,v=0,y=0,b=0,M=0,S=0,C=0,w=0;c.sort(p_);const T=d===!0?Math.PI:1;for(let V=0,q=c.length;V<q;V++){const P=c[V],R=P.color,N=P.intensity,F=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=R.r*N*T,m+=R.g*N*T,g+=R.b*N*T;else if(P.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],N);else if(P.isDirectionalLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const j=P.shadow,X=n.get(P);X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=P.shadow.matrix,b++}i.directional[p]=B,p++}else if(P.isSpotLight){const B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(R).multiplyScalar(N*T),B.distance=F,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[_]=B;const j=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,j.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[_]=j.matrix,P.castShadow){const X=n.get(P);X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=K,S++}_++}else if(P.isRectAreaLight){const B=t.get(P);B.color.copy(R).multiplyScalar(N),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=B,v++}else if(P.isPointLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*T),B.distance=P.distance,B.decay=P.decay,P.castShadow){const j=P.shadow,X=n.get(P);X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,i.pointShadow[f]=X,i.pointShadowMap[f]=K,i.pointShadowMatrix[f]=P.shadow.matrix,M++}i.point[f]=B,f++}else if(P.isHemisphereLight){const B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(N*T),B.groundColor.copy(P.groundColor).multiplyScalar(N*T),i.hemi[y]=B,y++}}v>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==p||I.pointLength!==f||I.spotLength!==_||I.rectAreaLength!==v||I.hemiLength!==y||I.numDirectionalShadows!==b||I.numPointShadows!==M||I.numSpotShadows!==S||I.numSpotMaps!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=v,i.point.length=f,i.hemi.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,I.directionalLength=p,I.pointLength=f,I.spotLength=_,I.rectAreaLength=v,I.hemiLength=y,I.numDirectionalShadows=b,I.numPointShadows=M,I.numSpotShadows=S,I.numSpotMaps=C,i.version=f_++)}function u(c,d){let h=0,m=0,g=0,p=0,f=0;const _=d.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){const b=c[v];if(b.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),h++}else if(b.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(b.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const M=i.hemi[f];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(_),f++}}}return{setup:l,setupView:u,state:i}}function Sl(r,e){const t=new m_(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function u(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function g_(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Sl(r,e),t.set(s,[l])):o>=a.length?(l=new Sl(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class __ extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class v_ extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new W,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const x_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function M_(r,e,t){let n=new Io;const i=new Te,s=new Te,o=new ut,a=new __({depthPacking:yd}),l=new v_,u={},c=t.maxTextureSize,d={[On]:Ft,[Ft]:On,[Dn]:Dn},h=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:x_,fragmentShader:y_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new kn;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new zt(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc,this.render=function(b,M,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const C=r.getRenderTarget(),w=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Nn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let V=0,q=b.length;V<q;V++){const P=b[V],R=P.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const N=R.getFrameExtents();if(i.multiply(N),s.copy(R.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/N.x),i.x=s.x*N.x,R.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/N.y),i.y=s.y*N.y,R.mapSize.y=s.y)),R.map===null){const K=this.type!==as?{minFilter:yt,magFilter:yt}:{};R.map=new ri(i.x,i.y,K),R.map.texture.name=P.name+".shadowMap",R.camera.updateProjectionMatrix()}r.setRenderTarget(R.map),r.clear();const F=R.getViewportCount();for(let K=0;K<F;K++){const B=R.getViewport(K);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),I.viewport(o),R.updateMatrices(P,K),n=R.getFrustum(),y(M,S,R.camera,P,this.type)}R.isPointLightShadow!==!0&&this.type===as&&_(R,S),R.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(C,w,T)};function _(b,M){const S=e.update(p);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ri(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(M,null,S,h,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(M,null,S,m,p,null)}function v(b,M,S,C,w,T){let I=null;const V=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(V!==void 0)I=V;else if(I=S.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const q=I.uuid,P=M.uuid;let R=u[q];R===void 0&&(R={},u[q]=R);let N=R[P];N===void 0&&(N=I.clone(),R[P]=N),I=N}return I.visible=M.visible,I.wireframe=M.wireframe,T===as?I.side=M.shadowSide!==null?M.shadowSide:M.side:I.side=M.shadowSide!==null?M.shadowSide:d[M.side],I.alphaMap=M.alphaMap,I.alphaTest=M.alphaTest,I.map=M.map,I.clipShadows=M.clipShadows,I.clippingPlanes=M.clippingPlanes,I.clipIntersection=M.clipIntersection,I.displacementMap=M.displacementMap,I.displacementScale=M.displacementScale,I.displacementBias=M.displacementBias,I.wireframeLinewidth=M.wireframeLinewidth,I.linewidth=M.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(S.matrixWorld),I.nearDistance=C,I.farDistance=w),I}function y(b,M,S,C,w){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===as)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const V=e.update(b),q=b.material;if(Array.isArray(q)){const P=V.groups;for(let R=0,N=P.length;R<N;R++){const F=P[R],K=q[F.materialIndex];if(K&&K.visible){const B=v(b,K,C,S.near,S.far,w);r.renderBufferDirect(S,null,V,B,b,F)}}}else if(q.visible){const P=v(b,q,C,S.near,S.far,w);r.renderBufferDirect(S,null,V,P,b,null)}}const I=b.children;for(let V=0,q=I.length;V<q;V++)y(I[V],M,S,C,w)}}function b_(r,e,t){const n=t.isWebGL2;function i(){let O=!1;const Z=new ut;let ee=null;const de=new ut(0,0,0,0);return{setMask:function(ge){ee!==ge&&!O&&(r.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){O=ge},setClear:function(ge,Ve,at,gt,Kt){Kt===!0&&(ge*=gt,Ve*=gt,at*=gt),Z.set(ge,Ve,at,gt),de.equals(Z)===!1&&(r.clearColor(ge,Ve,at,gt),de.copy(Z))},reset:function(){O=!1,ee=null,de.set(-1,0,0,0)}}}function s(){let O=!1,Z=null,ee=null,de=null;return{setTest:function(ge){ge?te(2929):me(2929)},setMask:function(ge){Z!==ge&&!O&&(r.depthMask(ge),Z=ge)},setFunc:function(ge){if(ee!==ge){switch(ge){case Wh:r.depthFunc(512);break;case Hh:r.depthFunc(519);break;case qh:r.depthFunc(513);break;case mo:r.depthFunc(515);break;case jh:r.depthFunc(514);break;case Xh:r.depthFunc(518);break;case Yh:r.depthFunc(516);break;case $h:r.depthFunc(517);break;default:r.depthFunc(515)}ee=ge}},setLocked:function(ge){O=ge},setClear:function(ge){de!==ge&&(r.clearDepth(ge),de=ge)},reset:function(){O=!1,Z=null,ee=null,de=null}}}function o(){let O=!1,Z=null,ee=null,de=null,ge=null,Ve=null,at=null,gt=null,Kt=null;return{setTest:function(Xe){O||(Xe?te(2960):me(2960))},setMask:function(Xe){Z!==Xe&&!O&&(r.stencilMask(Xe),Z=Xe)},setFunc:function(Xe,Ut,Jt){(ee!==Xe||de!==Ut||ge!==Jt)&&(r.stencilFunc(Xe,Ut,Jt),ee=Xe,de=Ut,ge=Jt)},setOp:function(Xe,Ut,Jt){(Ve!==Xe||at!==Ut||gt!==Jt)&&(r.stencilOp(Xe,Ut,Jt),Ve=Xe,at=Ut,gt=Jt)},setLocked:function(Xe){O=Xe},setClear:function(Xe){Kt!==Xe&&(r.clearStencil(Xe),Kt=Xe)},reset:function(){O=!1,Z=null,ee=null,de=null,ge=null,Ve=null,at=null,gt=null,Kt=null}}}const a=new i,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let h={},m={},g=new WeakMap,p=[],f=null,_=!1,v=null,y=null,b=null,M=null,S=null,C=null,w=null,T=!1,I=null,V=null,q=null,P=null,R=null;const N=r.getParameter(35661);let F=!1,K=0;const B=r.getParameter(7938);B.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(B)[1]),F=K>=1):B.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),F=K>=2);let j=null,X={};const ae=r.getParameter(3088),z=r.getParameter(2978),Q=new ut().fromArray(ae),ne=new ut().fromArray(z);function G(O,Z,ee){const de=new Uint8Array(4),ge=r.createTexture();r.bindTexture(O,ge),r.texParameteri(O,10241,9728),r.texParameteri(O,10240,9728);for(let Ve=0;Ve<ee;Ve++)r.texImage2D(Z+Ve,0,6408,1,1,0,6408,5121,de);return ge}const ue={};ue[3553]=G(3553,3553,1),ue[34067]=G(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),te(2929),l.setFunc(mo),rt(!1),ot(fa),te(2884),st(Nn);function te(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function me(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function pe(O,Z){return m[O]!==Z?(r.bindFramebuffer(O,Z),m[O]=Z,n&&(O===36009&&(m[36160]=Z),O===36160&&(m[36009]=Z)),!0):!1}function we(O,Z){let ee=p,de=!1;if(O)if(ee=g.get(Z),ee===void 0&&(ee=[],g.set(Z,ee)),O.isWebGLMultipleRenderTargets){const ge=O.texture;if(ee.length!==ge.length||ee[0]!==36064){for(let Ve=0,at=ge.length;Ve<at;Ve++)ee[Ve]=36064+Ve;ee.length=ge.length,de=!0}}else ee[0]!==36064&&(ee[0]=36064,de=!0);else ee[0]!==1029&&(ee[0]=1029,de=!0);de&&(t.isWebGL2?r.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Ee(O){return f!==O?(r.useProgram(O),f=O,!0):!1}const Ce={[Ci]:32774,[Dh]:32778,[Ih]:32779};if(n)Ce[_a]=32775,Ce[va]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(Ce[_a]=O.MIN_EXT,Ce[va]=O.MAX_EXT)}const ze={[Nh]:0,[zh]:1,[Fh]:768,[Nc]:770,[Vh]:776,[kh]:774,[Bh]:772,[Oh]:769,[zc]:771,[Gh]:775,[Uh]:773};function st(O,Z,ee,de,ge,Ve,at,gt){if(O===Nn){_===!0&&(me(3042),_=!1);return}if(_===!1&&(te(3042),_=!0),O!==Rh){if(O!==v||gt!==T){if((y!==Ci||S!==Ci)&&(r.blendEquation(32774),y=Ci,S=Ci),gt)switch(O){case Di:r.blendFuncSeparate(1,771,1,771);break;case pa:r.blendFunc(1,1);break;case ma:r.blendFuncSeparate(0,769,0,1);break;case ga:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Di:r.blendFuncSeparate(770,771,1,771);break;case pa:r.blendFunc(770,1);break;case ma:r.blendFuncSeparate(0,769,0,1);break;case ga:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,M=null,C=null,w=null,v=O,T=gt}return}ge=ge||Z,Ve=Ve||ee,at=at||de,(Z!==y||ge!==S)&&(r.blendEquationSeparate(Ce[Z],Ce[ge]),y=Z,S=ge),(ee!==b||de!==M||Ve!==C||at!==w)&&(r.blendFuncSeparate(ze[ee],ze[de],ze[Ve],ze[at]),b=ee,M=de,C=Ve,w=at),v=O,T=!1}function pt(O,Z){O.side===Dn?me(2884):te(2884);let ee=O.side===Ft;Z&&(ee=!ee),rt(ee),O.blending===Di&&O.transparent===!1?st(Nn):st(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const de=O.stencilWrite;u.setTest(de),de&&(u.setMask(O.stencilWriteMask),u.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),u.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ge(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?te(32926):me(32926)}function rt(O){I!==O&&(O?r.frontFace(2304):r.frontFace(2305),I=O)}function ot(O){O!==Lh?(te(2884),O!==V&&(O===fa?r.cullFace(1029):O===Ph?r.cullFace(1028):r.cullFace(1032))):me(2884),V=O}function qe(O){O!==q&&(F&&r.lineWidth(O),q=O)}function Ge(O,Z,ee){O?(te(32823),(P!==Z||R!==ee)&&(r.polygonOffset(Z,ee),P=Z,R=ee)):me(32823)}function Tt(O){O?te(3089):me(3089)}function mt(O){O===void 0&&(O=33984+N-1),j!==O&&(r.activeTexture(O),j=O)}function L(O,Z,ee){ee===void 0&&(j===null?ee=33984+N-1:ee=j);let de=X[ee];de===void 0&&(de={type:void 0,texture:void 0},X[ee]=de),(de.type!==O||de.texture!==Z)&&(j!==ee&&(r.activeTexture(ee),j=ee),r.bindTexture(O,Z||ue[O]),de.type=O,de.texture=Z)}function E(){const O=X[j];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function D(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function U(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(O){Q.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Q.copy(O))}function ve(O){ne.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),ne.copy(O))}function Re(O,Z){let ee=d.get(Z);ee===void 0&&(ee=new WeakMap,d.set(Z,ee));let de=ee.get(O);de===void 0&&(de=r.getUniformBlockIndex(Z,O.name),ee.set(O,de))}function Fe(O,Z){const de=d.get(Z).get(O);c.get(Z)!==de&&(r.uniformBlockBinding(Z,de,O.__bindingPointIndex),c.set(Z,de))}function ke(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},j=null,X={},m={},g=new WeakMap,p=[],f=null,_=!1,v=null,y=null,b=null,M=null,S=null,C=null,w=null,T=!1,I=null,V=null,q=null,P=null,R=null,Q.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:te,disable:me,bindFramebuffer:pe,drawBuffers:we,useProgram:Ee,setBlending:st,setMaterial:pt,setFlipSided:rt,setCullFace:ot,setLineWidth:qe,setPolygonOffset:Ge,setScissorTest:Tt,activeTexture:mt,bindTexture:L,unbindTexture:E,compressedTexImage2D:$,compressedTexImage3D:ie,texImage2D:oe,texImage3D:_e,updateUBOMapping:Re,uniformBlockBinding:Fe,texStorage2D:U,texStorage3D:he,texSubImage2D:se,texSubImage3D:le,compressedTexSubImage2D:Me,compressedTexSubImage3D:D,scissor:ye,viewport:ve,reset:ke}}function w_(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,u=i.maxCubemapSize,c=i.maxTextureSize,d=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,E){return _?new OffscreenCanvas(L,E):tr("canvas")}function y(L,E,$,ie){let se=1;if((L.width>ie||L.height>ie)&&(se=ie/Math.max(L.width,L.height)),se<1||E===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const le=E?Sd:Math.floor,Me=le(se*L.width),D=le(se*L.height);p===void 0&&(p=v(Me,D));const U=$?v(Me,D):p;return U.width=Me,U.height=D,U.getContext("2d").drawImage(L,0,0,Me,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Me+"x"+D+")."),U}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function b(L){return qa(L.width)&&qa(L.height)}function M(L){return a?!1:L.wrapS!==Yt||L.wrapT!==Yt||L.minFilter!==yt&&L.minFilter!==Vt}function S(L,E){return L.generateMipmaps&&E&&L.minFilter!==yt&&L.minFilter!==Vt}function C(L){r.generateMipmap(L)}function w(L,E,$,ie,se=!1){if(a===!1)return E;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let le=E;return E===6403&&($===5126&&(le=33326),$===5131&&(le=33325),$===5121&&(le=33321)),E===33319&&($===5126&&(le=33328),$===5131&&(le=33327),$===5121&&(le=33323)),E===6408&&($===5126&&(le=34836),$===5131&&(le=34842),$===5121&&(le=ie===He&&se===!1?35907:32856),$===32819&&(le=32854),$===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function T(L,E,$){return S(L,$)===!0||L.isFramebufferTexture&&L.minFilter!==yt&&L.minFilter!==Vt?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function I(L){return L===yt||L===xa||L===yr?9728:9729}function V(L){const E=L.target;E.removeEventListener("dispose",V),P(E),E.isVideoTexture&&g.delete(E)}function q(L){const E=L.target;E.removeEventListener("dispose",q),N(E)}function P(L){const E=n.get(L);if(E.__webglInit===void 0)return;const $=L.source,ie=f.get($);if(ie){const se=ie[E.__cacheKey];se.usedTimes--,se.usedTimes===0&&R(L),Object.keys(ie).length===0&&f.delete($)}n.remove(L)}function R(L){const E=n.get(L);r.deleteTexture(E.__webglTexture);const $=L.source,ie=f.get($);delete ie[E.__cacheKey],o.memory.textures--}function N(L){const E=L.texture,$=n.get(L),ie=n.get(E);if(ie.__webglTexture!==void 0&&(r.deleteTexture(ie.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)r.deleteFramebuffer($.__webglFramebuffer[se]),$.__webglDepthbuffer&&r.deleteRenderbuffer($.__webglDepthbuffer[se]);else{if(r.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&r.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&r.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let se=0;se<$.__webglColorRenderbuffer.length;se++)$.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer($.__webglColorRenderbuffer[se]);$.__webglDepthRenderbuffer&&r.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let se=0,le=E.length;se<le;se++){const Me=n.get(E[se]);Me.__webglTexture&&(r.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(E[se])}n.remove(E),n.remove(L)}let F=0;function K(){F=0}function B(){const L=F;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),F+=1,L}function j(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.encoding),E.join()}function X(L,E){const $=n.get(L);if(L.isVideoTexture&&Tt(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){const ie=L.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me($,L,E);return}}t.bindTexture(3553,$.__webglTexture,33984+E)}function ae(L,E){const $=n.get(L);if(L.version>0&&$.__version!==L.version){me($,L,E);return}t.bindTexture(35866,$.__webglTexture,33984+E)}function z(L,E){const $=n.get(L);if(L.version>0&&$.__version!==L.version){me($,L,E);return}t.bindTexture(32879,$.__webglTexture,33984+E)}function Q(L,E){const $=n.get(L);if(L.version>0&&$.__version!==L.version){pe($,L,E);return}t.bindTexture(34067,$.__webglTexture,33984+E)}const ne={[vo]:10497,[Yt]:33071,[xo]:33648},G={[yt]:9728,[xa]:9984,[yr]:9986,[Vt]:9729,[id]:9985,[ps]:9987};function ue(L,E,$){if($?(r.texParameteri(L,10242,ne[E.wrapS]),r.texParameteri(L,10243,ne[E.wrapT]),(L===32879||L===35866)&&r.texParameteri(L,32882,ne[E.wrapR]),r.texParameteri(L,10240,G[E.magFilter]),r.texParameteri(L,10241,G[E.minFilter])):(r.texParameteri(L,10242,33071),r.texParameteri(L,10243,33071),(L===32879||L===35866)&&r.texParameteri(L,32882,33071),(E.wrapS!==Yt||E.wrapT!==Yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,10240,I(E.magFilter)),r.texParameteri(L,10241,I(E.minFilter)),E.minFilter!==yt&&E.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===yt||E.minFilter!==yr&&E.minFilter!==ps||E.type===ti&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===ms&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(L,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function te(L,E){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",V));const ie=E.source;let se=f.get(ie);se===void 0&&(se={},f.set(ie,se));const le=j(E);if(le!==L.__cacheKey){se[le]===void 0&&(se[le]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,$=!0),se[le].usedTimes++;const Me=se[L.__cacheKey];Me!==void 0&&(se[L.__cacheKey].usedTimes--,Me.usedTimes===0&&R(E)),L.__cacheKey=le,L.__webglTexture=se[le].texture}return $}function me(L,E,$){let ie=3553;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=35866),E.isData3DTexture&&(ie=32879);const se=te(L,E),le=E.source;t.bindTexture(ie,L.__webglTexture,33984+$);const Me=n.get(le);if(le.version!==Me.__version||se===!0){t.activeTexture(33984+$),r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);const D=M(E)&&b(E.image)===!1;let U=y(E.image,D,!1,c);U=mt(E,U);const he=b(U)||a,oe=s.convert(E.format,E.encoding);let _e=s.convert(E.type),ye=w(E.internalFormat,oe,_e,E.encoding,E.isVideoTexture);ue(ie,E,he);let ve;const Re=E.mipmaps,Fe=a&&E.isVideoTexture!==!0,ke=Me.__version===void 0||se===!0,O=T(E,U,he);if(E.isDepthTexture)ye=6402,a?E.type===ti?ye=36012:E.type===ei?ye=33190:E.type===Ii?ye=35056:ye=33189:E.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ni&&ye===6402&&E.type!==Oc&&E.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ei,_e=s.convert(E.type)),E.format===Ui&&ye===6402&&(ye=34041,E.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ii,_e=s.convert(E.type))),ke&&(Fe?t.texStorage2D(3553,1,ye,U.width,U.height):t.texImage2D(3553,0,ye,U.width,U.height,0,oe,_e,null));else if(E.isDataTexture)if(Re.length>0&&he){Fe&&ke&&t.texStorage2D(3553,O,ye,Re[0].width,Re[0].height);for(let Z=0,ee=Re.length;Z<ee;Z++)ve=Re[Z],Fe?t.texSubImage2D(3553,Z,0,0,ve.width,ve.height,oe,_e,ve.data):t.texImage2D(3553,Z,ye,ve.width,ve.height,0,oe,_e,ve.data);E.generateMipmaps=!1}else Fe?(ke&&t.texStorage2D(3553,O,ye,U.width,U.height),t.texSubImage2D(3553,0,0,0,U.width,U.height,oe,_e,U.data)):t.texImage2D(3553,0,ye,U.width,U.height,0,oe,_e,U.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Fe&&ke&&t.texStorage3D(35866,O,ye,Re[0].width,Re[0].height,U.depth);for(let Z=0,ee=Re.length;Z<ee;Z++)ve=Re[Z],E.format!==$t?oe!==null?Fe?t.compressedTexSubImage3D(35866,Z,0,0,0,ve.width,ve.height,U.depth,oe,ve.data,0,0):t.compressedTexImage3D(35866,Z,ye,ve.width,ve.height,U.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage3D(35866,Z,0,0,0,ve.width,ve.height,U.depth,oe,_e,ve.data):t.texImage3D(35866,Z,ye,ve.width,ve.height,U.depth,0,oe,_e,ve.data)}else{Fe&&ke&&t.texStorage2D(3553,O,ye,Re[0].width,Re[0].height);for(let Z=0,ee=Re.length;Z<ee;Z++)ve=Re[Z],E.format!==$t?oe!==null?Fe?t.compressedTexSubImage2D(3553,Z,0,0,ve.width,ve.height,oe,ve.data):t.compressedTexImage2D(3553,Z,ye,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage2D(3553,Z,0,0,ve.width,ve.height,oe,_e,ve.data):t.texImage2D(3553,Z,ye,ve.width,ve.height,0,oe,_e,ve.data)}else if(E.isDataArrayTexture)Fe?(ke&&t.texStorage3D(35866,O,ye,U.width,U.height,U.depth),t.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,oe,_e,U.data)):t.texImage3D(35866,0,ye,U.width,U.height,U.depth,0,oe,_e,U.data);else if(E.isData3DTexture)Fe?(ke&&t.texStorage3D(32879,O,ye,U.width,U.height,U.depth),t.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,oe,_e,U.data)):t.texImage3D(32879,0,ye,U.width,U.height,U.depth,0,oe,_e,U.data);else if(E.isFramebufferTexture){if(ke)if(Fe)t.texStorage2D(3553,O,ye,U.width,U.height);else{let Z=U.width,ee=U.height;for(let de=0;de<O;de++)t.texImage2D(3553,de,ye,Z,ee,0,oe,_e,null),Z>>=1,ee>>=1}}else if(Re.length>0&&he){Fe&&ke&&t.texStorage2D(3553,O,ye,Re[0].width,Re[0].height);for(let Z=0,ee=Re.length;Z<ee;Z++)ve=Re[Z],Fe?t.texSubImage2D(3553,Z,0,0,oe,_e,ve):t.texImage2D(3553,Z,ye,oe,_e,ve);E.generateMipmaps=!1}else Fe?(ke&&t.texStorage2D(3553,O,ye,U.width,U.height),t.texSubImage2D(3553,0,0,0,oe,_e,U)):t.texImage2D(3553,0,ye,oe,_e,U);S(E,he)&&C(ie),Me.__version=le.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function pe(L,E,$){if(E.image.length!==6)return;const ie=te(L,E),se=E.source;t.bindTexture(34067,L.__webglTexture,33984+$);const le=n.get(se);if(se.version!==le.__version||ie===!0){t.activeTexture(33984+$),r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);const Me=E.isCompressedTexture||E.image[0].isCompressedTexture,D=E.image[0]&&E.image[0].isDataTexture,U=[];for(let Z=0;Z<6;Z++)!Me&&!D?U[Z]=y(E.image[Z],!1,!0,u):U[Z]=D?E.image[Z].image:E.image[Z],U[Z]=mt(E,U[Z]);const he=U[0],oe=b(he)||a,_e=s.convert(E.format,E.encoding),ye=s.convert(E.type),ve=w(E.internalFormat,_e,ye,E.encoding),Re=a&&E.isVideoTexture!==!0,Fe=le.__version===void 0||ie===!0;let ke=T(E,he,oe);ue(34067,E,oe);let O;if(Me){Re&&Fe&&t.texStorage2D(34067,ke,ve,he.width,he.height);for(let Z=0;Z<6;Z++){O=U[Z].mipmaps;for(let ee=0;ee<O.length;ee++){const de=O[ee];E.format!==$t?_e!==null?Re?t.compressedTexSubImage2D(34069+Z,ee,0,0,de.width,de.height,_e,de.data):t.compressedTexImage2D(34069+Z,ee,ve,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+Z,ee,0,0,de.width,de.height,_e,ye,de.data):t.texImage2D(34069+Z,ee,ve,de.width,de.height,0,_e,ye,de.data)}}}else{O=E.mipmaps,Re&&Fe&&(O.length>0&&ke++,t.texStorage2D(34067,ke,ve,U[0].width,U[0].height));for(let Z=0;Z<6;Z++)if(D){Re?t.texSubImage2D(34069+Z,0,0,0,U[Z].width,U[Z].height,_e,ye,U[Z].data):t.texImage2D(34069+Z,0,ve,U[Z].width,U[Z].height,0,_e,ye,U[Z].data);for(let ee=0;ee<O.length;ee++){const ge=O[ee].image[Z].image;Re?t.texSubImage2D(34069+Z,ee+1,0,0,ge.width,ge.height,_e,ye,ge.data):t.texImage2D(34069+Z,ee+1,ve,ge.width,ge.height,0,_e,ye,ge.data)}}else{Re?t.texSubImage2D(34069+Z,0,0,0,_e,ye,U[Z]):t.texImage2D(34069+Z,0,ve,_e,ye,U[Z]);for(let ee=0;ee<O.length;ee++){const de=O[ee];Re?t.texSubImage2D(34069+Z,ee+1,0,0,_e,ye,de.image[Z]):t.texImage2D(34069+Z,ee+1,ve,_e,ye,de.image[Z])}}}S(E,oe)&&C(34067),le.__version=se.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function we(L,E,$,ie,se){const le=s.convert($.format,$.encoding),Me=s.convert($.type),D=w($.internalFormat,le,Me,$.encoding);n.get(E).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,D,E.width,E.height,E.depth,0,le,Me,null):t.texImage2D(se,0,D,E.width,E.height,0,le,Me,null)),t.bindFramebuffer(36160,L),Ge(E)?h.framebufferTexture2DMultisampleEXT(36160,ie,se,n.get($).__webglTexture,0,qe(E)):(se===3553||se>=34069&&se<=34074)&&r.framebufferTexture2D(36160,ie,se,n.get($).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ee(L,E,$){if(r.bindRenderbuffer(36161,L),E.depthBuffer&&!E.stencilBuffer){let ie=33189;if($||Ge(E)){const se=E.depthTexture;se&&se.isDepthTexture&&(se.type===ti?ie=36012:se.type===ei&&(ie=33190));const le=qe(E);Ge(E)?h.renderbufferStorageMultisampleEXT(36161,le,ie,E.width,E.height):r.renderbufferStorageMultisample(36161,le,ie,E.width,E.height)}else r.renderbufferStorage(36161,ie,E.width,E.height);r.framebufferRenderbuffer(36160,36096,36161,L)}else if(E.depthBuffer&&E.stencilBuffer){const ie=qe(E);$&&Ge(E)===!1?r.renderbufferStorageMultisample(36161,ie,35056,E.width,E.height):Ge(E)?h.renderbufferStorageMultisampleEXT(36161,ie,35056,E.width,E.height):r.renderbufferStorage(36161,34041,E.width,E.height),r.framebufferRenderbuffer(36160,33306,36161,L)}else{const ie=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let se=0;se<ie.length;se++){const le=ie[se],Me=s.convert(le.format,le.encoding),D=s.convert(le.type),U=w(le.internalFormat,Me,D,le.encoding),he=qe(E);$&&Ge(E)===!1?r.renderbufferStorageMultisample(36161,he,U,E.width,E.height):Ge(E)?h.renderbufferStorageMultisampleEXT(36161,he,U,E.width,E.height):r.renderbufferStorage(36161,U,E.width,E.height)}}r.bindRenderbuffer(36161,null)}function Ce(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const ie=n.get(E.depthTexture).__webglTexture,se=qe(E);if(E.depthTexture.format===ni)Ge(E)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,se):r.framebufferTexture2D(36160,36096,3553,ie,0);else if(E.depthTexture.format===Ui)Ge(E)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,se):r.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function ze(L){const E=n.get(L),$=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ce(E.__webglFramebuffer,L)}else if($){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]=r.createRenderbuffer(),Ee(E.__webglDepthbuffer[ie],L,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),Ee(E.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function st(L,E,$){const ie=n.get(L);E!==void 0&&we(ie.__webglFramebuffer,L,L.texture,36064,3553),$!==void 0&&ze(L)}function pt(L){const E=L.texture,$=n.get(L),ie=n.get(E);L.addEventListener("dispose",q),L.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=E.version,o.memory.textures++);const se=L.isWebGLCubeRenderTarget===!0,le=L.isWebGLMultipleRenderTargets===!0,Me=b(L)||a;if(se){$.__webglFramebuffer=[];for(let D=0;D<6;D++)$.__webglFramebuffer[D]=r.createFramebuffer()}else{if($.__webglFramebuffer=r.createFramebuffer(),le)if(i.drawBuffers){const D=L.texture;for(let U=0,he=D.length;U<he;U++){const oe=n.get(D[U]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&Ge(L)===!1){const D=le?E:[E];$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer);for(let U=0;U<D.length;U++){const he=D[U];$.__webglColorRenderbuffer[U]=r.createRenderbuffer(),r.bindRenderbuffer(36161,$.__webglColorRenderbuffer[U]);const oe=s.convert(he.format,he.encoding),_e=s.convert(he.type),ye=w(he.internalFormat,oe,_e,he.encoding,L.isXRRenderTarget===!0),ve=qe(L);r.renderbufferStorageMultisample(36161,ve,ye,L.width,L.height),r.framebufferRenderbuffer(36160,36064+U,36161,$.__webglColorRenderbuffer[U])}r.bindRenderbuffer(36161,null),L.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Ee($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,ie.__webglTexture),ue(34067,E,Me);for(let D=0;D<6;D++)we($.__webglFramebuffer[D],L,E,36064,34069+D);S(E,Me)&&C(34067),t.unbindTexture()}else if(le){const D=L.texture;for(let U=0,he=D.length;U<he;U++){const oe=D[U],_e=n.get(oe);t.bindTexture(3553,_e.__webglTexture),ue(3553,oe,Me),we($.__webglFramebuffer,L,oe,36064+U,3553),S(oe,Me)&&C(3553)}t.unbindTexture()}else{let D=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?D=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(D,ie.__webglTexture),ue(D,E,Me),we($.__webglFramebuffer,L,E,36064,D),S(E,Me)&&C(D),t.unbindTexture()}L.depthBuffer&&ze(L)}function rt(L){const E=b(L)||a,$=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ie=0,se=$.length;ie<se;ie++){const le=$[ie];if(S(le,E)){const Me=L.isWebGLCubeRenderTarget?34067:3553,D=n.get(le).__webglTexture;t.bindTexture(Me,D),C(Me),t.unbindTexture()}}}function ot(L){if(a&&L.samples>0&&Ge(L)===!1){const E=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],$=L.width,ie=L.height;let se=16384;const le=[],Me=L.stencilBuffer?33306:36096,D=n.get(L),U=L.isWebGLMultipleRenderTargets===!0;if(U)for(let he=0;he<E.length;he++)t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+he,36161,null),t.bindFramebuffer(36160,D.__webglFramebuffer),r.framebufferTexture2D(36009,36064+he,3553,null,0);t.bindFramebuffer(36008,D.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,D.__webglFramebuffer);for(let he=0;he<E.length;he++){le.push(36064+he),L.depthBuffer&&le.push(Me);const oe=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(oe===!1&&(L.depthBuffer&&(se|=256),L.stencilBuffer&&(se|=1024)),U&&r.framebufferRenderbuffer(36008,36064,36161,D.__webglColorRenderbuffer[he]),oe===!0&&(r.invalidateFramebuffer(36008,[Me]),r.invalidateFramebuffer(36009,[Me])),U){const _e=n.get(E[he]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,_e,0)}r.blitFramebuffer(0,0,$,ie,0,0,$,ie,se,9728),m&&r.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),U)for(let he=0;he<E.length;he++){t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+he,36161,D.__webglColorRenderbuffer[he]);const oe=n.get(E[he]).__webglTexture;t.bindFramebuffer(36160,D.__webglFramebuffer),r.framebufferTexture2D(36009,36064+he,3553,oe,0)}t.bindFramebuffer(36009,D.__webglMultisampledFramebuffer)}}function qe(L){return Math.min(d,L.samples)}function Ge(L){const E=n.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Tt(L){const E=o.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function mt(L,E){const $=L.encoding,ie=L.format,se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===yo||$!==si&&($===He?a===!1?e.has("EXT_sRGB")===!0&&ie===$t?(L.format=yo,L.minFilter=Vt,L.generateMipmaps=!1):E=kc.sRGBToLinear(E):(ie!==$t||se!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",$)),E}this.allocateTextureUnit=B,this.resetTextureUnits=K,this.setTexture2D=X,this.setTexture2DArray=ae,this.setTexture3D=z,this.setTextureCube=Q,this.rebindTextures=st,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ge}function S_(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===ii)return 5121;if(s===ad)return 32819;if(s===ld)return 32820;if(s===sd)return 5120;if(s===rd)return 5122;if(s===Oc)return 5123;if(s===od)return 5124;if(s===ei)return 5125;if(s===ti)return 5126;if(s===ms)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===cd)return 6406;if(s===$t)return 6408;if(s===ud)return 6409;if(s===hd)return 6410;if(s===ni)return 6402;if(s===Ui)return 34041;if(s===yo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===dd)return 6403;if(s===fd)return 36244;if(s===pd)return 33319;if(s===md)return 33320;if(s===gd)return 36249;if(s===Mr||s===br||s===wr||s===Sr)if(o===He)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Mr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Mr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===br)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Sr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ya||s===Ma||s===ba||s===wa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ya)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ma)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ba)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_d)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Sa||s===Ea)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Sa)return o===He?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ea)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ta||s===Aa||s===Ca||s===La||s===Pa||s===Ra||s===Da||s===Ia||s===Na||s===za||s===Fa||s===Oa||s===Ba||s===Ua)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ta)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Aa)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ca)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===La)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pa)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ra)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Da)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ia)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Na)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===za)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fa)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Oa)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ba)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ua)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Er)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Er)return o===He?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===vd||s===ka||s===Ga||s===Va)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Er)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ka)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ga)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Va)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ii?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class E_ extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ks extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T_={type:"move"};class Kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n),_=this._getHandJoint(u,p);f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),m=.02,g=.005;u.inputState.pinching&&h>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(T_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ks;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class A_ extends Et{constructor(e,t,n,i,s,o,a,l,u,c){if(c=c!==void 0?c:ni,c!==ni&&c!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===ni&&(n=ei),n===void 0&&c===Ui&&(n=Ii),super(null,i,s,o,a,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1}}class C_ extends ai{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,m=null,g=null;const p=t.getContextAttributes();let f=null,_=null;const v=[],y=[],b=new Set,M=new Map,S=new Nt;S.layers.enable(1),S.viewport=new ut;const C=new Nt;C.layers.enable(2),C.viewport=new ut;const w=[S,C],T=new E_;T.layers.enable(1),T.layers.enable(2);let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Q=v[z];return Q===void 0&&(Q=new Kr,v[z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(z){let Q=v[z];return Q===void 0&&(Q=new Kr,v[z]=Q),Q.getGripSpace()},this.getHand=function(z){let Q=v[z];return Q===void 0&&(Q=new Kr,v[z]=Q),Q.getHandSpace()};function q(z){const Q=y.indexOf(z.inputSource);if(Q===-1)return;const ne=v[Q];ne!==void 0&&ne.dispatchEvent({type:z.type,data:z.inputSource})}function P(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",R);for(let z=0;z<v.length;z++){const Q=y[z];Q!==null&&(y[z]=null,v[z].disconnect(Q))}I=null,V=null,e.setRenderTarget(f),m=null,h=null,d=null,i=null,_=null,ae.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(z){u=z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",P),i.addEventListener("inputsourceschange",R),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:m}),_=new ri(m.framebufferWidth,m.framebufferHeight,{format:$t,type:ii,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let Q=null,ne=null,G=null;p.depth&&(G=p.stencil?35056:33190,Q=p.stencil?Ui:ni,ne=p.stencil?Ii:ei);const ue={colorFormat:32856,depthFormat:G,scaleFactor:s};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(ue),i.updateRenderState({layers:[h]}),_=new ri(h.textureWidth,h.textureHeight,{format:$t,type:ii,depthTexture:new A_(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const te=e.properties.get(_);te.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await i.requestReferenceSpace(a),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(z){for(let Q=0;Q<z.removed.length;Q++){const ne=z.removed[Q],G=y.indexOf(ne);G>=0&&(y[G]=null,v[G].disconnect(ne))}for(let Q=0;Q<z.added.length;Q++){const ne=z.added[Q];let G=y.indexOf(ne);if(G===-1){for(let te=0;te<v.length;te++)if(te>=y.length){y.push(ne),G=te;break}else if(y[te]===null){y[te]=ne,G=te;break}if(G===-1)break}const ue=v[G];ue&&ue.connect(ne)}}const N=new W,F=new W;function K(z,Q,ne){N.setFromMatrixPosition(Q.matrixWorld),F.setFromMatrixPosition(ne.matrixWorld);const G=N.distanceTo(F),ue=Q.projectionMatrix.elements,te=ne.projectionMatrix.elements,me=ue[14]/(ue[10]-1),pe=ue[14]/(ue[10]+1),we=(ue[9]+1)/ue[5],Ee=(ue[9]-1)/ue[5],Ce=(ue[8]-1)/ue[0],ze=(te[8]+1)/te[0],st=me*Ce,pt=me*ze,rt=G/(-Ce+ze),ot=rt*-Ce;Q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ot),z.translateZ(rt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const qe=me+rt,Ge=pe+rt,Tt=st-ot,mt=pt+(G-ot),L=we*pe/Ge*qe,E=Ee*pe/Ge*qe;z.projectionMatrix.makePerspective(Tt,mt,L,E,qe,Ge)}function B(z,Q){Q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;T.near=C.near=S.near=z.near,T.far=C.far=S.far=z.far,(I!==T.near||V!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,V=T.far);const Q=z.parent,ne=T.cameras;B(T,Q);for(let ue=0;ue<ne.length;ue++)B(ne[ue],Q);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),z.matrix.copy(T.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const G=z.children;for(let ue=0,te=G.length;ue<te;ue++)G[ue].updateMatrixWorld(!0);ne.length===2?K(T,S,C):T.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.getPlanes=function(){return b};let j=null;function X(z,Q){if(c=Q.getViewerPose(u||o),g=Q,c!==null){const ne=c.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let G=!1;ne.length!==T.cameras.length&&(T.cameras.length=0,G=!0);for(let ue=0;ue<ne.length;ue++){const te=ne[ue];let me=null;if(m!==null)me=m.getViewport(te);else{const we=d.getViewSubImage(h,te);me=we.viewport,ue===0&&(e.setRenderTargetTextures(_,we.colorTexture,h.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(_))}let pe=w[ue];pe===void 0&&(pe=new Nt,pe.layers.enable(ue),pe.viewport=new ut,w[ue]=pe),pe.matrix.fromArray(te.transform.matrix),pe.projectionMatrix.fromArray(te.projectionMatrix),pe.viewport.set(me.x,me.y,me.width,me.height),ue===0&&T.matrix.copy(pe.matrix),G===!0&&T.cameras.push(pe)}}for(let ne=0;ne<v.length;ne++){const G=y[ne],ue=v[ne];G!==null&&ue!==void 0&&ue.update(G,Q,u||o)}if(j&&j(z,Q),Q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let ne=null;for(const G of b)Q.detectedPlanes.has(G)||(ne===null&&(ne=[]),ne.push(G));if(ne!==null)for(const G of ne)b.delete(G),M.delete(G),n.dispatchEvent({type:"planeremoved",data:G});for(const G of Q.detectedPlanes)if(!b.has(G))b.add(G),M.set(G,Q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:G});else{const ue=M.get(G);G.lastChangedTime>ue&&(M.set(G,G.lastChangedTime),n.dispatchEvent({type:"planechanged",data:G}))}}g=null}const ae=new Zc;ae.setAnimationLoop(X),this.setAnimationLoop=function(z){j=z},this.dispose=function(){}}}function L_(r,e){function t(p,f){f.color.getRGB(p.fogColor.value,Xc(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,_,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),c(p,f)):f.isMeshPhongMaterial?(i(p,f),u(p,f)):f.isMeshStandardMaterial?(i(p,f),d(p,f),f.isMeshPhysicalMaterial&&h(p,f,y)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,_,v):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Ft&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Ft&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const b=r.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*b}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let v;f.map?v=f.map:f.specularMap?v=f.specularMap:f.displacementMap?v=f.displacementMap:f.normalMap?v=f.normalMap:f.bumpMap?v=f.bumpMap:f.roughnessMap?v=f.roughnessMap:f.metalnessMap?v=f.metalnessMap:f.alphaMap?v=f.alphaMap:f.emissiveMap?v=f.emissiveMap:f.clearcoatMap?v=f.clearcoatMap:f.clearcoatNormalMap?v=f.clearcoatNormalMap:f.clearcoatRoughnessMap?v=f.clearcoatRoughnessMap:f.iridescenceMap?v=f.iridescenceMap:f.iridescenceThicknessMap?v=f.iridescenceThicknessMap:f.specularIntensityMap?v=f.specularIntensityMap:f.specularColorMap?v=f.specularColorMap:f.transmissionMap?v=f.transmissionMap:f.thicknessMap?v=f.thicknessMap:f.sheenColorMap?v=f.sheenColorMap:f.sheenRoughnessMap&&(v=f.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let y;f.aoMap?y=f.aoMap:f.lightMap&&(y=f.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,_,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=v*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let y;f.map?y=f.map:f.alphaMap&&(y=f.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function c(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function h(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Ft&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function P_(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(v,y){const b=y.program;n.uniformBlockBinding(v,b)}function u(v,y){let b=i[v.id];b===void 0&&(g(v),b=c(v),i[v.id]=b,v.addEventListener("dispose",f));const M=y.program;n.updateUBOMapping(v,M);const S=e.render.frame;s[v.id]!==S&&(h(v),s[v.id]=S)}function c(v){const y=d();v.__bindingPointIndex=y;const b=r.createBuffer(),M=v.__size,S=v.usage;return r.bindBuffer(35345,b),r.bufferData(35345,M,S),r.bindBuffer(35345,null),r.bindBufferBase(35345,y,b),b}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=i[v.id],b=v.uniforms,M=v.__cache;r.bindBuffer(35345,y);for(let S=0,C=b.length;S<C;S++){const w=b[S];if(m(w,S,M)===!0){const T=w.__offset,I=Array.isArray(w.value)?w.value:[w.value];let V=0;for(let q=0;q<I.length;q++){const P=I[q],R=p(P);typeof P=="number"?(w.__data[0]=P,r.bufferSubData(35345,T+V,w.__data)):P.isMatrix3?(w.__data[0]=P.elements[0],w.__data[1]=P.elements[1],w.__data[2]=P.elements[2],w.__data[3]=P.elements[0],w.__data[4]=P.elements[3],w.__data[5]=P.elements[4],w.__data[6]=P.elements[5],w.__data[7]=P.elements[0],w.__data[8]=P.elements[6],w.__data[9]=P.elements[7],w.__data[10]=P.elements[8],w.__data[11]=P.elements[0]):(P.toArray(w.__data,V),V+=R.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,T,w.__data)}}r.bindBuffer(35345,null)}function m(v,y,b){const M=v.value;if(b[y]===void 0){if(typeof M=="number")b[y]=M;else{const S=Array.isArray(M)?M:[M],C=[];for(let w=0;w<S.length;w++)C.push(S[w].clone());b[y]=C}return!0}else if(typeof M=="number"){if(b[y]!==M)return b[y]=M,!0}else{const S=Array.isArray(b[y])?b[y]:[b[y]],C=Array.isArray(M)?M:[M];for(let w=0;w<S.length;w++){const T=S[w];if(T.equals(C[w])===!1)return T.copy(C[w]),!0}}return!1}function g(v){const y=v.uniforms;let b=0;const M=16;let S=0;for(let C=0,w=y.length;C<w;C++){const T=y[C],I={boundary:0,storage:0},V=Array.isArray(T.value)?T.value:[T.value];for(let q=0,P=V.length;q<P;q++){const R=V[q],N=p(R);I.boundary+=N.boundary,I.storage+=N.storage}if(T.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=b,C>0){S=b%M;const q=M-S;S!==0&&q-I.boundary<0&&(b+=M-S,T.__offset=b)}b+=I.storage}return S=b%M,S>0&&(b+=M-S),v.__size=b,v.__cache={},this}function p(v){const y={boundary:0,storage:0};return typeof v=="number"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function f(v){const y=v.target;y.removeEventListener("dispose",f);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function _(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:u,dispose:_}}function R_(){const r=tr("canvas");return r.style.display="block",r}function zo(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:R_(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=r.alpha!==void 0?r.alpha:!1;let d=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=si,this.useLegacyLights=!0,this.toneMapping=En,this.toneMappingExposure=1;const p=this;let f=!1,_=0,v=0,y=null,b=-1,M=null;const S=new ut,C=new ut;let w=null,T=e.width,I=e.height,V=1,q=null,P=null;const R=new ut(0,0,T,I),N=new ut(0,0,T,I);let F=!1;const K=new Io;let B=!1,j=!1,X=null;const ae=new tt,z=new W,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return y===null?V:1}let G=t;function ue(A,H){for(let Y=0;Y<A.length;Y++){const k=A[Y],J=e.getContext(k,H);if(J!==null)return J}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Po}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",ve,!1),G===null){const H=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&H.shift(),G=ue(H,A),G===null)throw ue(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let te,me,pe,we,Ee,Ce,ze,st,pt,rt,ot,qe,Ge,Tt,mt,L,E,$,ie,se,le,Me,D,U;function he(){te=new Vm(G),me=new zm(G,te,r),te.init(me),Me=new S_(G,te,me),pe=new b_(G,te,me),we=new qm,Ee=new l_,Ce=new w_(G,te,pe,Ee,me,Me,we),ze=new Om(p),st=new Gm(p),pt=new Jd(G,me),D=new Im(G,te,pt,me),rt=new Wm(G,pt,we,D),ot=new $m(G,rt,pt,we),ie=new Ym(G,me,Ce),L=new Fm(Ee),qe=new a_(p,ze,st,te,me,D,L),Ge=new L_(p,Ee),Tt=new u_,mt=new g_(te,me),$=new Dm(p,ze,st,pe,ot,c,o),E=new M_(p,ot,me),U=new P_(G,we,me,pe),se=new Nm(G,te,we,me),le=new Hm(G,te,we,me),we.programs=qe.programs,p.capabilities=me,p.extensions=te,p.properties=Ee,p.renderLists=Tt,p.shadowMap=E,p.state=pe,p.info=we}he();const oe=new C_(p,G);this.xr=oe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(T,I,!1))},this.getSize=function(A){return A.set(T,I)},this.setSize=function(A,H,Y=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=A,I=H,e.width=Math.floor(A*V),e.height=Math.floor(H*V),Y===!0&&(e.style.width=A+"px",e.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(T*V,I*V).floor()},this.setDrawingBufferSize=function(A,H,Y){T=A,I=H,V=Y,e.width=Math.floor(A*Y),e.height=Math.floor(H*Y),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,H,Y,k){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,H,Y,k),pe.viewport(S.copy(R).multiplyScalar(V).floor())},this.getScissor=function(A){return A.copy(N)},this.setScissor=function(A,H,Y,k){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,H,Y,k),pe.scissor(C.copy(N).multiplyScalar(V).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(A){pe.setScissorTest(F=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){P=A},this.getClearColor=function(A){return A.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(A=!0,H=!0,Y=!0){let k=0;A&&(k|=16384),H&&(k|=256),Y&&(k|=1024),G.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",ve,!1),Tt.dispose(),mt.dispose(),Ee.dispose(),ze.dispose(),st.dispose(),ot.dispose(),D.dispose(),U.dispose(),qe.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ee),oe.removeEventListener("sessionend",de),X&&(X.dispose(),X=null),ge.stop()};function _e(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const A=we.autoReset,H=E.enabled,Y=E.autoUpdate,k=E.needsUpdate,J=E.type;he(),we.autoReset=A,E.enabled=H,E.autoUpdate=Y,E.needsUpdate=k,E.type=J}function ve(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Re(A){const H=A.target;H.removeEventListener("dispose",Re),Fe(H)}function Fe(A){ke(A),Ee.remove(A)}function ke(A){const H=Ee.get(A).programs;H!==void 0&&(H.forEach(function(Y){qe.releaseProgram(Y)}),A.isShaderMaterial&&qe.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,Y,k,J,be){H===null&&(H=Q);const Se=J.isMesh&&J.matrixWorld.determinant()<0,Le=mu(A,H,Y,k,J);pe.setMaterial(k,Se);let Pe=Y.index,Oe=1;k.wireframe===!0&&(Pe=rt.getWireframeAttribute(Y),Oe=2);const De=Y.drawRange,Ie=Y.attributes.position;let Ye=De.start*Oe,At=(De.start+De.count)*Oe;be!==null&&(Ye=Math.max(Ye,be.start*Oe),At=Math.min(At,(be.start+be.count)*Oe)),Pe!==null?(Ye=Math.max(Ye,0),At=Math.min(At,Pe.count)):Ie!=null&&(Ye=Math.max(Ye,0),At=Math.min(At,Ie.count));const hn=At-Ye;if(hn<0||hn===1/0)return;D.setup(J,k,Le,Y,Pe);let Gn,$e=se;if(Pe!==null&&(Gn=pt.get(Pe),$e=le,$e.setIndex(Gn)),J.isMesh)k.wireframe===!0?(pe.setLineWidth(k.wireframeLinewidth*ne()),$e.setMode(1)):$e.setMode(4);else if(J.isLine){let Ne=k.linewidth;Ne===void 0&&(Ne=1),pe.setLineWidth(Ne*ne()),J.isLineSegments?$e.setMode(1):J.isLineLoop?$e.setMode(2):$e.setMode(3)}else J.isPoints?$e.setMode(0):J.isSprite&&$e.setMode(4);if(J.isInstancedMesh)$e.renderInstances(Ye,hn,J.count);else if(Y.isInstancedBufferGeometry){const Ne=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,mr=Math.min(Y.instanceCount,Ne);$e.renderInstances(Ye,hn,mr)}else $e.render(Ye,hn)},this.compile=function(A,H){function Y(k,J,be){k.transparent===!0&&k.side===Dn&&k.forceSinglePass===!1?(k.side=Ft,k.needsUpdate=!0,Ut(k,J,be),k.side=On,k.needsUpdate=!0,Ut(k,J,be),k.side=Dn):Ut(k,J,be)}h=mt.get(A),h.init(),g.push(h),A.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),h.setupLights(p.useLegacyLights),A.traverse(function(k){const J=k.material;if(J)if(Array.isArray(J))for(let be=0;be<J.length;be++){const Se=J[be];Y(Se,A,k)}else Y(J,A,k)}),g.pop(),h=null};let O=null;function Z(A){O&&O(A)}function ee(){ge.stop()}function de(){ge.start()}const ge=new Zc;ge.setAnimationLoop(Z),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(A){O=A,oe.setAnimationLoop(A),A===null?ge.stop():ge.start()},oe.addEventListener("sessionstart",ee),oe.addEventListener("sessionend",de),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(H),H=oe.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,H,y),h=mt.get(A,g.length),h.init(),g.push(h),ae.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),K.setFromProjectionMatrix(ae),j=this.localClippingEnabled,B=L.init(this.clippingPlanes,j),d=Tt.get(A,m.length),d.init(),m.push(d),Ve(A,H,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(q,P),B===!0&&L.beginShadows();const Y=h.state.shadowsArray;if(E.render(Y,A,H),B===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(d,A),h.setupLights(p.useLegacyLights),H.isArrayCamera){const k=H.cameras;for(let J=0,be=k.length;J<be;J++){const Se=k[J];at(d,A,Se,Se.viewport)}}else at(d,A,H);y!==null&&(Ce.updateMultisampleRenderTarget(y),Ce.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(p,A,H),D.resetDefaultState(),b=-1,M=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Ve(A,H,Y,k){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){k&&z.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ae);const Se=ot.update(A),Le=A.material;Le.visible&&d.push(A,Se,Le,Y,z.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==we.render.frame&&(A.skeleton.update(),A.skeleton.frame=we.render.frame),!A.frustumCulled||K.intersectsObject(A))){k&&z.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ae);const Se=ot.update(A),Le=A.material;if(Array.isArray(Le)){const Pe=Se.groups;for(let Oe=0,De=Pe.length;Oe<De;Oe++){const Ie=Pe[Oe],Ye=Le[Ie.materialIndex];Ye&&Ye.visible&&d.push(A,Se,Ye,Y,z.z,Ie)}}else Le.visible&&d.push(A,Se,Le,Y,z.z,null)}}const be=A.children;for(let Se=0,Le=be.length;Se<Le;Se++)Ve(be[Se],H,Y,k)}function at(A,H,Y,k){const J=A.opaque,be=A.transmissive,Se=A.transparent;h.setupLightsView(Y),B===!0&&L.setGlobalState(p.clippingPlanes,Y),be.length>0&&gt(J,H,Y),k&&pe.viewport(S.copy(k)),J.length>0&&Kt(J,H,Y),be.length>0&&Kt(be,H,Y),Se.length>0&&Kt(Se,H,Y),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function gt(A,H,Y){const k=me.isWebGL2;X===null&&(X=new ri(1024,1024,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?ms:ii,minFilter:ps,samples:k&&s===!0?4:0}));const J=p.getRenderTarget();p.setRenderTarget(X),p.clear();const be=p.toneMapping;p.toneMapping=En,Kt(A,H,Y),p.toneMapping=be,Ce.updateMultisampleRenderTarget(X),Ce.updateRenderTargetMipmap(X),p.setRenderTarget(J)}function Kt(A,H,Y){const k=H.isScene===!0?H.overrideMaterial:null;for(let J=0,be=A.length;J<be;J++){const Se=A[J],Le=Se.object,Pe=Se.geometry,Oe=k===null?Se.material:k,De=Se.group;Le.layers.test(Y.layers)&&Xe(Le,H,Y,Pe,Oe,De)}}function Xe(A,H,Y,k,J,be){A.onBeforeRender(p,H,Y,k,J,be),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(p,H,Y,k,A,be),J.transparent===!0&&J.side===Dn&&J.forceSinglePass===!1?(J.side=Ft,J.needsUpdate=!0,p.renderBufferDirect(Y,H,k,J,A,be),J.side=On,J.needsUpdate=!0,p.renderBufferDirect(Y,H,k,J,A,be),J.side=Dn):p.renderBufferDirect(Y,H,k,J,A,be),A.onAfterRender(p,H,Y,k,J,be)}function Ut(A,H,Y){H.isScene!==!0&&(H=Q);const k=Ee.get(A),J=h.state.lights,be=h.state.shadowsArray,Se=J.state.version,Le=qe.getParameters(A,J.state,be,H,Y),Pe=qe.getProgramCacheKey(Le);let Oe=k.programs;k.environment=A.isMeshStandardMaterial?H.environment:null,k.fog=H.fog,k.envMap=(A.isMeshStandardMaterial?st:ze).get(A.envMap||k.environment),Oe===void 0&&(A.addEventListener("dispose",Re),Oe=new Map,k.programs=Oe);let De=Oe.get(Pe);if(De!==void 0){if(k.currentProgram===De&&k.lightsStateVersion===Se)return Jt(A,Le),De}else Le.uniforms=qe.getUniforms(A),A.onBuild(Y,Le,p),A.onBeforeCompile(Le,p),De=qe.acquireProgram(Le,Pe),Oe.set(Pe,De),k.uniforms=Le.uniforms;const Ie=k.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=L.uniform),Jt(A,Le),k.needsLights=_u(A),k.lightsStateVersion=Se,k.needsLights&&(Ie.ambientLightColor.value=J.state.ambient,Ie.lightProbe.value=J.state.probe,Ie.directionalLights.value=J.state.directional,Ie.directionalLightShadows.value=J.state.directionalShadow,Ie.spotLights.value=J.state.spot,Ie.spotLightShadows.value=J.state.spotShadow,Ie.rectAreaLights.value=J.state.rectArea,Ie.ltc_1.value=J.state.rectAreaLTC1,Ie.ltc_2.value=J.state.rectAreaLTC2,Ie.pointLights.value=J.state.point,Ie.pointLightShadows.value=J.state.pointShadow,Ie.hemisphereLights.value=J.state.hemi,Ie.directionalShadowMap.value=J.state.directionalShadowMap,Ie.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ie.spotShadowMap.value=J.state.spotShadowMap,Ie.spotLightMatrix.value=J.state.spotLightMatrix,Ie.spotLightMap.value=J.state.spotLightMap,Ie.pointShadowMap.value=J.state.pointShadowMap,Ie.pointShadowMatrix.value=J.state.pointShadowMatrix);const Ye=De.getUniforms(),At=$s.seqWithValue(Ye.seq,Ie);return k.currentProgram=De,k.uniformsList=At,De}function Jt(A,H){const Y=Ee.get(A);Y.outputEncoding=H.outputEncoding,Y.instancing=H.instancing,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function mu(A,H,Y,k,J){H.isScene!==!0&&(H=Q),Ce.resetTextureUnits();const be=H.fog,Se=k.isMeshStandardMaterial?H.environment:null,Le=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:si,Pe=(k.isMeshStandardMaterial?st:ze).get(k.envMap||Se),Oe=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,De=!!k.normalMap&&!!Y.attributes.tangent,Ie=!!Y.morphAttributes.position,Ye=!!Y.morphAttributes.normal,At=!!Y.morphAttributes.color,hn=k.toneMapped?p.toneMapping:En,Gn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,$e=Gn!==void 0?Gn.length:0,Ne=Ee.get(k),mr=h.state.lights;if(B===!0&&(j===!0||A!==M)){const Ct=A===M&&k.id===b;L.setState(k,A,Ct)}let lt=!1;k.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==mr.state.version||Ne.outputEncoding!==Le||J.isInstancedMesh&&Ne.instancing===!1||!J.isInstancedMesh&&Ne.instancing===!0||J.isSkinnedMesh&&Ne.skinning===!1||!J.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Pe||k.fog===!0&&Ne.fog!==be||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==L.numPlanes||Ne.numIntersection!==L.numIntersection)||Ne.vertexAlphas!==Oe||Ne.vertexTangents!==De||Ne.morphTargets!==Ie||Ne.morphNormals!==Ye||Ne.morphColors!==At||Ne.toneMapping!==hn||me.isWebGL2===!0&&Ne.morphTargetsCount!==$e)&&(lt=!0):(lt=!0,Ne.__version=k.version);let Vn=Ne.currentProgram;lt===!0&&(Vn=Ut(k,H,J));let Go=!1,qi=!1,gr=!1;const _t=Vn.getUniforms(),Wn=Ne.uniforms;if(pe.useProgram(Vn.program)&&(Go=!0,qi=!0,gr=!0),k.id!==b&&(b=k.id,qi=!0),Go||M!==A){if(_t.setValue(G,"projectionMatrix",A.projectionMatrix),me.logarithmicDepthBuffer&&_t.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,qi=!0,gr=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Ct=_t.map.cameraPosition;Ct!==void 0&&Ct.setValue(G,z.setFromMatrixPosition(A.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&_t.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||J.isSkinnedMesh)&&_t.setValue(G,"viewMatrix",A.matrixWorldInverse)}if(J.isSkinnedMesh){_t.setOptional(G,J,"bindMatrix"),_t.setOptional(G,J,"bindMatrixInverse");const Ct=J.skeleton;Ct&&(me.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),_t.setValue(G,"boneTexture",Ct.boneTexture,Ce),_t.setValue(G,"boneTextureSize",Ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const _r=Y.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0&&me.isWebGL2===!0)&&ie.update(J,Y,Vn),(qi||Ne.receiveShadow!==J.receiveShadow)&&(Ne.receiveShadow=J.receiveShadow,_t.setValue(G,"receiveShadow",J.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Wn.envMap.value=Pe,Wn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),qi&&(_t.setValue(G,"toneMappingExposure",p.toneMappingExposure),Ne.needsLights&&gu(Wn,gr),be&&k.fog===!0&&Ge.refreshFogUniforms(Wn,be),Ge.refreshMaterialUniforms(Wn,k,V,I,X),$s.upload(G,Ne.uniformsList,Wn,Ce)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&($s.upload(G,Ne.uniformsList,Wn,Ce),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&_t.setValue(G,"center",J.center),_t.setValue(G,"modelViewMatrix",J.modelViewMatrix),_t.setValue(G,"normalMatrix",J.normalMatrix),_t.setValue(G,"modelMatrix",J.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ct=k.uniformsGroups;for(let vr=0,vu=Ct.length;vr<vu;vr++)if(me.isWebGL2){const Vo=Ct[vr];U.update(Vo,Vn),U.bind(Vo,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function gu(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function _u(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,H,Y){Ee.get(A.texture).__webglTexture=H,Ee.get(A.depthTexture).__webglTexture=Y;const k=Ee.get(A);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=Y===void 0,k.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,H){const Y=Ee.get(A);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,Y=0){y=A,_=H,v=Y;let k=!0,J=null,be=!1,Se=!1;if(A){const Pe=Ee.get(A);Pe.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),k=!1):Pe.__webglFramebuffer===void 0?Ce.setupRenderTarget(A):Pe.__hasExternalTextures&&Ce.rebindTextures(A,Ee.get(A.texture).__webglTexture,Ee.get(A.depthTexture).__webglTexture);const Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Se=!0);const De=Ee.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(J=De[H],be=!0):me.isWebGL2&&A.samples>0&&Ce.useMultisampledRTT(A)===!1?J=Ee.get(A).__webglMultisampledFramebuffer:J=De,S.copy(A.viewport),C.copy(A.scissor),w=A.scissorTest}else S.copy(R).multiplyScalar(V).floor(),C.copy(N).multiplyScalar(V).floor(),w=F;if(pe.bindFramebuffer(36160,J)&&me.drawBuffers&&k&&pe.drawBuffers(A,J),pe.viewport(S),pe.scissor(C),pe.setScissorTest(w),be){const Pe=Ee.get(A.texture);G.framebufferTexture2D(36160,36064,34069+H,Pe.__webglTexture,Y)}else if(Se){const Pe=Ee.get(A.texture),Oe=H||0;G.framebufferTextureLayer(36160,36064,Pe.__webglTexture,Y||0,Oe)}b=-1},this.readRenderTargetPixels=function(A,H,Y,k,J,be,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Le=Le[Se]),Le){pe.bindFramebuffer(36160,Le);try{const Pe=A.texture,Oe=Pe.format,De=Pe.type;if(Oe!==$t&&Me.convert(Oe)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=De===ms&&(te.has("EXT_color_buffer_half_float")||me.isWebGL2&&te.has("EXT_color_buffer_float"));if(De!==ii&&Me.convert(De)!==G.getParameter(35738)&&!(De===ti&&(me.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-k&&Y>=0&&Y<=A.height-J&&G.readPixels(H,Y,k,J,Me.convert(Oe),Me.convert(De),be)}finally{const Pe=y!==null?Ee.get(y).__webglFramebuffer:null;pe.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(A,H,Y=0){const k=Math.pow(2,-Y),J=Math.floor(H.image.width*k),be=Math.floor(H.image.height*k);Ce.setTexture2D(H,0),G.copyTexSubImage2D(3553,Y,0,0,A.x,A.y,J,be),pe.unbindTexture()},this.copyTextureToTexture=function(A,H,Y,k=0){const J=H.image.width,be=H.image.height,Se=Me.convert(Y.format),Le=Me.convert(Y.type);Ce.setTexture2D(Y,0),G.pixelStorei(37440,Y.flipY),G.pixelStorei(37441,Y.premultiplyAlpha),G.pixelStorei(3317,Y.unpackAlignment),H.isDataTexture?G.texSubImage2D(3553,k,A.x,A.y,J,be,Se,Le,H.image.data):H.isCompressedTexture?G.compressedTexSubImage2D(3553,k,A.x,A.y,H.mipmaps[0].width,H.mipmaps[0].height,Se,H.mipmaps[0].data):G.texSubImage2D(3553,k,A.x,A.y,Se,Le,H.image),k===0&&Y.generateMipmaps&&G.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(A,H,Y,k,J=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=A.max.x-A.min.x+1,Se=A.max.y-A.min.y+1,Le=A.max.z-A.min.z+1,Pe=Me.convert(k.format),Oe=Me.convert(k.type);let De;if(k.isData3DTexture)Ce.setTexture3D(k,0),De=32879;else if(k.isDataArrayTexture)Ce.setTexture2DArray(k,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,k.flipY),G.pixelStorei(37441,k.premultiplyAlpha),G.pixelStorei(3317,k.unpackAlignment);const Ie=G.getParameter(3314),Ye=G.getParameter(32878),At=G.getParameter(3316),hn=G.getParameter(3315),Gn=G.getParameter(32877),$e=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;G.pixelStorei(3314,$e.width),G.pixelStorei(32878,$e.height),G.pixelStorei(3316,A.min.x),G.pixelStorei(3315,A.min.y),G.pixelStorei(32877,A.min.z),Y.isDataTexture||Y.isData3DTexture?G.texSubImage3D(De,J,H.x,H.y,H.z,be,Se,Le,Pe,Oe,$e.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(De,J,H.x,H.y,H.z,be,Se,Le,Pe,$e.data)):G.texSubImage3D(De,J,H.x,H.y,H.z,be,Se,Le,Pe,Oe,$e),G.pixelStorei(3314,Ie),G.pixelStorei(32878,Ye),G.pixelStorei(3316,At),G.pixelStorei(3315,hn),G.pixelStorei(32877,Gn),J===0&&k.generateMipmaps&&G.generateMipmap(De),pe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ce.setTextureCube(A,0):A.isData3DTexture?Ce.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ce.setTexture2DArray(A,0):Ce.setTexture2D(A,0),pe.unbindTexture()},this.resetState=function(){_=0,v=0,y=null,pe.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(zo.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class D_ extends zo{}D_.prototype.isWebGL1Renderer=!0;class I_ extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Fo extends kn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new W,h=new W,m=[],g=[],p=[],f=[];for(let _=0;_<=n;_++){const v=[],y=_/n;let b=0;_==0&&o==0?b=.5/t:_==n&&l==Math.PI&&(b=-.5/t);for(let M=0;M<=t;M++){const S=M/t;d.x=-e*Math.cos(i+S*s)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(i+S*s)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),p.push(h.x,h.y,h.z),f.push(S+b,1-y),v.push(u++)}c.push(v)}for(let _=0;_<n;_++)for(let v=0;v<t;v++){const y=c[_][v+1],b=c[_][v],M=c[_+1][v],S=c[_+1][v+1];(_!==0||o>0)&&m.push(y,b,S),(_!==n-1||l<Math.PI)&&m.push(b,M,S)}this.setIndex(m),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(p,3)),this.setAttribute("uv",new cn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tu extends li{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ue(16777215),this.specular=new Ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class N_ extends li{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class z_ extends li{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nu extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Jr=new tt,El=new W,Tl=new W;class F_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;El.setFromMatrixPosition(e.matrixWorld),t.position.copy(El),Tl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tl),t.updateMatrixWorld(),Jr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class O_ extends F_{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Mo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class B_ extends nu{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new O_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class U_ extends nu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Al{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Po);const Cl={type:"change"},Qr={type:"start"},Ll={type:"end"};class k_ extends ai{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:hi.ROTATE,TWO:hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",mt),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",mt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Cl),n.update(),s=i.NONE},this.update=function(){const D=new W,U=new Bn().setFromUnitVectors(e.up,new W(0,1,0)),he=U.clone().invert(),oe=new W,_e=new Bn,ye=2*Math.PI;return function(){const Re=n.object.position;D.copy(Re).sub(n.target),D.applyQuaternion(U),a.setFromVector3(D),n.autoRotate&&s===i.NONE&&T(C()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Fe=n.minAzimuthAngle,ke=n.maxAzimuthAngle;return isFinite(Fe)&&isFinite(ke)&&(Fe<-Math.PI?Fe+=ye:Fe>Math.PI&&(Fe-=ye),ke<-Math.PI?ke+=ye:ke>Math.PI&&(ke-=ye),Fe<=ke?a.theta=Math.max(Fe,Math.min(ke,a.theta)):a.theta=a.theta>(Fe+ke)/2?Math.max(Fe,a.theta):Math.min(ke,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),D.setFromSpherical(a),D.applyQuaternion(he),Re.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,d||oe.distanceToSquared(n.object.position)>o||8*(1-_e.dot(n.object.quaternion))>o?(n.dispatchEvent(Cl),oe.copy(n.object.position),_e.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",$),n.domElement.removeEventListener("pointerdown",st),n.domElement.removeEventListener("pointercancel",ot),n.domElement.removeEventListener("wheel",Tt),n.domElement.removeEventListener("pointermove",pt),n.domElement.removeEventListener("pointerup",rt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",mt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Al,l=new Al;let u=1;const c=new W;let d=!1;const h=new Te,m=new Te,g=new Te,p=new Te,f=new Te,_=new Te,v=new Te,y=new Te,b=new Te,M=[],S={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function w(){return Math.pow(.95,n.zoomSpeed)}function T(D){l.theta-=D}function I(D){l.phi-=D}const V=function(){const D=new W;return function(he,oe){D.setFromMatrixColumn(oe,0),D.multiplyScalar(-he),c.add(D)}}(),q=function(){const D=new W;return function(he,oe){n.screenSpacePanning===!0?D.setFromMatrixColumn(oe,1):(D.setFromMatrixColumn(oe,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(he),c.add(D)}}(),P=function(){const D=new W;return function(he,oe){const _e=n.domElement;if(n.object.isPerspectiveCamera){const ye=n.object.position;D.copy(ye).sub(n.target);let ve=D.length();ve*=Math.tan(n.object.fov/2*Math.PI/180),V(2*he*ve/_e.clientHeight,n.object.matrix),q(2*oe*ve/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(he*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),q(oe*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(D){n.object.isPerspectiveCamera?u/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(D){n.object.isPerspectiveCamera?u*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(D){h.set(D.clientX,D.clientY)}function K(D){v.set(D.clientX,D.clientY)}function B(D){p.set(D.clientX,D.clientY)}function j(D){m.set(D.clientX,D.clientY),g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const U=n.domElement;T(2*Math.PI*g.x/U.clientHeight),I(2*Math.PI*g.y/U.clientHeight),h.copy(m),n.update()}function X(D){y.set(D.clientX,D.clientY),b.subVectors(y,v),b.y>0?R(w()):b.y<0&&N(w()),v.copy(y),n.update()}function ae(D){f.set(D.clientX,D.clientY),_.subVectors(f,p).multiplyScalar(n.panSpeed),P(_.x,_.y),p.copy(f),n.update()}function z(D){D.deltaY<0?N(w()):D.deltaY>0&&R(w()),n.update()}function Q(D){let U=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,n.keyPanSpeed),U=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,-n.keyPanSpeed),U=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(n.keyPanSpeed,0),U=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(-n.keyPanSpeed,0),U=!0;break}U&&(D.preventDefault(),n.update())}function ne(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const D=.5*(M[0].pageX+M[1].pageX),U=.5*(M[0].pageY+M[1].pageY);h.set(D,U)}}function G(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const D=.5*(M[0].pageX+M[1].pageX),U=.5*(M[0].pageY+M[1].pageY);p.set(D,U)}}function ue(){const D=M[0].pageX-M[1].pageX,U=M[0].pageY-M[1].pageY,he=Math.sqrt(D*D+U*U);v.set(0,he)}function te(){n.enableZoom&&ue(),n.enablePan&&G()}function me(){n.enableZoom&&ue(),n.enableRotate&&ne()}function pe(D){if(M.length==1)m.set(D.pageX,D.pageY);else{const he=Me(D),oe=.5*(D.pageX+he.x),_e=.5*(D.pageY+he.y);m.set(oe,_e)}g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const U=n.domElement;T(2*Math.PI*g.x/U.clientHeight),I(2*Math.PI*g.y/U.clientHeight),h.copy(m)}function we(D){if(M.length===1)f.set(D.pageX,D.pageY);else{const U=Me(D),he=.5*(D.pageX+U.x),oe=.5*(D.pageY+U.y);f.set(he,oe)}_.subVectors(f,p).multiplyScalar(n.panSpeed),P(_.x,_.y),p.copy(f)}function Ee(D){const U=Me(D),he=D.pageX-U.x,oe=D.pageY-U.y,_e=Math.sqrt(he*he+oe*oe);y.set(0,_e),b.set(0,Math.pow(y.y/v.y,n.zoomSpeed)),R(b.y),v.copy(y)}function Ce(D){n.enableZoom&&Ee(D),n.enablePan&&we(D)}function ze(D){n.enableZoom&&Ee(D),n.enableRotate&&pe(D)}function st(D){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",pt),n.domElement.addEventListener("pointerup",rt)),ie(D),D.pointerType==="touch"?L(D):qe(D))}function pt(D){n.enabled!==!1&&(D.pointerType==="touch"?E(D):Ge(D))}function rt(D){se(D),M.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",pt),n.domElement.removeEventListener("pointerup",rt)),n.dispatchEvent(Ll),s=i.NONE}function ot(D){se(D)}function qe(D){let U;switch(D.button){case 0:U=n.mouseButtons.LEFT;break;case 1:U=n.mouseButtons.MIDDLE;break;case 2:U=n.mouseButtons.RIGHT;break;default:U=-1}switch(U){case ui.DOLLY:if(n.enableZoom===!1)return;K(D),s=i.DOLLY;break;case ui.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;B(D),s=i.PAN}else{if(n.enableRotate===!1)return;F(D),s=i.ROTATE}break;case ui.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;F(D),s=i.ROTATE}else{if(n.enablePan===!1)return;B(D),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Qr)}function Ge(D){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;j(D);break;case i.DOLLY:if(n.enableZoom===!1)return;X(D);break;case i.PAN:if(n.enablePan===!1)return;ae(D);break}}function Tt(D){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(D.preventDefault(),n.dispatchEvent(Qr),z(D),n.dispatchEvent(Ll))}function mt(D){n.enabled===!1||n.enablePan===!1||Q(D)}function L(D){switch(le(D),M.length){case 1:switch(n.touches.ONE){case hi.ROTATE:if(n.enableRotate===!1)return;ne(),s=i.TOUCH_ROTATE;break;case hi.PAN:if(n.enablePan===!1)return;G(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case hi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;te(),s=i.TOUCH_DOLLY_PAN;break;case hi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Qr)}function E(D){switch(le(D),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;pe(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;we(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ze(D),n.update();break;default:s=i.NONE}}function $(D){n.enabled!==!1&&D.preventDefault()}function ie(D){M.push(D)}function se(D){delete S[D.pointerId];for(let U=0;U<M.length;U++)if(M[U].pointerId==D.pointerId){M.splice(U,1);return}}function le(D){let U=S[D.pointerId];U===void 0&&(U=new Te,S[D.pointerId]=U),U.set(D.pageX,D.pageY)}function Me(D){const U=D.pointerId===M[0].pointerId?M[1]:M[0];return S[U.pointerId]}n.domElement.addEventListener("contextmenu",$),n.domElement.addEventListener("pointerdown",st),n.domElement.addEventListener("pointercancel",ot),n.domElement.addEventListener("wheel",Tt,{passive:!1}),this.update()}}class Zt{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new x);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new x);const n=this.elements,i=e.x,s=e.y,o=e.z;return t.x=n[0]*i+n[1]*s+n[2]*o,t.y=n[3]*i+n[4]*s+n[5]*o,t.z=n[6]*i+n[7]*s+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Zt);const n=this.elements,i=e.elements,s=t.elements,o=n[0],a=n[1],l=n[2],u=n[3],c=n[4],d=n[5],h=n[6],m=n[7],g=n[8],p=i[0],f=i[1],_=i[2],v=i[3],y=i[4],b=i[5],M=i[6],S=i[7],C=i[8];return s[0]=o*p+a*v+l*M,s[1]=o*f+a*y+l*S,s[2]=o*_+a*b+l*C,s[3]=u*p+c*v+d*M,s[4]=u*f+c*y+d*S,s[5]=u*_+c*b+d*C,s[6]=h*p+m*v+g*M,s[7]=h*f+m*y+g*S,s[8]=h*_+m*b+g*C,t}scale(e,t){t===void 0&&(t=new Zt);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new x);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let l=3;const u=l;let c;const d=4;let h;do{if(o=u-l,s[o+i*o]===0){for(a=o+1;a<u;a++)if(s[o+i*a]!==0){c=d;do h=d-c,s[h+i*o]+=s[h+i*a];while(--c);break}}if(s[o+i*o]!==0)for(a=o+1;a<u;a++){const m=s[o+i*a]/s[o+i*o];c=d;do h=d-c,s[h+i*a]=h<=o?0:s[h+i*a]-s[h+i*o]*m;while(--c)}}while(--l);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Zt);const t=3,n=6,i=G_;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let u;const c=n;let d;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){u=c;do d=c-u,i[d+n*s]+=i[d+n*o];while(--u);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const h=i[s+n*o]/i[s+n*s];u=c;do d=c-u,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*h;while(--u)}}while(--a);s=2;do{o=s-1;do{const h=i[s+n*o]/i[s+n*s];u=n;do d=n-u,i[d+n*o]=i[d+n*o]-i[d+n*s]*h;while(--u)}while(o--)}while(--s);s=2;do{const h=1/i[s+n*s];u=n;do d=n-u,i[d+n*s]=i[d+n*s]*h;while(--u)}while(s--);s=2;do{o=2;do{if(d=i[t+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,d)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,o=t+t,a=n+n,l=i+i,u=t*o,c=t*a,d=t*l,h=n*a,m=n*l,g=i*l,p=s*o,f=s*a,_=s*l,v=this.elements;return v[3*0+0]=1-(h+g),v[3*0+1]=c-_,v[3*0+2]=d+f,v[3*1+0]=c+_,v[3*1+1]=1-(u+g),v[3*1+2]=m-p,v[3*2+0]=d-f,v[3*2+1]=m+p,v[3*2+2]=1-(u+h),this}transpose(e){e===void 0&&(e=new Zt);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const G_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class x{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new x);const n=e.x,i=e.y,s=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*s-l*i,t.y=l*n-o*s,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new x(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new x(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Zt([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new x);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z;return(s-t)*(s-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new x);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new x),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new x),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new x),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=V_,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=W_;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Pl),Pl.almostEquals(e,t)}clone(){return new x(this.x,this.y,this.z)}}x.ZERO=new x(0,0,0);x.UNIT_X=new x(1,0,0);x.UNIT_Y=new x(0,1,0);x.UNIT_Z=new x(0,0,1);const V_=new x,W_=new x,Pl=new x;class Bt{constructor(e){e===void 0&&(e={}),this.lowerBound=new x,this.upperBound=new x,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(e[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<e.length;l++){let u=e[l];a&&(a.vmult(u,Rl),u=Rl),u.x>o.x&&(o.x=u.x),u.x<s.x&&(s.x=u.x),u.y>o.y&&(o.y=u.y),u.y<s.y&&(s.y=u.y),u.z>o.z&&(o.z=u.z),u.z<s.z&&(s.z=u.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Bt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,o=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,o,a,l){const u=this.lowerBound,c=this.upperBound;e.copy(u),t.set(c.x,u.y,u.z),n.set(c.x,c.y,u.z),i.set(u.x,c.y,c.z),s.set(c.x,u.y,c.z),o.set(u.x,c.y,u.z),a.set(u.x,u.y,c.z),l.copy(c)}toLocalFrame(e,t){const n=Dl,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],u=n[5],c=n[6],d=n[7];this.getCorners(i,s,o,a,l,u,c,d);for(let h=0;h!==8;h++){const m=n[h];e.pointToLocal(m,m)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=Dl,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],u=n[5],c=n[6],d=n[7];this.getCorners(i,s,o,a,l,u,c,d);for(let h=0;h!==8;h++){const m=n[h];e.pointToWorld(m,m)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,u=(this.lowerBound.y-n.y)*s,c=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,m=Math.max(Math.max(Math.min(a,l),Math.min(u,c)),Math.min(d,h)),g=Math.min(Math.min(Math.max(a,l),Math.max(u,c)),Math.max(d,h));return!(g<0||m>g)}}const Rl=new x,Dl=[new x,new x,new x,new x,new x,new x,new x,new x];class Il{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class iu{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class Je{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new x),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=H_,i=q_;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Je);const n=this.x,i=this.y,s=this.z,o=this.w,a=e.x,l=e.y,u=e.z,c=e.w;return t.x=n*c+o*a+i*u-s*l,t.y=i*c+o*l+s*a-n*u,t.z=s*c+o*u+n*l-i*a,t.w=o*c-n*a-i*l-s*u,t}inverse(e){e===void 0&&(e=new Je);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new Je),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new x);const n=e.x,i=e.y,s=e.z,o=this.x,a=this.y,l=this.z,u=this.w,c=u*n+a*s-l*i,d=u*i+l*n-o*s,h=u*s+o*i-a*n,m=-o*n-a*i-l*s;return t.x=c*u+m*-o+d*-l-h*-a,t.y=d*u+m*-a+h*-o-c*-l,t.z=h*u+m*-l+c*-a-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,u=this.w;switch(t){case"YZX":const c=o*a+l*u;if(c>.499&&(n=2*Math.atan2(o,u),i=Math.PI/2,s=0),c<-.499&&(n=-2*Math.atan2(o,u),i=-Math.PI/2,s=0),n===void 0){const d=o*o,h=a*a,m=l*l;n=Math.atan2(2*a*u-2*o*l,1-2*h-2*m),i=Math.asin(2*c),s=Math.atan2(2*o*u-2*a*l,1-2*d-2*m)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),u=Math.sin(t/2),c=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*u*c,this.y=s*u*a-l*o*c,this.z=s*o*c+l*u*a,this.w=s*o*a-l*u*c):i==="YXZ"?(this.x=l*o*a+s*u*c,this.y=s*u*a-l*o*c,this.z=s*o*c-l*u*a,this.w=s*o*a+l*u*c):i==="ZXY"?(this.x=l*o*a-s*u*c,this.y=s*u*a+l*o*c,this.z=s*o*c+l*u*a,this.w=s*o*a-l*u*c):i==="ZYX"?(this.x=l*o*a-s*u*c,this.y=s*u*a+l*o*c,this.z=s*o*c-l*u*a,this.w=s*o*a+l*u*c):i==="YZX"?(this.x=l*o*a+s*u*c,this.y=s*u*a+l*o*c,this.z=s*o*c-l*u*a,this.w=s*o*a-l*u*c):i==="XZY"&&(this.x=l*o*a-s*u*c,this.y=s*u*a-l*o*c,this.z=s*o*c+l*u*a,this.w=s*o*a+l*u*c),this}clone(){return new Je(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new Je);const i=this.x,s=this.y,o=this.z,a=this.w;let l=e.x,u=e.y,c=e.z,d=e.w,h,m,g,p,f;return m=i*l+s*u+o*c+a*d,m<0&&(m=-m,l=-l,u=-u,c=-c,d=-d),1-m>1e-6?(h=Math.acos(m),g=Math.sin(h),p=Math.sin((1-t)*h)/g,f=Math.sin(t*h)/g):(p=1-t,f=t),n.x=p*i+f*l,n.y=p*s+f*u,n.z=p*o+f*c,n.w=p*a+f*d,n}integrate(e,t,n,i){i===void 0&&(i=new Je);const s=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,u=this.y,c=this.z,d=this.w,h=t*.5;return i.x+=h*(s*d+o*c-a*u),i.y+=h*(o*d+a*l-s*c),i.z+=h*(a*d+s*u-o*l),i.w+=h*(-s*l-o*u-a*c),i}}const H_=new x,q_=new x,j_={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class fe{constructor(e){e===void 0&&(e={}),this.id=fe.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}fe.idCounter=0;fe.types=j_;class Be{constructor(e){e===void 0&&(e={}),this.position=new x,this.quaternion=new Je,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Be.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Be.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new x),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new x),n.vsub(e,i),t.conjugate(Nl),Nl.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new x),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new x),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new x),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const Nl=new Je;class hs extends fe{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=e;super({type:fe.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new x;for(let s=0;s!==e.length;s++){const o=e[s],a=o.length;for(let l=0;l!==a;l++){const u=(l+1)%a;t[o[l]].vsub(t[o[u]],i),i.normalize();let c=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){c=!0;break}c||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new x;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];hs.computeNormal(i,s,o,t)}static computeNormal(e,t,n,i){const s=new x,o=new x;t.vsub(e,o),n.vsub(t,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,o,a,l,u){const c=new x;let d=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){c.copy(n.faceNormals[g]),s.vmult(c,c);const p=c.dot(o);p>h&&(h=p,d=g)}const m=[];for(let g=0;g<n.faces[d].length;g++){const p=n.vertices[n.faces[d][g]],f=new x;f.copy(p),s.vmult(f,f),i.vadd(f,f),m.push(f)}d>=0&&this.clipFaceAgainstHull(o,e,t,m,a,l,u)}findSeparatingAxis(e,t,n,i,s,o,a,l){const u=new x,c=new x,d=new x,h=new x,m=new x,g=new x;let p=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let _=0;_!==f.uniqueAxes.length;_++){n.vmult(f.uniqueAxes[_],u);const v=f.testSepAxis(u,e,t,n,i,s);if(v===!1)return!1;v<p&&(p=v,o.copy(u))}else{const _=a?a.length:f.faces.length;for(let v=0;v<_;v++){const y=a?a[v]:v;u.copy(f.faceNormals[y]),n.vmult(u,u);const b=f.testSepAxis(u,e,t,n,i,s);if(b===!1)return!1;b<p&&(p=b,o.copy(u))}}if(e.uniqueAxes)for(let _=0;_!==e.uniqueAxes.length;_++){s.vmult(e.uniqueAxes[_],c);const v=f.testSepAxis(c,e,t,n,i,s);if(v===!1)return!1;v<p&&(p=v,o.copy(c))}else{const _=l?l.length:e.faces.length;for(let v=0;v<_;v++){const y=l?l[v]:v;c.copy(e.faceNormals[y]),s.vmult(c,c);const b=f.testSepAxis(c,e,t,n,i,s);if(b===!1)return!1;b<p&&(p=b,o.copy(c))}}for(let _=0;_!==f.uniqueEdges.length;_++){n.vmult(f.uniqueEdges[_],h);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],m),h.cross(m,g),!g.almostZero()){g.normalize();const y=f.testSepAxis(g,e,t,n,i,s);if(y===!1)return!1;y<p&&(p=y,o.copy(g))}}return i.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,s,o){const a=this;hs.project(a,e,n,i,eo),hs.project(t,e,s,o,to);const l=eo[0],u=eo[1],c=to[0],d=to[1];if(l<d||c<u)return!1;const h=l-d,m=c-u;return h<m?h:m}calculateLocalInertia(e,t){const n=new x,i=new x;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,o,a){const l=new x,u=new x,c=new x,d=new x,h=new x,m=new x,g=new x,p=new x,f=this,_=[],v=i,y=_;let b=-1,M=Number.MAX_VALUE;for(let I=0;I<f.faces.length;I++){l.copy(f.faceNormals[I]),n.vmult(l,l);const V=l.dot(e);V<M&&(M=V,b=I)}if(b<0)return;const S=f.faces[b];S.connectedFaces=[];for(let I=0;I<f.faces.length;I++)for(let V=0;V<f.faces[I].length;V++)S.indexOf(f.faces[I][V])!==-1&&I!==b&&S.connectedFaces.indexOf(I)===-1&&S.connectedFaces.push(I);const C=S.length;for(let I=0;I<C;I++){const V=f.vertices[S[I]],q=f.vertices[S[(I+1)%C]];V.vsub(q,u),c.copy(u),n.vmult(c,c),t.vadd(c,c),d.copy(this.faceNormals[b]),n.vmult(d,d),t.vadd(d,d),c.cross(d,h),h.negate(h),m.copy(V),n.vmult(m,m),t.vadd(m,m);const P=S.connectedFaces[I];g.copy(this.faceNormals[P]);const R=this.getPlaneConstantOfFace(P);p.copy(g),n.vmult(p,p);const N=R-p.dot(t);for(this.clipFaceAgainstPlane(v,y,p,N);v.length;)v.shift();for(;y.length;)v.push(y.shift())}g.copy(this.faceNormals[b]);const w=this.getPlaneConstantOfFace(b);p.copy(g),n.vmult(p,p);const T=w-p.dot(t);for(let I=0;I<v.length;I++){let V=p.dot(v[I])+T;if(V<=s&&(console.log(`clamped: depth=${V} to minDist=${s}`),V=s),V<=o){const q=v[I];if(V<=1e-6){const P={point:q,normal:p,depth:V};a.push(P)}}}}clipFaceAgainstPlane(e,t,n,i){let s,o;const a=e.length;if(a<2)return t;let l=e[e.length-1],u=e[0];s=n.dot(l)+i;for(let c=0;c<a;c++){if(u=e[c],o=n.dot(u)+i,s<0)if(o<0){const d=new x;d.copy(u),t.push(d)}else{const d=new x;l.lerp(u,s/(s-o),d),t.push(d)}else if(o<0){const d=new x;l.lerp(u,s/(s-o),d),t.push(d),t.push(u)}l=u,s=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new x);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new x);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let o,a,l,u,c,d,h=new x;for(let m=0;m<s.length;m++){h.copy(s[m]),t.vmult(h,h),e.vadd(h,h);const g=h;(o===void 0||g.x<o)&&(o=g.x),(u===void 0||g.x>u)&&(u=g.x),(a===void 0||g.y<a)&&(a=g.y),(c===void 0||g.y>c)&&(c=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,l),i.set(u,c,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new x);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const o=i[s];t.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];t.vmult(o,o)}}if(e)for(let s=0;s<n;s++){const o=i[s];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new x;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=i[a];const u=t[n[a][0]],c=new x;e.vsub(u,c);const d=l.dot(c),h=new x;o.vsub(u,h);const m=l.dot(h);if(d<0&&m>0||d>0&&m<0)return!1}return s?1:-1}static project(e,t,n,i,s){const o=e.vertices.length,a=X_;let l=0,u=0;const c=Y_,d=e.vertices;c.setZero(),Be.vectorToLocalFrame(n,i,t,a),Be.pointToLocalFrame(n,i,c,c);const h=c.dot(a);u=l=d[0].dot(a);for(let m=1;m<o;m++){const g=d[m].dot(a);g>l&&(l=g),g<u&&(u=g)}if(u-=h,l-=h,u>l){const m=u;u=l,l=m}s[0]=l,s[1]=u}}const eo=[],to=[];new x;const X_=new x,Y_=new x;class Gi extends fe{constructor(e){super({type:fe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=x,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new hs({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new x),Gi.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Pn.set(s[o][0],s[o][1],s[o][2]),t.vmult(Pn,Pn),e.vadd(Pn,Pn),n(Pn.x,Pn.y,Pn.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;en[0].set(s.x,s.y,s.z),en[1].set(-s.x,s.y,s.z),en[2].set(-s.x,-s.y,s.z),en[3].set(-s.x,-s.y,-s.z),en[4].set(s.x,-s.y,-s.z),en[5].set(s.x,s.y,-s.z),en[6].set(-s.x,s.y,-s.z),en[7].set(s.x,-s.y,s.z);const o=en[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=en[a];t.vmult(l,l),e.vadd(l,l);const u=l.x,c=l.y,d=l.z;u>i.x&&(i.x=u),c>i.y&&(i.y=c),d>i.z&&(i.z=d),u<n.x&&(n.x=u),c<n.y&&(n.y=c),d<n.z&&(n.z=d)}}}const Pn=new x,en=[new x,new x,new x,new x,new x,new x,new x,new x],Oo={DYNAMIC:1,STATIC:2,KINEMATIC:4},Bo={AWAKE:0,SLEEPY:1,SLEEPING:2};class ce extends iu{constructor(e){e===void 0&&(e={}),super(),this.id=ce.idCounter++,this.index=-1,this.world=null,this.vlambda=new x,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new x,this.previousPosition=new x,this.interpolatedPosition=new x,this.initPosition=new x,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new x,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new x,this.force=new x;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?ce.STATIC:ce.DYNAMIC,typeof e.type==typeof ce.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ce.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new x,this.quaternion=new Je,this.initQuaternion=new Je,this.previousQuaternion=new Je,this.interpolatedQuaternion=new Je,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new x,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new x,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new x,this.invInertia=new x,this.invInertiaWorld=new Zt,this.invMassSolve=0,this.invInertiaSolve=new x,this.invInertiaWorldSolve=new Zt,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new x(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new x(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Bt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new x,this.isTrigger=Boolean(e.isTrigger),e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ce.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ce.SLEEPING&&this.dispatchEvent(ce.wakeupEvent)}sleep(){this.sleepState=ce.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===ce.AWAKE&&n<i?(this.sleepState=ce.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ce.sleepyEvent)):t===ce.SLEEPY&&n>i?this.wakeUp():t===ce.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ce.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ce.SLEEPING||this.type===ce.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new x),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new x),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new x),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new x),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new x,s=new Je;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const o=e[s];o.updateBoundingSphereRadius();const a=t[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=$_,o=Z_,a=this.quaternion,l=this.aabb,u=K_;for(let c=0;c!==i;c++){const d=e[c];a.vmult(t[c],s),s.vadd(this.position,s),a.mult(n[c],o),d.calculateWorldAABB(s,o,u.lowerBound,u.upperBound),c===0?l.copy(u):l.extend(u)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=J_,i=Q_;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new x),this.type!==ce.DYNAMIC)return;this.sleepState===ce.SLEEPING&&this.wakeUp();const n=t0;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new x),this.type!==ce.DYNAMIC)return;const n=n0,i=i0;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===ce.DYNAMIC&&(this.sleepState===ce.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new x),this.type!==ce.DYNAMIC)return;this.sleepState===ce.SLEEPING&&this.wakeUp();const n=t,i=s0;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=r0;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new x),this.type!==ce.DYNAMIC)return;const n=o0,i=a0;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=l0;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Gi.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new x;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ce.DYNAMIC||this.type===ce.KINEMATIC)||this.sleepState===ce.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,u=this.quaternion,c=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,m=c*e;i.x+=a.x*m*h.x,i.y+=a.y*m*h.y,i.z+=a.z*m*h.z;const g=d.elements,p=this.angularFactor,f=l.x*p.x,_=l.y*p.y,v=l.z*p.z;s.x+=e*(g[0]*f+g[1]*_+g[2]*v),s.y+=e*(g[3]*f+g[4]*_+g[5]*v),s.z+=e*(g[6]*f+g[7]*_+g[8]*v),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,u.integrate(this.angularVelocity,e,this.angularFactor,u),t&&(n?u.normalizeFast():u.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ce.idCounter=0;ce.COLLIDE_EVENT_NAME="collide";ce.DYNAMIC=Oo.DYNAMIC;ce.STATIC=Oo.STATIC;ce.KINEMATIC=Oo.KINEMATIC;ce.AWAKE=Bo.AWAKE;ce.SLEEPY=Bo.SLEEPY;ce.SLEEPING=Bo.SLEEPING;ce.wakeupEvent={type:"wakeup"};ce.sleepyEvent={type:"sleepy"};ce.sleepEvent={type:"sleep"};const $_=new x,Z_=new Je,K_=new Bt,J_=new Zt,Q_=new Zt,e0=new Zt,t0=new x,n0=new x,i0=new x,s0=new x,r0=new x,o0=new x,a0=new x,l0=new x;class c0{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&ce.STATIC)!==0||e.sleepState===ce.SLEEPING)&&((t.type&ce.STATIC)!==0||t.sleepState===ce.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=u0;t.position.vsub(e.position,s);const o=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=h0,i=d0,s=f0,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const l=i[a].id,u=s[a].id,c=l<u?`${l},${u}`:`${u},${l}`;n[c]=a,n.keys.push(c)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),u=n[l];e.push(i[u]),t.push(s[u]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new x;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const u0=new x;new x;new Je;new x;const h0={keys:[]},d0=[],f0=[];new x;new x;new x;class p0 extends c0{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let u=0;u!==l;u++)o=i[l],a=i[u],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class nr{constructor(){this.rayFromWorld=new x,this.rayToWorld=new x,this.hitNormalWorld=new x,this.hitPointWorld=new x,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let su,ru,ou,au,lu,cu,uu;const Uo={CLOSEST:1,ANY:2,ALL:4};su=fe.types.SPHERE;ru=fe.types.PLANE;ou=fe.types.BOX;au=fe.types.CYLINDER;lu=fe.types.CONVEXPOLYHEDRON;cu=fe.types.HEIGHTFIELD;uu=fe.types.TRIMESH;class Ke{get[su](){return this._intersectSphere}get[ru](){return this._intersectPlane}get[ou](){return this._intersectBox}get[au](){return this._intersectConvex}get[lu](){return this._intersectConvex}get[cu](){return this._intersectHeightfield}get[uu](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new x),t===void 0&&(t=new x),this.from=e.clone(),this.to=t.clone(),this.direction=new x,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ke.ANY,this.result=new nr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||Ke.ANY,this.result=t.result||new nr,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(zl),no.length=0,e.broadphase.aabbQuery(e,zl,no),this.intersectBodies(no),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=m0,s=g0;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(l,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(P0(s,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const o=this.from,a=this.to,l=this.direction,u=new x(0,0,1);t.vmult(u,u);const c=new x;o.vsub(n,c);const d=c.dot(u);a.vsub(n,c);const h=c.dot(u);if(d*h>0||o.distanceTo(a)<d)return;const m=u.dot(l);if(Math.abs(m)<this.precision)return;const g=new x,p=new x,f=new x;o.vsub(n,g);const _=-u.dot(g)/m;l.scale(_,p),o.vadd(p,f),this.reportIntersection(u,f,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const o=_0;o.from.copy(this.from),o.to.copy(this.to),Be.pointToLocalFrame(n,t,o.from,o.from),Be.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const a=v0;let l,u,c,d;l=u=0,c=d=e.data.length-1;const h=new Bt;o.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),u=Math.max(u,a[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),c=Math.min(c,a[0]+1),d=Math.min(d,a[1]+1);for(let m=l;m<c;m++)for(let g=u;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(m,g,h),!!h.overlapsRay(o)){if(e.getConvexTrianglePillar(m,g,!1),Be.pointToWorldFrame(n,t,e.pillarOffset,Gs),this._intersectConvex(e.pillarConvex,t,Gs,i,s,Fl),this.result.shouldStop)return;e.getConvexTrianglePillar(m,g,!0),Be.pointToWorldFrame(n,t,e.pillarOffset,Gs),this._intersectConvex(e.pillarConvex,t,Gs,i,s,Fl)}}}_intersectSphere(e,t,n,i,s){const o=this.from,a=this.to,l=e.radius,u=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,c=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=c**2-4*u*d,m=x0,g=y0;if(!(h<0))if(h===0)o.lerp(a,h,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{const p=(-c-Math.sqrt(h))/(2*u),f=(-c+Math.sqrt(h))/(2*u);if(p>=0&&p<=1&&(o.lerp(a,p,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(o.lerp(a,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(e,t,n,i,s,o){const a=M0,l=Ol,u=o&&o.faceList||null,c=e.faces,d=e.vertices,h=e.faceNormals,m=this.direction,g=this.from,p=this.to,f=g.distanceTo(p),_=u?u.length:c.length,v=this.result;for(let y=0;!v.shouldStop&&y<_;y++){const b=u?u[y]:y,M=c[b],S=h[b],C=t,w=n;l.copy(d[M[0]]),C.vmult(l,l),l.vadd(w,l),l.vsub(g,l),C.vmult(S,a);const T=m.dot(a);if(Math.abs(T)<this.precision)continue;const I=a.dot(l)/T;if(!(I<0)){m.scale(I,bt),bt.vadd(g,bt),jt.copy(d[M[0]]),C.vmult(jt,jt),w.vadd(jt,jt);for(let V=1;!v.shouldStop&&V<M.length-1;V++){tn.copy(d[M[V]]),nn.copy(d[M[V+1]]),C.vmult(tn,tn),C.vmult(nn,nn),w.vadd(tn,tn),w.vadd(nn,nn);const q=bt.distanceTo(g);!(Ke.pointInTriangle(bt,jt,tn,nn)||Ke.pointInTriangle(bt,tn,jt,nn))||q>f||this.reportIntersection(a,bt,s,i,b)}}}}_intersectTrimesh(e,t,n,i,s,o){const a=b0,l=C0,u=L0,c=Ol,d=w0,h=S0,m=E0,g=A0,p=T0,f=e.indices;e.vertices;const _=this.from,v=this.to,y=this.direction;u.position.copy(n),u.quaternion.copy(t),Be.vectorToLocalFrame(n,t,y,d),Be.pointToLocalFrame(n,t,_,h),Be.pointToLocalFrame(n,t,v,m),m.x*=e.scale.x,m.y*=e.scale.y,m.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,m.vsub(h,d),d.normalize();const b=h.distanceSquared(m);e.tree.rayQuery(this,u,l);for(let M=0,S=l.length;!this.result.shouldStop&&M!==S;M++){const C=l[M];e.getNormal(C,a),e.getVertex(f[C*3],jt),jt.vsub(h,c);const w=d.dot(a),T=a.dot(c)/w;if(T<0)continue;d.scale(T,bt),bt.vadd(h,bt),e.getVertex(f[C*3+1],tn),e.getVertex(f[C*3+2],nn);const I=bt.distanceSquared(h);!(Ke.pointInTriangle(bt,tn,jt,nn)||Ke.pointInTriangle(bt,jt,tn,nn))||I>b||(Be.vectorToWorldFrame(t,a,p),Be.pointToWorldFrame(n,t,bt,g),this.reportIntersection(p,g,s,i,C))}l.length=0}reportIntersection(e,t,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(t),u=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(u.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Ke.ALL:this.hasHit=!0,u.set(o,a,e,t,n,i,l),u.hasHit=!0,this.callback(u);break;case Ke.CLOSEST:(l<u.distance||!u.hasHit)&&(this.hasHit=!0,u.hasHit=!0,u.set(o,a,e,t,n,i,l));break;case Ke.ANY:this.hasHit=!0,u.hasHit=!0,u.set(o,a,e,t,n,i,l),u.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Jn),n.vsub(t,Qi),e.vsub(t,io);const s=Jn.dot(Jn),o=Jn.dot(Qi),a=Jn.dot(io),l=Qi.dot(Qi),u=Qi.dot(io);let c,d;return(c=l*a-o*u)>=0&&(d=s*u-o*a)>=0&&c+d<s*l-o*o}}Ke.CLOSEST=Uo.CLOSEST;Ke.ANY=Uo.ANY;Ke.ALL=Uo.ALL;const zl=new Bt,no=[],Qi=new x,io=new x,m0=new x,g0=new Je,bt=new x,jt=new x,tn=new x,nn=new x;new x;new nr;const Fl={faceList:[0]},Gs=new x,_0=new Ke,v0=[],x0=new x,y0=new x,M0=new x;new x;new x;const Ol=new x,b0=new x,w0=new x,S0=new x,E0=new x,T0=new x,A0=new x;new Bt;const C0=[],L0=new Be,Jn=new x,Vs=new x;function P0(r,e,t){t.vsub(r,Jn);const n=Jn.dot(e);return e.scale(n,Vs),Vs.vadd(r,Vs),t.distanceTo(Vs)}class hu{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class fr{constructor(e,t,n){n===void 0&&(n={}),n=hu.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=e,this.bodyB=t,this.id=fr.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(e&&e.wakeUp(),t&&t.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){const e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!0}disable(){const e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!1}}fr.idCounter=0;class Bl{constructor(){this.spatial=new x,this.rotational=new x}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Hi{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Hi.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Bl,this.jacobianElementB=new Bl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return e.spatial.dot(s)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,u=n.invMassSolve,c=i.invMassSolve;return s.scale(u,Ul),a.scale(c,kl),n.invInertiaWorldSolve.vmult(o,Gl),i.invInertiaWorldSolve.vmult(l,Vl),e.multiplyVectors(Ul,Gl)+t.multiplyVectors(kl,Vl)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let u=s+o;return a.vmult(e.rotational,Ws),u+=Ws.dot(e.rotational),l.vmult(t.rotational,Ws),u+=Ws.dot(t.rotational),u}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=R0;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Hi.idCounter=0;const Ul=new x,kl=new x,Gl=new x,Vl=new x,Ws=new x,R0=new x;class Zs extends Hi{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new x,this.rj=new x,this.ni=new x}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=D0,u=I0,c=i.velocity,d=i.angularVelocity;i.force,i.torque;const h=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=N0,p=this.jacobianElementA,f=this.jacobianElementB,_=this.ni;o.cross(_,l),a.cross(_,u),_.negate(p.spatial),l.negate(p.rotational),f.spatial.copy(_),f.rotational.copy(u),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const v=_.dot(g),y=this.restitution+1,b=y*h.dot(_)-y*c.dot(_)+m.dot(u)-d.dot(l),M=this.computeGiMf();return-v*t-b*n-e*M}getImpactVelocityAlongNormal(){const e=z0,t=F0,n=O0,i=B0,s=U0;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const D0=new x,I0=new x,N0=new x,z0=new x,F0=new x,O0=new x,B0=new x,U0=new x;class k0 extends fr{constructor(e,t,n,i,s){t===void 0&&(t=new x),i===void 0&&(i=new x),s===void 0&&(s=1e6),super(e,n),this.pivotA=t.clone(),this.pivotB=i.clone();const o=this.equationX=new Zs(e,n),a=this.equationY=new Zs(e,n),l=this.equationZ=new Zs(e,n);this.equations.push(o,a,l),o.minForce=a.minForce=l.minForce=-s,o.maxForce=a.maxForce=l.maxForce=s,o.ni.set(1,0,0),a.ni.set(0,1,0),l.ni.set(0,0,1)}update(){const e=this.bodyA,t=this.bodyB,n=this.equationX,i=this.equationY,s=this.equationZ;e.quaternion.vmult(this.pivotA,n.ri),t.quaternion.vmult(this.pivotB,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj)}}new x;new x;class so extends Hi{constructor(e,t,n){n===void 0&&(n={});const i=typeof n.maxForce<"u"?n.maxForce:1e6;super(e,t,-i,i),this.axisA=n.axisA?n.axisA.clone():new x(1,0,0),this.axisB=n.axisB?n.axisB.clone():new x(0,1,0),this.maxAngle=Math.PI/2}computeB(e){const t=this.a,n=this.b,i=this.axisA,s=this.axisB,o=G0,a=V0,l=this.jacobianElementA,u=this.jacobianElementB;i.cross(s,o),s.cross(i,a),l.rotational.copy(a),u.rotational.copy(o);const c=Math.cos(this.maxAngle)-i.dot(s),d=this.computeGW(),h=this.computeGiMf();return-c*t-d*n-e*h}}const G0=new x,V0=new x;new x;new x;class W0 extends k0{constructor(e,t,n){n===void 0&&(n={});const i=typeof n.maxForce<"u"?n.maxForce:1e6,s=new x,o=new x,a=new x;e.position.vadd(t.position,a),a.scale(.5,a),t.pointToLocalFrame(a,o),e.pointToLocalFrame(a,s),super(e,s,t,o,i),this.xA=e.vectorToLocalFrame(x.UNIT_X),this.xB=t.vectorToLocalFrame(x.UNIT_X),this.yA=e.vectorToLocalFrame(x.UNIT_Y),this.yB=t.vectorToLocalFrame(x.UNIT_Y),this.zA=e.vectorToLocalFrame(x.UNIT_Z),this.zB=t.vectorToLocalFrame(x.UNIT_Z);const l=this.rotationalEquation1=new so(e,t,n),u=this.rotationalEquation2=new so(e,t,n),c=this.rotationalEquation3=new so(e,t,n);this.equations.push(l,u,c)}update(){const e=this.bodyA,t=this.bodyB;this.motorEquation;const n=this.rotationalEquation1,i=this.rotationalEquation2,s=this.rotationalEquation3;super.update(),e.vectorToWorldFrame(this.xA,n.axisA),t.vectorToWorldFrame(this.yB,n.axisB),e.vectorToWorldFrame(this.yA,i.axisA),t.vectorToWorldFrame(this.zB,i.axisB),e.vectorToWorldFrame(this.zA,s.axisA),t.vectorToWorldFrame(this.xB,s.axisB)}}new x;new x;new x;new x;class Wl extends Hi{constructor(e,t,n){super(e,t,-n,n),this.ri=new x,this.rj=new x,this.t=new x}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=H0,o=q0,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,u=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),u.spatial.copy(a),u.rotational.copy(o);const c=this.computeGW(),d=this.computeGiMf();return-c*t-e*d}}const H0=new x,q0=new x;class pr{constructor(e,t,n){n=hu.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=pr.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}pr.idCounter=0;class ci{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=ci.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}ci.idCounter=0;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new Ke;new x;new x;new x;new x(1,0,0),new x(0,1,0),new x(0,0,1);new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;class j0 extends fe{constructor(e){if(super({type:fe.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new x);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=e[l]-s,i[l]=e[l]+s}}}new x;new x;new x;new x;new x;new x;new x;new x;new x;class X0 extends fe{constructor(){super({type:fe.types.PLANE}),this.worldNormal=new x,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new x),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){_n.set(0,0,1),t.vmult(_n,_n);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),_n.x===1?i.x=e.x:_n.x===-1&&(n.x=e.x),_n.y===1?i.y=e.y:_n.y===-1&&(n.y=e.y),_n.z===1?i.z=e.z:_n.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const _n=new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new Bt;new x;new Bt;new x;new x;new x;new x;new x;new x;new x;new Bt;new x;new Be;new Bt;class Y0{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class $0 extends Y0{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,u=l.length,c=e;let d,h,m,g,p,f;if(a!==0)for(let b=0;b!==u;b++)l[b].updateSolveMassProperties();const _=K0,v=J0,y=Z0;_.length=a,v.length=a,y.length=a;for(let b=0;b!==a;b++){const M=o[b];y[b]=0,v[b]=M.computeB(c),_[b]=1/M.computeC()}if(a!==0){for(let S=0;S!==u;S++){const C=l[S],w=C.vlambda,T=C.wlambda;w.set(0,0,0),T.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let S=0;S!==a;S++){const C=o[S];d=v[S],h=_[S],f=y[S],p=C.computeGWlambda(),m=h*(d-p-C.eps*f),f+m<C.minForce?m=C.minForce-f:f+m>C.maxForce&&(m=C.maxForce-f),y[S]+=m,g+=m>0?m:-m,C.addToWlambda(m)}if(g*g<s)break}for(let S=0;S!==u;S++){const C=l[S],w=C.velocity,T=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),w.vadd(C.vlambda,w),C.wlambda.vmul(C.angularFactor,C.wlambda),T.vadd(C.wlambda,T)}let b=o.length;const M=1/c;for(;b--;)o[b].multiplier=y[b]*M}return n}}const Z0=[],K0=[],J0=[];ce.STATIC;class Q0{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class ev extends Q0{constructor(){super(...arguments),this.type=x}constructObject(){return new x}}const We={sphereSphere:fe.types.SPHERE,spherePlane:fe.types.SPHERE|fe.types.PLANE,boxBox:fe.types.BOX|fe.types.BOX,sphereBox:fe.types.SPHERE|fe.types.BOX,planeBox:fe.types.PLANE|fe.types.BOX,convexConvex:fe.types.CONVEXPOLYHEDRON,sphereConvex:fe.types.SPHERE|fe.types.CONVEXPOLYHEDRON,planeConvex:fe.types.PLANE|fe.types.CONVEXPOLYHEDRON,boxConvex:fe.types.BOX|fe.types.CONVEXPOLYHEDRON,sphereHeightfield:fe.types.SPHERE|fe.types.HEIGHTFIELD,boxHeightfield:fe.types.BOX|fe.types.HEIGHTFIELD,convexHeightfield:fe.types.CONVEXPOLYHEDRON|fe.types.HEIGHTFIELD,sphereParticle:fe.types.PARTICLE|fe.types.SPHERE,planeParticle:fe.types.PLANE|fe.types.PARTICLE,boxParticle:fe.types.BOX|fe.types.PARTICLE,convexParticle:fe.types.PARTICLE|fe.types.CONVEXPOLYHEDRON,cylinderCylinder:fe.types.CYLINDER,sphereCylinder:fe.types.SPHERE|fe.types.CYLINDER,planeCylinder:fe.types.PLANE|fe.types.CYLINDER,boxCylinder:fe.types.BOX|fe.types.CYLINDER,convexCylinder:fe.types.CONVEXPOLYHEDRON|fe.types.CYLINDER,heightfieldCylinder:fe.types.HEIGHTFIELD|fe.types.CYLINDER,particleCylinder:fe.types.PARTICLE|fe.types.CYLINDER,sphereTrimesh:fe.types.SPHERE|fe.types.TRIMESH,planeTrimesh:fe.types.PLANE|fe.types.TRIMESH};class tv{get[We.sphereSphere](){return this.sphereSphere}get[We.spherePlane](){return this.spherePlane}get[We.boxBox](){return this.boxBox}get[We.sphereBox](){return this.sphereBox}get[We.planeBox](){return this.planeBox}get[We.convexConvex](){return this.convexConvex}get[We.sphereConvex](){return this.sphereConvex}get[We.planeConvex](){return this.planeConvex}get[We.boxConvex](){return this.boxConvex}get[We.sphereHeightfield](){return this.sphereHeightfield}get[We.boxHeightfield](){return this.boxHeightfield}get[We.convexHeightfield](){return this.convexHeightfield}get[We.sphereParticle](){return this.sphereParticle}get[We.planeParticle](){return this.planeParticle}get[We.boxParticle](){return this.boxParticle}get[We.convexParticle](){return this.convexParticle}get[We.cylinderCylinder](){return this.convexConvex}get[We.sphereCylinder](){return this.sphereConvex}get[We.planeCylinder](){return this.planeConvex}get[We.boxCylinder](){return this.boxConvex}get[We.convexCylinder](){return this.convexConvex}get[We.heightfieldCylinder](){return this.heightfieldCylinder}get[We.particleCylinder](){return this.particleCylinder}get[We.sphereTrimesh](){return this.sphereTrimesh}get[We.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new ev,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new Zs(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const u=n.material||e.material,c=i.material||t.material;return u&&c&&u.restitution>=0&&c.restitution>=0&&(a.restitution=u.restitution*c.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial;let u=l.friction;const c=s.material||n.material,d=o.material||i.material;if(c&&d&&c.friction>=0&&d.friction>=0&&(u=c.friction*d.friction),u>0){const h=u*(a.frictionGravity||a.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,p=g.length?g.pop():new Wl(n,i,h*m),f=g.length?g.pop():new Wl(n,i,h*m);return p.bi=f.bi=n,p.bj=f.bj=i,p.minForce=f.minForce=-h*m,p.maxForce=f.maxForce=h*m,p.ri.copy(e.ri),p.rj.copy(e.rj),f.ri.copy(e.ri),f.rj.copy(e.rj),e.ni.tangents(p.t,f.t),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),f.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.enabled=f.enabled=e.enabled,t.push(p,f),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Xn.setZero(),Ei.setZero(),Ti.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(Xn.vadd(t.ni,Xn),Ei.vadd(t.ri,Ei),Ti.vadd(t.rj,Ti)):(Xn.vsub(t.ni,Xn),Ei.vadd(t.rj,Ei),Ti.vadd(t.ri,Ti));const o=1/e;Ei.scale(o,n.ri),Ti.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Xn.normalize(),Xn.tangents(n.t,i.t)}getContacts(e,t,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=sv,u=rv,c=nv,d=iv;for(let h=0,m=e.length;h!==m;h++){const g=e[h],p=t[h];let f=null;g.material&&p.material&&(f=n.getContactMaterial(g.material,p.material)||null);const _=g.type&ce.KINEMATIC&&p.type&ce.STATIC||g.type&ce.STATIC&&p.type&ce.KINEMATIC||g.type&ce.KINEMATIC&&p.type&ce.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],c),c.vadd(g.position,c);const y=g.shapes[v];for(let b=0;b<p.shapes.length;b++){p.quaternion.mult(p.shapeOrientations[b],u),p.quaternion.vmult(p.shapeOffsets[b],d),d.vadd(p.position,d);const M=p.shapes[b];if(!(y.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&y.collisionFilterGroup)||c.distanceTo(d)>y.boundingSphereRadius+M.boundingSphereRadius)continue;let S=null;y.material&&M.material&&(S=n.getContactMaterial(y.material,M.material)||null),this.currentContactMaterial=S||f||n.defaultContactMaterial;const C=y.type|M.type,w=this[C];if(w){let T=!1;y.type<M.type?T=w.call(this,y,M,c,d,l,u,g,p,y,M,_):T=w.call(this,M,y,d,c,u,l,p,g,y,M,_),T&&_&&(n.shapeOverlapKeeper.set(y.id,M.id),n.bodyOverlapKeeper.set(g.id,p.id))}}}}}sphereSphere(e,t,n,i,s,o,a,l,u,c,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const h=this.createContactEquation(a,l,e,t,u,c);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,n,i,s,o,a,l,u,c,d){const h=this.createContactEquation(a,l,e,t,u,c);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),n.vsub(i,Hs),h.ni.scale(h.ni.dot(Hs),Hl),Hs.vsub(Hl,h.rj),-Hs.dot(h.ni)<=e.radius){if(d)return!0;const m=h.ri,g=h.rj;m.vadd(n,m),m.vsub(a.position,m),g.vadd(i,g),g.vsub(l.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,n,i,s,o,a,l,u,c,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,o,a,l,e,t,d)}sphereBox(e,t,n,i,s,o,a,l,u,c,d){const h=this.v3pool,m=Rv;n.vsub(i,qs),t.getSideNormals(m,o);const g=e.radius;let p=!1;const f=Iv,_=Nv,v=zv;let y=null,b=0,M=0,S=0,C=null;for(let F=0,K=m.length;F!==K&&p===!1;F++){const B=Cv;B.copy(m[F]);const j=B.length();B.normalize();const X=qs.dot(B);if(X<j+g&&X>0){const ae=Lv,z=Pv;ae.copy(m[(F+1)%3]),z.copy(m[(F+2)%3]);const Q=ae.length(),ne=z.length();ae.normalize(),z.normalize();const G=qs.dot(ae),ue=qs.dot(z);if(G<Q&&G>-Q&&ue<ne&&ue>-ne){const te=Math.abs(X-j-g);if((C===null||te<C)&&(C=te,M=G,S=ue,y=j,f.copy(B),_.copy(ae),v.copy(z),b++,d))return!0}}}if(b){p=!0;const F=this.createContactEquation(a,l,e,t,u,c);f.scale(-g,F.ri),F.ni.copy(f),F.ni.negate(F.ni),f.scale(y,f),_.scale(M,_),f.vadd(_,f),v.scale(S,v),f.vadd(v,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let w=h.get();const T=Dv;for(let F=0;F!==2&&!p;F++)for(let K=0;K!==2&&!p;K++)for(let B=0;B!==2&&!p;B++)if(w.set(0,0,0),F?w.vadd(m[0],w):w.vsub(m[0],w),K?w.vadd(m[1],w):w.vsub(m[1],w),B?w.vadd(m[2],w):w.vsub(m[2],w),i.vadd(w,T),T.vsub(n,T),T.lengthSquared()<g*g){if(d)return!0;p=!0;const j=this.createContactEquation(a,l,e,t,u,c);j.ri.copy(T),j.ri.normalize(),j.ni.copy(j.ri),j.ri.scale(g,j.ri),j.rj.copy(w),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(l.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}h.release(w),w=null;const I=h.get(),V=h.get(),q=h.get(),P=h.get(),R=h.get(),N=m.length;for(let F=0;F!==N&&!p;F++)for(let K=0;K!==N&&!p;K++)if(F%3!==K%3){m[K].cross(m[F],I),I.normalize(),m[F].vadd(m[K],V),q.copy(n),q.vsub(V,q),q.vsub(i,q);const B=q.dot(I);I.scale(B,P);let j=0;for(;j===F%3||j===K%3;)j++;R.copy(n),R.vsub(P,R),R.vsub(V,R),R.vsub(i,R);const X=Math.abs(B),ae=R.length();if(X<m[j].length()&&ae<g){if(d)return!0;p=!0;const z=this.createContactEquation(a,l,e,t,u,c);V.vadd(P,z.rj),z.rj.copy(z.rj),R.negate(z.ni),z.ni.normalize(),z.ri.copy(z.rj),z.ri.vadd(i,z.ri),z.ri.vsub(n,z.ri),z.ri.normalize(),z.ri.scale(g,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),z.rj.vadd(i,z.rj),z.rj.vsub(l.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}h.release(I,V,q,P,R)}planeBox(e,t,n,i,s,o,a,l,u,c,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,o,a,l,e,t,d)}convexConvex(e,t,n,i,s,o,a,l,u,c,d,h,m){const g=Zv;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,o,g,h,m)){const p=[],f=Kv;e.clipAgainstHull(n,s,t,i,o,g,-100,100,p);let _=0;for(let v=0;v!==p.length;v++){if(d)return!0;const y=this.createContactEquation(a,l,e,t,u,c),b=y.ri,M=y.rj;g.negate(y.ni),p[v].normal.negate(f),f.scale(p[v].depth,f),p[v].point.vadd(f,b),M.copy(p[v].point),b.vsub(n,b),M.vsub(i,M),b.vadd(n,b),b.vsub(a.position,b),M.vadd(i,M),M.vsub(l.position,M),this.result.push(y),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}}sphereConvex(e,t,n,i,s,o,a,l,u,c,d){const h=this.v3pool;n.vsub(i,Fv);const m=t.faceNormals,g=t.faces,p=t.vertices,f=e.radius;let _=!1;for(let v=0;v!==p.length;v++){const y=p[v],b=kv;o.vmult(y,b),i.vadd(b,b);const M=Uv;if(b.vsub(n,M),M.lengthSquared()<f*f){if(d)return!0;_=!0;const S=this.createContactEquation(a,l,e,t,u,c);S.ri.copy(M),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(f,S.ri),b.vsub(i,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(a.position,S.ri),S.rj.vadd(i,S.rj),S.rj.vsub(l.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let v=0,y=g.length;v!==y&&_===!1;v++){const b=m[v],M=g[v],S=Gv;o.vmult(b,S);const C=Vv;o.vmult(p[M[0]],C),C.vadd(i,C);const w=Wv;S.scale(-f,w),n.vadd(w,w);const T=Hv;w.vsub(C,T);const I=T.dot(S),V=qv;if(n.vsub(C,V),I<0&&V.dot(S)>0){const q=[];for(let P=0,R=M.length;P!==R;P++){const N=h.get();o.vmult(p[M[P]],N),i.vadd(N,N),q.push(N)}if(Av(q,S,n)){if(d)return!0;_=!0;const P=this.createContactEquation(a,l,e,t,u,c);S.scale(-f,P.ri),S.negate(P.ni);const R=h.get();S.scale(-I,R);const N=h.get();S.scale(-f,N),n.vsub(i,P.rj),P.rj.vadd(N,P.rj),P.rj.vadd(R,P.rj),P.rj.vadd(i,P.rj),P.rj.vsub(l.position,P.rj),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),h.release(R),h.release(N),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);for(let F=0,K=q.length;F!==K;F++)h.release(q[F]);return}else for(let P=0;P!==M.length;P++){const R=h.get(),N=h.get();o.vmult(p[M[(P+1)%M.length]],R),o.vmult(p[M[(P+2)%M.length]],N),i.vadd(R,R),i.vadd(N,N);const F=Ov;N.vsub(R,F);const K=Bv;F.unit(K);const B=h.get(),j=h.get();n.vsub(R,j);const X=j.dot(K);K.scale(X,B),B.vadd(R,B);const ae=h.get();if(B.vsub(n,ae),X>0&&X*X<F.lengthSquared()&&ae.lengthSquared()<f*f){if(d)return!0;const z=this.createContactEquation(a,l,e,t,u,c);B.vsub(i,z.rj),B.vsub(n,z.ni),z.ni.normalize(),z.ni.scale(f,z.ri),z.rj.vadd(i,z.rj),z.rj.vsub(l.position,z.rj),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(let Q=0,ne=q.length;Q!==ne;Q++)h.release(q[Q]);h.release(R),h.release(N),h.release(B),h.release(ae),h.release(j);return}h.release(R),h.release(N),h.release(B),h.release(ae),h.release(j)}for(let P=0,R=q.length;P!==R;P++)h.release(q[P])}}}planeConvex(e,t,n,i,s,o,a,l,u,c,d){const h=jv,m=Xv;m.set(0,0,1),s.vmult(m,m);let g=0;const p=Yv;for(let f=0;f!==t.vertices.length;f++)if(h.copy(t.vertices[f]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,p),m.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(a,l,e,t,u,c),y=$v;m.scale(m.dot(p),y),h.vsub(y,y),y.vsub(n,v.ri),v.ni.copy(m),h.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,o,a,l,u,c,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,o,a,l,e,t,d)}sphereHeightfield(e,t,n,i,s,o,a,l,u,c,d){const h=t.data,m=e.radius,g=t.elementSize,p=cx,f=lx;Be.pointToLocalFrame(i,o,n,f);let _=Math.floor((f.x-m)/g)-1,v=Math.ceil((f.x+m)/g)+1,y=Math.floor((f.y-m)/g)-1,b=Math.ceil((f.y+m)/g)+1;if(v<0||b<0||_>h.length||y>h[0].length)return;_<0&&(_=0),v<0&&(v=0),y<0&&(y=0),b<0&&(b=0),_>=h.length&&(_=h.length-1),v>=h.length&&(v=h.length-1),b>=h[0].length&&(b=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const M=[];t.getRectMinMax(_,y,v,b,M);const S=M[0],C=M[1];if(f.z-m>C||f.z+m<S)return;const w=this.result;for(let T=_;T<v;T++)for(let I=y;I<b;I++){const V=w.length;let q=!1;if(t.getConvexTrianglePillar(T,I,!1),Be.pointToWorldFrame(i,o,t.pillarOffset,p),n.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(q=this.sphereConvex(e,t.pillarConvex,n,p,s,o,a,l,e,t,d)),d&&q||(t.getConvexTrianglePillar(T,I,!0),Be.pointToWorldFrame(i,o,t.pillarOffset,p),n.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(q=this.sphereConvex(e,t.pillarConvex,n,p,s,o,a,l,e,t,d)),d&&q))return!0;if(w.length-V>2)return}}boxHeightfield(e,t,n,i,s,o,a,l,u,c,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,o,a,l,e,t,d)}convexHeightfield(e,t,n,i,s,o,a,l,u,c,d){const h=t.data,m=t.elementSize,g=e.boundingSphereRadius,p=ox,f=ax,_=rx;Be.pointToLocalFrame(i,o,n,_);let v=Math.floor((_.x-g)/m)-1,y=Math.ceil((_.x+g)/m)+1,b=Math.floor((_.y-g)/m)-1,M=Math.ceil((_.y+g)/m)+1;if(y<0||M<0||v>h.length||b>h[0].length)return;v<0&&(v=0),y<0&&(y=0),b<0&&(b=0),M<0&&(M=0),v>=h.length&&(v=h.length-1),y>=h.length&&(y=h.length-1),M>=h[0].length&&(M=h[0].length-1),b>=h[0].length&&(b=h[0].length-1);const S=[];t.getRectMinMax(v,b,y,M,S);const C=S[0],w=S[1];if(!(_.z-g>w||_.z+g<C))for(let T=v;T<y;T++)for(let I=b;I<M;I++){let V=!1;if(t.getConvexTrianglePillar(T,I,!1),Be.pointToWorldFrame(i,o,t.pillarOffset,p),n.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(V=this.convexConvex(e,t.pillarConvex,n,p,s,o,a,l,null,null,d,f,null)),d&&V||(t.getConvexTrianglePillar(T,I,!0),Be.pointToWorldFrame(i,o,t.pillarOffset,p),n.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(V=this.convexConvex(e,t.pillarConvex,n,p,s,o,a,l,null,null,d,f,null)),d&&V))return!0}}sphereParticle(e,t,n,i,s,o,a,l,u,c,d){const h=tx;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=e.radius*e.radius){if(d)return!0;const g=this.createContactEquation(l,a,t,e,u,c);h.normalize(),g.rj.copy(h),g.rj.scale(e.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,o,a,l,u,c,d){const h=Jv;h.set(0,0,1),a.quaternion.vmult(h,h);const m=Qv;if(i.vsub(a.position,m),h.dot(m)<=0){if(d)return!0;const p=this.createContactEquation(l,a,t,e,u,c);p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0);const f=ex;h.scale(h.dot(i),f),i.vsub(f,f),p.rj.copy(f),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}boxParticle(e,t,n,i,s,o,a,l,u,c,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,o,a,l,e,t,d)}convexParticle(e,t,n,i,s,o,a,l,u,c,d){let h=-1;const m=ix,g=sx;let p=null;const f=nx;if(f.copy(i),f.vsub(n,f),s.conjugate(ql),ql.vmult(f,f),e.pointIsInside(f)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let _=0,v=e.faces.length;_!==v;_++){const y=[e.worldVertices[e.faces[_][0]]],b=e.worldFaceNormals[_];i.vsub(y[0],jl);const M=-b.dot(jl);if(p===null||Math.abs(M)<Math.abs(p)){if(d)return!0;p=M,h=_,m.copy(b)}}if(h!==-1){const _=this.createContactEquation(l,a,t,e,u,c);m.scale(p,g),g.vadd(i,g),g.vsub(n,g),_.rj.copy(g),m.negate(_.ni),_.ri.set(0,0,0);const v=_.ri,y=_.rj;v.vadd(i,v),v.vsub(l.position,v),y.vadd(n,y),y.vsub(a.position,y),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,o,a,l,u,c,d){return this.convexHeightfield(t,e,i,n,o,s,l,a,u,c,d)}particleCylinder(e,t,n,i,s,o,a,l,u,c,d){return this.convexParticle(t,e,i,n,o,s,l,a,u,c,d)}sphereTrimesh(e,t,n,i,s,o,a,l,u,c,d){const h=fv,m=pv,g=mv,p=gv,f=_v,_=vv,v=bv,y=dv,b=uv,M=wv;Be.pointToLocalFrame(i,o,n,f);const S=e.radius;v.lowerBound.set(f.x-S,f.y-S,f.z-S),v.upperBound.set(f.x+S,f.y+S,f.z+S),t.getTrianglesInAABB(v,M);const C=hv,w=e.radius*e.radius;for(let P=0;P<M.length;P++)for(let R=0;R<3;R++)if(t.getVertex(t.indices[M[P]*3+R],C),C.vsub(f,b),b.lengthSquared()<=w){if(y.copy(C),Be.pointToWorldFrame(i,o,y,C),C.vsub(n,b),d)return!0;let N=this.createContactEquation(a,l,e,t,u,c);N.ni.copy(b),N.ni.normalize(),N.ri.copy(N.ni),N.ri.scale(e.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.copy(C),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}for(let P=0;P<M.length;P++)for(let R=0;R<3;R++){t.getVertex(t.indices[M[P]*3+R],h),t.getVertex(t.indices[M[P]*3+(R+1)%3],m),m.vsub(h,g),f.vsub(m,_);const N=_.dot(g);f.vsub(h,_);let F=_.dot(g);if(F>0&&N<0&&(f.vsub(h,_),p.copy(g),p.normalize(),F=_.dot(p),p.scale(F,_),_.vadd(h,_),_.distanceTo(f)<e.radius)){if(d)return!0;const B=this.createContactEquation(a,l,e,t,u,c);_.vsub(f,B.ni),B.ni.normalize(),B.ni.scale(e.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),Be.pointToWorldFrame(i,o,_,_),_.vsub(l.position,B.rj),Be.vectorToWorldFrame(o,B.ni,B.ni),Be.vectorToWorldFrame(o,B.ri,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}const T=xv,I=yv,V=Mv,q=cv;for(let P=0,R=M.length;P!==R;P++){t.getTriangleVertices(M[P],T,I,V),t.getNormal(M[P],q),f.vsub(T,_);let N=_.dot(q);if(q.scale(N,_),f.vsub(_,_),N=_.distanceTo(f),Ke.pointInTriangle(_,T,I,V)&&N<e.radius){if(d)return!0;let F=this.createContactEquation(a,l,e,t,u,c);_.vsub(f,F.ni),F.ni.normalize(),F.ni.scale(e.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),Be.pointToWorldFrame(i,o,_,_),_.vsub(l.position,F.rj),Be.vectorToWorldFrame(o,F.ni,F.ni),Be.vectorToWorldFrame(o,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}M.length=0}planeTrimesh(e,t,n,i,s,o,a,l,u,c,d){const h=new x,m=ov;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,h);const p=new x;p.copy(h),Be.pointToWorldFrame(i,o,p,h);const f=av;if(h.vsub(n,f),m.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(a,l,e,t,u,c);v.ni.copy(m);const y=lv;m.scale(f.dot(m),y),h.vsub(y,y),v.ri.copy(y),v.ri.vsub(a.position,v.ri),v.rj.copy(h),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Xn=new x,Ei=new x,Ti=new x,nv=new x,iv=new x,sv=new Je,rv=new Je,ov=new x,av=new x,lv=new x,cv=new x,uv=new x;new x;const hv=new x,dv=new x,fv=new x,pv=new x,mv=new x,gv=new x,_v=new x,vv=new x,xv=new x,yv=new x,Mv=new x,bv=new Bt,wv=[],Hs=new x,Hl=new x,Sv=new x,Ev=new x,Tv=new x;function Av(r,e,t){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=Sv;r[(s+1)%i].vsub(o,a);const l=Ev;a.cross(e,l);const u=Tv;t.vsub(o,u);const c=l.dot(u);if(n===null||c>0&&n===!0||c<=0&&n===!1){n===null&&(n=c>0);continue}else return!1}return!0}const qs=new x,Cv=new x,Lv=new x,Pv=new x,Rv=[new x,new x,new x,new x,new x,new x],Dv=new x,Iv=new x,Nv=new x,zv=new x,Fv=new x,Ov=new x,Bv=new x,Uv=new x,kv=new x,Gv=new x,Vv=new x,Wv=new x,Hv=new x,qv=new x;new x;new x;const jv=new x,Xv=new x,Yv=new x,$v=new x,Zv=new x,Kv=new x,Jv=new x,Qv=new x,ex=new x,tx=new x,ql=new Je,nx=new x;new x;const ix=new x,jl=new x,sx=new x,rx=new x,ox=new x,ax=[0],lx=new x,cx=new x;class Xl{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let u=!1;const c=n[l];for(;c>i[a];)a++;u=c===i[a],u||Yl(e,c)}a=0;for(let l=0;l<o;l++){let u=!1;const c=i[l];for(;c>n[a];)a++;u=n[a]===c,u||Yl(t,c)}}}function Yl(r,e){r.push((e&4294901760)>>16,e&65535)}const ro=(r,e)=>r<e?`${r}-${e}`:`${e}-${r}`;class ux{constructor(){this.data={keys:[]}}get(e,t){const n=ro(e,t);return this.data[n]}set(e,t,n){const i=ro(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=ro(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class hx extends iu{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new x,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new x,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new p0,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new $0,this.constraints=[],this.narrowphase=new tv(this),this.collisionMatrix=new Il,this.collisionMatrixPrevious=new Il,this.bodyOverlapKeeper=new Xl,this.shapeOverlapKeeper=new Xl,this.contactmaterials=[],this.contactMaterialTable=new ux,this.defaultMaterial=new ci("default"),this.defaultContactMaterial=new pr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof nr?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=Ke.ALL,n.from=e,n.to=t,n.callback=i,oo.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=Ke.ANY,n.from=e,n.to=t,n.result=i,oo.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=Ke.CLOSEST,n.from=e,n.to=t,n.result=i,oo.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ce&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=Qe.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=Qe.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(Qe.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=gx,i=_x,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,u=this.doProfiling,c=this.profile,d=ce.DYNAMIC;let h=-1/0;const m=this.constraints,g=mx;l.length();const p=l.x,f=l.y,_=l.z;let v=0;for(u&&(h=Qe.now()),v=0;v!==s;v++){const P=o[v];if(P.type===d){const R=P.force,N=P.mass;R.x+=N*p,R.y+=N*f,R.z+=N*_}}for(let P=0,R=this.subsystems.length;P!==R;P++)this.subsystems[P].update();u&&(h=Qe.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),u&&(c.broadphase=Qe.now()-h);let y=m.length;for(v=0;v!==y;v++){const P=m[v];if(!P.collideConnected)for(let R=n.length-1;R>=0;R-=1)(P.bodyA===n[R]&&P.bodyB===i[R]||P.bodyB===n[R]&&P.bodyA===i[R])&&(n.splice(R,1),i.splice(R,1))}this.collisionMatrixTick(),u&&(h=Qe.now());const b=px,M=t.length;for(v=0;v!==M;v++)b.push(t[v]);t.length=0;const S=this.frictionEquations.length;for(v=0;v!==S;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,b,this.frictionEquations,g),u&&(c.narrowphase=Qe.now()-h),u&&(h=Qe.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const C=t.length;for(let P=0;P!==C;P++){const R=t[P],N=R.bi,F=R.bj,K=R.si,B=R.sj;let j;if(N.material&&F.material?j=this.getContactMaterial(N.material,F.material)||this.defaultContactMaterial:j=this.defaultContactMaterial,j.friction,N.material&&F.material&&(N.material.friction>=0&&F.material.friction>=0&&N.material.friction*F.material.friction,N.material.restitution>=0&&F.material.restitution>=0&&(R.restitution=N.material.restitution*F.material.restitution)),a.addEquation(R),N.allowSleep&&N.type===ce.DYNAMIC&&N.sleepState===ce.SLEEPING&&F.sleepState===ce.AWAKE&&F.type!==ce.STATIC){const X=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),ae=F.sleepSpeedLimit**2;X>=ae*2&&(N.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===ce.DYNAMIC&&F.sleepState===ce.SLEEPING&&N.sleepState===ce.AWAKE&&N.type!==ce.STATIC){const X=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),ae=N.sleepSpeedLimit**2;X>=ae*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(N,F,!0),this.collisionMatrixPrevious.get(N,F)||(es.body=F,es.contact=R,N.dispatchEvent(es),es.body=N,F.dispatchEvent(es)),this.bodyOverlapKeeper.set(N.id,F.id),this.shapeOverlapKeeper.set(K.id,B.id)}for(this.emitContactEvents(),u&&(c.makeContactConstraints=Qe.now()-h,h=Qe.now()),v=0;v!==s;v++){const P=o[v];P.wakeUpAfterNarrowphase&&(P.wakeUp(),P.wakeUpAfterNarrowphase=!1)}for(y=m.length,v=0;v!==y;v++){const P=m[v];P.update();for(let R=0,N=P.equations.length;R!==N;R++){const F=P.equations[R];a.addEquation(F)}}a.solve(e,this),u&&(c.solve=Qe.now()-h),a.removeAllEquations();const w=Math.pow;for(v=0;v!==s;v++){const P=o[v];if(P.type&d){const R=w(1-P.linearDamping,e),N=P.velocity;N.scale(R,N);const F=P.angularVelocity;if(F){const K=w(1-P.angularDamping,e);F.scale(K,F)}}}this.dispatchEvent(fx),u&&(h=Qe.now());const I=this.stepnumber%(this.quatNormalizeSkip+1)===0,V=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(e,I,V);this.clearForces(),this.broadphase.dirty=!0,u&&(c.integrate=Qe.now()-h),this.stepnumber+=1,this.dispatchEvent(dx);let q=!0;if(this.allowSleep)for(q=!1,v=0;v!==s;v++){const P=o[v];P.sleepTick(this.time),P.sleepState!==ce.SLEEPING&&(q=!0)}this.hasActiveBodies=q}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(vn,xn),e){for(let s=0,o=vn.length;s<o;s+=2)ts.bodyA=this.getBodyById(vn[s]),ts.bodyB=this.getBodyById(vn[s+1]),this.dispatchEvent(ts);ts.bodyA=ts.bodyB=null}if(t){for(let s=0,o=xn.length;s<o;s+=2)ns.bodyA=this.getBodyById(xn[s]),ns.bodyB=this.getBodyById(xn[s+1]),this.dispatchEvent(ns);ns.bodyA=ns.bodyB=null}vn.length=xn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(vn,xn),n){for(let s=0,o=vn.length;s<o;s+=2){const a=this.getShapeById(vn[s]),l=this.getShapeById(vn[s+1]);yn.shapeA=a,yn.shapeB=l,a&&(yn.bodyA=a.body),l&&(yn.bodyB=l.body),this.dispatchEvent(yn)}yn.bodyA=yn.bodyB=yn.shapeA=yn.shapeB=null}if(i){for(let s=0,o=xn.length;s<o;s+=2){const a=this.getShapeById(xn[s]),l=this.getShapeById(xn[s+1]);Mn.shapeA=a,Mn.shapeB=l,a&&(Mn.bodyA=a.body),l&&(Mn.bodyB=l.body),this.dispatchEvent(Mn)}Mn.bodyA=Mn.bodyB=Mn.shapeA=Mn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Bt;const oo=new Ke,Qe=globalThis.performance||{};if(!Qe.now){let r=Date.now();Qe.timing&&Qe.timing.navigationStart&&(r=Qe.timing.navigationStart),Qe.now=()=>Date.now()-r}new x;const dx={type:"postStep"},fx={type:"preStep"},es={type:ce.COLLIDE_EVENT_NAME,body:null,contact:null},px=[],mx=[],gx=[],_x=[],vn=[],xn=[],ts={type:"beginContact",bodyA:null,bodyB:null},ns={type:"endContact",bodyA:null,bodyB:null},yn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Mn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},wt=.5,Xt=.8,sn=.2,Dt=.05,Gt=.09,ao=.08,Ai=.015,ir=.01,du=.015,vx=.015,fu=.03,lo=.2,xx=8,yx=(Xt-fu*2-xx*du)/7,wo=r=>[r[0]/2,r[1]/2,r[2]/2],is=r=>new W(r==null?void 0:r.x,r==null?void 0:r.y,r==null?void 0:r.z),ss=r=>new Bn(r==null?void 0:r.x,r==null?void 0:r.y,r==null?void 0:r.z,r==null?void 0:r.w);function $l(r){return r.reduce((e,t)=>e+t,0)}function Mx(r,e){const t=[],n=Math.min(r.length,e.length);for(let i=0;i<n;i++)t.push(r[i]),t.push(e[i]);return r.length>e.length?t.push(...r.slice(n)):e.length>r.length&&t.push(...e.slice(n)),t}function bx({step:r,arr:e,numberItemOfGroup:t}){let n=[];for(let i=0;i<e.length-r;i=i+r)n.push(e.slice(i,i+t));return n}function Zl({min:r,max:e}){return Math.random()*(e-r)+r}var wx=0;function et(r,e,t,n,i){var s,o,a={};for(o in e)o=="ref"?s=e[o]:a[o]=e[o];var l={type:r,props:a,key:t,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--wx,__source:i,__self:n};if(typeof r=="function"&&(s=r.defaultProps))for(o in s)a[o]===void 0&&(a[o]=s[o]);return xe.vnode&&xe.vnode(l),l}const Rn=Array(8).fill(0).map((r,e)=>Xt/2-Dt-fu-e*yx);function pu(r="#027902"){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d");t&&(t.fillStyle=r,t.fillRect(0,0,64,64),t.fillStyle="rgba(0,0,0,0.2)",t.fillRect(0,0,32,32),t.fillRect(32,32,32,32));const n=new Et(e);return n.needsUpdate=!0,n}function Yn({size:r,position:e,rotation:t=[0,0,0]}){let n=new Un(...r),i=new tu({shininess:10,color:4014403});const s=new zt(n,i);return s.position.set(e[0],e[1],e[2]),s.rotation.set(t[0],t[1],t[2]),s.castShadow=!0,s.receiveShadow=!0,{mesh:s,body:new ce({position:new x(...e),type:ce.STATIC,material:new ci({friction:0,restitution:.8}),shape:new Gi(new x(...wo(r)))})}}const Kl=({numberOfMan:r,z:e,manMap:t=pu()})=>{let n=[],i=[];const s=r+1,o=Array(s).fill(0).map((c,d)=>(wt-Ai*r)/s+(d==0||d===s-1?lo:0));for(let c=0;c<s;c++){const d=-wt/2-lo+Ai*c+$l(o.slice(0,c))+o[c]/2,h={size:[o[c],du,vx],position:[d,sn+ao/2+ir/2,e]},m=new Un(...h.size);i.push({mesh:new zt(m,new Do({color:4014403})),body:new ce({shape:new Gi(new x(...wo(h.size))),position:new x(...h.position),type:ce.STATIC})})}for(let c=0;c<r;c++){const d=-wt/2-lo+Ai*c+$l(o.slice(0,c+1))+Ai/2,h={size:[Ai,ao,Ai],position:[d,sn+ao/2+ir/2,e]},m=new Un(...h.size),g=new zt(m,new tu({shininess:10,map:t,name:"box"})),p=new ce({shape:new Gi(new x(...wo(h.size))),mass:.01,material:new ci({friction:0,restitution:.5}),position:new x(...h.position)});g.userData.body=p,n.push({mesh:g,body:p})}const a=Mx(i,n),u=bx({arr:a,step:1,numberItemOfGroup:2}).map(([c,d])=>new W0(c.body,d.body));return{handlers:i,men:n,contraints:u}},Sx=()=>{const r=Yn({size:[wt,sn,Xt],position:[0,sn/2,0]}),e=Yn({size:[Dt,Gt,Xt],position:[wt/2-Dt/2,sn+Gt/2,0]}),t=Yn({size:[Dt,Gt,Xt],position:[-(wt/2-Dt/2),sn+Gt/2,0]}),n=Yn({size:[wt/3,Gt,Dt],position:[-wt/3,sn+Gt/2,-(Xt/2-Dt/2)]}),i=Yn({size:[wt/3,Gt,Dt],position:[wt/3,sn+Gt/2,-(Xt/2-Dt/2)]}),s=Yn({size:[wt/3,Gt,Dt],position:[wt/3,sn+Gt/2,Xt/2-Dt/2]}),o=Yn({size:[wt/3,Gt,Dt],position:[-wt/3,sn+Gt/2,Xt/2-Dt/2]});return{ground:r,rightWall:e,leftWall:t,topLeftWall:n,topRightWall:i,bottomLeftWall:o,bottomRightWall:s}},Ex=()=>{const r=It.useRef(null),e=It.useRef(),t=It.useRef(),n=It.useRef([]),i=It.useRef([]),s=It.useRef([]),o=It.useRef([]);It.useEffect(()=>{if(!r.current)return;const l=new hx({gravity:new x(0,-9.82,0)}),u=new I_,c=new zo({canvas:r.current,antialias:!0});c.setSize(window.innerWidth,window.innerHeight),c.shadowMap.enabled=!0,c.shadowMap.type=Ic,document.body.appendChild(c.domElement);const d=new U_(16777215,.8);u.add(d);const h=new B_(16777215,.7,0,Math.PI/4,1);h.position.set(10,30,20),h.target.position.set(0,0,0),h.castShadow=!0,h.shadow.camera.near=20,h.shadow.camera.far=50,h.shadow.camera.fov=40,h.shadow.bias=-.001,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,u.add(h);const m=new Nt(30,window.innerWidth/window.innerHeight,.5,1e3);m.position.set(0,2,1),new k_(m,r.current).update();const p=new hr(100,100,1,1);p.rotateX(-Math.PI/2);const f=new z_({color:7829367}),_=new zt(p,f);_.receiveShadow=!0,u.add(_);const v=new X0,y=new ce({mass:0});y.addShape(v),y.quaternion.setFromEuler(-Math.PI/2,0,0),l.addBody(y);const{ground:b,rightWall:M,leftWall:S,topLeftWall:C,topRightWall:w,bottomLeftWall:T,bottomRightWall:I}=Sx();u.add(b.mesh),l.addBody(b.body),u.add(M.mesh),l.addBody(M.body),u.add(S.mesh),l.addBody(S.body),u.add(C.mesh),l.addBody(C.body),u.add(w.mesh),l.addBody(w.body),u.add(T.mesh),l.addBody(T.body),u.add(I.mesh),l.addBody(I.body),e.current=new zt(new Fo(ir),new N_),u.add(e.current),t.current=new ce({mass:.02,shape:new j0(ir),position:new x(0,.2,0),material:new ci({friction:0,restitution:.7})}),l.addBody(t.current);const V=new x(Zl({min:-1,max:1}),0,Zl({min:-1,max:1}));t.current.velocity.copy(V),[{numberOfMan:1,z:Rn[0]},{numberOfMan:2,z:Rn[1]},{numberOfMan:5,z:Rn[3]},{numberOfMan:3,z:Rn[5]}].forEach(({numberOfMan:N,z:F})=>{const{handlers:K,men:B,contraints:j}=Kl({numberOfMan:N,z:F});n.current.push(...B),i.current.push(...K),K.forEach(X=>{l.addBody(X.body),u.add(X.mesh)}),B.forEach(X=>{l.addBody(X.body),u.add(X.mesh)}),j.forEach(X=>{l.addConstraint(X)})}),[{numberOfMan:1,z:Rn[7]},{numberOfMan:2,z:Rn[6]},{numberOfMan:5,z:Rn[4]},{numberOfMan:3,z:Rn[2]}].forEach(({numberOfMan:N,z:F})=>{const{handlers:K,men:B,contraints:j}=Kl({numberOfMan:N,z:F,manMap:pu("#960000")});s.current.push(...B),o.current.push(...K),K.forEach(X=>{l.addBody(X.body),u.add(X.mesh)}),B.forEach(X=>{l.addBody(X.body),u.add(X.mesh)}),j.forEach(X=>{l.addConstraint(X)})}),R();function R(){var N,F,K,B,j,X,ae,z,Q,ne,G,ue;((N=t.current)==null?void 0:N.position.z)&&((F=t.current)==null?void 0:F.position.z)>Xt/2&&console.log("RED WIN"),((K=t.current)==null?void 0:K.position.z)&&((B=t.current)==null?void 0:B.position.z)<-Xt/2&&console.log("GREEN WIN"),requestAnimationFrame(R),(X=e.current)==null||X.position.copy(is((j=t.current)==null?void 0:j.position)),(z=e.current)==null||z.quaternion.copy(ss((ae=t.current)==null?void 0:ae.quaternion)),(Q=i.current)==null||Q.forEach(te=>{te.mesh.position.copy(is(te.body.position)),te.mesh.quaternion.copy(ss(te.body.quaternion))}),(ne=n.current)==null||ne.forEach(te=>{te.mesh.position.copy(is(te.body.position)),te.mesh.quaternion.copy(ss(te.body.quaternion))}),(G=o.current)==null||G.forEach(te=>{te.mesh.position.copy(is(te.body.position)),te.mesh.quaternion.copy(ss(te.body.quaternion))}),(ue=s.current)==null||ue.forEach(te=>{te.mesh.position.copy(is(te.body.position)),te.mesh.quaternion.copy(ss(te.body.quaternion))}),c.render(u,m),l.step(1/60)}},[]);const a=l=>{var u,c,d,h,m,g,p,f,_,v,y,b;switch(l.key){case"ArrowLeft":{const M=new x(-.01,0,0);(u=i.current)==null||u.forEach(S=>{S.body.position.vadd(M,S.body.position)}),(c=n.current)==null||c.forEach(S=>{S.body.position.vadd(M,S.body.position)});break}case"ArrowRight":{const M=new x(.01,0,0);(d=i.current)==null||d.forEach(S=>{S.body.position.vadd(M,S.body.position)}),(h=n.current)==null||h.forEach(S=>{S.body.position.vadd(M,S.body.position)});break}case"a":{const M=new x(-.01,0,0);(m=o.current)==null||m.forEach(S=>{S.body.position.vadd(M,S.body.position)}),(g=s.current)==null||g.forEach(S=>{S.body.position.vadd(M,S.body.position)});break}case"d":{const M=new x(.01,0,0);(p=o.current)==null||p.forEach(S=>{S.body.position.vadd(M,S.body.position)}),(f=s.current)==null||f.forEach(S=>{S.body.position.vadd(M,S.body.position)});break}case",":{(_=n.current)==null||_.forEach(M=>{M.body.quaternion.setFromAxisAngle(new x(1,0,0),Math.PI/3)});break}case".":{(v=n.current)==null||v.forEach(M=>{M.body.quaternion.setFromAxisAngle(new x(1,0,0),-Math.PI/3)});break}case"h":{(y=s.current)==null||y.forEach(M=>{const S=M.body.quaternion.toAxisAngle()[1]||0;console.log(">Angle",S,Math.PI),!(S>Math.PI)&&M.body.quaternion.setFromAxisAngle(new x(1,0,0),-Math.PI/3)});break}case"j":{(b=s.current)==null||b.forEach(M=>{const S=M.body.quaternion.toAxisAngle()[1]||0;console.log(">Angle",S,Math.PI),!(S>Math.PI)&&M.body.quaternion.setFromAxisAngle(new x(1,0,0),Math.PI/3)});break}}};return It.useEffect(()=>(window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)})),et("div",{children:et("canvas",{ref:r,style:{position:"absolute",width:"100%",height:"100%"}})})},Tx=()=>et(Ch,{children:et(Ah,{children:et(Rc,{path:"/",element:et(Ex,{})})})}),Ax="modulepreload",Cx=function(r){return"/"+r},Jl={},So=function(e,t,n){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=Cx(i),i in Jl)return;Jl[i]=!0;const s=i.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":Ax,s||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),s)return new Promise((l,u)=>{a.addEventListener("load",l),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Lx=(r,e)=>{const t=r[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((n,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})};var ko=(r=>(r.Vi="vi",r.En="en",r))(ko||{}),Ql,ec;(function(r){r.CANCELED_BY_MOVEMENT="canceled-by-movement",r.CANCELED_BY_TIMEOUT="canceled-by-timeout"})(Ql||(Ql={})),function(r){r.BOTH="both",r.MOUSE="mouse",r.TOUCH="touch"}(ec||(ec={}));const Px=It.createContext({messages:{},changeLanguage:()=>{},language:ko.En,formatMessage:()=>""}),Rx=r=>function(t){const[n,i]=It.useState(ko.En),[s,o]=It.useState({}),a=async u=>{const{default:c}=await Lx(Object.assign({"./language/en.json":()=>So(()=>import("./en.772c37d9.js"),[]),"./language/vi.json":()=>So(()=>import("./vi.753701cd.js"),[])}),`./language/${u}.json`);o(c)};It.useEffect(()=>{a(n)},[]);const l=(u,c)=>{const{id:d,defaultMessage:h}=u,m=s[d]||h;return c?Object.entries(c).reduce((g,[p,f])=>g.replace(new RegExp(`{{${p}}}`,"gm"),f),m):m};return et(Px.Provider,{value:{messages:s,language:n,changeLanguage:async u=>{i(u),a(u)},formatMessage:l},children:et(r,{...t})})};const Dx="_container_11i26_1",Ix={container:Dx},Nx="_container_1qdlo_1",zx="_toast_1qdlo_8",Fx="_toastMessage_1qdlo_22",Ox="_toastButton_1qdlo_26",rs={container:Nx,toast:zx,toastMessage:Fx,toastButton:Ox};function Bx(r={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:n,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=r;let a,l,u,c;const d=async(m=!0)=>{await u,m&&(a==null||a.addEventListener("controlling",g=>{g.isUpdate&&window.location.reload()})),await(c==null?void 0:c())};async function h(){if("serviceWorker"in navigator){const{Workbox:m,messageSW:g}=await So(()=>import("./workbox-window.prod.es5.6a7d11e0.js"),[]);c=async()=>{l&&l.waiting&&await g(l.waiting,{type:"SKIP_WAITING"})},a=new m("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",p=>{p.isUpdate||n==null||n()});{const p=()=>{t==null||t()};a.addEventListener("waiting",p),a.addEventListener("externalwaiting",p)}a.register({immediate:e}).then(p=>{l=p,s?s("/sw.js",p):i==null||i(p)}).catch(p=>{o==null||o(p)})}}return u=h(),d}function Ux(r={}){const{immediate:e=!0,onNeedRefresh:t,onOfflineReady:n,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=r,[a,l]=Pi(!1),[u,c]=Pi(!1),[d]=Pi(()=>Bx({immediate:e,onOfflineReady(){c(!0),n==null||n()},onNeedRefresh(){l(!0),t==null||t()},onRegistered:i,onRegisteredSW:s,onRegisterError:o}));return{needRefresh:[a,l],offlineReady:[u,c],updateServiceWorker:d}}function kx(){const{offlineReady:[r,e],needRefresh:[t,n],updateServiceWorker:i}=Ux({onRegistered(o){console.log("SW Registered: "+o)},onRegisterError(o){console.log("SW registration error",o)}}),s=()=>{e(!1),n(!1)};return et("div",{className:rs.container,children:(r||t)&&et("div",{className:rs.toast,children:[et("div",{className:rs.toastMessage,children:r?et("span",{children:"App ready to work offline"}):et("span",{children:"New content available, click on reload button to update."})}),t&&et("button",{className:rs.toastButton,onClick:()=>i(!0),children:"Reload"}),et("button",{className:rs.toastButton,onClick:()=>s(),children:"Close"})]})})}function Gx(){return et("div",{className:Ix.container,children:[et(Tx,{}),et(kx,{})]})}const Vx=Rx(Gx);Sc(et(Vx,{}),document.getElementById("app"));
