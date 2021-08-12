/**
 * Fuse.js v5.2.3 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2020 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */
var e,t;e=this,t=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},h=function(e){return"string"==typeof e},l=function(e){return"number"==typeof e},u=function(e){return null!=e},f=function(e){return!e.trim().length},v=o({},{isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:function(e,t){return e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1}},{},{includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},{},{location:0,threshold:.6,distance:100},{},{useExtendedSearch:!1,getFn:function(e,t){var r=[],n=!1;return function e(t,i){if(i){var o=i.indexOf("."),a=i,s=null;-1!==o&&(a=i.slice(0,o),s=i.slice(o+1));var f=t[a];if(u(f))if(s||!h(f)&&!l(f))if(c(f)){n=!0;for(var v=0,d=f.length;v<d;v+=1)e(f[v],s)}else s&&e(f,s);else r.push(function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)}(f))}else r.push(t)}(e,t),n?r:r[0]}});function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.errors,n=void 0===r?0:r,i=t.currentLocation,o=void 0===i?0:i,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?v.distance:c,l=n/e.length,u=Math.abs(s-o);return h?l+u/h:u?1:l}function g(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.minMatchCharLength,r=[],n=-1,i=-1,o=0,a=e.length;o<a;o+=1){var s=e[o];s&&-1===n?n=o:s||-1===n||((i=o-1)-n+1>=t&&r.push([n,i]),n=-1)}return e[o-1]&&o-n>=t&&r.push([n,o-1]),r}function y(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.location,o=void 0===i?v.location:i,a=n.distance,s=void 0===a?v.distance:a,c=n.threshold,h=void 0===c?v.threshold:c,l=n.findAllMatches,u=void 0===l?v.findAllMatches:l,f=n.minMatchCharLength,y=void 0===f?v.minMatchCharLength:f,p=n.includeMatches,m=void 0===p?v.includeMatches:p;if(t.length>32)throw new Error("Pattern length exceeds max of ".concat(32,"."));var k,b=t.length,M=e.length,x=Math.max(0,Math.min(o,M)),w=h,_=x,O=[];if(m)for(var S=0;S<M;S+=1)O[S]=0;for(;(k=e.indexOf(t,_))>-1;){var I=d(t,{currentLocation:k,expectedLocation:x,distance:s});if(w=Math.min(I,w),_=k+b,m)for(var A=0;A<b;)O[k+A]=1,A+=1}_=-1;for(var j=[],L=1,C=b+M,P=1<<(b<=31?b-1:30),$=0;$<b;$+=1){for(var E=0,N=C;E<N;){var F=d(t,{errors:$,currentLocation:x+N,expectedLocation:x,distance:s});F<=w?E=N:C=N,N=Math.floor((C-E)/2+E)}C=N;var D=Math.max(1,x-N+1),U=u?M:Math.min(x+N,M)+b,J=Array(U+2);J[U+1]=(1<<$)-1;for(var K=U;K>=D;K-=1){var T=K-1,q=r[e.charAt(T)];if(q&&m&&(O[T]=1),J[K]=(J[K+1]<<1|1)&q,0!==$&&(J[K]|=(j[K+1]|j[K])<<1|1|j[K+1]),J[K]&P&&(L=d(t,{errors:$,currentLocation:T,expectedLocation:x,distance:s}))<=w){if(w=L,(_=T)<=x)break;D=Math.max(1,2*x-_)}}var z=d(t,{errors:$+1,currentLocation:x,expectedLocation:x,distance:s});if(z>w)break;j=J}var B={isMatch:_>=0,score:L||.001};return m&&(B.matchedIndices=g(O,y)),B}function p(e){for(var t={},r=e.length,n=0;n<r;n+=1)t[e.charAt(n)]=0;for(var i=0;i<r;i+=1)t[e.charAt(i)]|=1<<r-i-1;return t}var m=function(){function t(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.location,o=void 0===i?v.location:i,a=n.threshold,s=void 0===a?v.threshold:a,c=n.distance,h=void 0===c?v.distance:c,l=n.includeMatches,u=void 0===l?v.includeMatches:l,f=n.findAllMatches,d=void 0===f?v.findAllMatches:f,g=n.minMatchCharLength,y=void 0===g?v.minMatchCharLength:g,m=n.isCaseSensitive,k=void 0===m?v.isCaseSensitive:m;e(this,t),this.options={location:o,threshold:s,distance:h,includeMatches:u,findAllMatches:d,minMatchCharLength:y,isCaseSensitive:k},this.pattern=k?r:r.toLowerCase(),this.chunks=[];for(var b=0;b<this.pattern.length;){var M=this.pattern.substring(b,b+32);this.chunks.push({pattern:M,alphabet:p(M)}),b+=32}}return r(t,[{key:"searchIn",value:function(e){var t=e.$;return this.searchInString(t)}},{key:"searchInString",value:function(e){var t=this.options,r=t.isCaseSensitive,n=t.includeMatches;if(r||(e=e.toLowerCase()),this.pattern===e){var i={isMatch:!0,score:0};return n&&(i.matchedIndices=[[0,e.length-1]]),i}for(var o=this.options,s=o.location,c=o.distance,h=o.threshold,l=o.findAllMatches,u=o.minMatchCharLength,f=[],v=0,d=!1,g=0,p=this.chunks.length;g<p;g+=1){var m=this.chunks[g],k=y(e,m.pattern,m.alphabet,{location:s+32*g,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u,includeMatches:n}),b=k.isMatch,M=k.score,x=k.matchedIndices;b&&(d=!0),v+=M,b&&x&&(f=[].concat(a(f),a(x)))}var w={isMatch:d,score:d?v/this.chunks.length:1};return d&&n&&(w.matchedIndices=f),w}}]),t}(),k=/[^ ]+/g;function b(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.getFn,i=void 0===n?v.getFn:n,o=[];if(h(t[0]))for(var a=0,s=t.length;a<s;a+=1){var l=t[a];if(u(l)&&!f(l)){var d={$:l,idx:a,t:l.match(k).length};o.push(d)}}else for(var g=e.length,y=0,p=t.length;y<p;y+=1){for(var m=t[y],b={idx:y,$:{}},M=0;M<g;M+=1){var x=e[M],w=i(m,x);if(u(w))if(c(w)){for(var _=[],O=[{arrayIndex:-1,value:w}];O.length;){var S=O.pop(),I=S.arrayIndex,A=S.value;if(u(A))if(h(A)&&!f(A)){var j={$:A,idx:I,t:A.match(k).length};_.push(j)}else if(c(A))for(var L=0,C=A.length;L<C;L+=1)O.push({arrayIndex:L,value:A[L]})}b.$[x]=_}else if(!f(w)){var P={$:w,t:w.match(k).length};b.$[x]=P}}o.push(b)}return o}var M=function(){function t(r){if(e(this,t),this._keys={},this._keyNames=[],this._length=r.length,r.length&&h(r[0]))for(var n=0;n<this._length;n+=1){var i=r[n];this._keys[i]={weight:1},this._keyNames.push(i)}else{for(var o=0,a=0;a<this._length;a+=1){var s=r[a];if(!Object.prototype.hasOwnProperty.call(s,"name"))throw new Error('Missing "name" property in key object');var c=s.name;if(this._keyNames.push(c),!Object.prototype.hasOwnProperty.call(s,"weight"))throw new Error('Missing "weight" property in key object');var l=s.weight;if(l<=0||l>=1)throw new Error('"weight" property in key must be in the range of (0, 1)');this._keys[c]={weight:l},o+=l}for(var u=0;u<this._length;u+=1){var f=this._keyNames[u],v=this._keys[f].weight;this._keys[f].weight=v/o}}}return r(t,[{key:"get",value:function(e,t){return this._keys[e]?this._keys[e][t]:-1}},{key:"keys",value:function(){return this._keyNames}},{key:"count",value:function(){return this._length}},{key:"toJSON",value:function(){return JSON.stringify(this._keys)}}]),t}();function x(e,t){var r=e.matches;if(t.matches=[],u(r))for(var n=0,i=r.length;n<i;n+=1){var o=r[n];if(u(o.indices)&&0!==o.indices.length){var a={indices:o.indices,value:o.value};o.key&&(a.key=o.key),o.idx>-1&&(a.refIndex=o.idx),t.matches.push(a)}}}function w(e,t){t.score=e.score}var _=[],O=function(){function t(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e(this,t),this.options=o({},v,{},n),this._processKeys(this.options.keys),this.setCollection(r,i)}return r(t,[{key:"setCollection",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.list=e,this.listIsStringArray=h(e[0]),t?this.setIndex(t):this.setIndex(this._createIndex())}},{key:"setIndex",value:function(e){this._indexedList=e}},{key:"_processKeys",value:function(e){this._keyStore=new M(e)}},{key:"_createIndex",value:function(){return b(this._keyStore.keys(),this.list,{getFn:this.options.getFn})}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};if(!(e=e.trim()).length)return[];for(var r=this.options.shouldSort,n=null,i=0,o=_.length;i<o;i+=1){var a=_[i];if(a.condition(e,this.options)){n=new a(e,this.options);break}}n||(n=new m(e,this.options));var s=this._searchUsing(n);return this._computeScore(s),r&&this._sort(s),t.limit&&l(t.limit)&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_searchUsing",value:function(e){var t=this._indexedList,r=[],n=this.options.includeMatches;if(this.listIsStringArray)for(var i=0,o=t.length;i<o;i+=1){var a=t[i],s=a.$,h=a.idx,l=a.t;if(u(s)){var f=e.searchIn(a),v=f.isMatch,d=f.score;if(v){var g={score:d,value:s,t:l};n&&(g.indices=f.matchedIndices),r.push({item:s,idx:h,matches:[g]})}}}else for(var y=this._keyStore.keys(),p=this._keyStore.count(),m=0,k=t.length;m<k;m+=1){var b=t[m],M=b.$,x=b.idx;if(u(M)){for(var w=[],_=0;_<p;_+=1){var O=y[_],S=M[O];if(u(S))if(c(S))for(var I=0,A=S.length;I<A;I+=1){var j=S[I],L=j.$,C=j.idx,P=j.t;if(u(L)){var $=e.searchIn(j),E=$.isMatch,N=$.score;if(E){var F={score:N,key:O,value:L,idx:C,t:P};n&&(F.indices=$.matchedIndices),w.push(F)}}}else{var D=S.$,U=S.t,J=e.searchIn(S),K=J.isMatch,T=J.score;if(!K)continue;var q={score:T,key:O,value:D,t:U};n&&(q.indices=J.matchedIndices),w.push(q)}}w.length&&r.push({idx:x,item:M,matches:w})}}return r}},{key:"_computeScore",value:function(e){for(var t=e.length,r=0;r<t;r+=1){for(var n=e[r],i=n.matches,o=i.length,a=1,s=0;s<o;s+=1){var c=i[s],h=c.key,l=c.t,u=this._keyStore.get(h,"weight"),f=u>-1?u:1,v=0===c.score&&u>-1?Number.EPSILON:c.score,d=1/Math.sqrt(l);a*=Math.pow(v,f*d)}n.score=a}}},{key:"_sort",value:function(e){e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[],r=this.options,n=r.includeMatches,i=r.includeScore,o=[];n&&o.push(x),i&&o.push(w);for(var a=0,s=e.length;a<s;a+=1){var c=e[a],h=c.idx,l={item:this.list[h],refIndex:h};if(o.length)for(var u=0,f=o.length;u<f;u+=1)o[u](c,l);t.push(l)}return t}}]),t}();return O.version="5.2.3",O.createIndex=b,O.config=v,O},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Fuse=t();