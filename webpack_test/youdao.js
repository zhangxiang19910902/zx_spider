

var window = global;
var aaaa;

!(function() {
    var e = {
        86048: function(e) {
        "use strict";
        function t(e, t) {
            e.prototype = Object.create(t.prototype),
            e.prototype.constructor = e,
            e.__proto__ = t
        }
        var n = {};
        function r(e, r, i) {
            function o(e, t, n) {
                return "string" === typeof r ? r : r(e, t, n)
            }
            i || (i = Error);
            var a = function(e) {
                function n(t, n, r) {
                    return e.call(this, o(t, n, r)) || this
                }
                return t(n, e),
                n
            }(i);
            a.prototype.name = i.name,
            a.prototype.code = e,
            n[e] = a
        }
        function i(e, t) {
            if (Array.isArray(e)) {
                var n = e.length;
                return e = e.map((function(e) {
                    return String(e)
                }
                )),
                n > 2 ? "one of ".concat(t, " ").concat(e.slice(0, n - 1).join(", "), ", or ") + e[n - 1] : 2 === n ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
            }
            return "of ".concat(t, " ").concat(String(e))
        }
        function o(e, t, n) {
            return e.substr(!n || n < 0 ? 0 : +n, t.length) === t
        }
        function a(e, t, n) {
            return (void 0 === n || n > e.length) && (n = e.length),
            e.substring(n - t.length, n) === t
        }
        function s(e, t, n) {
            return "number" !== typeof n && (n = 0),
            !(n + t.length > e.length) && -1 !== e.indexOf(t, n)
        }
        r("ERR_INVALID_OPT_VALUE", (function(e, t) {
            return 'The value "' + t + '" is invalid for option "' + e + '"'
        }
        ), TypeError),
        r("ERR_INVALID_ARG_TYPE", (function(e, t, n) {
            var r, l;
            if ("string" === typeof t && o(t, "not ") ? (r = "must not be",
            t = t.replace(/^not /, "")) : r = "must be",
            a(e, " argument"))
                l = "The ".concat(e, " ").concat(r, " ").concat(i(t, "type"));
            else {
                var u = s(e, ".") ? "property" : "argument";
                l = 'The "'.concat(e, '" ').concat(u, " ").concat(r, " ").concat(i(t, "type"))
            }
            return l += ". Received type ".concat(typeof n),
            l
        }
        ), TypeError),
        r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        r("ERR_METHOD_NOT_IMPLEMENTED", (function(e) {
            return "The " + e + " method is not implemented"
        }
        )),
        r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        r("ERR_STREAM_DESTROYED", (function(e) {
            return "Cannot call " + e + " after a stream was destroyed"
        }
        )),
        r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        r("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        r("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError),
        r("ERR_UNKNOWN_ENCODING", (function(e) {
            return "Unknown encoding: " + e
        }
        ), TypeError),
        r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"),
        e.exports.F = n
    },
        65291: function(e, t, n) {
        "use strict";
        var r = n(86048).F.ERR_INVALID_OPT_VALUE;
        function i(e, t, n) {
            return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null
        }
        function o(e, t, n, o) {
            var a = i(t, o, n);
            if (null != a) {
                if (!isFinite(a) || Math.floor(a) !== a || a < 0) {
                    var s = o ? n : "highWaterMark";
                    throw new r(s,a)
                }
                return Math.floor(a)
            }
            return e.objectMode ? 16 : 16384
        }
        e.exports = {
            getHighWaterMark: o
        }
    },
        75896: function(e) {
        "use strict";
        function t(e, t) {
            var i = this
              , a = this._readableState && this._readableState.destroyed
              , s = this._writableState && this._writableState.destroyed;
            return a || s ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0,
            process.nextTick(o, this, e)) : process.nextTick(o, this, e)),
            this) : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(e || null, (function(e) {
                !t && e ? i._writableState ? i._writableState.errorEmitted ? process.nextTick(r, i) : (i._writableState.errorEmitted = !0,
                process.nextTick(n, i, e)) : process.nextTick(n, i, e) : t ? (process.nextTick(r, i),
                t(e)) : process.nextTick(r, i)
            }
            )),
            this)
        }
        function n(e, t) {
            o(e, t),
            r(e)
        }
        function r(e) {
            e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
        }
        function i() {
            this._readableState && (this._readableState.destroyed = !1,
            this._readableState.reading = !1,
            this._readableState.ended = !1,
            this._readableState.endEmitted = !1),
            this._writableState && (this._writableState.destroyed = !1,
            this._writableState.ended = !1,
            this._writableState.ending = !1,
            this._writableState.finalCalled = !1,
            this._writableState.prefinished = !1,
            this._writableState.finished = !1,
            this._writableState.errorEmitted = !1)
        }
        function o(e, t) {
            e.emit("error", t)
        }
        function a(e, t) {
            var n = e._readableState
              , r = e._writableState;
            n && n.autoDestroy || r && r.autoDestroy ? e.destroy(t) : e.emit("error", t)
        }
        e.exports = {
            destroy: t,
            undestroy: i,
            errorOrDestroy: a
        }
    },
        80345: function(e, t, n) {
        "use strict";
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach((function(t) {
                    o(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function o(e, t, n) {
            return t = u(t),
            t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function a(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, u(r.key), r)
            }
        }
        function l(e, t, n) {
            return t && s(e.prototype, t),
            n && s(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        function u(e) {
            var t = c(e, "string");
            return "symbol" === typeof t ? t : String(t)
        }
        function c(e, t) {
            if ("object" !== typeof e || null === e)
                return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" !== typeof r)
                    return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }
        var f = n(48287)
          , d = f.Buffer
          , h = n(15340)
          , p = h.inspect
          , v = p && p.custom || "inspect";
        function m(e, t, n) {
            d.prototype.copy.call(e, t, n)
        }
        e.exports = function() {
            function e() {
                a(this, e),
                this.head = null,
                this.tail = null,
                this.length = 0
            }
            return l(e, [{
                key: "push",
                value: function(e) {
                    var t = {
                        data: e,
                        next: null
                    };
                    this.length > 0 ? this.tail.next = t : this.head = t,
                    this.tail = t,
                    ++this.length
                }
            }, {
                key: "unshift",
                value: function(e) {
                    var t = {
                        data: e,
                        next: this.head
                    };
                    0 === this.length && (this.tail = t),
                    this.head = t,
                    ++this.length
                }
            }, {
                key: "shift",
                value: function() {
                    if (0 !== this.length) {
                        var e = this.head.data;
                        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                        --this.length,
                        e
                    }
                }
            }, {
                key: "clear",
                value: function() {
                    this.head = this.tail = null,
                    this.length = 0
                }
            }, {
                key: "join",
                value: function(e) {
                    if (0 === this.length)
                        return "";
                    var t = this.head
                      , n = "" + t.data;
                    while (t = t.next)
                        n += e + t.data;
                    return n
                }
            }, {
                key: "concat",
                value: function(e) {
                    if (0 === this.length)
                        return d.alloc(0);
                    var t = d.allocUnsafe(e >>> 0)
                      , n = this.head
                      , r = 0;
                    while (n)
                        m(n.data, t, r),
                        r += n.data.length,
                        n = n.next;
                    return t
                }
            }, {
                key: "consume",
                value: function(e, t) {
                    var n;
                    return e < this.head.data.length ? (n = this.head.data.slice(0, e),
                    this.head.data = this.head.data.slice(e)) : n = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e),
                    n
                }
            }, {
                key: "first",
                value: function() {
                    return this.head.data
                }
            }, {
                key: "_getString",
                value: function(e) {
                    var t = this.head
                      , n = 1
                      , r = t.data;
                    e -= r.length;
                    while (t = t.next) {
                        var i = t.data
                          , o = e > i.length ? i.length : e;
                        if (o === i.length ? r += i : r += i.slice(0, e),
                        e -= o,
                        0 === e) {
                            o === i.length ? (++n,
                            t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t,
                            t.data = i.slice(o));
                            break
                        }
                        ++n
                    }
                    return this.length -= n,
                    r
                }
            }, {
                key: "_getBuffer",
                value: function(e) {
                    var t = d.allocUnsafe(e)
                      , n = this.head
                      , r = 1;
                    n.data.copy(t),
                    e -= n.data.length;
                    while (n = n.next) {
                        var i = n.data
                          , o = e > i.length ? i.length : e;
                        if (i.copy(t, t.length - e, 0, o),
                        e -= o,
                        0 === e) {
                            o === i.length ? (++r,
                            n.next ? this.head = n.next : this.head = this.tail = null) : (this.head = n,
                            n.data = i.slice(o));
                            break
                        }
                        ++r
                    }
                    return this.length -= r,
                    t
                }
            }, {
                key: v,
                value: function(e, t) {
                    return p(this, i(i({}, t), {}, {
                        depth: 0,
                        customInspect: !1
                    }))
                }
            }]),
            e
        }()
    },
        40345: function(e, t, n) {
        e.exports = n(37007).EventEmitter
    },
        37007: function(e) {
        "use strict";
        var t, n = "object" === typeof Reflect ? Reflect : null, r = n && "function" === typeof n.apply ? n.apply : function(e, t, n) {
            return Function.prototype.apply.call(e, t, n)
        }
        ;
        function i(e) {
            console && console.warn && console.warn(e)
        }
        t = n && "function" === typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        }
        : function(e) {
            return Object.getOwnPropertyNames(e)
        }
        ;
        var o = Number.isNaN || function(e) {
            return e !== e
        }
        ;
        function a() {
            a.init.call(this)
        }
        e.exports = a,
        e.exports.once = y,
        a.EventEmitter = a,
        a.prototype._events = void 0,
        a.prototype._eventsCount = 0,
        a.prototype._maxListeners = void 0;
        var s = 10;
        function l(e) {
            if ("function" !== typeof e)
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }
        function u(e) {
            return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
        }
        function c(e, t, n, r) {
            var o, a, s;
            if (l(n),
            a = e._events,
            void 0 === a ? (a = e._events = Object.create(null),
            e._eventsCount = 0) : (void 0 !== a.newListener && (e.emit("newListener", t, n.listener ? n.listener : n),
            a = e._events),
            s = a[t]),
            void 0 === s)
                s = a[t] = n,
                ++e._eventsCount;
            else if ("function" === typeof s ? s = a[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n),
            o = u(e),
            o > 0 && s.length > o && !s.warned) {
                s.warned = !0;
                var c = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                c.name = "MaxListenersExceededWarning",
                c.emitter = e,
                c.type = t,
                c.count = s.length,
                i(c)
            }
            return e
        }
        function f() {
            if (!this.fired)
                return this.target.removeListener(this.type, this.wrapFn),
                this.fired = !0,
                0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }
        function d(e, t, n) {
            var r = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: n
            }
              , i = f.bind(r);
            return i.listener = n,
            r.wrapFn = i,
            i
        }
        function h(e, t, n) {
            var r = e._events;
            if (void 0 === r)
                return [];
            var i = r[t];
            return void 0 === i ? [] : "function" === typeof i ? n ? [i.listener || i] : [i] : n ? g(i) : v(i, i.length)
        }
        function p(e) {
            var t = this._events;
            if (void 0 !== t) {
                var n = t[e];
                if ("function" === typeof n)
                    return 1;
                if (void 0 !== n)
                    return n.length
            }
            return 0
        }
        function v(e, t) {
            for (var n = new Array(t), r = 0; r < t; ++r)
                n[r] = e[r];
            return n
        }
        function m(e, t) {
            for (; t + 1 < e.length; t++)
                e[t] = e[t + 1];
            e.pop()
        }
        function g(e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                t[n] = e[n].listener || e[n];
            return t
        }
        function y(e, t) {
            return new Promise((function(n, r) {
                function i(n) {
                    e.removeListener(t, o),
                    r(n)
                }
                function o() {
                    "function" === typeof e.removeListener && e.removeListener("error", i),
                    n([].slice.call(arguments))
                }
                w(e, t, o, {
                    once: !0
                }),
                "error" !== t && b(e, i, {
                    once: !0
                })
            }
            ))
        }
        function b(e, t, n) {
            "function" === typeof e.on && w(e, "error", t, n)
        }
        function w(e, t, n, r) {
            if ("function" === typeof e.on)
                r.once ? e.once(t, n) : e.on(t, n);
            else {
                if ("function" !== typeof e.addEventListener)
                    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                e.addEventListener(t, (function i(o) {
                    r.once && e.removeEventListener(t, i),
                    n(o)
                }
                ))
            }
        }
        Object.defineProperty(a, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return s
            },
            set: function(e) {
                if ("number" !== typeof e || e < 0 || o(e))
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                s = e
            }
        }),
        a.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
            this._eventsCount = 0),
            this._maxListeners = this._maxListeners || void 0
        }
        ,
        a.prototype.setMaxListeners = function(e) {
            if ("number" !== typeof e || e < 0 || o(e))
                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e,
            this
        }
        ,
        a.prototype.getMaxListeners = function() {
            return u(this)
        }
        ,
        a.prototype.emit = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t.push(arguments[n]);
            var i = "error" === e
              , o = this._events;
            if (void 0 !== o)
                i = i && void 0 === o.error;
            else if (!i)
                return !1;
            if (i) {
                var a;
                if (t.length > 0 && (a = t[0]),
                a instanceof Error)
                    throw a;
                var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
                throw s.context = a,
                s
            }
            var l = o[e];
            if (void 0 === l)
                return !1;
            if ("function" === typeof l)
                r(l, this, t);
            else {
                var u = l.length
                  , c = v(l, u);
                for (n = 0; n < u; ++n)
                    r(c[n], this, t)
            }
            return !0
        }
        ,
        a.prototype.addListener = function(e, t) {
            return c(this, e, t, !1)
        }
        ,
        a.prototype.on = a.prototype.addListener,
        a.prototype.prependListener = function(e, t) {
            return c(this, e, t, !0)
        }
        ,
        a.prototype.once = function(e, t) {
            return l(t),
            this.on(e, d(this, e, t)),
            this
        }
        ,
        a.prototype.prependOnceListener = function(e, t) {
            return l(t),
            this.prependListener(e, d(this, e, t)),
            this
        }
        ,
        a.prototype.removeListener = function(e, t) {
            var n, r, i, o, a;
            if (l(t),
            r = this._events,
            void 0 === r)
                return this;
            if (n = r[e],
            void 0 === n)
                return this;
            if (n === t || n.listener === t)
                0 === --this._eventsCount ? this._events = Object.create(null) : (delete r[e],
                r.removeListener && this.emit("removeListener", e, n.listener || t));
            else if ("function" !== typeof n) {
                for (i = -1,
                o = n.length - 1; o >= 0; o--)
                    if (n[o] === t || n[o].listener === t) {
                        a = n[o].listener,
                        i = o;
                        break
                    }
                if (i < 0)
                    return this;
                0 === i ? n.shift() : m(n, i),
                1 === n.length && (r[e] = n[0]),
                void 0 !== r.removeListener && this.emit("removeListener", e, a || t)
            }
            return this
        }
        ,
        a.prototype.off = a.prototype.removeListener,
        a.prototype.removeAllListeners = function(e) {
            var t, n, r;
            if (n = this._events,
            void 0 === n)
                return this;
            if (void 0 === n.removeListener)
                return 0 === arguments.length ? (this._events = Object.create(null),
                this._eventsCount = 0) : void 0 !== n[e] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete n[e]),
                this;
            if (0 === arguments.length) {
                var i, o = Object.keys(n);
                for (r = 0; r < o.length; ++r)
                    i = o[r],
                    "removeListener" !== i && this.removeAllListeners(i);
                return this.removeAllListeners("removeListener"),
                this._events = Object.create(null),
                this._eventsCount = 0,
                this
            }
            if (t = n[e],
            "function" === typeof t)
                this.removeListener(e, t);
            else if (void 0 !== t)
                for (r = t.length - 1; r >= 0; r--)
                    this.removeListener(e, t[r]);
            return this
        }
        ,
        a.prototype.listeners = function(e) {
            return h(this, e, !0)
        }
        ,
        a.prototype.rawListeners = function(e) {
            return h(this, e, !1)
        }
        ,
        a.listenerCount = function(e, t) {
            return "function" === typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t)
        }
        ,
        a.prototype.listenerCount = p,
        a.prototype.eventNames = function() {
            return this._eventsCount > 0 ? t(this._events) : []
        }
    },
        45412: function(e, t, n) {
        "use strict";
        var r;
        e.exports = S,
        S.ReadableState = k;
        n(37007).EventEmitter;
        var i = function(e, t) {
            return e.listeners(t).length
        }
          , o = n(40345)
          , a = n(48287).Buffer
          , s = ("undefined" !== typeof n.g ? n.g : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : {}).Uint8Array || function() {}
        ;
        function l(e) {
            return a.from(e)
        }
        function u(e) {
            return a.isBuffer(e) || e instanceof s
        }
        var c, f = n(79838);
        c = f && f.debuglog ? f.debuglog("stream") : function() {}
        ;
        var d, h, p, v = n(80345), m = n(75896), g = n(65291), y = g.getHighWaterMark, b = n(86048).F, w = b.ERR_INVALID_ARG_TYPE, E = b.ERR_STREAM_PUSH_AFTER_EOF, A = b.ERR_METHOD_NOT_IMPLEMENTED, x = b.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
        n(56698)(S, o);
        var R = m.errorOrDestroy
          , M = ["error", "close", "destroy", "pause", "resume"];
        function C(e, t, n) {
            if ("function" === typeof e.prependListener)
                return e.prependListener(t, n);
            e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n)
        }
        function k(e, t, i) {
            r = r || n(25382),
            e = e || {},
            "boolean" !== typeof i && (i = t instanceof r),
            this.objectMode = !!e.objectMode,
            i && (this.objectMode = this.objectMode || !!e.readableObjectMode),
            this.highWaterMark = y(this, e, "readableHighWaterMark", i),
            this.buffer = new v,
            this.length = 0,
            this.pipes = null,
            this.pipesCount = 0,
            this.flowing = null,
            this.ended = !1,
            this.endEmitted = !1,
            this.reading = !1,
            this.sync = !0,
            this.needReadable = !1,
            this.emittedReadable = !1,
            this.readableListening = !1,
            this.resumeScheduled = !1,
            this.paused = !0,
            this.emitClose = !1 !== e.emitClose,
            this.autoDestroy = !!e.autoDestroy,
            this.destroyed = !1,
            this.defaultEncoding = e.defaultEncoding || "utf8",
            this.awaitDrain = 0,
            this.readingMore = !1,
            this.decoder = null,
            this.encoding = null,
            e.encoding && (d || (d = n(83141).I),
            this.decoder = new d(e.encoding),
            this.encoding = e.encoding)
        }
        function S(e) {
            if (r = r || n(25382),
            !(this instanceof S))
                return new S(e);
            var t = this instanceof r;
            this._readableState = new k(e,this,t),
            this.readable = !0,
            e && ("function" === typeof e.read && (this._read = e.read),
            "function" === typeof e.destroy && (this._destroy = e.destroy)),
            o.call(this)
        }
        function D(e, t, n, r, i) {
            c("readableAddChunk", t);
            var o, s = e._readableState;
            if (null === t)
                s.reading = !1,
                I(e, s);
            else if (i || (o = O(s, t)),
            o)
                R(e, o);
            else if (s.objectMode || t && t.length > 0)
                if ("string" === typeof t || s.objectMode || Object.getPrototypeOf(t) === a.prototype || (t = l(t)),
                r)
                    s.endEmitted ? R(e, new x) : B(e, s, t, !0);
                else if (s.ended)
                    R(e, new E);
                else {
                    if (s.destroyed)
                        return !1;
                    s.reading = !1,
                    s.decoder && !n ? (t = s.decoder.write(t),
                    s.objectMode || 0 !== t.length ? B(e, s, t, !1) : j(e, s)) : B(e, s, t, !1)
                }
            else
                r || (s.reading = !1,
                j(e, s));
            return !s.ended && (s.length < s.highWaterMark || 0 === s.length)
        }
        function B(e, t, n, r) {
            t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0,
            e.emit("data", n)) : (t.length += t.objectMode ? 1 : n.length,
            r ? t.buffer.unshift(n) : t.buffer.push(n),
            t.needReadable && N(e)),
            j(e, t)
        }
        function O(e, t) {
            var n;
            return u(t) || "string" === typeof t || void 0 === t || e.objectMode || (n = new w("chunk",["string", "Buffer", "Uint8Array"],t)),
            n
        }
        Object.defineProperty(S.prototype, "destroyed", {
            enumerable: !1,
            get: function() {
                return void 0 !== this._readableState && this._readableState.destroyed
            },
            set: function(e) {
                this._readableState && (this._readableState.destroyed = e)
            }
        }),
        S.prototype.destroy = m.destroy,
        S.prototype._undestroy = m.undestroy,
        S.prototype._destroy = function(e, t) {
            t(e)
        }
        ,
        S.prototype.push = function(e, t) {
            var n, r = this._readableState;
            return r.objectMode ? n = !0 : "string" === typeof e && (t = t || r.defaultEncoding,
            t !== r.encoding && (e = a.from(e, t),
            t = ""),
            n = !0),
            D(this, e, t, !1, n)
        }
        ,
        S.prototype.unshift = function(e) {
            return D(this, e, null, !0, !1)
        }
        ,
        S.prototype.isPaused = function() {
            return !1 === this._readableState.flowing
        }
        ,
        S.prototype.setEncoding = function(e) {
            d || (d = n(83141).I);
            var t = new d(e);
            this._readableState.decoder = t,
            this._readableState.encoding = this._readableState.decoder.encoding;
            var r = this._readableState.buffer.head
              , i = "";
            while (null !== r)
                i += t.write(r.data),
                r = r.next;
            return this._readableState.buffer.clear(),
            "" !== i && this._readableState.buffer.push(i),
            this._readableState.length = i.length,
            this
        }
        ;
        var T = 1073741824;
        function P(e) {
            return e >= T ? e = T : (e--,
            e |= e >>> 1,
            e |= e >>> 2,
            e |= e >>> 4,
            e |= e >>> 8,
            e |= e >>> 16,
            e++),
            e
        }
        function L(e, t) {
            return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = P(e)),
            e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0,
            0))
        }
        function I(e, t) {
            if (c("onEofChunk"),
            !t.ended) {
                if (t.decoder) {
                    var n = t.decoder.end();
                    n && n.length && (t.buffer.push(n),
                    t.length += t.objectMode ? 1 : n.length)
                }
                t.ended = !0,
                t.sync ? N(e) : (t.needReadable = !1,
                t.emittedReadable || (t.emittedReadable = !0,
                F(e)))
            }
        }
        function N(e) {
            var t = e._readableState;
            c("emitReadable", t.needReadable, t.emittedReadable),
            t.needReadable = !1,
            t.emittedReadable || (c("emitReadable", t.flowing),
            t.emittedReadable = !0,
            process.nextTick(F, e))
        }
        function F(e) {
            var t = e._readableState;
            c("emitReadable_", t.destroyed, t.length, t.ended),
            t.destroyed || !t.length && !t.ended || (e.emit("readable"),
            t.emittedReadable = !1),
            t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark,
            V(e)
        }
        function j(e, t) {
            t.readingMore || (t.readingMore = !0,
            process.nextTick(z, e, t))
        }
        function z(e, t) {
            while (!t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length)) {
                var n = t.length;
                if (c("maybeReadMore read 0"),
                e.read(0),
                n === t.length)
                    break
            }
            t.readingMore = !1
        }
        function H(e) {
            return function() {
                var t = e._readableState;
                c("pipeOnDrain", t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && i(e, "data") && (t.flowing = !0,
                V(e))
            }
        }
        function W(e) {
            var t = e._readableState;
            t.readableListening = e.listenerCount("readable") > 0,
            t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
        }
        function _(e) {
            c("readable nexttick read 0"),
            e.read(0)
        }
        function K(e, t) {
            t.resumeScheduled || (t.resumeScheduled = !0,
            process.nextTick(X, e, t))
        }
        function X(e, t) {
            c("resume", t.reading),
            t.reading || e.read(0),
            t.resumeScheduled = !1,
            e.emit("resume"),
            V(e),
            t.flowing && !t.reading && e.read(0)
        }
        function V(e) {
            var t = e._readableState;
            c("flow", t.flowing);
            while (t.flowing && null !== e.read())
                ;
        }
        function U(e, t) {
            return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length),
            t.buffer.clear()) : n = t.buffer.consume(e, t.decoder),
            n);
            var n
        }
        function q(e) {
            var t = e._readableState;
            c("endReadable", t.endEmitted),
            t.endEmitted || (t.ended = !0,
            process.nextTick(G, t, e))
        }
        function G(e, t) {
            if (c("endReadableNT", e.endEmitted, e.length),
            !e.endEmitted && 0 === e.length && (e.endEmitted = !0,
            t.readable = !1,
            t.emit("end"),
            e.autoDestroy)) {
                var n = t._writableState;
                (!n || n.autoDestroy && n.finished) && t.destroy()
            }
        }
        function Q(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }
        S.prototype.read = function(e) {
            c("read", e),
            e = parseInt(e, 10);
            var t = this._readableState
              , n = e;
            if (0 !== e && (t.emittedReadable = !1),
            0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended))
                return c("read: emitReadable", t.length, t.ended),
                0 === t.length && t.ended ? q(this) : N(this),
                null;
            if (e = L(e, t),
            0 === e && t.ended)
                return 0 === t.length && q(this),
                null;
            var r, i = t.needReadable;
            return c("need readable", i),
            (0 === t.length || t.length - e < t.highWaterMark) && (i = !0,
            c("length less than watermark", i)),
            t.ended || t.reading ? (i = !1,
            c("reading or ended", i)) : i && (c("do read"),
            t.reading = !0,
            t.sync = !0,
            0 === t.length && (t.needReadable = !0),
            this._read(t.highWaterMark),
            t.sync = !1,
            t.reading || (e = L(n, t))),
            r = e > 0 ? U(e, t) : null,
            null === r ? (t.needReadable = t.length <= t.highWaterMark,
            e = 0) : (t.length -= e,
            t.awaitDrain = 0),
            0 === t.length && (t.ended || (t.needReadable = !0),
            n !== e && t.ended && q(this)),
            null !== r && this.emit("data", r),
            r
        }
        ,
        S.prototype._read = function(e) {
            R(this, new A("_read()"))
        }
        ,
        S.prototype.pipe = function(e, t) {
            var n = this
              , r = this._readableState;
            switch (r.pipesCount) {
            case 0:
                r.pipes = e;
                break;
            case 1:
                r.pipes = [r.pipes, e];
                break;
            default:
                r.pipes.push(e);
                break
            }
            r.pipesCount += 1,
            c("pipe count=%d opts=%j", r.pipesCount, t);
            var o = (!t || !1 !== t.end) && e !== process.stdout && e !== process.stderr
              , a = o ? l : g;
            function s(e, t) {
                c("onunpipe"),
                e === n && t && !1 === t.hasUnpiped && (t.hasUnpiped = !0,
                d())
            }
            function l() {
                c("onend"),
                e.end()
            }
            r.endEmitted ? process.nextTick(a) : n.once("end", a),
            e.on("unpipe", s);
            var u = H(n);
            e.on("drain", u);
            var f = !1;
            function d() {
                c("cleanup"),
                e.removeListener("close", v),
                e.removeListener("finish", m),
                e.removeListener("drain", u),
                e.removeListener("error", p),
                e.removeListener("unpipe", s),
                n.removeListener("end", l),
                n.removeListener("end", g),
                n.removeListener("data", h),
                f = !0,
                !r.awaitDrain || e._writableState && !e._writableState.needDrain || u()
            }
            function h(t) {
                c("ondata");
                var i = e.write(t);
                c("dest.write", i),
                !1 === i && ((1 === r.pipesCount && r.pipes === e || r.pipesCount > 1 && -1 !== Q(r.pipes, e)) && !f && (c("false write response, pause", r.awaitDrain),
                r.awaitDrain++),
                n.pause())
            }
            function p(t) {
                c("onerror", t),
                g(),
                e.removeListener("error", p),
                0 === i(e, "error") && R(e, t)
            }
            function v() {
                e.removeListener("finish", m),
                g()
            }
            function m() {
                c("onfinish"),
                e.removeListener("close", v),
                g()
            }
            function g() {
                c("unpipe"),
                n.unpipe(e)
            }
            return n.on("data", h),
            C(e, "error", p),
            e.once("close", v),
            e.once("finish", m),
            e.emit("pipe", n),
            r.flowing || (c("pipe resume"),
            n.resume()),
            e
        }
        ,
        S.prototype.unpipe = function(e) {
            var t = this._readableState
              , n = {
                hasUnpiped: !1
            };
            if (0 === t.pipesCount)
                return this;
            if (1 === t.pipesCount)
                return e && e !== t.pipes || (e || (e = t.pipes),
                t.pipes = null,
                t.pipesCount = 0,
                t.flowing = !1,
                e && e.emit("unpipe", this, n)),
                this;
            if (!e) {
                var r = t.pipes
                  , i = t.pipesCount;
                t.pipes = null,
                t.pipesCount = 0,
                t.flowing = !1;
                for (var o = 0; o < i; o++)
                    r[o].emit("unpipe", this, {
                        hasUnpiped: !1
                    });
                return this
            }
            var a = Q(t.pipes, e);
            return -1 === a || (t.pipes.splice(a, 1),
            t.pipesCount -= 1,
            1 === t.pipesCount && (t.pipes = t.pipes[0]),
            e.emit("unpipe", this, n)),
            this
        }
        ,
        S.prototype.on = function(e, t) {
            var n = o.prototype.on.call(this, e, t)
              , r = this._readableState;
            return "data" === e ? (r.readableListening = this.listenerCount("readable") > 0,
            !1 !== r.flowing && this.resume()) : "readable" === e && (r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0,
            r.flowing = !1,
            r.emittedReadable = !1,
            c("on readable", r.length, r.reading),
            r.length ? N(this) : r.reading || process.nextTick(_, this))),
            n
        }
        ,
        S.prototype.addListener = S.prototype.on,
        S.prototype.removeListener = function(e, t) {
            var n = o.prototype.removeListener.call(this, e, t);
            return "readable" === e && process.nextTick(W, this),
            n
        }
        ,
        S.prototype.removeAllListeners = function(e) {
            var t = o.prototype.removeAllListeners.apply(this, arguments);
            return "readable" !== e && void 0 !== e || process.nextTick(W, this),
            t
        }
        ,
        S.prototype.resume = function() {
            var e = this._readableState;
            return e.flowing || (c("resume"),
            e.flowing = !e.readableListening,
            K(this, e)),
            e.paused = !1,
            this
        }
        ,
        S.prototype.pause = function() {
            return c("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing && (c("pause"),
            this._readableState.flowing = !1,
            this.emit("pause")),
            this._readableState.paused = !0,
            this
        }
        ,
        S.prototype.wrap = function(e) {
            var t = this
              , n = this._readableState
              , r = !1;
            for (var i in e.on("end", (function() {
                if (c("wrapped end"),
                n.decoder && !n.ended) {
                    var e = n.decoder.end();
                    e && e.length && t.push(e)
                }
                t.push(null)
            }
            )),
            e.on("data", (function(i) {
                if (c("wrapped data"),
                n.decoder && (i = n.decoder.write(i)),
                (!n.objectMode || null !== i && void 0 !== i) && (n.objectMode || i && i.length)) {
                    var o = t.push(i);
                    o || (r = !0,
                    e.pause())
                }
            }
            )),
            e)
                void 0 === this[i] && "function" === typeof e[i] && (this[i] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(i));
            for (var o = 0; o < M.length; o++)
                e.on(M[o], this.emit.bind(this, M[o]));
            return this._read = function(t) {
                c("wrapped _read", t),
                r && (r = !1,
                e.resume())
            }
            ,
            this
        }
        ,
        "function" === typeof Symbol && (S.prototype[Symbol.asyncIterator] = function() {
            return void 0 === h && (h = n(2955)),
            h(this)
        }
        ),
        Object.defineProperty(S.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._readableState.highWaterMark
            }
        }),
        Object.defineProperty(S.prototype, "readableBuffer", {
            enumerable: !1,
            get: function() {
                return this._readableState && this._readableState.buffer
            }
        }),
        Object.defineProperty(S.prototype, "readableFlowing", {
            enumerable: !1,
            get: function() {
                return this._readableState.flowing
            },
            set: function(e) {
                this._readableState && (this._readableState.flowing = e)
            }
        }),
        S._fromList = U,
        Object.defineProperty(S.prototype, "readableLength", {
            enumerable: !1,
            get: function() {
                return this._readableState.length
            }
        }),
        "function" === typeof Symbol && (S.from = function(e, t) {
            return void 0 === p && (p = n(55157)),
            p(S, e, t)
        }
        )
    },
        28399: function(e, t, n) {
        t = e.exports = n(45412),
        t.Stream = t,
        t.Readable = t,
        t.Writable = n(16708),
        t.Duplex = n(25382),
        t.Transform = n(74610),
        t.PassThrough = n(63600),
        t.finished = n(86238),
        t.pipeline = n(57758)
    },
        4729: function(e, t, n) {
        "use strict";
        var r = n(92861).Buffer
          , i = n(28399).Transform
          , o = n(56698);
        function a(e, t) {
            if (!r.isBuffer(e) && "string" !== typeof e)
                throw new TypeError(t + " must be a string or a buffer")
        }
        function s(e) {
            i.call(this),
            this._block = r.allocUnsafe(e),
            this._blockSize = e,
            this._blockOffset = 0,
            this._length = [0, 0, 0, 0],
            this._finalized = !1
        }
        o(s, i),
        s.prototype._transform = function(e, t, n) {
            var r = null;
            try {
                this.update(e, t)
            } catch (i) {
                r = i
            }
            n(r)
        }
        ,
        s.prototype._flush = function(e) {
            var t = null;
            try {
                this.push(this.digest())
            } catch (n) {
                t = n
            }
            e(t)
        }
        ,
        s.prototype.update = function(e, t) {
            if (a(e, "Data"),
            this._finalized)
                throw new Error("Digest already called");
            r.isBuffer(e) || (e = r.from(e, t));
            var n = this._block
              , i = 0;
            while (this._blockOffset + e.length - i >= this._blockSize) {
                for (var o = this._blockOffset; o < this._blockSize; )
                    n[o++] = e[i++];
                this._update(),
                this._blockOffset = 0
            }
            while (i < e.length)
                n[this._blockOffset++] = e[i++];
            for (var s = 0, l = 8 * e.length; l > 0; ++s)
                this._length[s] += l,
                l = this._length[s] / 4294967296 | 0,
                l > 0 && (this._length[s] -= 4294967296 * l);
            return this
        }
        ,
        s.prototype._update = function() {
            throw new Error("_update is not implemented")
        }
        ,
        s.prototype.digest = function(e) {
            if (this._finalized)
                throw new Error("Digest already called");
            this._finalized = !0;
            var t = this._digest();
            void 0 !== e && (t = t.toString(e)),
            this._block.fill(0),
            this._blockOffset = 0;
            for (var n = 0; n < 4; ++n)
                this._length[n] = 0;
            return t
        }
        ,
        s.prototype._digest = function() {
            throw new Error("_digest is not implemented")
        }
        ,
        e.exports = s
    },
        88276: function(e, t, n) {
        "use strict";
        var r = n(56698)
          , i = n(4729)
          , o = n(92861).Buffer
          , a = new Array(16);
        function s() {
            i.call(this, 64),
            this._a = 1732584193,
            this._b = 4023233417,
            this._c = 2562383102,
            this._d = 271733878
        }
        function l(e, t) {
            return e << t | e >>> 32 - t
        }
        function u(e, t, n, r, i, o, a) {
            return l(e + (t & n | ~t & r) + i + o | 0, a) + t | 0
        }
        function c(e, t, n, r, i, o, a) {
            return l(e + (t & r | n & ~r) + i + o | 0, a) + t | 0
        }
        function f(e, t, n, r, i, o, a) {
            return l(e + (t ^ n ^ r) + i + o | 0, a) + t | 0
        }
        function d(e, t, n, r, i, o, a) {
            return l(e + (n ^ (t | ~r)) + i + o | 0, a) + t | 0
        }
        r(s, i),
        s.prototype._update = function() {
            for (var e = a, t = 0; t < 16; ++t)
                e[t] = this._block.readInt32LE(4 * t);
            var n = this._a
              , r = this._b
              , i = this._c
              , o = this._d;
            n = u(n, r, i, o, e[0], 3614090360, 7),
            o = u(o, n, r, i, e[1], 3905402710, 12),
            i = u(i, o, n, r, e[2], 606105819, 17),
            r = u(r, i, o, n, e[3], 3250441966, 22),
            n = u(n, r, i, o, e[4], 4118548399, 7),
            o = u(o, n, r, i, e[5], 1200080426, 12),
            i = u(i, o, n, r, e[6], 2821735955, 17),
            r = u(r, i, o, n, e[7], 4249261313, 22),
            n = u(n, r, i, o, e[8], 1770035416, 7),
            o = u(o, n, r, i, e[9], 2336552879, 12),
            i = u(i, o, n, r, e[10], 4294925233, 17),
            r = u(r, i, o, n, e[11], 2304563134, 22),
            n = u(n, r, i, o, e[12], 1804603682, 7),
            o = u(o, n, r, i, e[13], 4254626195, 12),
            i = u(i, o, n, r, e[14], 2792965006, 17),
            r = u(r, i, o, n, e[15], 1236535329, 22),
            n = c(n, r, i, o, e[1], 4129170786, 5),
            o = c(o, n, r, i, e[6], 3225465664, 9),
            i = c(i, o, n, r, e[11], 643717713, 14),
            r = c(r, i, o, n, e[0], 3921069994, 20),
            n = c(n, r, i, o, e[5], 3593408605, 5),
            o = c(o, n, r, i, e[10], 38016083, 9),
            i = c(i, o, n, r, e[15], 3634488961, 14),
            r = c(r, i, o, n, e[4], 3889429448, 20),
            n = c(n, r, i, o, e[9], 568446438, 5),
            o = c(o, n, r, i, e[14], 3275163606, 9),
            i = c(i, o, n, r, e[3], 4107603335, 14),
            r = c(r, i, o, n, e[8], 1163531501, 20),
            n = c(n, r, i, o, e[13], 2850285829, 5),
            o = c(o, n, r, i, e[2], 4243563512, 9),
            i = c(i, o, n, r, e[7], 1735328473, 14),
            r = c(r, i, o, n, e[12], 2368359562, 20),
            n = f(n, r, i, o, e[5], 4294588738, 4),
            o = f(o, n, r, i, e[8], 2272392833, 11),
            i = f(i, o, n, r, e[11], 1839030562, 16),
            r = f(r, i, o, n, e[14], 4259657740, 23),
            n = f(n, r, i, o, e[1], 2763975236, 4),
            o = f(o, n, r, i, e[4], 1272893353, 11),
            i = f(i, o, n, r, e[7], 4139469664, 16),
            r = f(r, i, o, n, e[10], 3200236656, 23),
            n = f(n, r, i, o, e[13], 681279174, 4),
            o = f(o, n, r, i, e[0], 3936430074, 11),
            i = f(i, o, n, r, e[3], 3572445317, 16),
            r = f(r, i, o, n, e[6], 76029189, 23),
            n = f(n, r, i, o, e[9], 3654602809, 4),
            o = f(o, n, r, i, e[12], 3873151461, 11),
            i = f(i, o, n, r, e[15], 530742520, 16),
            r = f(r, i, o, n, e[2], 3299628645, 23),
            n = d(n, r, i, o, e[0], 4096336452, 6),
            o = d(o, n, r, i, e[7], 1126891415, 10),
            i = d(i, o, n, r, e[14], 2878612391, 15),
            r = d(r, i, o, n, e[5], 4237533241, 21),
            n = d(n, r, i, o, e[12], 1700485571, 6),
            o = d(o, n, r, i, e[3], 2399980690, 10),
            i = d(i, o, n, r, e[10], 4293915773, 15),
            r = d(r, i, o, n, e[1], 2240044497, 21),
            n = d(n, r, i, o, e[8], 1873313359, 6),
            o = d(o, n, r, i, e[15], 4264355552, 10),
            i = d(i, o, n, r, e[6], 2734768916, 15),
            r = d(r, i, o, n, e[13], 1309151649, 21),
            n = d(n, r, i, o, e[4], 4149444226, 6),
            o = d(o, n, r, i, e[11], 3174756917, 10),
            i = d(i, o, n, r, e[2], 718787259, 15),
            r = d(r, i, o, n, e[9], 3951481745, 21),
            this._a = this._a + n | 0,
            this._b = this._b + r | 0,
            this._c = this._c + i | 0,
            this._d = this._d + o | 0
        }
        ,
        s.prototype._digest = function() {
            this._block[this._blockOffset++] = 128,
            this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
            this._update(),
            this._blockOffset = 0),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
            var e = o.allocUnsafe(16);
            return e.writeInt32LE(this._a, 0),
            e.writeInt32LE(this._b, 4),
            e.writeInt32LE(this._c, 8),
            e.writeInt32LE(this._d, 12),
            e
        }
        ,
        e.exports = s
    },
        56698: function(e) {
        "function" === typeof Object.create ? e.exports = function(e, t) {
            t && (e.super_ = t,
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        }
        : e.exports = function(e, t) {
            if (t) {
                e.super_ = t;
                var n = function() {};
                n.prototype = t.prototype,
                e.prototype = new n,
                e.prototype.constructor = e
            }
        }
    },
        47108: function(e, t, n) {
        "use strict";
        var r = n(56698)
          , i = n(88276)
          , o = n(66011)
          , a = n(62802)
          , s = n(56168);
        function l(e) {
            s.call(this, "digest"),
            this._hash = e
        }
        r(l, s),
        l.prototype._update = function(e) {
            this._hash.update(e)
        }
        ,
        l.prototype._final = function() {
            return this._hash.digest()
        }
        ,
        e.exports = function(e) {
            return e = e.toLowerCase(),
            "md5" === e ? new i : "rmd160" === e || "ripemd160" === e ? new o : new l(a(e))
        }
    },
        251: function(e, t) {
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
        t.read = function(e, t, n, r, i) {
            var o, a, s = 8 * i - r - 1, l = (1 << s) - 1, u = l >> 1, c = -7, f = n ? i - 1 : 0, d = n ? -1 : 1, h = e[t + f];
            for (f += d,
            o = h & (1 << -c) - 1,
            h >>= -c,
            c += s; c > 0; o = 256 * o + e[t + f],
            f += d,
            c -= 8)
                ;
            for (a = o & (1 << -c) - 1,
            o >>= -c,
            c += r; c > 0; a = 256 * a + e[t + f],
            f += d,
            c -= 8)
                ;
            if (0 === o)
                o = 1 - u;
            else {
                if (o === l)
                    return a ? NaN : 1 / 0 * (h ? -1 : 1);
                a += Math.pow(2, r),
                o -= u
            }
            return (h ? -1 : 1) * a * Math.pow(2, o - r)
        }
        ,
        t.write = function(e, t, n, r, i, o) {
            var a, s, l, u = 8 * o - i - 1, c = (1 << u) - 1, f = c >> 1, d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = r ? 0 : o - 1, p = r ? 1 : -1, v = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t),
            isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0,
            a = c) : (a = Math.floor(Math.log(t) / Math.LN2),
            t * (l = Math.pow(2, -a)) < 1 && (a--,
            l *= 2),
            t += a + f >= 1 ? d / l : d * Math.pow(2, 1 - f),
            t * l >= 2 && (a++,
            l /= 2),
            a + f >= c ? (s = 0,
            a = c) : a + f >= 1 ? (s = (t * l - 1) * Math.pow(2, i),
            a += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, i),
            a = 0)); i >= 8; e[n + h] = 255 & s,
            h += p,
            s /= 256,
            i -= 8)
                ;
            for (a = a << i | s,
            u += i; u > 0; e[n + h] = 255 & a,
            h += p,
            a /= 256,
            u -= 8)
                ;
            e[n + h - p] |= 128 * v
        }
    },
        67526: function(e, t) {
        "use strict";
        t.byteLength = u,
        t.toByteArray = f,
        t.fromByteArray = p;
        for (var n = [], r = [], i = "undefined" !== typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = o.length; a < s; ++a)
            n[a] = o[a],
            r[o.charCodeAt(a)] = a;
        function l(e) {
            var t = e.length;
            if (t % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var n = e.indexOf("=");
            -1 === n && (n = t);
            var r = n === t ? 0 : 4 - n % 4;
            return [n, r]
        }
        function u(e) {
            var t = l(e)
              , n = t[0]
              , r = t[1];
            return 3 * (n + r) / 4 - r
        }
        function c(e, t, n) {
            return 3 * (t + n) / 4 - n
        }
        function f(e) {
            var t, n, o = l(e), a = o[0], s = o[1], u = new i(c(e, a, s)), f = 0, d = s > 0 ? a - 4 : a;
            for (n = 0; n < d; n += 4)
                t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)],
                u[f++] = t >> 16 & 255,
                u[f++] = t >> 8 & 255,
                u[f++] = 255 & t;
            return 2 === s && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4,
            u[f++] = 255 & t),
            1 === s && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2,
            u[f++] = t >> 8 & 255,
            u[f++] = 255 & t),
            u
        }
        function d(e) {
            return n[e >> 18 & 63] + n[e >> 12 & 63] + n[e >> 6 & 63] + n[63 & e]
        }
        function h(e, t, n) {
            for (var r, i = [], o = t; o < n; o += 3)
                r = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]),
                i.push(d(r));
            return i.join("")
        }
        function p(e) {
            for (var t, r = e.length, i = r % 3, o = [], a = 16383, s = 0, l = r - i; s < l; s += a)
                o.push(h(e, s, s + a > l ? l : s + a));
            return 1 === i ? (t = e[r - 1],
            o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1],
            o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "=")),
            o.join("")
        }
        r["-".charCodeAt(0)] = 62,
        r["_".charCodeAt(0)] = 63
    },
        48287: function(e, t, n) {
        "use strict";
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
        var r = n(67526)
          , i = n(251)
          , o = "function" === typeof Symbol && "function" === typeof Symbol["for"] ? Symbol["for"]("nodejs.util.inspect.custom") : null;
        t.Buffer = u,
        t.SlowBuffer = w,
        t.INSPECT_MAX_BYTES = 50;
        var a = 2147483647;
        function s() {
            try {
                var e = new Uint8Array(1)
                  , t = {
                    foo: function() {
                        return 42
                    }
                };
                return Object.setPrototypeOf(t, Uint8Array.prototype),
                Object.setPrototypeOf(e, t),
                42 === e.foo()
            } catch (n) {
                return !1
            }
        }
        function l(e) {
            if (e > a)
                throw new RangeError('The value "' + e + '" is invalid for option "size"');
            var t = new Uint8Array(e);
            return Object.setPrototypeOf(t, u.prototype),
            t
        }
        function u(e, t, n) {
            if ("number" === typeof e) {
                if ("string" === typeof t)
                    throw new TypeError('The "string" argument must be of type string. Received type number');
                return h(e)
            }
            return c(e, t, n)
        }
        function c(e, t, n) {
            if ("string" === typeof e)
                return p(e, t);
            if (ArrayBuffer.isView(e))
                return m(e);
            if (null == e)
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
            if (Z(e, ArrayBuffer) || e && Z(e.buffer, ArrayBuffer))
                return g(e, t, n);
            if ("undefined" !== typeof SharedArrayBuffer && (Z(e, SharedArrayBuffer) || e && Z(e.buffer, SharedArrayBuffer)))
                return g(e, t, n);
            if ("number" === typeof e)
                throw new TypeError('The "value" argument must not be of type number. Received type number');
            var r = e.valueOf && e.valueOf();
            if (null != r && r !== e)
                return u.from(r, t, n);
            var i = y(e);
            if (i)
                return i;
            if ("undefined" !== typeof Symbol && null != Symbol.toPrimitive && "function" === typeof e[Symbol.toPrimitive])
                return u.from(e[Symbol.toPrimitive]("string"), t, n);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
        }
        function f(e) {
            if ("number" !== typeof e)
                throw new TypeError('"size" argument must be of type number');
            if (e < 0)
                throw new RangeError('The value "' + e + '" is invalid for option "size"')
        }
        function d(e, t, n) {
            return f(e),
            e <= 0 ? l(e) : void 0 !== t ? "string" === typeof n ? l(e).fill(t, n) : l(e).fill(t) : l(e)
        }
        function h(e) {
            return f(e),
            l(e < 0 ? 0 : 0 | b(e))
        }
        function p(e, t) {
            if ("string" === typeof t && "" !== t || (t = "utf8"),
            !u.isEncoding(t))
                throw new TypeError("Unknown encoding: " + t);
            var n = 0 | E(e, t)
              , r = l(n)
              , i = r.write(e, t);
            return i !== n && (r = r.slice(0, i)),
            r
        }
        function v(e) {
            for (var t = e.length < 0 ? 0 : 0 | b(e.length), n = l(t), r = 0; r < t; r += 1)
                n[r] = 255 & e[r];
            return n
        }
        function m(e) {
            if (Z(e, Uint8Array)) {
                var t = new Uint8Array(e);
                return g(t.buffer, t.byteOffset, t.byteLength)
            }
            return v(e)
        }
        function g(e, t, n) {
            if (t < 0 || e.byteLength < t)
                throw new RangeError('"offset" is outside of buffer bounds');
            if (e.byteLength < t + (n || 0))
                throw new RangeError('"length" is outside of buffer bounds');
            var r;
            return r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e,t) : new Uint8Array(e,t,n),
            Object.setPrototypeOf(r, u.prototype),
            r
        }
        function y(e) {
            if (u.isBuffer(e)) {
                var t = 0 | b(e.length)
                  , n = l(t);
                return 0 === n.length || e.copy(n, 0, 0, t),
                n
            }
            return void 0 !== e.length ? "number" !== typeof e.length || J(e.length) ? l(0) : v(e) : "Buffer" === e.type && Array.isArray(e.data) ? v(e.data) : void 0
        }
        function b(e) {
            if (e >= a)
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
            return 0 | e
        }
        function w(e) {
            return +e != e && (e = 0),
            u.alloc(+e)
        }
        function E(e, t) {
            if (u.isBuffer(e))
                return e.length;
            if (ArrayBuffer.isView(e) || Z(e, ArrayBuffer))
                return e.byteLength;
            if ("string" !== typeof e)
                throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
            var n = e.length
              , r = arguments.length > 2 && !0 === arguments[2];
            if (!r && 0 === n)
                return 0;
            for (var i = !1; ; )
                switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                    return U(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return Q(e).length;
                default:
                    if (i)
                        return r ? -1 : U(e).length;
                    t = ("" + t).toLowerCase(),
                    i = !0
                }
        }
        function A(e, t, n) {
            var r = !1;
            if ((void 0 === t || t < 0) && (t = 0),
            t > this.length)
                return "";
            if ((void 0 === n || n > this.length) && (n = this.length),
            n <= 0)
                return "";
            if (n >>>= 0,
            t >>>= 0,
            n <= t)
                return "";
            e || (e = "utf8");
            while (1)
                switch (e) {
                case "hex":
                    return F(this, t, n);
                case "utf8":
                case "utf-8":
                    return T(this, t, n);
                case "ascii":
                    return I(this, t, n);
                case "latin1":
                case "binary":
                    return N(this, t, n);
                case "base64":
                    return O(this, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return j(this, t, n);
                default:
                    if (r)
                        throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(),
                    r = !0
                }
        }
        function x(e, t, n) {
            var r = e[t];
            e[t] = e[n],
            e[n] = r
        }
        function R(e, t, n, r, i) {
            if (0 === e.length)
                return -1;
            if ("string" === typeof n ? (r = n,
            n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
            n = +n,
            J(n) && (n = i ? 0 : e.length - 1),
            n < 0 && (n = e.length + n),
            n >= e.length) {
                if (i)
                    return -1;
                n = e.length - 1
            } else if (n < 0) {
                if (!i)
                    return -1;
                n = 0
            }
            if ("string" === typeof t && (t = u.from(t, r)),
            u.isBuffer(t))
                return 0 === t.length ? -1 : M(e, t, n, r, i);
            if ("number" === typeof t)
                return t &= 255,
                "function" === typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : M(e, [t], n, r, i);
            throw new TypeError("val must be string, number or Buffer")
        }
        function M(e, t, n, r, i) {
            var o, a = 1, s = e.length, l = t.length;
            if (void 0 !== r && (r = String(r).toLowerCase(),
            "ucs2" === r || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                if (e.length < 2 || t.length < 2)
                    return -1;
                a = 2,
                s /= 2,
                l /= 2,
                n /= 2
            }
            function u(e, t) {
                return 1 === a ? e[t] : e.readUInt16BE(t * a)
            }
            if (i) {
                var c = -1;
                for (o = n; o < s; o++)
                    if (u(e, o) === u(t, -1 === c ? 0 : o - c)) {
                        if (-1 === c && (c = o),
                        o - c + 1 === l)
                            return c * a
                    } else
                        -1 !== c && (o -= o - c),
                        c = -1
            } else
                for (n + l > s && (n = s - l),
                o = n; o >= 0; o--) {
                    for (var f = !0, d = 0; d < l; d++)
                        if (u(e, o + d) !== u(t, d)) {
                            f = !1;
                            break
                        }
                    if (f)
                        return o
                }
            return -1
        }
        function C(e, t, n, r) {
            n = Number(n) || 0;
            var i = e.length - n;
            r ? (r = Number(r),
            r > i && (r = i)) : r = i;
            var o = t.length;
            r > o / 2 && (r = o / 2);
            for (var a = 0; a < r; ++a) {
                var s = parseInt(t.substr(2 * a, 2), 16);
                if (J(s))
                    return a;
                e[n + a] = s
            }
            return a
        }
        function k(e, t, n, r) {
            return Y(U(t, e.length - n), e, n, r)
        }
        function S(e, t, n, r) {
            return Y(q(t), e, n, r)
        }
        function D(e, t, n, r) {
            return Y(Q(t), e, n, r)
        }
        function B(e, t, n, r) {
            return Y(G(t, e.length - n), e, n, r)
        }
        function O(e, t, n) {
            return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
        }
        function T(e, t, n) {
            n = Math.min(e.length, n);
            var r = []
              , i = t;
            while (i < n) {
                var o, a, s, l, u = e[i], c = null, f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                if (i + f <= n)
                    switch (f) {
                    case 1:
                        u < 128 && (c = u);
                        break;
                    case 2:
                        o = e[i + 1],
                        128 === (192 & o) && (l = (31 & u) << 6 | 63 & o,
                        l > 127 && (c = l));
                        break;
                    case 3:
                        o = e[i + 1],
                        a = e[i + 2],
                        128 === (192 & o) && 128 === (192 & a) && (l = (15 & u) << 12 | (63 & o) << 6 | 63 & a,
                        l > 2047 && (l < 55296 || l > 57343) && (c = l));
                        break;
                    case 4:
                        o = e[i + 1],
                        a = e[i + 2],
                        s = e[i + 3],
                        128 === (192 & o) && 128 === (192 & a) && 128 === (192 & s) && (l = (15 & u) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s,
                        l > 65535 && l < 1114112 && (c = l))
                    }
                null === c ? (c = 65533,
                f = 1) : c > 65535 && (c -= 65536,
                r.push(c >>> 10 & 1023 | 55296),
                c = 56320 | 1023 & c),
                r.push(c),
                i += f
            }
            return L(r)
        }
        t.kMaxLength = a,
        u.TYPED_ARRAY_SUPPORT = s(),
        u.TYPED_ARRAY_SUPPORT || "undefined" === typeof console || "function" !== typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
        Object.defineProperty(u.prototype, "parent", {
            enumerable: !0,
            get: function() {
                if (u.isBuffer(this))
                    return this.buffer
            }
        }),
        Object.defineProperty(u.prototype, "offset", {
            enumerable: !0,
            get: function() {
                if (u.isBuffer(this))
                    return this.byteOffset
            }
        }),
        u.poolSize = 8192,
        u.from = function(e, t, n) {
            return c(e, t, n)
        }
        ,
        Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(u, Uint8Array),
        u.alloc = function(e, t, n) {
            return d(e, t, n)
        }
        ,
        u.allocUnsafe = function(e) {
            return h(e)
        }
        ,
        u.allocUnsafeSlow = function(e) {
            return h(e)
        }
        ,
        u.isBuffer = function(e) {
            return null != e && !0 === e._isBuffer && e !== u.prototype
        }
        ,
        u.compare = function(e, t) {
            if (Z(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
            Z(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            !u.isBuffer(e) || !u.isBuffer(t))
                throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (e === t)
                return 0;
            for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
                if (e[i] !== t[i]) {
                    n = e[i],
                    r = t[i];
                    break
                }
            return n < r ? -1 : r < n ? 1 : 0
        }
        ,
        u.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }
        ,
        u.concat = function(e, t) {
            if (!Array.isArray(e))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length)
                return u.alloc(0);
            var n;
            if (void 0 === t)
                for (t = 0,
                n = 0; n < e.length; ++n)
                    t += e[n].length;
            var r = u.allocUnsafe(t)
              , i = 0;
            for (n = 0; n < e.length; ++n) {
                var o = e[n];
                if (Z(o, Uint8Array))
                    i + o.length > r.length ? u.from(o).copy(r, i) : Uint8Array.prototype.set.call(r, o, i);
                else {
                    if (!u.isBuffer(o))
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    o.copy(r, i)
                }
                i += o.length
            }
            return r
        }
        ,
        u.byteLength = E,
        u.prototype._isBuffer = !0,
        u.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 !== 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2)
                x(this, t, t + 1);
            return this
        }
        ,
        u.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 !== 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
                x(this, t, t + 3),
                x(this, t + 1, t + 2);
            return this
        }
        ,
        u.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 !== 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
                x(this, t, t + 7),
                x(this, t + 1, t + 6),
                x(this, t + 2, t + 5),
                x(this, t + 3, t + 4);
            return this
        }
        ,
        u.prototype.toString = function() {
            var e = this.length;
            return 0 === e ? "" : 0 === arguments.length ? T(this, 0, e) : A.apply(this, arguments)
        }
        ,
        u.prototype.toLocaleString = u.prototype.toString,
        u.prototype.equals = function(e) {
            if (!u.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === u.compare(this, e)
        }
        ,
        u.prototype.inspect = function() {
            var e = ""
              , n = t.INSPECT_MAX_BYTES;
            return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(),
            this.length > n && (e += " ... "),
            "<Buffer " + e + ">"
        }
        ,
        o && (u.prototype[o] = u.prototype.inspect),
        u.prototype.compare = function(e, t, n, r, i) {
            if (Z(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
            !u.isBuffer(e))
                throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
            if (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === r && (r = 0),
            void 0 === i && (i = this.length),
            t < 0 || n > e.length || r < 0 || i > this.length)
                throw new RangeError("out of range index");
            if (r >= i && t >= n)
                return 0;
            if (r >= i)
                return -1;
            if (t >= n)
                return 1;
            if (t >>>= 0,
            n >>>= 0,
            r >>>= 0,
            i >>>= 0,
            this === e)
                return 0;
            for (var o = i - r, a = n - t, s = Math.min(o, a), l = this.slice(r, i), c = e.slice(t, n), f = 0; f < s; ++f)
                if (l[f] !== c[f]) {
                    o = l[f],
                    a = c[f];
                    break
                }
            return o < a ? -1 : a < o ? 1 : 0
        }
        ,
        u.prototype.includes = function(e, t, n) {
            return -1 !== this.indexOf(e, t, n)
        }
        ,
        u.prototype.indexOf = function(e, t, n) {
            return R(this, e, t, n, !0)
        }
        ,
        u.prototype.lastIndexOf = function(e, t, n) {
            return R(this, e, t, n, !1)
        }
        ,
        u.prototype.write = function(e, t, n, r) {
            if (void 0 === t)
                r = "utf8",
                n = this.length,
                t = 0;
            else if (void 0 === n && "string" === typeof t)
                r = t,
                n = this.length,
                t = 0;
            else {
                if (!isFinite(t))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t >>>= 0,
                isFinite(n) ? (n >>>= 0,
                void 0 === r && (r = "utf8")) : (r = n,
                n = void 0)
            }
            var i = this.length - t;
            if ((void 0 === n || n > i) && (n = i),
            e.length > 0 && (n < 0 || t < 0) || t > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var o = !1; ; )
                switch (r) {
                case "hex":
                    return C(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return k(this, e, t, n);
                case "ascii":
                case "latin1":
                case "binary":
                    return S(this, e, t, n);
                case "base64":
                    return D(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return B(this, e, t, n);
                default:
                    if (o)
                        throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(),
                    o = !0
                }
        }
        ,
        u.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
        var P = 4096;
        function L(e) {
            var t = e.length;
            if (t <= P)
                return String.fromCharCode.apply(String, e);
            var n = ""
              , r = 0;
            while (r < t)
                n += String.fromCharCode.apply(String, e.slice(r, r += P));
            return n
        }
        function I(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var i = t; i < n; ++i)
                r += String.fromCharCode(127 & e[i]);
            return r
        }
        function N(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var i = t; i < n; ++i)
                r += String.fromCharCode(e[i]);
            return r
        }
        function F(e, t, n) {
            var r = e.length;
            (!t || t < 0) && (t = 0),
            (!n || n < 0 || n > r) && (n = r);
            for (var i = "", o = t; o < n; ++o)
                i += $[e[o]];
            return i
        }
        function j(e, t, n) {
            for (var r = e.slice(t, n), i = "", o = 0; o < r.length - 1; o += 2)
                i += String.fromCharCode(r[o] + 256 * r[o + 1]);
            return i
        }
        function z(e, t, n) {
            if (e % 1 !== 0 || e < 0)
                throw new RangeError("offset is not uint");
            if (e + t > n)
                throw new RangeError("Trying to access beyond buffer length")
        }
        function H(e, t, n, r, i, o) {
            if (!u.isBuffer(e))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > i || t < o)
                throw new RangeError('"value" argument is out of bounds');
            if (n + r > e.length)
                throw new RangeError("Index out of range")
        }
        function W(e, t, n, r, i, o) {
            if (n + r > e.length)
                throw new RangeError("Index out of range");
            if (n < 0)
                throw new RangeError("Index out of range")
        }
        function _(e, t, n, r, o) {
            return t = +t,
            n >>>= 0,
            o || W(e, t, n, 4, 34028234663852886e22, -34028234663852886e22),
            i.write(e, t, n, r, 23, 4),
            n + 4
        }
        function K(e, t, n, r, o) {
            return t = +t,
            n >>>= 0,
            o || W(e, t, n, 8, 17976931348623157e292, -17976931348623157e292),
            i.write(e, t, n, r, 52, 8),
            n + 8
        }
        u.prototype.slice = function(e, t) {
            var n = this.length;
            e = ~~e,
            t = void 0 === t ? n : ~~t,
            e < 0 ? (e += n,
            e < 0 && (e = 0)) : e > n && (e = n),
            t < 0 ? (t += n,
            t < 0 && (t = 0)) : t > n && (t = n),
            t < e && (t = e);
            var r = this.subarray(e, t);
            return Object.setPrototypeOf(r, u.prototype),
            r
        }
        ,
        u.prototype.readUintLE = u.prototype.readUIntLE = function(e, t, n) {
            e >>>= 0,
            t >>>= 0,
            n || z(e, t, this.length);
            var r = this[e]
              , i = 1
              , o = 0;
            while (++o < t && (i *= 256))
                r += this[e + o] * i;
            return r
        }
        ,
        u.prototype.readUintBE = u.prototype.readUIntBE = function(e, t, n) {
            e >>>= 0,
            t >>>= 0,
            n || z(e, t, this.length);
            var r = this[e + --t]
              , i = 1;
            while (t > 0 && (i *= 256))
                r += this[e + --t] * i;
            return r
        }
        ,
        u.prototype.readUint8 = u.prototype.readUInt8 = function(e, t) {
            return e >>>= 0,
            t || z(e, 1, this.length),
            this[e]
        }
        ,
        u.prototype.readUint16LE = u.prototype.readUInt16LE = function(e, t) {
            return e >>>= 0,
            t || z(e, 2, this.length),
            this[e] | this[e + 1] << 8
        }
        ,
        u.prototype.readUint16BE = u.prototype.readUInt16BE = function(e, t) {
            return e >>>= 0,
            t || z(e, 2, this.length),
            this[e] << 8 | this[e + 1]
        }
        ,
        u.prototype.readUint32LE = u.prototype.readUInt32LE = function(e, t) {
            return e >>>= 0,
            t || z(e, 4, this.length),
            (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }
        ,
        u.prototype.readUint32BE = u.prototype.readUInt32BE = function(e, t) {
            return e >>>= 0,
            t || z(e, 4, this.length),
            16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }
        ,
        u.prototype.readIntLE = function(e, t, n) {
            e >>>= 0,
            t >>>= 0,
            n || z(e, t, this.length);
            var r = this[e]
              , i = 1
              , o = 0;
            while (++o < t && (i *= 256))
                r += this[e + o] * i;
            return i *= 128,
            r >= i && (r -= Math.pow(2, 8 * t)),
            r
        }
        ,
        u.prototype.readIntBE = function(e, t, n) {
            e >>>= 0,
            t >>>= 0,
            n || z(e, t, this.length);
            var r = t
              , i = 1
              , o = this[e + --r];
            while (r > 0 && (i *= 256))
                o += this[e + --r] * i;
            return i *= 128,
            o >= i && (o -= Math.pow(2, 8 * t)),
            o
        }
        ,
        u.prototype.readInt8 = function(e, t) {
            return e >>>= 0,
            t || z(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }
        ,
        u.prototype.readInt16LE = function(e, t) {
            e >>>= 0,
            t || z(e, 2, this.length);
            var n = this[e] | this[e + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }
        ,
        u.prototype.readInt16BE = function(e, t) {
            e >>>= 0,
            t || z(e, 2, this.length);
            var n = this[e + 1] | this[e] << 8;
            return 32768 & n ? 4294901760 | n : n
        }
        ,
        u.prototype.readInt32LE = function(e, t) {
            return e >>>= 0,
            t || z(e, 4, this.length),
            this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }
        ,
        u.prototype.readInt32BE = function(e, t) {
            return e >>>= 0,
            t || z(e, 4, this.length),
            this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }
        ,
        u.prototype.readFloatLE = function(e, t) {
            return e >>>= 0,
            t || z(e, 4, this.length),
            i.read(this, e, !0, 23, 4)
        }
        ,
        u.prototype.readFloatBE = function(e, t) {
            return e >>>= 0,
            t || z(e, 4, this.length),
            i.read(this, e, !1, 23, 4)
        }
        ,
        u.prototype.readDoubleLE = function(e, t) {
            return e >>>= 0,
            t || z(e, 8, this.length),
            i.read(this, e, !0, 52, 8)
        }
        ,
        u.prototype.readDoubleBE = function(e, t) {
            return e >>>= 0,
            t || z(e, 8, this.length),
            i.read(this, e, !1, 52, 8)
        }
        ,
        u.prototype.writeUintLE = u.prototype.writeUIntLE = function(e, t, n, r) {
            if (e = +e,
            t >>>= 0,
            n >>>= 0,
            !r) {
                var i = Math.pow(2, 8 * n) - 1;
                H(this, e, t, n, i, 0)
            }
            var o = 1
              , a = 0;
            this[t] = 255 & e;
            while (++a < n && (o *= 256))
                this[t + a] = e / o & 255;
            return t + n
        }
        ,
        u.prototype.writeUintBE = u.prototype.writeUIntBE = function(e, t, n, r) {
            if (e = +e,
            t >>>= 0,
            n >>>= 0,
            !r) {
                var i = Math.pow(2, 8 * n) - 1;
                H(this, e, t, n, i, 0)
            }
            var o = n - 1
              , a = 1;
            this[t + o] = 255 & e;
            while (--o >= 0 && (a *= 256))
                this[t + o] = e / a & 255;
            return t + n
        }
        ,
        u.prototype.writeUint8 = u.prototype.writeUInt8 = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || H(this, e, t, 1, 255, 0),
            this[t] = 255 & e,
            t + 1
        }
        ,
        u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || H(this, e, t, 2, 65535, 0),
            this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            t + 2
        }
        ,
        u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || H(this, e, t, 2, 65535, 0),
            this[t] = e >>> 8,
            this[t + 1] = 255 & e,
            t + 2
        }
        ,
        u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || H(this, e, t, 4, 4294967295, 0),
            this[t + 3] = e >>> 24,
            this[t + 2] = e >>> 16,
            this[t + 1] = e >>> 8,
            this[t] = 255 & e,
            t + 4
        }
        ,
        u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || H(this, e, t, 4, 4294967295, 0),
            this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e,
            t + 4
        }
        ,
        u.prototype.writeIntLE = function(e, t, n, r) {
            if (e = +e,
            t >>>= 0,
            !r) {
                var i = Math.pow(2, 8 * n - 1);
                H(this, e, t, n, i - 1, -i)
            }
            var o = 0
              , a = 1
              , s = 0;
            this[t] = 255 & e;
            while (++o < n && (a *= 256))
                e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
                this[t + o] = (e / a >> 0) - s & 255;
            return t + n
        }
        ,
        u.prototype.writeIntBE = function(e, t, n, r) {
            if (e = +e,
            t >>>= 0,
            !r) {
                var i = Math.pow(2, 8 * n - 1);
                H(this, e, t, n, i - 1, -i)
            }
            var o = n - 1
              , a = 1
              , s = 0;
            this[t + o] = 255 & e;
            while (--o >= 0 && (a *= 256))
                e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
                this[t + o] = (e / a >> 0) - s & 255;
            return t + n
        }
        ,
        u.prototype.writeInt8 = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || H(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            this[t] = 255 & e,
            t + 1
        }
        ,
        u.prototype.writeInt16LE = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || H(this, e, t, 2, 32767, -32768),
            this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            t + 2
        }
        ,
        u.prototype.writeInt16BE = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || H(this, e, t, 2, 32767, -32768),
            this[t] = e >>> 8,
            this[t + 1] = 255 & e,
            t + 2
        }
        ,
        u.prototype.writeInt32LE = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || H(this, e, t, 4, 2147483647, -2147483648),
            this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            this[t + 2] = e >>> 16,
            this[t + 3] = e >>> 24,
            t + 4
        }
        ,
        u.prototype.writeInt32BE = function(e, t, n) {
            return e = +e,
            t >>>= 0,
            n || H(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e,
            t + 4
        }
        ,
        u.prototype.writeFloatLE = function(e, t, n) {
            return _(this, e, t, !0, n)
        }
        ,
        u.prototype.writeFloatBE = function(e, t, n) {
            return _(this, e, t, !1, n)
        }
        ,
        u.prototype.writeDoubleLE = function(e, t, n) {
            return K(this, e, t, !0, n)
        }
        ,
        u.prototype.writeDoubleBE = function(e, t, n) {
            return K(this, e, t, !1, n)
        }
        ,
        u.prototype.copy = function(e, t, n, r) {
            if (!u.isBuffer(e))
                throw new TypeError("argument should be a Buffer");
            if (n || (n = 0),
            r || 0 === r || (r = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            r > 0 && r < n && (r = n),
            r === n)
                return 0;
            if (0 === e.length || 0 === this.length)
                return 0;
            if (t < 0)
                throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length)
                throw new RangeError("Index out of range");
            if (r < 0)
                throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length),
            e.length - t < r - n && (r = e.length - t + n);
            var i = r - n;
            return this === e && "function" === typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t),
            i
        }
        ,
        u.prototype.fill = function(e, t, n, r) {
            if ("string" === typeof e) {
                if ("string" === typeof t ? (r = t,
                t = 0,
                n = this.length) : "string" === typeof n && (r = n,
                n = this.length),
                void 0 !== r && "string" !== typeof r)
                    throw new TypeError("encoding must be a string");
                if ("string" === typeof r && !u.isEncoding(r))
                    throw new TypeError("Unknown encoding: " + r);
                if (1 === e.length) {
                    var i = e.charCodeAt(0);
                    ("utf8" === r && i < 128 || "latin1" === r) && (e = i)
                }
            } else
                "number" === typeof e ? e &= 255 : "boolean" === typeof e && (e = Number(e));
            if (t < 0 || this.length < t || this.length < n)
                throw new RangeError("Out of range index");
            if (n <= t)
                return this;
            var o;
            if (t >>>= 0,
            n = void 0 === n ? this.length : n >>> 0,
            e || (e = 0),
            "number" === typeof e)
                for (o = t; o < n; ++o)
                    this[o] = e;
            else {
                var a = u.isBuffer(e) ? e : u.from(e, r)
                  , s = a.length;
                if (0 === s)
                    throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                for (o = 0; o < n - t; ++o)
                    this[o + t] = a[o % s]
            }
            return this
        }
        ;
        var X = /[^+/0-9A-Za-z-_]/g;
        function V(e) {
            if (e = e.split("=")[0],
            e = e.trim().replace(X, ""),
            e.length < 2)
                return "";
            while (e.length % 4 !== 0)
                e += "=";
            return e
        }
        function U(e, t) {
            var n;
            t = t || 1 / 0;
            for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
                if (n = e.charCodeAt(a),
                n > 55295 && n < 57344) {
                    if (!i) {
                        if (n > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === r) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        i = n;
                        continue
                    }
                    if (n < 56320) {
                        (t -= 3) > -1 && o.push(239, 191, 189),
                        i = n;
                        continue
                    }
                    n = 65536 + (i - 55296 << 10 | n - 56320)
                } else
                    i && (t -= 3) > -1 && o.push(239, 191, 189);
                if (i = null,
                n < 128) {
                    if ((t -= 1) < 0)
                        break;
                    o.push(n)
                } else if (n < 2048) {
                    if ((t -= 2) < 0)
                        break;
                    o.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((t -= 3) < 0)
                        break;
                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112))
                        throw new Error("Invalid code point");
                    if ((t -= 4) < 0)
                        break;
                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return o
        }
        function q(e) {
            for (var t = [], n = 0; n < e.length; ++n)
                t.push(255 & e.charCodeAt(n));
            return t
        }
        function G(e, t) {
            for (var n, r, i, o = [], a = 0; a < e.length; ++a) {
                if ((t -= 2) < 0)
                    break;
                n = e.charCodeAt(a),
                r = n >> 8,
                i = n % 256,
                o.push(i),
                o.push(r)
            }
            return o
        }
        function Q(e) {
            return r.toByteArray(V(e))
        }
        function Y(e, t, n, r) {
            for (var i = 0; i < r; ++i) {
                if (i + n >= t.length || i >= e.length)
                    break;
                t[i + n] = e[i]
            }
            return i
        }
        function Z(e, t) {
            return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
        }
        function J(e) {
            return e !== e
        }
        var $ = function() {
            for (var e = "0123456789abcdef", t = new Array(256), n = 0; n < 16; ++n)
                for (var r = 16 * n, i = 0; i < 16; ++i)
                    t[r + i] = e[n] + e[i];
            return t
        }()
    },
        92861: function(e, t, n) {
        /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
        var r = n(48287)
          , i = r.Buffer;
        function o(e, t) {
            for (var n in e)
                t[n] = e[n]
        }
        function a(e, t, n) {
            return i(e, t, n)
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = r : (o(r, t),
        t.Buffer = a),
        a.prototype = Object.create(i.prototype),
        o(i, a),
        a.from = function(e, t, n) {
            if ("number" === typeof e)
                throw new TypeError("Argument must not be a number");
            return i(e, t, n)
        }
        ,
        a.alloc = function(e, t, n) {
            if ("number" !== typeof e)
                throw new TypeError("Argument must be a number");
            var r = i(e);
            return void 0 !== t ? "string" === typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0),
            r
        }
        ,
        a.allocUnsafe = function(e) {
            if ("number" !== typeof e)
                throw new TypeError("Argument must be a number");
            return i(e)
        }
        ,
        a.allocUnsafeSlow = function(e) {
            if ("number" !== typeof e)
                throw new TypeError("Argument must be a number");
            return r.SlowBuffer(e)
        }
    },
        53209: function(e, t, n) {
        "use strict";
        var r = 65536
          , i = 4294967295;
        function o() {
            throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
        }
        var a = n(92861).Buffer
          , s = n.g.crypto || n.g.msCrypto;
        function l(e, t) {
            if (e > i)
                throw new RangeError("requested too many random bytes");
            var n = a.allocUnsafe(e);
            if (e > 0)
                if (e > r)
                    for (var o = 0; o < e; o += r)
                        s.getRandomValues(n.slice(o, o + r));
                else
                    s.getRandomValues(n);
            return "function" === typeof t ? process.nextTick((function() {
                t(null, n)
            }
            )) : n
        }
        s && s.getRandomValues ? e.exports = l : e.exports = o
    },
        91565: function(e, t, n) {
        "use strict";
        t.randomBytes = t.rng = t.pseudoRandomBytes = t.prng = n(53209),
        t.createHash = t.Hash = n(47108),
        t.createHmac = t.Hmac = n(83507);
        var r = n(55715)
          , i = Object.keys(r)
          , o = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(i);
        t.getHashes = function() {
            return o
        }
        ;
        var a = n(78396);
        t.pbkdf2 = a.pbkdf2,
        t.pbkdf2Sync = a.pbkdf2Sync;
        var s = n(30125);
        t.Cipher = s.Cipher,
        t.createCipher = s.createCipher,
        t.Cipheriv = s.Cipheriv,
        t.createCipheriv = s.createCipheriv,
        t.Decipher = s.Decipher,
        t.createDecipher = s.createDecipher,
        t.Decipheriv = s.Decipheriv,
        t.createDecipheriv = s.createDecipheriv,
        t.getCiphers = s.getCiphers,
        t.listCiphers = s.listCiphers;
        var l = n(15380);
        t.DiffieHellmanGroup = l.DiffieHellmanGroup,
        t.createDiffieHellmanGroup = l.createDiffieHellmanGroup,
        t.getDiffieHellman = l.getDiffieHellman,
        t.createDiffieHellman = l.createDiffieHellman,
        t.DiffieHellman = l.DiffieHellman;
        var u = n(20);
        t.createSign = u.createSign,
        t.Sign = u.Sign,
        t.createVerify = u.createVerify,
        t.Verify = u.Verify,
        t.createECDH = n(61324);
        var c = n(97168);
        t.publicEncrypt = c.publicEncrypt,
        t.privateEncrypt = c.privateEncrypt,
        t.publicDecrypt = c.publicDecrypt,
        t.privateDecrypt = c.privateDecrypt;
        var f = n(76983);
        t.randomFill = f.randomFill,
        t.randomFillSync = f.randomFillSync,
        t.createCredentials = function() {
            throw new Error(["sorry, createCredentials is not implemented yet", "we accept pull requests", "https://github.com/crypto-browserify/crypto-browserify"].join("\n"))
        }
        ,
        t.constants = {
            DH_CHECK_P_NOT_SAFE_PRIME: 2,
            DH_CHECK_P_NOT_PRIME: 1,
            DH_UNABLE_TO_CHECK_GENERATOR: 4,
            DH_NOT_SUITABLE_GENERATOR: 8,
            NPN_ENABLED: 1,
            ALPN_ENABLED: 1,
            RSA_PKCS1_PADDING: 1,
            RSA_SSLV23_PADDING: 2,
            RSA_NO_PADDING: 3,
            RSA_PKCS1_OAEP_PADDING: 4,
            RSA_X931_PADDING: 5,
            RSA_PKCS1_PSS_PADDING: 6,
            POINT_CONVERSION_COMPRESSED: 2,
            POINT_CONVERSION_UNCOMPRESSED: 4,
            POINT_CONVERSION_HYBRID: 6
        }
    },
        48559: function(e, t, a) {
            a(44114),
            a(27495),
            a(25440),
            a(13611);
            (function(e, t, a, o, n) {
                if (!e.__rl_event) {
                    var i = navigator.userAgent.toLowerCase()
                      , r = /(mobile|iphone|ipod|blackberry)/.test(i)
                      , l = !1
                      , s = "@VERSION@"
                      , c = ""
                      , d = 0
                      , u = ""
                      , p = ""
                      , m = 0
                      , h = "NULL"
                      , g = "NULL"
                      , b = "NULL"
                      , f = ""
                      , v = ""
                      , A = $()
                      , y = ($(!0),
                    O() + "//rlogs.youdao.com")
                      , T = D()
                      , _ = {
                        _default: T
                    }
                      , S = {}
                      , k = e._rlog
                      , I = e._rlog = {};
                    I.push = function(e) {
                        var t = e[0].split(".")
                          , a = t.pop();
                        t = t.join("_"),
                        t || (t = "_default"),
                        T = _[t] || (_[t] = D());
                        var o = S[a];
                        o && o.apply(this, e.slice(1))
                    }
                    ,
                    S._setAccount = function(e) {
                        e && (T.pid = e)
                    }
                    ,
                    S._setAutoPageview = function(e) {
                        T.autopv = e
                    }
                    ,
                    S._setAutoUserId = function(e) {
                        T.autouid = e
                    }
                    ,
                    S._addPost = function(e, t) {
                        S._removePost(e),
                        T.post.push([e, t])
                    }
                    ,
                    S._onPageViewFinished = function(e) {
                        T.pvcb.push(e)
                    }
                    ,
                    S._trackCustom = function(e, t, a) {
                        var n;
                        T.pid && (T.cat = e,
                        n = R(t) ? M(t) : "_nhrf=" + o(t),
                        C(n, a))
                    }
                    ,
                    S._trackEvent = function(e, t) {
                        S._trackCustom("event", e, t)
                    }
                    ,
                    S._trackPageview = function(e) {
                        if (!T.ispvt || "ido" === e) {
                            var t = T;
                            E((function() {
                                var e;
                                while (e = t.pvcb.shift())
                                    try {
                                        e()
                                    } catch (a) {}
                                t.ispvt = 2
                            }
                            ), R(e) && e.length ? "&" + M(e) : "")
                        }
                    }
                    ,
                    S._removePost = function(e) {
                        if (e) {
                            for (var t = T.post, a = 0, o = t.length; a < o; a++)
                                if (t[a] && t[a][0] == e)
                                    return t.splice(a, 1),
                                    a
                        } else
                            T.post = []
                    }
                    ,
                    S._trackUserId = function() {
                        var e = !1
                          , t = B("DICT_LOGIN");
                        if (-1 == t || /^[0|8]\w*/.test(t))
                            V("DICT_USR", "-1");
                        else {
                            if (-1 != B("DICT_USR")) {
                                var a = B("DICT_USR").split("~");
                                2 == a.length ? (__rl_nuid = a[1],
                                t != a[0] && (e = !0)) : e = !0
                            } else
                                e = !0;
                            e && _rl_network.ajax({
                                url: location.protocol + "//dict.youdao.com/login/acc/co/cq?product=DICT&cf=1",
                                success: function(e) {
                                    e.login ? (t = B("DICT_LOGIN"),
                                    V("DICT_USR", t + "~" + e.userid),
                                    __rl_nuid = e.userid) : __rl_nuid = "unknown"
                                },
                                fail: function() {
                                    __rl_nuid = "unknown"
                                }
                            })
                        }
                    }
                    ,
                    e.__rl_event = function(e, t) {
                        I.push(["_trackCustom", "event", e, t])
                    }
                    ,
                    T.pid = e.__rl_npid || "",
                    T.post = e.__rl_post || [],
                    T.autopv = "undefined" == typeof __rl_pageview || !!e.__rl_pageview;
                    var w = function() {
                        var e, t = a.search.replace(/^\?/, "").split("&"), o = {}, i = 0;
                        for (i = 0; i < t.length; i++)
                            e = t[i],
                            e && (e = e.split("="),
                            o[e[0]] = void 0 === e[1] ? null : n(e[1]));
                        return o
                    }();
                    w.vendor && S._addPost("vendor", w.vendor),
                    w.keyfrom && S._addPost("keyfrom", w.keyfrom),
                    function() {
                        var e = a.hash;
                        if (e) {
                            var t, o, i;
                            e = e.replace(/^#/, "").split("&");
                            for (o = 0,
                            i = e.length; o < i; o++)
                                t = e[o],
                                t && (t = t.split("="),
                                S._addPost(t[0], n(t[1] || "NULL")))
                        }
                    }(),
                    function() {
                        try {
                            if (!k)
                                return;
                            for (var e = 1, t = k.length; e < t; e++)
                                if (/_setAccount$/.test(k[e][0])) {
                                    var a = k[e];
                                    k.splice(e, 1),
                                    k.splice(0, 0, a)
                                }
                            for (e = 0,
                            t = k.length; e < t; e++)
                                console.log("Execute: ", k[e]),
                                I.push(k[e]);
                            k = null
                        } catch (o) {}
                    }(),
                    H(_, (function(e, t) {
                        t.autopv && I.push([e + "._trackPageview"]),
                        t.autouid && I.push([e + "._trackUserId"])
                    }
                    )),
                    U("mousedown", x),
                    function() {
                        var e = function(t) {
                            I.push(["_trackEvent", "first-touch"]),
                            N("touchstart", e)
                        };
                        U("touchstart", e)
                    }(),
                    e.__rl_click && U("click", L)
                }
                function E(e, t) {
                    T.pid && 1 != T.ispvt && (T.ispvt = 1,
                    T.cat = "pageview",
                    C(F() + t, e))
                }
                function C(e, t) {
                    console.trace("[" + T.cat + "]", "send ", e);
                    var a = ["_npid=" + T.pid, "_ncat=" + T.cat, K(), e];
                    T.post.length && a.push(M(T.post));
                    var o = y + "/rlog.php?" + a.join("&");
                    P(o, t)
                }
                function P(e, t) {
                    if (l)
                        navigator.sendBeacon(e),
                        t && t();
                    else {
                        var a = new Image;
                        a.onload = a.onerror = function() {
                            t && t()
                        }
                        ,
                        a.src = e,
                        a = null
                    }
                }
                function L(t) {
                    var a = t || e.event
                      , o = a.target || a.srcElement;
                    o.href && I.push(["_trackCustom", "click", o.href])
                }
                function x(a) {
                    a = a || e.event;
                    for (var o = a.target ? a.target : a.srcElement, n = t.body; o != n; o = o.parentNode || n)
                        if (1 === o.nodeType && !0 !== o.disabled) {
                            var i = o.getAttribute("data-rlog");
                            i && I.push(["_trackEvent", i])
                        }
                }
                function D() {
                    return {
                        pid: "",
                        cat: "",
                        post: [],
                        ispvt: 0,
                        pvcb: [],
                        autopv: !0,
                        autouid: !1
                    }
                }
                function R(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }
                function H(e, t) {
                    var a;
                    for (a in e)
                        e.hasOwnProperty(a) && t(a, e[a])
                }
                function O() {
                    return "https:" == a.protocol ? "https:" : "http:"
                }
                function U(e, a) {
                    r && "mousedown" == e ? t.addEventListener("touchstart", a, !1) : t.addEventListener ? t.addEventListener(e, a, !1) : t.attachEvent("on" + e, a)
                }
                function N(e, a) {
                    r && "mousedown" == e ? t.removeEventListener("touchstart", a, !1) : t.removeEventListener ? t.removeEventListener(e, a, !1) : t.detachEvent("on" + e, a)
                }
                function V(e, t) {
                    var a = new Date;
                    a.setTime(a.getTime() + 63072e6),
                    document.cookie = e + "=" + t + ";expires=" + a.toGMTString() + ";path=/;domain=" + A
                }
                function B(e) {
                    var t = document.cookie
                      , a = e + "="
                      , o = t.length
                      , n = 0;
                    while (n < o) {
                        var i = n + a.length;
                        if (t.substring(n, i) == a) {
                            var r = t.indexOf(";", i);
                            return -1 == r && (r = o),
                            unescape(t.substring(i, r))
                        }
                        if (n = t.indexOf(" ", n) + 1,
                        0 == n)
                            break
                    }
                    return -1
                }
                function M(e) {
                    R(e) || (e = []);
                    var t, a, n, i = [];
                    for (t = 0,
                    a = e.length; t < a; ++t)
                        n = e[t],
                        R(n) && i.push(n[0] + "=" + o(n[1]));
                    return i.join("&")
                }
                function K() {
                    var e = (new Date).getTime()
                      , a = [];
                    return t.cookie = "___rl__test__cookies=" + e,
                    b = B("OUTFOX_SEARCH_USER_ID_NCOO"),
                    -1 == b && B("___rl__test__cookies") == e && (b = 2147483647 * Math.random(),
                    V("OUTFOX_SEARCH_USER_ID_NCOO", b)),
                    h = B("P_INFO"),
                    h = -1 == h ? "NULL" : h.substr(0, h.indexOf("|")),
                    g = B("DICT_UT"),
                    -1 == g && (g = "NULL"),
                    a = ["_ncoo=" + b, "_nssn=" + h, "_nver=" + s, "_ntms=" + e, "_dict_ut=" + g],
                    T.autouid && a.push("_rl_nuid=" + __rl_nuid),
                    a.join("&")
                }
                function F() {
                    if (p = "-",
                    self.screen)
                        p = screen.width + "x" + screen.height;
                    else if (self.java) {
                        var n = java.awt.Toolkit.getDefaultToolkit()
                          , i = n.getScreenSize();
                        p = i.width + "x" + i.height
                    }
                    var r = new Date(t.lastModified);
                    m = r.getTime() / 1e3;
                    var l = e.navigator;
                    d = l && l.javaEnabled() ? 1 : 0,
                    c = t.characterSet || t.charset || "-",
                    c = c.toLowerCase(),
                    u = o(t.referrer),
                    v = o(a.href),
                    f = a.hash ? o(a.hash.substring(1)) : "";
                    l = ["_nref=" + u, "_nurl=" + v, "_nres=" + p, "_nlmf=" + m, "_njve=" + d, "_nchr=" + c, "_nfrg=" + f];
                    return l.join("&")
                }
                function $(e) {
                    var o = e ? 4 : 3
                      , n = "res:" === a.protocol ? "" : t.domain
                      , i = n.split(".")
                      , r = i.length
                      , l = /^\d+$/g;
                    if (l.test(i[r - 1]))
                        return n;
                    if (i.length < o)
                        return "." + n;
                    var s, c = ["com", "net", "org", "gov", "co"], d = !1;
                    for (s = 0; s < c.length; s++)
                        i[r - 2] == c[s] && (d = !0);
                    var u = d ? o : o - 1
                      , p = [];
                    while (u)
                        p.push(i[r - u]),
                        u--;
                    return "." + p.join(".")
                }
            }
            )(window, document, location, encodeURIComponent, decodeURIComponent)
        },
        32743: function(e, t, a) {
            "use strict";
            a.d(t, {
                A: function() {
                    return m
                }
            });
            var o = a(6301);
            a(62953);
            const n = {
                class: "inner-content"
            }
              , i = {
                class: "title color_text_1"
            }
              , r = {
                class: "btn-ara"
            };
            function l(e, t, a, l, s, c) {
                return l.visible && a.config.text ? ((0,
                o.uX)(),
                (0,
                o.CE)("div", {
                    key: 0,
                    class: "pop-up-comp mask",
                    onClick: t[3] || (t[3] = (...e) => l.handleClickBgMask && l.handleClickBgMask(...e))
                }, [(0,
                o.Lk)("div", n, [l.showIconClose ? ((0,
                o.uX)(),
                (0,
                o.CE)("i", {
                    key: 0,
                    class: "icon-close",
                    onClick: t[0] || (t[0] = (...e) => l.cancel && l.cancel(...e))
                })) : (0,
                o.Q3)("", !0), (0,
                o.Lk)("div", i, (0,
                o.v_)(a.config.text), 1), (0,
                o.Lk)("div", r, [(0,
                o.Lk)("div", {
                    class: "cancel btn",
                    onClick: t[1] || (t[1] = (...e) => l.cancel && l.cancel(...e))
                }, (0,
                o.v_)(a.config.cancelButtonText || "取消"), 1), (0,
                o.Lk)("div", {
                    class: "confirm btn",
                    onClick: t[2] || (t[2] = (...e) => l.confirm && l.confirm(...e))
                }, (0,
                o.v_)(a.config.confirmButtonText || "确认"), 1)])])])) : (0,
                o.Q3)("", !0)
            }
            var s = {
                name: "PopUp",
                props: {
                    config: {
                        type: Object,
                        clear: Function
                    }
                },
                setup(e) {
                    const t = (0,
                    o.KR)(!0)
                      , a = (0,
                    o.EW)(( () => {
                        var t, a;
                        return !1 !== (null === (t = e.config) || void 0 === t ? void 0 : t.showIconClose) || (null === (a = e.config) || void 0 === a ? void 0 : a.showIconClose)
                    }
                    ))
                      , n = () => {
                        e.config.cancel(),
                        t.value = !1,
                        e.config.clear()
                    }
                      , i = () => {
                        e.config.confirm(),
                        t.value = !1,
                        e.config.clear()
                    }
                      , r = () => {
                        e.config.clickMask && n()
                    }
                    ;
                    return {
                        visible: t,
                        showIconClose: a,
                        cancel: n,
                        confirm: i,
                        handleClickBgMask: r
                    }
                }
            }
              , c = a(66262);
            const d = (0,
            c.A)(s, [["render", l], ["__scopeId", "data-v-b6aed078"]]);
            var u = d;
            const p = document.createElement("div");
            p.setAttribute("class", "popup"),
            document.body.appendChild(p);
            var m = e => {
                const t = () => {
                    (0,
                    o.XX)(null, p)
                }
                ;
                e.clear = t;
                const a = (0,
                o.bF)(u, {
                    config: e
                });
                (0,
                o.XX)(a, p)
            }
        },
        3745: function(e, t, a) {
            "use strict";
            a.d(t, {
                A: function() {
                    return u
                }
            });
            var o = a(6301);
            function n(e, t, a, n, i, r) {
                return (0,
                o.uX)(),
                (0,
                o.Wv)(o.eB, {
                    name: "fade"
                }, {
                    default: (0,
                    o.k6)(( () => [(0,
                    o.bo)((0,
                    o.Lk)("div", {
                        class: "toasts"
                    }, (0,
                    o.v_)(a.text), 513), [[o.aG, n.visible]])])),
                    _: 1
                })
            }
            var i = {
                name: "toast",
                props: {
                    text: {
                        type: String,
                        default: ""
                    }
                },
                setup() {
                    const e = (0,
                    o.KR)(!1);
                    return (0,
                    o.sV)(( () => {
                        e.value = !0
                    }
                    )),
                    {
                        visible: e
                    }
                }
            }
              , r = a(66262);
            const l = (0,
            r.A)(i, [["render", n], ["__scopeId", "data-v-ebee6bee"]]);
            var s = l;
            const c = document.createElement("div");
            c.setAttribute("class", "toast"),
            document.body.appendChild(c);
            let d = null;
            var u = (e, t=1500) => {
                const a = (0,
                o.bF)(s, {
                    text: e
                });
                (0,
                o.XX)(a, c),
                clearTimeout(d),
                d = setTimeout(( () => {
                    (0,
                    o.XX)(null, c)
                }
                ), t)
            }
        },
        97504: function(e, t) {
            "use strict";
            t.A = [{
                str: "0",
                msg: "通用场景"
            }, {
                str: "2",
                msg: "医学"
            }, {
                str: "1",
                msg: "计算机"
            }, {
                str: "3",
                msg: "金融经济"
            }]
        },
        37062: function(e, t, a) {
            "use strict";
            a.d(t, {
                A: function() {
                    return u
                }
            });
            var o = [{
                code: "zh-CHS2en",
                label: "中文-英文",
                vip: !1,
                svip: !1
            }, {
                code: "en2zh-CHS",
                label: "英文-中文",
                vip: !1,
                svip: !1
            }, {
                code: "ko2zh-CHS",
                label: "韩文-中文",
                vip: !1,
                svip: !1
            }, {
                code: "zh-CHS2ko",
                label: "中文-韩文",
                vip: !1,
                svip: !1
            }, {
                code: "ja2zh-CHS",
                label: "日文-中文",
                vip: !1,
                svip: !1
            }, {
                code: "zh-CHS2ja",
                label: "中文-日文",
                vip: !1,
                svip: !1
            }, {
                code: "de2zh-CHS",
                label: "德文-中文",
                vip: !0,
                svip: !0
            }, {
                code: "zh-CHS2de",
                label: "中文-德文",
                vip: !0,
                svip: !0
            }, {
                code: "ru2zh-CHS",
                label: "俄文-中文",
                vip: !0,
                svip: !0
            }, {
                code: "zh-CHS2ru",
                label: "中文-俄文",
                vip: !0,
                svip: !0
            }, {
                code: "fr2zh-CHS",
                label: "法文-中文",
                vip: !0,
                svip: !0
            }, {
                code: "zh-CHS2fr",
                label: "中文-法文",
                vip: !0,
                svip: !0
            }, {
                code: "es2zh-CHS",
                label: "西班牙文-中文",
                vip: !0,
                svip: !0
            }, {
                code: "zh-CHS2es",
                label: "中文-西班牙文",
                vip: !0,
                svip: !0
            }, {
                code: "pt2zh-CHS",
                label: "葡萄牙文-中文",
                vip: !0,
                svip: !0
            }, {
                code: "zh-CHS2pt",
                label: "中文-葡萄牙文",
                vip: !0,
                svip: !0
            }]
              , n = [{
                code: "zh-CHS",
                label: "中文",
                alphabet: "Z"
            }, {
                code: "en",
                label: "英语",
                alphabet: "Y"
            }, {
                code: "ja",
                label: "日语",
                alphabet: "R"
            }, {
                code: "ko",
                label: "韩语",
                alphabet: "H"
            }, {
                code: "fr",
                label: "法语",
                alphabet: "F"
            }]
              , i = [{
                label: "阿拉伯文",
                code: "ar",
                alphabet: "A"
            }, {
                label: "阿塞拜疆文",
                code: "az",
                alphabet: "A"
            }, {
                label: "爱沙尼亚文",
                code: "et",
                alphabet: "A"
            }, {
                label: "爱尔兰文",
                code: "ga",
                alphabet: "A"
            }, {
                label: "阿尔巴尼亚文",
                code: "sq",
                alphabet: "A"
            }, {
                label: "阿萨姆文",
                code: "as",
                alphabet: "A"
            }, {
                label: "巴斯克文",
                code: "eu",
                alphabet: "B"
            }, {
                label: "白俄罗斯文",
                code: "be",
                alphabet: "B"
            }, {
                label: "波斯尼亚文",
                code: "bs",
                alphabet: "B"
            }, {
                label: "保加利亚文",
                code: "bg",
                alphabet: "B"
            }, {
                label: "冰岛文",
                code: "is",
                alphabet: "B"
            }, {
                label: "波兰文",
                code: "pl",
                alphabet: "B"
            }, {
                label: "白苗文",
                code: "hmn",
                alphabet: "B"
            }, {
                label: "波斯文",
                code: "fa",
                alphabet: "B"
            }, {
                label: "德文",
                code: "de",
                alphabet: "D"
            }, {
                label: "丹麦文",
                code: "da",
                alphabet: "D"
            }, {
                label: "俄文",
                code: "ru",
                alphabet: "E"
            }, {
                label: "法文",
                code: "fr",
                alphabet: "F"
            }, {
                label: "芬兰文",
                code: "fi",
                alphabet: "F"
            }, {
                label: "弗里西文",
                code: "fy",
                alphabet: "F"
            }, {
                label: "菲律宾文",
                code: "tl",
                alphabet: "F"
            }, {
                label: "格鲁吉亚文",
                code: "ka",
                alphabet: "G"
            }, {
                label: "高棉文",
                code: "km",
                alphabet: "G"
            }, {
                label: "古吉拉特文",
                code: "gu",
                alphabet: "G"
            }, {
                label: "韩文",
                code: "ko",
                alphabet: "H"
            }, {
                label: "荷兰文",
                code: "nl",
                alphabet: "H"
            }, {
                label: "海地克里奥尔文",
                code: "ht",
                alphabet: "H"
            }, {
                label: "豪萨文",
                code: "ha",
                alphabet: "H"
            }, {
                label: "哈萨克文",
                code: "kk",
                alphabet: "H"
            }, {
                label: "加泰隆文",
                code: "ca",
                alphabet: "J"
            }, {
                label: "捷克文",
                code: "cs",
                alphabet: "J"
            }, {
                label: "加利西亚文",
                code: "gl",
                alphabet: "J"
            }, {
                label: "科西嘉文",
                code: "co",
                alphabet: "K"
            }, {
                label: "克罗地亚文",
                code: "hr",
                alphabet: "K"
            }, {
                label: "库尔德文",
                code: "ku",
                alphabet: "K"
            }, {
                label: "卡纳达文",
                code: "kn",
                alphabet: "K"
            }, {
                label: "拉丁文",
                code: "la",
                alphabet: "L"
            }, {
                label: "卢森堡文",
                code: "lb",
                alphabet: "L"
            }, {
                label: "立陶宛文",
                code: "lt",
                alphabet: "L"
            }, {
                label: "拉脱维亚文",
                code: "lv",
                alphabet: "L"
            }, {
                label: "罗马尼亚文",
                code: "ro",
                alphabet: "L"
            }, {
                label: "马其顿文",
                code: "mk",
                alphabet: "M"
            }, {
                label: "马尔加什文",
                code: "mg",
                alphabet: "M"
            }, {
                label: "马来文",
                code: "ms",
                alphabet: "M"
            }, {
                label: "马耳他文",
                code: "mt",
                alphabet: "M"
            }, {
                label: "毛利文",
                code: "mi",
                alphabet: "M"
            }, {
                label: "马拉地文",
                code: "mr",
                alphabet: "M"
            }, {
                label: "蒙古文",
                code: "mn",
                alphabet: "M"
            }, {
                label: "孟加拉文",
                code: "bn",
                alphabet: "M"
            }, {
                label: "马拉雅拉姆文",
                code: "ml",
                alphabet: "M"
            }, {
                label: "缅甸文",
                code: "my",
                alphabet: "M"
            }, {
                label: "尼泊尔文",
                code: "ne",
                alphabet: "N"
            }, {
                label: "挪威文",
                code: "no",
                alphabet: "N"
            }, {
                label: "南非荷兰文",
                code: "af",
                alphabet: "N"
            }, {
                label: "葡萄牙文",
                code: "pt",
                alphabet: "P"
            }, {
                label: "普什图文",
                code: "ps",
                alphabet: "P"
            }, {
                label: "旁遮普文",
                code: "pa",
                alphabet: "P"
            }, {
                label: "齐切瓦文",
                code: "ny",
                alphabet: "Q"
            }, {
                label: "日文",
                code: "ja",
                alphabet: "R"
            }, {
                label: "瑞典文",
                code: "sv",
                alphabet: "R"
            }, {
                label: "世界文",
                code: "eo",
                alphabet: "S"
            }, {
                label: "斯洛伐克文",
                code: "sk",
                alphabet: "S"
            }, {
                label: "斯洛文尼亚文",
                code: "sl",
                alphabet: "S"
            }, {
                label: "萨摩亚文",
                code: "sm",
                alphabet: "S"
            }, {
                label: "塞索托文",
                code: "st",
                alphabet: "S"
            }, {
                label: "斯瓦希里文",
                code: "sw",
                alphabet: "S"
            }, {
                label: "僧伽罗文",
                code: "si",
                alphabet: "S"
            }, {
                label: "塞尔维亚文(西里尔文)",
                code: "sr-Cyrl",
                alphabet: "S"
            }, {
                label: "塞尔维亚文(拉丁文)",
                code: "sr-Latn",
                alphabet: "S"
            }, {
                label: "索马里文",
                code: "so",
                alphabet: "S"
            }, {
                label: "塔吉克文",
                code: "tg",
                alphabet: "T"
            }, {
                label: "土耳其文",
                code: "tr",
                alphabet: "T"
            }, {
                label: "泰米尔文",
                code: "ta",
                alphabet: "T"
            }, {
                label: "泰卢固文",
                code: "te",
                alphabet: "T"
            }, {
                label: "威尔士文",
                code: "cy",
                alphabet: "W"
            }, {
                label: "乌克兰文",
                code: "uk",
                alphabet: "W"
            }, {
                label: "乌兹别克文",
                code: "uz",
                alphabet: "W"
            }, {
                label: "乌尔都文",
                code: "ur",
                alphabet: "W"
            }, {
                label: "西班牙文",
                code: "es",
                alphabet: "X"
            }, {
                label: "宿务文",
                code: "ceb",
                alphabet: "X"
            }, {
                label: "希腊文",
                code: "el",
                alphabet: "X"
            }, {
                label: "夏威夷文",
                code: "haw",
                alphabet: "X"
            }, {
                label: "匈牙利文",
                code: "hu",
                alphabet: "X"
            }, {
                label: "修纳文",
                code: "sn",
                alphabet: "X"
            }, {
                label: "希伯来文",
                code: "he",
                alphabet: "X"
            }, {
                label: "信德文",
                code: "sd",
                alphabet: "X"
            }, {
                label: "巽他文",
                code: "su",
                alphabet: "X"
            }, {
                label: "英文",
                code: "en",
                alphabet: "Y"
            }, {
                label: "越南文",
                code: "vi",
                alphabet: "Y"
            }, {
                label: "印地文",
                code: "hi",
                alphabet: "Y"
            }, {
                label: "印尼文",
                code: "id",
                alphabet: "Y"
            }, {
                label: "伊博文",
                code: "ig",
                alphabet: "Y"
            }, {
                label: "意大利文",
                code: "it",
                alphabet: "Y"
            }, {
                label: "约鲁巴文",
                code: "yo",
                alphabet: "Y"
            }, {
                label: "中文",
                code: "zh-CHS",
                alphabet: "Z"
            }, {
                label: "中文繁体",
                code: "zh-CHT",
                alphabet: "Z"
            }, {
                label: "爪哇文",
                code: "jw",
                alphabet: "Z"
            }, {
                label: "自动识别",
                code: "auto",
                alphabet: "Z"
            }]
              , r = [{
                code: "zh-CHS",
                label: "中文",
                alphabet: "Z"
            }, {
                code: "en",
                label: "英语",
                alphabet: "Y"
            }, {
                code: "ja",
                label: "日语",
                alphabet: "R"
            }, {
                code: "ko",
                label: "韩语",
                alphabet: "H"
            }, {
                code: "fr",
                label: "法语",
                alphabet: "F"
            }]
              , l = [{
                code: "ar",
                label: "阿拉伯语",
                alphabet: "A"
            }, {
                code: "de",
                label: "德语",
                alphabet: "D"
            }, {
                code: "ru",
                label: "俄语",
                alphabet: "E"
            }, {
                code: "fr",
                label: "法语",
                alphabet: "F"
            }, {
                code: "ko",
                label: "韩语",
                alphabet: "H"
            }, {
                code: "nl",
                label: "荷兰语",
                alphabet: "H"
            }, {
                code: "pt",
                label: "葡萄牙语",
                alphabet: "P"
            }, {
                code: "ja",
                label: "日语",
                alphabet: "R"
            }, {
                code: "th",
                label: "泰语",
                alphabet: "T"
            }, {
                code: "es",
                label: "西班牙语",
                alphabet: "X"
            }, {
                code: "en",
                label: "英语",
                alphabet: "Y"
            }, {
                code: "it",
                label: "意大利语",
                alphabet: "Y"
            }, {
                code: "vi",
                label: "越南语",
                alphabet: "Y"
            }, {
                code: "id",
                label: "印度尼西亚语",
                alphabet: "Y"
            }, {
                code: "zh-CHS",
                label: "中文",
                alphabet: "Z"
            }]
              , s = [{
                code: "zh-CHS",
                label: "中文",
                alphabet: "Z"
            }, {
                code: "en",
                label: "英语",
                alphabet: "Y"
            }, {
                code: "ja",
                label: "日语",
                alphabet: "R"
            }, {
                code: "ko",
                label: "韩语",
                alphabet: "H"
            }, {
                code: "fr",
                label: "法语",
                alphabet: "F"
            }]
              , c = [{
                code: "ar",
                label: "阿拉伯语",
                alphabet: "A"
            }, {
                code: "de",
                label: "德语",
                alphabet: "D"
            }, {
                code: "ru",
                label: "俄语",
                alphabet: "E"
            }, {
                code: "fr",
                label: "法语",
                alphabet: "F"
            }, {
                code: "ko",
                label: "韩语",
                alphabet: "H"
            }, {
                code: "nl",
                label: "荷兰语",
                alphabet: "H"
            }, {
                code: "pt",
                label: "葡萄牙语",
                alphabet: "P"
            }, {
                code: "ja",
                label: "日语",
                alphabet: "R"
            }, {
                code: "th",
                label: "泰语",
                alphabet: "T"
            }, {
                code: "es",
                label: "西班牙语",
                alphabet: "X"
            }, {
                code: "en",
                label: "英语",
                alphabet: "Y"
            }, {
                code: "it",
                label: "意大利语",
                alphabet: "Y"
            }, {
                code: "vi",
                label: "越南语",
                alphabet: "Y"
            }, {
                code: "id",
                label: "印度尼西亚语",
                alphabet: "Y"
            }, {
                code: "zh-CHS",
                label: "中文",
                alphabet: "Z"
            }]
              , d = [{
                code: "en2zh-CHS",
                label: "英语 - 中文"
            }, {
                code: "zh-CHS2en",
                label: "中文 - 英语"
            }, {
                code: "ko2zh-CHS",
                label: "韩语 - 中文"
            }, {
                code: "ja2zh-CHS",
                label: "日语 - 中文"
            }]
              , u = {
                textTranslate: {
                    interfaceType: "complex",
                    common: r,
                    specify: l
                },
                aiTranslate: {
                    interfaceType: "complex",
                    common: s,
                    specify: c
                },
                documentTranslate: {
                    interfaceType: "combine",
                    common: [],
                    specify: o
                },
                imageTranslate: {
                    interfaceType: "complex",
                    common: n,
                    specify: i
                },
                term: {
                    interfaceType: "combine",
                    common: [],
                    specify: d
                }
            }
        },
        27950: function(e, t) {
            "use strict";
            t.A = {
                product: "webfanyi",
                signSecretKey: "LqMQV3ZdE2X6DYYyc6TNsVbHgCGk7XzG",
                keyId: "ai-translate-llm",
                keyIdPre: "ai-translate-llm-pre",
                keyfrom: "fanyi.web",
                needSignUrl: ["/translate_llm/userinfo"],
                errorMap: {
                    500: "服务器错误",
                    602: "输出错误",
                    607: "服务异常",
                    603: "对不起，正在学习中"
                }
            }
        },
        42699: function(e, t, a) {
            "use strict";
            a.d(t, {
                K: function() {
                    return o
                }
            });
            const o = {
                beforeMount(e, t, a) {
                    function o(a) {
                        if (e.contains(a.target))
                            return !1;
                        t.value && t.value(a)
                    }
                    e.__vueClickOutside__ = o,
                    document.addEventListener("mousedown", o)
                },
                unmounted(e, t) {
                    document.removeEventListener("mousedown", e.__vueClickOutside__),
                    delete e.__vueClickOutside__
                }
            }
        },
        34792: function(e, t, a) {
            "use strict";
            a.d(t, {
                A: function() {
                    return r
                }
            });
            a(33110);
            var o = a(75220)
              , n = a(66278)
              , i = a(37282);
            function r() {
                const e = (0,
                o.lq)()
                  , t = (0,
                n.Pj)()
                  , a = () => {
                    i.A.$emit("saveTextTranslateContentToLS")
                }
                  , r = () => {
                    "/AITranslate" === e.path && localStorage.setItem("afterProcessHistory", JSON.stringify(t.state.text.historyList))
                }
                ;
                return {
                    saveTextTranslateContentToLS: a,
                    saveAITranslateHistoryList: r
                }
            }
        },
        85366: function(e, t, a) {
            "use strict";
            a(23792),
            a(3362),
            a(9391),
            a(38462),
            a(39653);
            var o = a(86964)
              , n = a.n(o)
              , i = a(37691)
              , r = a(81659)
              , l = a.n(r)
              , s = a(6301)
              , c = a(54727)
              , d = (a(12153),
            a(3745))
              , u = a(32743);
            function p(e, t, a, o, n, i) {
                return (0,
                s.uX)(),
                (0,
                s.Wv)(s.eB, {
                    name: "blankTooltip"
                }, {
                    default: (0,
                    s.k6)(( () => [(0,
                    s.eW)((0,
                    s.v_)(o.text), 1)])),
                    _: 1
                })
            }
            var m = {
                setup() {
                    const e = (0,
                    s.KR)();
                    return {
                        text: e
                    }
                }
            }
              , h = a(66262);
            const g = (0,
            h.A)(m, [["render", p], ["__scopeId", "data-v-13c25996"]]);
            var b = g;
            const f = {
                beforeMount: function(e, t) {
                    var a, o = "yd-tooltip", n = "", i = null, r = "bottom", l = "blank", c = !1;
                    const d = () => {
                        if (t.value && "function" === typeof t.value) {
                            var d = t.value();
                            const {component: e, data: o} = d;
                            a = (0,
                            s.Ef)(e, o),
                            c = !0,
                            l = "custom"
                        } else
                            !t.value || "string" !== typeof t.value && "number" !== typeof t.value ? e.dataset.tooltip && (n = e.dataset.tooltip) : n = t.value;
                        if (e.dataset["tooltipStyle"] && (l = e.dataset["tooltipStyle"]),
                        (c || "" != n.trim()) && (!c || a)) {
                            Object.keys(t.modifiers)[0] && (r = Object.keys(t.modifiers)[0]),
                            i = document.createElement("div");
                            var u = [o, l];
                            if (i.setAttribute("class", u.join(" ")),
                            i.style.zIndex = 100,
                            c) {
                                var p = document.body.appendChild(i);
                                a.mount(p)
                            } else {
                                p = document.body.appendChild(i);
                                var m = (0,
                                s.Ef)(b)
                                  , h = m.mount(p);
                                h.text = n
                            }
                            var g = e.getBoundingClientRect();
                            (0,
                            s.dY)(( () => {
                                var e = 0
                                  , t = 0
                                  , a = 8
                                  , o = 8;
                                switch (r) {
                                case "top":
                                    e = g.left - i.offsetWidth / 2 + g.width / 2,
                                    t = g.top - i.offsetHeight - a;
                                    break;
                                case "left":
                                    e = g.left - i.offsetWidth - o,
                                    t = g.top + g.height / 2 - i.offsetHeight / 2;
                                    break;
                                case "right":
                                    e = g.left + g.width + o,
                                    t = g.top + g.height / 2 - i.offsetHeight / 2;
                                    break;
                                case "bottom":
                                    e = g.left - i.offsetWidth / 2 + g.width / 2,
                                    t = g.top + g.height + a;
                                    break;
                                case "left-bottom":
                                    e = g.left - i.offsetWidth - o,
                                    t = g.bottom - i.offsetHeight;
                                    break;
                                case "left-top":
                                    e = g.left - i.offsetWidth - o,
                                    t = g.top;
                                    break;
                                case "right-top":
                                    e = g.left + g.width + o,
                                    t = g.top;
                                    break;
                                case "right-bottom":
                                    e = g.left + g.width + o,
                                    t = g.bottom - i.offsetHeight;
                                    break;
                                case "top-left":
                                    e = g.left,
                                    t = g.top - i.offsetHeight - a;
                                    break;
                                case "top-right":
                                    e = g.left + g.width - i.offsetWidth,
                                    t = g.top - i.offsetHeight - a;
                                    break;
                                case "bottom-left":
                                    e = g.left,
                                    t = g.bottom + a;
                                    break;
                                case "bottom-right":
                                    e = g.left + g.width - i.offsetWidth,
                                    t = g.bottom + a;
                                    break
                                }
                                var n = 20;
                                e < 0 && (e = 0 + n),
                                e + i.offsetWidth > document.body.offsetWidth && (e = document.body.offsetWidth - i.offsetWidth - n),
                                t < 0 && (t = 0 + n),
                                t + i.offsetHeight > document.body.offsetHeight && (t = document.body.offsetHeight - i.offsetHeight - n),
                                i.style.left = e + "px",
                                i.style.top = t + "px",
                                i.style.visibility = "visible"
                            }
                            ))
                        }
                    }
                      , u = () => {
                        i && i.parentNode && i.parentNode.removeChild(i),
                        a = null,
                        n = "",
                        c = !1,
                        i = null
                    }
                    ;
                    e.addEventListener("mouseenter", d),
                    e.addEventListener("mouseleave", u)
                },
                updated(e, {value: t}) {
                    e.$value = t
                },
                unmounted(e) {
                    e.removeEventListener("mouseenter", e.mouseenterHandler),
                    e.removeEventListener("mouseleave", e.mouseleaveHandler)
                }
            };
            var v = f;
            const A = {
                tooltip: v
            };
            var y = {
                install(e) {
                    Object.keys(A).forEach((t => {
                        e.directive(t, A[t])
                    }
                    ))
                }
            }
              , T = y
              , _ = a(74387)
              , S = a(86956)
              , k = a(74466)
              , I = a(18415)
              , w = a(42699);
            const E = {
                class: "sticky-sidebar"
            }
              , C = {
                key: 1,
                class: "test-mode-version-container"
            };
            function P(e, t, a, o, n, i) {
                const r = (0,
                s.g2)("router-view");
                return (0,
                s.uX)(),
                (0,
                s.CE)(s.FK, null, [o.show ? ((0,
                s.uX)(),
                (0,
                s.Wv)(r, {
                    key: 0,
                    class: (0,
                    s.C4)(["os_" + o.currentOS])
                }, null, 8, ["class"])) : (0,
                s.Q3)("", !0), (0,
                s.Lk)("div", E, [(0,
                s.bF)(o["BackToTop"])]), o.testMode && o.version ? ((0,
                s.uX)(),
                (0,
                s.CE)("div", C, (0,
                s.v_)(`当前版本号：${o.version}`), 1)) : (0,
                s.Q3)("", !0)], 64)
            }
            a(27495),
            a(62953);
            function L(e, t, a, o, n, i) {
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: "backToTopButton",
                    style: (0,
                    s.Tr)({
                        display: o.showButton ? "block" : "none"
                    }),
                    onClick: o.scrollToTop
                }, null, 4)
            }
            var x = {
                __name: "BackToTop",
                setup(e, {expose: t}) {
                    t();
                    const a = (0,
                    s.KR)(!1)
                      , o = window.innerHeight || document.body.clientHeight
                      , n = () => {
                        const e = document.documentElement.scrollTop || document.body.scrollTop;
                        a.value = e >= o
                    }
                    ;
                    window.addEventListener("scroll", n),
                    (0,
                    s.xo)(( () => {
                        window.removeEventListener("scroll", n)
                    }
                    ));
                    const i = () => {
                        document.documentElement.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                      , r = {
                        showButton: a,
                        winHeight: o,
                        srollListener: n,
                        scrollToTop: i
                    };
                    return Object.defineProperty(r, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    r
                }
            };
            const D = (0,
            h.A)(x, [["render", L], ["__scopeId", "data-v-e6a8c40e"]]);
            var R = D
              , H = a(53007)
              , O = a(18908)
              , U = a(96091)
              , N = a(66278)
              , V = a(83503)
              , B = a.n(V)
              , M = a(37282)
              , K = a(45358)
              , F = {
                __name: "App",
                setup(e, {expose: t}) {
                    t();
                    const a = !1
                      , o = "0.5.8"
                      , n = (0,
                    s.KR)(!0);
                    (0,
                    s.Gt)("showTopBanner", n);
                    const i = (0,
                    N.Pj)()
                      , r = (0,
                    s.KR)(!1);
                    (0,
                    s.sV)((async () => {
                        i.dispatch("initTextTranslateSettingStore"),
                        M.A.$on("changeStickySidebarPosition", ( () => {
                            console.log("11")
                        }
                        )),
                        await (0,
                        U.A)(),
                        await i.dispatch("fetchAITranslateSecretKey"),
                        r.value = !0,
                        M.A.$on("buyVipSuccessFromVipCenter", ( () => {
                            y()
                        }
                        ))
                    }
                    ));
                    const l = (0,
                    s.nI)()
                      , c = l.appContext.config.globalProperties
                      , d = (0,
                    s.KR)("")
                      , u = (0,
                    s.KR)("")
                      , p = (0,
                    s.KR)("")
                      , m = (0,
                    s.KR)("https://ydlunacommon-cdn.nosdn.127.net/e5d302ac10bb57dbb7bace5281d5eb6a.png")
                      , h = (0,
                    s.KR)("")
                      , g = () => {
                        const e = {
                            VUE_APP_DICT_URL: "https://dict.youdao.com",
                            VUE_APP_FEEDBCAK: "https://lunafeedback.youdao.com/feedback",
                            VUE_APP_LANG_URL: "https://api-overmind.youdao.com/openapi/get/luna/dict/luna-front/prod/langType",
                            VUE_APP_OVERMIND_URL: "https://api-overmind.youdao.com/openapi/get/luna/dict/dict-common-config/prod",
                            VUE_APP_VIP_URL: "https://dict.youdao.com/vip",
                            VUE_APP_DOMAIN_DATA_API: "https://doctrans-service.youdao.com/common/enums/list?key=domain",
                            VUE_APP_TEXT_TRANSLATE_URL: "https://dict.youdao.com",
                            VUE_APP_KEYWORD_SERVER_URL: "https://dict.youdao.com",
                            VUE_APP_DOCSERVICE_URL: "https://doctrans-service.youdao.com",
                            VUE_APP_DOCUMENT_REANDER_WEB_URL: "https://c.youdao.com/dict_document_web/#/doctrans",
                            VUE_APP_MODE: "prod",
                            VUE_APP_VIP_BUY_URL: "https://cidian.youdao.com/vip.html#/?buyVip=true",
                            VUE_APP_FEEDBACK_URL: "https://shared.youdao.com/dict/market/common-feedback/#/",
                            VUE_APP_VIP_ADD_URL: "https://cidian.youdao.com/vip.html#/privilege?buyMore=true",
                            VUE_APP_PERSON: "https://fanyi.youdao.com/index.html#/person/docHistory",
                            VUE_APP_TEXT_TRANSLATE_M_URL: "https://fanyi.youdao.com",
                            VUE_APP_AIGC_SERVICE_URL: " https://dict-subsidiary.youdao.com",
                            VUE_APP_FANYI_DOWNLOAD_URL: "https://fanyi.youdao.com/",
                            VUE_APP_FANYI_URL: "https://fanyi.youdao.com/feedback",
                            VUE_APP_DOCTRANS_TIP_URL: "https://doctrans-service.youdao.com/doctrans/constant/copyWriting",
                            VUE_APP_DOCTRANS_ENUMS_API: "https://doctrans-service.youdao.com/common/enums/list",
                            VUE_APP_SERVICE_URL: "https://backendmarket.youdao.com",
                            VUE_APP_EDUCATION_CERTIFICATE_URL: "https://education-certification.youdao.com/education/pub/get",
                            VUE_APP_PACKAGE_URL: "https://shared.youdao.com/dict/market/professional-translation/#/recharge",
                            VUE_APP_AI_SERVICE_URL: "https://luna-ai.youdao.com",
                            VUE_APP_DEVICE_URL: "https://fanyi.youdao.com/device.html#/deviceManager",
                            VUE_APP_LOGIN_URL: "https://c.youdao.com/common-login-web/index.html",
                            VUE_APP_CHECK_URL: "https://dict.youdao.com/login/acc",
                            VUE_APP_LX_LOGIN_URL: "https://c.youdao.com/Lenovo-login-web/index.html",
                            VUE_APP_PUBLIC_PATH: "https://shared.ydstatic.com/dict/translation-website/",
                            VUE_APP_VERSION: "0.5.8",
                            VUE_APP_PDF2WORD: "https://dict-fileconvert.youdao.com",
                            NODE_ENV: "production",
                            BASE_URL: ""
                        }.VUE_APP_OLDVERSION_URL;
                        i.set("canGoNewVersion", !0),
                        window.open(e, "_self")
                    }
                      , b = e => {
                        const t = {
                            userid: e
                        };
                        H.A.getBatchUrl(t).then((e => {
                            u.value = e.values.nickname,
                            i.dispatch("login/setNickName", u.value)
                        }
                        ))
                    }
                      , f = () => {
                        H.A.getVipStatus().then((e => {
                            i.dispatch("login/setSvip", e.svip),
                            i.dispatch("login/setVip", e.vip),
                            i.dispatch("login/setVipStatusLoaded")
                        }
                        ))
                    }
                      , v = () => {
                        const e = "education-certification"
                          , t = "cf41bbc6c60a46ff"
                          , a = +new Date
                          , o = "keyid,mysticTime,product"
                          , n = "webfanyi"
                          , r = B()(`keyid=${e}&mysticTime=${a}&product=${n}&key=${t}`).toString();
                        H.A.getStudentStatus({
                            keyid: e,
                            mysticTime: a,
                            pointParam: o,
                            product: n,
                            sign: r
                        }).then((e => {
                            0 === e.code && i.dispatch("login/setIsStudent", !(!e.data.educationType || e.data.isGraduate))
                        }
                        ))
                    }
                      , A = e => {
                        const t = "true" === window.localStorage.getItem("FanYiWebLoginStatus");
                        t !== e && e && (window.uet_report_conversion(K.A.getParameter("keyfrom") || ""),
                        console.log("发送bing log")),
                        window.localStorage.setItem("FanYiWebLoginStatus", e)
                    }
                      , y = async () => {
                        H.A.getAccountInfos().then((e => {
                            const t = e.data;
                            0 === e.code ? (i.dispatch("login/setLogin", !0),
                            d.value = t.yduserid,
                            p.value = m.value,
                            i.dispatch("login/setOptionAvatar", p.value),
                            b(d.value),
                            setTimeout(( () => {
                                b(d.value)
                            }
                            ), 1e3),
                            f(),
                            v(),
                            A(!0)) : (i.dispatch("login/setVipStatusLoaded"),
                            i.dispatch("login/setLogin", !1),
                            A(!1))
                        }
                        ))
                    }
                    ;
                    y();
                    const T = () => {
                        const e = navigator.userAgent.toLowerCase()
                          , t = /macintosh|mac os x/i.test(e);
                        h.value = t ? "Mac" : "Windows"
                    }
                    ;
                    T(),
                    (0,
                    s.sV)(( () => {
                        M.A.$on("buyVipSuccessFromVipCenter", f)
                    }
                    )),
                    (0,
                    s.hi)(( () => {
                        M.A.$off("buyVipSuccessFromVipCenter", f)
                    }
                    ));
                    const _ = {
                        testMode: a,
                        version: o,
                        showTopBanner: n,
                        store: i,
                        show: r,
                        internalInstance: l,
                        internalData: c,
                        yduserid: d,
                        nickname: u,
                        optionAvatar: p,
                        avatar: m,
                        currentOS: h,
                        goBack: g,
                        getBatchData: b,
                        getVipInfo: f,
                        getStudentInfo: v,
                        pushBingLog: A,
                        getAccountInfo: y,
                        getOS: T,
                        BackToTop: R,
                        get service() {
                            return H.A
                        },
                        get serviceAI() {
                            return O.A
                        },
                        get getVisitorId() {
                            return U.A
                        },
                        get useStore() {
                            return N.Pj
                        },
                        get md5() {
                            return B()
                        },
                        ref: s.KR,
                        getCurrentInstance: s.nI,
                        onMounted: s.sV,
                        onUnmounted: s.hi,
                        provide: s.Gt,
                        get eventBus() {
                            return M.A
                        },
                        get util() {
                            return K.A
                        }
                    };
                    return Object.defineProperty(_, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    _
                }
            };
            const $ = (0,
            h.A)(F, [["render", P]]);
            var j = $
              , W = a(75220);
            function X(e, t, a, o, n, i) {
                const r = (0,
                s.g2)("WebTopBanner")
                  , l = (0,
                s.g2)("dictWebsiteFooter")
                  , c = (0,
                s.g2)("TranslationWebsiteFrame")
                  , d = (0,
                s.g2)("VipCenter");
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: (0,
                    s.C4)(["index", [{
                        isPrerender: o.isPrerender,
                        aiBorder: "AITranslate" === e.$route.name
                    }]])
                }, [(0,
                s.bF)(c, {
                    testMode: o.testMode,
                    canRouterJump: !0,
                    currentRouteName: "AITranslate" === e.$route.name ? "TextTranslate" : e.$route.name,
                    sidebarTransition: o.canTransition,
                    contentBgClassName: o.contentBgClassName,
                    topNavFixedDis: 16,
                    onSaveTextTranslateContentToLS: o.saveTextTranslateContentToLS,
                    onSaveAITranslateHistoryList: o.saveAITranslateHistoryList,
                    onCollapseChange: o.collapseChange,
                    isFullContent: "/AITranslate" == e.$route.path,
                    needBaiduCallback: !0,
                    showCollapseTip: o.showCollapseTip,
                    minViewWidth: o.minViewWidth,
                    isSvip: o.isSvip,
                    showTipForceList: o.leftSlideTipForceList
                }, (0,
                s.eX)({
                    footer: (0,
                    s.k6)(( () => ["/AITranslate" !== e.$route.path ? ((0,
                    s.uX)(),
                    (0,
                    s.Wv)(l, {
                        key: 0
                    })) : (0,
                    s.Q3)("", !0)])),
                    default: (0,
                    s.k6)(( () => [(0,
                    s.bF)(o["TabHeaderLeft"]), (0,
                    s.bF)(o["TranslateTab"], {
                        class: (0,
                        s.C4)({
                            "ctrl-icon-nav": "/AITranslate" == e.$route.path
                        })
                    }, null, 8, ["class"]), "/AITranslate" !== e.$route.path ? ((0,
                    s.uX)(),
                    (0,
                    s.CE)("div", {
                        key: 0,
                        class: "banner-outer-container",
                        style: (0,
                        s.Tr)({
                            width: "calc(100% - " + o.animationAllocation + "px)"
                        })
                    }, [(0,
                    s.bF)(o["Banner"])], 4)) : (0,
                    s.Q3)("", !0), "TextTranslate" === e.$route.name ? ((0,
                    s.uX)(),
                    (0,
                    s.Wv)(o["TextTranslateHistoryPanel"], {
                        key: 1
                    })) : (0,
                    s.Q3)("", !0), "/AITranslate" !== e.$route.path || o.isPrerender ? (0,
                    s.Q3)("", !0) : ((0,
                    s.uX)(),
                    (0,
                    s.Wv)(o["AdPopUp"], {
                        key: 2
                    }))])),
                    _: 2
                }, [!o.isPrerender && o.showTopBanner ? {
                    name: "topBanner",
                    fn: (0,
                    s.k6)(( () => [(0,
                    s.bF)(r, {
                        isSvip: !o.vipStatusLoaded || o.isSvip,
                        onCloseTopBanner: t[0] || (t[0] = e => o.showTopBanner = !1)
                    }, null, 8, ["isSvip"])])),
                    key: "0"
                } : void 0]), 1032, ["testMode", "currentRouteName", "sidebarTransition", "contentBgClassName", "onSaveTextTranslateContentToLS", "onSaveAITranslateHistoryList", "isFullContent", "showCollapseTip", "minViewWidth", "isSvip", "showTipForceList"]), (0,
                s.bF)(d, {
                    debug: o.testMode,
                    isShow: o.isShowVipCenter,
                    onBuyVipSuccess: o.buyVipSuccess,
                    onCloseVipCenter: o.closeVipCenter,
                    routeQuery: o.vipRouteQuery
                }, null, 8, ["debug", "isShow", "routeQuery"])], 2)
            }
            var G = a(41034)
              , J = (a(44114),
            a(33110),
            a(39233))
              , Q = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASYSURBVHgB7Zs9a1RBFIbf9Qf40YrC2hrB2ChJ4wqCWikIWhpEaw3ab9Iraq1oLFUE7QIKro1BGxNQscuaiK0hf2A9L3PG3F2ydz73I3ofOJm9y+zuPe/MnDl3ZgJUVFRUVFT8t9QwBDqdTl2KhthRLfcWzNJWWxZbEWvVarU2diri9F6xpthqJ55VsXsq4EDI3gPkZhtSNGFa2rIptij2VWxNy001ywGxg2JHxKbFJvQ9y4LYfO5ekU0AbaV7Yhf0LTr3DMbxJcQxJXZZ7FLhvQVkFCKLAOL8DSnmYMY0HX+otok8sGdQhFt63YYRYQGJJAvAMSrFTb1kS1OMnxgMFIIi2B5xX0SYRQLRAjDISfFObBKmpe/CtPowuCZ2W2w3zKxxSoTYQARRAvQ4vy52FSawDRP2hpcwgTJahFgBPmPL+YsYXJd30SWCCHAMgexCIDrmx8F59NzDpN5bEEE9QH5gRoonMGP+NEbrfBHmDOwJjAmz0hPu+37QuwfoPN/USwa8cXGeMP7c0dfNkMwxZAjQ+TpMcjOsaB/CI7EPMLmI91DwGgKq6KpeHsd4tX4RBsU3MEOBs0LL9QHfHhDa9T+JfUR3Lh/LwcL3uWBQtL2z6VHfLYC2/oxePoM/xSkqlpjvsCl4Q/OVUnx6gE1z6bxv17dTU4oIxc/a6c4H+xBGbroq+whwXsvn8Kc4P8eIsJ3zIXFnUcsrroqlQbAQ/HgTJxBOjCOpzlu+wwTDugTDH/0quXpAQ8vYPD+0J+RynthecKqskkuASS1jFzSIrwg5nSe20SbLKrkEOKrlF6ThEiG382RNy5NllVwC1LVcRzr9RBiE8+SblqVToSsIdvTlfuSj1+Ea8jtPGAAZCDckCO7rV2kUApDeYTCoR+tf/CMC9PUzeD3gX8MlgF1i2o189A6B1IwxiWELsF3Ay5E29/st0i6r5CvAEaTTL9qnps1lv0faZZVcArzv+bKUmymb6gYhwoSWK2WVXAIsa3kY8fjO87lFmNJyuaySS4CWlucQR2iSk1MEO2xbZZVKBdANSBqD4BTCiM3wcogwrZ9puzZRffKAp1qehT+p6W2qCHbv8LWronNRVJeVfsOstByH344v1/BypLe9QvqsSfAzdv3wUHIP0P22FswwuA5/cqS3Md9hW3/B5wyB77J4A2YzdNx2hHoJan3i9Syg6+uvYHqB97bTCLAHKLxan4Q8DPEgAocDI2zIUBgWvCd2/7bYvO+HvAVQRe0XU+kJjA/25AgJOj8U9Disu64PYIbCY4zg6W0b7EzBe3oQem6oOiCBOLjUvIwRPsdj60zA3yMyiCBKAM0NiiK8xXADI38r+XwQyXFMjnHhhl5yT26QhycoNvf+p/WaY965/1dGroOSM9g6QEEoQshmqgubhV7X12zt+ZCjMP3IfVR2Dt0bkhThBczJjRjY0mdgjsvaZTkmZLNjdVS2SB8hOFtwq2pJy3V0b7bQuT0wgY3dnAsw59C9FtmCafUWdgIUgvGhk35cfs7noEMsw/6HCeYO3G+sYytekI2CcR2SkX1n/8NERUVFRUXF+PMHJygcYfKZSDQAAAAASUVORK5CYII=";
            const Y = ["src"];
            function z(e, t, a, o, n, i) {
                return (0,
                s.uX)(),
                (0,
                s.Wv)(o["Overlay"], {
                    visible: o.showAd,
                    modalClosable: !0
                }, {
                    content: (0,
                    s.k6)(( () => [(0,
                    s.Lk)("img", {
                        class: "ad",
                        src: o.picture,
                        onClick: o.goAd
                    }, null, 8, Y), (0,
                    s.Lk)("img", {
                        class: "close",
                        src: Q,
                        onClick: o.closeAd
                    })])),
                    _: 1
                }, 8, ["visible"])
            }
            var q = a(52670)
              , Z = a(76393)
              , ee = {
                __name: "AdPopUp",
                setup(e, {expose: t}) {
                    t();
                    const a = (0,
                    s.KR)(!1)
                      , o = (0,
                    s.KR)("")
                      , n = (0,
                    s.KR)("")
                      , i = (0,
                    s.nI)()
                      , r = i.appContext.config.globalProperties
                      , l = () => {
                        a.value = !1
                    }
                      , c = () => {
                        window.open(o.value, "_self"),
                        window._rlog.push(["_trackCustom", "event", [["action", "pop-up_windows"]]])
                    }
                    ;
                    (0,
                    s.sV)(( () => {
                        Z.A.getPopUpInfos().then((e => {
                            if (0 !== Object.keys(e.data.bannerList).length) {
                                const t = e.data.bannerList[0];
                                o.value = t.url,
                                n.value = t.picture,
                                K.A.isDuringDate(t.effectiveTime, t.expirationTime) && null === r.$cookies.get("adcookie") ? (a.value = !0,
                                window._rlog.push(["_trackCustom", "event", [["show", "pop-up_windows"]]]),
                                r.$cookies.set("adcookie", !0, 86400)) : a.value = !1
                            }
                        }
                        ))
                    }
                    ));
                    const d = {
                        showAd: a,
                        url: o,
                        picture: n,
                        internalInstance: i,
                        internalData: r,
                        closeAd: l,
                        goAd: c,
                        ref: s.KR,
                        onMounted: s.sV,
                        getCurrentInstance: s.nI,
                        Overlay: q.A,
                        get service() {
                            return Z.A
                        },
                        get util() {
                            return K.A
                        }
                    };
                    return Object.defineProperty(d, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    d
                }
            };
            const te = (0,
            h.A)(ee, [["render", z], ["__scopeId", "data-v-f1081c76"]]);
            var ae = te
              , oe = a(34792)
              , ne = a(42348)
              , ie = a(36519);
            const re = e => ((0,
            s.Qi)("data-v-4ca7dc65"),
            e = e(),
            (0,
            s.jt)(),
            e)
              , le = {
                class: "text-translate-history-panel-header-container"
            }
              , se = re(( () => (0,
            s.Lk)("div", {
                class: "text-translate-history-panel-title"
            }, [(0,
            s.Lk)("i", {
                class: "icon_history_panel_title"
            }), (0,
            s.Lk)("span", null, "历史记录")], -1)))
              , ce = {
                class: "right-btns-container"
            }
              , de = {
                key: 0,
                class: "history-content-container"
            }
              , ue = ["onClick"]
              , pe = {
                class: "history-item-lang"
            }
              , me = {
                class: "history-item-text history-item-origin"
            }
              , he = {
                class: "history-item-text history-item-target"
            }
              , ge = ["onClick"]
              , be = {
                key: 1,
                class: "history-no-content"
            }
              , fe = re(( () => (0,
            s.Lk)("img", {
                src: ie
            }, null, -1)))
              , ve = [fe];
            function Ae(e, t, a, o, n, i) {
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: "text-translate-history-panel-container",
                    style: (0,
                    s.Tr)({
                        transform: "translateX(" + (200 - o.animationAllocation) + "px)",
                        display: 0 === o.animationAllocation ? "none" : "block",
                        opacity: o.animationAllocation / 200
                    })
                }, [(0,
                s.Lk)("div", le, [se, (0,
                s.Lk)("div", ce, [o.historyList.length ? ((0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    key: 0,
                    class: "clear-btn",
                    onClick: o.clearAllHistoryHandler
                }, "清空")) : (0,
                s.Q3)("", !0), (0,
                s.Lk)("i", {
                    class: "icon-close-text-translate-history-panel",
                    onClick: o.closeHistoryPanelHandler
                })])]), o.historyList.length ? ((0,
                s.uX)(),
                (0,
                s.CE)("div", de, [((0,
                s.uX)(!0),
                (0,
                s.CE)(s.FK, null, (0,
                s.pI)(o.historyList, ( (e, t) => ((0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: "history-item",
                    key: t,
                    onClick: a => o.updateTextTranslateContentHandler(e, t)
                }, [(0,
                s.Lk)("div", pe, (0,
                s.v_)(o.getLangShowLabel(e)), 1), (0,
                s.Lk)("div", me, (0,
                s.v_)(o.getOriginText(e)), 1), (0,
                s.Lk)("div", he, (0,
                s.v_)(e.targetText), 1), (0,
                s.Lk)("i", {
                    class: "icon_history_item_delete",
                    onClick: (0,
                    s.D$)((e => o.deleteHistoryItemHandler(t)), ["stop"])
                }, null, 8, ge)], 8, ue)))), 128))])) : ((0,
                s.uX)(),
                (0,
                s.CE)("div", be, ve))], 4)
            }
            a(13609),
            a(25440);
            var ye = a(37062);
            const Te = 100;
            var _e = {
                __name: "TextTranslateHistoryPanel",
                setup(e, {expose: t}) {
                    t();
                    const a = (0,
                    s.WQ)("showTextTranslateHistoryPanel")
                      , o = (0,
                    s.WQ)("animationAllocation")
                      , n = (e => {
                        const t = {};
                        return ((null === ye.A || void 0 === ye.A || null === (e = ye.A.textTranslate) || void 0 === e ? void 0 : e.specify) || []).forEach((e => {
                            t[e.code] = e.label
                        }
                        )),
                        t
                    }
                    )()
                      , i = (0,
                    s.KR)([])
                      , r = e => e.source.init.keyword.replace(/\n/g, " ")
                      , l = e => "selfInnovate" === e.domainType ? u(e.data.result.originTranslateResult, "tgt") : e.data.result.aigcResp
                      , c = e => {
                        m();
                        const t = {
                            source: JSON.parse(JSON.stringify(e.source)),
                            domainType: e.domainType,
                            domain: e.domain,
                            targetText: l(e),
                            languageFromUserSelectedWhenAuto: e.languageFromUserSelectedWhenAuto
                        }
                          , a = i.value[0];
                        if (a) {
                            const o = e.source.init.keyword.replace(/\n/)
                              , n = a.source.init.keyword.replace(/\n/);
                            if (a.source.init.from === e.source.init.from && a.source.init.to === e.source.init.to && (0 === o.indexOf(n) || 0 === n.indexOf(o)))
                                return i.value[0] = t,
                                void localStorage.setItem("textTranslateHistoryList", JSON.stringify(i.value))
                        }
                        const o = i.value.findIndex((t => t.source.init.keyword === e.source.init.keyword && t.source.init.from === e.source.init.from && t.source.init.to === e.source.init.to));
                        o > -1 && i.value.splice(o, 1),
                        i.value.length >= Te && i.value.pop(),
                        i.value.unshift(t),
                        localStorage.setItem("textTranslateHistoryList", JSON.stringify(i.value))
                    }
                      , d = e => {
                        var t, a;
                        let o = ""
                          , i = null === (t = e.source) || void 0 === t || null === (t = t.init) || void 0 === t ? void 0 : t.from
                          , r = null === (a = e.source) || void 0 === a || null === (a = a.init) || void 0 === a ? void 0 : a.to;
                        if (e.languageFromUserSelectedWhenAuto) {
                            o += "检测到";
                            const t = e.languageFromUserSelectedWhenAuto.split("2");
                            i = t[0] || "",
                            r = t[1] || ""
                        }
                        return o += `${n[i]} - ${n[r]}`,
                        o
                    }
                      , u = (e, t) => {
                        if (!e)
                            return "";
                        let a = "";
                        return e.forEach((e => {
                            let o = "";
                            e.forEach((e => {
                                o += e[t]
                            }
                            )),
                            a += o
                        }
                        )),
                        a.replace(/\n/g, " ")
                    }
                      , p = (e, t) => {
                        i.value.splice(t, 1),
                        i.value.unshift(e),
                        M.A.$emit("updateTextTranslateContent", JSON.parse(JSON.stringify(e)))
                    }
                      , m = () => {
                        const e = localStorage.getItem("textTranslateHistoryList");
                        e && (i.value = JSON.parse(e))
                    }
                      , h = () => {
                        window.$CPopup({
                            text: "清空后无法恢复，确定全部清空么？",
                            confirmButtonText: "确定",
                            confirm: () => {
                                i.value = [],
                                localStorage.removeItem("textTranslateHistoryList")
                            }
                            ,
                            cancel: () => {}
                        })
                    }
                      , g = () => {
                        a.value = !1
                    }
                      , b = e => {
                        i.value.splice(e, 1),
                        localStorage.setItem("textTranslateHistoryList", JSON.stringify(i.value))
                    }
                      , f = e => {
                        const t = i.value.findIndex((t => t.source.init.keyword === e.keyword && t.source.init.from === e.from && t.source.init.to === e.to));
                        if (t > -1) {
                            const a = i.value[t];
                            a.source.init.keyword = e.newKeyword,
                            i.value.splice(t, 1),
                            i.value.unshift(a),
                            localStorage.setItem("textTranslateHistoryList", JSON.stringify(i.value))
                        }
                    }
                    ;
                    (0,
                    s.sV)(( () => {
                        m(),
                        M.A.$on("updateHistoryList", c),
                        M.A.$on("replaceTextTranslateHistoryItemByContent", f)
                    }
                    )),
                    (0,
                    s.hi)(( () => {
                        M.A.$off("updateHistoryList", c),
                        M.A.$off("replaceTextTranslateHistoryItemByContent", f)
                    }
                    ));
                    const v = {
                        showTextTranslateHistoryPanel: a,
                        animationAllocation: o,
                        maxHistoryItemLength: Te,
                        languageMap: n,
                        historyList: i,
                        getOriginText: r,
                        getTranslationResult: l,
                        saveHistoryList: c,
                        getLangShowLabel: d,
                        mergeText: u,
                        updateTextTranslateContentHandler: p,
                        queryHistoryList: m,
                        clearAllHistoryHandler: h,
                        closeHistoryPanelHandler: g,
                        deleteHistoryItemHandler: b,
                        replaceHistoryItemByContent: f,
                        get eventBus() {
                            return M.A
                        },
                        get defaultJson() {
                            return ye.A
                        }
                    };
                    return Object.defineProperty(v, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    v
                }
            };
            const Se = (0,
            h.A)(_e, [["render", Ae], ["__scopeId", "data-v-4ca7dc65"]]);
            var ke = Se
              , Ie = a.p + "img/AITranslateTabGuide.88f8c4aa.png";
            const we = e => ((0,
            s.Qi)("data-v-72d80a04"),
            e = e(),
            (0,
            s.jt)(),
            e)
              , Ee = {
                class: "tab-left"
            }
              , Ce = ["onClick", "onMouseenter"]
              , Pe = {
                key: 1,
                class: "tip-text"
            }
              , Le = {
                key: 1,
                class: "tab-title"
            }
              , xe = we(( () => (0,
            s.Lk)("div", {
                class: "tab-right"
            }, null, -1)));
            function De(e, t, a, o, n, i) {
                const r = (0,
                s.gN)("tooltip");
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: (0,
                    s.C4)(["tab-header", {
                        "tab-header-ai": "AITranslate" === i.routeName,
                        "tab-header-doc": "DocumentUpload" === i.routeName
                    }])
                }, [(0,
                s.Lk)("div", Ee, ["TextTranslate" === i.routeName || "AITranslate" === i.routeName ? ((0,
                s.uX)(),
                (0,
                s.CE)(s.FK, {
                    key: 0
                }, [((0,
                s.uX)(!0),
                (0,
                s.CE)(s.FK, null, (0,
                s.pI)(n.tabList, ( (e, a) => ((0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: (0,
                    s.C4)(["tab-item", [e.value === n.currentTab ? "active color_text_1" : "color_text_3", "AITranslate" === e.value ? "tab-item-ai" : "", e.customStyle]]),
                    key: a,
                    onClick: t => i.tabItemClickHandler(e),
                    onMouseenter: t => i.tabItemMouseHoverHandler(e),
                    onMouseleave: t[1] || (t[1] = e => i.guideMouseHoverHandler(0))
                }, [(0,
                s.Lk)("span", null, (0,
                s.v_)(e.label), 1), n.isPrerender || "AITranslate" !== e.value || !n.showTabAiGuide && !n.isHoverShowAiGuide || "AITranslate" === i.routeName ? (0,
                s.Q3)("", !0) : ((0,
                s.uX)(),
                (0,
                s.CE)("img", {
                    key: 0,
                    class: (0,
                    s.C4)(["ai-guide", {
                        "ai-guide-cls": n.sideBarClp
                    }]),
                    style: (0,
                    s.Tr)({
                        top: `${i.getAiTabPosition().top}px`,
                        left: `${i.getAiTabPosition().left}px`
                    }),
                    src: Ie,
                    onClick: t[0] || (t[0] = (0,
                    s.D$)(( (...e) => i.clickTabAIGuide && i.clickTabAIGuide(...e)), ["stop"]))
                }, null, 6)), e.tipText ? ((0,
                s.uX)(),
                (0,
                s.CE)("div", Pe, (0,
                s.v_)(e.tipText), 1)) : (0,
                s.Q3)("", !0)], 42, Ce)))), 128)), (0,
                s.bo)(((0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: "tab-item color_text_3",
                    onClick: t[2] || (t[2] = e => i.tabItemClickHandler(n.humanTranslateTab))
                }, [(0,
                s.Lk)("span", null, (0,
                s.v_)(n.humanTranslateTab.label), 1)])), [[r, i.HumanTranslateHoverTip, void 0, {
                    "bottom-left": !0
                }]]), (0,
                s.Lk)("div", {
                    class: "tab-item color_text_3",
                    onClick: t[3] || (t[3] = e => i.tabItemClickHandler(n.AIhumanTranslateTab))
                }, [(0,
                s.Lk)("span", null, (0,
                s.v_)(n.AIhumanTranslateTab.label), 1)])], 64)) : "DocumentUpload" === i.routeName ? ((0,
                s.uX)(),
                (0,
                s.CE)("div", Le, [(0,
                s.Lk)("span", null, (0,
                s.v_)(n.documentUploadTab.label), 1)])) : (0,
                s.Q3)("", !0)]), xe], 2)
            }
            var Re = a(62512)
              , He = a(69208);
            const Oe = {
                class: "hunman-translate-hover-tip"
            }
              , Ue = (0,
            s.Fv)('<h5 class="tip-title" data-v-1674d62e><span class="color_main_1_text" data-v-1674d62e>母语润色</span><span class="color_text_1" data-v-1674d62e>服务全新上线</span></h5><ul class="tip-list" data-v-1674d62e><li class="tip-list-item color_text_2" data-v-1674d62e>专业译员随时待命</li><li class="tip-list-item color_text_2" data-v-1674d62e>最快1分钟返回精准译文</li></ul>', 2)
              , Ne = [Ue];
            function Ve(e, t) {
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", Oe, Ne)
            }
            const Be = {}
              , Me = (0,
            h.A)(Be, [["render", Ve], ["__scopeId", "data-v-1674d62e"]]);
            var Ke = Me
              , Fe = {
                name: "TabHeader",
                props: {
                    showTextTranslateHistoryPanel: Boolean
                },
                data() {
                    var e;
                    return {
                        tabList: [{
                            label: "翻译",
                            value: "TextTranslate"
                        }, {
                            label: "AI 翻译",
                            value: "AITranslate",
                            params: {
                                keyfrom: "fanyiweb_tab"
                            },
                            customStyle: "gradient-item"
                        }, {
                            label: "文档翻译",
                            value: "DocumentUpload",
                            tipText: "秒翻PDF"
                        }, {
                            label: "PDF转WORD",
                            value: "Pdf2Word"
                        }],
                        humanTranslateTab: {
                            label: "人工翻译",
                            url: "https://f.youdao.com/?vendor=fanyibanner",
                            log: "human_translation"
                        },
                        AIhumanTranslateTab: {
                            label: "AI+人工翻译",
                            url: "https://f.youdao.com/?path=peOrder&vendor=fanyiweb",
                            log: "AI_human_translation"
                        },
                        documentUploadTab: {
                            label: "文档翻译",
                            value: "DocumentUpload"
                        },
                        currentTab: "",
                        showTabAiGuide: !1,
                        isHoverShowAiGuide: !1,
                        isPrerender: (null === (e = window.__PRERENDER_INJECTED) || void 0 === e ? void 0 : e.isPrerender) || !1,
                        sideBarClp: !1
                    }
                },
                computed: {
                    routeName() {
                        return this.$route.name
                    },
                    isLogin() {
                        return this.$store.state.login.isLogin
                    }
                },
                components: {
                    TextTranslateSetting: He.A
                },
                mounted() {
                    this.checkShowTabAiGuide(),
                    window.addEventListener("click", this.clickHandler),
                    M.A.$on("sidebarCollapseChange", (e => {
                        this.sideBarClp = e
                    }
                    ))
                },
                beforeDestroy() {
                    console.log("beforeDestroy 左"),
                    window.removeEventListener("click", this.clickHandler),
                    M.A.$off("sidebarCollapseChange")
                },
                methods: {
                    getAiTabPosition() {
                        const e = document.querySelector(".tab-item-ai");
                        if (e) {
                            const t = e.getBoundingClientRect();
                            return {
                                top: t.top + 20,
                                left: t.left - 20
                            }
                        }
                        return {}
                    },
                    clickTabAIGuide() {
                        this.$router.push({
                            name: "AITranslate",
                            query: {
                                keyfrom: "fanyiweb_tab_guide"
                            }
                        })
                    },
                    clickHandler(e) {
                        const {target: t} = e;
                        "pop-up-comp mask" !== t.className && "close" !== t.className && (this.showTabAiGuide = !1,
                        window.removeEventListener("click", this.clickHandler))
                    },
                    checkShowTabAiGuide() {
                        const e = this.getLocalStorage("isShowTabAiGuide");
                        if (void 0 === e) {
                            const e = new Date
                              , t = `${e.getMonth() + 1}-${e.getDate()}`;
                            this.setLocalStorage("isShowTabAiGuide", t),
                            this.showTabAiGuide = !0
                        } else {
                            const t = new Date
                              , a = `${t.getMonth() + 1}-${t.getDate()}`;
                            e !== a ? (this.setLocalStorage("isShowTabAiGuide", a),
                            setTimeout(( () => {
                                this.showTabAiGuide = !0
                            }
                            ), 500)) : this.showTabAiGuide = !1
                        }
                    },
                    getLocalStorage(e) {
                        return Re.A.get(e)
                    },
                    setLocalStorage(e, t) {
                        Re.A.set(e, t)
                    },
                    guideMouseHoverHandler(e) {
                        this.isHoverShowAiGuide = Boolean(e)
                    },
                    tabItemMouseHoverHandler(e) {
                        "AITranslate" === e.value && (this.isHoverShowAiGuide = !0)
                    },
                    HumanTranslateHoverTip() {
                        return {
                            component: Ke
                        }
                    },
                    tabItemClickHandler(e) {
                        M.A.$emit("stopTransition"),
                        e.value ? ("Pdf2Word" === e.value && window._rlog.push(["_trackCustom", "event", [["action", "fanyiweb_ formatconvert_entry_click"], ["from", "top"]]]),
                        this.$router.push({
                            name: `${e.value}`,
                            query: e && e.params || {}
                        })) : (e.log && window._rlog.push(["_trackCustom", "event", [["action", e.log]]]),
                        window.open(e.url, "_blank"))
                    }
                },
                watch: {
                    $route: {
                        handler() {
                            this.currentTab = decodeURIComponent(this.$route.name)
                        },
                        immediate: !0
                    }
                }
            };
            (0,
            s.KR)(!0);
            const $e = (0,
            h.A)(Fe, [["render", De], ["__scopeId", "data-v-72d80a04"]]);
            var je = $e;
            const We = e => ((0,
            s.Qi)("data-v-e96cb4ec"),
            e = e(),
            (0,
            s.jt)(),
            e)
              , Xe = {
                class: "tab-right"
            }
              , Ge = ["data-tooltip"]
              , Je = We(( () => (0,
            s.Lk)("i", {
                class: "icon ic_text_translate_setting"
            }, null, -1)))
              , Qe = We(( () => (0,
            s.Lk)("i", {
                class: "icon ic_text_translate_history"
            }, null, -1)))
              , Ye = [Qe]
              , ze = We(( () => (0,
            s.Lk)("i", {
                class: "icon ic_leftbar_document_normal"
            }, null, -1)))
              , qe = We(( () => (0,
            s.Lk)("span", {
                class: "color_text_1"
            }, "文档翻译记录", -1)))
              , Ze = [ze, qe];
            function et(e, t, a, o, n, i) {
                const r = He.A
                  , l = (0,
                s.gN)("tooltip");
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: (0,
                    s.C4)(["tab-header", {
                        "tab-header-ai": "AITranslate" === i.routeName,
                        "tab-header-doc": "DocumentUpload" === i.routeName
                    }])
                }, [(0,
                s.Lk)("div", Xe, ["TextTranslate" === i.routeName ? (0,
                s.bo)(((0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    key: 0,
                    class: (0,
                    s.C4)(["only-icon-tool-button", [{
                        active: n.textTranslateSettingDialogVisible
                    }]]),
                    onClick: t[0] || (t[0] = (...e) => i.textTranslateSettingButtonClickHander && i.textTranslateSettingButtonClickHander(...e)),
                    "data-tooltip": n.textTranslateSettingDialogVisible ? "" : "设置"
                }, [Je, (0,
                s.bF)(r, {
                    top: 40,
                    showTextTranslateHistoryPanel: a.showTextTranslateHistoryPanel,
                    dialogVisible: n.textTranslateSettingDialogVisible,
                    onCloseDialog: i.textTranslateSettingCloseCallbackHandler
                }, null, 8, ["showTextTranslateHistoryPanel", "dialogVisible", "onCloseDialog"])], 10, Ge)), [[l, void 0, void 0, {
                    bottom: !0
                }]]) : (0,
                s.Q3)("", !0), "TextTranslate" !== i.routeName || a.showTextTranslateHistoryPanel ? (0,
                s.Q3)("", !0) : (0,
                s.bo)(((0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    key: 1,
                    class: "only-icon-tool-button",
                    onClick: t[1] || (t[1] = (...e) => i.textTranslateHistoryButtonClickHander && i.textTranslateHistoryButtonClickHander(...e)),
                    "data-tooltip": "历史记录"
                }, Ye)), [[l, void 0, void 0, {
                    bottom: !0
                }]]), "DocumentUpload" === i.routeName ? ((0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    key: 2,
                    class: "tool-button",
                    onClick: t[2] || (t[2] = (...e) => i.docHistoryEntryClickHandler && i.docHistoryEntryClickHandler(...e))
                }, Ze)) : (0,
                s.Q3)("", !0)])], 2)
            }
            var tt = {
                name: "TabHeader",
                props: {
                    showTextTranslateHistoryPanel: Boolean
                },
                data() {
                    var e;
                    return {
                        textTranslateSettingDialogVisible: !1,
                        showTabAiGuide: !1,
                        isHoverShowAiGuide: !1,
                        isPrerender: (null === (e = window.__PRERENDER_INJECTED) || void 0 === e ? void 0 : e.isPrerender) || !1
                    }
                },
                computed: {
                    routeName() {
                        return this.$route.name
                    },
                    isLogin() {
                        return this.$store.state.login.isLogin
                    }
                },
                components: {
                    TextTranslateSetting: He.A
                },
                mounted() {},
                methods: {
                    textTranslateSettingButtonClickHander() {
                        this.textTranslateSettingDialogVisible = !0
                    },
                    textTranslateSettingCloseCallbackHandler() {
                        this.textTranslateSettingDialogVisible = !1
                    },
                    textTranslateHistoryButtonClickHander() {
                        window._rlog.push(["_trackCustom", "event", [["action", "text_translation_history"]]]),
                        this.$emit("openTextTranslateHistoryPanel", !this.showTextTranslateHistoryPanel),
                        this.$nextTick(( () => {
                            const e = document.querySelector(".yd-tooltip");
                            e && e.remove()
                        }
                        ))
                    },
                    docHistoryEntryClickHandler() {
                        if (this.isLogin) {
                            const e = this.$router.resolve({
                                path: "/person/docHistory"
                            });
                            window.open(e.href, "_blank")
                        } else {
                            const e = `${window.location.origin}${window.location.pathname}#/person/docHistory`;
                            window.location.href = `https://c.youdao.com/common-login-web/index.html?redirect_url=${encodeURIComponent(e)}&t=${(new Date).getTime()}`
                        }
                    }
                },
                watch: {
                    textTranslateSettingDialogVisible: {
                        handler(e) {
                            e && this.$nextTick(( () => {
                                const e = document.querySelector(".yd-tooltip");
                                e && e.remove()
                            }
                            ))
                        }
                    }
                }
            };
            const at = (0,
            h.A)(tt, [["render", et], ["__scopeId", "data-v-e96cb4ec"]]);
            var ot = at;
            const nt = {
                class: "tab-body color_bg_3"
            };
            function it(e, t, a, o, n, i) {
                const r = ot
                  , l = (0,
                s.g2)("router-view");
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: (0,
                    s.C4)(["translate-tab-container", {
                        "ai-content": "/AITranslate" === o.route.path,
                        "ai-content ai-content-small-process": "/AITranslateSmallProcess" === o.route.path,
                        changeHeight: "/AITranslate" === o.route.path && o.changeHeight,
                        "ai-content-sidebar-unfold": o.sideBarUnfold
                    }]),
                    ref: "AIContent",
                    onScroll: o.handleScroll,
                    style: (0,
                    s.Tr)({
                        width: "calc(100% - " + o.animationAllocation + "px)"
                    })
                }, [(0,
                s.bF)(r, {
                    showTextTranslateHistoryPanel: o.showTextTranslateHistoryPanel,
                    onOpenTextTranslateHistoryPanel: o.openTextTranslateHistoryPanel
                }, null, 8, ["showTextTranslateHistoryPanel"]), (0,
                s.Lk)("div", nt, [(0,
                s.bF)(l, null, {
                    default: (0,
                    s.k6)(( ({Component: e}) => [((0,
                    s.uX)(),
                    (0,
                    s.Wv)(s.PR, null, [((0,
                    s.uX)(),
                    (0,
                    s.Wv)((0,
                    s.$y)(e)))], 1024))])),
                    _: 1
                })])], 38)
            }
            var rt = a(34917)
              , lt = {
                __name: "index",
                setup(e, {expose: t}) {
                    t();
                    const a = (0,
                    W.lq)()
                      , o = (0,
                    s.nI)()
                      , n = o.appContext.config.globalProperties
                      , i = (0,
                    N.Pj)()
                      , r = (0,
                    s.KR)(null)
                      , l = (0,
                    s.KR)(0)
                      , c = (0,
                    s.KR)(0)
                      , d = (0,
                    s.KR)(!1)
                      , u = (0,
                    s.WQ)("showTextTranslateHistoryPanel")
                      , p = (0,
                    s.WQ)("animationAllocation")
                      , m = (0,
                    s.KR)(!0)
                      , h = e => {
                        const t = e.target.scrollHeight - e.target.clientHeight
                          , a = e.target.scrollTop < 0 ? 0 : e.target.scrollTop <= t ? e.target.scrollTop : t;
                        a > c.value && t > 90 && t - a > 90 && (M.A.$emit("AITranslateResultScroll", 1),
                        l.value = 1),
                        a < c.value && (M.A.$emit("AITranslateResultScroll", 0),
                        l.value = 0),
                        c.value = a
                    }
                      , g = e => {
                        u.value = e
                    }
                    ;
                    (0,
                    s.KC)(( () => {
                        i.dispatch("fetchLanguageData"),
                        i.dispatch("fetchDomainData");
                        const e = {
                            keyid: "minor-search-server"
                        }
                          , t = "8XdqRK6tvAQAtRB349Wdmkzxr2A5fqDJ";
                        rt.A.getAigcEntrance(e, t).then((a => {
                            i.commit("SET_ISALLOWAIGC", a.data.isAllow),
                            !a.data.isAllow && i.state.login.isLogin || rt.A.getAigcStyle(e, t).then((e => {
                                i.commit("SET_AIGCDOMAINMAP", e.data.styleList),
                                null !== n.$cookies.get("participation-aigc-invitation") && i.dispatch("updateDomainMap")
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    (0,
                    s.sV)(( () => {
                        M.A.$on("AITranslateResultScroll", (e => {
                            d.value = !!e
                        }
                        )),
                        M.A.$on("sidebarCollapseChange", (e => {
                            m.value = !e
                        }
                        ))
                    }
                    )),
                    (0,
                    s.xo)(( () => {
                        M.A.$off("sidebarCollapseChange")
                    }
                    ));
                    const b = {
                        route: a,
                        internalInstance: o,
                        internalData: n,
                        store: i,
                        AIContent: r,
                        toggleTopBarStatus: l,
                        lastScrollTop: c,
                        changeHeight: d,
                        showTextTranslateHistoryPanel: u,
                        animationAllocation: p,
                        sideBarUnfold: m,
                        handleScroll: h,
                        openTextTranslateHistoryPanel: g,
                        getCurrentInstance: s.nI,
                        onMounted: s.sV,
                        get useRoute() {
                            return W.lq
                        },
                        get useStore() {
                            return N.Pj
                        },
                        get eventBus() {
                            return M.A
                        },
                        get service() {
                            return rt.A
                        }
                    };
                    return Object.defineProperty(b, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    b
                }
            };
            const st = (0,
            h.A)(lt, [["render", it], ["__scopeId", "data-v-d74f9006"]]);
            var ct = st
              , dt = {
                __name: "Home",
                setup(e, {expose: t}) {
                    var a;
                    t();
                    const o = (0,
                    W.lq)()
                      , {saveTextTranslateContentToLS: n, saveAITranslateHistoryList: i} = (0,
                    oe.A)()
                      , r = (0,
                    s.KR)(!0)
                      , l = (0,
                    s.KR)(!1)
                      , c = (0,
                    s.KR)(!1);
                    (0,
                    s.Gt)("showCollapseTip", c);
                    const d = (0,
                    N.Pj)()
                      , u = (0,
                    s.EW)(( () => d.state.login.isSvip))
                      , p = (0,
                    s.EW)(( () => d.state.login.vipStatusLoaded))
                      , m = (0,
                    s.KR)(1280)
                      , h = (0,
                    s.WQ)("showTopBanner")
                      , g = (0,
                    s.KR)(!1);
                    (0,
                    s.Gt)("showTextTranslateHistoryPanel", g);
                    const b = (0,
                    s.KR)([]);
                    (0,
                    s.Gt)("leftSlideTipForceList", b);
                    const f = (e, t) => {
                        console.log("updateLeftSlideTipForceList", e);
                        const a = JSON.parse(localStorage.getItem("fanyiweb_left_slide_tip_force"));
                        console.log("updateLeftSlideTipForceList timeInfo", a);
                        const {time: o, count: n} = a || {};
                        if (console.log("updateLeftSlideTipForceList 当天展示情况", new Date(Number(o)).toDateString() === (new Date).toDateString()),
                        new Date(Number(o)).toDateString() === (new Date).toDateString())
                            return;
                        if (console.log("updateLeftSlideTipForceList 当月展示情况", new Date(Number(o)).getMonth() === (new Date).getMonth(), n),
                        new Date(Number(o)).getMonth() === (new Date).getMonth() && n >= 3)
                            return;
                        b.value = e;
                        let i = 1;
                        console.log("localCount", n),
                        n ? (console.log("localCount 1", n),
                        n < 3 && new Date(Number(o)).getMonth() === (new Date).getMonth() ? (console.log("localCount 2", n),
                        i = n + 1) : (console.log("localCount 3", n),
                        i = 1)) : (console.log("localCount 4", n),
                        i = 1),
                        localStorage.setItem("fanyiweb_left_slide_tip_force", JSON.stringify({
                            time: (new Date).getTime(),
                            count: i
                        }));
                        const r = setTimeout(( () => {
                            b.value = [],
                            clearTimeout(r)
                        }
                        ), 5e3);
                        window._rlog.push(["_trackCustom", "event", [["show", "fanyiweb_sidebar_xueshucha_reminder"], ["from", t]]])
                    }
                    ;
                    (0,
                    s.Gt)("updateLeftSlideTipForceList", f);
                    const v = (0,
                    s.KR)(0);
                    (0,
                    s.Gt)("animationAllocation", v),
                    (0,
                    s.wB)(g, ( () => {
                        if (g.value && !l.value) {
                            const e = document.querySelector(".collapsed-btn .icon-collapsed");
                            e && e.click()
                        }
                        (0,
                        ne.i)({
                            duration: 600,
                            timing: ne.r,
                            draw(e) {
                                g.value ? v.value = 200 * e : v.value = 200 - 200 * e
                            }
                        })
                    }
                    )),
                    (0,
                    s.wB)(( () => o.path), ( () => {
                        (0,
                        s.dY)(( () => {
                            const e = document.querySelector(".web-frame-content");
                            "/AITranslate" === o.path ? (e.classList.add("web-frame-content-ai"),
                            m.value = 1080) : (e.classList.remove("web-frame-content-ai"),
                            m.value = 1280)
                        }
                        ))
                    }
                    ), {
                        immediate: !0
                    });
                    const A = K.A.getParameter("keyfrom")
                      , y = (0,
                    s.EW)(( () => !1))
                      , T = (0,
                    s.KR)(!1)
                      , _ = (0,
                    s.KR)({});
                    let S = null;
                    const k = (e, t) => {
                        console.log("openVipCenter", e, t, A),
                        _.value = (0,
                        G.A)((0,
                        G.A)({}, e), {}, {
                            keyfrom: A
                        }),
                        T.value = !0,
                        S = t
                    }
                      , I = () => {
                        T.value = !1
                    }
                      , w = () => {
                        M.A.$emit("buyVipSuccessFromVipCenter"),
                        S && S()
                    }
                    ;
                    (0,
                    s.Gt)("openVipCenter", k);
                    const E = (null === (a = window.__PRERENDER_INJECTED) || void 0 === a ? void 0 : a.isPrerender) || !1
                      , C = (0,
                    s.EW)(( () => "AITranslate" === o.name ? "ai-bg" : "index-bg"));
                    (0,
                    s.sV)(( () => {
                        document.dispatchEvent(new Event("render-event"))
                    }
                    ));
                    const P = e => {
                        l.value = e,
                        M.A.$emit("sidebarCollapseChange", e)
                    }
                    ;
                    (0,
                    s.sV)(( () => {
                        M.A.$on("stopTransition", ( () => {
                            r.value = !1,
                            setTimeout(( () => {
                                r.value = !0
                            }
                            ), 200)
                        }
                        ))
                    }
                    ));
                    const L = {
                        route: o,
                        saveTextTranslateContentToLS: n,
                        saveAITranslateHistoryList: i,
                        canTransition: r,
                        collapsed: l,
                        showCollapseTip: c,
                        store: d,
                        isSvip: u,
                        vipStatusLoaded: p,
                        minViewWidth: m,
                        showTopBanner: h,
                        showTextTranslateHistoryPanel: g,
                        leftSlideTipForceList: b,
                        updateLeftSlideTipForceList: f,
                        animationAllocation: v,
                        keyfrom: A,
                        testMode: y,
                        isShowVipCenter: T,
                        vipRouteQuery: _,
                        get buyVipSuccessCallback() {
                            return S
                        },
                        set buyVipSuccessCallback(e) {
                            S = e
                        },
                        openVipCenter: k,
                        closeVipCenter: I,
                        buyVipSuccess: w,
                        isPrerender: E,
                        contentBgClassName: C,
                        collapseChange: P,
                        inject: s.WQ,
                        onMounted: s.sV,
                        onUnmounted: s.hi,
                        get useRoute() {
                            return W.lq
                        },
                        get useStore() {
                            return N.Pj
                        },
                        get util() {
                            return K.A
                        },
                        get eventBus() {
                            return M.A
                        },
                        Banner: J.A,
                        AdPopUp: ae,
                        get useTranslationWebsiteFrame() {
                            return oe.A
                        },
                        get animate() {
                            return ne.i
                        },
                        get timingEaseOut() {
                            return ne.r
                        },
                        TextTranslateHistoryPanel: ke,
                        TabHeaderLeft: je,
                        TranslateTab: ct
                    };
                    return Object.defineProperty(L, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    L
                }
            };
            const ut = (0,
            h.A)(dt, [["render", X], ["__scopeId", "data-v-f7e52a94"]]);
            var pt = ut
              , mt = a(25507);
            const ht = [{
                path: "/",
                name: "Home",
                component: pt,
                children: [{
                    path: "",
                    redirect: {
                        name: "AITranslate"
                    }
                }, {
                    path: "TextTranslate",
                    name: "TextTranslate",
                    component: () => Promise.all([a.e(853), a.e(233), a.e(85), a.e(348)]).then(a.bind(a, 40767))
                }, {
                    path: "documentUpload",
                    name: "DocumentUpload",
                    component: () => Promise.all([a.e(233), a.e(296), a.e(85), a.e(551)]).then(a.bind(a, 94099))
                }, {
                    path: "AITranslate",
                    name: "AITranslate",
                    component: () => Promise.all([a.e(853), a.e(233), a.e(829), a.e(873)]).then(a.bind(a, 93114))
                }]
            }, {
                path: "/paraphraser",
                name: "Paraphraser",
                component: () => Promise.all([a.e(853), a.e(108)]).then(a.bind(a, 61754))
            }, {
                path: "/fileFormat",
                name: "FileFormat",
                component: () => a.e(508).then(a.bind(a, 70011)),
                children: [{
                    path: "",
                    redirect: {
                        name: "Pdf2Word"
                    }
                }, {
                    path: "",
                    name: "FunctionList",
                    component: () => a.e(487).then(a.bind(a, 45424))
                }, {
                    path: "pdf2word",
                    name: "Pdf2Word",
                    component: () => Promise.all([a.e(95), a.e(296), a.e(829), a.e(151)]).then(a.bind(a, 53651))
                }, {
                    path: "pdf2pic",
                    name: "Pdf2Pic",
                    component: () => a.e(393).then(a.bind(a, 37717))
                }, {
                    path: "pic2pdf",
                    name: "Pic2Pdf",
                    component: () => a.e(761).then(a.bind(a, 30877))
                }, {
                    path: "pdfConcat",
                    name: "PdfConcat",
                    component: () => a.e(271).then(a.bind(a, 14174))
                }, {
                    path: "pdfSplit",
                    name: "PdfSplit",
                    component: () => a.e(17).then(a.bind(a, 92369))
                }]
            }, {
                path: "/person",
                name: "person",
                component: () => a.e(688).then(a.bind(a, 87926)),
                beforeEnter(e, t, a) {
                    console.log(mt.A.state.login.isLogin);
                    const {isLogin: o} = mt.A.state.login;
                    o ? a() : a({
                        name: "Home"
                    })
                },
                children: [{
                    path: "docHistory",
                    name: "docHistory",
                    component: () => Promise.all([a.e(95), a.e(768), a.e(637)]).then(a.bind(a, 16103))
                }, {
                    path: "termBank",
                    name: "termBank",
                    component: () => Promise.all([a.e(95), a.e(296), a.e(768), a.e(471)]).then(a.bind(a, 63093))
                }]
            }, {
                path: "/login/:redirectUrl?",
                name: "NoLogin",
                component: () => a.e(333).then(a.bind(a, 61573))
            }, {
                path: "/AITranslateSmallProcess",
                name: "/AITranslateSmallProcess",
                component: () => Promise.all([a.e(853), a.e(233), a.e(829), a.e(873)]).then(a.bind(a, 90047))
            }]
              , gt = (0,
            W.aE)({
                history: (0,
                W.Bt)(),
                routes: ht
            });
            gt.beforeEach(( (e, t, a) => {
                document.body.scrollTop = 0,
                document.documentElement.scrollTop = 0,
                a()
            }
            ));
            var bt, ft, vt = gt;
            a(48559);
            a(86964).polyfill(),
            n().polyfill();
            null === (bt = window.__PRERENDER_INJECTED) || void 0 === bt || bt.isPrerender,
            window.location.host.indexOf("pre");
            const At = null !== (ft = window.__PRERENDER_INJECTED) && void 0 !== ft && ft.isPrerender ? (0,
            s.Ef)(j) : (0,
            s.m1)(j);
            At.config.globalProperties.$cookies = l(),
            At.config.globalProperties.$toast = d.A,
            window.$CPopup = u.A,
            At.use(mt.A).use(mt.A).use(vt).use(l()).use(T).use(c.A).use(_.A).use(S.A).use(I.A).use(k.A).use(i.Ay).directive("clickoutside", w.K).mount("#app"),
            i.Ay.setDefaults({
                inline: !1,
                button: !0,
                navbar: !1,
                title: !1,
                toolbar: !1,
                tooltip: !1,
                movable: !0,
                zoomable: !0,
                rotatable: !1,
                scalable: !1,
                transition: !0,
                fullscreen: !1,
                keyboard: !0,
                url: "data-src"
            })
        },
        38462: function(e, t, a) {
            let o = "https://shared.ydstatic.com/dict/translation-website/0.5.8/";
            window.__PRERENDER_INJECTED && window.__PRERENDER_INJECTED.isPrerender && (o = ""),
            a.p = o
        },
        18908: function(e, t, a) {
            "use strict";
            var o = a(41034)
              , n = a(25507)
              , i = a(97815)
              , r = a(27950)
              , l = a(14914)
              , s = a(95457);
            const c = "https://luna-ai.youdao.com"
              , {product: d, keyId: u, keyfrom: p, keyIdPre: m} = r.A
              , h = localStorage.getItem("yduuid")
              , g = async (e, t, a) => {
                const o = {
                    signSecretKey: n.A.state.text.secretAIKey,
                    keyId: u,
                    product: d,
                    keyfrom: p
                };
                return e.yduuid = localStorage.getItem("yduuid"),
                console.log("fetchSSEMethod params", e),
                (0,
                l.a)(`${c}/translate_llm/trans`, e, o, t, a)
            }
              , b = async (e, t, a) => {
                const o = {
                    signSecretKey: n.A.state.text.secretAIKey,
                    keyId: u,
                    product: d,
                    keyfrom: p
                };
                return e.yduuid = localStorage.getItem("yduuid"),
                (0,
                l.a)(`${c}/translate_llm/afterProcess`, e, o, t, a)
            }
              , f = e => (0,
            s.bE)(`${c}/translate_llm/v2/isLike`, i.A.genParamV3FormData((0,
            o.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , v = e => (0,
            s.bE)(`${c}/translate_llm/v3/isLike`, i.A.genParamV3FormData((0,
            o.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , A = e => (0,
            s.bE)(`${c}/translate_llm/v3/history/round/del`, i.A.genParamV3FormData((0,
            o.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , y = () => (0,
            s.Jt)(`${c}/translate_llm/functionList`, i.A.genParamV3({}, n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , T = (e, t) => {
                const a = "https://lunafeedback.youdao.com/feedback";
                return (0,
                s.T3)(`${a}/add?${e}`, t)
            }
              , _ = e => (0,
            s.bE)(`${c}/translate_llm/modelfeedback`, i.A.genParamV3FormData((0,
            o.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , S = e => (0,
            s.bE)(`${c}/translate_llm/modify`, i.A.genParamV3FormData((0,
            o.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , k = e => (0,
            s.bE)(`${c}/translate_llm/del`, i.A.genParamV3FormData((0,
            o.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , I = e => (0,
            s.Jt)(`${c}/translate_llm/IntentionRec`, i.A.genParamV3((0,
            o.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, h))
              , w = e => (0,
            s.Jt)(`${c}/translate_llm/example`, i.A.genParamV3((0,
            o.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, h))
              , E = () => (0,
            s.Jt)(`${c}/translate_llm/guideInfo`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken")
            }, n.A.state.text.secretAIKey, u, d, p, h))
              , C = async (e, t, a) => {
                const o = {
                    signSecretKey: n.A.state.text.secretAIKey,
                    keyId: u,
                    product: d,
                    keyfrom: p
                };
                return e.token = localStorage.getItem("ydtoken"),
                e.yduuid = localStorage.getItem("yduuid"),
                (0,
                l.a)(`${c}/translate_llm/v2/chat`, e, o, t, a)
            }
              , P = async (e, t, a) => {
                const o = {
                    signSecretKey: n.A.state.text.secretAIKey,
                    keyId: u,
                    product: d,
                    keyfrom: p
                };
                return e.token = localStorage.getItem("ydtoken"),
                e.yduuid = localStorage.getItem("yduuid"),
                (0,
                l.a)(`${c}/translate_llm/v3/chat`, e, o, t, a)
            }
              , L = () => (0,
            s.Jt)(`${c}/translate_llm/v2/history/list`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken")
            }, n.A.state.text.secretAIKey, u, d, p, h))
              , x = () => (0,
            s.Jt)(`${c}/translate_llm/v3/history/list`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken")
            }, n.A.state.text.secretAIKey, u, d, p, h))
              , D = e => (0,
            s.bE)(`${c}/translate_llm/v3/history/del`, i.A.genParamV3FormData({
                token: localStorage.getItem("ydtoken"),
                id: e
            }, n.A.state.text.secretAIKey, u, d, p, h))
              , R = e => (0,
            s.bE)(`${c}/translate_llm/v2/history/del`, i.A.genParamV3FormData({
                token: localStorage.getItem("ydtoken"),
                id: e
            }, n.A.state.text.secretAIKey, u, d, p, h))
              , H = () => (0,
            s.Jt)(`${c}/translate_llm/v2/init`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken")
            }, n.A.state.text.secretAIKey, u, d, p, h))
              , O = () => (0,
            s.Jt)(`${c}/translate_llm/v3/init`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken")
            }, n.A.state.text.secretAIKey, u, d, p, h))
              , U = e => (0,
            s.Jt)(`${c}/translate_llm/v2/suggest`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken"),
                functionEnglishName: e
            }, n.A.state.text.secretAIKey, u, d, p, h))
              , N = () => (0,
            s.Jt)(`${c}/translate_llm/userinfo`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken")
            }, n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , V = e => (0,
            s.Jt)(`${c}/translate_llm/v2/history/details`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken"),
                id: e
            }, n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , B = e => (0,
            s.Jt)(`${c}/translate_llm/v3/history/details`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken"),
                id: e
            }, n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , M = e => (0,
            s.bE)(`${c}/translate_llm/v3/mod`, i.A.genParamV3FormData((0,
            o.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, h))
              , K = async (e, t, a, r, l) => {
                const m = await (0,
                s.Vh)(`${c}/translate_llm/v3/upload`, i.A.genParamV3FormDataWithNormalParam(e, (0,
                o.A)({
                    token: localStorage.getItem("ydtoken")
                }, t), n.A.state.text.secretAIKey, u, d, p, h), l);
                a({
                    id: r,
                    res: m
                })
            }
              , F = e => (0,
            s.Jt)(`${c}/translate_llm/v3/refer/info`, i.A.genParamV3({
                token: localStorage.getItem("ydtoken"),
                fileKey: e
            }, n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid")))
              , $ = e => new Promise(( (t, a) => {
                (0,
                s.Jt)(`${c}/translate_llm/v3/uuid/generate`, i.A.genParamV3((0,
                o.A)({
                    token: localStorage.getItem("ydtoken")
                }, e), n.A.state.text.secretAIKey, u, d, p, localStorage.getItem("yduuid"))).then((e => {
                    t(e.data.id)
                }
                ))
            }
            ))
              , j = e => (0,
            s.bE)(`${c}/translate_llm/v3/translateDirection`, i.A.genParamV3FormData((0,
            o.A)({
                token: localStorage.getItem("ydtoken")
            }, e), n.A.state.text.secretAIKey, u, d, p, h));
            t.A = {
                fetchSSEMethod: g,
                getUserRemainTime: N,
                translatellmlike: v,
                getMenu: y,
                fetchAfterProcessSSE: b,
                feedback: T,
                compareModel: _,
                modifyAfterProcess: S,
                delAfterProcess: k,
                getIntentionRec: I,
                getLargeModelGuideExample: w,
                getLargeModelGuideInfo: E,
                getChat: P,
                getDialogList: x,
                delDialog: D,
                getInit: O,
                getProcess: U,
                recoverDialogs: B,
                modifyDialog: M,
                delHistoryRound: A,
                uploadFile: K,
                getGroupTaskId: $,
                getReferFileInfo: F,
                checkoutLanguage: j,
                getDialogListV2: L,
                getInitV2: H,
                getChatV2: C,
                recoverDialogsV2: V,
                delDialogV2: R,
                translatellmlikeV2: f
            }
        },
        76393: function(e, t, a) {
            "use strict";
            a.d(t, {
                A: function() {
                    return m
                }
            });
            var o = a(41034)
              , n = a(97815)
              , i = a(95457)
              , r = {
                product: "webfanyi",
                signSecretKey: "PDdE4DR40ACSVW0KBIc3P1jgD31tbihD",
                keyId: "dict-vip",
                keyfrom: "fanyi.web"
            };
            const l = "https://dict.youdao.com/vip"
              , {product: s, signSecretKey: c, keyId: d} = r
              , u = () => {
                const e = {
                    bannerType: "fanyiBottom"
                };
                return (0,
                i.Jt)(`${l}/privilege/show/V2`, (0,
                o.A)({}, n.A.genParamV3(e, c, d, s)))
            }
              , p = () => {
                const e = {
                    bannerType: "fanyiPagePopup"
                };
                return (0,
                i.Jt)(`${l}/privilege/show/V2`, (0,
                o.A)({}, n.A.genParamV3(e, c, d, s)))
            }
            ;
            var m = {
                getBannerInfos: u,
                getPopUpInfos: p
            }
        },
        95457: function(e, t, a) {
            "use strict";
            a.d(t, {
                H: function() {
                    return u
                },
                Jt: function() {
                    return l
                },
                T3: function() {
                    return d
                },
                Vh: function() {
                    return c
                },
                bE: function() {
                    return s
                }
            });
            var o = a(41034)
              , n = a(91250)
              , i = (a(6301),
            a(3745))
              , r = a(32743);
            function l(e, t, a={}) {
                return new Promise(( (i, r) => {
                    n.A.get(e, (0,
                    o.A)({
                        params: t
                    }, a)).then((e => {
                        i(e.data)
                    }
                    )).catch((e => {
                        r(e)
                    }
                    ))
                }
                ))
            }
            function s(e, t, a) {
                return new Promise((o => {
                    a ? n.A.post(e, t, {
                        timeout: a
                    }).then((e => {
                        o(e.data)
                    }
                    )).catch((e => {
                        o(e)
                    }
                    )) : n.A.post(e, t).then((e => {
                        o(e.data)
                    }
                    )).catch((e => {
                        o(e)
                    }
                    ))
                }
                ))
            }
            function c(e, t, a) {
                return new Promise((o => {
                    n.A.post(e, t, {
                        signal: a
                    }).then((e => {
                        o(e.data)
                    }
                    )).catch((e => {
                        o(e)
                    }
                    ))
                }
                ))
            }
            function d(e, t, a) {
                const o = t
                  , i = new FormData;
                return Object.keys(o).forEach((e => {
                    i.append(e, o[e])
                }
                )),
                new Promise(( (t, o) => {
                    const r = {};
                    a && (r.timeout = a),
                    n.A.post(e, i, r).then((e => {
                        t(e.data)
                    }
                    )).catch((e => {
                        o(e)
                    }
                    ))
                }
                ))
            }
            function u(e, t, a) {
                return new Promise(( (o, i) => {
                    n.A.post(e, t, a).then((e => {
                        o(e.data)
                    }
                    )).catch((e => {
                        i(e)
                    }
                    ))
                }
                ))
            }
            n.A.defaults.withCredentials = !0,
            n.A.defaults.timeout = 6e4,
            n.A.interceptors.response.use((e => {
                const {headers: t} = e
                  , a = Object.keys(e.headers).find((e => "exceedmaxdevicecnt" === e.toLowerCase()));
                return t && "true" === t[a] && (0,
                r.A)({
                    confirmButtonText: "重新登录",
                    text: "您同时登录的设备数过多，已被挤下线，登录新账号，可继续使用~",
                    confirm: () => {
                        const e = encodeURIComponent(window.location.href);
                        window.location.href = `https://c.youdao.com/common-login-web/index.html?redirect_url=${e}&t=${(new Date).getTime()}`
                    }
                    ,
                    cancel: () => {
                        const e = encodeURIComponent(window.location.href);
                        window.location.href = `https://dict.youdao.com/login/acc/se/reset?product=DICT&samesite=true&ru=${e}&t=${(new Date).getTime()}`
                    }
                }),
                e
            }
            ), (e => (console.error("ryn检查网络error", e),
            e.code && "ERR_CANCELED" === e.code ? Promise.reject(e) : (console.error("ryn检查网络error2", e.msg),
            e.msg ? ((0,
            i.A)(e.msg),
            Promise.reject(e)) : ((0,
            i.A)("网络异常，请检查网络"),
            Promise.reject(e))))))
        },
        53007: function(e, t, a) {
            "use strict";
            a(33110);
            var o = a(95457);
            const n = "https://dict.youdao.com"
              , i = "https://dict.youdao.com/vip"
              , r = "https://dict.youdao.com/login/acc"
              , l = ["option_avatar", "nickname"]
              , s = "https://backendmarket.youdao.com"
              , c = "https://education-certification.youdao.com/education/pub/get"
              , d = e => (0,
            o.bE)(`${i}/user/status`, e)
              , u = () => (0,
            o.Jt)(`${n}/login/acc/query/accountinfo`)
              , p = e => (0,
            o.Jt)(`${n}/profile/batch/get?content=${encodeURIComponent(JSON.stringify(l))}`, e)
              , m = e => (0,
            o.bE)(`${s}/collect/docreport`, e)
              , h = e => (0,
            o.Jt)(`${r}/device/check`, e)
              , g = ({keyid: e, mysticTime: t, product: a, pointParam: n, sign: i}) => (0,
            o.Jt)(`${c}?keyid=${e}&mysticTime=${t}&product=${a}&pointParam=${n}&sign=${i}`, {});
            t.A = {
                getAccountInfos: u,
                getBatchUrl: p,
                getVipStatus: d,
                baiduCallback: m,
                checkLogin: h,
                getStudentStatus: g
            }
        },
        34917: function(e, t, a) {
            "use strict";
            var o = a(41034)
              , n = a(95457)
              , i = a(91565)
              , r = a(91250)
              , l = (a(97815),
            a(25507),
            a(48287)["Buffer"]);
            const {CancelToken: s} = r.A;
            let c;
            const d = "fanyideskweb"
              , u = "webfanyi"
              , p = "client,mysticTime,product"
              , m = "1.0.0"
              , h = "web"
              , g = "fanyi.web"
              , b = 1
              , f = 1
              , v = 1
              , A = "wifi"
              , y = 0;
            function T(e) {
                return i.createHash("md5").update(e).digest()
            }
            function _(e) {
                return i.createHash("md5").update(e.toString()).digest("hex")
            }
            function S(e, t) {
                return _(`client=${d}&mysticTime=${e}&product=${u}&key=${t}`)
            }
            function k(e, t) {
                const a = (new Date).getTime();
                return {
                    sign: S(a, e),
                    client: d,
                    product: u,
                    appVersion: m,
                    vendor: h,
                    pointParam: p,
                    mysticTime: a,
                    keyfrom: g,
                    mid: b,
                    screen: f,
                    model: v,
                    network: A,
                    abtest: y,
                    yduuid: t || "abcdefg"
                }
            }
            const I = "https://luna-ai.youdao.com"
              , w = (e, t) => (0,
            n.Jt)("https://dict.youdao.com/webtranslate/key", (0,
            o.A)((0,
            o.A)({}, e), k(t)))
              , E = (e, t, a) => (0,
            n.Jt)(`${I}/translate_llm/secret`, (0,
            o.A)((0,
            o.A)({}, e), k(t, a)))
              , C = (e, t) => (0,
            n.H)("https://dict.youdao.com/webtranslate", (0,
            o.A)((0,
            o.A)({}, e), k(t)), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
              , P = () => {
                c && c()
            }
              , L = e => (0,
            n.T3)("https://dict.youdao.com/keyword/key", e)
              , x = (e, t) => (0,
            n.Jt)(" https://dict-subsidiary.youdao.com/aigc/entrance", (0,
            o.A)((0,
            o.A)({}, e), k(t)))
              , D = (e, t) => (0,
            n.Jt)(" https://dict-subsidiary.youdao.com/aigc/style", (0,
            o.A)((0,
            o.A)({}, e), k(t)))
              , R = (e, t) => (0,
            n.Jt)(" https://dict-subsidiary.youdao.com/aigc/tran", (0,
            o.A)((0,
            o.A)({}, e), k(t)), {
                cancelToken: new s((e => {
                    c = e
                }
                ))
            })
              , H = e => (0,
            n.T3)("https://fanyi.youdao.com/feedback", e)
              , O = (e, t, a) => {
                if (!e)
                    return null;
                const o = l.alloc(16, T(t))
                  , n = l.alloc(16, T(a))
                  , r = i.createDecipheriv("aes-128-cbc", o, n);
                let s = r.update(e, "base64", "utf-8");
                return s += r.final("utf-8"),
                s
            }
              , U = "https://lunafeedback.youdao.com/feedback"
              , N = e => {
                const t = {
                    comments: e
                };
                return (0,
                n.T3)(`${U}/add?product=deskdict_contentCorrection&client=fanyiweb&appVersion=1.0.0`, t)
            }
            ;
            t.A = {
                getTextTranslateSecretKey: w,
                getTextTranslateResult: C,
                getTextTranslateKeyword: L,
                decodeData: O,
                feedback: N,
                getAigcEntrance: x,
                getAigcStyle: D,
                getAigcTran: R,
                fanyiFeedback: H,
                getAITranslateSecretKey: E,
                cancelLastGpt: P
            }
        },
        25507: function(e, t, a) {
            "use strict";
            a(44114),
            a(72712),
            a(27495),
            a(25440),
            a(62953);
            var o = a(66278);
            const n = []
              , i = a(84870)
              , r = i.keys().reduce(( (e, t) => {
                const a = t.replace(/^\.\/(.*)\.\w+$/, "$1");
                n.push(a);
                const o = i(t);
                return e[a] = o.default,
                e
            }
            ), {});
            t.A = (0,
            o.y$)({
                modules: r
            })
        },
        57185: function(e, t, a) {
            "use strict";
            a.r(t);
            a(44114),
            a(33110);
            var o = a(91250)
              , n = a(97504)
              , i = a(62512);
            const r = "DOMAIN"
              , l = "DOMAIN_MAP"
              , s = "TEXTDOMAIN_MAP"
              , c = {
                domainMap: n.A,
                allowDomainLanguageCombineList: ["en2zh-CHS", "zh-CHS2en"],
                isAllowAigc: !1,
                textTransDomainMap: n.A,
                aigcDomainMap: []
            }
              , d = {
                [l](e, t) {
                    e.domainMap = t
                },
                [s](e, t) {
                    e.textTransDomainMap = JSON.parse(JSON.stringify(t))
                },
                SET_ISALLOWAIGC(e, t) {
                    e.isAllowAigc = t
                },
                SET_AIGCDOMAINMAP(e, t) {
                    e.aigcDomainMap = t
                }
            }
              , u = {
                initDictDomainFromLS({commit: e, state: t}, a) {
                    var o = i.A.get(`${a}`);
                    e(r, null !== o ? o : "0")
                },
                async fetchDomainData({commit: e, state: t}, a) {
                    var n = await o.A.get("https://doctrans-service.youdao.com/common/enums/list?key=domain&_=" + +new Date);
                    n.data.data && (e(l, n.data.data),
                    e(s, n.data.data))
                },
                updateDomainMap({commit: e, state: t}) {
                    if (0 !== t.aigcDomainMap.length) {
                        const e = t.textTransDomainMap.length;
                        t.aigcDomainMap.forEach(( (a, o) => {
                            t.textTransDomainMap.push({
                                str: String(e + o),
                                msg: a,
                                from: "aigc"
                            })
                        }
                        ))
                    }
                }
            }
              , p = {
                getDomainLabelByValue: e => t => {
                    let a = "";
                    for (var o = 0; o < e.domainMap.length; o += 1)
                        if (t === e.domainMap[o].str) {
                            a = e.domainMap[o].msg;
                            break
                        }
                    return a
                }
                ,
                getTextDomainLabelByValue: e => t => {
                    let a = "";
                    for (var o = 0; o < e.textTransDomainMap.length; o += 1)
                        if (t === e.textTransDomainMap[o].str) {
                            a = e.textTransDomainMap[o].msg;
                            break
                        }
                    return a
                }
            };
            t["default"] = {
                state: c,
                mutations: d,
                actions: u,
                getters: p
            }
        },
        36032: function(e, t, a) {
            "use strict";
            a.r(t),
            a.d(t, {
                default: function() {
                    return d
                }
            });
            var o = a(95457);
            const n = "UPDATE_LANGUAGE_MAP";
            var i = {
                UPDATE_LANGUAGE_MAP: n
            };
            const r = {
                languageMap: {},
                rtlLanguageList: ["ar"]
            }
              , l = {
                [i.UPDATE_LANGUAGE_MAP](e, t) {
                    e.languageMap = t
                }
            }
              , s = {
                async fetchLanguageData({commit: e, state: t}, a) {
                    const n = await (0,
                    o.Jt)("https://api-overmind.youdao.com/openapi/get/luna/dict/luna-front/prod/langType");
                    n.data.value && e(i.UPDATE_LANGUAGE_MAP, n.data.value)
                }
            }
              , c = {
                termSpecifyData(e) {
                    return e.languageMap.term ? e.languageMap.term.specify : []
                },
                isTermLanguageSupport(e, t, a) {
                    const o = `${a.transInfo.lanFrom}2${a.transInfo.lanTo}`;
                    return !!t.termSpecifyData.find((e => e.code === o))
                }
            };
            var d = {
                state: r,
                mutations: l,
                actions: s,
                getters: c
            }
        },
        37180: function(e, t, a) {
            "use strict";
            a.r(t);
            const o = {
                isLogin: !0,
                isSvip: !1,
                isVip: !1,
                vipStatusLoaded: !1,
                optionAvatar: "",
                nickname: "",
                isStudent: !1
            }
              , n = {
                isLogin: e => e.isLogin,
                optionAvatar: e => e.optionAvatar,
                nickname: e => e.nickname,
                isSvip: e => e.isSvip,
                isVip: e => e.isVip,
                vipStatusLoaded: e => e.vipStatusLoaded,
                isStudent: e => e.isStudent
            }
              , i = {
                setOptionAvatar: ({commit: e}, t) => {
                    e("SET_OPTIONAVATAR", t)
                }
                ,
                setNickName: ({commit: e}, t) => {
                    e("SET_NICKNAME", t)
                }
                ,
                setLogin: ({commit: e}, t) => {
                    e("SET_LOGIN", t)
                }
                ,
                setSvip: ({commit: e}, t) => {
                    e("SET_SVIP", t)
                }
                ,
                setVipStatusLoaded: ({commit: e}) => {
                    e("SET_VIP_STATUS_LOADED", !0)
                }
                ,
                setVip: ({commit: e}, t) => {
                    e("SET_VIP", t)
                }
                ,
                setIsStudent: ({commit: e}, t) => {
                    e("SET_IS_STUDENT", t)
                }
            }
              , r = {
                SET_OPTIONAVATAR(e, t) {
                    e.optionAvatar = t
                },
                SET_NICKNAME(e, t) {
                    e.nickname = t
                },
                SET_LOGIN(e, t) {
                    e.isLogin = t
                },
                SET_SVIP(e, t) {
                    e.isSvip = t
                },
                SET_VIP(e, t) {
                    e.isVip = t
                },
                SET_VIP_STATUS_LOADED(e, t) {
                    e.vipStatusLoaded = t
                },
                SET_IS_STUDENT(e, t) {
                    e.isStudent = t
                }
            };
            t["default"] = {
                namespaced: !0,
                state: o,
                getters: n,
                mutations: r,
                actions: i
            }
        },
        87087: function(e, t, a) {
            "use strict";
            a.r(t),
            a.d(t, {
                default: function() {
                    return d
                }
            });
            a(44114);
            var o = a(34917)
              , n = a(62512);
            function i(e) {
                window.YoudaoSelector && (window.YoudaoSelector.Config.select = e ? "on" : "off")
            }
            const r = {
                secretKey: "",
                secretAIKey: "",
                dictResult: {},
                decodeKey: "ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl",
                decodeIv: "ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4",
                allowStroke: !1,
                showPjm: !1,
                showRomanPronunciation: !1,
                showWordsNumber: !0,
                playbackRate: "1",
                voiceType: "1",
                originResultId: "",
                originResultText: "",
                sourceText: "",
                selectedSourceText: "",
                historyList: [],
                isAfterProcessLoadng: !1,
                keyfrom: "",
                producting: !1,
                guideFreeTimes: 0,
                isInsertFromPaste: !1,
                firstTwoOriginText: "",
                isENandZH: !1,
                homeOriginText: "",
                dialogs: [],
                dialogInfo: {},
                suggPrompts: "",
                guideFromOther: {},
                remainTime: 0
            }
              , l = {
                secretKey: e => e.secretKey,
                secretAIKey: e => e.secretAIKey,
                dictResult: e => e.dictResult,
                suggPrompts: e => e.suggPrompts,
                originResultId: e => e.originResultId,
                originResultText: e => e.originResultText,
                sourceText: e => e.sourceText,
                guideFreeTimes: e => e.guideFreeTimes,
                historyList: e => e.historyList,
                isAfterProcessLoadng: e => e.isAfterProcessLoadng,
                selectedSourceText: e => e.selectedSourceText,
                producting: e => e.producting,
                isInsertFromPaste: e => e.isInsertFromPaste,
                firstTwoOriginText: e => e.firstTwoOriginText,
                homeOriginText: e => e.homeOriginText,
                isENandZH: e => e.isENandZH
            }
              , s = {
                fetchAITranslateSecretKey: async ({commit: e}, t) => {
                    const a = "ai-translate-llm-pre"
                      , n = "EZAmCfVOH2CrBGMtPrtIPUzyv3bheLdk"
                      , i = localStorage.getItem("yduuid")
                      , r = localStorage.getItem("ydtoken") || void 0;
                    return new Promise((t => {
                        o.A.getAITranslateSecretKey({
                            keyid: a,
                            token: r
                        }, n, i).then((a => {
                            0 === a.code && (e("UPDATE_SECRET_AI_KEY", a.data.secretKey),
                            a.data.token && localStorage.setItem("ydtoken", a.data.token),
                            t(a.data.secretKey))
                        }
                        )).catch((e => {}
                        ))
                    }
                    ))
                }
                ,
                fetchTextTranslateSecretKey: async ({commit: e}, t) => {
                    const a = "webfanyi-key-getter"
                      , n = "asdjnjfenknafdfsdfsd";
                    return new Promise((t => {
                        o.A.getTextTranslateSecretKey({
                            keyid: a
                        }, n).then((a => {
                            0 === a.code && a.data.secretKey && (e("UPDATE_SECRET_KEY", a.data.secretKey),
                            e("UPDATE_DECODE_KEY", a.data.aesKey),
                            e("UPDATE_DECODE_IV", a.data.aesIv),
                            t(a.data.secretKey))
                        }
                        )).catch((e => {}
                        ))
                    }
                    ))
                }
                ,
                setDictResult: ({commit: e}, t) => {
                    e("SET_DICTRESULT", t)
                }
                ,
                initTextTranslateSettingStore: ({commit: e}, t) => {
                    const a = n.A.get("allowStroke")
                      , o = n.A.get("showPjm")
                      , i = n.A.get("showRomanPronunciation")
                      , r = n.A.get("showWordsNumber")
                      , l = n.A.get("playbackRate")
                      , s = n.A.get("voiceType");
                    e("SET_ALLOW_STROKE", null !== a && a),
                    e("SET_SHOW_PJM", null !== o && o),
                    e("SET_SHOW_ROMAN_PRONUNCICATION", null !== i && i),
                    e("SET_SHOW_WORDS_NUMBER", null === r || r),
                    e("SET_PLAYBACKRATE", null === l ? "1" : l),
                    e("SET_VOICETYPE", null === s ? "1" : s)
                }
                ,
                setOriginResultId: ({commit: e}, t) => {
                    e("UPDATE_ORIGIN_ID", t)
                }
                ,
                setSource: ({commit: e}, t) => {
                    e("UPDATE_SOURCE", t)
                }
                ,
                setOriginResultText: ({commit: e}, t) => {
                    e("UPDATE_ORIGIN_TEXT", t)
                }
                ,
                addHistoryItem: ({commit: e}, t) => {
                    e("ADD_HISTORY_ITEM", t)
                }
                ,
                delHistoryItem: ({commit: e}, t) => {
                    e("DEL_HISTORY_ITEM", t)
                }
                ,
                removeHistoryList: ({commit: e}) => {
                    e("REMOVE_HISTORY_LIST")
                }
                ,
                updateHistoryList: ({commit: e}, t) => {
                    e("UPDATA_HISTORY_LIST", t)
                }
                ,
                updateDialogs: ({commit: e}, t) => {
                    e("UPDATA_DIALOGS", t)
                }
            }
              , c = {
                ISWNANDZH(e, t) {
                    e.isENandZH = t
                },
                HOMEORIGINTEXT(e, t) {
                    e.homeOriginText = t
                },
                FIRSTTWOORIGINTEXT(e, t) {
                    e.firstTwoOriginText = t
                },
                ISPASTE_ORIGIN_TEXT(e, t) {
                    e.isInsertFromPaste = t
                },
                UPDATE_SECRET_KEY(e, t) {
                    e.secretKey = t
                },
                UPDATE_DECODE_KEY(e, t) {
                    e.decodeKey = t
                },
                UPDATE_DECODE_IV(e, t) {
                    e.decodeIv = t
                },
                UPDATE_SECRET_AI_KEY(e, t) {
                    e.secretAIKey = t
                },
                SET_DICTRESULT(e, t) {
                    e.dictResult = t
                },
                SET_ALLOW_STROKE(e, t) {
                    e.allowStroke = t,
                    n.A.set("allowStroke", t),
                    i(t)
                },
                SET_SHOW_PJM(e, t) {
                    e.showPjm = t,
                    n.A.set("showPjm", t)
                },
                SET_SHOW_ROMAN_PRONUNCICATION(e, t) {
                    e.showRomanPronunciation = t,
                    n.A.set("showRomanPronunciation", t)
                },
                SET_SHOW_WORDS_NUMBER(e, t) {
                    e.showWordsNumber = t,
                    n.A.set("showWordsNumber", t)
                },
                SET_PLAYBACKRATE(e, t) {
                    e.playbackRate = t,
                    n.A.set("playbackRate", t)
                },
                SET_VOICETYPE(e, t) {
                    e.voiceType = t,
                    n.A.set("voiceType", t)
                },
                UPDATE_SUGG_PROMPTS(e, t) {
                    e.suggPrompts = t,
                    n.A.set("suggPrompts", t)
                },
                UPDATE_ORIGIN_ID(e, t) {
                    e.originResultId = t
                },
                UPDATE_SOURCE(e, t) {
                    e.sourceText = t
                },
                UPDATE_ORIGIN_TEXT(e, t) {
                    e.originResultText = t
                },
                UPDATE_GUIDEFREETIMES(e, t) {
                    e.guideFreeTimes = t
                },
                ADD_HISTORY_ITEM(e, t) {
                    e.historyList.push(t)
                },
                ADD_HISTORY(e, t) {
                    e.historyList = t
                },
                DEL_HISTORY_ITEM(e, t) {
                    const a = e.historyList.findIndex((e => e.id == t));
                    -1 !== a && e.historyList.splice(a, 1)
                },
                REMOVE_HISTORY_LIST(e) {
                    e.historyList = []
                },
                UPDATA_HISTORY_LIST(e, t) {
                    const a = e.historyList.findIndex((e => e.id === t.id));
                    -1 !== a && e.historyList.splice(a, 1, t)
                },
                UPDATE_ISAFTERPROCESS_LOADING(e, t) {
                    e.isAfterProcessLoadng = t
                },
                UPDATA_SELECTED_SOURCE_TEXT(e, t) {
                    e.selectedSourceText = t
                },
                UPDATE_KEYFROM(e, t) {
                    e.keyfrom = t
                },
                UPDATE_PRODUCTING(e, t) {
                    e.producting = t
                },
                UPDATA_DIALOGS(e, t) {
                    const a = e.dialogs.findIndex((e => e.roundId === t.roundId));
                    -1 !== a && e.dialogs.splice(a, 1, t)
                },
                ADD_DIALOGS(e, t) {
                    e.dialogs.push(t)
                },
                RESET_DIALOGS(e) {
                    e.dialogs = []
                },
                RECOVER_DIALOGS(e, t) {
                    e.dialogs = t
                },
                UPDATA_DIALOGINFO(e, t) {
                    0 !== Object.keys(t).length ? (t.id && (e.dialogInfo.id = t.id),
                    t.functionEnglishName && (e.dialogInfo.functionEnglishName = t.functionEnglishName)) : e.dialogInfo = t
                },
                UPDATA_GUIDEFROMOTHER(e, t) {
                    e.guideFromOther = t
                },
                SET_REMAIN_TIME(e, t) {
                    e.remainTime = t
                }
            };
            var d = {
                state: r,
                getters: l,
                mutations: c,
                actions: s
            }
        },
        42348: function(e, t, a) {
            "use strict";
            a.d(t, {
                i: function() {
                    return o
                },
                r: function() {
                    return i
                }
            });
            const o = ({draw: e, timing: t, duration: a}) => {
                let o = performance.now();
                requestAnimationFrame((function n(i) {
                    let r = (i - o) / a;
                    r > 1 && (r = 1);
                    let l = t(r);
                    e(l),
                    r < 1 && requestAnimationFrame(n)
                }
                ))
            }
              , n = (e, t=2) => Math.pow(e, t)
              , i = e => 1 - n(1 - e, 6)
        },
        37282: function(e, t, a) {
            "use strict";
            var o = a(27380);
            const n = {}
              , i = (0,
            o.A)();
            n.$on = i.on,
            n.$off = i.off,
            n.$emit = i.emit,
            t.A = n
        },
        45358: function(e, t, a) {
            "use strict";
            a.d(t, {
                n: function() {
                    return l
                }
            });
            a(84864),
            a(57465),
            a(27495),
            a(25440);
            var o = a(53007);
            const n = () => {
                o.A.baiduCallback({
                    loginUrl: window.location.href,
                    type: 49
                })
            }
              , i = (e, t) => {
                const a = new Date
                  , o = new Date(e)
                  , n = new Date(t);
                return a >= o && a <= n
            }
              , r = (e, t, a) => {
                let o;
                return function() {
                    let n = this
                      , i = arguments;
                    if (o && clearTimeout(o),
                    a) {
                        let a = !o;
                        o = setTimeout((function() {
                            o = null
                        }
                        ), t),
                        a && e.apply(n, i)
                    } else
                        o = setTimeout((function() {
                            e.apply(n, i)
                        }
                        ), t)
                }
            }
              , l = (e, t) => {
                let a, o = 0;
                return function() {
                    const n = this
                      , i = arguments
                      , r = +Date.now();
                    r - o >= t ? (clearTimeout(a),
                    e.apply(n, i),
                    o = r) : (clearTimeout(a),
                    a = setTimeout(( () => {
                        e.apply(n, i)
                    }
                    ), t))
                }
            }
              , s = (e, t) => {
                const a = {
                    "M+": t.getMonth() + 1,
                    "d+": t.getDate(),
                    "H+": t.getHours(),
                    "h+": t.getHours(),
                    "m+": t.getMinutes(),
                    "s+": t.getSeconds(),
                    "q+": Math.floor((t.getMonth() + 3) / 3),
                    S: t.getMilliseconds()
                };
                /(y+)/.test(e) && (e = e.replace(RegExp.$1, `${t.getFullYear()}`.substr(4 - RegExp.$1.length)));
                for (const o in a)
                    new RegExp(`(${o})`).test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? a[o] : `00${a[o]}`.substr(`${a[o]}`.length)));
                return e
            }
              , c = () => /macintosh|mac os x/i.test(navigator.userAgent)
              , d = (e, t="") => {
                const a = document.createElement("a");
                a.download = t,
                a.style.display = "none",
                a.href = e,
                document.body.appendChild(a),
                a.click(),
                document.body.removeChild(a)
            }
              , u = e => {
                var t = e.split("?")[1]
                  , a = {};
                if (!t)
                    return a;
                t = t.split("&");
                for (var o = 0, n = t.length; o < n; o++) {
                    var i = t[o].split("=");
                    a[i[0]] = decodeURIComponent(i[1])
                }
                return a
            }
              , p = e => {
                if (navigator.clipboard)
                    navigator.clipboard.writeText(e);
                else {
                    var t = document.createElement("textarea");
                    document.body.appendChild(t),
                    t.style.position = "fixed",
                    t.style.clip = "rect(0 0 0 0)",
                    t.style.top = "10px",
                    t.value = e,
                    t.select(),
                    document.execCommand("copy", !0),
                    document.body.removeChild(t)
                }
            }
              , m = function(e, t) {
                if (!Object.keys(t).length)
                    return e;
                e += "?";
                for (let a in t)
                    e += `${encodeURIComponent(a)}=${encodeURIComponent(t[a])}&`;
                return e.substring(0, e.length - 1)
            }
              , h = e => {
                const t = new RegExp(`(\\?|#|&)${e}=([^&#]*)(&|#|$)`)
                  , a = window.location.href.match(t);
                return decodeURIComponent(a ? a[2] : "")
            }
            ;
            t.A = {
                isDuringDate: i,
                debounce: r,
                throttle: l,
                dateFormat: s,
                isMac: c,
                downloadFile: d,
                getUrlParams: u,
                getParameter: h,
                baiduCallback: n,
                genUrl: m,
                copy: p
            }
        },
        62512: function(e, t, a) {
            "use strict";
            a(33110);
            let o;
            const n = "fanyiweb"
              , i = window.localStorage;
            function r(e) {
                return `${n}-${e}`
            }
            o = "undefined" !== typeof localStorage && null !== localStorage && {
                set: function(e, t) {
                    var a = JSON.stringify(t);
                    e = r(e);
                    try {
                        return i.setItem(e, a)
                    } catch (o) {
                        "QuotaExceededError" === o.name && (i.clear(),
                        i.setItem(e, a))
                    }
                },
                get: function(e) {
                    var t = JSON.parse(i.getItem(r(e)));
                    return t
                },
                remove: function(e) {
                    i.removeItem(r(e))
                }
            },
            t.A = o
        },
        96091: function(e, t, a) {
            "use strict";
            var o = a(8661);
            function n() {
                return new Promise((e => {
                    o.Ay.load().then((t => {
                        t.get().then((t => {
                            localStorage.setItem("yduuid", t.visitorId),
                            e(t.visitorId)
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            t.A = n
        },
        97815: function(e, t, a) {
            "use strict";
            var o = a(41034)
              , n = (a(44114),
            a(26910),
            a(62953),
            a(21396))
              , i = a.n(n);
            const r = "key"
              , l = (e={}, t) => {
                const a = (0,
                o.A)({}, e);
                Object.keys(a).forEach((e => {
                    "" === a[e] && delete a[e]
                }
                ));
                const n = Object.keys(a).sort().filter((e => !(void 0 === a[e])));
                n.push(r),
                a[r] = t;
                const l = `${n.map((e => `${e}=${a[e]}`)).join("&")}`;
                return [i().MD5(l).toString(i().enc.Hex), n.join(",")]
            }
              , s = (e, t, a, n, i, r, s, c) => {
                const d = (0,
                o.A)({
                    product: n,
                    appVersion: s || 1,
                    client: c || "web",
                    mid: 1,
                    vendor: "web",
                    screen: 1,
                    model: 1,
                    imei: 1,
                    network: "wifi",
                    keyfrom: i || "fanyi.web",
                    keyid: a,
                    mysticTime: Date.now(),
                    yduuid: r || "abcdefg",
                    abtest: 0
                }, e)
                  , [u,p] = l(d, t);
                return Object.assign(d, {
                    sign: u,
                    pointParam: p
                }),
                d
            }
              , c = (e, t, a, n, i, r, s, c) => {
                const d = (0,
                o.A)({
                    product: n,
                    appVersion: s || 1,
                    client: c || "web",
                    mid: 1,
                    vendor: "web",
                    screen: 1,
                    model: 1,
                    imei: 1,
                    network: "wifi",
                    keyfrom: i || "fanyi.web",
                    keyid: a,
                    mysticTime: Date.now(),
                    yduuid: r || "abcdefg",
                    abtest: 0
                }, e)
                  , [u,p] = l(d, t);
                Object.assign(d, {
                    sign: u,
                    pointParam: p
                });
                const m = new FormData
                  , h = Object.keys(d);
                return h.forEach((e => {
                    m.append(e, d[e])
                }
                )),
                console.log("requestData", m),
                m
            }
              , d = (e, t, a, n, i, r, s, c, d) => {
                const u = (0,
                o.A)({
                    product: i,
                    appVersion: c || 1,
                    client: d || "web",
                    mid: 1,
                    vendor: "web",
                    screen: 1,
                    model: 1,
                    imei: 1,
                    network: "wifi",
                    keyfrom: r || "fanyi.web",
                    keyid: n,
                    mysticTime: Date.now(),
                    yduuid: s || "abcdefg",
                    abtest: 0
                }, t)
                  , [p,m] = l(u, a);
                Object.assign(u, (0,
                o.A)({
                    sign: p,
                    pointParam: m
                }, e));
                const h = new FormData
                  , g = Object.keys(u);
                return g.forEach((e => {
                    h.append(e, u[e])
                }
                )),
                console.log("requestData", h),
                h
            }
            ;
            t.A = {
                genSign: l,
                genParamV3: s,
                genParamV3FormData: c,
                genParamV3FormDataWithNormalParam: d
            }
        },
        39233: function(e, t, a) {
            "use strict";
            a.d(t, {
                A: function() {
                    return m
                }
            });
            var o = a(6301)
              , n = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABGCAYAAAB8MJLDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQmSURBVHgB7ZrPSxtBFMdffxwEe1C8BEW7hyKCBT0qHgw00IJgK/ijh2IFqznooR78H4p40GPFg96MCjaC0IKFVAj2GKGCoodFjFg8qKiQQ8HO13VkG8lmZvaHJp0PPLKzmdW87743+2Z2iDQajUaj0Wg0Go3mP+QBBU+ZzeycMMswO6QACUKAEmaNzOqYha7bTnARUsxMsoTxDT8FMJiFrz/dYDL7yWyLfMAPAQzyxvFsEAlz5HGKeCkAQjvMrIn8BdGQICtVXOOVABjQ+uj2wOYXiIYZ8mB8eETuwcD2gdkTCg5EGwZVk9k5ucCtAHC+j/KP7H6A//mc2S65EMGNAAj3dxTsnc/mMVki/CLFMUFVAKiPsA8q552ACEgH1A1/SBJVASLMntH9ATcEQuySJA9JHuS93486FfCbDJJERYC3dH8JkySyAiDX7kPe58IgySiQFUA69Gtqakqi0ejT5uZmYeH4NaRGWKazTCUIBz6SJKlUqqehoaHu+Pj4pK2tbXZ9fd2xeoNQKysr78vLy8t2dnbM2traWZLnEwk+FmUiwCAF2N3EoElwCI45RYLdebRLS0tVC6xG0Y4yAgj/UTv9/f0xfsxFQIhn98M5u/NgeHg4TmrUiXaUESBECiwtLR2Oj4/fOAIHWRr8IwKOcc7uPK7BtaSG8G8VFUBkJScno6OjKbsIlZWVodXV1R7exjHO8fb09PQ3XEPq4LcKDbqig6BB1qTHFfPz8+Gurq5W3k4mk1dOtrS03KTX4uJigvX5Qe6ZIWu26IioAPiBb8gDskWw46Hz4AtZ8wNHVCpBV3R3dycWFhZuOemx88IELgC4vLwUOhcEgQsQi8XCLApupQC7+2GWHq0UMKLTYYzQws/WXExNTTX19va+4O2NjY2ts7Oz84qKiqsRu76+3qiurs4sLy+nyT1YPM27ZhhYBIyNjTUODAy85O2Dg4PD9vb2eCQSieGYn2eF0yv0Jfd4Xgorg4kNe66/5m3MC1jZO7u3t5eB4dguAvoODg4apI7wKzbfBejo6AhNTEzcrCHwSREc5+dw3NnZGcN3/Nzk5GQPriU1hCtI3+uAdDod5VVevhlh9mQIUVFVVfWZ5BGqAYDvEXBxcXF1p0Wmw/gOfXgkHB0dqb74MEU7+v4UiMfj28yR9NDQ0PfNzc286/f7+/uZtbW1bSbC75GRkeTp6ansSq9J1hNAiMBL4QDAC1ThN8l3Ugn6CFJG6jV6sQkwJ9m/qARA3ksvoBSLAAj9BClQDALwvQJKL0cLXQA4jbxX3ihRyALA+RlyuWfoMRUmnm2RKUQBPN0kJSqASXePSZbjJnmI6FwAamOGpjo9dYNJ1uwuQT7sGpVJga/Xn16s1jjBFzNQ0qbIo1DPhco+QUSCQd5zYjONRqPRaDQajUbjL38BFOZkzE3BMTIAAAAASUVORK5CYII=";
            const i = ["src"]
              , r = {
                key: 1,
                class: "banner-default"
            };
            function l(e, t, a, l, s, c) {
                return l.showBanner ? ((0,
                o.uX)(),
                (0,
                o.CE)("div", {
                    key: 0,
                    class: "banner",
                    onClick: l.goBanner
                }, [(0,
                o.Lk)("img", {
                    class: "banner-img",
                    src: l.picture
                }, null, 8, i), (0,
                o.Lk)("img", {
                    class: "close",
                    src: n,
                    onClick: (0,
                    o.D$)(l.closeBanner, ["stop"])
                })])) : ((0,
                o.uX)(),
                (0,
                o.CE)("div", r))
            }
            var s = a(76393)
              , c = a(45358)
              , d = {
                __name: "Banner",
                setup(e, {expose: t}) {
                    t();
                    const a = (0,
                    o.KR)("")
                      , n = (0,
                    o.KR)("")
                      , i = (0,
                    o.KR)(!0)
                      , r = (0,
                    o.nI)()
                      , l = r.appContext.config.globalProperties;
                    (0,
                    o.sV)(( () => {
                        s.A.getBannerInfos().then((e => {
                            const t = e.data.bannerList[0];
                            a.value = t.url,
                            n.value = t.picture,
                            c.A.isDuringDate(t.effectiveTime, t.expirationTime) && null === l.$cookies.get("bannercookie") ? i.value = !0 : i.value = !1
                        }
                        ))
                    }
                    ));
                    const d = () => {
                        l.$cookies.set("bannercookie", !0, 86400),
                        i.value = !1
                    }
                      , u = () => {
                        window.open(a.value)
                    }
                      , p = {
                        url: a,
                        picture: n,
                        showBanner: i,
                        internalInstance: r,
                        internalData: l,
                        closeBanner: d,
                        goBanner: u,
                        get service() {
                            return s.A
                        },
                        get util() {
                            return c.A
                        }
                    };
                    return Object.defineProperty(p, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    p
                }
            }
              , u = a(66262);
            const p = (0,
            u.A)(d, [["render", l], ["__scopeId", "data-v-6ccea22e"]]);
            var m = p
        },
        52670: function(e, t, a) {
            "use strict";
            a.d(t, {
                A: function() {
                    return c
                }
            });
            a(62953);
            var o = a(6301);
            const n = {
                class: "inner-content"
            };
            function i(e, t, a, i, r, l) {
                const s = (0,
                o.gN)("fixed");
                return (0,
                o.uX)(),
                (0,
                o.Wv)(o.Im, {
                    to: "body"
                }, [a.visible ? (0,
                o.bo)(((0,
                o.uX)(),
                (0,
                o.CE)("div", {
                    key: 0,
                    class: "pop-up-comp mask",
                    onClick: t[0] || (t[0] = (0,
                    o.D$)(( (...e) => i.close && i.close(...e)), ["self"]))
                }, [(0,
                o.Lk)("div", n, [(0,
                o.RG)(e.$slots, "content", {}, void 0, !0)])])), [[s]]) : (0,
                o.Q3)("", !0)])
            }
            var r = {
                name: "PopUp",
                props: {
                    visible: Boolean,
                    modalClosable: {
                        type: Boolean,
                        default: !0
                    }
                },
                setup(e, t) {
                    function a() {
                        e.modalClosable && t.emit("update:visible", !1)
                    }
                    return {
                        close: a
                    }
                },
                directives: {
                    fixed: {
                        mounted() {
                            const e = document.body.scrollTop || document.documentElement.scrollTop;
                            document.body.style.cssText += `position:fixed;top:-${e}px;width: 100%;`
                        },
                        unmounted() {
                            const {body: e} = document;
                            e.style.position = "static";
                            const {top: t} = e.style;
                            document.body.scrollTop = -parseInt(t, 10),
                            document.documentElement.scrollTop = -parseInt(t, 10),
                            e.style.top = ""
                        }
                    }
                }
            }
              , l = a(66262);
            const s = (0,
            l.A)(r, [["render", i], ["__scopeId", "data-v-909b0550"]]);
            var c = s
        },
        35105: function(e, t, a) {
            "use strict";
            a.d(t, {
                A: function() {
                    return d
                }
            });
            var o = a(6301);
            const n = {
                key: 0,
                class: "interfaceDialogMask"
            }
              , i = {
                class: "interfaceDialog-body"
            };
            function r(e, t, a, r, l, s) {
                return a.dialogVisible ? ((0,
                o.uX)(),
                (0,
                o.CE)("div", n, [(0,
                o.Lk)("div", {
                    class: (0,
                    o.C4)(["interfaceDialog", {
                        "interfaceDialog-default-style": a.withDialogStyle
                    }, {
                        isCenter: a.isCenter
                    }]),
                    style: (0,
                    o.Tr)({
                        width: s.pxStyle(a.width),
                        height: s.pxStyle(a.height),
                        top: s.pxStyle(a.top),
                        left: s.pxStyle(a.left),
                        right: s.pxStyle(a.right)
                    }),
                    ref: "interfaceDialog"
                }, [(0,
                o.Lk)("div", i, [(0,
                o.RG)(e.$slots, "default", {}, void 0, !0)])], 6)])) : (0,
                o.Q3)("", !0)
            }
            var l = {
                name: "InterfaceDialog",
                components: {},
                props: {
                    dialogVisible: {
                        type: Boolean,
                        required: !0,
                        default: !1
                    },
                    width: {
                        type: [Number, String],
                        required: !0,
                        default: "auto"
                    },
                    height: {
                        type: [Number, String],
                        required: !0,
                        default: "auto"
                    },
                    top: {
                        type: [Number, String],
                        required: !0,
                        default: 0
                    },
                    left: {
                        type: [Number, String],
                        required: !0,
                        default: 0
                    },
                    right: {
                        type: [Number, String],
                        required: !1,
                        default: 0
                    },
                    withDialogStyle: {
                        type: Boolean,
                        default: !0
                    },
                    isCenter: {
                        type: Boolean,
                        default: !1
                    }
                },
                data() {
                    return {
                        promiseStatus: {}
                    }
                },
                methods: {
                    pxStyle(e) {
                        return this.isString(e) ? e : e + "px"
                    },
                    isString(e) {
                        return "string" === typeof e
                    },
                    isNumber(e) {
                        return "number" === typeof e
                    },
                    closeinterfaceDialog() {
                        this.$emit("closeDialog")
                    },
                    modalClickEventHandler(e) {
                        this.$refs.interfaceDialog && !this.$refs.interfaceDialog.contains(e.target) && this.closeinterfaceDialog()
                    }
                },
                watch: {
                    dialogVisible: {
                        handler: function(e) {
                            e ? this.$nextTick(( () => {
                                setTimeout(( () => {
                                    document.body.addEventListener("click", this.modalClickEventHandler, !0)
                                }
                                ), 10)
                            }
                            )) : document.body.removeEventListener("click", this.modalClickEventHandler, !0)
                        }
                    }
                }
            }
              , s = a(66262);
            const c = (0,
            s.A)(l, [["render", r], ["__scopeId", "data-v-71fec0f6"]]);
            var d = c
        },
        69208: function(e, t, a) {
            "use strict";
            a.d(t, {
                A: function() {
                    return P
                }
            });
            var o = a(6301);
            const n = e => ((0,
            o.Qi)("data-v-5f8b9e8d"),
            e = e(),
            (0,
            o.jt)(),
            e)
              , i = {
                class: "TextTranslateSetting yd-form-container"
            }
              , r = {
                class: "checkbox"
            }
              , l = n(( () => (0,
            o.Lk)("span", {
                class: "color_text_1 label-text"
            }, "日语假名（仅译文）", -1)))
              , s = {
                class: "checkbox"
            }
              , c = n(( () => (0,
            o.Lk)("span", {
                class: "color_text_1 label-text"
            }, "日语罗马音（仅译文）", -1)))
              , d = {
                class: "checkbox"
            }
              , u = n(( () => (0,
            o.Lk)("span", {
                class: "color_text_1 label-text"
            }, "显示原文字数", -1)))
              , p = n(( () => (0,
            o.Lk)("div", {
                class: "line"
            }, null, -1)))
              , m = {
                class: "pronounce-label"
            }
              , h = {
                class: "pronounce-setting-content"
            }
              , g = ["onClick"]
              , b = {
                class: "radio-label"
            };
            function f(e, t, a, n, f, v) {
                return (0,
                o.uX)(),
                (0,
                o.Wv)(n["InterfaceDialog"], {
                    dialogVisible: !0,
                    width: "auto",
                    height: "auto",
                    top: a.top,
                    right: 0,
                    left: null,
                    onCloseDialog: n.closeDialog
                }, {
                    default: (0,
                    o.k6)(( () => [(0,
                    o.Lk)("div", i, [(0,
                    o.bF)(n["StrokeSwitch"]), "TextTranslate" === a.from ? ((0,
                    o.uX)(),
                    (0,
                    o.CE)(o.FK, {
                        key: 0
                    }, [(0,
                    o.Lk)("label", r, [(0,
                    o.bo)((0,
                    o.Lk)("input", {
                        class: "g-checkbox",
                        type: "checkbox",
                        "onUpdate:modelValue": t[0] || (t[0] = e => n.showPjm = e)
                    }, null, 512), [[o.lH, n.showPjm]]), l]), (0,
                    o.Lk)("label", s, [(0,
                    o.bo)((0,
                    o.Lk)("input", {
                        class: "g-checkbox",
                        type: "checkbox",
                        "onUpdate:modelValue": t[1] || (t[1] = e => n.showRomanPronunciation = e)
                    }, null, 512), [[o.lH, n.showRomanPronunciation]]), c]), (0,
                    o.Lk)("label", d, [(0,
                    o.bo)((0,
                    o.Lk)("input", {
                        class: "g-checkbox",
                        type: "checkbox",
                        "onUpdate:modelValue": t[2] || (t[2] = e => n.showWordsNumber = e)
                    }, null, 512), [[o.lH, n.showWordsNumber]]), u])], 64)) : (0,
                    o.Q3)("", !0), p, ((0,
                    o.uX)(),
                    (0,
                    o.CE)(o.FK, null, (0,
                    o.pI)(n.pronounceSettingList, ( (e, t) => (0,
                    o.Lk)("div", {
                        class: "pronounce-item-container",
                        key: t
                    }, [(0,
                    o.Lk)("div", m, (0,
                    o.v_)(e.label), 1), (0,
                    o.Lk)("div", h, [((0,
                    o.uX)(!0),
                    (0,
                    o.CE)(o.FK, null, (0,
                    o.pI)(e.content, (t => ((0,
                    o.uX)(),
                    (0,
                    o.CE)("div", {
                        class: "radio-container",
                        key: t.value,
                        onClick: a => n.pronounceSetting[e.key] = t.value
                    }, [(0,
                    o.Lk)("div", {
                        class: (0,
                        o.C4)(["radio", [{
                            selected: n.pronounceSetting[e.key] == t.value
                        }]])
                    }, null, 2), (0,
                    o.Lk)("div", b, (0,
                    o.v_)(t.label), 1)], 8, g)))), 128))])]))), 64))])])),
                    _: 1
                }, 8, ["top"])
            }
            var v = a(66278)
              , A = a(35105);
            a(62953);
            const y = {
                class: "stroke-switch yd-form-container"
            }
              , T = {
                class: "checkbox"
            };
            function _(e, t, a, n, i, r) {
                return (0,
                o.uX)(),
                (0,
                o.CE)("div", y, [(0,
                o.Lk)("label", T, [(0,
                o.Lk)("span", {
                    class: "color_text_1 label-text",
                    onClick: t[0] || (t[0] = (...e) => n.downloadChrome && n.downloadChrome(...e))
                }, "下载划词插件")])])
            }
            var S = {
                name: "StrokeSwitch",
                setup(e, t) {
                    const a = () => {
                        window.open("https://chrome.google.com/webstore/detail/%E7%BD%91%E6%98%93%E6%9C%89%E9%81%93%E7%BF%BB%E8%AF%91/eopjamdnofihpioajgfdikhhbobonhbb?hl=en&authuser=1")
                    }
                    ;
                    return {
                        downloadChrome: a
                    }
                }
            }
              , k = a(66262);
            const I = (0,
            k.A)(S, [["render", _], ["__scopeId", "data-v-8d65aa18"]]);
            var w = I
              , E = {
                __name: "TextTranslateSetting",
                props: {
                    showTextTranslateHistoryPanel: Boolean,
                    from: {
                        type: String,
                        default: "TextTranslate"
                    },
                    top: {
                        type: Number,
                        default: 32
                    }
                },
                emits: ["closeDialog"],
                setup(e, {expose: t, emit: a}) {
                    t();
                    const n = (0,
                    v.Pj)()
                      , i = e
                      , r = a
                      , l = (0,
                    o.KR)(!1)
                      , s = (0,
                    o.KR)(!1)
                      , c = (0,
                    o.KR)(!0)
                      , d = (0,
                    o.KR)({})
                      , u = [{
                        label: "发音速度（全局）",
                        key: "playbackRate",
                        content: [{
                            label: "0.5x",
                            value: "0.5"
                        }, {
                            label: "1x",
                            value: "1"
                        }, {
                            label: "1.5x",
                            value: "1.5"
                        }]
                    }, {
                        label: "默认发音",
                        key: "voiceType",
                        content: [{
                            label: "英音",
                            value: "1"
                        }, {
                            label: "美音",
                            value: "2"
                        }]
                    }];
                    (0,
                    o.KC)(( () => {
                        l.value = n.state.text.showPjm,
                        s.value = n.state.text.showRomanPronunciation,
                        c.value = n.state.text.showWordsNumber,
                        d.value.playbackRate = n.state.text.playbackRate,
                        d.value.voiceType = n.state.text.voiceType
                    }
                    )),
                    (0,
                    o.wB)(l, ( (e, t) => {
                        e !== t && n.commit("SET_SHOW_PJM", e)
                    }
                    )),
                    (0,
                    o.wB)(s, ( (e, t) => {
                        e !== t && n.commit("SET_SHOW_ROMAN_PRONUNCICATION", e)
                    }
                    )),
                    (0,
                    o.wB)(c, ( (e, t) => {
                        e !== t && n.commit("SET_SHOW_WORDS_NUMBER", e)
                    }
                    )),
                    (0,
                    o.wB)(d, ( (e, t) => {
                        n.commit("SET_PLAYBACKRATE", e.playbackRate),
                        n.commit("SET_VOICETYPE", e.voiceType)
                    }
                    ), {
                        deep: !0
                    });
                    const p = () => {
                        r("closeDialog")
                    }
                      , m = {
                        store: n,
                        props: i,
                        emit: r,
                        showPjm: l,
                        showRomanPronunciation: s,
                        showWordsNumber: c,
                        pronounceSetting: d,
                        pronounceSettingList: u,
                        closeDialog: p,
                        get useStore() {
                            return v.Pj
                        },
                        InterfaceDialog: A.A,
                        StrokeSwitch: w
                    };
                    return Object.defineProperty(m, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    m
                }
            };
            const C = (0,
            k.A)(E, [["render", f], ["__scopeId", "data-v-5f8b9e8d"]]);
            var P = C
        },
        84870: function(e, t, a) {
            var o = {
                "./domain.js": 57185,
                "./language.js": 36032,
                "./login.js": 37180,
                "./text.js": 87087
            };
            function n(e) {
                var t = i(e);
                return a(t)
            }
            function i(e) {
                if (!a.o(o, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND",
                    t
                }
                return o[e]
            }
            n.keys = function() {
                return Object.keys(o)
            }
            ,
            n.resolve = i,
            e.exports = n,
            n.id = 84870
        },
        36519: function(e, t, a) {
            "use strict";
            e.exports = a.p + "img/null-list.8c012df2.png"
        },
        78982: function() {},
        47790: function() {},
        73776: function() {},
        77965: function() {},
        50477: function() {},
        66089: function() {},
        79368: function() {},
        64688: function() {},
        51069: function() {},
        15340: function() {},
        79838: function() {}
    }
      , t = {};
    function a(o) {
        var n = t[o];
        if (void 0 !== n)
            return n.exports;
        var i = t[o] = {
            id: o,
            loaded: !1,
            exports: {}
        };
        console.log("缺失函数：：：", o)
        return e[o].call(i.exports, i, i.exports, a),
        i.loaded = !0,
        i.exports
    }
    aaaa = a
    a.m = e,
    function() {
        var e = [];
        a.O = function(t, o, n, i) {
            if (!o) {
                var r = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    o = e[d][0],
                    n = e[d][1],
                    i = e[d][2];
                    for (var l = !0, s = 0; s < o.length; s++)
                        (!1 & i || r >= i) && Object.keys(a.O).every((function(e) {
                            return a.O[e](o[s])
                        }
                        )) ? o.splice(s--, 1) : (l = !1,
                        i < r && (r = i));
                    if (l) {
                        e.splice(d--, 1);
                        var c = n();
                        void 0 !== c && (t = c)
                    }
                }
                return t
            }
            i = i || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > i; d--)
                e[d] = e[d - 1];
            e[d] = [o, n, i]
        }
    }(),
    function() {
        a.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e["default"]
            }
            : function() {
                return e
            }
            ;
            return a.d(t, {
                a: t
            }),
            t
        }
    }(),
    function() {
        a.d = function(e, t) {
            for (var o in t)
                a.o(t, o) && !a.o(e, o) && Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: t[o]
                })
        }
    }(),
    function() {
        a.f = {},
        a.e = function(e) {
            return Promise.all(Object.keys(a.f).reduce((function(t, o) {
                return a.f[o](e, t),
                t
            }
            ), []))
        }
    }(),
    function() {
        a.u = function(e) {
            return "js/" + ({
                17: "PdfSplit",
                108: "paraphraser",
                151: "Pdf2Word",
                271: "PdfConcat",
                333: "NoLogin",
                348: "textTranslate",
                393: "Pdf2Pic",
                471: "termBank",
                487: "FunctionList",
                508: "FileFormat",
                551: "documentUpload",
                637: "DocHistory",
                688: "Person",
                761: "Pic2Pdf",
                873: "aiTranslateV2"
            }[e] || e) + "." + {
                17: "9155cf5a",
                85: "cf2636fd",
                95: "0f4f600b",
                108: "c57fdaa9",
                151: "8f57da8c",
                233: "a0a29e7a",
                271: "b55b9e03",
                296: "220546f2",
                333: "66e41ecd",
                348: "dbf88b81",
                393: "6612e334",
                471: "2aaaf950",
                487: "46c52481",
                508: "d191738f",
                551: "6ad555f5",
                637: "59f2adb1",
                688: "8a6f3b37",
                761: "19e9d78c",
                768: "a2fa5968",
                829: "f24a2dd5",
                853: "ef6c3b0b",
                873: "2d5553ab"
            }[e] + ".js"
        }
    }(),
    function() {
        a.miniCssF = function(e) {
            return "css/" + ({
                108: "paraphraser",
                151: "Pdf2Word",
                333: "NoLogin",
                348: "textTranslate",
                471: "termBank",
                508: "FileFormat",
                551: "documentUpload",
                637: "DocHistory",
                688: "Person",
                873: "aiTranslateV2"
            }[e] || e) + "." + {
                85: "c186dda0",
                95: "c0846d11",
                108: "11aa5c8b",
                151: "ea51e20c",
                233: "cb6f39bc",
                333: "ab4a4c35",
                348: "20f3d51c",
                471: "4dd8ff0b",
                508: "d940caa6",
                551: "1347178c",
                637: "2b3fd2fc",
                688: "bea970ce",
                853: "481de091",
                873: "ad83f298"
            }[e] + ".css"
        }
    }(),
    function() {
        a.g = function() {
            if ("object" === typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window)
                    return window
            }
        }()
    }(),
    function() {
        a.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
    }(),
    function() {
        var e = {}
          , t = "translation-website:";
        a.l = function(o, n, i, r) {
            if (e[o])
                e[o].push(n);
            else {
                var l, s;
                if (void 0 !== i)
                    for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
                        var u = c[d];
                        if (u.getAttribute("src") == o || u.getAttribute("data-webpack") == t + i) {
                            l = u;
                            break
                        }
                    }
                l || (s = !0,
                l = document.createElement("script"),
                l.charset = "utf-8",
                l.timeout = 120,
                a.nc && l.setAttribute("nonce", a.nc),
                l.setAttribute("data-webpack", t + i),
                l.src = o),
                e[o] = [n];
                var p = function(t, a) {
                    l.onerror = l.onload = null,
                    clearTimeout(m);
                    var n = e[o];
                    if (delete e[o],
                    l.parentNode && l.parentNode.removeChild(l),
                    n && n.forEach((function(e) {
                        return e(a)
                    }
                    )),
                    t)
                        return t(a)
                }
                  , m = setTimeout(p.bind(null, void 0, {
                    type: "timeout",
                    target: l
                }), 12e4);
                l.onerror = p.bind(null, l.onerror),
                l.onload = p.bind(null, l.onload),
                s && document.head.appendChild(l)
            }
        }
    }(),
    function() {
        a.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    }(),
    function() {
        a.nmd = function(e) {
            return e.paths = [],
            e.children || (e.children = []),
            e
        }
    }(),
    function() {
        a.p = ""
    }(),
    function() {
        if ("undefined" !== typeof document) {
            var e = function(e, t, a, o, n) {
                var i = document.createElement("link");
                i.rel = "stylesheet",
                i.type = "text/css";
                var r = function(a) {
                    if (i.onerror = i.onload = null,
                    "load" === a.type)
                        o();
                    else {
                        var r = a && a.type
                          , l = a && a.target && a.target.href || t
                          , s = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ": " + l + ")");
                        s.name = "ChunkLoadError",
                        s.code = "CSS_CHUNK_LOAD_FAILED",
                        s.type = r,
                        s.request = l,
                        i.parentNode && i.parentNode.removeChild(i),
                        n(s)
                    }
                };
                return i.onerror = i.onload = r,
                i.href = t,
                a ? a.parentNode.insertBefore(i, a.nextSibling) : document.head.appendChild(i),
                i
            }
              , t = function(e, t) {
                for (var a = document.getElementsByTagName("link"), o = 0; o < a.length; o++) {
                    var n = a[o]
                      , i = n.getAttribute("data-href") || n.getAttribute("href");
                    if ("stylesheet" === n.rel && (i === e || i === t))
                        return n
                }
                var r = document.getElementsByTagName("style");
                for (o = 0; o < r.length; o++) {
                    n = r[o],
                    i = n.getAttribute("data-href");
                    if (i === e || i === t)
                        return n
                }
            }
              , o = function(o) {
                return new Promise((function(n, i) {
                    var r = a.miniCssF(o)
                      , l = a.p + r;
                    if (t(r, l))
                        return n();
                    e(o, l, null, n, i)
                }
                ))
            }
              , n = {
                524: 0
            };
            a.f.miniCss = function(e, t) {
                var a = {
                    85: 1,
                    95: 1,
                    108: 1,
                    151: 1,
                    233: 1,
                    333: 1,
                    348: 1,
                    471: 1,
                    508: 1,
                    551: 1,
                    637: 1,
                    688: 1,
                    853: 1,
                    873: 1
                };
                n[e] ? t.push(n[e]) : 0 !== n[e] && a[e] && t.push(n[e] = o(e).then((function() {
                    n[e] = 0
                }
                ), (function(t) {
                    throw delete n[e],
                    t
                }
                )))
            }
        }
    }(),
    function() {
        var e = {
            524: 0
        };
        a.f.j = function(t, o) {
            var n = a.o(e, t) ? e[t] : void 0;
            if (0 !== n)
                if (n)
                    o.push(n[2]);
                else if (95 != t) {
                    var i = new Promise((function(a, o) {
                        n = e[t] = [a, o]
                    }
                    ));
                    o.push(n[2] = i);
                    var r = a.p + a.u(t)
                      , l = new Error
                      , s = function(o) {
                        if (a.o(e, t) && (n = e[t],
                        0 !== n && (e[t] = void 0),
                        n)) {
                            var i = o && ("load" === o.type ? "missing" : o.type)
                              , r = o && o.target && o.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + i + ": " + r + ")",
                            l.name = "ChunkLoadError",
                            l.type = i,
                            l.request = r,
                            n[1](l)
                        }
                    };
                    a.l(r, s, "chunk-" + t, t)
                } else
                    e[t] = 0
        }
        ,
        a.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, o) {
            var n, i, r = o[0], l = o[1], s = o[2], c = 0;
            if (r.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (n in l)
                    a.o(l, n) && (a.m[n] = l[n]);
                if (s)
                    var d = s(a)
            }
            for (t && t(o); c < r.length; c++)
                i = r[c],
                a.o(e, i) && e[i] && e[i][0](),
                e[i] = 0;
            return a.O(d)
        }
          , o = [];
        o.forEach(t.bind(null, 0)),
        o.push = t.bind(null, o.push.bind(o))
    }();
    var o = a.O(void 0, [504], (function() {
        return a(85366)
    }
    ));
    o = a.O(o)
}
)();



i = aaaa(91565)


d = "fanyideskweb"
u = "webfanyi"


function _(e) {
                return i.createHash("md5").update(e.toString()).digest("hex")
            }

function S(e, t) {
                return _(`client=${d}&mysticTime=${e}&product=${u}&key=${t}`)
            }

a = 1746614020376
e = 'asdjnjfenknafdfsdfsd'
sign = S(a, e)


console.log(sign)