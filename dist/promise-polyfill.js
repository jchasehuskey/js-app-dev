!function(b,a){"object"==typeof exports&&"undefined"!=typeof module?a():"function"==typeof define&&define.amd?define(a):a()}(0,function(){"use strict";function c(a){var b=this.constructor;return this.then(function(c){return b.resolve(a()).then(function(){return c})},function(c){return b.resolve(a()).then(function(){return b.reject(c)})})}function d(a){return new this(function(d,e){function f(e,a){if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void c.call(a,function(a){f(e,a)},function(a){b[e]={status:"rejected",reason:a},0== --g&&d(b)})}b[e]={status:"fulfilled",value:a},0== --g&&d(b)}if(!a|| void 0===a.length)return e(new TypeError(typeof a+" "+a+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var b=Array.prototype.slice.call(a);if(0===b.length)return d([]);for(var g=b.length,c=0;b.length>c;c++)f(c,b[c])})}function e(a){return!(!a|| void 0===a.length)}function f(){}function a(b){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof b)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],k(b,this)}function g(b,c){for(;3===b._state;)b=b._value;0!==b._state?(b._handled=!0,a._immediateFn(function(){var a,d=1===b._state?c.onFulfilled:c.onRejected;if(null!==d){try{a=d(b._value)}catch(e){return void i(c.promise,e)}h(c.promise,a)}else(1===b._state?h:i)(c.promise,b._value)})):b._deferreds.push(c)}function h(b,c){try{if(c===b)throw new TypeError("A promise cannot be resolved with itself.");if(c&&("object"==typeof c||"function"==typeof c)){var e,f,d=c.then;if(c instanceof a)return b._state=3,b._value=c,void j(b);if("function"==typeof d)return void k((e=d,f=c,function(){e.apply(f,arguments)}),b)}b._state=1,b._value=c,j(b)}catch(g){i(b,g)}}function i(a,b){a._state=2,a._value=b,j(a)}function j(b){2===b._state&&0===b._deferreds.length&&a._immediateFn(function(){b._handled||a._unhandledRejectionFn(b._value)});for(var c=0,d=b._deferreds.length;d>c;c++)g(b,b._deferreds[c]);b._deferreds=null}function k(b,c){var a=!1;try{b(function(b){a||(a=!0,h(c,b))},function(b){a||(a=!0,i(c,b))})}catch(d){if(a)return;a=!0,i(c,d)}}var l=setTimeout;a.prototype.catch=function(a){return this.then(null,a)},a.prototype.then=function(b,c){var a=new this.constructor(f);return g(this,new function(a,b,c){this.onFulfilled="function"==typeof a?a:null,this.onRejected="function"==typeof b?b:null,this.promise=c}(b,c,a)),a},a.prototype.finally=c,a.all=function(b){return new a(function(d,f){function g(e,b){try{if(b&&("object"==typeof b||"function"==typeof b)){var c=b.then;if("function"==typeof c)return void c.call(b,function(a){g(e,a)},f)}a[e]=b,0== --h&&d(a)}catch(i){f(i)}}if(!e(b))return f(new TypeError("Promise.all accepts an array"));var a=Array.prototype.slice.call(b);if(0===a.length)return d([]);for(var h=a.length,c=0;a.length>c;c++)g(c,a[c])})},a.allSettled=d,a.resolve=function(b){return b&&"object"==typeof b&&b.constructor===a?b:new a(function(a){a(b)})},a.reject=function(b){return new a(function(c,a){a(b)})},a.race=function(b){return new a(function(f,d){if(!e(b))return d(new TypeError("Promise.race accepts an array"));for(var c=0,g=b.length;g>c;c++)a.resolve(b[c]).then(f,d)})},a._immediateFn="function"==typeof setImmediate&&function(a){setImmediate(a)}||function(a){l(a,0)},a._unhandledRejectionFn=function(a){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",a)};var b=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"function"!=typeof b.Promise?b.Promise=a:(b.Promise.prototype.finally||(b.Promise.prototype.finally=c),b.Promise.allSettled||(b.Promise.allSettled=d))})