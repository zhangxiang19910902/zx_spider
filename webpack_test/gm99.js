
window = global

var guanjianzi;

!function(t) {
    function e(s) {
        if (i[s])
            return i[s].exports;
        var n = i[s] = {
            exports: {},
            id: s,
            loaded: !1
        };
        return t[s].call(n.exports, n, n.exports, e),
        n.loaded = !0,
        n.exports
    }
    guanjianzi = e;
    var i = {};
    return e.m = t,
    e.c = i,
    e.p = ""
    // e(0)
}({
    0: function(t, e, i) {
        var s;
        s = function(t) {
            var e = i(11)
              , s = i(6)
              , n = i(5)
              , r = i(42)
              , o = i(44)
              , a = (i(43),
            new e);
            a.init();
            var c = new s;
            c.init();
            var l = new n;
            l.init();
            var u = new r;
            u.init();
            var d = new o;
            d.init({
                markLeft: "btn-arrow-left",
                markRight: "btn-arrow-right",
                slidePicUl: "slide-ul",
                slideTime: 1e3
            }),
            d.loadingEffect(),
            $("#datepicker").datepicker({
                inline: !0
            })
        }
        .call(e, i, e, t),
        !(void 0 !== s && (t.exports = s))
    },
    1: function(t, e) {
        t.exports = jQuery
    },
    2: function(t, e, i) {
        var s;
        s = function(t, e, s) {
            function n() {}
            var r = i(1);
            s.exports = n;
            var o = i(3)
              , a = new o;
            n.prototype.addFavorite = function(t, e) {
                var i = t || location.href
                  , s = e || document.title
                  , n = this;
                try {
                    window.external.AddFavorite(i, s)
                } catch (t) {
                    try {
                        window.sidebar.addPanel(s, i, "")
                    } catch (t) {
                        n.dialog({
                            content: "加入收藏失敗，請使用Ctrl+D進行添加"
                        })
                    }
                }
            }
            ,
            n.prototype._GET = function(t) {
                var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)")
                  , i = window.location.search.substr(1).match(e);
                return null != i ? unescape(i[2]) : null
            }
            ,
            n.prototype.comReg = function() {
                var t = "/ajax/register/?forward=" + window.globalGetGotoLink({
                    link: "//www.gm99.com"
                })
                  , e = location.href
                  , i = urlParams(e);
                "" != location.href.split("/")[3] && (t += location.href.split("/")[3]),
                i.hasOwnProperty("cid") && i.cid > 0 && i.hasOwnProperty("scid") && null != i.scid && (t += "&cid=" + i.cid + "&scid=" + i.scid + "&subid=" + i.subid + "&link_id=" + i.link_id),
                dialog("iframe", t, 760, 640, "regDL")
            }
            ,
            n.prototype.urlParams = function(t) {
                for (var e = {}, i = t.substring(t.indexOf("?") + 1, t.length).split("&"), s = i.length, n = 0; n < s; n++) {
                    var r = i[n].indexOf("=");
                    if (r != -1) {
                        var o = i[n].substring(0, r)
                          , a = i[n].substring(r + 1);
                        e[o] = decodeURIComponent(a)
                    }
                }
                return e
            }
            ,
            n.prototype.setCookie = function(t, e, i) {
                i = i ? i : 1;
                var s = "";
                if (i > 0) {
                    var n = i
                      , r = new Date;
                    r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3),
                    s = ";expires=" + r.toUTCString()
                } else
                    s = 0;
                document.cookie = t + "=" + escape(e) + s + ";path=/;domain=gm99.com;"
            }
            ,
            n.prototype.getCookie = function(t) {
                var e = document.cookie.match(new RegExp("(^| )" + t + "=([^;]*)(;|$)"));
                return null != e ? unescape(e[2]) : null
            }
            ,
            n.prototype.delCookie = function(t) {
                var e = new Date;
                e.setTime(e.getTime() - 1);
                var i = this.getCookie(t);
                null != i && (document.cookie = t + "=" + i + ";expires=" + e.toUTCString())
            }
            ,
            n.prototype.copyTo = function(t) {
                var e = this;
                return window.clipboardData ? (window.clipboardData.clearData(),
                window.clipboardData.setData("Text", t),
                e.dialog({
                    content: "复制成功！"
                }),
                !0) : (e.dialog({
                    content: "主人，目前僅IE瀏覽器支持複製功能，其他瀏覽器請手動記錄喔！"
                }),
                !1)
            }
            ,
            n.prototype.copyData = function(t) {
                var e = this;
                if (window.clipboardData)
                    window.clipboardData.setData("Text", t);
                else {
                    var i = "flashcopier";
                    if (!document.getElementById(i)) {
                        var s = document.createElement("div");
                        s.id = i,
                        document.body.appendChild(s)
                    }
                    document.getElementById(i).innerHTML = "";
                    var n = '<embed src="/js/_clipboard.swf" FlashVars="clipboard=' + encodeURIComponent(t) + '" width="0" height="0" type="application/x-shockwave-flash"></embed>';
                    document.getElementById(i).innerHTML = n
                }
                e.dialog({
                    content: "copy成功！"
                })
            }
            ,
            n.prototype.login = function(t, e, i) {
                var s = (new Date).getTime()
                  , n = t.uname
                  , o = a.encode(t.password, s)
                  , c = t.forward
                  , l = t.remember
                  , u = t.g_recaptcha
                  , d = t.type
                  , p = t.is_recent
                  , h = this
                  , f = {
                    encrypt: 1,
                    uname: n,
                    password: o,
                    forward: c,
                    remember: l
                };
                "passport" == d ? (f.g_recaptcha = u,
                1 == p && (f.is_recent = 1)) : f.ckcode = t.ckcode;
                var g = window.location.href;
                g.indexOf("www.gm99.com") == -1 || g.split("//")[1].split("/")[1] || e && "login-btn" == e.attr("id") || (f.t_source = "index_pop"),
                r.ajax({
                    url: "//passport.gm99.com/login/login3",
                    type: "get",
                    data: f,
                    xhrFields: {
                        withCredentials: !0
                    },
                    jsonp: "callback",
                    async: !0,
                    dataType: "jsonp",
                    success: function(t) {
                        if (r("#login-btn").removeClass("disable"),
                        i && i instanceof Function ? i() : "",
                        t.hasOwnProperty("result") && 1 == t.result)
                            window.gmPassportDataLayer.push({
                                eventName: "login",
                                eventType: "账号密码登陆"
                            }),
                            t.hasOwnProperty("bbs_sync") && t.bbs_sync && r("head").append(t.bbs_sync.replace("\\", "")),
                            t.hasOwnProperty("forward") && setTimeout(function() {
                                window.top.location.href = decodeURIComponent(t.forward) || window.globalGetGotoLink({
                                    link: "//www.gm99.com"
                                })
                            }, 1e3);
                        else {
                            if ("pop" === d)
                                r(".pop-login-auth-codes").click();
                            else if ("index" === d)
                                r(".login-auth-codes").click();
                            else if ("passport" === d) {
                                var e = "undefined" != typeof grecaptcha;
                                e && (grecaptcha.reset(window.googleVerificationWidget),
                                window.googleVerificationToken = null)
                            }
                            r("#login-btn").text("登入"),
                            r("#login-auth-code,#pop-login-auth-code").val(""),
                            h.dialog({
                                content: t.msg
                            })
                        }
                    }
                })
            }
            ,
            n.prototype.zmqsdklogin = function(t, e, i) {
                var s = this
                  , n = (new Date).getTime()
                  , o = t.uname
                  , c = a.encode(t.password, n)
                  , l = t.forward
                  , u = t.remember
                  , d = t.ckcode
                  , p = t.type
                  , h = this._GET("apps") || ""
                  , f = this._GET("gameCode") || ""
                  , g = this._GET("gameId") || ""
                  , m = this._GET("packageName") || ""
                  , v = this._GET("packageVersion") || ""
                  , _ = this._GET("ptCode") || ""
                  , b = this._GET("publishPlatForm") || ""
                  , y = this._GET("timeStamp") || ""
                  , w = this._GET("country") || ""
                  , k = this._GET("devicePlate") || ""
                  , D = this._GET("language") || ""
                  , x = this._GET("osVersion") || ""
                  , S = this._GET("mac") || ""
                  , C = this._GET("sign") || "gm99"
                  , T = {
                    encrypt: 1,
                    uname: o,
                    password: c,
                    forward: l,
                    remember: u,
                    ckcode: d,
                    apps: h,
                    gameCode: f,
                    gameId: g,
                    packageName: m,
                    packageVersion: v,
                    ptCode: _,
                    publishPlatForm: b,
                    timeStamp: y,
                    country: w,
                    devicePlate: k,
                    language: D,
                    osVersion: x,
                    mac: S,
                    sign: C
                }
                  , I = window.location.href;
                I.indexOf("www.gm99.com") == -1 || I.split("//")[1].split("/")[1] || e && "login-btn" == e.attr("id") || (T.t_source = "index_pop"),
                r.ajax({
                    url: "//mabpassportsdk.gm99.com/login/mobile_sdk",
                    type: "get",
                    data: T,
                    xhrFields: {
                        withCredentials: !0
                    },
                    jsonp: "callback",
                    async: !0,
                    dataType: "jsonp",
                    success: function(t) {
                        i && i instanceof Function ? i() : "",
                        t.hasOwnProperty("result") && 1 == t.result ? setTimeout(function() {
                            window.location.href = "//zmqgm99link?message=" + encodeURIComponent(t.msg) + "&sign=" + encodeURIComponent(t.data.sign) + "&timeStamp=" + t.data.timeStamp + "&uid=" + t.data.uid + "&apps=" + t.data.apps,
                            r("#login-btn").text("登入")
                        }, 500) : ("pop" === p ? r(".pop-login-auth-codes").click() : "index" === p && r(".login-auth-codes").click(),
                        r("#login-btn").text("登入"),
                        r("#login-auth-code,#pop-login-auth-code").val(""),
                        s.dialog({
                            content: t.msg
                        }))
                    }
                })
            }
            ,
            n.prototype.loginWithoutVerifyCode = function(t) {
                var e = (new Date).getTime()
                  , i = t.uname
                  , s = a.encode(t.password, e)
                  , n = t.forward
                  , o = t.remember;
                r.ajax({
                    url: "//passport.gm99.com/login/login2",
                    type: "get",
                    data: {
                        encrypt: 1,
                        uname: i,
                        password: s,
                        forward: n,
                        remember: o
                    },
                    xhrFields: {
                        withCredentials: !0
                    },
                    jsonp: "callback",
                    async: !0,
                    dataType: "jsonp",
                    success: function(t) {
                        t.hasOwnProperty("result") && 1 == t.result ? (t.hasOwnProperty("bbs_sync") && t.bbs_sync && r("head").append(t.bbs_sync.replace("\\", "")),
                        t.hasOwnProperty("forward") && setTimeout(function() {
                            window.top.location.href = decodeURIComponent(t.forward) || "/"
                        }, 1e3)) : alert(t.msg)
                    }
                })
            }
            ,
            n.prototype.logout = function(t) {
                var e = this;
                r.ajax({
                    url: "//passport.gm99.com/login/logout2?forward=" + t,
                    type: "get",
                    data: {},
                    jsonp: "callback",
                    async: !0,
                    dataType: "jsonp",
                    success: function(t) {
                        t.hasOwnProperty("result") && 1 == t.result ? (t.hasOwnProperty("bbs_sync") && t.bbs_sync && r("head").append(t.bbs_sync.replace("\\", "")),
                        t.hasOwnProperty("forward") && setTimeout(function() {
                            window.top.location.href = decodeURIComponent(t.forward) || "/"
                        }, 1e3)) : e.dialog({
                            content: t.msg
                        })
                    }
                })
            }
            ,
            n.prototype._TAG = function(t) {
                var e = t && t.tag || ".tag"
                  , i = t && t.curr || "curr"
                  , s = t && t.cont || ".tagCont"
                  , n = t && t.more || ".more"
                  , o = t && t.ev || "mouseover"
                  , a = t.firstTrigger || "yes"
                  , c = (t && t.time || 500,
                t && t.before)
                  , l = t && t.callback
                  , u = r(e)
                  , d = r(s)
                  , p = r(t.more ? n : document);
                "yes" == a && (u.eq(0).addClass(i),
                d.eq(0).stop().show()),
                c && c(),
                u.on(o, function() {
                    var s = r(this)
                      , n = s.index(e);
                    s.addClass(i).siblings(e).removeClass(i),
                    d.hide().eq(n).show(),
                    t.more && p.attr("href", s.attr("url")),
                    l && l(s, n)
                })
            }
            ,
            n.prototype.scrollAnchor = function(t) {
                var e = r(window.opera ? "CSS1Compat" == document.compatMode ? "html" : "body" : "html,body");
                if (t) {
                    var i = r("#" + t)
                      , s = i.offset().top;
                    e.animate({
                        scrollTop: s
                    }, 600)
                } else
                    e.animate({
                        scrollTop: 0
                    }, 600)
            }
            ,
            n.prototype.appendScript = function(t) {
                var e = Math.random()
                  , i = document.getElementsByTagName("head")[0]
                  , s = document.createElement("script");
                s.type = "text/javascript",
                s.src = t + "?r=" + e,
                i.appendChild(s)
            }
            ,
            n.prototype.slideDownAction = function(t, e, i, s, n) {
                t.hover(function() {
                    var t = e.css("display");
                    "block" === t ? e.stop().slideUp(200) : e.stop().slideDown(200)
                }, function() {
                    e.slideUp(200)
                }),
                i.on("click", function() {
                    n && s.html(r(this).html()).attr("data-location", r(this).attr("data-location")),
                    e.slideUp(200)
                })
            }
            ,
            n.prototype.placeholder = function(t, e) {
                var i = r("#" + t);
                i.css({
                    color: "#969696",
                    verticalAlign: "middle"
                }).focus(function() {
                    i.val() === e && i.val("").css({
                        color: "#494949"
                    })
                }).blur(function() {
                    "" === i.val() || i.val() === e ? (i.val(e).css({
                        color: "#969696"
                    }),
                    i[0].setAttribute("type", "")) : "password" == i.attr("data-type") && i[0].setAttribute("type", "password")
                })
            }
            ,
            n.prototype.TAplaceholder = function(t, e) {
                var i = r("#" + t);
                i.css({
                    color: "#969696"
                }).focus(function() {
                    i.val() === e && i.val("").css({
                        color: "#494949"
                    })
                }).blur(function() {
                    "" !== i.val() && i.val() !== e || i.val(e).css({
                        color: "#969696"
                    })
                })
            }
            ,
            n.prototype.slideDown = function(t, e, i, s, n) {
                var o = r("#" + t)
                  , a = r("#" + e)
                  , c = r("#" + i);
                o.on("click", function() {
                    var t = a.css("display")
                      , e = r(this);
                    "block" === t ? (a.stop().slideUp(200),
                    e.removeClass("active")) : (a.stop().slideDown(200),
                    e.addClass("active"))
                }),
                o.on("click", "li", function() {
                    var t = r(this)
                      , e = r(this).attr(s);
                    c.text(t.text()).attr(s, e),
                    a.slideUp(200),
                    o.removeClass("active"),
                    n && n()
                }),
                r("html").mousedown(function(t) {
                    var e = r(t.target);
                    e.is(o) || o.has(e).length || (a.slideUp(200),
                    o.removeClass("active"))
                })
            }
            ,
            n.prototype.getPropertyCount = function(t) {
                var e, i = 0;
                for (e in t)
                    t.hasOwnProperty(e) && i++;
                return i
            }
            ,
            n.prototype.inArray = function(t, e) {
                for (var i = 0, s = e.length; i < s; i++)
                    if (t === e[i])
                        return !0;
                return !1
            }
            ,
            n.prototype.removeHtmlTag = function(t) {
                return t = t.replace(/<\/?[^>]*>/g, ""),
                t = t.replace(/[ | ]*\n/g, "\n"),
                t = t.replace(/&nbsp;/gi, "")
            }
            ,
            n.prototype.dialog = function(t) {
                this.defaults = {
                    yesBtn: !0,
                    noBtn: !1,
                    yesBtnText: "確認",
                    noBtnText: "取消",
                    content: "這裡是默認的信息哦",
                    url: "javascript:;",
                    speed: 400,
                    callback: null,
                    yesCallback: null,
                    noCallback: null
                },
                this.defaults = r.extend({}, this.defaults, t),
                this.init = function() {
                    this._create(),
                    this.defaults.callback && "function" == typeof this.defaults.callback && this.defaults.callback()
                }
                ,
                this._create = function() {
                    this._dialog = r("<div></div>").addClass("dialog").hide().appendTo("body"),
                    this._closeBtn = r("<a></a>").attr("href", "javascript:;").addClass("dialog-close-btn").appendTo(this._dialog).on("click", r.proxy(this._close, this)),
                    this._content = r("<p>" + this.defaults.content + "</p>").addClass("dialog-content").appendTo(this._dialog),
                    this._yesBtn = r("<a>" + this.defaults.yesBtnText + "</a>").addClass("dialog-btns dialog-yes-btn").attr("href", this.defaults.url).appendTo(this._dialog).on("click", r.proxy(this._close, this)).on("click", r.proxy(this.defaults.yesCallback, this)),
                    this._noBtn = r("<a>" + this.defaults.noBtnText + "</a>").addClass("dialog-btns dialog-no-btn").attr("href", "javascript:;").appendTo(this._dialog).on("click", r.proxy(this._close, this)).on("click", r.proxy(this.defaults.noCallback, this)),
                    this._shadowLayer = r("<div></div>").addClass("shadow-layer").appendTo("body"),
                    this._open()
                }
                ,
                this._open = function() {
                    this.defaults.yesBtn === !1 ? this._yesBtn.hide() : this._yesBtn.show(),
                    this.defaults.noBtn === !1 ? this._noBtn.hide() : this._noBtn.show(),
                    "javascript:;" !== this.defaults.url ? this._yesBtn.attr("target", "_blank") : this._yesBtn.attr("target", ""),
                    this.defaults.content.length <= 30 ? this._content.css("margin", "265px 0 0 94px") : this._content.css("margin", "245px 0 0 94px"),
                    this._dialog.fadeIn(this.defaults.speed),
                    this._shadowLayer.fadeIn(this.defaults.speed)
                }
                ,
                this._close = function() {
                    this._dialog.fadeOut(this.defaults.speed),
                    this._shadowLayer.fadeOut(this.defaults.speed, r.proxy(this._destroy, this))
                }
                ,
                this._destroy = function() {
                    this._dialog.remove(),
                    this._shadowLayer.remove()
                }
                ,
                this.init()
            }
            ,
            n.prototype.passWordPlaceholder = function(t, e) {
                var i = r("#" + t);
                i.css({
                    color: "#969696",
                    verticalAlign: "middle"
                }).focus(function() {
                    i.val() === e && (i.val("").css({
                        color: "#494949"
                    }),
                    i[0].setAttribute("type", "password"))
                }).blur(function() {
                    "" === i.val() || i.val() === e ? (i.val(e).css({
                        color: "#969696"
                    }),
                    i[0].setAttribute("type", "")) : i[0].setAttribute("type", "password")
                })
            }
            ,
            n.prototype.getData = function(t, e, i) {
                t.data = t.data ? t.data : {},
                r.ajax({
                    url: t.url,
                    type: t.type || "get",
                    data: t.data,
                    xhrFields: {
                        withCredentials: !0
                    },
                    jsonp: "callback",
                    async: !0,
                    dataType: "jsonp"
                }).done(function(t) {
                    1 === parseInt(t.result, 10) ? e(t.data, t.msg) : i(t.msg)
                })
            }
            ,
            n.prototype.statistic = function(t) {
                var e = [];
                t = t || {};
                for (key in t)
                    e.push(key + "=" + t[key]);
                document.createElement("img").src = "//collectdata.gm99.com/ps.gif?" + e.join("&")
            }
        }
        .call(e, i, e, t),
        !(void 0 !== s && (t.exports = s))
    },
    3: function(t, e, i) {
        var s;
        s = function(t, e, s) {
            function n() {
                "undefined" != typeof r && (this.jsencrypt = new r.JSEncrypt,
                this.jsencrypt.setPublicKey("-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDq04c6My441Gj0UFKgrqUhAUg+kQZeUeWSPlAU9fr4HBPDldAeqzx1UR92KJHuQh/zs1HOamE2dgX9z/2oXcJaqoRIA/FXysx+z2YlJkSk8XQLcQ8EBOkp//MZrixam7lCYpNOjadQBb2Ot0U/Ky+jF2p+Ie8gSZ7/u+Wnr5grywIDAQAB-----END PUBLIC KEY-----"))
            }
            var r = i(4);
            n.prototype.encode = function(t, e) {
                var i = e ? e + "|" + t : t;
                return encodeURIComponent(this.jsencrypt.encrypt(i))
            }
            ,
            s.exports = n
        }
        .call(e, i, e, t),
        !(void 0 !== s && (t.exports = s))
    },
    4: function(t, e, i) {
        var s, n, r, s;
        s = function(t, e, i) {
            /*! JSEncrypt v2.3.1 | //npmcdn.com/jsencrypt@2.3.1/LICENSE.txt */
            !function(t, o) {
                r = [e],
                n = o,
                s = "function" == typeof n ? n.apply(e, r) : n,
                !(void 0 !== s && (i.exports = s))
            }(this, function(t) {
                function e(t, e, i) {
                    null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
                }
                function i() {
                    return new e(null)
                }
                function s(t, e, i, s, n, r) {
                    for (; --r >= 0; ) {
                        var o = e * this[t++] + i[s] + n;
                        n = Math.floor(o / 67108864),
                        i[s++] = 67108863 & o
                    }
                    return n
                }
                function n(t, e, i, s, n, r) {
                    for (var o = 32767 & e, a = e >> 15; --r >= 0; ) {
                        var c = 32767 & this[t]
                          , l = this[t++] >> 15
                          , u = a * c + l * o;
                        c = o * c + ((32767 & u) << 15) + i[s] + (1073741823 & n),
                        n = (c >>> 30) + (u >>> 15) + a * l + (n >>> 30),
                        i[s++] = 1073741823 & c
                    }
                    return n
                }
                function r(t, e, i, s, n, r) {
                    for (var o = 16383 & e, a = e >> 14; --r >= 0; ) {
                        var c = 16383 & this[t]
                          , l = this[t++] >> 14
                          , u = a * c + l * o;
                        c = o * c + ((16383 & u) << 14) + i[s] + n,
                        n = (c >> 28) + (u >> 14) + a * l,
                        i[s++] = 268435455 & c
                    }
                    return n
                }
                function o(t) {
                    return Te.charAt(t)
                }
                function a(t, e) {
                    var i = Ie[t.charCodeAt(e)];
                    return null == i ? -1 : i
                }
                function c(t) {
                    for (var e = this.t - 1; e >= 0; --e)
                        t[e] = this[e];
                    t.t = this.t,
                    t.s = this.s
                }
                function l(t) {
                    this.t = 1,
                    this.s = 0 > t ? -1 : 0,
                    t > 0 ? this[0] = t : -1 > t ? this[0] = t + this.DV : this.t = 0
                }
                function u(t) {
                    var e = i();
                    return e.fromInt(t),
                    e
                }
                function d(t, i) {
                    var s;
                    if (16 == i)
                        s = 4;
                    else if (8 == i)
                        s = 3;
                    else if (256 == i)
                        s = 8;
                    else if (2 == i)
                        s = 1;
                    else if (32 == i)
                        s = 5;
                    else {
                        if (4 != i)
                            return void this.fromRadix(t, i);
                        s = 2
                    }
                    this.t = 0,
                    this.s = 0;
                    for (var n = t.length, r = !1, o = 0; --n >= 0; ) {
                        var c = 8 == s ? 255 & t[n] : a(t, n);
                        0 > c ? "-" == t.charAt(n) && (r = !0) : (r = !1,
                        0 == o ? this[this.t++] = c : o + s > this.DB ? (this[this.t - 1] |= (c & (1 << this.DB - o) - 1) << o,
                        this[this.t++] = c >> this.DB - o) : this[this.t - 1] |= c << o,
                        o += s,
                        o >= this.DB && (o -= this.DB))
                    }
                    8 == s && 0 != (128 & t[0]) && (this.s = -1,
                    o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)),
                    this.clamp(),
                    r && e.ZERO.subTo(this, this)
                }
                function p() {
                    for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
                        --this.t
                }
                function h(t) {
                    if (this.s < 0)
                        return "-" + this.negate().toString(t);
                    var e;
                    if (16 == t)
                        e = 4;
                    else if (8 == t)
                        e = 3;
                    else if (2 == t)
                        e = 1;
                    else if (32 == t)
                        e = 5;
                    else {
                        if (4 != t)
                            return this.toRadix(t);
                        e = 2
                    }
                    var i, s = (1 << e) - 1, n = !1, r = "", a = this.t, c = this.DB - a * this.DB % e;
                    if (a-- > 0)
                        for (c < this.DB && (i = this[a] >> c) > 0 && (n = !0,
                        r = o(i)); a >= 0; )
                            e > c ? (i = (this[a] & (1 << c) - 1) << e - c,
                            i |= this[--a] >> (c += this.DB - e)) : (i = this[a] >> (c -= e) & s,
                            0 >= c && (c += this.DB,
                            --a)),
                            i > 0 && (n = !0),
                            n && (r += o(i));
                    return n ? r : "0"
                }
                function f() {
                    var t = i();
                    return e.ZERO.subTo(this, t),
                    t
                }
                function g() {
                    return this.s < 0 ? this.negate() : this
                }
                function m(t) {
                    var e = this.s - t.s;
                    if (0 != e)
                        return e;
                    var i = this.t;
                    if (e = i - t.t,
                    0 != e)
                        return this.s < 0 ? -e : e;
                    for (; --i >= 0; )
                        if (0 != (e = this[i] - t[i]))
                            return e;
                    return 0
                }
                function _(t) {
                    var e, i = 1;
                    return 0 != (e = t >>> 16) && (t = e,
                    i += 16),
                    0 != (e = t >> 8) && (t = e,
                    i += 8),
                    0 != (e = t >> 4) && (t = e,
                    i += 4),
                    0 != (e = t >> 2) && (t = e,
                    i += 2),
                    0 != (e = t >> 1) && (t = e,
                    i += 1),
                    i
                }
                function b() {
                    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + _(this[this.t - 1] ^ this.s & this.DM)
                }
                function y(t, e) {
                    var i;
                    for (i = this.t - 1; i >= 0; --i)
                        e[i + t] = this[i];
                    for (i = t - 1; i >= 0; --i)
                        e[i] = 0;
                    e.t = this.t + t,
                    e.s = this.s
                }
                function w(t, e) {
                    for (var i = t; i < this.t; ++i)
                        e[i - t] = this[i];
                    e.t = Math.max(this.t - t, 0),
                    e.s = this.s
                }
                function k(t, e) {
                    var i, s = t % this.DB, n = this.DB - s, r = (1 << n) - 1, o = Math.floor(t / this.DB), a = this.s << s & this.DM;
                    for (i = this.t - 1; i >= 0; --i)
                        e[i + o + 1] = this[i] >> n | a,
                        a = (this[i] & r) << s;
                    for (i = o - 1; i >= 0; --i)
                        e[i] = 0;
                    e[o] = a,
                    e.t = this.t + o + 1,
                    e.s = this.s,
                    e.clamp()
                }
                function D(t, e) {
                    e.s = this.s;
                    var i = Math.floor(t / this.DB);
                    if (i >= this.t)
                        return void (e.t = 0);
                    var s = t % this.DB
                      , n = this.DB - s
                      , r = (1 << s) - 1;
                    e[0] = this[i] >> s;
                    for (var o = i + 1; o < this.t; ++o)
                        e[o - i - 1] |= (this[o] & r) << n,
                        e[o - i] = this[o] >> s;
                    s > 0 && (e[this.t - i - 1] |= (this.s & r) << n),
                    e.t = this.t - i,
                    e.clamp()
                }
                function x(t, e) {
                    for (var i = 0, s = 0, n = Math.min(t.t, this.t); n > i; )
                        s += this[i] - t[i],
                        e[i++] = s & this.DM,
                        s >>= this.DB;
                    if (t.t < this.t) {
                        for (s -= t.s; i < this.t; )
                            s += this[i],
                            e[i++] = s & this.DM,
                            s >>= this.DB;
                        s += this.s
                    } else {
                        for (s += this.s; i < t.t; )
                            s -= t[i],
                            e[i++] = s & this.DM,
                            s >>= this.DB;
                        s -= t.s
                    }
                    e.s = 0 > s ? -1 : 0,
                    -1 > s ? e[i++] = this.DV + s : s > 0 && (e[i++] = s),
                    e.t = i,
                    e.clamp()
                }
                function S(t, i) {
                    var s = this.abs()
                      , n = t.abs()
                      , r = s.t;
                    for (i.t = r + n.t; --r >= 0; )
                        i[r] = 0;
                    for (r = 0; r < n.t; ++r)
                        i[r + s.t] = s.am(0, n[r], i, r, 0, s.t);
                    i.s = 0,
                    i.clamp(),
                    this.s != t.s && e.ZERO.subTo(i, i)
                }
                function C(t) {
                    for (var e = this.abs(), i = t.t = 2 * e.t; --i >= 0; )
                        t[i] = 0;
                    for (i = 0; i < e.t - 1; ++i) {
                        var s = e.am(i, e[i], t, 2 * i, 0, 1);
                        (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, s, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV,
                        t[i + e.t + 1] = 1)
                    }
                    t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)),
                    t.s = 0,
                    t.clamp()
                }
                function T(t, s, n) {
                    var r = t.abs();
                    if (!(r.t <= 0)) {
                        var o = this.abs();
                        if (o.t < r.t)
                            return null != s && s.fromInt(0),
                            void (null != n && this.copyTo(n));
                        null == n && (n = i());
                        var a = i()
                          , c = this.s
                          , l = t.s
                          , u = this.DB - _(r[r.t - 1]);
                        u > 0 ? (r.lShiftTo(u, a),
                        o.lShiftTo(u, n)) : (r.copyTo(a),
                        o.copyTo(n));
                        var d = a.t
                          , p = a[d - 1];
                        if (0 != p) {
                            var h = p * (1 << this.F1) + (d > 1 ? a[d - 2] >> this.F2 : 0)
                              , f = this.FV / h
                              , g = (1 << this.F1) / h
                              , m = 1 << this.F2
                              , v = n.t
                              , b = v - d
                              , y = null == s ? i() : s;
                            for (a.dlShiftTo(b, y),
                            n.compareTo(y) >= 0 && (n[n.t++] = 1,
                            n.subTo(y, n)),
                            e.ONE.dlShiftTo(d, y),
                            y.subTo(a, a); a.t < d; )
                                a[a.t++] = 0;
                            for (; --b >= 0; ) {
                                var w = n[--v] == p ? this.DM : Math.floor(n[v] * f + (n[v - 1] + m) * g);
                                if ((n[v] += a.am(0, w, n, b, 0, d)) < w)
                                    for (a.dlShiftTo(b, y),
                                    n.subTo(y, n); n[v] < --w; )
                                        n.subTo(y, n)
                            }
                            null != s && (n.drShiftTo(d, s),
                            c != l && e.ZERO.subTo(s, s)),
                            n.t = d,
                            n.clamp(),
                            u > 0 && n.rShiftTo(u, n),
                            0 > c && e.ZERO.subTo(n, n)
                        }
                    }
                }
                function I(t) {
                    var s = i();
                    return this.abs().divRemTo(t, null, s),
                    this.s < 0 && s.compareTo(e.ZERO) > 0 && t.subTo(s, s),
                    s
                }
                function $(t) {
                    this.m = t
                }
                function P(t) {
                    return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
                }
                function R(t) {
                    return t
                }
                function A(t) {
                    t.divRemTo(this.m, null, t)
                }
                function E(t, e, i) {
                    t.multiplyTo(e, i),
                    this.reduce(i)
                }
                function M(t, e) {
                    t.squareTo(e),
                    this.reduce(e)
                }
                function N() {
                    if (this.t < 1)
                        return 0;
                    var t = this[0];
                    if (0 == (1 & t))
                        return 0;
                    var e = 3 & t;
                    return e = e * (2 - (15 & t) * e) & 15,
                    e = e * (2 - (255 & t) * e) & 255,
                    e = e * (2 - ((65535 & t) * e & 65535)) & 65535,
                    e = e * (2 - t * e % this.DV) % this.DV,
                    e > 0 ? this.DV - e : -e
                }
                function O(t) {
                    this.m = t,
                    this.mp = t.invDigit(),
                    this.mpl = 32767 & this.mp,
                    this.mph = this.mp >> 15,
                    this.um = (1 << t.DB - 15) - 1,
                    this.mt2 = 2 * t.t
                }
                function j(t) {
                    var s = i();
                    return t.abs().dlShiftTo(this.m.t, s),
                    s.divRemTo(this.m, null, s),
                    t.s < 0 && s.compareTo(e.ZERO) > 0 && this.m.subTo(s, s),
                    s
                }
                function B(t) {
                    var e = i();
                    return t.copyTo(e),
                    this.reduce(e),
                    e
                }
                function L(t) {
                    for (; t.t <= this.mt2; )
                        t[t.t++] = 0;
                    for (var e = 0; e < this.m.t; ++e) {
                        var i = 32767 & t[e]
                          , s = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                        for (i = e + this.m.t,
                        t[i] += this.m.am(0, s, t, e, 0, this.m.t); t[i] >= t.DV; )
                            t[i] -= t.DV,
                            t[++i]++
                    }
                    t.clamp(),
                    t.drShiftTo(this.m.t, t),
                    t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
                }
                function F(t, e) {
                    t.squareTo(e),
                    this.reduce(e)
                }
                function K(t, e, i) {
                    t.multiplyTo(e, i),
                    this.reduce(i)
                }
                function U() {
                    return 0 == (this.t > 0 ? 1 & this[0] : this.s)
                }
                function V(t, s) {
                    if (t > 4294967295 || 1 > t)
                        return e.ONE;
                    var n = i()
                      , r = i()
                      , o = s.convert(this)
                      , a = _(t) - 1;
                    for (o.copyTo(n); --a >= 0; )
                        if (s.sqrTo(n, r),
                        (t & 1 << a) > 0)
                            s.mulTo(r, o, n);
                        else {
                            var c = n;
                            n = r,
                            r = c
                        }
                    return s.revert(n)
                }
                function z(t, e) {
                    var i;
                    return i = 256 > t || e.isEven() ? new $(e) : new O(e),
                    this.exp(t, i)
                }
                function H() {
                    var t = i();
                    return this.copyTo(t),
                    t
                }
                function q() {
                    if (this.s < 0) {
                        if (1 == this.t)
                            return this[0] - this.DV;
                        if (0 == this.t)
                            return -1
                    } else {
                        if (1 == this.t)
                            return this[0];
                        if (0 == this.t)
                            return 0
                    }
                    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                }
                function G() {
                    return 0 == this.t ? this.s : this[0] << 24 >> 24
                }
                function J() {
                    return 0 == this.t ? this.s : this[0] << 16 >> 16
                }
                function Y(t) {
                    return Math.floor(Math.LN2 * this.DB / Math.log(t))
                }
                function W() {
                    return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                }
                function Z(t) {
                    if (null == t && (t = 10),
                    0 == this.signum() || 2 > t || t > 36)
                        return "0";
                    var e = this.chunkSize(t)
                      , s = Math.pow(t, e)
                      , n = u(s)
                      , r = i()
                      , o = i()
                      , a = "";
                    for (this.divRemTo(n, r, o); r.signum() > 0; )
                        a = (s + o.intValue()).toString(t).substr(1) + a,
                        r.divRemTo(n, r, o);
                    return o.intValue().toString(t) + a
                }
                function Q(t, i) {
                    this.fromInt(0),
                    null == i && (i = 10);
                    for (var s = this.chunkSize(i), n = Math.pow(i, s), r = !1, o = 0, c = 0, l = 0; l < t.length; ++l) {
                        var u = a(t, l);
                        0 > u ? "-" == t.charAt(l) && 0 == this.signum() && (r = !0) : (c = i * c + u,
                        ++o >= s && (this.dMultiply(n),
                        this.dAddOffset(c, 0),
                        o = 0,
                        c = 0))
                    }
                    o > 0 && (this.dMultiply(Math.pow(i, o)),
                    this.dAddOffset(c, 0)),
                    r && e.ZERO.subTo(this, this)
                }
                function X(t, i, s) {
                    if ("number" == typeof i)
                        if (2 > t)
                            this.fromInt(1);
                        else
                            for (this.fromNumber(t, s),
                            this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), at, this),
                            this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(i); )
                                this.dAddOffset(2, 0),
                                this.bitLength() > t && this.subTo(e.ONE.shiftLeft(t - 1), this);
                    else {
                        var n = new Array
                          , r = 7 & t;
                        n.length = (t >> 3) + 1,
                        i.nextBytes(n),
                        r > 0 ? n[0] &= (1 << r) - 1 : n[0] = 0,
                        this.fromString(n, 256)
                    }
                }
                function tt() {
                    var t = this.t
                      , e = new Array;
                    e[0] = this.s;
                    var i, s = this.DB - t * this.DB % 8, n = 0;
                    if (t-- > 0)
                        for (s < this.DB && (i = this[t] >> s) != (this.s & this.DM) >> s && (e[n++] = i | this.s << this.DB - s); t >= 0; )
                            8 > s ? (i = (this[t] & (1 << s) - 1) << 8 - s,
                            i |= this[--t] >> (s += this.DB - 8)) : (i = this[t] >> (s -= 8) & 255,
                            0 >= s && (s += this.DB,
                            --t)),
                            0 != (128 & i) && (i |= -256),
                            0 == n && (128 & this.s) != (128 & i) && ++n,
                            (n > 0 || i != this.s) && (e[n++] = i);
                    return e
                }
                function et(t) {
                    return 0 == this.compareTo(t)
                }
                function it(t) {
                    return this.compareTo(t) < 0 ? this : t
                }
                function st(t) {
                    return this.compareTo(t) > 0 ? this : t
                }
                function nt(t, e, i) {
                    var s, n, r = Math.min(t.t, this.t);
                    for (s = 0; r > s; ++s)
                        i[s] = e(this[s], t[s]);
                    if (t.t < this.t) {
                        for (n = t.s & this.DM,
                        s = r; s < this.t; ++s)
                            i[s] = e(this[s], n);
                        i.t = this.t
                    } else {
                        for (n = this.s & this.DM,
                        s = r; s < t.t; ++s)
                            i[s] = e(n, t[s]);
                        i.t = t.t
                    }
                    i.s = e(this.s, t.s),
                    i.clamp()
                }
                function rt(t, e) {
                    return t & e
                }
                function ot(t) {
                    var e = i();
                    return this.bitwiseTo(t, rt, e),
                    e
                }
                function at(t, e) {
                    return t | e
                }
                function ct(t) {
                    var e = i();
                    return this.bitwiseTo(t, at, e),
                    e
                }
                function lt(t, e) {
                    return t ^ e
                }
                function ut(t) {
                    var e = i();
                    return this.bitwiseTo(t, lt, e),
                    e
                }
                function dt(t, e) {
                    return t & ~e
                }
                function pt(t) {
                    var e = i();
                    return this.bitwiseTo(t, dt, e),
                    e
                }
                function ht() {
                    for (var t = i(), e = 0; e < this.t; ++e)
                        t[e] = this.DM & ~this[e];
                    return t.t = this.t,
                    t.s = ~this.s,
                    t
                }
                function ft(t) {
                    var e = i();
                    return 0 > t ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
                    e
                }
                function gt(t) {
                    var e = i();
                    return 0 > t ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
                    e
                }
                function mt(t) {
                    if (0 == t)
                        return -1;
                    var e = 0;
                    return 0 == (65535 & t) && (t >>= 16,
                    e += 16),
                    0 == (255 & t) && (t >>= 8,
                    e += 8),
                    0 == (15 & t) && (t >>= 4,
                    e += 4),
                    0 == (3 & t) && (t >>= 2,
                    e += 2),
                    0 == (1 & t) && ++e,
                    e
                }
                function vt() {
                    for (var t = 0; t < this.t; ++t)
                        if (0 != this[t])
                            return t * this.DB + mt(this[t]);
                    return this.s < 0 ? this.t * this.DB : -1
                }
                function _t(t) {
                    for (var e = 0; 0 != t; )
                        t &= t - 1,
                        ++e;
                    return e
                }
                function bt() {
                    for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i)
                        t += _t(this[i] ^ e);
                    return t
                }
                function yt(t) {
                    var e = Math.floor(t / this.DB);
                    return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
                }
                function wt(t, i) {
                    var s = e.ONE.shiftLeft(t);
                    return this.bitwiseTo(s, i, s),
                    s
                }
                function kt(t) {
                    return this.changeBit(t, at)
                }
                function Dt(t) {
                    return this.changeBit(t, dt)
                }
                function xt(t) {
                    return this.changeBit(t, lt)
                }
                function St(t, e) {
                    for (var i = 0, s = 0, n = Math.min(t.t, this.t); n > i; )
                        s += this[i] + t[i],
                        e[i++] = s & this.DM,
                        s >>= this.DB;
                    if (t.t < this.t) {
                        for (s += t.s; i < this.t; )
                            s += this[i],
                            e[i++] = s & this.DM,
                            s >>= this.DB;
                        s += this.s
                    } else {
                        for (s += this.s; i < t.t; )
                            s += t[i],
                            e[i++] = s & this.DM,
                            s >>= this.DB;
                        s += t.s
                    }
                    e.s = 0 > s ? -1 : 0,
                    s > 0 ? e[i++] = s : -1 > s && (e[i++] = this.DV + s),
                    e.t = i,
                    e.clamp()
                }
                function Ct(t) {
                    var e = i();
                    return this.addTo(t, e),
                    e
                }
                function Tt(t) {
                    var e = i();
                    return this.subTo(t, e),
                    e
                }
                function It(t) {
                    var e = i();
                    return this.multiplyTo(t, e),
                    e
                }
                function $t() {
                    var t = i();
                    return this.squareTo(t),
                    t
                }
                function Pt(t) {
                    var e = i();
                    return this.divRemTo(t, e, null),
                    e
                }
                function Rt(t) {
                    var e = i();
                    return this.divRemTo(t, null, e),
                    e
                }
                function At(t) {
                    var e = i()
                      , s = i();
                    return this.divRemTo(t, e, s),
                    new Array(e,s)
                }
                function Et(t) {
                    this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
                    ++this.t,
                    this.clamp()
                }
                function Mt(t, e) {
                    if (0 != t) {
                        for (; this.t <= e; )
                            this[this.t++] = 0;
                        for (this[e] += t; this[e] >= this.DV; )
                            this[e] -= this.DV,
                            ++e >= this.t && (this[this.t++] = 0),
                            ++this[e]
                    }
                }
                function Nt() {}
                function Ot(t) {
                    return t
                }
                function jt(t, e, i) {
                    t.multiplyTo(e, i)
                }
                function Bt(t, e) {
                    t.squareTo(e)
                }
                function Lt(t) {
                    return this.exp(t, new Nt)
                }
                function Ft(t, e, i) {
                    var s = Math.min(this.t + t.t, e);
                    for (i.s = 0,
                    i.t = s; s > 0; )
                        i[--s] = 0;
                    var n;
                    for (n = i.t - this.t; n > s; ++s)
                        i[s + this.t] = this.am(0, t[s], i, s, 0, this.t);
                    for (n = Math.min(t.t, e); n > s; ++s)
                        this.am(0, t[s], i, s, 0, e - s);
                    i.clamp()
                }
                function Kt(t, e, i) {
                    --e;
                    var s = i.t = this.t + t.t - e;
                    for (i.s = 0; --s >= 0; )
                        i[s] = 0;
                    for (s = Math.max(e - this.t, 0); s < t.t; ++s)
                        i[this.t + s - e] = this.am(e - s, t[s], i, 0, 0, this.t + s - e);
                    i.clamp(),
                    i.drShiftTo(1, i)
                }
                function Ut(t) {
                    this.r2 = i(),
                    this.q3 = i(),
                    e.ONE.dlShiftTo(2 * t.t, this.r2),
                    this.mu = this.r2.divide(t),
                    this.m = t
                }
                function Vt(t) {
                    if (t.s < 0 || t.t > 2 * this.m.t)
                        return t.mod(this.m);
                    if (t.compareTo(this.m) < 0)
                        return t;
                    var e = i();
                    return t.copyTo(e),
                    this.reduce(e),
                    e
                }
                function zt(t) {
                    return t
                }
                function Ht(t) {
                    for (t.drShiftTo(this.m.t - 1, this.r2),
                    t.t > this.m.t + 1 && (t.t = this.m.t + 1,
                    t.clamp()),
                    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                    this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; )
                        t.dAddOffset(1, this.m.t + 1);
                    for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
                        t.subTo(this.m, t)
                }
                function qt(t, e) {
                    t.squareTo(e),
                    this.reduce(e)
                }
                function Gt(t, e, i) {
                    t.multiplyTo(e, i),
                    this.reduce(i)
                }
                function Jt(t, e) {
                    var s, n, r = t.bitLength(), o = u(1);
                    if (0 >= r)
                        return o;
                    s = 18 > r ? 1 : 48 > r ? 3 : 144 > r ? 4 : 768 > r ? 5 : 6,
                    n = 8 > r ? new $(e) : e.isEven() ? new Ut(e) : new O(e);
                    var a = new Array
                      , c = 3
                      , l = s - 1
                      , d = (1 << s) - 1;
                    if (a[1] = n.convert(this),
                    s > 1) {
                        var p = i();
                        for (n.sqrTo(a[1], p); d >= c; )
                            a[c] = i(),
                            n.mulTo(p, a[c - 2], a[c]),
                            c += 2
                    }
                    var h, f, g = t.t - 1, m = !0, v = i();
                    for (r = _(t[g]) - 1; g >= 0; ) {
                        for (r >= l ? h = t[g] >> r - l & d : (h = (t[g] & (1 << r + 1) - 1) << l - r,
                        g > 0 && (h |= t[g - 1] >> this.DB + r - l)),
                        c = s; 0 == (1 & h); )
                            h >>= 1,
                            --c;
                        if ((r -= c) < 0 && (r += this.DB,
                        --g),
                        m)
                            a[h].copyTo(o),
                            m = !1;
                        else {
                            for (; c > 1; )
                                n.sqrTo(o, v),
                                n.sqrTo(v, o),
                                c -= 2;
                            c > 0 ? n.sqrTo(o, v) : (f = o,
                            o = v,
                            v = f),
                            n.mulTo(v, a[h], o)
                        }
                        for (; g >= 0 && 0 == (t[g] & 1 << r); )
                            n.sqrTo(o, v),
                            f = o,
                            o = v,
                            v = f,
                            --r < 0 && (r = this.DB - 1,
                            --g)
                    }
                    return n.revert(o)
                }
                function Yt(t) {
                    var e = this.s < 0 ? this.negate() : this.clone()
                      , i = t.s < 0 ? t.negate() : t.clone();
                    if (e.compareTo(i) < 0) {
                        var s = e;
                        e = i,
                        i = s
                    }
                    var n = e.getLowestSetBit()
                      , r = i.getLowestSetBit();
                    if (0 > r)
                        return e;
                    for (r > n && (r = n),
                    r > 0 && (e.rShiftTo(r, e),
                    i.rShiftTo(r, i)); e.signum() > 0; )
                        (n = e.getLowestSetBit()) > 0 && e.rShiftTo(n, e),
                        (n = i.getLowestSetBit()) > 0 && i.rShiftTo(n, i),
                        e.compareTo(i) >= 0 ? (e.subTo(i, e),
                        e.rShiftTo(1, e)) : (i.subTo(e, i),
                        i.rShiftTo(1, i));
                    return r > 0 && i.lShiftTo(r, i),
                    i
                }
                function Wt(t) {
                    if (0 >= t)
                        return 0;
                    var e = this.DV % t
                      , i = this.s < 0 ? t - 1 : 0;
                    if (this.t > 0)
                        if (0 == e)
                            i = this[0] % t;
                        else
                            for (var s = this.t - 1; s >= 0; --s)
                                i = (e * i + this[s]) % t;
                    return i
                }
                function Zt(t) {
                    var i = t.isEven();
                    if (this.isEven() && i || 0 == t.signum())
                        return e.ZERO;
                    for (var s = t.clone(), n = this.clone(), r = u(1), o = u(0), a = u(0), c = u(1); 0 != s.signum(); ) {
                        for (; s.isEven(); )
                            s.rShiftTo(1, s),
                            i ? (r.isEven() && o.isEven() || (r.addTo(this, r),
                            o.subTo(t, o)),
                            r.rShiftTo(1, r)) : o.isEven() || o.subTo(t, o),
                            o.rShiftTo(1, o);
                        for (; n.isEven(); )
                            n.rShiftTo(1, n),
                            i ? (a.isEven() && c.isEven() || (a.addTo(this, a),
                            c.subTo(t, c)),
                            a.rShiftTo(1, a)) : c.isEven() || c.subTo(t, c),
                            c.rShiftTo(1, c);
                        s.compareTo(n) >= 0 ? (s.subTo(n, s),
                        i && r.subTo(a, r),
                        o.subTo(c, o)) : (n.subTo(s, n),
                        i && a.subTo(r, a),
                        c.subTo(o, c))
                    }
                    return 0 != n.compareTo(e.ONE) ? e.ZERO : c.compareTo(t) >= 0 ? c.subtract(t) : c.signum() < 0 ? (c.addTo(t, c),
                    c.signum() < 0 ? c.add(t) : c) : c
                }
                function Qt(t) {
                    var e, i = this.abs();
                    if (1 == i.t && i[0] <= $e[$e.length - 1]) {
                        for (e = 0; e < $e.length; ++e)
                            if (i[0] == $e[e])
                                return !0;
                        return !1
                    }
                    if (i.isEven())
                        return !1;
                    for (e = 1; e < $e.length; ) {
                        for (var s = $e[e], n = e + 1; n < $e.length && Pe > s; )
                            s *= $e[n++];
                        for (s = i.modInt(s); n > e; )
                            if (s % $e[e++] == 0)
                                return !1
                    }
                    return i.millerRabin(t)
                }
                function Xt(t) {
                    var s = this.subtract(e.ONE)
                      , n = s.getLowestSetBit();
                    if (0 >= n)
                        return !1;
                    var r = s.shiftRight(n);
                    t = t + 1 >> 1,
                    t > $e.length && (t = $e.length);
                    for (var o = i(), a = 0; t > a; ++a) {
                        o.fromInt($e[Math.floor(Math.random() * $e.length)]);
                        var c = o.modPow(r, this);
                        if (0 != c.compareTo(e.ONE) && 0 != c.compareTo(s)) {
                            for (var l = 1; l++ < n && 0 != c.compareTo(s); )
                                if (c = c.modPowInt(2, this),
                                0 == c.compareTo(e.ONE))
                                    return !1;
                            if (0 != c.compareTo(s))
                                return !1
                        }
                    }
                    return !0
                }
                function te() {
                    this.i = 0,
                    this.j = 0,
                    this.S = new Array
                }
                function ee(t) {
                    var e, i, s;
                    for (e = 0; 256 > e; ++e)
                        this.S[e] = e;
                    for (i = 0,
                    e = 0; 256 > e; ++e)
                        i = i + this.S[e] + t[e % t.length] & 255,
                        s = this.S[e],
                        this.S[e] = this.S[i],
                        this.S[i] = s;
                    this.i = 0,
                    this.j = 0
                }
                function ie() {
                    var t;
                    return this.i = this.i + 1 & 255,
                    this.j = this.j + this.S[this.i] & 255,
                    t = this.S[this.i],
                    this.S[this.i] = this.S[this.j],
                    this.S[this.j] = t,
                    this.S[t + this.S[this.i] & 255]
                }
                function se() {
                    return new te
                }
                function ne() {
                    if (null == Re) {
                        for (Re = se(); Me > Ee; ) {
                            var t = Math.floor(65536 * Math.random());
                            Ae[Ee++] = 255 & t
                        }
                        for (Re.init(Ae),
                        Ee = 0; Ee < Ae.length; ++Ee)
                            Ae[Ee] = 0;
                        Ee = 0
                    }
                    return Re.next()
                }
                function re(t) {
                    var e;
                    for (e = 0; e < t.length; ++e)
                        t[e] = ne()
                }
                function oe() {}
                function ae(t, i) {
                    return new e(t,i)
                }
                function ce(t, i) {
                    if (i < t.length + 11)
                        return console.error("Message too long for RSA"),
                        null;
                    for (var s = new Array, n = t.length - 1; n >= 0 && i > 0; ) {
                        var r = t.charCodeAt(n--);
                        128 > r ? s[--i] = r : r > 127 && 2048 > r ? (s[--i] = 63 & r | 128,
                        s[--i] = r >> 6 | 192) : (s[--i] = 63 & r | 128,
                        s[--i] = r >> 6 & 63 | 128,
                        s[--i] = r >> 12 | 224)
                    }
                    s[--i] = 0;
                    for (var o = new oe, a = new Array; i > 2; ) {
                        for (a[0] = 0; 0 == a[0]; )
                            o.nextBytes(a);
                        s[--i] = a[0]
                    }
                    return s[--i] = 2,
                    s[--i] = 0,
                    new e(s)
                }
                function le() {
                    this.n = null,
                    this.e = 0,
                    this.d = null,
                    this.p = null,
                    this.q = null,
                    this.dmp1 = null,
                    this.dmq1 = null,
                    this.coeff = null
                }
                function ue(t, e) {
                    null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ae(t, 16),
                    this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
                }
                function de(t) {
                    return t.modPowInt(this.e, this.n)
                }
                function pe(t) {
                    var e = ce(t, this.n.bitLength() + 7 >> 3);
                    if (null == e)
                        return null;
                    var i = this.doPublic(e);
                    if (null == i)
                        return null;
                    var s = i.toString(16);
                    return 0 == (1 & s.length) ? s : "0" + s
                }
                function he(t, e) {
                    for (var i = t.toByteArray(), s = 0; s < i.length && 0 == i[s]; )
                        ++s;
                    if (i.length - s != e - 1 || 2 != i[s])
                        return null;
                    for (++s; 0 != i[s]; )
                        if (++s >= i.length)
                            return null;
                    for (var n = ""; ++s < i.length; ) {
                        var r = 255 & i[s];
                        128 > r ? n += String.fromCharCode(r) : r > 191 && 224 > r ? (n += String.fromCharCode((31 & r) << 6 | 63 & i[s + 1]),
                        ++s) : (n += String.fromCharCode((15 & r) << 12 | (63 & i[s + 1]) << 6 | 63 & i[s + 2]),
                        s += 2)
                    }
                    return n
                }
                function fe(t, e, i) {
                    null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ae(t, 16),
                    this.e = parseInt(e, 16),
                    this.d = ae(i, 16)) : console.error("Invalid RSA private key")
                }
                function ge(t, e, i, s, n, r, o, a) {
                    null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ae(t, 16),
                    this.e = parseInt(e, 16),
                    this.d = ae(i, 16),
                    this.p = ae(s, 16),
                    this.q = ae(n, 16),
                    this.dmp1 = ae(r, 16),
                    this.dmq1 = ae(o, 16),
                    this.coeff = ae(a, 16)) : console.error("Invalid RSA private key")
                }
                function me(t, i) {
                    var s = new oe
                      , n = t >> 1;
                    this.e = parseInt(i, 16);
                    for (var r = new e(i,16); ; ) {
                        for (; this.p = new e(t - n,1,s),
                        0 != this.p.subtract(e.ONE).gcd(r).compareTo(e.ONE) || !this.p.isProbablePrime(10); )
                            ;
                        for (; this.q = new e(n,1,s),
                        0 != this.q.subtract(e.ONE).gcd(r).compareTo(e.ONE) || !this.q.isProbablePrime(10); )
                            ;
                        if (this.p.compareTo(this.q) <= 0) {
                            var o = this.p;
                            this.p = this.q,
                            this.q = o
                        }
                        var a = this.p.subtract(e.ONE)
                          , c = this.q.subtract(e.ONE)
                          , l = a.multiply(c);
                        if (0 == l.gcd(r).compareTo(e.ONE)) {
                            this.n = this.p.multiply(this.q),
                            this.d = r.modInverse(l),
                            this.dmp1 = this.d.mod(a),
                            this.dmq1 = this.d.mod(c),
                            this.coeff = this.q.modInverse(this.p);
                            break
                        }
                    }
                }
                function ve(t) {
                    if (null == this.p || null == this.q)
                        return t.modPow(this.d, this.n);
                    for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(i) < 0; )
                        e = e.add(this.p);
                    return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)
                }
                function _e(t) {
                    var e = ae(t, 16)
                      , i = this.doPrivate(e);
                    return null == i ? null : he(i, this.n.bitLength() + 7 >> 3)
                }
                function be(t) {
                    var e, i, s = "";
                    for (e = 0; e + 3 <= t.length; e += 3)
                        i = parseInt(t.substring(e, e + 3), 16),
                        s += Be.charAt(i >> 6) + Be.charAt(63 & i);
                    for (e + 1 == t.length ? (i = parseInt(t.substring(e, e + 1), 16),
                    s += Be.charAt(i << 2)) : e + 2 == t.length && (i = parseInt(t.substring(e, e + 2), 16),
                    s += Be.charAt(i >> 2) + Be.charAt((3 & i) << 4)); (3 & s.length) > 0; )
                        s += Le;
                    return s
                }
                function ye(t) {
                    var e, i, s = "", n = 0;
                    for (e = 0; e < t.length && t.charAt(e) != Le; ++e)
                        v = Be.indexOf(t.charAt(e)),
                        v < 0 || (0 == n ? (s += o(v >> 2),
                        i = 3 & v,
                        n = 1) : 1 == n ? (s += o(i << 2 | v >> 4),
                        i = 15 & v,
                        n = 2) : 2 == n ? (s += o(i),
                        s += o(v >> 2),
                        i = 3 & v,
                        n = 3) : (s += o(i << 2 | v >> 4),
                        s += o(15 & v),
                        n = 0));
                    return 1 == n && (s += o(i << 2)),
                    s
                }
                var we, ke = 0xdeadbeefcafe, De = 15715070 == (16777215 & ke);
                De && "Microsoft Internet Explorer" == navigator.appName ? (e.prototype.am = n,
                we = 30) : De && "Netscape" != navigator.appName ? (e.prototype.am = s,
                we = 26) : (e.prototype.am = r,
                we = 28),
                e.prototype.DB = we,
                e.prototype.DM = (1 << we) - 1,
                e.prototype.DV = 1 << we;
                var xe = 52;
                e.prototype.FV = Math.pow(2, xe),
                e.prototype.F1 = xe - we,
                e.prototype.F2 = 2 * we - xe;
                var Se, Ce, Te = "0123456789abcdefghijklmnopqrstuvwxyz", Ie = new Array;
                for (Se = "0".charCodeAt(0),
                Ce = 0; 9 >= Ce; ++Ce)
                    Ie[Se++] = Ce;
                for (Se = "a".charCodeAt(0),
                Ce = 10; 36 > Ce; ++Ce)
                    Ie[Se++] = Ce;
                for (Se = "A".charCodeAt(0),
                Ce = 10; 36 > Ce; ++Ce)
                    Ie[Se++] = Ce;
                $.prototype.convert = P,
                $.prototype.revert = R,
                $.prototype.reduce = A,
                $.prototype.mulTo = E,
                $.prototype.sqrTo = M,
                O.prototype.convert = j,
                O.prototype.revert = B,
                O.prototype.reduce = L,
                O.prototype.mulTo = K,
                O.prototype.sqrTo = F,
                e.prototype.copyTo = c,
                e.prototype.fromInt = l,
                e.prototype.fromString = d,
                e.prototype.clamp = p,
                e.prototype.dlShiftTo = y,
                e.prototype.drShiftTo = w,
                e.prototype.lShiftTo = k,
                e.prototype.rShiftTo = D,
                e.prototype.subTo = x,
                e.prototype.multiplyTo = S,
                e.prototype.squareTo = C,
                e.prototype.divRemTo = T,
                e.prototype.invDigit = N,
                e.prototype.isEven = U,
                e.prototype.exp = V,
                e.prototype.toString = h,
                e.prototype.negate = f,
                e.prototype.abs = g,
                e.prototype.compareTo = m,
                e.prototype.bitLength = b,
                e.prototype.mod = I,
                e.prototype.modPowInt = z,
                e.ZERO = u(0),
                e.ONE = u(1),
                Nt.prototype.convert = Ot,
                Nt.prototype.revert = Ot,
                Nt.prototype.mulTo = jt,
                Nt.prototype.sqrTo = Bt,
                Ut.prototype.convert = Vt,
                Ut.prototype.revert = zt,
                Ut.prototype.reduce = Ht,
                Ut.prototype.mulTo = Gt,
                Ut.prototype.sqrTo = qt;
                var $e = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]
                  , Pe = (1 << 26) / $e[$e.length - 1];
                e.prototype.chunkSize = Y,
                e.prototype.toRadix = Z,
                e.prototype.fromRadix = Q,
                e.prototype.fromNumber = X,
                e.prototype.bitwiseTo = nt,
                e.prototype.changeBit = wt,
                e.prototype.addTo = St,
                e.prototype.dMultiply = Et,
                e.prototype.dAddOffset = Mt,
                e.prototype.multiplyLowerTo = Ft,
                e.prototype.multiplyUpperTo = Kt,
                e.prototype.modInt = Wt,
                e.prototype.millerRabin = Xt,
                e.prototype.clone = H,
                e.prototype.intValue = q,
                e.prototype.byteValue = G,
                e.prototype.shortValue = J,
                e.prototype.signum = W,
                e.prototype.toByteArray = tt,
                e.prototype.equals = et,
                e.prototype.min = it,
                e.prototype.max = st,
                e.prototype.and = ot,
                e.prototype.or = ct,
                e.prototype.xor = ut,
                e.prototype.andNot = pt,
                e.prototype.not = ht,
                e.prototype.shiftLeft = ft,
                e.prototype.shiftRight = gt,
                e.prototype.getLowestSetBit = vt,
                e.prototype.bitCount = bt,
                e.prototype.testBit = yt,
                e.prototype.setBit = kt,
                e.prototype.clearBit = Dt,
                e.prototype.flipBit = xt,
                e.prototype.add = Ct,
                e.prototype.subtract = Tt,
                e.prototype.multiply = It,
                e.prototype.divide = Pt,
                e.prototype.remainder = Rt,
                e.prototype.divideAndRemainder = At,
                e.prototype.modPow = Jt,
                e.prototype.modInverse = Zt,
                e.prototype.pow = Lt,
                e.prototype.gcd = Yt,
                e.prototype.isProbablePrime = Qt,
                e.prototype.square = $t,
                te.prototype.init = ee,
                te.prototype.next = ie;
                var Re, Ae, Ee, Me = 256;
                if (null == Ae) {
                    Ae = new Array,
                    Ee = 0;
                    var Ne;
                    if (window.crypto && window.crypto.getRandomValues) {
                        var Oe = new Uint32Array(256);
                        for (window.crypto.getRandomValues(Oe),
                        Ne = 0; Ne < Oe.length; ++Ne)
                            Ae[Ee++] = 255 & Oe[Ne]
                    }
                    var je = function(t) {
                        if (this.count = this.count || 0,
                        this.count >= 256 || Ee >= Me)
                            return void (window.removeEventListener ? window.removeEventListener("mousemove", je, !1) : window.detachEvent && window.detachEvent("onmousemove", je));
                        try {
                            var e = t.x + t.y;
                            Ae[Ee++] = 255 & e,
                            this.count += 1
                        } catch (t) {}
                    };
                    window.addEventListener ? window.addEventListener("mousemove", je, !1) : window.attachEvent && window.attachEvent("onmousemove", je)
                }
                oe.prototype.nextBytes = re,
                le.prototype.doPublic = de,
                le.prototype.setPublic = ue,
                le.prototype.encrypt = pe,
                le.prototype.doPrivate = ve,
                le.prototype.setPrivate = fe,
                le.prototype.setPrivateEx = ge,
                le.prototype.generate = me,
                le.prototype.decrypt = _e,
                function() {
                    var t = function(t, s, n) {
                        var r = new oe
                          , o = t >> 1;
                        this.e = parseInt(s, 16);
                        var a = new e(s,16)
                          , c = this
                          , l = function() {
                            var s = function() {
                                if (c.p.compareTo(c.q) <= 0) {
                                    var t = c.p;
                                    c.p = c.q,
                                    c.q = t
                                }
                                var i = c.p.subtract(e.ONE)
                                  , s = c.q.subtract(e.ONE)
                                  , r = i.multiply(s);
                                0 == r.gcd(a).compareTo(e.ONE) ? (c.n = c.p.multiply(c.q),
                                c.d = a.modInverse(r),
                                c.dmp1 = c.d.mod(i),
                                c.dmq1 = c.d.mod(s),
                                c.coeff = c.q.modInverse(c.p),
                                setTimeout(function() {
                                    n()
                                }, 0)) : setTimeout(l, 0)
                            }
                              , u = function() {
                                c.q = i(),
                                c.q.fromNumberAsync(o, 1, r, function() {
                                    c.q.subtract(e.ONE).gcda(a, function(t) {
                                        0 == t.compareTo(e.ONE) && c.q.isProbablePrime(10) ? setTimeout(s, 0) : setTimeout(u, 0)
                                    })
                                })
                            }
                              , d = function() {
                                c.p = i(),
                                c.p.fromNumberAsync(t - o, 1, r, function() {
                                    c.p.subtract(e.ONE).gcda(a, function(t) {
                                        0 == t.compareTo(e.ONE) && c.p.isProbablePrime(10) ? setTimeout(u, 0) : setTimeout(d, 0)
                                    })
                                })
                            };
                            setTimeout(d, 0)
                        };
                        setTimeout(l, 0)
                    };
                    le.prototype.generateAsync = t;
                    var s = function(t, e) {
                        var i = this.s < 0 ? this.negate() : this.clone()
                          , s = t.s < 0 ? t.negate() : t.clone();
                        if (i.compareTo(s) < 0) {
                            var n = i;
                            i = s,
                            s = n
                        }
                        var r = i.getLowestSetBit()
                          , o = s.getLowestSetBit();
                        if (0 > o)
                            return void e(i);
                        o > r && (o = r),
                        o > 0 && (i.rShiftTo(o, i),
                        s.rShiftTo(o, s));
                        var a = function() {
                            (r = i.getLowestSetBit()) > 0 && i.rShiftTo(r, i),
                            (r = s.getLowestSetBit()) > 0 && s.rShiftTo(r, s),
                            i.compareTo(s) >= 0 ? (i.subTo(s, i),
                            i.rShiftTo(1, i)) : (s.subTo(i, s),
                            s.rShiftTo(1, s)),
                            i.signum() > 0 ? setTimeout(a, 0) : (o > 0 && s.lShiftTo(o, s),
                            setTimeout(function() {
                                e(s)
                            }, 0))
                        };
                        setTimeout(a, 10)
                    };
                    e.prototype.gcda = s;
                    var n = function(t, i, s, n) {
                        if ("number" == typeof i)
                            if (2 > t)
                                this.fromInt(1);
                            else {
                                this.fromNumber(t, s),
                                this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), at, this),
                                this.isEven() && this.dAddOffset(1, 0);
                                var r = this
                                  , o = function() {
                                    r.dAddOffset(2, 0),
                                    r.bitLength() > t && r.subTo(e.ONE.shiftLeft(t - 1), r),
                                    r.isProbablePrime(i) ? setTimeout(function() {
                                        n()
                                    }, 0) : setTimeout(o, 0)
                                };
                                setTimeout(o, 0)
                            }
                        else {
                            var a = new Array
                              , c = 7 & t;
                            a.length = (t >> 3) + 1,
                            i.nextBytes(a),
                            c > 0 ? a[0] &= (1 << c) - 1 : a[0] = 0,
                            this.fromString(a, 256)
                        }
                    };
                    e.prototype.fromNumberAsync = n
                }();
                var Be = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                  , Le = "="
                  , Fe = Fe || {};
                Fe.env = Fe.env || {};
                var Ke = Fe
                  , Ue = Object.prototype
                  , Ve = "[object Function]"
                  , ze = ["toString", "valueOf"];
                Fe.env.parseUA = function(t) {
                    var e, i = function(t) {
                        var e = 0;
                        return parseFloat(t.replace(/\./g, function() {
                            return 1 == e++ ? "" : "."
                        }))
                    }, s = navigator, n = {
                        ie: 0,
                        opera: 0,
                        gecko: 0,
                        webkit: 0,
                        chrome: 0,
                        mobile: null,
                        air: 0,
                        ipad: 0,
                        iphone: 0,
                        ipod: 0,
                        ios: null,
                        android: 0,
                        webos: 0,
                        caja: s && s.cajaVersion,
                        secure: !1,
                        os: null
                    }, r = t || navigator && navigator.userAgent, o = window && window.location, a = o && o.href;
                    return n.secure = a && 0 === a.toLowerCase().indexOf("https"),
                    r && (/windows|win32/i.test(r) ? n.os = "windows" : /macintosh/i.test(r) ? n.os = "macintosh" : /rhino/i.test(r) && (n.os = "rhino"),
                    /KHTML/.test(r) && (n.webkit = 1),
                    e = r.match(/AppleWebKit\/([^\s]*)/),
                    e && e[1] && (n.webkit = i(e[1]),
                    / Mobile\//.test(r) ? (n.mobile = "Apple",
                    e = r.match(/OS ([^\s]*)/),
                    e && e[1] && (e = i(e[1].replace("_", "."))),
                    n.ios = e,
                    n.ipad = n.ipod = n.iphone = 0,
                    e = r.match(/iPad|iPod|iPhone/),
                    e && e[0] && (n[e[0].toLowerCase()] = n.ios)) : (e = r.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/),
                    e && (n.mobile = e[0]),
                    /webOS/.test(r) && (n.mobile = "WebOS",
                    e = r.match(/webOS\/([^\s]*);/),
                    e && e[1] && (n.webos = i(e[1]))),
                    / Android/.test(r) && (n.mobile = "Android",
                    e = r.match(/Android ([^\s]*);/),
                    e && e[1] && (n.android = i(e[1])))),
                    e = r.match(/Chrome\/([^\s]*)/),
                    e && e[1] ? n.chrome = i(e[1]) : (e = r.match(/AdobeAIR\/([^\s]*)/),
                    e && (n.air = e[0]))),
                    n.webkit || (e = r.match(/Opera[\s\/]([^\s]*)/),
                    e && e[1] ? (n.opera = i(e[1]),
                    e = r.match(/Version\/([^\s]*)/),
                    e && e[1] && (n.opera = i(e[1])),
                    e = r.match(/Opera Mini[^;]*/),
                    e && (n.mobile = e[0])) : (e = r.match(/MSIE\s([^;]*)/),
                    e && e[1] ? n.ie = i(e[1]) : (e = r.match(/Gecko\/([^\s]*)/),
                    e && (n.gecko = 1,
                    e = r.match(/rv:([^\s\)]*)/),
                    e && e[1] && (n.gecko = i(e[1]))))))),
                    n
                }
                ,
                Fe.env.ua = Fe.env.parseUA(),
                Fe.isFunction = function(t) {
                    return "function" == typeof t || Ue.toString.apply(t) === Ve
                }
                ,
                Fe._IEEnumFix = Fe.env.ua.ie ? function(t, e) {
                    var i, s, n;
                    for (i = 0; i < ze.length; i += 1)
                        s = ze[i],
                        n = e[s],
                        Ke.isFunction(n) && n != Ue[s] && (t[s] = n)
                }
                : function() {}
                ,
                Fe.extend = function(t, e, i) {
                    if (!e || !t)
                        throw new Error("extend failed, please check that all dependencies are included.");
                    var s, n = function() {};
                    if (n.prototype = e.prototype,
                    t.prototype = new n,
                    t.prototype.constructor = t,
                    t.superclass = e.prototype,
                    e.prototype.constructor == Ue.constructor && (e.prototype.constructor = e),
                    i) {
                        for (s in i)
                            Ke.hasOwnProperty(i, s) && (t.prototype[s] = i[s]);
                        Ke._IEEnumFix(t.prototype, i)
                    }
                }
                ,
                /**
	 * @fileOverview
	 * @name asn1-1.0.js
	 * @author Kenji Urushima kenji.urushima@gmail.com
	 * @version 1.0.2 (2013-May-30)
	 * @since 2.1
	 * @license <a href="//kjur.github.io/jsrsasign/license/">MIT License</a>
	 */
                "undefined" != typeof KJUR && KJUR || (KJUR = {}),
                "undefined" != typeof KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}),
                KJUR.asn1.ASN1Util = new function() {
                    this.integerToByteHex = function(t) {
                        var e = t.toString(16);
                        return e.length % 2 == 1 && (e = "0" + e),
                        e
                    }
                    ,
                    this.bigIntToMinTwosComplementsHex = function(t) {
                        var i = t.toString(16);
                        if ("-" != i.substr(0, 1))
                            i.length % 2 == 1 ? i = "0" + i : i.match(/^[0-7]/) || (i = "00" + i);
                        else {
                            var s = i.substr(1)
                              , n = s.length;
                            n % 2 == 1 ? n += 1 : i.match(/^[0-7]/) || (n += 2);
                            for (var r = "", o = 0; n > o; o++)
                                r += "f";
                            var a = new e(r,16)
                              , c = a.xor(t).add(e.ONE);
                            i = c.toString(16).replace(/^-/, "")
                        }
                        return i
                    }
                    ,
                    this.getPEMStringFromHex = function(t, e) {
                        var i = CryptoJS.enc.Hex.parse(t)
                          , s = CryptoJS.enc.Base64.stringify(i)
                          , n = s.replace(/(.{64})/g, "$1\r\n");
                        return n = n.replace(/\r\n$/, ""),
                        "-----BEGIN " + e + "-----\r\n" + n + "\r\n-----END " + e + "-----\r\n"
                    }
                }
                ,
                KJUR.asn1.ASN1Object = function() {
                    var t = "";
                    this.getLengthHexFromValue = function() {
                        if ("undefined" == typeof this.hV || null == this.hV)
                            throw "this.hV is null or undefined.";
                        if (this.hV.length % 2 == 1)
                            throw "value hex must be even length: n=" + t.length + ",v=" + this.hV;
                        var e = this.hV.length / 2
                          , i = e.toString(16);
                        if (i.length % 2 == 1 && (i = "0" + i),
                        128 > e)
                            return i;
                        var s = i.length / 2;
                        if (s > 15)
                            throw "ASN.1 length too long to represent by 8x: n = " + e.toString(16);
                        var n = 128 + s;
                        return n.toString(16) + i
                    }
                    ,
                    this.getEncodedHex = function() {
                        return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(),
                        this.hL = this.getLengthHexFromValue(),
                        this.hTLV = this.hT + this.hL + this.hV,
                        this.isModified = !1),
                        this.hTLV
                    }
                    ,
                    this.getValueHex = function() {
                        return this.getEncodedHex(),
                        this.hV
                    }
                    ,
                    this.getFreshValueHex = function() {
                        return ""
                    }
                }
                ,
                KJUR.asn1.DERAbstractString = function(t) {
                    KJUR.asn1.DERAbstractString.superclass.constructor.call(this),
                    this.getString = function() {
                        return this.s
                    }
                    ,
                    this.setString = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.s = t,
                        this.hV = stohex(this.s)
                    }
                    ,
                    this.setStringHex = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.s = null,
                        this.hV = t
                    }
                    ,
                    this.getFreshValueHex = function() {
                        return this.hV
                    }
                    ,
                    "undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex && this.setStringHex(t.hex))
                }
                ,
                Fe.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object),
                KJUR.asn1.DERAbstractTime = function(t) {
                    KJUR.asn1.DERAbstractTime.superclass.constructor.call(this),
                    this.localDateToUTC = function(t) {
                        utc = t.getTime() + 6e4 * t.getTimezoneOffset();
                        var e = new Date(utc);
                        return e
                    }
                    ,
                    this.formatDate = function(t, e) {
                        var i = this.zeroPadding
                          , s = this.localDateToUTC(t)
                          , n = String(s.getFullYear());
                        "utc" == e && (n = n.substr(2, 2));
                        var r = i(String(s.getMonth() + 1), 2)
                          , o = i(String(s.getDate()), 2)
                          , a = i(String(s.getHours()), 2)
                          , c = i(String(s.getMinutes()), 2)
                          , l = i(String(s.getSeconds()), 2);
                        return n + r + o + a + c + l + "Z"
                    }
                    ,
                    this.zeroPadding = function(t, e) {
                        return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
                    }
                    ,
                    this.getString = function() {
                        return this.s
                    }
                    ,
                    this.setString = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.s = t,
                        this.hV = stohex(this.s)
                    }
                    ,
                    this.setByDateValue = function(t, e, i, s, n, r) {
                        var o = new Date(Date.UTC(t, e - 1, i, s, n, r, 0));
                        this.setByDate(o)
                    }
                    ,
                    this.getFreshValueHex = function() {
                        return this.hV
                    }
                }
                ,
                Fe.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object),
                KJUR.asn1.DERAbstractStructured = function(t) {
                    KJUR.asn1.DERAbstractString.superclass.constructor.call(this),
                    this.setByASN1ObjectArray = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.asn1Array = t
                    }
                    ,
                    this.appendASN1Object = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.asn1Array.push(t)
                    }
                    ,
                    this.asn1Array = new Array,
                    "undefined" != typeof t && "undefined" != typeof t.array && (this.asn1Array = t.array)
                }
                ,
                Fe.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object),
                KJUR.asn1.DERBoolean = function() {
                    KJUR.asn1.DERBoolean.superclass.constructor.call(this),
                    this.hT = "01",
                    this.hTLV = "0101ff"
                }
                ,
                Fe.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object),
                KJUR.asn1.DERInteger = function(t) {
                    KJUR.asn1.DERInteger.superclass.constructor.call(this),
                    this.hT = "02",
                    this.setByBigInteger = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                    }
                    ,
                    this.setByInteger = function(t) {
                        var i = new e(String(t),10);
                        this.setByBigInteger(i)
                    }
                    ,
                    this.setValueHex = function(t) {
                        this.hV = t
                    }
                    ,
                    this.getFreshValueHex = function() {
                        return this.hV
                    }
                    ,
                    "undefined" != typeof t && ("undefined" != typeof t.bigint ? this.setByBigInteger(t.bigint) : "undefined" != typeof t.int ? this.setByInteger(t.int) : "undefined" != typeof t.hex && this.setValueHex(t.hex))
                }
                ,
                Fe.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object),
                KJUR.asn1.DERBitString = function(t) {
                    KJUR.asn1.DERBitString.superclass.constructor.call(this),
                    this.hT = "03",
                    this.setHexValueIncludingUnusedBits = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.hV = t
                    }
                    ,
                    this.setUnusedBitsAndHexValue = function(t, e) {
                        if (0 > t || t > 7)
                            throw "unused bits shall be from 0 to 7: u = " + t;
                        var i = "0" + t;
                        this.hTLV = null,
                        this.isModified = !0,
                        this.hV = i + e
                    }
                    ,
                    this.setByBinaryString = function(t) {
                        t = t.replace(/0+$/, "");
                        var e = 8 - t.length % 8;
                        8 == e && (e = 0);
                        for (var i = 0; e >= i; i++)
                            t += "0";
                        for (var s = "", i = 0; i < t.length - 1; i += 8) {
                            var n = t.substr(i, 8)
                              , r = parseInt(n, 2).toString(16);
                            1 == r.length && (r = "0" + r),
                            s += r
                        }
                        this.hTLV = null,
                        this.isModified = !0,
                        this.hV = "0" + e + s
                    }
                    ,
                    this.setByBooleanArray = function(t) {
                        for (var e = "", i = 0; i < t.length; i++)
                            e += 1 == t[i] ? "1" : "0";
                        this.setByBinaryString(e)
                    }
                    ,
                    this.newFalseArray = function(t) {
                        for (var e = new Array(t), i = 0; t > i; i++)
                            e[i] = !1;
                        return e
                    }
                    ,
                    this.getFreshValueHex = function() {
                        return this.hV
                    }
                    ,
                    "undefined" != typeof t && ("undefined" != typeof t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : "undefined" != typeof t.bin ? this.setByBinaryString(t.bin) : "undefined" != typeof t.array && this.setByBooleanArray(t.array))
                }
                ,
                Fe.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object),
                KJUR.asn1.DEROctetString = function(t) {
                    KJUR.asn1.DEROctetString.superclass.constructor.call(this, t),
                    this.hT = "04"
                }
                ,
                Fe.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString),
                KJUR.asn1.DERNull = function() {
                    KJUR.asn1.DERNull.superclass.constructor.call(this),
                    this.hT = "05",
                    this.hTLV = "0500"
                }
                ,
                Fe.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object),
                KJUR.asn1.DERObjectIdentifier = function(t) {
                    var i = function(t) {
                        var e = t.toString(16);
                        return 1 == e.length && (e = "0" + e),
                        e
                    }
                      , s = function(t) {
                        var s = ""
                          , n = new e(t,10)
                          , r = n.toString(2)
                          , o = 7 - r.length % 7;
                        7 == o && (o = 0);
                        for (var a = "", c = 0; o > c; c++)
                            a += "0";
                        r = a + r;
                        for (var c = 0; c < r.length - 1; c += 7) {
                            var l = r.substr(c, 7);
                            c != r.length - 7 && (l = "1" + l),
                            s += i(parseInt(l, 2))
                        }
                        return s
                    };
                    KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this),
                    this.hT = "06",
                    this.setValueHex = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.s = null,
                        this.hV = t
                    }
                    ,
                    this.setValueOidString = function(t) {
                        if (!t.match(/^[0-9.]+$/))
                            throw "malformed oid string: " + t;
                        var e = ""
                          , n = t.split(".")
                          , r = 40 * parseInt(n[0]) + parseInt(n[1]);
                        e += i(r),
                        n.splice(0, 2);
                        for (var o = 0; o < n.length; o++)
                            e += s(n[o]);
                        this.hTLV = null,
                        this.isModified = !0,
                        this.s = null,
                        this.hV = e
                    }
                    ,
                    this.setValueName = function(t) {
                        if ("undefined" == typeof KJUR.asn1.x509.OID.name2oidList[t])
                            throw "DERObjectIdentifier oidName undefined: " + t;
                        var e = KJUR.asn1.x509.OID.name2oidList[t];
                        this.setValueOidString(e)
                    }
                    ,
                    this.getFreshValueHex = function() {
                        return this.hV
                    }
                    ,
                    "undefined" != typeof t && ("undefined" != typeof t.oid ? this.setValueOidString(t.oid) : "undefined" != typeof t.hex ? this.setValueHex(t.hex) : "undefined" != typeof t.name && this.setValueName(t.name))
                }
                ,
                Fe.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object),
                KJUR.asn1.DERUTF8String = function(t) {
                    KJUR.asn1.DERUTF8String.superclass.constructor.call(this, t),
                    this.hT = "0c"
                }
                ,
                Fe.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString),
                KJUR.asn1.DERNumericString = function(t) {
                    KJUR.asn1.DERNumericString.superclass.constructor.call(this, t),
                    this.hT = "12"
                }
                ,
                Fe.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString),
                KJUR.asn1.DERPrintableString = function(t) {
                    KJUR.asn1.DERPrintableString.superclass.constructor.call(this, t),
                    this.hT = "13"
                }
                ,
                Fe.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString),
                KJUR.asn1.DERTeletexString = function(t) {
                    KJUR.asn1.DERTeletexString.superclass.constructor.call(this, t),
                    this.hT = "14"
                }
                ,
                Fe.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString),
                KJUR.asn1.DERIA5String = function(t) {
                    KJUR.asn1.DERIA5String.superclass.constructor.call(this, t),
                    this.hT = "16"
                }
                ,
                Fe.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString),
                KJUR.asn1.DERUTCTime = function(t) {
                    KJUR.asn1.DERUTCTime.superclass.constructor.call(this, t),
                    this.hT = "17",
                    this.setByDate = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.date = t,
                        this.s = this.formatDate(this.date, "utc"),
                        this.hV = stohex(this.s)
                    }
                    ,
                    "undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex ? this.setStringHex(t.hex) : "undefined" != typeof t.date && this.setByDate(t.date))
                }
                ,
                Fe.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime),
                KJUR.asn1.DERGeneralizedTime = function(t) {
                    KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
                    this.hT = "18",
                    this.setByDate = function(t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.date = t,
                        this.s = this.formatDate(this.date, "gen"),
                        this.hV = stohex(this.s)
                    }
                    ,
                    "undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex ? this.setStringHex(t.hex) : "undefined" != typeof t.date && this.setByDate(t.date))
                }
                ,
                Fe.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime),
                KJUR.asn1.DERSequence = function(t) {
                    KJUR.asn1.DERSequence.superclass.constructor.call(this, t),
                    this.hT = "30",
                    this.getFreshValueHex = function() {
                        for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                            var i = this.asn1Array[e];
                            t += i.getEncodedHex()
                        }
                        return this.hV = t,
                        this.hV
                    }
                }
                ,
                Fe.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured),
                KJUR.asn1.DERSet = function(t) {
                    KJUR.asn1.DERSet.superclass.constructor.call(this, t),
                    this.hT = "31",
                    this.getFreshValueHex = function() {
                        for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                            var i = this.asn1Array[e];
                            t.push(i.getEncodedHex())
                        }
                        return t.sort(),
                        this.hV = t.join(""),
                        this.hV
                    }
                }
                ,
                Fe.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured),
                KJUR.asn1.DERTaggedObject = function(t) {
                    KJUR.asn1.DERTaggedObject.superclass.constructor.call(this),
                    this.hT = "a0",
                    this.hV = "",
                    this.isExplicit = !0,
                    this.asn1Object = null,
                    this.setASN1Object = function(t, e, i) {
                        this.hT = e,
                        this.isExplicit = t,
                        this.asn1Object = i,
                        this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(),
                        this.hTLV = null,
                        this.isModified = !0) : (this.hV = null,
                        this.hTLV = i.getEncodedHex(),
                        this.hTLV = this.hTLV.replace(/^../, e),
                        this.isModified = !1)
                    }
                    ,
                    this.getFreshValueHex = function() {
                        return this.hV
                    }
                    ,
                    "undefined" != typeof t && ("undefined" != typeof t.tag && (this.hT = t.tag),
                    "undefined" != typeof t.explicit && (this.isExplicit = t.explicit),
                    "undefined" != typeof t.obj && (this.asn1Object = t.obj,
                    this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
                }
                ,
                Fe.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object),
                function(t) {
                    "use strict";
                    var e, i = {};
                    i.decode = function(i) {
                        var s;
                        if (e === t) {
                            var n = "0123456789ABCDEF"
                              , r = " \f\n\r     \u2028\u2029";
                            for (e = [],
                            s = 0; 16 > s; ++s)
                                e[n.charAt(s)] = s;
                            for (n = n.toLowerCase(),
                            s = 10; 16 > s; ++s)
                                e[n.charAt(s)] = s;
                            for (s = 0; s < r.length; ++s)
                                e[r.charAt(s)] = -1
                        }
                        var o = []
                          , a = 0
                          , c = 0;
                        for (s = 0; s < i.length; ++s) {
                            var l = i.charAt(s);
                            if ("=" == l)
                                break;
                            if (l = e[l],
                            -1 != l) {
                                if (l === t)
                                    throw "Illegal character at offset " + s;
                                a |= l,
                                ++c >= 2 ? (o[o.length] = a,
                                a = 0,
                                c = 0) : a <<= 4
                            }
                        }
                        if (c)
                            throw "Hex encoding incomplete: 4 bits missing";
                        return o
                    }
                    ,
                    window.Hex = i
                }(),
                function(t) {
                    "use strict";
                    var e, i = {};
                    i.decode = function(i) {
                        var s;
                        if (e === t) {
                            var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                              , r = "= \f\n\r    \u2028\u2029";
                            for (e = [],
                            s = 0; 64 > s; ++s)
                                e[n.charAt(s)] = s;
                            for (s = 0; s < r.length; ++s)
                                e[r.charAt(s)] = -1
                        }
                        var o = []
                          , a = 0
                          , c = 0;
                        for (s = 0; s < i.length; ++s) {
                            var l = i.charAt(s);
                            if ("=" == l)
                                break;
                            if (l = e[l],
                            -1 != l) {
                                if (l === t)
                                    throw "Illegal character at offset " + s;
                                a |= l,
                                ++c >= 4 ? (o[o.length] = a >> 16,
                                o[o.length] = a >> 8 & 255,
                                o[o.length] = 255 & a,
                                a = 0,
                                c = 0) : a <<= 6
                            }
                        }
                        switch (c) {
                        case 1:
                            throw "Base64 encoding incomplete: at least 2 bits missing";
                        case 2:
                            o[o.length] = a >> 10;
                            break;
                        case 3:
                            o[o.length] = a >> 16,
                            o[o.length] = a >> 8 & 255
                        }
                        return o
                    }
                    ,
                    i.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
                    i.unarmor = function(t) {
                        var e = i.re.exec(t);
                        if (e)
                            if (e[1])
                                t = e[1];
                            else {
                                if (!e[2])
                                    throw "RegExp out of sync";
                                t = e[2]
                            }
                        return i.decode(t)
                    }
                    ,
                    window.Base64 = i
                }(),
                function(t) {
                    "use strict";
                    function e(t, i) {
                        t instanceof e ? (this.enc = t.enc,
                        this.pos = t.pos) : (this.enc = t,
                        this.pos = i)
                    }
                    function i(t, e, i, s, n) {
                        this.stream = t,
                        this.header = e,
                        this.length = i,
                        this.tag = s,
                        this.sub = n
                    }
                    var s = 100
                      , n = "…"
                      , r = {
                        tag: function(t, e) {
                            var i = document.createElement(t);
                            return i.className = e,
                            i
                        },
                        text: function(t) {
                            return document.createTextNode(t)
                        }
                    };
                    e.prototype.get = function(e) {
                        if (e === t && (e = this.pos++),
                        e >= this.enc.length)
                            throw "Requesting byte offset " + e + " on a stream of length " + this.enc.length;
                        return this.enc[e]
                    }
                    ,
                    e.prototype.hexDigits = "0123456789ABCDEF",
                    e.prototype.hexByte = function(t) {
                        return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
                    }
                    ,
                    e.prototype.hexDump = function(t, e, i) {
                        for (var s = "", n = t; e > n; ++n)
                            if (s += this.hexByte(this.get(n)),
                            i !== !0)
                                switch (15 & n) {
                                case 7:
                                    s += "  ";
                                    break;
                                case 15:
                                    s += "\n";
                                    break;
                                default:
                                    s += " "
                                }
                        return s
                    }
                    ,
                    e.prototype.parseStringISO = function(t, e) {
                        for (var i = "", s = t; e > s; ++s)
                            i += String.fromCharCode(this.get(s));
                        return i
                    }
                    ,
                    e.prototype.parseStringUTF = function(t, e) {
                        for (var i = "", s = t; e > s; ) {
                            var n = this.get(s++);
                            i += 128 > n ? String.fromCharCode(n) : n > 191 && 224 > n ? String.fromCharCode((31 & n) << 6 | 63 & this.get(s++)) : String.fromCharCode((15 & n) << 12 | (63 & this.get(s++)) << 6 | 63 & this.get(s++))
                        }
                        return i
                    }
                    ,
                    e.prototype.parseStringBMP = function(t, e) {
                        for (var i = "", s = t; e > s; s += 2) {
                            var n = this.get(s)
                              , r = this.get(s + 1);
                            i += String.fromCharCode((n << 8) + r)
                        }
                        return i
                    }
                    ,
                    e.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
                    e.prototype.parseTime = function(t, e) {
                        var i = this.parseStringISO(t, e)
                          , s = this.reTime.exec(i);
                        return s ? (i = s[1] + "-" + s[2] + "-" + s[3] + " " + s[4],
                        s[5] && (i += ":" + s[5],
                        s[6] && (i += ":" + s[6],
                        s[7] && (i += "." + s[7]))),
                        s[8] && (i += " UTC",
                        "Z" != s[8] && (i += s[8],
                        s[9] && (i += ":" + s[9]))),
                        i) : "Unrecognized time: " + i
                    }
                    ,
                    e.prototype.parseInteger = function(t, e) {
                        var i = e - t;
                        if (i > 4) {
                            i <<= 3;
                            var s = this.get(t);
                            if (0 === s)
                                i -= 8;
                            else
                                for (; 128 > s; )
                                    s <<= 1,
                                    --i;
                            return "(" + i + " bit)"
                        }
                        for (var n = 0, r = t; e > r; ++r)
                            n = n << 8 | this.get(r);
                        return n
                    }
                    ,
                    e.prototype.parseBitString = function(t, e) {
                        var i = this.get(t)
                          , s = (e - t - 1 << 3) - i
                          , n = "(" + s + " bit)";
                        if (20 >= s) {
                            var r = i;
                            n += " ";
                            for (var o = e - 1; o > t; --o) {
                                for (var a = this.get(o), c = r; 8 > c; ++c)
                                    n += a >> c & 1 ? "1" : "0";
                                r = 0
                            }
                        }
                        return n
                    }
                    ,
                    e.prototype.parseOctetString = function(t, e) {
                        var i = e - t
                          , r = "(" + i + " byte) ";
                        i > s && (e = t + s);
                        for (var o = t; e > o; ++o)
                            r += this.hexByte(this.get(o));
                        return i > s && (r += n),
                        r
                    }
                    ,
                    e.prototype.parseOID = function(t, e) {
                        for (var i = "", s = 0, n = 0, r = t; e > r; ++r) {
                            var o = this.get(r);
                            if (s = s << 7 | 127 & o,
                            n += 7,
                            !(128 & o)) {
                                if ("" === i) {
                                    var a = 80 > s ? 40 > s ? 0 : 1 : 2;
                                    i = a + "." + (s - 40 * a)
                                } else
                                    i += "." + (n >= 31 ? "bigint" : s);
                                s = n = 0
                            }
                        }
                        return i
                    }
                    ,
                    i.prototype.typeName = function() {
                        if (this.tag === t)
                            return "unknown";
                        var e = this.tag >> 6
                          , i = (this.tag >> 5 & 1,
                        31 & this.tag);
                        switch (e) {
                        case 0:
                            switch (i) {
                            case 0:
                                return "EOC";
                            case 1:
                                return "BOOLEAN";
                            case 2:
                                return "INTEGER";
                            case 3:
                                return "BIT_STRING";
                            case 4:
                                return "OCTET_STRING";
                            case 5:
                                return "NULL";
                            case 6:
                                return "OBJECT_IDENTIFIER";
                            case 7:
                                return "ObjectDescriptor";
                            case 8:
                                return "EXTERNAL";
                            case 9:
                                return "REAL";
                            case 10:
                                return "ENUMERATED";
                            case 11:
                                return "EMBEDDED_PDV";
                            case 12:
                                return "UTF8String";
                            case 16:
                                return "SEQUENCE";
                            case 17:
                                return "SET";
                            case 18:
                                return "NumericString";
                            case 19:
                                return "PrintableString";
                            case 20:
                                return "TeletexString";
                            case 21:
                                return "VideotexString";
                            case 22:
                                return "IA5String";
                            case 23:
                                return "UTCTime";
                            case 24:
                                return "GeneralizedTime";
                            case 25:
                                return "GraphicString";
                            case 26:
                                return "VisibleString";
                            case 27:
                                return "GeneralString";
                            case 28:
                                return "UniversalString";
                            case 30:
                                return "BMPString";
                            default:
                                return "Universal_" + i.toString(16)
                            }
                        case 1:
                            return "Application_" + i.toString(16);
                        case 2:
                            return "[" + i + "]";
                        case 3:
                            return "Private_" + i.toString(16)
                        }
                    }
                    ,
                    i.prototype.reSeemsASCII = /^[ -~]+$/,
                    i.prototype.content = function() {
                        if (this.tag === t)
                            return null;
                        var e = this.tag >> 6
                          , i = 31 & this.tag
                          , r = this.posContent()
                          , o = Math.abs(this.length);
                        if (0 !== e) {
                            if (null !== this.sub)
                                return "(" + this.sub.length + " elem)";
                            var a = this.stream.parseStringISO(r, r + Math.min(o, s));
                            return this.reSeemsASCII.test(a) ? a.substring(0, 2 * s) + (a.length > 2 * s ? n : "") : this.stream.parseOctetString(r, r + o)
                        }
                        switch (i) {
                        case 1:
                            return 0 === this.stream.get(r) ? "false" : "true";
                        case 2:
                            return this.stream.parseInteger(r, r + o);
                        case 3:
                            return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(r, r + o);
                        case 4:
                            return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(r, r + o);
                        case 6:
                            return this.stream.parseOID(r, r + o);
                        case 16:
                        case 17:
                            return "(" + this.sub.length + " elem)";
                        case 12:
                            return this.stream.parseStringUTF(r, r + o);
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 26:
                            return this.stream.parseStringISO(r, r + o);
                        case 30:
                            return this.stream.parseStringBMP(r, r + o);
                        case 23:
                        case 24:
                            return this.stream.parseTime(r, r + o)
                        }
                        return null
                    }
                    ,
                    i.prototype.toString = function() {
                        return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
                    }
                    ,
                    i.prototype.print = function(e) {
                        if (e === t && (e = ""),
                        document.writeln(e + this),
                        null !== this.sub) {
                            e += "  ";
                            for (var i = 0, s = this.sub.length; s > i; ++i)
                                this.sub[i].print(e)
                        }
                    }
                    ,
                    i.prototype.toPrettyString = function(e) {
                        e === t && (e = "");
                        var i = e + this.typeName() + " @" + this.stream.pos;
                        if (this.length >= 0 && (i += "+"),
                        i += this.length,
                        32 & this.tag ? i += " (constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (i += " (encapsulates)"),
                        i += "\n",
                        null !== this.sub) {
                            e += "  ";
                            for (var s = 0, n = this.sub.length; n > s; ++s)
                                i += this.sub[s].toPrettyString(e)
                        }
                        return i
                    }
                    ,
                    i.prototype.toDOM = function() {
                        var t = r.tag("div", "node");
                        t.asn1 = this;
                        var e = r.tag("div", "head")
                          , i = this.typeName().replace(/_/g, " ");
                        e.innerHTML = i;
                        var s = this.content();
                        if (null !== s) {
                            s = String(s).replace(/</g, "&lt;");
                            var n = r.tag("span", "preview");
                            n.appendChild(r.text(s)),
                            e.appendChild(n)
                        }
                        t.appendChild(e),
                        this.node = t,
                        this.head = e;
                        var o = r.tag("div", "value");
                        if (i = "Offset: " + this.stream.pos + "<br/>",
                        i += "Length: " + this.header + "+",
                        i += this.length >= 0 ? this.length : -this.length + " (undefined)",
                        32 & this.tag ? i += "<br/>(constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (i += "<br/>(encapsulates)"),
                        null !== s && (i += "<br/>Value:<br/><b>" + s + "</b>",
                        "object" == typeof oids && 6 == this.tag)) {
                            var a = oids[s];
                            a && (a.d && (i += "<br/>" + a.d),
                            a.c && (i += "<br/>" + a.c),
                            a.w && (i += "<br/>(warning!)"))
                        }
                        o.innerHTML = i,
                        t.appendChild(o);
                        var c = r.tag("div", "sub");
                        if (null !== this.sub)
                            for (var l = 0, u = this.sub.length; u > l; ++l)
                                c.appendChild(this.sub[l].toDOM());
                        return t.appendChild(c),
                        e.onclick = function() {
                            t.className = "node collapsed" == t.className ? "node" : "node collapsed"
                        }
                        ,
                        t
                    }
                    ,
                    i.prototype.posStart = function() {
                        return this.stream.pos
                    }
                    ,
                    i.prototype.posContent = function() {
                        return this.stream.pos + this.header
                    }
                    ,
                    i.prototype.posEnd = function() {
                        return this.stream.pos + this.header + Math.abs(this.length)
                    }
                    ,
                    i.prototype.fakeHover = function(t) {
                        this.node.className += " hover",
                        t && (this.head.className += " hover")
                    }
                    ,
                    i.prototype.fakeOut = function(t) {
                        var e = / ?hover/;
                        this.node.className = this.node.className.replace(e, ""),
                        t && (this.head.className = this.head.className.replace(e, ""))
                    }
                    ,
                    i.prototype.toHexDOM_sub = function(t, e, i, s, n) {
                        if (!(s >= n)) {
                            var o = r.tag("span", e);
                            o.appendChild(r.text(i.hexDump(s, n))),
                            t.appendChild(o)
                        }
                    }
                    ,
                    i.prototype.toHexDOM = function(e) {
                        var i = r.tag("span", "hex");
                        if (e === t && (e = i),
                        this.head.hexNode = i,
                        this.head.onmouseover = function() {
                            this.hexNode.className = "hexCurrent"
                        }
                        ,
                        this.head.onmouseout = function() {
                            this.hexNode.className = "hex"
                        }
                        ,
                        i.asn1 = this,
                        i.onmouseover = function() {
                            var t = !e.selected;
                            t && (e.selected = this.asn1,
                            this.className = "hexCurrent"),
                            this.asn1.fakeHover(t)
                        }
                        ,
                        i.onmouseout = function() {
                            var t = e.selected == this.asn1;
                            this.asn1.fakeOut(t),
                            t && (e.selected = null,
                            this.className = "hex")
                        }
                        ,
                        this.toHexDOM_sub(i, "tag", this.stream, this.posStart(), this.posStart() + 1),
                        this.toHexDOM_sub(i, this.length >= 0 ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent()),
                        null === this.sub)
                            i.appendChild(r.text(this.stream.hexDump(this.posContent(), this.posEnd())));
                        else if (this.sub.length > 0) {
                            var s = this.sub[0]
                              , n = this.sub[this.sub.length - 1];
                            this.toHexDOM_sub(i, "intro", this.stream, this.posContent(), s.posStart());
                            for (var o = 0, a = this.sub.length; a > o; ++o)
                                i.appendChild(this.sub[o].toHexDOM(e));
                            this.toHexDOM_sub(i, "outro", this.stream, n.posEnd(), this.posEnd())
                        }
                        return i
                    }
                    ,
                    i.prototype.toHexString = function(t) {
                        return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
                    }
                    ,
                    i.decodeLength = function(t) {
                        var e = t.get()
                          , i = 127 & e;
                        if (i == e)
                            return i;
                        if (i > 3)
                            throw "Length over 24 bits not supported at position " + (t.pos - 1);
                        if (0 === i)
                            return -1;
                        e = 0;
                        for (var s = 0; i > s; ++s)
                            e = e << 8 | t.get();
                        return e
                    }
                    ,
                    i.hasContent = function(t, s, n) {
                        if (32 & t)
                            return !0;
                        if (3 > t || t > 4)
                            return !1;
                        var r = new e(n);
                        3 == t && r.get();
                        var o = r.get();
                        if (o >> 6 & 1)
                            return !1;
                        try {
                            var a = i.decodeLength(r);
                            return r.pos - n.pos + a == s
                        } catch (t) {
                            return !1
                        }
                    }
                    ,
                    i.decode = function(t) {
                        t instanceof e || (t = new e(t,0));
                        var s = new e(t)
                          , n = t.get()
                          , r = i.decodeLength(t)
                          , o = t.pos - s.pos
                          , a = null;
                        if (i.hasContent(n, r, t)) {
                            var c = t.pos;
                            if (3 == n && t.get(),
                            a = [],
                            r >= 0) {
                                for (var l = c + r; t.pos < l; )
                                    a[a.length] = i.decode(t);
                                if (t.pos != l)
                                    throw "Content size is not correct for container starting at offset " + c
                            } else
                                try {
                                    for (; ; ) {
                                        var u = i.decode(t);
                                        if (0 === u.tag)
                                            break;
                                        a[a.length] = u
                                    }
                                    r = c - t.pos
                                } catch (t) {
                                    throw "Exception while decoding undefined length content: " + t
                                }
                        } else
                            t.pos += r;
                        return new i(s,o,r,n,a)
                    }
                    ,
                    i.test = function() {
                        for (var t = [{
                            value: [39],
                            expected: 39
                        }, {
                            value: [129, 201],
                            expected: 201
                        }, {
                            value: [131, 254, 220, 186],
                            expected: 16702650
                        }], s = 0, n = t.length; n > s; ++s) {
                            var r = new e(t[s].value,0)
                              , o = i.decodeLength(r);
                            o != t[s].expected && document.write("In test[" + s + "] expected " + t[s].expected + " got " + o + "\n")
                        }
                    }
                    ,
                    window.ASN1 = i
                }(),
                ASN1.prototype.getHexStringValue = function() {
                    var t = this.toHexString()
                      , e = 2 * this.header
                      , i = 2 * this.length;
                    return t.substr(e, i)
                }
                ,
                le.prototype.parseKey = function(t) {
                    try {
                        var e = 0
                          , i = 0
                          , s = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/
                          , n = s.test(t) ? Hex.decode(t) : Base64.unarmor(t)
                          , r = ASN1.decode(n);
                        if (3 === r.sub.length && (r = r.sub[2].sub[0]),
                        9 === r.sub.length) {
                            e = r.sub[1].getHexStringValue(),
                            this.n = ae(e, 16),
                            i = r.sub[2].getHexStringValue(),
                            this.e = parseInt(i, 16);
                            var o = r.sub[3].getHexStringValue();
                            this.d = ae(o, 16);
                            var a = r.sub[4].getHexStringValue();
                            this.p = ae(a, 16);
                            var c = r.sub[5].getHexStringValue();
                            this.q = ae(c, 16);
                            var l = r.sub[6].getHexStringValue();
                            this.dmp1 = ae(l, 16);
                            var u = r.sub[7].getHexStringValue();
                            this.dmq1 = ae(u, 16);
                            var d = r.sub[8].getHexStringValue();
                            this.coeff = ae(d, 16)
                        } else {
                            if (2 !== r.sub.length)
                                return !1;
                            var p = r.sub[1]
                              , h = p.sub[0];
                            e = h.sub[0].getHexStringValue(),
                            this.n = ae(e, 16),
                            i = h.sub[1].getHexStringValue(),
                            this.e = parseInt(i, 16)
                        }
                        return !0
                    } catch (t) {
                        return !1
                    }
                }
                ,
                le.prototype.getPrivateBaseKey = function() {
                    var t = {
                        array: [new KJUR.asn1.DERInteger({
                            int: 0
                        }), new KJUR.asn1.DERInteger({
                            bigint: this.n
                        }), new KJUR.asn1.DERInteger({
                            int: this.e
                        }), new KJUR.asn1.DERInteger({
                            bigint: this.d
                        }), new KJUR.asn1.DERInteger({
                            bigint: this.p
                        }), new KJUR.asn1.DERInteger({
                            bigint: this.q
                        }), new KJUR.asn1.DERInteger({
                            bigint: this.dmp1
                        }), new KJUR.asn1.DERInteger({
                            bigint: this.dmq1
                        }), new KJUR.asn1.DERInteger({
                            bigint: this.coeff
                        })]
                    }
                      , e = new KJUR.asn1.DERSequence(t);
                    return e.getEncodedHex()
                }
                ,
                le.prototype.getPrivateBaseKeyB64 = function() {
                    return be(this.getPrivateBaseKey())
                }
                ,
                le.prototype.getPublicBaseKey = function() {
                    var t = {
                        array: [new KJUR.asn1.DERObjectIdentifier({
                            oid: "1.2.840.113549.1.1.1"
                        }), new KJUR.asn1.DERNull]
                    }
                      , e = new KJUR.asn1.DERSequence(t);
                    t = {
                        array: [new KJUR.asn1.DERInteger({
                            bigint: this.n
                        }), new KJUR.asn1.DERInteger({
                            int: this.e
                        })]
                    };
                    var i = new KJUR.asn1.DERSequence(t);
                    t = {
                        hex: "00" + i.getEncodedHex()
                    };
                    var s = new KJUR.asn1.DERBitString(t);
                    t = {
                        array: [e, s]
                    };
                    var n = new KJUR.asn1.DERSequence(t);
                    return n.getEncodedHex()
                }
                ,
                le.prototype.getPublicBaseKeyB64 = function() {
                    return be(this.getPublicBaseKey())
                }
                ,
                le.prototype.wordwrap = function(t, e) {
                    if (e = e || 64,
                    !t)
                        return t;
                    var i = "(.{1," + e + "})( +|$\n?)|(.{1," + e + "})";
                    return t.match(RegExp(i, "g")).join("\n")
                }
                ,
                le.prototype.getPrivateKey = function() {
                    var t = "-----BEGIN RSA PRIVATE KEY-----\n";
                    return t += this.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
                    t += "-----END RSA PRIVATE KEY-----"
                }
                ,
                le.prototype.getPublicKey = function() {
                    var t = "-----BEGIN PUBLIC KEY-----\n";
                    return t += this.wordwrap(this.getPublicBaseKeyB64()) + "\n",
                    t += "-----END PUBLIC KEY-----"
                }
                ,
                le.prototype.hasPublicKeyProperty = function(t) {
                    return t = t || {},
                    t.hasOwnProperty("n") && t.hasOwnProperty("e")
                }
                ,
                le.prototype.hasPrivateKeyProperty = function(t) {
                    return t = t || {},
                    t.hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
                }
                ,
                le.prototype.parsePropertiesFrom = function(t) {
                    this.n = t.n,
                    this.e = t.e,
                    t.hasOwnProperty("d") && (this.d = t.d,
                    this.p = t.p,
                    this.q = t.q,
                    this.dmp1 = t.dmp1,
                    this.dmq1 = t.dmq1,
                    this.coeff = t.coeff)
                }
                ;
                var He = function(t) {
                    le.call(this),
                    t && ("string" == typeof t ? this.parseKey(t) : (this.hasPrivateKeyProperty(t) || this.hasPublicKeyProperty(t)) && this.parsePropertiesFrom(t))
                };
                He.prototype = new le,
                He.prototype.constructor = He;
                var qe = function(t) {
                    t = t || {},
                    this.default_key_size = parseInt(t.default_key_size) || 1024,
                    this.default_public_exponent = t.default_public_exponent || "010001",
                    this.log = t.log || !1,
                    this.key = null
                };
                qe.prototype.setKey = function(t) {
                    this.log && this.key && console.warn("A key was already set, overriding existing."),
                    this.key = new He(t)
                }
                ,
                qe.prototype.setPrivateKey = function(t) {
                    this.setKey(t)
                }
                ,
                qe.prototype.setPublicKey = function(t) {
                    this.setKey(t)
                }
                ,
                qe.prototype.decrypt = function(t) {
                    try {
                        return this.getKey().decrypt(ye(t))
                    } catch (t) {
                        return !1
                    }
                }
                ,
                qe.prototype.encrypt = function(t) {
                    try {
                        return be(this.getKey().encrypt(t))
                    } catch (t) {
                        return !1
                    }
                }
                ,
                qe.prototype.getKey = function(t) {
                    if (!this.key) {
                        if (this.key = new He,
                        t && "[object Function]" === {}.toString.call(t))
                            return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                        this.key.generate(this.default_key_size, this.default_public_exponent)
                    }
                    return this.key
                }
                ,
                qe.prototype.getPrivateKey = function() {
                    return this.getKey().getPrivateKey()
                }
                ,
                qe.prototype.getPrivateKeyB64 = function() {
                    return this.getKey().getPrivateBaseKeyB64()
                }
                ,
                qe.prototype.getPublicKey = function() {
                    return this.getKey().getPublicKey()
                }
                ,
                qe.prototype.getPublicKeyB64 = function() {
                    return this.getKey().getPublicBaseKeyB64()
                }
                ,
                qe.version = "2.3.1",
                t.JSEncrypt = qe
            })
        }
        .call(e, i, e, t),
        !(void 0 !== s && (t.exports = s))
    },
    5: function(t, e, i) {
        var s;
        s = function(t, e, s) {
            function n() {}
            var r = i(1);
            s.exports = n,
            n.prototype.init = function() {
                this.initFriendLinksEffect()
            }
            ,
            n.prototype.initFriendLinks = function() {
                r.get("//www.gm99.com/ajax/get_flink", {
                    type: -1
                }, function(t) {
                    var e = "";
                    r.each(t, function(t, i) {
                        e += '<a href="' + i.URL + '" target="_blank">' + i.NAME + "</a>"
                    }),
                    r("#links-inner").html(e)
                }, "json")
            }
            ,
            n.prototype.initFriendLinksEffect = function() {
                function t() {
                    "0px" === i.css("top") ? i.animate({
                        top: "-15px"
                    }) : i.animate({
                        top: "0"
                    })
                }
                function e() {
                    "-15px" === i.css("top") ? i.animate({
                        top: "0"
                    }) : i.animate({
                        top: "-15px"
                    })
                }
                var i = r("#links-inner")
                  , s = r("#top-arrow")
                  , n = r("#bottom-arrow")
                  , o = setInterval(e, 5e3);
                s.on("click", function() {
                    t()
                }),
                n.on("click", function() {
                    e()
                }),
                i.on("mouseenter", function() {
                    clearInterval(o)
                }).on("mouseleave", function() {
                    o = setInterval(e, 5e3)
                })
            }
        }
        .call(e, i, e, t),
        !(void 0 !== s && (t.exports = s))
    },
    6: function(t, e, i) {
        var s;
        s = function(t, e, s) {
            function n() {}
            var r = i(1)
              , o = i(2)
              , a = new o
              , c = i(3)
              , l = new c;
            s.exports = n,
            n.prototype.init = function() {
                document.domain = "gm99.com",
                this.$logoutStatePart = r("#logout-state"),
                this.$loginStatePart = r("#login-state"),
                this.$accoutName = r("#head-login-account"),
                this.$popLoginDom = r('<div id="pop-login-part" class="pop-login-part"><a class="pop-close-btn" href="javascript:;"></a><div class="login-part pop-inner-part"><div class="log-reg-change"><a class="pop-login-tab selected" href="javascript:;">會員登入</a> <a class="pop-register-tab" href="javascript:;">快速註冊</a></div><div id="pop-login-part-1" class="inputs-part"><p class="row"><i class="input-icon username-normal"></i> <input id="pop-login-username" class="user-inputs username-input" type="text" placeholder="帳號" /></p><p class="row"><i class="input-icon password-normal"></i> <input id="pop-login-password" class="user-inputs password-input" type="password" placeholder="密碼" /></p><p class="row"><i class="input-icon defend-normal"></i> <input id="pop-login-auth-code" class="user-inputs auth-code" type="text" placeholder="驗證碼" /> <i id="circle-success" class="state-icon circle-success hide"></i> <i id="circle-warn" class="state-icon circle-warn hide"></i> <span class="auth-code-text"><img class="auth-codes pop-login-auth-codes" src="#" /></span> <a id="pop-refresh-login-code" href="javascript:;" class="refresh-normal"></a></p><p class="row"><input type="checkbox" id="pop-remember" class="remember" checked="checked" value="1"><label class="label" for="pop-remember">記住登入</label><a class="find-password j-strl-link" href="//service.gm99.com/center?type=password" target="_blank">找回密碼</a></p><p class="row"><a id="pop-login-btn" href="javascript:;" class="login-btn">登入</a></p></div><div id="pop-login-part-2" class="another-login-text"><i class="right-triangle"></i><p>使用其他帳號登入</p></div><div id="pop-login-part-3" class="another-login-icons"><a class="icon-facebook-normal j-strl-link j-strl-forward-link" href="//passport.gm99.com/facebook/direct_login?forward=/" title="Facebook快速登入"></a><a class="icon-google-normal j-strl-link j-strl-forward-link" href="//passport.gm99.com/google/direct_login?forward=/" title="Google快速登入"></a><a class="icon-yahoo-normal j-strl-link j-strl-forward-link" href="//passport.gm99.com/yahoo/direct_login?forward=/" title="台灣奇摩帳號快速登入"></a><a id="not-use-pop-login-by-baha" class="icon-baha-normal j-strl-link j-strl-forward-link" href="//passport.gm99.com/gamer/direct_login?forward=/" title="巴哈快速登入"></a><a class="icon-gamebase-normal j-strl-link j-strl-forward-link" href="//passport.gm99.com/gamebase/direct_login?forward=/" title="基地直接玩遊戲"></a><a class="icon-2000fun-normal j-strl-link j-strl-forward-link" href="//passport.gm99.com/fun2000/direct_login?forward=/" title="2000fun帳號快速登入"></a><a class="icon-gamesky-normal j-strl-link j-strl-forward-link" href="//passport.gm99.com/igamer/direct_login?forward=/" title="遊戲天堂帳號快速登入"></a><a class="icon-mycard-normal hide j-strl-link j-strl-forward-link" href="/mycard_member/request_login/direct_login?forward=/" title="MyCard帳號快速登入"></a><a id="pop-login-by-rc" class="icon-rc-normal" href="javascript:;" title="RaidCall快速登入"></a><a class="icon-phone-normal j-strl-link j-strl-forward-link" href="//passport.gm99.com/facebook_account_kit/direct_login?forward=/" title="Account Kit快速登入"></a></div></div><div id="pop-login-tip-warn" class="pop-login-tip warn hide"><i class="right-arrow"></i><p></p></div><div id="pop-login-tip-error" class="pop-login-tip error hide"><i class="right-arrow"></i><p></p></div></div>'),
                this.$popRegisterDom = r('<div id="pop-register-part" class="pop-register-part"><a class="pop-close-btn" href="javascript:;"></a> <div id="register-part" class="inputs-part pop-inner-part"><div class="log-reg-change"><a class="pop-login-tab" href="javascript:;">會員登入</a> <a class="pop-register-tab selected" href="javascript:;">快速註冊</a></div><p class="row"><i class="input-icon username-normal"></i> <input id="pop-register-username" class="user-inputs username-input" type="text" placeholder="帳號" /></p><p class="row"><i class="input-icon password-normal"></i> <input id="pop-register-password" class="user-inputs password-input" type="password" placeholder="密碼" /></p><p class="row"><i class="input-icon password-normal"></i> <input id="pop-register-password-confirm" class="user-inputs password-input" type="password" placeholder="確認密碼" /></p><p class="row"><i class="input-icon defend-normal"></i> <input id="pop-register-auth-code" class="user-inputs auth-code" type="text" placeholder="驗證碼" /> <i id="circle-success-2" class="state-icon circle-success hide"></i> <i id="circle-warn-2" class="state-icon circle-warn hide"></i> <span class="auth-code-text"><img class="auth-codes pop-register-auth-codes" src="#" /></span> <a id="pop-refresh-register-code" href="javascript:;" class="refresh-normal"></a></p><p class="row"><input type="checkbox" id="pop-recept-checkbox" class="remember" checked value="1"><label class="label" for="pop-recept-checkbox">我接受G妹遊戲<a class="service-book j-strl-link" href="/agreement.htm" target="_black">服務合約書</a></label></p><p class="row"><a id="pop-register-btn" href="javascript:;" class="login-btn">立即註冊</a></p></div><div id="pop-login-tip-warn" class="pop-login-tip warn hide"><i class="right-arrow"></i><p></p></div><div id="pop-login-tip-error" class="pop-login-tip error hide"><i class="right-arrow"></i><p></p></div></div>'),
                this.$registerBtn = r("#header-register-btn"),
                this.$loginBtn = r("#header-login-btn"),
                this.$closeBtn = this.$popLoginDom.find(".pop-close-btn"),
                this.$closeBtn2 = this.$popRegisterDom.find(".pop-close-btn"),
                this.$loginTab = this.$popRegisterDom.find(".pop-login-tab"),
                this.$registerTab = this.$popLoginDom.find(".pop-register-tab"),
                this.$PLogNameInput = this.$popLoginDom.find("#pop-login-username"),
                this.$PRegNameInput = this.$popRegisterDom.find("#pop-register-username"),
                this.$PLogPwdInput = this.$popLoginDom.find("#pop-login-password"),
                this.$PRegPwdInput = this.$popRegisterDom.find("#pop-register-password"),
                this.$PRegPwd2Input = this.$popRegisterDom.find("#pop-register-password-confirm"),
                this.$PLogCodeInput = this.$popLoginDom.find("#pop-login-auth-code"),
                this.$PRegCodeInput = this.$popRegisterDom.find("#pop-register-auth-code"),
                this.$PLogRefreshBtn = this.$popLoginDom.find("#pop-refresh-login-code"),
                this.$PRegRefreshBtn = this.$popRegisterDom.find("#pop-refresh-register-code"),
                this.$PImgRefreshBtn1 = this.$popLoginDom.find(".pop-login-auth-codes"),
                this.$PImgRefreshBtn2 = this.$popRegisterDom.find(".pop-register-auth-codes"),
                this.$loginSubmitBtn = this.$popLoginDom.find("#pop-login-btn"),
                this.$registerSubmitBtn = this.$popRegisterDom.find("#pop-register-btn"),
                this.$addFavour = r(".add-favour"),
                this.$dropdown = r(".dropdown"),
                this.$btnAddFavour = r(".btn-add-favour"),
                this.$popLoginByBahaBtn = this.$popLoginDom.find("#pop-login-by-baha"),
                this.$popBahaCloseBtn = r("#pop-baha-login-close-btn"),
                this.$popLoginByRCBtn = this.$popLoginDom.find("#pop-login-by-rc"),
                this.$popRCCloseBtn = r("#pop-rc-login-close-btn");
                var t = this;
                window.setTimeout(function() {
                    t._checkState()
                }, 1e3),
                this._logout(),
                this._popDom(),
                this._closeDom(),
                this._changeDom(),
                this._focusInput(),
                this._blurInput(),
                this._refreshCode(),
                this._submitLoginForm(),
                this._submitRegisterForm(),
                this._addFav(),
                this._initBahaLoginPart(),
                this._initRCLoginPart(),
                this._other()
            }
            ,
            n.prototype._checkState = function() {
                var t = this
                  , e = function(e) {
                    if (e && e.hasOwnProperty("result") && 1 === e.result) {
                        t.$logoutStatePart.addClass("hide"),
                        t.$loginStatePart.removeClass("hide"),
                        t.$accoutName.text(e.data.LOGIN_ACCOUNT),
                        0 === parseInt(e.data.IS_BINDING) && r("#header-upgrade-icon").removeClass("hide");
                        var i = "";
                        if ($h_vip = VIP(),
                        0 != $h_vip) {
                            if ($h_vip && $h_vip.hasOwnProperty("level") && (h_vip = $h_vip.level),
                            0 == h_vip)
                                return;
                            i = '<a href="/center/?showvip=1" style="float: none; position: static;"><b class="j-strl-link h_vip' + h_vip + '" title="h_vip' + h_vip + '">' + h_vip + "</b></a>",
                            r("#head_login_vip").append(i)
                        }
                        t._checkMessage()
                    } else
                        t.$logoutStatePart.removeClass("hide"),
                        t.$loginStatePart.addClass("hide")
                };
                window.loginGetUserRes ? e(window.loginGetUserRes) : r.ajax({
                    url: "//passport.gm99.com/ajax/get_user_json",
                    type: "get",
                    data: {},
                    jsonp: "callback",
                    async: !0,
                    dataType: "jsonp",
                    success: function(t) {
                        e(t)
                    }
                })
            }
            ,
            n.prototype._someDifferentOfStatue = function(t) {
                8 != t && 9 != t && 42 != t || (a.dialog({
                    yesBtnText: "升級",
                    content: "親愛的主人，平台將於3月7日進行帳號系統升級，屆時將下架本串接登錄方式，為了您的帳號安全請立刻進行帳號升級，以免影響正常遊戲體驗~",
                    yesCallback: function() {
                        var t = window.globalGetGotoLink({
                            link: "https://passport.gm99.com/center/bind_user?_type=5&page="
                        });
                        window.location.href = t
                    }
                }),
                r(".dialog-close-btn").remove())
            }
            ,
            n.prototype._checkMessage = function() {}
            ,
            n.prototype._logout = function() {
                var t = r("#header-logout-btn");
                t.on("click", function() {
                    a.logout("/")
                })
            }
            ,
            n.prototype._popDom = function() {
                var t, e = this;
                t = encodeURIComponent(window.location.href),
                e.$registerBtn.on("click", function() {
                    var e = window.globalGetGotoLink({
                        link: "//passport.gm99.com/?forward=" + t + "&type=register"
                    });
                    window.location.href = e
                }),
                e.$loginBtn.on("click", function() {
                    var e = window.globalGetGotoLink({
                        link: "//passport.gm99.com/?forward=" + t
                    });
                    window.location.href = e
                })
            }
            ,
            n.prototype._closeDom = function() {
                var t = this;
                t.$closeBtn.on("click", function() {
                    r("#shadow-layer,#pop-login-part,#pop-register-part").fadeOut()
                }),
                t.$closeBtn2.on("click", function() {
                    r("#shadow-layer,#pop-login-part,#pop-register-part").fadeOut()
                })
            }
            ,
            n.prototype._changeDom = function() {
                var t = this;
                t.$loginTab.on("click", function() {
                    return !r(this).hasClass("selected") && (r("#pop-register-part").fadeOut(),
                    r("#pop-login-part").fadeIn(),
                    r(".pop-login-auth-codes").attr("src", "//passport.gm99.com/verify_image?rnd=" + Math.random()),
                    void 0)
                }),
                t.$registerTab.on("click", function() {
                    return !r(this).hasClass("selected") && (r("#pop-login-part").fadeOut(),
                    r("#pop-register-part").fadeIn(),
                    r(".pop-register-auth-codes").attr("src", "//passport.gm99.com/verify_image?rnd=" + Math.random()),
                    void 0)
                })
            }
            ,
            n.prototype._focusInput = function() {
                this.$PLogNameInput.on("focus", function() {
                    r(this).prev().addClass("username-focus")
                }),
                this.$PRegNameInput.on("focus", function() {
                    r(this).prev().addClass("username-focus")
                }),
                this.$PLogPwdInput.on("focus", function() {
                    r(this).prev().addClass("password-focus")
                }),
                this.$PRegPwdInput.on("focus", function() {
                    r(this).prev().addClass("password-focus")
                }),
                this.$PRegPwd2Input.on("focus", function() {
                    r(this).prev().addClass("password-focus")
                }),
                this.$PLogCodeInput.on("focus", function() {
                    r(this).prev().addClass("defend-focus")
                }),
                this.$PRegCodeInput.on("focus", function() {
                    r(this).prev().addClass("defend-focus")
                })
            }
            ,
            n.prototype._blurInput = function() {
                this.$PLogNameInput.on("blur", function() {
                    r(this).prev().removeClass("username-focus")
                }),
                this.$PRegNameInput.on("blur", function() {
                    r(this).prev().removeClass("username-focus")
                }),
                this.$PLogPwdInput.on("blur", function() {
                    r(this).prev().removeClass("password-focus")
                }),
                this.$PRegPwdInput.on("blur", function() {
                    r(this).prev().removeClass("password-focus")
                }),
                this.$PRegPwd2Input.on("blur", function() {
                    r(this).prev().removeClass("password-focus")
                }),
                this.$PLogCodeInput.on("blur", function() {
                    r(this).prev().removeClass("defend-focus")
                }),
                this.$PRegCodeInput.on("blur", function() {
                    r(this).prev().removeClass("defend-focus")
                })
            }
            ,
            n.prototype._refreshCode = function() {
                var t = this;
                t.$PLogRefreshBtn.on("click", function() {
                    t.$PImgRefreshBtn1.attr("src", "//passport.gm99.com/verify_image?rnd=" + Math.random())
                }),
                t.$PRegRefreshBtn.on("click", function() {
                    t.$PImgRefreshBtn2.attr("src", "//passport.gm99.com/verify_image?rnd=" + Math.random())
                }),
                t.$PImgRefreshBtn1.on("click", function() {
                    t.$PImgRefreshBtn1.attr("src", "//passport.gm99.com/verify_image?rnd=" + Math.random())
                }),
                t.$PImgRefreshBtn2.on("click", function() {
                    t.$PImgRefreshBtn2.attr("src", "//passport.gm99.com/verify_image?rnd=" + Math.random())
                })
            }
            ,
            n.prototype._groupOpera = function(t, e, i, s, n, o) {
                void 0 !== n && i.find("p").text(n),
                void 0 !== o && i.css("top", o + "px"),
                t.css("border", "1px solid #ef7777"),
                i.removeClass("hide"),
                e.addClass(s + "-warn"),
                setTimeout(function() {
                    t.css("border", "1px solid #b9b9b9"),
                    i.addClass("hide"),
                    e.removeClass(s + "-warn"),
                    r(".state-icon").addClass("hide")
                }, 15e3)
            }
            ,
            n.prototype._checkLoginForm = function() {
                var t, e = this.$PLogNameInput.val(), i = this.$PLogPwdInput.val(), s = this.$PLogCodeInput.val(), n = this.$popLoginDom.find("#remember").attr("checked"), r = this.$PLogNameInput, o = this.$popLoginDom.find(".username-normal"), c = this.$popLoginDom.find("#pop-login-tip-warn"), l = this.$PLogPwdInput, u = this.$popLoginDom.find(".password-normal"), d = this.$PLogCodeInput, p = this.$popLoginDom.find(".defend-normal"), h = this.$popLoginDom.find("#pop-login-tip-error"), f = (this.$popLoginDom.find("#circle-success"),
                this.$popLoginDom.find("#circle-warn")), g = [e, i, s], m = /^[A-Za-z0-9._@-]{1,100}$/;
                "checked" == n && a.setCookie("uname", e);
                for (var v = 0; v < g.length; v++)
                    return "" !== g[0] && m.test(g[0]) ? "" === g[1] || g[1].length > 16 ? (t = "6-16個字元，包括字母和數字，不能與帳號相同",
                    this._groupOpera(l, u, c, "password", t, 128),
                    !1) : "" !== g[2] && 4 === d.val().length || (t = "驗證碼錯誤，請重新輸入",
                    this._groupOpera(d, p, h, "defend", t, 170),
                    f.removeClass("hide"),
                    this.$PImgRefreshBtn1.click(),
                    !1) : (t = "長度為4~16個字元，包括字母、數字、下底線、@、-，郵箱類帳號合法長度為6~100個字元",
                    this._groupOpera(r, o, c, "username", t, 85),
                    !1)
            }
            ,
            n.prototype._checkRegisterForm = function() {
                var t, e = this, i = this.$PRegNameInput.val(), s = this.$PRegPwdInput.val(), n = this.$PRegPwd2Input.val(), r = this.$PRegCodeInput.val(), o = this.$popRegisterDom.find("#pop-recept-checkbox"), c = this.$PRegNameInput, l = this.$popRegisterDom.find(".username-normal"), u = this.$popRegisterDom.find("#pop-login-tip-warn"), d = this.$PRegPwdInput, p = this.$PRegPwd2Input, h = this.$popRegisterDom.find(".password-normal-1"), f = this.$popRegisterDom.find(".password-normal-2"), g = this.$PRegCodeInput, m = this.$popRegisterDom.find(".defend-normal"), v = this.$popRegisterDom.find("#pop-login-tip-error"), _ = (this.$popRegisterDom.find("#circle-success-2"),
                this.$popRegisterDom.find("#circle-warn-2")), b = [i, s, n, r], y = /^[A-Za-z0-9._@]{6,100}$/;
                if (!o.is(":checked"))
                    return a.dialog({
                        content: "您還未接受G妹遊戲服務合約書！"
                    }),
                    !1;
                for (var w = 0; w < b.length; w++)
                    return "" !== b[0] && y.test(b[0]) ? "" === b[1] || b[0] === b[1] || b[1].length > 16 || b[1].length < 6 ? (t = "6-16個字元，包括字母和數字，不能與帳號相同。建議您選擇一個不會在其他地方使用到的密碼",
                    this._groupOpera(d, h, u, "password", t, 127),
                    !1) : "" === b[2] || b[0] === b[2] || b[1].length > 16 || b[1].length < 6 ? (t = "6-16個字元，包括字母和數字，不能與帳號相同。建議您選擇一個不會在其他地方使用到的密碼",
                    this._groupOpera(p, f, u, "password", t, 170),
                    !1) : b[1] !== b[2] ? (t = "兩次輸入不一致，請重新確認密碼哦！",
                    this._groupOpera(d, h, u, "password", t, 170),
                    this._groupOpera(p, f, u, "password", t, 170),
                    !1) : "" !== b[3] && 4 === g.val().length || (t = "驗證碼錯誤，請重新輸入",
                    this._groupOpera(g, m, v, "defend", t, 210),
                    v.css("top", "210px"),
                    _.removeClass("hide"),
                    e.$PImgRefreshBtn2.click(),
                    !1) : (t = "長度為6~16個字元，包括字母、數字、下底線、@，郵箱類帳號合法長度為6~100個字元",
                    this._groupOpera(c, l, u, "username", t, 84),
                    !1)
            }
            ,
            n.prototype._submitLoginForm = function() {
                var t = this
                  , e = this.$PLogCodeInput
                  , i = this.$popLoginDom.find(".defend-normal")
                  , s = this.$popLoginDom.find("#pop-login-tip-error")
                  , n = this.$popLoginDom.find("#circle-warn");
                t.$loginSubmitBtn.on("click", function() {
                    return t._checkLoginForm() !== !1 && void r.ajax({
                        url: "//passport.gm99.com/ajax/check_code",
                        type: "get",
                        data: {
                            ckcode: t.$PLogCodeInput.val()
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        jsonp: "callback",
                        async: !0,
                        dataType: "jsonp",
                        success: function(r) {
                            if (0 === r.result) {
                                var o = "驗證碼錯誤，請重新輸入";
                                return t._groupOpera(e, i, s, "defend", o, 170),
                                n.removeClass("hide"),
                                t.$PImgRefreshBtn1.click(),
                                !1
                            }
                            a.login({
                                uname: t.$PLogNameInput.val(),
                                password: t.$PLogPwdInput.val(),
                                forward: "/",
                                remember: t.$popLoginDom.find("#pop-remember").attr("checked"),
                                ckcode: t.$PLogCodeInput.val(),
                                type: "pop"
                            })
                        }
                    })
                }),
                t.$PLogPwdInput.on("keydown", function(e) {
                    13 != e.keyCode || e.shiftKey || t.$loginSubmitBtn.click()
                }),
                t.$PLogCodeInput.on("keydown", function(e) {
                    13 != e.keyCode || e.shiftKey || t.$loginSubmitBtn.click()
                })
            }
            ,
            n.prototype._submitRegisterForm = function() {
                var t = this.$PRegCodeInput
                  , e = this.$popRegisterDom.find(".defend-normal")
                  , i = this.$popRegisterDom.find("#pop-login-tip-error")
                  , s = (this.$popRegisterDom.find("#circle-success-2"),
                this.$popRegisterDom.find("#circle-warn-2"))
                  , n = this;
                n.$registerSubmitBtn.on("click", function() {
                    return n._checkRegisterForm() !== !1 && void r.ajax({
                        url: "//passport.gm99.com/ajax/check_code",
                        type: "get",
                        data: {
                            ckcode: n.$PRegCodeInput.val()
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        jsonp: "callback",
                        async: !0,
                        dataType: "jsonp",
                        success: function(o) {
                            if (0 === o.result) {
                                var c = "驗證碼錯誤，請重新輸入";
                                return n._groupOpera(t, e, i, "defend", c, 210),
                                i.css("top", "210px"),
                                s.removeClass("hide"),
                                n.$PImgRefreshBtn2.click(),
                                !1
                            }
                            var u = (new Date).getTime()
                              , d = {
                                encrypt: 1,
                                uname: n.$PRegNameInput.val(),
                                password: l.encode(n.$PRegPwdInput.val(), u),
                                repassword: l.encode(n.$PRegPwd2Input.val(), u),
                                ckcode: n.$PRegCodeInput.val(),
                                terms: "checked",
                                forward: "/",
                                cid: "0",
                                scid: "",
                                subid: "0",
                                link_id: "0",
                                game_id: "0",
                                game_server: ""
                            }
                              , p = window.location.href;
                            p.indexOf("www.gm99.com") == -1 || p.split("//")[1].split("/")[1] || (d.t_source = "index_pop"),
                            r.ajax({
                                url: "//passport.gm99.com/register/register3",
                                type: "get",
                                data: d,
                                xhrFields: {
                                    withCredentials: !0
                                },
                                jsonp: "callback",
                                async: !0,
                                dataType: "jsonp",
                                success: function(t) {
                                    try {
                                        "undefined" != typeof g_YWA_funcs && g_YWA_funcs.doCustomAction()
                                    } catch (t) {}
                                    if (t && t.hasOwnProperty("result") && 1 === t.result) {
                                        var e = window.globalGetGotoLink({
                                            link: "//" + window.location.host + "/"
                                        });
                                        window.location.href = e
                                    } else
                                        n.$PImgRefreshBtn2.click(),
                                        a.dialog({
                                            content: t.msg
                                        })
                                }
                            })
                        }
                    })
                }),
                n.$PRegPwd2Input.on("keydown", function(t) {
                    13 != t.keyCode || t.shiftKey || n.$registerSubmitBtn.click()
                }),
                n.$PRegCodeInput.on("keydown", function(t) {
                    13 != t.keyCode || t.shiftKey || n.$registerSubmitBtn.click()
                })
            }
            ,
            n.prototype._addFav = function() {
                var t = this;
                t.$addFavour.on("click", function() {
                    var e = t.$dropdown.css("display");
                    "block" === e ? (t.$dropdown.addClass("hide"),
                    r(this).css({
                        border: "1px solid transparent",
                        backgroundColor: "transparent"
                    })) : (t.$dropdown.removeClass("hide"),
                    r(this).css({
                        border: "1px solid #aaa",
                        backgroundColor: "#f4f4f4"
                    }))
                }),
                t.$btnAddFavour.click(function() {
                    a.addFavorite("//www.gm99.com/", "G妹遊戲：愛遊戲，愛G妹！")
                }),
                r(document).click(function(e) {
                    if (!r(e.target).hasClass("add-favour")) {
                        var i = t.$dropdown.css("display");
                        "block" === i && (t.$dropdown.addClass("hide"),
                        t.$addFavour.css({
                            border: "1px solid transparent",
                            backgroundColor: "transparent"
                        }))
                    }
                })
            }
            ,
            n.prototype._initBahaLoginPart = function() {
                this.$popLoginByBahaBtn.on("click", function() {
                    r("#pop-baha-login-part").fadeIn()
                }),
                this.$popBahaCloseBtn.on("click", function() {
                    r("#pop-baha-login-part").fadeOut()
                })
            }
            ,
            n.prototype._initRCLoginPart = function() {
                this.$popLoginByRCBtn.on("click", function() {
                    r("#pop-rc-login-part").fadeIn()
                }),
                this.$popRCCloseBtn.on("click", function() {
                    r("#pop-rc-login-part").fadeOut()
                })
            }
            ,
            n.prototype._other = function() {
                this.$popLoginDom.find("#pop-remember").on("click", function() {
                    "checked" === r(this).attr("checked") ? r(this).removeAttr("checked") : r(this).attr("checked", "checked")
                })
            }
        }
        .call(e, i, e, t),
        !(void 0 !== s && (t.exports = s))
    },
    10: function(t, e, i) {
        var s;
        s = function(t, e, i) {
            function s(t, e) {
                this.doms = t,
                this.dur = e,
                this.easing = function(t) {
                    return t
                }
            }
            s.prototype.onFinished = function() {
                console.log("animation finished")
            }
            ,
            s.prototype.onProgress = function(t) {}
            ,
            window.requestAnimationFrame || (window.requestAnimationFrame = function() {
                return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                    window.setTimeout(t, 1e3 / 60)
                }
            }()),
            s.prototype.start = function() {
                this.p = 0,
                this.startTime = Date.now();
                var t = this;
                requestAnimationFrame(function e() {
                    t.p >= 1 ? (t.onProgress(t.easing(1)),
                    t.onFinished()) : (t.p = (Date.now() - t.startTime) / t.dur,
                    t.onProgress(t.easing(t.p)),
                    requestAnimationFrame(e))
                })
            }
            ,
            i.exports = s
        }
        .call(e, i, e, t),
        !(void 0 !== s && (t.exports = s))
    },
    11: function(t, e, i) {
        var s;
        s = function(t, e, s) {
            function n() {
                this.timer = null,
                this.currLoc = this.getCurrLocation(),
                this.loginTab = r("#login-tab"),
                this.registerTab = r("#register-tab"),
                this.unameInputs = r("#login-username,#register-username,#pop-login-username,#pop-register-username"),
                this.passwordInputs = r("#login-password,#register-password,#register-password-confirm,#pop-login-password,#pop-register-password,#pop-register-password-confirm"),
                this.codeInputs = r("#login-auth-code,#register-auth-code,#pop-login-auth-code,#pop-register-auth-code"),
                this.myAvatar = r("#my-avatar"),
                this.closeAvatarPartBtn = r("#close-avatar-part-btn"),
                this.saveAvatarBtn = r("#save-avatar-btn"),
                this.loginBtn = r("#login-btn"),
                this.loginAuthCode = r("#login-auth-code"),
                this.registerBtn = r("#register-btn"),
                this.registerAuthCode = r("#register-auth-code"),
                this.signs = {
                    isSign: !1,
                    isGet: !1,
                    totalIntegral: 0,
                    todayIntegral: 0,
                    days: 0,
                    config: null,
                    remainDay: 0,
                    nextIntegral: null
                },
                this.isLogining = !1
            }
            var r = i(1)
              , o = i(2)
              , a = new o;
            i(12)(r);
            var c = i(3)
              , l = new c
              , u = i(10);
            s.exports = n,
            n.prototype.getCurrLocation = function() {
                var t, e = window.location.href;
                return /(www\.gm99\.com)+/gi.test(e) && (t = "www"),
                /(passport\.gm99\.com)+/gi.test(e) && (t = "passport"),
                /(passport\.gm99\.com)+/gi.test(e) && /(mobile_sdk)+/gi.test(e) && (t = "sdk"),
                /(passport\.gm99\.com)+/gi.test(e) && /(mobile_sdk_register)+/gi.test(e) && (t = "sdk-reg"),
                t
            }
            ,
            n.prototype.init = function() {
                this._enhanceInteractive(),
                this._submitLoginForm(),
                this._submitRegisterForm(),
                this._logout(),
                this._moreWay(),
                this._initBahaLoginPart(),
                this._initRCLoginPart(),
                this._adParamProcess(),
                "sdk" !== this.currLoc && "sdk-reg" !== this.currLoc || this._resetTabLink(),
                "sdk" === this.currLoc && r(".login-auth-codes").click(),
                "sdk-reg" === this.currLoc && r(".register-auth-codes").click(),
                "passport" !== this.currLoc && "www" !== this.currLoc || this._changeTab(),
                "www" === this.currLoc && (this._checkLogin(),
                this._initUploadAvatarPart(),
                this._popAvatarPower(),
                this._submitAvatar(),
                this._signin(),
                this.taskTipStatus()),
                this.closeSignAnnounce()
            }
            ,
            n.prototype._getPlayHistory = function() {
                var t = this
                  , e = ""
                  , i = 0
                  , s = "/play_history/get_game_servers?game_count=4&is_recommend=0";
                r.get(s, {}, function(s) {
                    if (s && s.hasOwnProperty("result") && 1 === s.result) {
                        s.data && (r.each(s.data, function(t, s) {
                            if (i < 4) {
                                var n = s[0]
                                  , o = "//www.gmresstatic.com/img/index/bg/default-icon.png";
                                "" !== n.PIC_ICON ? o = n.PIC_ICON : o,
                                e += '<div class="history-servers"><a class="history-game j-strl-link" href="/play_games/play/server/' + n.GAME_ENNAME + "/id/" + n.SERVER_SID + '" target="_blank">',
                                e += '<img class="history-game-attr history-game-icon" src="' + o + '" alt="' + n.GAME_NAME + '" />',
                                e += '<span class="history-game-attr history-game-name">' + n.GAME_NAME + "</span>",
                                e += '<span class="history-game-attr history-game-sid">S' + n.SERVER_SID + "</span>",
                                e += s.length > 1 ? '</a><ul class="lpy_list"><li class="history-server">' : '</a><ul class="lpy_list" data-url="/play_games/play/server/' + n.GAME_ENNAME + "/id/" + n.SERVER_SID + '"><li class="history-server">',
                                s.length > 1 && r.each(s, function(t, i) {
                                    e += '<a class="j-strl-link" href="/play_games/play/server/' + i.GAME_ENNAME + "/id/" + i.SERVER_SID + '" target="_blank">',
                                    e += "<em>" + i.SERVER_NAME + "</em>",
                                    e += "S" + i.SERVER_SID + "</a>"
                                }),
                                e += "</li></ul></div>",
                                i++
                            }
                        }),
                        r("#my-game-history").empty().html(e),
                        r(".history-servers").hover(function() {
                            r(this).find(".history-server").show()
                        }, function() {
                            r(this).find(".history-server").hide()
                        }),
                        r(".lpy_list").click(function(t) {
                            var e = r(this).data("url");
                            e && window.open(e, "_blank")
                        })),
                        i < 4 && r("#has-play-text").addClass("hide"),
                        4 === i && (r("#all-play-text").addClass("hide"),
                        recommendListTemp = "");
                        var n = 4 - i;
                        n > 0 && t._getRecommendServers(n)
                    }
                }, "json")
            }
            ,
            n.prototype._getRecommendServers = function(t) {
                var e = ""
                  , i = "/play_history/get_recommend_games?count=" + t
                  , s = function(t) {
                    r.each(t, function(t, i) {
                        var s = "" === i.PIC_ICON ? "//www.gmresstatic.com/img/index/bg/default-icon.png" : i.PIC_ICON;
                        e += '<a class="all-play-item j-strl-link j-strl-link" href="/play_games/play/server/' + i.GAME_ENNAME + "/id/" + i.SERVER_SID + '" target="_blank">',
                        e += '<img class="history-game-attr history-game-icon" src="' + s + '" alt="' + i.GAME_NAME + '" />',
                        e += '<span class="history-game-attr history-game-name">' + i.GAME_NAME + "</span>",
                        e += '<span class="history-game-attr history-game-sid">S' + i.SERVER_SID + "</span>",
                        e += '<span class="history-game-attr history-game-sname">' + i.SERVER_NAME + "</span>",
                        e += "</a>"
                    }),
                    r("#login-after").append(e)
                };
                r.get(i, {}, function(t) {
                    t && t.hasOwnProperty("result") && 1 === t.result && s(t.data)
                }, "json")
            }
            ,
            n.prototype._autoInputUname = function() {
                var t = a.getCookie("uname");
                t && r("#login-username").val(t)
            }
            ,
            n.prototype._checkLogin = function() {
                $h_vip = VIP();
                var t = this
                  , e = function(t) {
                    var e = "" !== t.data.AVATAR ? t.data.AVATAR : "//www.gmresstatic.com/img/common/avatar/avatar-1.png";
                    if (r("#my-avatar,#avatar-img").attr("src", e),
                    r("#login-before,#logout-state").addClass("hide"),
                    r("#login-after,#login-state").removeClass("hide"),
                    r("#loginAccount,#head-login-account").text(t.data.LOGIN_ACCOUNT),
                    0 === parseInt(t.data.IS_BINDING, 10))
                        r("#upgrade-icon").removeClass("hide");
                    else {
                        var i = 0
                          , s = "";
                        if ($h_vip && $h_vip.hasOwnProperty("level") && (i = $h_vip.level),
                        0 == i)
                            return;
                        s = '<a href="/center/?showvip=1"><b class="h_vip' + i + '" title="VIP' + i + '">' + i + "</b></a>",
                        r("#loginAccount").after(s)
                    }
                };
                r.ajax({
                    url: "//passport.gm99.com/ajax/get_user_json",
                    type: "get",
                    data: {},
                    jsonp: "callback",
                    async: !0,
                    dataType: "jsonp",
                    success: function(i) {
                        i && i.hasOwnProperty("result") && 1 === i.result ? (window.loginGetUserRes = i,
                        e(i),
                        t._getPlayHistory(),
                        t.signs.isSign = i.data.TODAY_IS_SIGN,
                        t.signs.totalIntegral = i.data.USER_REAL_INTEGRAL,
                        t.initSignBtn(),
                        t.initTotalIntegral()) : (r("#login-before,#logout-state").removeClass("hide"),
                        r("#login-after,#login-state").addClass("hide"),
                        r(".login-auth-codes").attr("src", "//passport.gm99.com/verify_image?rnd=" + Math.random()))
                    }
                })
            }
            ,
            n.prototype._resetTabLink = function() {
                var t = location.search
                  , e = "https://passport.gm99.com/index/mobile_sdk" + t
                  , i = "https://passport.gm99.com/index/mobile_sdk_register" + t;
                this.loginTab.attr("href", e),
                this.registerTab.attr("href", i),
                "sdk-reg" === this.currLoc && (r("#login-part-1,#login-part-2,#login-part-3").addClass("hide"),
                r("#register-part").removeClass("hide"),
                r("#circle-error").addClass("hide"),
                r("#close-login-btn").click())
            }
            ,
            n.prototype._changeTab = function() {
                var t = function(t) {
                    t.addClass("selected").next().removeClass("selected"),
                    r("#register-part").addClass("hide"),
                    r("#login-part-1,#login-part-2,#login-part-3").removeClass("hide"),
                    r("#circle-warn").addClass("hide"),
                    r(".login-auth-codes").click()
                }
                  , e = function(t) {
                    t.addClass("selected").prev().removeClass("selected"),
                    r("#login-part-1,#login-part-2,#login-part-3").addClass("hide"),
                    r("#register-part").removeClass("hide"),
                    r("#circle-error").addClass("hide"),
                    r("#close-login-btn").click(),
                    r(".register-auth-codes").click()
                };
                this.loginTab.on("click", function() {
                    var e = r(this);
                    e.hasClass("selected") ? null : t(e)
                }),
                this.registerTab.on("click", function() {
                    var t = r(this);
                    t.hasClass("selected") ? null : e(t)
                })
            }
            ,
            n.prototype._enhanceInteractive = function() {
                this._focusInput(),
                this._blurInput(),
                this._refreshCode(),
                this._autoInputUname()
            }
            ,
            n.prototype._focusInput = function() {
                this.unameInputs.on("focus", function() {
                    r(this).prev().addClass("username-focus")
                }),
                this.passwordInputs.on("focus", function() {
                    r(this).prev().addClass("password-focus")
                }),
                this.codeInputs.on("focus", function() {
                    r(this).prev().addClass("defend-focus")
                })
            }
            ,
            n.prototype._blurInput = function() {
                this.unameInputs.on("blur", function() {
                    r(this).prev().removeClass("username-focus")
                }),
                this.passwordInputs.on("blur", function() {
                    r(this).prev().removeClass("password-focus")
                }),
                this.codeInputs.on("blur", function() {
                    r(this).prev().removeClass("defend-focus")
                })
            }
            ,
            n.prototype._refreshCode = function() {
                var t = r("#refresh-login-code")
                  , e = r("#refresh-register-code")
                  , i = r(".auth-codes");
                t.on("click", function() {
                    r(".login-auth-codes").click()
                }),
                e.on("click", function() {
                    r(".register-auth-codes").click()
                }),
                i.on("click", function() {
                    r(this).attr("src", "//passport.gm99.com/verify_image?rnd=" + Math.random())
                })
            }
            ,
            n.prototype._groupOpera = function(t, e, i, s, n, o) {
                void 0 !== n && i.find("p").text(n),
                void 0 !== o && i.css("top", o + "px"),
                t.css("border", "1px solid #ef7777"),
                i.removeClass("hide"),
                e.addClass(s + "-warn"),
                this.timer = setTimeout(function() {
                    t.css("border", "1px solid #b9b9b9"),
                    i.addClass("hide"),
                    e.removeClass(s + "-warn"),
                    r(".state-icon").addClass("hide")
                }, 15e3)
            }
            ,
            n.prototype._checkLoginForm = function() {
                for (var t, e = this, i = r("#login-username").val(), s = r("#login-password").val(), n = e.loginAuthCode.val(), o = (r("#remember").attr("checked"),
                r("#login-username")), a = r(".username-normal"), c = r("#login-tip-warn"), l = r("#login-password"), u = r(".password-normal"), d = r(".defend-normal"), p = r("#login-tip-error"), h = (r("#circle-success"),
                r("#circle-warn")), f = [i, s, n], g = /^[A-Za-z0-9._@-]{1,100}$/, m = 0; m < f.length; m++)
                    return "" !== f[0] && g.test(f[0]) ? "" === f[1] || f[1].length > 16 ? (t = "6-16個字元，包括字母和數字",
                    this._groupOpera(l, u, c, "password", t, 99),
                    !1) : "" !== f[2] && 4 === e.loginAuthCode.val().length || (t = "驗證碼錯誤，請重新輸入",
                    this._groupOpera(e.loginAuthCode, d, p, "defend", t, 140),
                    h.removeClass("hide"),
                    r(".login-auth-codes").click(),
                    !1) : (t = "長度為4~16個字元，包括字母、數字、下底線、@、-，郵箱類帳號合法長度為6~100個字元",
                    this._groupOpera(o, a, c, "username", t, 56),
                    !1)
            }
            ,
            n.prototype._checkRegisterForm = function() {
                var t, e = this, i = r("#register-username").val(), s = r("#register-password").val(), n = r("#register-password-confirm").val(), o = r("#register-auth-code").val(), c = r("#recept-checkbox"), l = r("#register-username"), u = r(".username-normal"), d = r("#login-tip-warn"), p = r(".register-password"), h = r(".register-password-confirm"), f = r(".password-normal-1"), g = r(".password-normal-2"), m = r(".defend-normal"), v = r("#login-tip-error"), _ = (r("#circle-success-2"),
                r("#circle-warn-2")), b = [i, s, n, o], y = /^[A-Za-z0-9._@]{6,100}$/;
                if (!c.is(":checked"))
                    return a.dialog({
                        content: "您還未接受G妹遊戲服務合約書！"
                    }),
                    !1;
                for (var w = 0; w < b.length; w++) {
                    if ("" === b[0] || !y.test(b[0]))
                        return t = "長度為6~16個字元，包括字母、點，數字、下底線、@，郵箱類帳號合法長度為6~100個字元",
                        this._groupOpera(l, u, d, "username", t, 56),
                        !1;
                    if ("" === b[1] || b[0] === b[1] || b[1].length > 16 || b[1].length < 6)
                        return t = "6-16個字元，不能與帳號相同。建議您選擇一個不會在其他地方使用到的密碼",
                        this._groupOpera(p, f, d, "password", t, 98),
                        !1;
                    if ("" === b[2])
                        return t = "您還未輸入確認密碼哦，請先輸入~",
                        this._groupOpera(h, g, d, "password", t, 141),
                        !1;
                    if (b[1] !== b[2])
                        return t = "兩次輸入不一致，請重新確認密碼哦！",
                        this._groupOpera(p, f, d, "password", t, 141),
                        this._groupOpera(h, g, d, "password", t, 141),
                        !1;
                    if ("sdk" === e.currLoc || "sdk-reg" === e.currLoc) {
                        if ("" === b[2] || 4 !== e.registerAuthCode.val().length) {
                            t = "驗證碼錯誤，請重新輸入";
                            var k = r("#register-tab").hasClass("selected") ? 175 : 140;
                            return this._groupOpera(e.registerAuthCode, m, v, "defend", t, k),
                            _.removeClass("hide"),
                            r(".register-auth-codes").click(),
                            !1
                        }
                    } else if (!window.googleVerificationToken)
                        return t = "請進行機器人驗證",
                        this._groupOpera(e.registerAuthCode, m, v, "defend", t, 140),
                        v.css("top", "182px"),
                        _.removeClass("hide"),
                        r(".register-auth-codes").click(),
                        !1;
                    return !0
                }
            }
            ,
            n.prototype._submitLoginForm = function() {
                var t = this
                  , e = function(e) {
                    a.getData({
                        url: "//passport.gm99.com/ajax/check_code",
                        data: {
                            ckcode: t.loginAuthCode.val()
                        }
                    }, function(s) {
                        var n, o = r("#remember").prop("checked");
                        o ? n = "checked" : (a.setCookie("uname", ""),
                        n = ""),
                        t.loginBtn.text("登入中...");
                        var c = r("#data-forward").attr("data-forward")
                          , l = r("#login-password").val();
                        if ("sdk" !== t.currLoc && "sdk-reg" !== t.currLoc || "75" == a._GET("gameId")) {
                            if (t.loginBtn.hasClass("disable"))
                                return !1;
                            t.loginBtn.addClass("disable"),
                            a.login({
                                uname: r("#login-username").val(),
                                password: l,
                                forward: c,
                                remember: n,
                                ckcode: t.loginAuthCode.val(),
                                type: "index"
                            }, e, i.call(t))
                        } else
                            a.setCookie("uname", r("#login-username").val()),
                            a.zmqsdklogin({
                                uname: r("#login-username").val(),
                                password: l,
                                forward: c,
                                remember: n,
                                ckcode: t.loginAuthCode.val(),
                                type: "index"
                            }, e, i.call(t))
                    }, function(e) {
                        t.isLogining = !1;
                        var i = "驗證碼錯誤，請重新輸入";
                        t._groupOpera(r("#login-auth-code"), r(".defend-normal"), r("#login-tip-error"), "defend", i, 140),
                        r("#login-tip-error").css("top", "140px"),
                        r("#circle-warn-2").removeClass("hide"),
                        r(".login-auth-codes").click()
                    })
                }
                  , i = function() {
                    return function() {
                        t.isLogining = !1
                    }
                };
                t.loginBtn.on("click", function(i) {
                    if (!t.isLogining) {
                        t.isLogining = !0;
                        var s = r(i.currentTarget);
                        if (t._checkLoginForm() === !1)
                            return t.isLogining = !1,
                            !1;
                        e(s)
                    }
                }),
                r("#login-auth-code,#login-password").on("keydown", function(e) {
                    13 != e.keyCode || e.shiftKey || t.loginBtn.click()
                })
            }
            ,
            n.prototype._submitRegisterForm = function() {
                var t = this
                  , e = r(".defend-normal")
                  , i = r("#login-tip-error")
                  , s = r("#circle-warn-2")
                  , n = function(e) {
                    function i(t) {
                        function e(t) {
                            var e = /%[0-9A-F]{2}/i;
                            return e.test(t) ? decodeURIComponent(t) : t
                        }
                        return t = e(t),
                        t && t.length && "/" === t[0] && "/" !== t[1] ? "//" + mainHost + t : t
                    }
                    function i(t) {
                        function e(t) {
                            var e = /%[0-9A-F]{2}/i;
                            return e.test(t) ? decodeURIComponent(t) : t
                        }
                        return t = e(t),
                        t && t.length && "/" === t[0] && "/" !== t[1] ? "//" + mainHost + t : t
                    }
                    var s = (new Date).getTime()
                      , n = l.encode(r("#register-password").val(), s)
                      , o = l.encode(r("#register-password-confirm").val(), s)
                      , c = ""
                      , u = window.location.host;
                    if ("www.gm99.com" === u && (c = "www"),
                    "passport.gm99.com" === u && (c = "passport"),
                    "sdk" !== t.currLoc && "sdk-reg" !== t.currLoc || "75" == a._GET("gameId"))
                        if (a._GET("gameId") && "75" == a._GET("gameId")) {
                            r("#reg-game-id").val(a._GET("gameId"));
                            var d = r("#reg-forward").val();
                            d = d ? window.globalGetGotoLink({
                                link: i(d)
                            }) : window.globalGetGotoLink({
                                link: "//www.gm99.com"
                            }),
                            r.ajax({
                                url: "//passport.gm99.com/register/register2",
                                type: "get",
                                data: {
                                    encrypt: 1,
                                    uname: r("#register-username").val(),
                                    password: n,
                                    repassword: o,
                                    ckcode: r("#register-auth-code").val(),
                                    terms: r("#recept-checkbox").attr("checked"),
                                    forward: d,
                                    cid: r("#reg-cid").val(),
                                    scid: r("#reg-scid").val(),
                                    subid: r("#reg-subid").val(),
                                    link_id: r("#reg-link-id").val(),
                                    game_id: r("#reg-game-id").val(),
                                    game_server: r("#reg-game-server").val()
                                },
                                xhrFields: {
                                    withCredentials: !0
                                },
                                jsonp: "callback",
                                async: !0,
                                dataType: "jsonp",
                                success: function(t) {
                                    e && e(t)
                                }
                            })
                        } else {
                            if (r("#register-btn").hasClass("disable"))
                                return !1;
                            r("#register-btn").addClass("disable");
                            var d = r("#reg-forward").val();
                            d = d ? window.globalGetGotoLink({
                                link: i(d)
                            }) : window.globalGetGotoLink({
                                link: "//www.gm99.com"
                            }),
                            r.ajax({
                                url: "//passport.gm99.com/register/register3",
                                type: "get",
                                data: {
                                    encrypt: 1,
                                    uname: r("#register-username").val(),
                                    password: n,
                                    repassword: o,
                                    ckcode: r("#register-auth-code").val(),
                                    terms: r("#recept-checkbox").attr("checked"),
                                    forward: d,
                                    cid: r("#reg-cid").val(),
                                    scid: r("#reg-scid").val(),
                                    subid: r("#reg-subid").val(),
                                    link_id: r("#reg-link-id").val(),
                                    game_id: r("#reg-game-id").val(),
                                    game_server: r("#reg-game-server").val(),
                                    g_recaptcha: window.googleVerificationToken ? googleVerificationToken : "",
                                    submit_from: c
                                },
                                xhrFields: {
                                    withCredentials: !0
                                },
                                jsonp: "callback",
                                async: !0,
                                dataType: "jsonp",
                                success: function(t) {
                                    r("#register-btn").removeClass("disable"),
                                    e && e(t)
                                }
                            })
                        }
                    else {
                        var p = a._GET("apps") || ""
                          , h = a._GET("gameCode") || ""
                          , f = a._GET("gameId") || ""
                          , g = a._GET("packageName") || ""
                          , m = a._GET("packageVersion") || ""
                          , v = a._GET("ptCode") || ""
                          , _ = a._GET("publishPlatForm") || ""
                          , b = a._GET("timeStamp") || ""
                          , y = a._GET("country") || ""
                          , w = a._GET("devicePlate") || ""
                          , k = a._GET("language") || ""
                          , D = a._GET("osVersion") || ""
                          , x = a._GET("mac") || ""
                          , S = a._GET("sign") || "gm99"
                          , C = function(t, e) {
                            setTimeout(function() {
                                window.location.href = "//zmqgm99link?message=" + encodeURIComponent(e) + "&sign=" + encodeURIComponent(t.sign) + "&timeStamp=" + t.timeStamp + "&uid=" + t.uid + "&apps=" + t.apps
                            }, 500)
                        }
                          , T = function(t) {
                            a.dialog({
                                content: t || "註冊失敗！請聯繫客服。"
                            })
                        };
                        a.setCookie("uname", r("#register-username").val()),
                        a.getData({
                            url: "//mabpassportsdk.gm99.com/register/mobile_sdk",
                            data: {
                                uname: r("#register-username").val(),
                                password: n,
                                repassword: o,
                                ckcode: t.registerAuthCode.val(),
                                apps: p,
                                gameCode: h,
                                gameId: f,
                                packageName: g,
                                packageVersion: m,
                                ptCode: v,
                                publishPlatForm: _,
                                timeStamp: b,
                                country: y,
                                devicePlate: w,
                                language: k,
                                osVersion: D,
                                mac: x,
                                sign: S
                            }
                        }, function(t, e) {
                            C(t, e)
                        }, function(t) {
                            T(t),
                            r(".register-auth-codes").click()
                        })
                    }
                }
                  , o = function(t) {
                    if (!t || !t.hasOwnProperty("result") || 1 !== t.result) {
                        r("#register-username"),
                        r(".username-normal"),
                        r("#login-tip-warn");
                        return a.dialog({
                            content: t.msg
                        }),
                        r(".register-auth-codes").click(),
                        !1
                    }
                    var e = r("#data-forward").attr("data-forward");
                    try {
                        "undefined" != typeof g_YWA_funcs && g_YWA_funcs.doCustomAction()
                    } catch (t) {}
                    void 0 == e ? window.location.href = window.globalGetGotoLink({
                        link: "//www.gm99.com"
                    }) : window.location.href = decodeURIComponent(e)
                }
                  , c = function(e) {
                    r.ajax({
                        url: "//passport.gm99.com/ajax/check_code",
                        type: "get",
                        data: {
                            ckcode: t.registerAuthCode.val()
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        jsonp: "callback",
                        async: !0,
                        dataType: "jsonp",
                        success: function(t) {
                            e && e(t)
                        }
                    })
                }
                  , u = function(a) {
                    if (0 === a.result) {
                        var c = "驗證碼錯誤，請重新輸入";
                        return t._groupOpera(t.registerAuthCode, e, i, "defend", c, 180),
                        i.css("top", "182px"),
                        s.removeClass("hide"),
                        r(".register-auth-codes").click(),
                        !1
                    }
                    n(function(t) {
                        o(t)
                    })
                };
                r(".google-verification").on("click", function() {
                    var t = "undefined" != typeof grecaptcha;
                    t && grecaptcha.execute()
                }),
                t.registerBtn.on("click", function() {
                    if (t._checkRegisterForm() === !1)
                        return !1;
                    if ("sdk" !== t.currLoc && "sdk-reg" !== t.currLoc || "75" == a._GET("gameId")) {
                        n(function(t) {
                            o(t)
                        });
                        var e = "undefined" != typeof grecaptcha;
                        e && grecaptcha.reset(window.googleVerificationWidget)
                    } else
                        c(function(t) {
                            u(t)
                        }),
                        r("#refresh-register-code").click()
                }),
                r("#register-password-confirm,#register-auth-code").on("keydown", function(t) {
                    13 != t.keyCode || t.shiftKey || r("#register-btn").click()
                })
            }
            ,
            n.prototype._moreWay = function() {
                var t = r("#more-login-way")
                  , e = r("#close-login-btn")
                  , i = r("#hide-login-icons");
                t.on("click", function() {
                    i.is(":visible") ? i.addClass("hide") : i.removeClass("hide")
                }),
                e.on("click", function() {
                    i.addClass("hide")
                })
            }
            ,
            n.prototype._logout = function() {
                var t = r("#logout-btn");
                t.on("click", function() {
                    a.logout(window.globalGetGotoLink({
                        link: "//www.gm99.com"
                    }))
                })
            }
            ,
            n.prototype._popAvatarPower = function() {
                var t = this;
                t.myAvatar.on("click", function() {
                    r("#shadow-layer,#pop-avatar-part").fadeIn()
                }),
                t.closeAvatarPartBtn.on("click", function() {
                    var e = r("#my-avatar").attr("src");
                    t._destroyAreaSelect(),
                    r("#shadow-layer,#pop-avatar-part").fadeOut(),
                    r("#avatar-select-part,#avatar-opera-default-group,#avatar-select-info").show(),
                    r(".avatar-img").attr("src", e).css({
                        width: "82px",
                        height: "83px",
                        marginLeft: 0,
                        marginTop: 0
                    }),
                    r("#avatar-upload-part").hide()
                })
            }
            ,
            n.prototype._submitAvatar = function() {
                r("#avatar-select-part a").on("click", function() {
                    r("#avatar-select-part a").removeClass("selected"),
                    r(this).addClass("selected");
                    var t = "//www.gmresstatic.com/img/common/avatar/avatar-" + r(this).attr("data-index") + ".png"
                      , e = r(this).attr("data-index");
                    r("#save-avatar-btn").attr("data-url", e),
                    r("#avatar-img").attr("src", t)
                }),
                r("#save-avatar-btn").on("click", function() {
                    var t = r(this).attr("data-url");
                    r.get("//www.gm99.com/ajax/set_avatar?avatar=" + t, function(t) {
                        t && t.hasOwnProperty("result") && 1 === t.result ? (r("#my-avatar").attr("src", t.avatar),
                        r("#close-avatar-part-btn").click()) : a.dialog({
                            content: "更新頭像失敗~請重新操作 :("
                        })
                    }, "json")
                })
            }
            ,
            n.prototype._initUploadAvatarPart = function() {
                var t = this;
                window.firstUploadCallback = function(e, i, s, n) {
                    if (1 === i) {
                        var o = r(".thimg")
                          , a = r(".avatar-img")
                          , c = r(".thbox").width()
                          , l = r(".avatar-img-box").width();
                        r("#upload-error-info").text(""),
                        t.imgUrl = e,
                        t._imgAreaSelectInit(e, function() {
                            o.attr("src", e),
                            o.width(t.$img.width()),
                            o.height(t.$img.height()),
                            a.attr("src", e),
                            a.width(t.$img.width()),
                            a.height(t.$img.height())
                        }, function(e) {
                            var i = c / e.width;
                            o.css({
                                width: t.$img.width() * i,
                                height: t.$img.height() * i,
                                marginLeft: -e.x1 * i,
                                marginTop: -e.y1 * i
                            });
                            var s = l / e.width;
                            a.css({
                                width: t.$img.width() * s,
                                height: t.$img.height() * s,
                                marginLeft: -e.x1 * s,
                                marginTop: -e.y1 * s
                            })
                        }),
                        r("#avatar-select-part,#avatar-opera-default-group,#avatar-select-info").hide(),
                        r("#avatar-upload-part").show()
                    } else
                        r("#upload-error-info").text("請上傳小於2M的jpg、png、gif格式的文件").css("color", "red")
                }
                ,
                window.secondUploadCallback = function(e, i, s, n) {
                    if (1 === i) {
                        t._destroyAreaSelect();
                        var o = r(".thimg")
                          , c = r(".avatar-img")
                          , l = r(".thbox").width()
                          , u = r(".avatar-img-box").width();
                        t.imgUrl = e,
                        t._imgAreaSelectInit(e, function() {
                            o.attr("src", e),
                            o.width(t.$img.width()),
                            o.height(t.$img.height()),
                            c.attr("src", e),
                            c.width(t.$img.width()),
                            c.height(t.$img.height())
                        }, function(e) {
                            var i = l / e.width;
                            o.css({
                                width: t.$img.width() * i,
                                height: t.$img.height() * i,
                                marginLeft: -e.x1 * i,
                                marginTop: -e.y1 * i
                            });
                            var s = u / e.width;
                            c.css({
                                width: t.$img.width() * s,
                                height: t.$img.height() * s,
                                marginLeft: -e.x1 * s,
                                marginTop: -e.y1 * s
                            })
                        })
                    } else
                        a.dialog({
                            content: s
                        })
                }
                ,
                r("#upload-avatar-sure-btn").on("click", function() {
                    var e = t.selection.x1
                      , i = t.selection.y1
                      , s = t.selection.width
                      , n = t.selection.height;
                    r.get("//www.gm99.com/ajax/set_avatar?avatar=" + t.imgUrl + "&x=" + e + "&y=" + i + "&width=" + s + "&height=" + n, function(e) {
                        if (e && e.hasOwnProperty("result") && 1 === e.result) {
                            var i = e.avatar;
                            r("#my-avatar,#avatar-img").attr("src", i),
                            r("#close-avatar-part-btn").click(),
                            r("#avatar-select-part,#avatar-opera-default-group,#avatar-select-info").show(),
                            r("#avatar-upload-part").hide(),
                            r(".avatar-img").attr("style", ""),
                            t._destroyAreaSelect()
                        } else
                            a.dialog({
                                content: "更新頭像失敗~請重新操作 :("
                            })
                    }, "json")
                })
            }
            ,
            n.prototype.selection = {},
            n.prototype.$img = null,
            n.prototype.imgUrl = "",
            n.prototype._imgAreaSelectInit = function(t, e, i) {
                var s = this;
                s.$img = r(".photo");
                var n = s.$img.clone();
                s.$img.after(n).remove(),
                s.$img = n,
                s.$img.on("load", function() {
                    function t(t, e) {
                        s.selection = e,
                        clearTimeout(n),
                        n = setTimeout(function() {
                            i(s.selection)
                        }, 0)
                    }
                    e(),
                    s.$img.off("load"),
                    s.$img.imgAreaSelect({
                        aspectRatio: "1:1",
                        handles: !0,
                        onSelectChange: t,
                        onInit: function() {
                            var e = s.$img.imgAreaSelect({
                                instance: !0
                            })
                              , i = Math.min(s.$img.width(), s.$img.height());
                            e.setSelection(0, 0, i, i, !0),
                            e.setOptions({
                                show: !0
                            }),
                            t(s.$img[0], e.getSelection())
                        }
                    });
                    var n
                }),
                s.$img.attr("src", t),
                s.$img.width() && s.$img.trigger("load")
            }
            ,
            n.prototype._destroyAreaSelect = function() {
                if (this.$img) {
                    var t = this.$img.imgAreaSelect({
                        instance: !0
                    });
                    t && t.cancelSelection(),
                    this.$img = null
                }
            }
            ,
            n.prototype._initBahaLoginPart = function() {
                r("#login-by-baha").on("click", function() {
                    r("#shadow-layer,#baha-login-part").fadeIn()
                }),
                r("#baha-login-close-btn").on("click", function() {
                    r("#shadow-layer,#baha-login-part").fadeOut()
                })
            }
            ,
            n.prototype._initRCLoginPart = function() {
                r("#login-by-rc").on("click", function() {
                    r("#shadow-layer,#rc-login-part").fadeIn()
                }),
                r("#rc-login-close-btn").on("click", function() {
                    r("#shadow-layer,#rc-login-part").fadeOut()
                })
            }
            ,
            n.prototype._other = function() {
                r("#remember").on("click", function() {
                    var t = r(this);
                    t.prop("checked") ? t.prop("checked", !1) : t.prop("checked", !0)
                })
            }
            ,
            n.prototype._signin = function() {
                var t = this;
                r("body").on("click", "#J_btn_sign", function(e) {
                    e.preventDefault(),
                    t._doSign()
                }),
                r("body").on("click", "#J_signs_close", function(e) {
                    e.preventDefault(),
                    t._hideMileStone()
                })
            }
            ,
            n.prototype._getSignDetail = function() {
                var t = this;
                r.getJSON("//www.gm99.com/new_signin/signdetail", {}, function(e) {
                    if (1 == e.result) {
                        var i = e.data;
                        t.signs.isSign = i.TODAY_IS_SIGN,
                        t.signs.todayIntegral = i.TODAY_SIGN_INTEGRAL,
                        t.signs.days = i.AMASS_SIGN_DAYS,
                        t.signs.config = i.ALL_SIGN_DAY_INTEGRAL,
                        t.signs.remainDay = i.NEXT_AMASS_SIGN_DAY,
                        t.signs.nextIntegral = i.NEXT_AMASS_SIGN_INTEGRAL.CAN_GET_INTEGRAL,
                        t.signs.isGet = !0,
                        t._initMileStone(),
                        t.initSignBtn()
                    }
                })
            }
            ,
            n.prototype._doSign = function() {
                var t = this;
                r.getJSON("//www.gm99.com/new_signin/sign", {}, function(e) {
                    1 === e.result ? (t.signs.isSign = !0,
                    t.initSignBtn()) : a.dialog({
                        content: "您今日已經簽到過咯，請第二天再來簽到哦~"
                    })
                })
            }
            ,
            n.prototype._viewMileStone = function() {
                this._showMileStone(),
                this.signs.isGet ? this._showMileStone() : this._getSignDetail()
            }
            ,
            n.prototype._initMileStone = function() {
                var t = parseInt(this.signs.days, 10);
                if (7 == t) {
                    var e = '<span class="signs-mark">' + this.signs.todayIntegral + "</span>";
                    r("#J_sign_desc").html('簽到成功！達成了<span class="signs-mark">7</span>天簽到成就，獲得' + e + "G貝！")
                } else
                    r("#J_today_integral").text(this.signs.todayIntegral),
                    r("#J_next_integral").text(this.signs.nextIntegral);
                var i = this.signs.config
                  , s = ""
                  , n = "";
                for (u in i) {
                    var o = i[u]
                      , a = parseInt(u, 10);
                    s += 3 == a || 5 == a || 7 == a ? '<i class="signs-milestone_gift signs-milestone_gift-' + u + '"></i>' : '<i class="signs-milestone_point signs-milestone_point-' + u + '"></i>',
                    n += '<div class="signs-milestone_award signs-milestone_award-' + u + '"><i class="signs-milestone_fish"></i><span class="signs-milestone_num">x' + o.CAN_GET_INTEGRAL + "</span></div>"
                }
                r("#J_milestone_line").html(s),
                r("#J_milestone_awards").html(n);
                for (var c = r("#J_milestone_time"), l = 0, u = 0, d = ""; l < t; l++)
                    u = l + 1,
                    3 != u && 5 != u && 7 != u && (d += '<span class="signs-milestone_gou signs-milestone_gou-' + u + '"><i class="signs-milestone_g"></i></span>');
                c.html(d),
                this._runSignAnimate()
            }
            ,
            n.prototype._runSignAnimate = function() {
                var t = this.signs.days - 1
                  , e = 1
                  , i = new u(null,1e3)
                  , s = r(".signs-milestone_gou-1")
                  , n = s.children(".signs-milestone_g")
                  , o = "ani-signbggou"
                  , a = new u(null,1e3);
                a.onFinished = function() {
                    s.removeClass(o),
                    n && n.removeClass("ani-signgou")
                }
                ,
                i.onProgress = function(t) {
                    var e = Math.abs(parseFloat(Math.sin(.5 * t * Math.PI).toFixed(2)));
                    360 * Math.sin(2 * t * Math.PI) + "deg";
                    s.css({
                        "-ms-transform": "scale(" + e + ")",
                        "-moz-transform": "scale(" + e + ")",
                        "-webkit-transform": "scale(" + e + ")",
                        transform: "scale(" + e + ")"
                    })
                }
                ,
                i.onFinished = function() {
                    s.addClass(o),
                    n && n.addClass("ani-signgou"),
                    a.start()
                }
                ,
                i.start();
                var c = r("#J_milestone_time")
                  , l = new u(null,2800);
                l.onProgress = function(t) {
                    c.width(parseInt(78 * (e - 1) + 78 * t))
                }
                ,
                l.onFinished = function() {
                    e < t && l.start(),
                    e++,
                    3 == e || 5 == e || 7 == e ? (s = r(".signs-milestone_gift-" + e),
                    o = "ani-signbk",
                    n = null) : (s = r(".signs-milestone_gou-" + e),
                    o = "ani-signbggou",
                    n = s.children(".signs-milestone_g")),
                    i.start()
                }
                ,
                t && l.start()
            }
            ,
            n.prototype._showMileStone = function() {
                r("#shadow-layer").show(),
                r("#J_signs").fadeIn("fast"),
                this.integralStatic({
                    la: loginGetUserRes.data.LOGIN_ACCOUNT,
                    e2: 1,
                    e11: 1
                })
            }
            ,
            n.prototype._hideMileStone = function() {
                r("#J_signs").hide(),
                r("#shadow-layer").fadeOut("fast")
            }
            ,
            n.prototype.initSignBtn = function() {
                this.signs.isSign && (r("#J_btn_sign").hide(),
                r("#J_btn_signed").show())
            }
            ,
            n.prototype.integralStatic = function(t) {
                var e = "";
                t = t || {};
                for (key in t)
                    e += "&" + key + "=" + t[key];
                document.createElement("img").src = "//collectdata.gm99.com/ps.gif?id=8" + e
            }
            ,
            n.prototype.initTotalIntegral = function() {
                r("#J_integral_num").text(this.signs.totalIntegral),
                r("#J_total_integral").text(this.signs.totalIntegral)
            }
            ,
            n.prototype.SIajax = function() {
                var t = this
                  , e = !1;
                return r.ajax({
                    type: "get",
                    url: "/signin/sign",
                    dataType: "json",
                    async: !1,
                    success: function(i) {
                        1 == i.result ? (r("#si_num").html("+" + i.data.SIGN_GET_INTEGRAL),
                        r("#si_num").css("visibility", "visible").stop().animate({
                            top: -46,
                            opacity: 0
                        }, 500, function() {
                            r(this).removeAttr("style")
                        }),
                        r("#si_total").html(i.data.CONTINUE_SIGN),
                        r("#sign_in_btn").attr("class", "sign_in_after"),
                        r("#sign_number").html(t.rtnumber(i.data.USER_REAL_INTEGRAL)),
                        r("#si_btn").attr("data-num", 1).html("已簽"),
                        e = !0) : a.dialog({
                            content: i.msg
                        })
                    }
                }),
                e
            }
            ,
            n.prototype.rtnumber = function(t) {
                var e = t.toString().length;
                switch (e) {
                case 1:
                    return "0000000" + t;
                case 2:
                    return "000000" + t;
                case 3:
                    return "00000" + t;
                case 4:
                    return "0000" + t;
                case 5:
                    return "000" + t;
                case 6:
                    return "00" + t;
                case 7:
                    return "0" + t;
                default:
                    return t
                }
            }
            ,
            n.prototype._adParamProcess = function() {
                var t = ""
                  , e = a._GET("cid")
                  , i = a._GET("scid")
                  , s = a._GET("subid")
                  , n = a._GET("link_id")
                  , o = a._GET("game_id")
                  , c = a._GET("game_server")
                  , l = {
                    cid: e,
                    scid: i,
                    subid: s,
                    "link-id": n,
                    "game-id": o,
                    "game-server": c
                };
                r.each(l, function(t, e) {
                    null !== e && r("#reg-" + t).val(a.removeHtmlTag(e))
                });
                var u = {
                    cid: e,
                    scid: i,
                    subid: s,
                    link_id: n,
                    game_id: o,
                    game_server: c
                };
                r.each(u, function(e, i) {
                    null !== i && (t += "&" + a.removeHtmlTag(e) + "=" + a.removeHtmlTag(i))
                }),
                r("#baha-login-btns li a,.baha-login-btns li a,#rc-login-btns li a,#login-part-3 a,#hide-login-icons a").each(function() {
                    var e = r(this).attr("href");
                    "javascript:;" !== e && r(this).attr("href", e + t)
                })
            }
            ,
            n.prototype.showSignAnnounce = function() {
                r("#shadow-layer").show(),
                r("#J_sign_announce").fadeIn("fast")
            }
            ,
            n.prototype.closeSignAnnounce = function() {
                r("body").on("click", "#J_announce_close", function(t) {
                    t.preventDefault(),
                    r("#J_sign_announce").hide(),
                    r("#shadow-layer").fadeOut("fast")
                })
            }
            ,
            n.prototype.taskTipStatus = function() {}
        }
        .call(e, i, e, t),
        !(void 0 !== s && (t.exports = s))
    },
    12: function(t, e, i) {
        var s;
        s = function(t, e, i) {
            return function(t) {
                !function(t) {
                    function e() {
                        return t("<div/>")
                    }
                    var i = Math.abs
                      , s = Math.max
                      , n = Math.min
                      , r = Math.round;
                    t.imgAreaSelect = function(o, a) {
                        function c(t) {
                            return t + mt.left - vt.left
                        }
                        function l(t) {
                            return t + mt.top - vt.top
                        }
                        function u(t) {
                            return t - mt.left + vt.left
                        }
                        function d(t) {
                            return t - mt.top + vt.top
                        }
                        function p(t) {
                            return t.pageX - vt.left
                        }
                        function h(t) {
                            return t.pageY - vt.top
                        }
                        function f(t) {
                            var e = t || z
                              , i = t || H;
                            return {
                                x1: r(yt.x1 * e),
                                y1: r(yt.y1 * i),
                                x2: r(yt.x2 * e),
                                y2: r(yt.y2 * i),
                                width: r(yt.x2 * e) - r(yt.x1 * e),
                                height: r(yt.y2 * i) - r(yt.y1 * i)
                            }
                        }
                        function g(t, e, i, s, n) {
                            var o = n || z
                              , a = n || H;
                            yt = {
                                x1: r(t / o || 0),
                                y1: r(e / a || 0),
                                x2: r(i / o || 0),
                                y2: r(s / a || 0)
                            },
                            yt.width = yt.x2 - yt.x1,
                            yt.height = yt.y2 - yt.y1
                        }
                        function m() {
                            N && ut.width() && (mt = {
                                left: r(ut.offset().left),
                                top: r(ut.offset().top)
                            },
                            L = ut.innerWidth(),
                            F = ut.innerHeight(),
                            mt.top += ut.outerHeight() - F >> 1,
                            mt.left += ut.outerWidth() - L >> 1,
                            G = r(a.minWidth / z) || 0,
                            J = r(a.minHeight / H) || 0,
                            Y = r(n(a.maxWidth / z || 1 << 24, L)),
                            W = r(n(a.maxHeight / H || 1 << 24, F)),
                            "1.3.2" != t().jquery || "fixed" != bt || wt.getBoundingClientRect || (mt.top += s(document.body.scrollTop, wt.scrollTop),
                            mt.left += s(document.body.scrollLeft, wt.scrollLeft)),
                            vt = /absolute|relative/.test(K.css("position")) ? {
                                left: r(K.offset().left) - K.scrollLeft(),
                                top: r(K.offset().top) - K.scrollTop()
                            } : "fixed" == bt ? {
                                left: t(document).scrollLeft(),
                                top: t(document).scrollTop()
                            } : {
                                left: 0,
                                top: 0
                            },
                            j = c(0),
                            B = l(0),
                            (yt.x2 > L || yt.y2 > F) && x())
                        }
                        function v(e) {
                            if (Q) {
                                switch (dt.css({
                                    left: c(yt.x1),
                                    top: l(yt.y1)
                                }).add(pt).width(at = yt.width).height(ct = yt.height),
                                pt.add(ht).add(gt).css({
                                    left: 0,
                                    top: 0
                                }),
                                ht.width(s(at - ht.outerWidth() + ht.innerWidth(), 0)).height(s(ct - ht.outerHeight() + ht.innerHeight(), 0)),
                                t(ft[0]).css({
                                    left: j,
                                    top: B,
                                    width: yt.x1,
                                    height: F
                                }),
                                t(ft[1]).css({
                                    left: j + yt.x1,
                                    top: B,
                                    width: at,
                                    height: yt.y1
                                }),
                                t(ft[2]).css({
                                    left: j + yt.x2,
                                    top: B,
                                    width: L - yt.x2,
                                    height: F
                                }),
                                t(ft[3]).css({
                                    left: j + yt.x1,
                                    top: B + yt.y2,
                                    width: at,
                                    height: F - yt.y2
                                }),
                                at -= gt.outerWidth(),
                                ct -= gt.outerHeight(),
                                gt.length) {
                                case 8:
                                    t(gt[4]).css({
                                        left: at >> 1
                                    }),
                                    t(gt[5]).css({
                                        left: at,
                                        top: ct >> 1
                                    }),
                                    t(gt[6]).css({
                                        left: at >> 1,
                                        top: ct
                                    }),
                                    t(gt[7]).css({
                                        top: ct >> 1
                                    });
                                case 4:
                                    gt.slice(1, 3).css({
                                        left: at
                                    }),
                                    gt.slice(2, 4).css({
                                        top: ct
                                    })
                                }
                                e !== !1 && (t.imgAreaSelect.onKeyPress != Dt && t(document).unbind(t.imgAreaSelect.keyPress, t.imgAreaSelect.onKeyPress),
                                a.keys && t(document)[t.imgAreaSelect.keyPress](t.imgAreaSelect.onKeyPress = Dt)),
                                xt && ht.outerWidth() - ht.innerWidth() == 2 && (ht.css("margin", 0),
                                setTimeout(function() {
                                    ht.css("margin", "auto")
                                }, 0))
                            }
                        }
                        function _(t) {
                            m(),
                            v(t),
                            X = c(yt.x1),
                            tt = l(yt.y1),
                            et = c(yt.x2),
                            it = l(yt.y2)
                        }
                        function b(t, e) {
                            a.fadeSpeed ? t.fadeOut(a.fadeSpeed, e) : t.hide()
                        }
                        function y(t) {
                            var e = u(p(t)) - yt.x1
                              , i = d(h(t)) - yt.y1;
                            lt || (m(),
                            lt = !0,
                            dt.one("mouseout", function() {
                                lt = !1
                            })),
                            q = "",
                            a.resizable && (i <= a.resizeMargin ? q = "n" : i >= yt.height - a.resizeMargin && (q = "s"),
                            e <= a.resizeMargin ? q += "w" : e >= yt.width - a.resizeMargin && (q += "e")),
                            dt.css("cursor", q ? q + "-resize" : a.movable ? "move" : ""),
                            O && O.toggle()
                        }
                        function w(e) {
                            t("body").css("cursor", ""),
                            (a.autoHide || yt.width * yt.height == 0) && b(dt.add(ft), function() {
                                t(this).hide()
                            }),
                            t(document).unbind("mousemove", S),
                            dt.mousemove(y),
                            a.onSelectEnd(o, f())
                        }
                        function k(e) {
                            return 1 == e.which && (m(),
                            q ? (t("body").css("cursor", q + "-resize"),
                            X = c(yt[/w/.test(q) ? "x2" : "x1"]),
                            tt = l(yt[/n/.test(q) ? "y2" : "y1"]),
                            t(document).mousemove(S).one("mouseup", w),
                            dt.unbind("mousemove", y)) : a.movable ? (U = j + yt.x1 - p(e),
                            V = B + yt.y1 - h(e),
                            dt.unbind("mousemove", y),
                            t(document).mousemove(T).one("mouseup", function() {
                                a.onSelectEnd(o, f()),
                                t(document).unbind("mousemove", T),
                                dt.mousemove(y)
                            })) : ut.mousedown(e),
                            !1)
                        }
                        function D(t) {
                            Z && (t ? (et = s(j, n(j + L, X + i(it - tt) * Z * (et > X || -1))),
                            it = r(s(B, n(B + F, tt + i(et - X) / Z * (it > tt || -1)))),
                            et = r(et)) : (it = s(B, n(B + F, tt + i(et - X) / Z * (it > tt || -1))),
                            et = r(s(j, n(j + L, X + i(it - tt) * Z * (et > X || -1)))),
                            it = r(it)))
                        }
                        function x() {
                            X = n(X, j + L),
                            tt = n(tt, B + F),
                            i(et - X) < G && (et = X - G * (et < X || -1),
                            et < j ? X = j + G : et > j + L && (X = j + L - G)),
                            i(it - tt) < J && (it = tt - J * (it < tt || -1),
                            it < B ? tt = B + J : it > B + F && (tt = B + F - J)),
                            et = s(j, n(et, j + L)),
                            it = s(B, n(it, B + F)),
                            D(i(et - X) < i(it - tt) * Z),
                            i(et - X) > Y && (et = X - Y * (et < X || -1),
                            D()),
                            i(it - tt) > W && (it = tt - W * (it < tt || -1),
                            D(!0)),
                            yt = {
                                x1: u(n(X, et)),
                                x2: u(s(X, et)),
                                y1: d(n(tt, it)),
                                y2: d(s(tt, it)),
                                width: i(et - X),
                                height: i(it - tt)
                            },
                            v(),
                            a.onSelectChange(o, f())
                        }
                        function S(t) {
                            return et = /w|e|^$/.test(q) || Z ? p(t) : c(yt.x2),
                            it = /n|s|^$/.test(q) || Z ? h(t) : l(yt.y2),
                            x(),
                            !1
                        }
                        function C(e, i) {
                            et = (X = e) + yt.width,
                            it = (tt = i) + yt.height,
                            t.extend(yt, {
                                x1: u(X),
                                y1: d(tt),
                                x2: u(et),
                                y2: d(it)
                            }),
                            v(),
                            a.onSelectChange(o, f())
                        }
                        function T(t) {
                            return X = s(j, n(U + p(t), j + L - yt.width)),
                            tt = s(B, n(V + h(t), B + F - yt.height)),
                            C(X, tt),
                            t.preventDefault(),
                            !1
                        }
                        function I() {
                            t(document).unbind("mousemove", I),
                            m(),
                            et = X,
                            it = tt,
                            x(),
                            q = "",
                            ft.is(":visible") || dt.add(ft).hide().fadeIn(a.fadeSpeed || 0),
                            Q = !0,
                            t(document).unbind("mouseup", $).mousemove(S).one("mouseup", w),
                            dt.unbind("mousemove", y),
                            a.onSelectStart(o, f())
                        }
                        function $() {
                            t(document).unbind("mousemove", I).unbind("mouseup", $),
                            b(dt.add(ft)),
                            g(u(X), d(tt), u(X), d(tt)),
                            this instanceof t.imgAreaSelect || (a.onSelectChange(o, f()),
                            a.onSelectEnd(o, f()))
                        }
                        function P(e) {
                            return 1 == e.which && !ft.is(":animated") && (m(),
                            U = X = p(e),
                            V = tt = h(e),
                            t(document).mousemove(I).mouseup($),
                            !1)
                        }
                        function R() {
                            _(!1)
                        }
                        function A() {
                            N = !0,
                            M(a = t.extend({
                                classPrefix: "imgareaselect",
                                movable: !0,
                                parent: "body",
                                resizable: !0,
                                resizeMargin: 10,
                                onInit: function() {},
                                onSelectStart: function() {},
                                onSelectChange: function() {},
                                onSelectEnd: function() {}
                            }, a)),
                            dt.add(ft).css({
                                visibility: ""
                            }),
                            a.show && (Q = !0,
                            m(),
                            v(),
                            dt.add(ft).hide().fadeIn(a.fadeSpeed || 0)),
                            setTimeout(function() {
                                a.onInit(o, f())
                            }, 0)
                        }
                        function E(t, e) {
                            for (var i in e)
                                void 0 !== a[i] && t.css(e[i], a[i])
                        }
                        function M(i) {
                            if (i.parent && (K = t(i.parent)).append(dt.add(ft)),
                            t.extend(a, i),
                            m(),
                            null != i.handles) {
                                for (gt.remove(),
                                gt = t([]),
                                rt = i.handles ? "corners" == i.handles ? 4 : 8 : 0; rt--; )
                                    gt = gt.add(e());
                                gt.addClass(a.classPrefix + "-handle").css({
                                    position: "absolute",
                                    fontSize: 0,
                                    zIndex: _t + 1 || 1
                                }),
                                !parseInt(gt.css("width")) >= 0 && gt.width(5).height(5),
                                (ot = a.borderWidth) && gt.css({
                                    borderWidth: ot,
                                    borderStyle: "solid"
                                }),
                                E(gt, {
                                    borderColor1: "border-color",
                                    borderColor2: "background-color",
                                    borderOpacity: "opacity"
                                })
                            }
                            for (z = a.imageWidth / L || 1,
                            H = a.imageHeight / F || 1,
                            null != i.x1 && (g(i.x1, i.y1, i.x2, i.y2),
                            i.show = !i.hide),
                            i.keys && (a.keys = t.extend({
                                shift: 1,
                                ctrl: "resize"
                            }, i.keys)),
                            ft.addClass(a.classPrefix + "-outer"),
                            pt.addClass(a.classPrefix + "-selection"),
                            rt = 0; rt++ < 4; )
                                t(ht[rt - 1]).addClass(a.classPrefix + "-border" + rt);
                            E(pt, {
                                selectionColor: "background-color",
                                selectionOpacity: "opacity"
                            }),
                            E(ht, {
                                borderOpacity: "opacity",
                                borderWidth: "border-width"
                            }),
                            E(ft, {
                                outerColor: "background-color",
                                outerOpacity: "opacity"
                            }),
                            (ot = a.borderColor1) && t(ht[0]).css({
                                borderStyle: "solid",
                                borderColor: ot
                            }),
                            (ot = a.borderColor2) && t(ht[1]).css({
                                borderStyle: "dashed",
                                borderColor: ot
                            }),
                            dt.append(pt.add(ht).add(O)).append(gt),
                            xt && ((ot = (ft.css("filter") || "").match(/opacity=(\d+)/)) && ft.css("opacity", ot[1] / 100),
                            (ot = (ht.css("filter") || "").match(/opacity=(\d+)/)) && ht.css("opacity", ot[1] / 100)),
                            i.hide ? b(dt.add(ft)) : i.show && N && (Q = !0,
                            dt.add(ft).fadeIn(a.fadeSpeed || 0),
                            _()),
                            Z = (nt = (a.aspectRatio || "").split(/:/))[0] / nt[1],
                            ut.add(ft).unbind("mousedown", P),
                            a.disable || a.enable === !1 ? (dt.unbind("mousemove", y).unbind("mousedown", k),
                            t(window).unbind("resize", R)) : ((a.enable || a.disable === !1) && ((a.resizable || a.movable) && dt.mousemove(y).mousedown(k),
                            t(window).resize(R)),
                            a.persistent || ut.add(ft).mousedown(P)),
                            a.enable = a.disable = void 0
                        }
                        var N, O, j, B, L, F, K, U, V, z, H, q, G, J, Y, W, Z, Q, X, tt, et, it, st, nt, rt, ot, at, ct, lt, ut = t(o), dt = e(), pt = e(), ht = e().add(e()).add(e()).add(e()), ft = e().add(e()).add(e()).add(e()), gt = t([]), mt = {
                            left: 0,
                            top: 0
                        }, vt = {
                            left: 0,
                            top: 0
                        }, _t = 0, bt = "absolute", yt = {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 0,
                            width: 0,
                            height: 0
                        }, wt = document.documentElement, kt = navigator.userAgent, Dt = function(t) {
                            var e, i, r = a.keys, o = t.keyCode;
                            if (e = isNaN(r.alt) || !t.altKey && !t.originalEvent.altKey ? !isNaN(r.ctrl) && t.ctrlKey ? r.ctrl : !isNaN(r.shift) && t.shiftKey ? r.shift : isNaN(r.arrows) ? 10 : r.arrows : r.alt,
                            "resize" == r.arrows || "resize" == r.shift && t.shiftKey || "resize" == r.ctrl && t.ctrlKey || "resize" == r.alt && (t.altKey || t.originalEvent.altKey)) {
                                switch (o) {
                                case 37:
                                    e = -e;
                                case 39:
                                    i = s(X, et),
                                    X = n(X, et),
                                    et = s(i + e, X),
                                    D();
                                    break;
                                case 38:
                                    e = -e;
                                case 40:
                                    i = s(tt, it),
                                    tt = n(tt, it),
                                    it = s(i + e, tt),
                                    D(!0);
                                    break;
                                default:
                                    return
                                }
                                x()
                            } else
                                switch (X = n(X, et),
                                tt = n(tt, it),
                                o) {
                                case 37:
                                    C(s(X - e, j), tt);
                                    break;
                                case 38:
                                    C(X, s(tt - e, B));
                                    break;
                                case 39:
                                    C(X + n(e, L - u(et)), tt);
                                    break;
                                case 40:
                                    C(X, tt + n(e, F - d(it)));
                                    break;
                                default:
                                    return
                                }
                            return !1
                        };
                        this.remove = function() {
                            M({
                                disable: !0
                            }),
                            dt.add(ft).remove()
                        }
                        ,
                        this.getOptions = function() {
                            return a
                        }
                        ,
                        this.setOptions = M,
                        this.getSelection = f,
                        this.setSelection = g,
                        this.cancelSelection = $,
                        this.update = _;
                        var xt = (/msie ([\w.]+)/i.exec(kt) || [])[1]
                          , St = /opera/i.test(kt)
                          , Ct = /webkit/i.test(kt) && !/chrome/i.test(kt);
                        for (st = ut; st.length; )
                            _t = s(_t, isNaN(st.css("z-index")) ? _t : st.css("z-index")),
                            "fixed" == st.css("position") && (bt = "fixed"),
                            st = st.parent(":not(body)");
                        _t = a.zIndex || _t,
                        xt && ut.attr("unselectable", "on"),
                        t.imgAreaSelect.keyPress = xt || Ct ? "keydown" : "keypress",
                        St && (O = e().css({
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: _t + 2 || 2
                        })),
                        dt.add(ft).css({
                            visibility: "hidden",
                            position: bt,
                            overflow: "hidden",
                            zIndex: _t || "0"
                        }),
                        dt.css({
                            zIndex: _t + 2 || 2
                        }),
                        pt.add(ht).css({
                            position: "absolute",
                            fontSize: 0
                        }),
                        o.complete || "complete" == o.readyState || !ut.is("img") ? A() : ut.one("load", A),
                        !N && xt && xt >= 7 && (o.src = o.src)
                    }
                    ,
                    t.fn.imgAreaSelect = function(e) {
                        return e = e || {},
                        this.each(function() {
                            t(this).data("imgAreaSelect") ? e.remove ? (t(this).data("imgAreaSelect").remove(),
                            t(this).removeData("imgAreaSelect")) : t(this).data("imgAreaSelect").setOptions(e) : e.remove || (void 0 === e.enable && void 0 === e.disable && (e.enable = !0),
                            t(this).data("imgAreaSelect", new t.imgAreaSelect(this,e)))
                        }),
                        e.instance ? t(this).data("imgAreaSelect") : this
                    }
                }(jQuery)
            }
        }
        .call(e, i, e, t),
        /*!
	 * jquery.scrollLoading.js
	*/
        !(void 0 !== s && (t.exports = s))
    },
    14: function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, moudles) {
            return function(jquery) {
                !function($) {
                    function sc_setScroll(t, e, i) {
                        return "transition" == i.transition && "swing" == e && (e = "ease"),
                        {
                            anims: [],
                            duration: t,
                            orgDuration: t,
                            easing: e,
                            startTime: getTime()
                        }
                    }
                    function sc_startScroll(t, e) {
                        for (var i = 0, s = t.anims.length; s > i; i++) {
                            var n = t.anims[i];
                            n && n[0][e.transition](n[1], t.duration, t.easing, n[2])
                        }
                    }
                    function sc_stopScroll(t, e) {
                        is_boolean(e) || (e = !0),
                        is_object(t.pre) && sc_stopScroll(t.pre, e);
                        for (var i = 0, s = t.anims.length; s > i; i++) {
                            var n = t.anims[i];
                            n[0].stop(!0),
                            e && (n[0].css(n[1]),
                            is_function(n[2]) && n[2]())
                        }
                        is_object(t.post) && sc_stopScroll(t.post, e)
                    }
                    function sc_afterScroll(t, e, i) {
                        switch (e && e.remove(),
                        i.fx) {
                        case "fade":
                        case "crossfade":
                        case "cover-fade":
                        case "uncover-fade":
                            t.css("opacity", 1),
                            t.css("filter", "")
                        }
                    }
                    function sc_fireCallbacks(t, e, i, s, n) {
                        if (e[i] && e[i].call(t, s),
                        n[i].length)
                            for (var r = 0, o = n[i].length; o > r; r++)
                                n[i][r].call(t, s);
                        return []
                    }
                    function sc_fireQueue(t, e, i) {
                        return e.length && (t.trigger(cf_e(e[0][0], i), e[0][1]),
                        e.shift()),
                        e
                    }
                    function sc_hideHiddenItems(t) {
                        t.each(function() {
                            var t = $(this);
                            t.data("_cfs_isHidden", t.is(":hidden")).hide()
                        })
                    }
                    function sc_showHiddenItems(t) {
                        t && t.each(function() {
                            var t = $(this);
                            t.data("_cfs_isHidden") || t.show()
                        })
                    }
                    function sc_clearTimers(t) {
                        return t.auto && clearTimeout(t.auto),
                        t.progress && clearInterval(t.progress),
                        t
                    }
                    function sc_mapCallbackArguments(t, e, i, s, n, r, o) {
                        return {
                            width: o.width,
                            height: o.height,
                            items: {
                                old: t,
                                skipped: e,
                                visible: i
                            },
                            scroll: {
                                items: s,
                                direction: n,
                                duration: r
                            }
                        }
                    }
                    function sc_getDuration(t, e, i, s) {
                        var n = t.duration;
                        return "none" == t.fx ? 0 : ("auto" == n ? n = e.scroll.duration / e.scroll.items * i : 10 > n && (n = s / n),
                        1 > n ? 0 : ("fade" == t.fx && (n /= 2),
                        Math.round(n)))
                    }
                    function nv_showNavi(t, e, i) {
                        var s = is_number(t.items.minimum) ? t.items.minimum : t.items.visible + 1;
                        if ("show" == e || "hide" == e)
                            var n = e;
                        else if (s > e) {
                            debug(i, "Not enough items (" + e + " total, " + s + " needed): Hiding navigation.");
                            var n = "hide"
                        } else
                            var n = "show";
                        var r = "show" == n ? "removeClass" : "addClass"
                          , o = cf_c("hidden", i);
                        t.auto.button && t.auto.button[n]()[r](o),
                        t.prev.button && t.prev.button[n]()[r](o),
                        t.next.button && t.next.button[n]()[r](o),
                        t.pagination.container && t.pagination.container[n]()[r](o)
                    }
                    function nv_enableNavi(t, e, i) {
                        if (!t.circular && !t.infinite) {
                            var s = ("removeClass" == e || "addClass" == e) && e
                              , n = cf_c("disabled", i);
                            if (t.auto.button && s && t.auto.button[s](n),
                            t.prev.button) {
                                var r = s || 0 == e ? "addClass" : "removeClass";
                                t.prev.button[r](n)
                            }
                            if (t.next.button) {
                                var r = s || e == t.items.visible ? "addClass" : "removeClass";
                                t.next.button[r](n)
                            }
                        }
                    }
                    function go_getObject(t, e) {
                        return is_function(e) ? e = e.call(t) : is_undefined(e) && (e = {}),
                        e
                    }
                    function go_getItemsObject(t, e) {
                        return e = go_getObject(t, e),
                        is_number(e) ? e = {
                            visible: e
                        } : "variable" == e ? e = {
                            visible: e,
                            width: e,
                            height: e
                        } : is_object(e) || (e = {}),
                        e
                    }
                    function go_getScrollObject(t, e) {
                        return e = go_getObject(t, e),
                        is_number(e) ? e = 50 >= e ? {
                            items: e
                        } : {
                            duration: e
                        } : is_string(e) ? e = {
                            easing: e
                        } : is_object(e) || (e = {}),
                        e
                    }
                    function go_getNaviObject(t, e) {
                        if (e = go_getObject(t, e),
                        is_string(e)) {
                            var i = cf_getKeyCode(e);
                            e = -1 == i ? $(e) : i
                        }
                        return e
                    }
                    function go_getAutoObject(t, e) {
                        return e = go_getNaviObject(t, e),
                        is_jquery(e) ? e = {
                            button: e
                        } : is_boolean(e) ? e = {
                            play: e
                        } : is_number(e) && (e = {
                            timeoutDuration: e
                        }),
                        e.progress && (is_string(e.progress) || is_jquery(e.progress)) && (e.progress = {
                            bar: e.progress
                        }),
                        e
                    }
                    function go_complementAutoObject(t, e) {
                        return is_function(e.button) && (e.button = e.button.call(t)),
                        is_string(e.button) && (e.button = $(e.button)),
                        is_boolean(e.play) || (e.play = !0),
                        is_number(e.delay) || (e.delay = 0),
                        is_undefined(e.pauseOnEvent) && (e.pauseOnEvent = !0),
                        is_boolean(e.pauseOnResize) || (e.pauseOnResize = !0),
                        is_number(e.timeoutDuration) || (e.timeoutDuration = 10 > e.duration ? 2500 : 5 * e.duration),
                        e.progress && (is_function(e.progress.bar) && (e.progress.bar = e.progress.bar.call(t)),
                        is_string(e.progress.bar) && (e.progress.bar = $(e.progress.bar)),
                        e.progress.bar ? (is_function(e.progress.updater) || (e.progress.updater = $.fn.carouFredSel.progressbarUpdater),
                        is_number(e.progress.interval) || (e.progress.interval = 50)) : e.progress = !1),
                        e
                    }
                    function go_getPrevNextObject(t, e) {
                        return e = go_getNaviObject(t, e),
                        is_jquery(e) ? e = {
                            button: e
                        } : is_number(e) && (e = {
                            key: e
                        }),
                        e
                    }
                    function go_complementPrevNextObject(t, e) {
                        return is_function(e.button) && (e.button = e.button.call(t)),
                        is_string(e.button) && (e.button = $(e.button)),
                        is_string(e.key) && (e.key = cf_getKeyCode(e.key)),
                        e
                    }
                    function go_getPaginationObject(t, e) {
                        return e = go_getNaviObject(t, e),
                        is_jquery(e) ? e = {
                            container: e
                        } : is_boolean(e) && (e = {
                            keys: e
                        }),
                        e
                    }
                    function go_complementPaginationObject(t, e) {
                        return is_function(e.container) && (e.container = e.container.call(t)),
                        is_string(e.container) && (e.container = $(e.container)),
                        is_number(e.items) || (e.items = !1),
                        is_boolean(e.keys) || (e.keys = !1),
                        is_function(e.anchorBuilder) || is_false(e.anchorBuilder) || (e.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder),
                        is_number(e.deviation) || (e.deviation = 0),
                        e
                    }
                    function go_getSwipeObject(t, e) {
                        return is_function(e) && (e = e.call(t)),
                        is_undefined(e) && (e = {
                            onTouch: !1
                        }),
                        is_true(e) ? e = {
                            onTouch: e
                        } : is_number(e) && (e = {
                            items: e
                        }),
                        e
                    }
                    function go_complementSwipeObject(t, e) {
                        return is_boolean(e.onTouch) || (e.onTouch = !0),
                        is_boolean(e.onMouse) || (e.onMouse = !1),
                        is_object(e.options) || (e.options = {}),
                        is_boolean(e.options.triggerOnTouchEnd) || (e.options.triggerOnTouchEnd = !1),
                        e
                    }
                    function go_getMousewheelObject(t, e) {
                        return is_function(e) && (e = e.call(t)),
                        is_true(e) ? e = {} : is_number(e) ? e = {
                            items: e
                        } : is_undefined(e) && (e = !1),
                        e
                    }
                    function go_complementMousewheelObject(t, e) {
                        return e
                    }
                    function gn_getItemIndex(t, e, i, s, n) {
                        if (is_string(t) && (t = $(t, n)),
                        is_object(t) && (t = $(t, n)),
                        is_jquery(t) ? (t = n.children().index(t),
                        is_boolean(i) || (i = !1)) : is_boolean(i) || (i = !0),
                        is_number(t) || (t = 0),
                        is_number(e) || (e = 0),
                        i && (t += s.first),
                        t += e,
                        s.total > 0) {
                            for (; t >= s.total; )
                                t -= s.total;
                            for (; 0 > t; )
                                t += s.total
                        }
                        return t
                    }
                    function gn_getVisibleItemsPrev(t, e, i) {
                        for (var s = 0, n = 0, r = i; r >= 0; r--) {
                            var o = t.eq(r);
                            if (s += o.is(":visible") ? o[e.d.outerWidth](!0) : 0,
                            s > e.maxDimension)
                                return n;
                            0 == r && (r = t.length),
                            n++
                        }
                    }
                    function gn_getVisibleItemsPrevFilter(t, e, i) {
                        return gn_getItemsPrevFilter(t, e.items.filter, e.items.visibleConf.org, i)
                    }
                    function gn_getScrollItemsPrevFilter(t, e, i, s) {
                        return gn_getItemsPrevFilter(t, e.items.filter, s, i)
                    }
                    function gn_getItemsPrevFilter(t, e, i, s) {
                        for (var n = 0, r = 0, o = s, a = t.length; o >= 0; o--) {
                            if (r++,
                            r == a)
                                return r;
                            var c = t.eq(o);
                            if (c.is(e) && (n++,
                            n == i))
                                return r;
                            0 == o && (o = a)
                        }
                    }
                    function gn_getVisibleOrg(t, e) {
                        return e.items.visibleConf.org || t.children().slice(0, e.items.visible).filter(e.items.filter).length
                    }
                    function gn_getVisibleItemsNext(t, e, i) {
                        for (var s = 0, n = 0, r = i, o = t.length - 1; o >= r; r++) {
                            var a = t.eq(r);
                            if (s += a.is(":visible") ? a[e.d.outerWidth](!0) : 0,
                            s > e.maxDimension)
                                return n;
                            if (n++,
                            n == o + 1)
                                return n;
                            r == o && (r = -1)
                        }
                    }
                    function gn_getVisibleItemsNextTestCircular(t, e, i, s) {
                        var n = gn_getVisibleItemsNext(t, e, i);
                        return e.circular || i + n > s && (n = s - i),
                        n
                    }
                    function gn_getVisibleItemsNextFilter(t, e, i) {
                        return gn_getItemsNextFilter(t, e.items.filter, e.items.visibleConf.org, i, e.circular)
                    }
                    function gn_getScrollItemsNextFilter(t, e, i, s) {
                        return gn_getItemsNextFilter(t, e.items.filter, s + 1, i, e.circular) - 1
                    }
                    function gn_getItemsNextFilter(t, e, i, s) {
                        for (var n = 0, r = 0, o = s, a = t.length - 1; a >= o; o++) {
                            if (r++,
                            r >= a)
                                return r;
                            var c = t.eq(o);
                            if (c.is(e) && (n++,
                            n == i))
                                return r;
                            o == a && (o = -1)
                        }
                    }
                    function gi_getCurrentItems(t, e) {
                        return t.slice(0, e.items.visible)
                    }
                    function gi_getOldItemsPrev(t, e, i) {
                        return t.slice(i, e.items.visibleConf.old + i)
                    }
                    function gi_getNewItemsPrev(t, e) {
                        return t.slice(0, e.items.visible)
                    }
                    function gi_getOldItemsNext(t, e) {
                        return t.slice(0, e.items.visibleConf.old)
                    }
                    function gi_getNewItemsNext(t, e, i) {
                        return t.slice(i, e.items.visible + i)
                    }
                    function sz_storeMargin(t, e, i) {
                        e.usePadding && (is_string(i) || (i = "_cfs_origCssMargin"),
                        t.each(function() {
                            var t = $(this)
                              , s = parseInt(t.css(e.d.marginRight), 10);
                            is_number(s) || (s = 0),
                            t.data(i, s)
                        }))
                    }
                    function sz_resetMargin(t, e, i) {
                        if (e.usePadding) {
                            var s = !!is_boolean(i) && i;
                            is_number(i) || (i = 0),
                            sz_storeMargin(t, e, "_cfs_tempCssMargin"),
                            t.each(function() {
                                var t = $(this);
                                t.css(e.d.marginRight, s ? t.data("_cfs_tempCssMargin") : i + t.data("_cfs_origCssMargin"))
                            })
                        }
                    }
                    function sz_storeOrigCss(t) {
                        t.each(function() {
                            var t = $(this);
                            t.data("_cfs_origCss", t.attr("style") || "")
                        })
                    }
                    function sz_restoreOrigCss(t) {
                        t.each(function() {
                            var t = $(this);
                            t.attr("style", t.data("_cfs_origCss") || "")
                        })
                    }
                    function sz_setResponsiveSizes(t, e) {
                        var i = (t.items.visible,
                        t.items[t.d.width])
                          , s = t[t.d.height]
                          , n = is_percentage(s);
                        e.each(function() {
                            var e = $(this)
                              , r = i - ms_getPaddingBorderMargin(e, t, "Width");
                            e[t.d.width](r),
                            n && e[t.d.height](ms_getPercentage(r, s))
                        })
                    }
                    function sz_setSizes(t, e) {
                        var i = t.parent()
                          , s = t.children()
                          , n = gi_getCurrentItems(s, e)
                          , r = cf_mapWrapperSizes(ms_getSizes(n, e, !0), e, !1);
                        if (i.css(r),
                        e.usePadding) {
                            var o = e.padding
                              , a = o[e.d[1]];
                            e.align && 0 > a && (a = 0);
                            var c = n.last();
                            c.css(e.d.marginRight, c.data("_cfs_origCssMargin") + a),
                            t.css(e.d.top, o[e.d[0]]),
                            t.css(e.d.left, o[e.d[3]])
                        }
                        return t.css(e.d.width, r[e.d.width] + 2 * ms_getTotalSize(s, e, "width")),
                        t.css(e.d.height, ms_getLargestSize(s, e, "height")),
                        r
                    }
                    function ms_getSizes(t, e, i) {
                        return [ms_getTotalSize(t, e, "width", i), ms_getLargestSize(t, e, "height", i)]
                    }
                    function ms_getLargestSize(t, e, i, s) {
                        return is_boolean(s) || (s = !1),
                        is_number(e[e.d[i]]) && s ? e[e.d[i]] : is_number(e.items[e.d[i]]) ? e.items[e.d[i]] : (i = i.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight",
                        ms_getTrueLargestSize(t, e, i))
                    }
                    function ms_getTrueLargestSize(t, e, i) {
                        for (var s = 0, n = 0, r = t.length; r > n; n++) {
                            var o = t.eq(n)
                              , a = o.is(":visible") ? o[e.d[i]](!0) : 0;
                            a > s && (s = a)
                        }
                        return s
                    }
                    function ms_getTotalSize(t, e, i, s) {
                        if (is_boolean(s) || (s = !1),
                        is_number(e[e.d[i]]) && s)
                            return e[e.d[i]];
                        if (is_number(e.items[e.d[i]]))
                            return e.items[e.d[i]] * t.length;
                        for (var n = i.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", r = 0, o = 0, a = t.length; a > o; o++) {
                            var c = t.eq(o);
                            r += c.is(":visible") ? c[e.d[n]](!0) : 0
                        }
                        return r
                    }
                    function ms_getParentSize(t, e, i) {
                        var s = t.is(":visible");
                        s && t.hide();
                        var n = t.parent()[e.d[i]]();
                        return s && t.show(),
                        n
                    }
                    function ms_getMaxDimension(t, e) {
                        return is_number(t[t.d.width]) ? t[t.d.width] : e
                    }
                    function ms_hasVariableSizes(t, e, i) {
                        for (var s = !1, n = !1, r = 0, o = t.length; o > r; r++) {
                            var a = t.eq(r)
                              , c = a.is(":visible") ? a[e.d[i]](!0) : 0;
                            s === !1 ? s = c : s != c && (n = !0),
                            0 == s && (n = !0)
                        }
                        return n
                    }
                    function ms_getPaddingBorderMargin(t, e, i) {
                        return t[e.d["outer" + i]](!0) - t[e.d[i.toLowerCase()]]()
                    }
                    function ms_getPercentage(t, e) {
                        if (is_percentage(e)) {
                            if (e = parseInt(e.slice(0, -1), 10),
                            !is_number(e))
                                return t;
                            t *= e / 100
                        }
                        return t
                    }
                    function cf_e(t, e, i, s, n) {
                        return is_boolean(i) || (i = !0),
                        is_boolean(s) || (s = !0),
                        is_boolean(n) || (n = !1),
                        i && (t = e.events.prefix + t),
                        s && (t = t + "." + e.events.namespace),
                        s && n && (t += e.serialNumber),
                        t
                    }
                    function cf_c(t, e) {
                        return is_string(e.classnames[t]) ? e.classnames[t] : t
                    }
                    function cf_mapWrapperSizes(t, e, i) {
                        is_boolean(i) || (i = !0);
                        var s = e.usePadding && i ? e.padding : [0, 0, 0, 0]
                          , n = {};
                        return n[e.d.width] = t[0] + s[1] + s[3],
                        n[e.d.height] = t[1] + s[0] + s[2],
                        n
                    }
                    function cf_sortParams(t, e) {
                        for (var i = [], s = 0, n = t.length; n > s; s++)
                            for (var r = 0, o = e.length; o > r; r++)
                                if (e[r].indexOf(typeof t[s]) > -1 && is_undefined(i[r])) {
                                    i[r] = t[s];
                                    break
                                }
                        return i
                    }
                    function cf_getPadding(t) {
                        if (is_undefined(t))
                            return [0, 0, 0, 0];
                        if (is_number(t))
                            return [t, t, t, t];
                        if (is_string(t) && (t = t.split("px").join("").split("em").join("").split(" ")),
                        !is_array(t))
                            return [0, 0, 0, 0];
                        for (var e = 0; 4 > e; e++)
                            t[e] = parseInt(t[e], 10);
                        switch (t.length) {
                        case 0:
                            return [0, 0, 0, 0];
                        case 1:
                            return [t[0], t[0], t[0], t[0]];
                        case 2:
                            return [t[0], t[1], t[0], t[1]];
                        case 3:
                            return [t[0], t[1], t[2], t[1]];
                        default:
                            return [t[0], t[1], t[2], t[3]]
                        }
                    }
                    function cf_getAlignPadding(t, e) {
                        var i = is_number(e[e.d.width]) ? Math.ceil(e[e.d.width] - ms_getTotalSize(t, e, "width")) : 0;
                        switch (e.align) {
                        case "left":
                            return [0, i];
                        case "right":
                            return [i, 0];
                        case "center":
                        default:
                            return [Math.ceil(i / 2), Math.floor(i / 2)]
                        }
                    }
                    function cf_getDimensions(t) {
                        for (var e = [["width", "innerWidth", "outerWidth", "height", "innerHeight", "outerHeight", "left", "top", "marginRight", 0, 1, 2, 3], ["height", "innerHeight", "outerHeight", "width", "innerWidth", "outerWidth", "top", "left", "marginBottom", 3, 2, 1, 0]], i = e[0].length, s = "right" == t.direction || "left" == t.direction ? 0 : 1, n = {}, r = 0; i > r; r++)
                            n[e[0][r]] = e[s][r];
                        return n
                    }
                    function cf_getAdjust(t, e, i, s) {
                        var n = t;
                        if (is_function(i))
                            n = i.call(s, n);
                        else if (is_string(i)) {
                            var r = i.split("+")
                              , o = i.split("-");
                            if (o.length > r.length)
                                var a = !0
                                  , c = o[0]
                                  , l = o[1];
                            else
                                var a = !1
                                  , c = r[0]
                                  , l = r[1];
                            switch (c) {
                            case "even":
                                n = 1 == t % 2 ? t - 1 : t;
                                break;
                            case "odd":
                                n = 0 == t % 2 ? t - 1 : t;
                                break;
                            default:
                                n = t
                            }
                            l = parseInt(l, 10),
                            is_number(l) && (a && (l = -l),
                            n += l)
                        }
                        return (!is_number(n) || 1 > n) && (n = 1),
                        n
                    }
                    function cf_getItemsAdjust(t, e, i, s) {
                        return cf_getItemAdjustMinMax(cf_getAdjust(t, e, i, s), e.items.visibleConf)
                    }
                    function cf_getItemAdjustMinMax(t, e) {
                        return is_number(e.min) && e.min > t && (t = e.min),
                        is_number(e.max) && t > e.max && (t = e.max),
                        1 > t && (t = 1),
                        t
                    }
                    function cf_getSynchArr(t) {
                        is_array(t) || (t = [[t]]),
                        is_array(t[0]) || (t = [t]);
                        for (var e = 0, i = t.length; i > e; e++)
                            is_string(t[e][0]) && (t[e][0] = $(t[e][0])),
                            is_boolean(t[e][1]) || (t[e][1] = !0),
                            is_boolean(t[e][2]) || (t[e][2] = !0),
                            is_number(t[e][3]) || (t[e][3] = 0);
                        return t
                    }
                    function cf_getKeyCode(t) {
                        return "right" == t ? 39 : "left" == t ? 37 : "up" == t ? 38 : "down" == t ? 40 : -1
                    }
                    function cf_setCookie(t, e, i) {
                        if (t) {
                            var s = e.triggerHandler(cf_e("currentPosition", i));
                            $.fn.carouFredSel.cookie.set(t, s)
                        }
                    }
                    function cf_getCookie(t) {
                        var e = $.fn.carouFredSel.cookie.get(t);
                        return "" == e ? 0 : e
                    }
                    function in_mapCss(t, e) {
                        for (var i = {}, s = 0, n = e.length; n > s; s++)
                            i[e[s]] = t.css(e[s]);
                        return i
                    }
                    function in_complementItems(t, e, i, s) {
                        return is_object(t.visibleConf) || (t.visibleConf = {}),
                        is_object(t.sizesConf) || (t.sizesConf = {}),
                        0 == t.start && is_number(s) && (t.start = s),
                        is_object(t.visible) ? (t.visibleConf.min = t.visible.min,
                        t.visibleConf.max = t.visible.max,
                        t.visible = !1) : is_string(t.visible) ? ("variable" == t.visible ? t.visibleConf.variable = !0 : t.visibleConf.adjust = t.visible,
                        t.visible = !1) : is_function(t.visible) && (t.visibleConf.adjust = t.visible,
                        t.visible = !1),
                        is_string(t.filter) || (t.filter = i.filter(":hidden").length > 0 ? ":visible" : "*"),
                        t[e.d.width] || (e.responsive ? (debug(!0, "Set a " + e.d.width + " for the items!"),
                        t[e.d.width] = ms_getTrueLargestSize(i, e, "outerWidth")) : t[e.d.width] = ms_hasVariableSizes(i, e, "outerWidth") ? "variable" : i[e.d.outerWidth](!0)),
                        t[e.d.height] || (t[e.d.height] = ms_hasVariableSizes(i, e, "outerHeight") ? "variable" : i[e.d.outerHeight](!0)),
                        t.sizesConf.width = t.width,
                        t.sizesConf.height = t.height,
                        t
                    }
                    function in_complementVisibleItems(t, e) {
                        return "variable" == t.items[t.d.width] && (t.items.visibleConf.variable = !0),
                        t.items.visibleConf.variable || (is_number(t[t.d.width]) ? t.items.visible = Math.floor(t[t.d.width] / t.items[t.d.width]) : (t.items.visible = Math.floor(e / t.items[t.d.width]),
                        t[t.d.width] = t.items.visible * t.items[t.d.width],
                        t.items.visibleConf.adjust || (t.align = !1)),
                        ("Infinity" == t.items.visible || 1 > t.items.visible) && (debug(!0, 'Not a valid number of visible items: Set to "variable".'),
                        t.items.visibleConf.variable = !0)),
                        t
                    }
                    function in_complementPrimarySize(t, e, i) {
                        return "auto" == t && (t = ms_getTrueLargestSize(i, e, "outerWidth")),
                        t
                    }
                    function in_complementSecondarySize(t, e, i) {
                        return "auto" == t && (t = ms_getTrueLargestSize(i, e, "outerHeight")),
                        t || (t = e.items[e.d.height]),
                        t
                    }
                    function in_getAlignPadding(t, e) {
                        var i = cf_getAlignPadding(gi_getCurrentItems(e, t), t);
                        return t.padding[t.d[1]] = i[1],
                        t.padding[t.d[3]] = i[0],
                        t
                    }
                    function in_getResponsiveValues(t, e) {
                        var i = cf_getItemAdjustMinMax(Math.ceil(t[t.d.width] / t.items[t.d.width]), t.items.visibleConf);
                        i > e.length && (i = e.length);
                        var s = Math.floor(t[t.d.width] / i);
                        return t.items.visible = i,
                        t.items[t.d.width] = s,
                        t[t.d.width] = i * s,
                        t
                    }
                    function bt_pauseOnHoverConfig(t) {
                        if (is_string(t))
                            var e = t.indexOf("immediate") > -1
                              , i = t.indexOf("resume") > -1;
                        else
                            var e = i = !1;
                        return [e, i]
                    }
                    function bt_mousesheelNumber(t) {
                        return is_number(t) ? t : null
                    }
                    function is_null(t) {
                        return null === t
                    }
                    function is_undefined(t) {
                        return is_null(t) || void 0 === t || "" === t || "undefined" === t
                    }
                    function is_array(t) {
                        return t instanceof Array
                    }
                    function is_jquery(t) {
                        return t instanceof jQuery
                    }
                    function is_object(t) {
                        return (t instanceof Object || "object" == typeof t) && !is_null(t) && !is_jquery(t) && !is_array(t) && !is_function(t)
                    }
                    function is_number(t) {
                        return (t instanceof Number || "number" == typeof t) && !isNaN(t)
                    }
                    function is_string(t) {
                        return (t instanceof String || "string" == typeof t) && !is_undefined(t) && !is_true(t) && !is_false(t)
                    }
                    function is_function(t) {
                        return t instanceof Function || "function" == typeof t
                    }
                    function is_boolean(t) {
                        return t instanceof Boolean || "boolean" == typeof t || is_true(t) || is_false(t)
                    }
                    function is_true(t) {
                        return t === !0 || "true" === t
                    }
                    function is_false(t) {
                        return t === !1 || "false" === t
                    }
                    function is_percentage(t) {
                        return is_string(t) && "%" == t.slice(-1)
                    }
                    function getTime() {
                        return (new Date).getTime()
                    }
                    function deprecated(t, e) {
                        debug(!0, t + " is DEPRECATED, support for it will be removed. Use " + e + " instead.")
                    }
                    function debug(t, e) {
                        if (!is_undefined(window.console) && !is_undefined(window.console.log)) {
                            if (is_object(t)) {
                                var i = " (" + t.selector + ")";
                                t = t.debug
                            } else
                                var i = "";
                            if (!t)
                                return !1;
                            e = is_string(e) ? "carouFredSel" + i + ": " + e : ["carouFredSel" + i + ":", e],
                            window.console.log(e)
                        }
                        return !1
                    }
                    $.fn.carouFredSel || ($.fn.caroufredsel = $.fn.carouFredSel = function(options, configs) {
                        if (0 == this.length)
                            return debug(!0, 'No element found for "' + this.selector + '".'),
                            this;
                        if (this.length > 1)
                            return this.each(function() {
                                $(this).carouFredSel(options, configs)
                            });
                        var $cfs = this
                          , $tt0 = this[0]
                          , starting_position = !1;
                        $cfs.data("_cfs_isCarousel") && (starting_position = $cfs.triggerHandler("_cfs_triggerEvent", "currentPosition"),
                        $cfs.trigger("_cfs_triggerEvent", ["destroy", !0]));
                        var FN = {};
                        FN._init = function(t, e, i) {
                            t = go_getObject($tt0, t),
                            t.items = go_getItemsObject($tt0, t.items),
                            t.scroll = go_getScrollObject($tt0, t.scroll),
                            t.auto = go_getAutoObject($tt0, t.auto),
                            t.prev = go_getPrevNextObject($tt0, t.prev),
                            t.next = go_getPrevNextObject($tt0, t.next),
                            t.pagination = go_getPaginationObject($tt0, t.pagination),
                            t.swipe = go_getSwipeObject($tt0, t.swipe),
                            t.mousewheel = go_getMousewheelObject($tt0, t.mousewheel),
                            e && (opts_orig = $.extend(!0, {}, $.fn.carouFredSel.defaults, t)),
                            opts = $.extend(!0, {}, $.fn.carouFredSel.defaults, t),
                            opts.d = cf_getDimensions(opts),
                            crsl.direction = "up" == opts.direction || "left" == opts.direction ? "next" : "prev";
                            var s = $cfs.children()
                              , n = ms_getParentSize($wrp, opts, "width");
                            if (is_true(opts.cookie) && (opts.cookie = "caroufredsel_cookie_" + conf.serialNumber),
                            opts.maxDimension = ms_getMaxDimension(opts, n),
                            opts.items = in_complementItems(opts.items, opts, s, i),
                            opts[opts.d.width] = in_complementPrimarySize(opts[opts.d.width], opts, s),
                            opts[opts.d.height] = in_complementSecondarySize(opts[opts.d.height], opts, s),
                            opts.responsive && (is_percentage(opts[opts.d.width]) || (opts[opts.d.width] = "100%")),
                            is_percentage(opts[opts.d.width]) && (crsl.upDateOnWindowResize = !0,
                            crsl.primarySizePercentage = opts[opts.d.width],
                            opts[opts.d.width] = ms_getPercentage(n, crsl.primarySizePercentage),
                            opts.items.visible || (opts.items.visibleConf.variable = !0)),
                            opts.responsive ? (opts.usePadding = !1,
                            opts.padding = [0, 0, 0, 0],
                            opts.align = !1,
                            opts.items.visibleConf.variable = !1) : (opts.items.visible || (opts = in_complementVisibleItems(opts, n)),
                            opts[opts.d.width] || (!opts.items.visibleConf.variable && is_number(opts.items[opts.d.width]) && "*" == opts.items.filter ? (opts[opts.d.width] = opts.items.visible * opts.items[opts.d.width],
                            opts.align = !1) : opts[opts.d.width] = "variable"),
                            is_undefined(opts.align) && (opts.align = !!is_number(opts[opts.d.width]) && "center"),
                            opts.items.visibleConf.variable && (opts.items.visible = gn_getVisibleItemsNext(s, opts, 0))),
                            "*" == opts.items.filter || opts.items.visibleConf.variable || (opts.items.visibleConf.org = opts.items.visible,
                            opts.items.visible = gn_getVisibleItemsNextFilter(s, opts, 0)),
                            opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0),
                            opts.items.visibleConf.old = opts.items.visible,
                            opts.responsive)
                                opts.items.visibleConf.min || (opts.items.visibleConf.min = opts.items.visible),
                                opts.items.visibleConf.max || (opts.items.visibleConf.max = opts.items.visible),
                                opts = in_getResponsiveValues(opts, s, n);
                            else
                                switch (opts.padding = cf_getPadding(opts.padding),
                                "top" == opts.align ? opts.align = "left" : "bottom" == opts.align && (opts.align = "right"),
                                opts.align) {
                                case "center":
                                case "left":
                                case "right":
                                    "variable" != opts[opts.d.width] && (opts = in_getAlignPadding(opts, s),
                                    opts.usePadding = !0);
                                    break;
                                default:
                                    opts.align = !1,
                                    opts.usePadding = 0 != opts.padding[0] || 0 != opts.padding[1] || 0 != opts.padding[2] || 0 != opts.padding[3]
                                }
                            is_number(opts.scroll.duration) || (opts.scroll.duration = 500),
                            is_undefined(opts.scroll.items) && (opts.scroll.items = opts.responsive || opts.items.visibleConf.variable || "*" != opts.items.filter ? "visible" : opts.items.visible),
                            opts.auto = $.extend(!0, {}, opts.scroll, opts.auto),
                            opts.prev = $.extend(!0, {}, opts.scroll, opts.prev),
                            opts.next = $.extend(!0, {}, opts.scroll, opts.next),
                            opts.pagination = $.extend(!0, {}, opts.scroll, opts.pagination),
                            opts.auto = go_complementAutoObject($tt0, opts.auto),
                            opts.prev = go_complementPrevNextObject($tt0, opts.prev),
                            opts.next = go_complementPrevNextObject($tt0, opts.next),
                            opts.pagination = go_complementPaginationObject($tt0, opts.pagination),
                            opts.swipe = go_complementSwipeObject($tt0, opts.swipe),
                            opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel),
                            opts.synchronise && (opts.synchronise = cf_getSynchArr(opts.synchronise)),
                            opts.auto.onPauseStart && (opts.auto.onTimeoutStart = opts.auto.onPauseStart,
                            deprecated("auto.onPauseStart", "auto.onTimeoutStart")),
                            opts.auto.onPausePause && (opts.auto.onTimeoutPause = opts.auto.onPausePause,
                            deprecated("auto.onPausePause", "auto.onTimeoutPause")),
                            opts.auto.onPauseEnd && (opts.auto.onTimeoutEnd = opts.auto.onPauseEnd,
                            deprecated("auto.onPauseEnd", "auto.onTimeoutEnd")),
                            opts.auto.pauseDuration && (opts.auto.timeoutDuration = opts.auto.pauseDuration,
                            deprecated("auto.pauseDuration", "auto.timeoutDuration"))
                        }
                        ,
                        FN._build = function() {
                            $cfs.data("_cfs_isCarousel", !0);
                            var t = $cfs.children()
                              , e = in_mapCss($cfs, ["textAlign", "float", "position", "top", "right", "bottom", "left", "zIndex", "width", "height", "marginTop", "marginRight", "marginBottom", "marginLeft"])
                              , i = "relative";
                            switch (e.position) {
                            case "absolute":
                            case "fixed":
                                i = e.position
                            }
                            "parent" == conf.wrapper ? sz_storeOrigCss($wrp) : $wrp.css(e),
                            $wrp.css({
                                overflow: "hidden",
                                position: i
                            }),
                            sz_storeOrigCss($cfs),
                            $cfs.data("_cfs_origCssZindex", e.zIndex),
                            $cfs.css({
                                textAlign: "left",
                                float: "none",
                                position: "absolute",
                                top: 0,
                                right: "auto",
                                bottom: "auto",
                                left: 0,
                                marginTop: 0,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 0
                            }),
                            sz_storeMargin(t, opts),
                            sz_storeOrigCss(t),
                            opts.responsive && sz_setResponsiveSizes(opts, t)
                        }
                        ,
                        FN._bind_events = function() {
                            FN._unbind_events(),
                            $cfs.bind(cf_e("stop", conf), function(t, e) {
                                return t.stopPropagation(),
                                crsl.isStopped || opts.auto.button && opts.auto.button.addClass(cf_c("stopped", conf)),
                                crsl.isStopped = !0,
                                opts.auto.play && (opts.auto.play = !1,
                                $cfs.trigger(cf_e("pause", conf), e)),
                                !0
                            }),
                            $cfs.bind(cf_e("finish", conf), function(t) {
                                return t.stopPropagation(),
                                crsl.isScrolling && sc_stopScroll(scrl),
                                !0
                            }),
                            $cfs.bind(cf_e("pause", conf), function(t, e, i) {
                                if (t.stopPropagation(),
                                tmrs = sc_clearTimers(tmrs),
                                e && crsl.isScrolling) {
                                    scrl.isStopped = !0;
                                    var s = getTime() - scrl.startTime;
                                    scrl.duration -= s,
                                    scrl.pre && (scrl.pre.duration -= s),
                                    scrl.post && (scrl.post.duration -= s),
                                    sc_stopScroll(scrl, !1)
                                }
                                if (crsl.isPaused || crsl.isScrolling || i && (tmrs.timePassed += getTime() - tmrs.startTime),
                                crsl.isPaused || opts.auto.button && opts.auto.button.addClass(cf_c("paused", conf)),
                                crsl.isPaused = !0,
                                opts.auto.onTimeoutPause) {
                                    var n = opts.auto.timeoutDuration - tmrs.timePassed
                                      , r = 100 - Math.ceil(100 * n / opts.auto.timeoutDuration);
                                    opts.auto.onTimeoutPause.call($tt0, r, n)
                                }
                                return !0
                            }),
                            $cfs.bind(cf_e("play", conf), function(t, e, i, s) {
                                t.stopPropagation(),
                                tmrs = sc_clearTimers(tmrs);
                                var n = [e, i, s]
                                  , r = ["string", "number", "boolean"]
                                  , o = cf_sortParams(n, r);
                                if (e = o[0],
                                i = o[1],
                                s = o[2],
                                "prev" != e && "next" != e && (e = crsl.direction),
                                is_number(i) || (i = 0),
                                is_boolean(s) || (s = !1),
                                s && (crsl.isStopped = !1,
                                opts.auto.play = !0),
                                !opts.auto.play)
                                    return t.stopImmediatePropagation(),
                                    debug(conf, "Carousel stopped: Not scrolling.");
                                crsl.isPaused && opts.auto.button && (opts.auto.button.removeClass(cf_c("stopped", conf)),
                                opts.auto.button.removeClass(cf_c("paused", conf))),
                                crsl.isPaused = !1,
                                tmrs.startTime = getTime();
                                var a = opts.auto.timeoutDuration + i;
                                return dur2 = a - tmrs.timePassed,
                                perc = 100 - Math.ceil(100 * dur2 / a),
                                opts.auto.progress && (tmrs.progress = setInterval(function() {
                                    var t = getTime() - tmrs.startTime + tmrs.timePassed
                                      , e = Math.ceil(100 * t / a);
                                    opts.auto.progress.updater.call(opts.auto.progress.bar[0], e)
                                }, opts.auto.progress.interval)),
                                tmrs.auto = setTimeout(function() {
                                    opts.auto.progress && opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100),
                                    opts.auto.onTimeoutEnd && opts.auto.onTimeoutEnd.call($tt0, perc, dur2),
                                    crsl.isScrolling ? $cfs.trigger(cf_e("play", conf), e) : $cfs.trigger(cf_e(e, conf), opts.auto)
                                }, dur2),
                                opts.auto.onTimeoutStart && opts.auto.onTimeoutStart.call($tt0, perc, dur2),
                                !0
                            }),
                            $cfs.bind(cf_e("resume", conf), function(t) {
                                return t.stopPropagation(),
                                scrl.isStopped ? (scrl.isStopped = !1,
                                crsl.isPaused = !1,
                                crsl.isScrolling = !0,
                                scrl.startTime = getTime(),
                                sc_startScroll(scrl, conf)) : $cfs.trigger(cf_e("play", conf)),
                                !0
                            }),
                            $cfs.bind(cf_e("prev", conf) + " " + cf_e("next", conf), function(t, e, i, s, n) {
                                if (t.stopPropagation(),
                                crsl.isStopped || $cfs.is(":hidden"))
                                    return t.stopImmediatePropagation(),
                                    debug(conf, "Carousel stopped or hidden: Not scrolling.");
                                var r = is_number(opts.items.minimum) ? opts.items.minimum : opts.items.visible + 1;
                                if (r > itms.total)
                                    return t.stopImmediatePropagation(),
                                    debug(conf, "Not enough items (" + itms.total + " total, " + r + " needed): Not scrolling.");
                                var o = [e, i, s, n]
                                  , a = ["object", "number/string", "function", "boolean"]
                                  , c = cf_sortParams(o, a);
                                e = c[0],
                                i = c[1],
                                s = c[2],
                                n = c[3];
                                var l = t.type.slice(conf.events.prefix.length);
                                if (is_object(e) || (e = {}),
                                is_function(s) && (e.onAfter = s),
                                is_boolean(n) && (e.queue = n),
                                e = $.extend(!0, {}, opts[l], e),
                                e.conditions && !e.conditions.call($tt0, l))
                                    return t.stopImmediatePropagation(),
                                    debug(conf, 'Callback "conditions" returned false.');
                                if (!is_number(i)) {
                                    if ("*" != opts.items.filter)
                                        i = "visible";
                                    else
                                        for (var u = [i, e.items, opts[l].items], c = 0, d = u.length; d > c; c++)
                                            if (is_number(u[c]) || "page" == u[c] || "visible" == u[c]) {
                                                i = u[c];
                                                break
                                            }
                                    switch (i) {
                                    case "page":
                                        return t.stopImmediatePropagation(),
                                        $cfs.triggerHandler(cf_e(l + "Page", conf), [e, s]);
                                    case "visible":
                                        opts.items.visibleConf.variable || "*" != opts.items.filter || (i = opts.items.visible)
                                    }
                                }
                                if (scrl.isStopped)
                                    return $cfs.trigger(cf_e("resume", conf)),
                                    $cfs.trigger(cf_e("queue", conf), [l, [e, i, s]]),
                                    t.stopImmediatePropagation(),
                                    debug(conf, "Carousel resumed scrolling.");
                                if (e.duration > 0 && crsl.isScrolling)
                                    return e.queue && ("last" == e.queue && (queu = []),
                                    ("first" != e.queue || 0 == queu.length) && $cfs.trigger(cf_e("queue", conf), [l, [e, i, s]])),
                                    t.stopImmediatePropagation(),
                                    debug(conf, "Carousel currently scrolling.");
                                if (tmrs.timePassed = 0,
                                $cfs.trigger(cf_e("slide_" + l, conf), [e, i]),
                                opts.synchronise)
                                    for (var p = opts.synchronise, h = [e, i], f = 0, d = p.length; d > f; f++) {
                                        var g = l;
                                        p[f][2] || (g = "prev" == g ? "next" : "prev"),
                                        p[f][1] || (h[0] = p[f][0].triggerHandler("_cfs_triggerEvent", ["configuration", g])),
                                        h[1] = i + p[f][3],
                                        p[f][0].trigger("_cfs_triggerEvent", ["slide_" + g, h])
                                    }
                                return !0
                            }),
                            $cfs.bind(cf_e("slide_prev", conf), function(t, e, i) {
                                t.stopPropagation();
                                var s = $cfs.children();
                                if (!opts.circular && 0 == itms.first)
                                    return opts.infinite && $cfs.trigger(cf_e("next", conf), itms.total - 1),
                                    t.stopImmediatePropagation();
                                if (sz_resetMargin(s, opts),
                                !is_number(i)) {
                                    if (opts.items.visibleConf.variable)
                                        i = gn_getVisibleItemsPrev(s, opts, itms.total - 1);
                                    else if ("*" != opts.items.filter) {
                                        var n = is_number(e.items) ? e.items : gn_getVisibleOrg($cfs, opts);
                                        i = gn_getScrollItemsPrevFilter(s, opts, itms.total - 1, n)
                                    } else
                                        i = opts.items.visible;
                                    i = cf_getAdjust(i, opts, e.items, $tt0)
                                }
                                if (opts.circular || itms.total - i < itms.first && (i = itms.total - itms.first),
                                opts.items.visibleConf.old = opts.items.visible,
                                opts.items.visibleConf.variable) {
                                    var r = cf_getItemsAdjust(gn_getVisibleItemsNext(s, opts, itms.total - i), opts, opts.items.visibleConf.adjust, $tt0);
                                    r >= opts.items.visible + i && itms.total > i && (i++,
                                    r = cf_getItemsAdjust(gn_getVisibleItemsNext(s, opts, itms.total - i), opts, opts.items.visibleConf.adjust, $tt0)),
                                    opts.items.visible = r
                                } else if ("*" != opts.items.filter) {
                                    var r = gn_getVisibleItemsNextFilter(s, opts, itms.total - i);
                                    opts.items.visible = cf_getItemsAdjust(r, opts, opts.items.visibleConf.adjust, $tt0)
                                }
                                if (sz_resetMargin(s, opts, !0),
                                0 == i)
                                    return t.stopImmediatePropagation(),
                                    debug(conf, "0 items to scroll: Not scrolling.");
                                for (debug(conf, "Scrolling " + i + " items backward."),
                                itms.first += i; itms.first >= itms.total; )
                                    itms.first -= itms.total;
                                opts.circular || (0 == itms.first && e.onEnd && e.onEnd.call($tt0, "prev"),
                                opts.infinite || nv_enableNavi(opts, itms.first, conf)),
                                $cfs.children().slice(itms.total - i, itms.total).prependTo($cfs),
                                itms.total < opts.items.visible + i && $cfs.children().slice(0, opts.items.visible + i - itms.total).clone(!0).appendTo($cfs);
                                var s = $cfs.children()
                                  , o = gi_getOldItemsPrev(s, opts, i)
                                  , a = gi_getNewItemsPrev(s, opts)
                                  , c = s.eq(i - 1)
                                  , l = o.last()
                                  , u = a.last();
                                sz_resetMargin(s, opts);
                                var d = 0
                                  , p = 0;
                                if (opts.align) {
                                    var h = cf_getAlignPadding(a, opts);
                                    d = h[0],
                                    p = h[1]
                                }
                                var f = 0 > d ? opts.padding[opts.d[3]] : 0
                                  , g = !1
                                  , m = $();
                                if (i > opts.items.visible && (m = s.slice(opts.items.visibleConf.old, i),
                                "directscroll" == e.fx)) {
                                    var v = opts.items[opts.d.width];
                                    g = m,
                                    c = u,
                                    sc_hideHiddenItems(g),
                                    opts.items[opts.d.width] = "variable"
                                }
                                var _ = !1
                                  , b = ms_getTotalSize(s.slice(0, i), opts, "width")
                                  , y = cf_mapWrapperSizes(ms_getSizes(a, opts, !0), opts, !opts.usePadding)
                                  , w = 0
                                  , k = {}
                                  , D = {}
                                  , x = {}
                                  , S = {}
                                  , C = {}
                                  , T = {}
                                  , I = {}
                                  , P = sc_getDuration(e, opts, i, b);
                                switch (e.fx) {
                                case "cover":
                                case "cover-fade":
                                    w = ms_getTotalSize(s.slice(0, opts.items.visible), opts, "width")
                                }
                                g && (opts.items[opts.d.width] = v),
                                sz_resetMargin(s, opts, !0),
                                p >= 0 && sz_resetMargin(l, opts, opts.padding[opts.d[1]]),
                                d >= 0 && sz_resetMargin(c, opts, opts.padding[opts.d[3]]),
                                opts.align && (opts.padding[opts.d[1]] = p,
                                opts.padding[opts.d[3]] = d),
                                T[opts.d.left] = -(b - f),
                                I[opts.d.left] = -(w - f),
                                D[opts.d.left] = y[opts.d.width];
                                var R = function() {}
                                  , A = function() {}
                                  , E = function() {}
                                  , M = function() {}
                                  , N = function() {}
                                  , O = function() {}
                                  , j = function() {}
                                  , B = function() {}
                                  , L = function() {}
                                  , F = function() {}
                                  , K = function() {};
                                switch (e.fx) {
                                case "crossfade":
                                case "cover":
                                case "cover-fade":
                                case "uncover":
                                case "uncover-fade":
                                    _ = $cfs.clone(!0).appendTo($wrp)
                                }
                                switch (e.fx) {
                                case "crossfade":
                                case "uncover":
                                case "uncover-fade":
                                    _.children().slice(0, i).remove(),
                                    _.children().slice(opts.items.visibleConf.old).remove();
                                    break;
                                case "cover":
                                case "cover-fade":
                                    _.children().slice(opts.items.visible).remove(),
                                    _.css(I)
                                }
                                if ($cfs.css(T),
                                scrl = sc_setScroll(P, e.easing, conf),
                                k[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0,
                                ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (R = function() {
                                    $wrp.css(y)
                                }
                                ,
                                A = function() {
                                    scrl.anims.push([$wrp, y])
                                }
                                ),
                                opts.usePadding) {
                                    switch (u.not(c).length && (x[opts.d.marginRight] = c.data("_cfs_origCssMargin"),
                                    0 > d ? c.css(x) : (j = function() {
                                        c.css(x)
                                    }
                                    ,
                                    B = function() {
                                        scrl.anims.push([c, x])
                                    }
                                    )),
                                    e.fx) {
                                    case "cover":
                                    case "cover-fade":
                                        _.children().eq(i - 1).css(x)
                                    }
                                    u.not(l).length && (S[opts.d.marginRight] = l.data("_cfs_origCssMargin"),
                                    E = function() {
                                        l.css(S)
                                    }
                                    ,
                                    M = function() {
                                        scrl.anims.push([l, S])
                                    }
                                    ),
                                    p >= 0 && (C[opts.d.marginRight] = u.data("_cfs_origCssMargin") + opts.padding[opts.d[1]],
                                    N = function() {
                                        u.css(C)
                                    }
                                    ,
                                    O = function() {
                                        scrl.anims.push([u, C])
                                    }
                                    )
                                }
                                K = function() {
                                    $cfs.css(k)
                                }
                                ;
                                var U = opts.items.visible + i - itms.total;
                                F = function() {
                                    if (U > 0 && ($cfs.children().slice(itms.total).remove(),
                                    o = $($cfs.children().slice(itms.total - (opts.items.visible - U)).get().concat($cfs.children().slice(0, U).get()))),
                                    sc_showHiddenItems(g),
                                    opts.usePadding) {
                                        var t = $cfs.children().eq(opts.items.visible + i - 1);
                                        t.css(opts.d.marginRight, t.data("_cfs_origCssMargin"))
                                    }
                                }
                                ;
                                var V = sc_mapCallbackArguments(o, m, a, i, "prev", P, y);
                                switch (L = function() {
                                    sc_afterScroll($cfs, _, e),
                                    crsl.isScrolling = !1,
                                    clbk.onAfter = sc_fireCallbacks($tt0, e, "onAfter", V, clbk),
                                    queu = sc_fireQueue($cfs, queu, conf),
                                    crsl.isPaused || $cfs.trigger(cf_e("play", conf))
                                }
                                ,
                                crsl.isScrolling = !0,
                                tmrs = sc_clearTimers(tmrs),
                                clbk.onBefore = sc_fireCallbacks($tt0, e, "onBefore", V, clbk),
                                e.fx) {
                                case "none":
                                    $cfs.css(k),
                                    R(),
                                    E(),
                                    N(),
                                    j(),
                                    K(),
                                    F(),
                                    L();
                                    break;
                                case "fade":
                                    scrl.anims.push([$cfs, {
                                        opacity: 0
                                    }, function() {
                                        R(),
                                        E(),
                                        N(),
                                        j(),
                                        K(),
                                        F(),
                                        scrl = sc_setScroll(P, e.easing, conf),
                                        scrl.anims.push([$cfs, {
                                            opacity: 1
                                        }, L]),
                                        sc_startScroll(scrl, conf)
                                    }
                                    ]);
                                    break;
                                case "crossfade":
                                    $cfs.css({
                                        opacity: 0
                                    }),
                                    scrl.anims.push([_, {
                                        opacity: 0
                                    }]),
                                    scrl.anims.push([$cfs, {
                                        opacity: 1
                                    }, L]),
                                    A(),
                                    E(),
                                    N(),
                                    j(),
                                    K(),
                                    F();
                                    break;
                                case "cover":
                                    scrl.anims.push([_, k, function() {
                                        E(),
                                        N(),
                                        j(),
                                        K(),
                                        F(),
                                        L()
                                    }
                                    ]),
                                    A();
                                    break;
                                case "cover-fade":
                                    scrl.anims.push([$cfs, {
                                        opacity: 0
                                    }]),
                                    scrl.anims.push([_, k, function() {
                                        E(),
                                        N(),
                                        j(),
                                        K(),
                                        F(),
                                        L()
                                    }
                                    ]),
                                    A();
                                    break;
                                case "uncover":
                                    scrl.anims.push([_, D, L]),
                                    A(),
                                    E(),
                                    N(),
                                    j(),
                                    K(),
                                    F();
                                    break;
                                case "uncover-fade":
                                    $cfs.css({
                                        opacity: 0
                                    }),
                                    scrl.anims.push([$cfs, {
                                        opacity: 1
                                    }]),
                                    scrl.anims.push([_, D, L]),
                                    A(),
                                    E(),
                                    N(),
                                    j(),
                                    K(),
                                    F();
                                    break;
                                default:
                                    scrl.anims.push([$cfs, k, function() {
                                        F(),
                                        L()
                                    }
                                    ]),
                                    A(),
                                    M(),
                                    O(),
                                    B()
                                }
                                return sc_startScroll(scrl, conf),
                                cf_setCookie(opts.cookie, $cfs, conf),
                                $cfs.trigger(cf_e("updatePageStatus", conf), [!1, y]),
                                !0
                            }),
                            $cfs.bind(cf_e("slide_next", conf), function(t, e, i) {
                                t.stopPropagation();
                                var s = $cfs.children();
                                if (!opts.circular && itms.first == opts.items.visible)
                                    return opts.infinite && $cfs.trigger(cf_e("prev", conf), itms.total - 1),
                                    t.stopImmediatePropagation();
                                if (sz_resetMargin(s, opts),
                                !is_number(i)) {
                                    if ("*" != opts.items.filter) {
                                        var n = is_number(e.items) ? e.items : gn_getVisibleOrg($cfs, opts);
                                        i = gn_getScrollItemsNextFilter(s, opts, 0, n)
                                    } else
                                        i = opts.items.visible;
                                    i = cf_getAdjust(i, opts, e.items, $tt0)
                                }
                                var r = 0 == itms.first ? itms.total : itms.first;
                                if (!opts.circular) {
                                    if (opts.items.visibleConf.variable)
                                        var o = gn_getVisibleItemsNext(s, opts, i)
                                          , n = gn_getVisibleItemsPrev(s, opts, r - 1);
                                    else
                                        var o = opts.items.visible
                                          , n = opts.items.visible;
                                    i + o > r && (i = r - n)
                                }
                                if (opts.items.visibleConf.old = opts.items.visible,
                                opts.items.visibleConf.variable) {
                                    for (var o = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(s, opts, i, r), opts, opts.items.visibleConf.adjust, $tt0); opts.items.visible - i >= o && itms.total > i; )
                                        i++,
                                        o = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(s, opts, i, r), opts, opts.items.visibleConf.adjust, $tt0);
                                    opts.items.visible = o
                                } else if ("*" != opts.items.filter) {
                                    var o = gn_getVisibleItemsNextFilter(s, opts, i);
                                    opts.items.visible = cf_getItemsAdjust(o, opts, opts.items.visibleConf.adjust, $tt0)
                                }
                                if (sz_resetMargin(s, opts, !0),
                                0 == i)
                                    return t.stopImmediatePropagation(),
                                    debug(conf, "0 items to scroll: Not scrolling.");
                                for (debug(conf, "Scrolling " + i + " items forward."),
                                itms.first -= i; 0 > itms.first; )
                                    itms.first += itms.total;
                                opts.circular || (itms.first == opts.items.visible && e.onEnd && e.onEnd.call($tt0, "next"),
                                opts.infinite || nv_enableNavi(opts, itms.first, conf)),
                                itms.total < opts.items.visible + i && $cfs.children().slice(0, opts.items.visible + i - itms.total).clone(!0).appendTo($cfs);
                                var s = $cfs.children()
                                  , a = gi_getOldItemsNext(s, opts)
                                  , c = gi_getNewItemsNext(s, opts, i)
                                  , l = s.eq(i - 1)
                                  , u = a.last()
                                  , d = c.last();
                                sz_resetMargin(s, opts);
                                var p = 0
                                  , h = 0;
                                if (opts.align) {
                                    var f = cf_getAlignPadding(c, opts);
                                    p = f[0],
                                    h = f[1]
                                }
                                var g = !1
                                  , m = $();
                                if (i > opts.items.visibleConf.old && (m = s.slice(opts.items.visibleConf.old, i),
                                "directscroll" == e.fx)) {
                                    var v = opts.items[opts.d.width];
                                    g = m,
                                    l = u,
                                    sc_hideHiddenItems(g),
                                    opts.items[opts.d.width] = "variable"
                                }
                                var _ = !1
                                  , b = ms_getTotalSize(s.slice(0, i), opts, "width")
                                  , y = cf_mapWrapperSizes(ms_getSizes(c, opts, !0), opts, !opts.usePadding)
                                  , w = 0
                                  , k = {}
                                  , D = {}
                                  , x = {}
                                  , S = {}
                                  , C = {}
                                  , T = sc_getDuration(e, opts, i, b);
                                switch (e.fx) {
                                case "uncover":
                                case "uncover-fade":
                                    w = ms_getTotalSize(s.slice(0, opts.items.visibleConf.old), opts, "width")
                                }
                                g && (opts.items[opts.d.width] = v),
                                opts.align && 0 > opts.padding[opts.d[1]] && (opts.padding[opts.d[1]] = 0),
                                sz_resetMargin(s, opts, !0),
                                sz_resetMargin(u, opts, opts.padding[opts.d[1]]),
                                opts.align && (opts.padding[opts.d[1]] = h,
                                opts.padding[opts.d[3]] = p),
                                C[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0;
                                var I = function() {}
                                  , P = function() {}
                                  , R = function() {}
                                  , A = function() {}
                                  , E = function() {}
                                  , M = function() {}
                                  , N = function() {}
                                  , O = function() {}
                                  , j = function() {};
                                switch (e.fx) {
                                case "crossfade":
                                case "cover":
                                case "cover-fade":
                                case "uncover":
                                case "uncover-fade":
                                    _ = $cfs.clone(!0).appendTo($wrp),
                                    _.children().slice(opts.items.visibleConf.old).remove()
                                }
                                switch (e.fx) {
                                case "crossfade":
                                case "cover":
                                case "cover-fade":
                                    $cfs.css("zIndex", 1),
                                    _.css("zIndex", 0)
                                }
                                if (scrl = sc_setScroll(T, e.easing, conf),
                                k[opts.d.left] = -b,
                                D[opts.d.left] = -w,
                                0 > p && (k[opts.d.left] += p),
                                ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (I = function() {
                                    $wrp.css(y)
                                }
                                ,
                                P = function() {
                                    scrl.anims.push([$wrp, y])
                                }
                                ),
                                opts.usePadding) {
                                    var B = d.data("_cfs_origCssMargin");
                                    h >= 0 && (B += opts.padding[opts.d[1]]),
                                    d.css(opts.d.marginRight, B),
                                    l.not(u).length && (S[opts.d.marginRight] = u.data("_cfs_origCssMargin")),
                                    R = function() {
                                        u.css(S)
                                    }
                                    ,
                                    A = function() {
                                        scrl.anims.push([u, S])
                                    }
                                    ;
                                    var L = l.data("_cfs_origCssMargin");
                                    p > 0 && (L += opts.padding[opts.d[3]]),
                                    x[opts.d.marginRight] = L,
                                    E = function() {
                                        l.css(x)
                                    }
                                    ,
                                    M = function() {
                                        scrl.anims.push([l, x])
                                    }
                                }
                                j = function() {
                                    $cfs.css(C)
                                }
                                ;
                                var F = opts.items.visible + i - itms.total;
                                O = function() {
                                    F > 0 && $cfs.children().slice(itms.total).remove();
                                    var t = $cfs.children().slice(0, i).appendTo($cfs).last();
                                    if (F > 0 && (c = gi_getCurrentItems(s, opts)),
                                    sc_showHiddenItems(g),
                                    opts.usePadding) {
                                        if (itms.total < opts.items.visible + i) {
                                            var e = $cfs.children().eq(opts.items.visible - 1);
                                            e.css(opts.d.marginRight, e.data("_cfs_origCssMargin") + opts.padding[opts.d[1]])
                                        }
                                        t.css(opts.d.marginRight, t.data("_cfs_origCssMargin"))
                                    }
                                }
                                ;
                                var K = sc_mapCallbackArguments(a, m, c, i, "next", T, y);
                                switch (N = function() {
                                    $cfs.css("zIndex", $cfs.data("_cfs_origCssZindex")),
                                    sc_afterScroll($cfs, _, e),
                                    crsl.isScrolling = !1,
                                    clbk.onAfter = sc_fireCallbacks($tt0, e, "onAfter", K, clbk),
                                    queu = sc_fireQueue($cfs, queu, conf),
                                    crsl.isPaused || $cfs.trigger(cf_e("play", conf))
                                }
                                ,
                                crsl.isScrolling = !0,
                                tmrs = sc_clearTimers(tmrs),
                                clbk.onBefore = sc_fireCallbacks($tt0, e, "onBefore", K, clbk),
                                e.fx) {
                                case "none":
                                    $cfs.css(k),
                                    I(),
                                    R(),
                                    E(),
                                    j(),
                                    O(),
                                    N();
                                    break;
                                case "fade":
                                    scrl.anims.push([$cfs, {
                                        opacity: 0
                                    }, function() {
                                        I(),
                                        R(),
                                        E(),
                                        j(),
                                        O(),
                                        scrl = sc_setScroll(T, e.easing, conf),
                                        scrl.anims.push([$cfs, {
                                            opacity: 1
                                        }, N]),
                                        sc_startScroll(scrl, conf)
                                    }
                                    ]);
                                    break;
                                case "crossfade":
                                    $cfs.css({
                                        opacity: 0
                                    }),
                                    scrl.anims.push([_, {
                                        opacity: 0
                                    }]),
                                    scrl.anims.push([$cfs, {
                                        opacity: 1
                                    }, N]),
                                    P(),
                                    R(),
                                    E(),
                                    j(),
                                    O();
                                    break;
                                case "cover":
                                    $cfs.css(opts.d.left, $wrp[opts.d.width]()),
                                    scrl.anims.push([$cfs, C, N]),
                                    P(),
                                    R(),
                                    E(),
                                    O();
                                    break;
                                case "cover-fade":
                                    $cfs.css(opts.d.left, $wrp[opts.d.width]()),
                                    scrl.anims.push([_, {
                                        opacity: 0
                                    }]),
                                    scrl.anims.push([$cfs, C, N]),
                                    P(),
                                    R(),
                                    E(),
                                    O();
                                    break;
                                case "uncover":
                                    scrl.anims.push([_, D, N]),
                                    P(),
                                    R(),
                                    E(),
                                    j(),
                                    O();
                                    break;
                                case "uncover-fade":
                                    $cfs.css({
                                        opacity: 0
                                    }),
                                    scrl.anims.push([$cfs, {
                                        opacity: 1
                                    }]),
                                    scrl.anims.push([_, D, N]),
                                    P(),
                                    R(),
                                    E(),
                                    j(),
                                    O();
                                    break;
                                default:
                                    scrl.anims.push([$cfs, k, function() {
                                        j(),
                                        O(),
                                        N()
                                    }
                                    ]),
                                    P(),
                                    A(),
                                    M()
                                }
                                return sc_startScroll(scrl, conf),
                                cf_setCookie(opts.cookie, $cfs, conf),
                                $cfs.trigger(cf_e("updatePageStatus", conf), [!1, y]),
                                !0
                            }),
                            $cfs.bind(cf_e("slideTo", conf), function(t, e, i, s, n, r, o) {
                                t.stopPropagation();
                                var a = [e, i, s, n, r, o]
                                  , c = ["string/number/object", "number", "boolean", "object", "string", "function"]
                                  , l = cf_sortParams(a, c);
                                return n = l[3],
                                r = l[4],
                                o = l[5],
                                e = gn_getItemIndex(l[0], l[1], l[2], itms, $cfs),
                                0 != e && (is_object(n) || (n = !1),
                                "prev" != r && "next" != r && (r = opts.circular ? itms.total / 2 >= e ? "next" : "prev" : 0 == itms.first || itms.first > e ? "next" : "prev"),
                                "prev" == r && (e = itms.total - e),
                                $cfs.trigger(cf_e(r, conf), [n, e, o]),
                                !0)
                            }),
                            $cfs.bind(cf_e("prevPage", conf), function(t, e, i) {
                                t.stopPropagation();
                                var s = $cfs.triggerHandler(cf_e("currentPage", conf));
                                return $cfs.triggerHandler(cf_e("slideToPage", conf), [s - 1, e, "prev", i])
                            }),
                            $cfs.bind(cf_e("nextPage", conf), function(t, e, i) {
                                t.stopPropagation();
                                var s = $cfs.triggerHandler(cf_e("currentPage", conf));
                                return $cfs.triggerHandler(cf_e("slideToPage", conf), [s + 1, e, "next", i])
                            }),
                            $cfs.bind(cf_e("slideToPage", conf), function(t, e, i, s, n) {
                                t.stopPropagation(),
                                is_number(e) || (e = $cfs.triggerHandler(cf_e("currentPage", conf)));
                                var r = opts.pagination.items || opts.items.visible
                                  , o = Math.ceil(itms.total / r) - 1;
                                return 0 > e && (e = o),
                                e > o && (e = 0),
                                $cfs.triggerHandler(cf_e("slideTo", conf), [e * r, 0, !0, i, s, n])
                            }),
                            $cfs.bind(cf_e("jumpToStart", conf), function(t, e) {
                                if (t.stopPropagation(),
                                e = e ? gn_getItemIndex(e, 0, !0, itms, $cfs) : 0,
                                e += itms.first,
                                0 != e) {
                                    if (itms.total > 0)
                                        for (; e > itms.total; )
                                            e -= itms.total;
                                    $cfs.prepend($cfs.children().slice(e, itms.total))
                                }
                                return !0
                            }),
                            $cfs.bind(cf_e("synchronise", conf), function(t, e) {
                                if (t.stopPropagation(),
                                e)
                                    e = cf_getSynchArr(e);
                                else {
                                    if (!opts.synchronise)
                                        return debug(conf, "No carousel to synchronise.");
                                    e = opts.synchronise
                                }
                                for (var i = $cfs.triggerHandler(cf_e("currentPosition", conf)), s = !0, n = 0, r = e.length; r > n; n++)
                                    e[n][0].triggerHandler(cf_e("slideTo", conf), [i, e[n][3], !0]) || (s = !1);
                                return s
                            }),
                            $cfs.bind(cf_e("queue", conf), function(t, e, i) {
                                return t.stopPropagation(),
                                is_function(e) ? e.call($tt0, queu) : is_array(e) ? queu = e : is_undefined(e) || queu.push([e, i]),
                                queu
                            }),
                            $cfs.bind(cf_e("insertItem", conf), function(t, e, i, s, n) {
                                t.stopPropagation();
                                var r = [e, i, s, n]
                                  , o = ["string/object", "string/number/object", "boolean", "number"]
                                  , a = cf_sortParams(r, o);
                                if (e = a[0],
                                i = a[1],
                                s = a[2],
                                n = a[3],
                                is_object(e) && !is_jquery(e) ? e = $(e) : is_string(e) && (e = $(e)),
                                !is_jquery(e) || 0 == e.length)
                                    return debug(conf, "Not a valid object.");
                                is_undefined(i) && (i = "end"),
                                sz_storeMargin(e, opts),
                                sz_storeOrigCss(e);
                                var c = i
                                  , l = "before";
                                "end" == i ? s ? (0 == itms.first ? (i = itms.total - 1,
                                l = "after") : (i = itms.first,
                                itms.first += e.length),
                                0 > i && (i = 0)) : (i = itms.total - 1,
                                l = "after") : i = gn_getItemIndex(i, n, s, itms, $cfs);
                                var u = $cfs.children().eq(i);
                                return u.length ? u[l](e) : (debug(conf, "Correct insert-position not found! Appending item to the end."),
                                $cfs.append(e)),
                                "end" == c || s || itms.first > i && (itms.first += e.length),
                                itms.total = $cfs.children().length,
                                itms.first >= itms.total && (itms.first -= itms.total),
                                $cfs.trigger(cf_e("updateSizes", conf)),
                                $cfs.trigger(cf_e("linkAnchors", conf)),
                                !0
                            }),
                            $cfs.bind(cf_e("removeItem", conf), function(t, e, i, s) {
                                t.stopPropagation();
                                var n = [e, i, s]
                                  , r = ["string/number/object", "boolean", "number"]
                                  , o = cf_sortParams(n, r);
                                if (e = o[0],
                                i = o[1],
                                s = o[2],
                                e instanceof $ && e.length > 1)
                                    return a = $(),
                                    e.each(function() {
                                        var t = $cfs.trigger(cf_e("removeItem", conf), [$(this), i, s]);
                                        t && (a = a.add(t))
                                    }),
                                    a;
                                if (is_undefined(e) || "end" == e)
                                    a = $cfs.children().last();
                                else {
                                    e = gn_getItemIndex(e, s, i, itms, $cfs);
                                    var a = $cfs.children().eq(e);
                                    a.length && itms.first > e && (itms.first -= a.length)
                                }
                                return a && a.length && (a.detach(),
                                itms.total = $cfs.children().length,
                                $cfs.trigger(cf_e("updateSizes", conf))),
                                a
                            }),
                            $cfs.bind(cf_e("onBefore", conf) + " " + cf_e("onAfter", conf), function(t, e) {
                                t.stopPropagation();
                                var i = t.type.slice(conf.events.prefix.length);
                                return is_array(e) && (clbk[i] = e),
                                is_function(e) && clbk[i].push(e),
                                clbk[i]
                            }),
                            $cfs.bind(cf_e("currentPosition", conf), function(t, e) {
                                if (t.stopPropagation(),
                                0 == itms.first)
                                    var i = 0;
                                else
                                    var i = itms.total - itms.first;
                                return is_function(e) && e.call($tt0, i),
                                i
                            }),
                            $cfs.bind(cf_e("currentPage", conf), function(t, e) {
                                t.stopPropagation();
                                var i, s = opts.pagination.items || opts.items.visible, n = Math.ceil(itms.total / s - 1);
                                return i = 0 == itms.first ? 0 : itms.first < itms.total % s ? 0 : itms.first != s || opts.circular ? Math.round((itms.total - itms.first) / s) : n,
                                0 > i && (i = 0),
                                i > n && (i = n),
                                is_function(e) && e.call($tt0, i),
                                i
                            }),
                            $cfs.bind(cf_e("currentVisible", conf), function(t, e) {
                                t.stopPropagation();
                                var i = gi_getCurrentItems($cfs.children(), opts);
                                return is_function(e) && e.call($tt0, i),
                                i
                            }),
                            $cfs.bind(cf_e("slice", conf), function(t, e, i, s) {
                                if (t.stopPropagation(),
                                0 == itms.total)
                                    return !1;
                                var n = [e, i, s]
                                  , r = ["number", "number", "function"]
                                  , o = cf_sortParams(n, r);
                                if (e = is_number(o[0]) ? o[0] : 0,
                                i = is_number(o[1]) ? o[1] : itms.total,
                                s = o[2],
                                e += itms.first,
                                i += itms.first,
                                items.total > 0) {
                                    for (; e > itms.total; )
                                        e -= itms.total;
                                    for (; i > itms.total; )
                                        i -= itms.total;
                                    for (; 0 > e; )
                                        e += itms.total;
                                    for (; 0 > i; )
                                        i += itms.total
                                }
                                var a, c = $cfs.children();
                                return a = i > e ? c.slice(e, i) : $(c.slice(e, itms.total).get().concat(c.slice(0, i).get())),
                                is_function(s) && s.call($tt0, a),
                                a
                            }),
                            $cfs.bind(cf_e("isPaused", conf) + " " + cf_e("isStopped", conf) + " " + cf_e("isScrolling", conf), function(t, e) {
                                t.stopPropagation();
                                var i = t.type.slice(conf.events.prefix.length)
                                  , s = crsl[i];
                                return is_function(e) && e.call($tt0, s),
                                s
                            }),
                            $cfs.bind(cf_e("configuration", conf), function(e, a, b, c) {
                                e.stopPropagation();
                                var reInit = !1;
                                if (is_function(a))
                                    a.call($tt0, opts);
                                else if (is_object(a))
                                    opts_orig = $.extend(!0, {}, opts_orig, a),
                                    b !== !1 ? reInit = !0 : opts = $.extend(!0, {}, opts, a);
                                else if (!is_undefined(a))
                                    if (is_function(b)) {
                                        var val = eval("opts." + a);
                                        is_undefined(val) && (val = ""),
                                        b.call($tt0, val)
                                    } else {
                                        if (is_undefined(b))
                                            return eval("opts." + a);
                                        "boolean" != typeof c && (c = !0),
                                        eval("opts_orig." + a + " = b"),
                                        c !== !1 ? reInit = !0 : eval("opts." + a + " = b")
                                    }
                                if (reInit) {
                                    sz_resetMargin($cfs.children(), opts),
                                    FN._init(opts_orig),
                                    FN._bind_buttons();
                                    var sz = sz_setSizes($cfs, opts);
                                    $cfs.trigger(cf_e("updatePageStatus", conf), [!0, sz])
                                }
                                return opts
                            }),
                            $cfs.bind(cf_e("linkAnchors", conf), function(t, e, i) {
                                return t.stopPropagation(),
                                is_undefined(e) ? e = $("body") : is_string(e) && (e = $(e)),
                                is_jquery(e) && 0 != e.length ? (is_string(i) || (i = "a.caroufredsel"),
                                e.find(i).each(function() {
                                    var t = this.hash || "";
                                    t.length > 0 && -1 != $cfs.children().index($(t)) && $(this).unbind("click").click(function(e) {
                                        e.preventDefault(),
                                        $cfs.trigger(cf_e("slideTo", conf), t)
                                    })
                                }),
                                !0) : debug(conf, "Not a valid object.")
                            }),
                            $cfs.bind(cf_e("updatePageStatus", conf), function(t, e) {
                                if (t.stopPropagation(),
                                opts.pagination.container) {
                                    var i = opts.pagination.items || opts.items.visible
                                      , s = Math.ceil(itms.total / i);
                                    e && (opts.pagination.anchorBuilder && (opts.pagination.container.children().remove(),
                                    opts.pagination.container.each(function() {
                                        for (var t = 0; s > t; t++) {
                                            var e = $cfs.children().eq(gn_getItemIndex(t * i, 0, !0, itms, $cfs));
                                            $(this).append(opts.pagination.anchorBuilder.call(e[0], t + 1))
                                        }
                                    })),
                                    opts.pagination.container.each(function() {
                                        $(this).children().unbind(opts.pagination.event).each(function(t) {
                                            $(this).bind(opts.pagination.event, function(e) {
                                                e.preventDefault(),
                                                $cfs.trigger(cf_e("slideTo", conf), [t * i, -opts.pagination.deviation, !0, opts.pagination])
                                            })
                                        })
                                    }));
                                    var n = $cfs.triggerHandler(cf_e("currentPage", conf)) + opts.pagination.deviation;
                                    return n >= s && (n = 0),
                                    0 > n && (n = s - 1),
                                    opts.pagination.container.each(function() {
                                        $(this).children().removeClass(cf_c("selected", conf)).eq(n).addClass(cf_c("selected", conf))
                                    }),
                                    !0
                                }
                            }),
                            $cfs.bind(cf_e("updateSizes", conf), function() {
                                var t = opts.items.visible
                                  , e = $cfs.children()
                                  , i = ms_getParentSize($wrp, opts, "width");
                                if (itms.total = e.length,
                                crsl.primarySizePercentage ? (opts.maxDimension = i,
                                opts[opts.d.width] = ms_getPercentage(i, crsl.primarySizePercentage)) : opts.maxDimension = ms_getMaxDimension(opts, i),
                                opts.responsive ? (opts.items.width = opts.items.sizesConf.width,
                                opts.items.height = opts.items.sizesConf.height,
                                opts = in_getResponsiveValues(opts, e, i),
                                t = opts.items.visible,
                                sz_setResponsiveSizes(opts, e)) : opts.items.visibleConf.variable ? t = gn_getVisibleItemsNext(e, opts, 0) : "*" != opts.items.filter && (t = gn_getVisibleItemsNextFilter(e, opts, 0)),
                                !opts.circular && 0 != itms.first && t > itms.first) {
                                    if (opts.items.visibleConf.variable)
                                        var s = gn_getVisibleItemsPrev(e, opts, itms.first) - itms.first;
                                    else if ("*" != opts.items.filter)
                                        var s = gn_getVisibleItemsPrevFilter(e, opts, itms.first) - itms.first;
                                    else
                                        var s = opts.items.visible - itms.first;
                                    debug(conf, "Preventing non-circular: sliding " + s + " items backward."),
                                    $cfs.trigger(cf_e("prev", conf), s)
                                }
                                opts.items.visible = cf_getItemsAdjust(t, opts, opts.items.visibleConf.adjust, $tt0),
                                opts.items.visibleConf.old = opts.items.visible,
                                opts = in_getAlignPadding(opts, e);
                                var n = sz_setSizes($cfs, opts);
                                return $cfs.trigger(cf_e("updatePageStatus", conf), [!0, n]),
                                nv_showNavi(opts, itms.total, conf),
                                nv_enableNavi(opts, itms.first, conf),
                                n
                            }),
                            $cfs.bind(cf_e("destroy", conf), function(t, e) {
                                return t.stopPropagation(),
                                tmrs = sc_clearTimers(tmrs),
                                $cfs.data("_cfs_isCarousel", !1),
                                $cfs.trigger(cf_e("finish", conf)),
                                e && $cfs.trigger(cf_e("jumpToStart", conf)),
                                sz_restoreOrigCss($cfs.children()),
                                sz_restoreOrigCss($cfs),
                                FN._unbind_events(),
                                FN._unbind_buttons(),
                                "parent" == conf.wrapper ? sz_restoreOrigCss($wrp) : $wrp.replaceWith($cfs),
                                !0
                            }),
                            $cfs.bind(cf_e("debug", conf), function() {
                                return debug(conf, "Carousel width: " + opts.width),
                                debug(conf, "Carousel height: " + opts.height),
                                debug(conf, "Item widths: " + opts.items.width),
                                debug(conf, "Item heights: " + opts.items.height),
                                debug(conf, "Number of items visible: " + opts.items.visible),
                                opts.auto.play && debug(conf, "Number of items scrolled automatically: " + opts.auto.items),
                                opts.prev.button && debug(conf, "Number of items scrolled backward: " + opts.prev.items),
                                opts.next.button && debug(conf, "Number of items scrolled forward: " + opts.next.items),
                                conf.debug
                            }),
                            $cfs.bind("_cfs_triggerEvent", function(t, e, i) {
                                return t.stopPropagation(),
                                $cfs.triggerHandler(cf_e(e, conf), i)
                            })
                        }
                        ,
                        FN._unbind_events = function() {
                            $cfs.unbind(cf_e("", conf)),
                            $cfs.unbind(cf_e("", conf, !1)),
                            $cfs.unbind("_cfs_triggerEvent")
                        }
                        ,
                        FN._bind_buttons = function() {
                            if (FN._unbind_buttons(),
                            nv_showNavi(opts, itms.total, conf),
                            nv_enableNavi(opts, itms.first, conf),
                            opts.auto.pauseOnHover) {
                                var t = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
                                $wrp.bind(cf_e("mouseenter", conf, !1), function() {
                                    $cfs.trigger(cf_e("pause", conf), t)
                                }).bind(cf_e("mouseleave", conf, !1), function() {
                                    $cfs.trigger(cf_e("resume", conf))
                                })
                            }
                            if (opts.auto.button && opts.auto.button.bind(cf_e(opts.auto.event, conf, !1), function(t) {
                                t.preventDefault();
                                var e = !1
                                  , i = null;
                                crsl.isPaused ? e = "play" : opts.auto.pauseOnEvent && (e = "pause",
                                i = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)),
                                e && $cfs.trigger(cf_e(e, conf), i)
                            }),
                            opts.prev.button && (opts.prev.button.bind(cf_e(opts.prev.event, conf, !1), function(t) {
                                t.preventDefault(),
                                $cfs.trigger(cf_e("prev", conf))
                            }),
                            opts.prev.pauseOnHover)) {
                                var t = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
                                opts.prev.button.bind(cf_e("mouseenter", conf, !1), function() {
                                    $cfs.trigger(cf_e("pause", conf), t)
                                }).bind(cf_e("mouseleave", conf, !1), function() {
                                    $cfs.trigger(cf_e("resume", conf))
                                })
                            }
                            if (opts.next.button && (opts.next.button.bind(cf_e(opts.next.event, conf, !1), function(t) {
                                t.preventDefault(),
                                $cfs.trigger(cf_e("next", conf))
                            }),
                            opts.next.pauseOnHover)) {
                                var t = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
                                opts.next.button.bind(cf_e("mouseenter", conf, !1), function() {
                                    $cfs.trigger(cf_e("pause", conf), t)
                                }).bind(cf_e("mouseleave", conf, !1), function() {
                                    $cfs.trigger(cf_e("resume", conf))
                                })
                            }
                            if (opts.pagination.container && opts.pagination.pauseOnHover) {
                                var t = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
                                opts.pagination.container.bind(cf_e("mouseenter", conf, !1), function() {
                                    $cfs.trigger(cf_e("pause", conf), t)
                                }).bind(cf_e("mouseleave", conf, !1), function() {
                                    $cfs.trigger(cf_e("resume", conf))
                                })
                            }
                            if ((opts.prev.key || opts.next.key) && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function(t) {
                                var e = t.keyCode;
                                e == opts.next.key && (t.preventDefault(),
                                $cfs.trigger(cf_e("next", conf))),
                                e == opts.prev.key && (t.preventDefault(),
                                $cfs.trigger(cf_e("prev", conf)))
                            }),
                            opts.pagination.keys && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function(t) {
                                var e = t.keyCode;
                                e >= 49 && 58 > e && (e = (e - 49) * opts.items.visible,
                                itms.total >= e && (t.preventDefault(),
                                $cfs.trigger(cf_e("slideTo", conf), [e, 0, !0, opts.pagination])))
                            }),
                            $.fn.swipe) {
                                var e = "ontouchstart"in window;
                                if (e && opts.swipe.onTouch || !e && opts.swipe.onMouse) {
                                    var i = $.extend(!0, {}, opts.prev, opts.swipe)
                                      , s = $.extend(!0, {}, opts.next, opts.swipe)
                                      , n = function() {
                                        $cfs.trigger(cf_e("prev", conf), [i])
                                    }
                                      , r = function() {
                                        $cfs.trigger(cf_e("next", conf), [s])
                                    };
                                    switch (opts.direction) {
                                    case "up":
                                    case "down":
                                        opts.swipe.options.swipeUp = r,
                                        opts.swipe.options.swipeDown = n;
                                        break;
                                    default:
                                        opts.swipe.options.swipeLeft = r,
                                        opts.swipe.options.swipeRight = n
                                    }
                                    crsl.swipe && $cfs.swipe("destroy"),
                                    $wrp.swipe(opts.swipe.options),
                                    $wrp.css("cursor", "move"),
                                    crsl.swipe = !0
                                }
                            }
                            if ($.fn.mousewheel && opts.mousewheel) {
                                var o = $.extend(!0, {}, opts.prev, opts.mousewheel)
                                  , a = $.extend(!0, {}, opts.next, opts.mousewheel);
                                crsl.mousewheel && $wrp.unbind(cf_e("mousewheel", conf, !1)),
                                $wrp.bind(cf_e("mousewheel", conf, !1), function(t, e) {
                                    t.preventDefault(),
                                    e > 0 ? $cfs.trigger(cf_e("prev", conf), [o]) : $cfs.trigger(cf_e("next", conf), [a])
                                }),
                                crsl.mousewheel = !0
                            }
                            if (opts.auto.play && $cfs.trigger(cf_e("play", conf), opts.auto.delay),
                            crsl.upDateOnWindowResize) {
                                var c = function() {
                                    $cfs.trigger(cf_e("finish", conf)),
                                    opts.auto.pauseOnResize && !crsl.isPaused && $cfs.trigger(cf_e("play", conf)),
                                    sz_resetMargin($cfs.children(), opts),
                                    $cfs.trigger(cf_e("updateSizes", conf))
                                }
                                  , l = $(window)
                                  , u = null;
                                if ($.debounce && "debounce" == conf.onWindowResize)
                                    u = $.debounce(200, c);
                                else if ($.throttle && "throttle" == conf.onWindowResize)
                                    u = $.throttle(300, c);
                                else {
                                    var d = 0
                                      , p = 0;
                                    u = function() {
                                        var t = l.width()
                                          , e = l.height();
                                        (t != d || e != p) && (c(),
                                        d = t,
                                        p = e)
                                    }
                                }
                                l.bind(cf_e("resize", conf, !1, !0, !0), u)
                            }
                        }
                        ,
                        FN._unbind_buttons = function() {
                            var t = (cf_e("", conf),
                            cf_e("", conf, !1));
                            ns3 = cf_e("", conf, !1, !0, !0),
                            $(document).unbind(ns3),
                            $(window).unbind(ns3),
                            $wrp.unbind(t),
                            opts.auto.button && opts.auto.button.unbind(t),
                            opts.prev.button && opts.prev.button.unbind(t),
                            opts.next.button && opts.next.button.unbind(t),
                            opts.pagination.container && (opts.pagination.container.unbind(t),
                            opts.pagination.anchorBuilder && opts.pagination.container.children().remove()),
                            crsl.swipe && ($cfs.swipe("destroy"),
                            $wrp.css("cursor", "default"),
                            crsl.swipe = !1),
                            crsl.mousewheel && (crsl.mousewheel = !1),
                            nv_showNavi(opts, "hide", conf),
                            nv_enableNavi(opts, "removeClass", conf)
                        }
                        ,
                        is_boolean(configs) && (configs = {
                            debug: configs
                        });
                        var crsl = {
                            direction: "next",
                            isPaused: !0,
                            isScrolling: !1,
                            isStopped: !1,
                            mousewheel: !1,
                            swipe: !1
                        }
                          , itms = {
                            total: $cfs.children().length,
                            first: 0
                        }
                          , tmrs = {
                            auto: null,
                            progress: null,
                            startTime: getTime(),
                            timePassed: 0
                        }
                          , scrl = {
                            isStopped: !1,
                            duration: 0,
                            startTime: 0,
                            easing: "",
                            anims: []
                        }
                          , clbk = {
                            onBefore: [],
                            onAfter: []
                        }
                          , queu = []
                          , conf = $.extend(!0, {}, $.fn.carouFredSel.configs, configs)
                          , opts = {}
                          , opts_orig = $.extend(!0, {}, options)
                          , $wrp = "parent" == conf.wrapper ? $cfs.parent() : $cfs.wrap("<" + conf.wrapper.element + ' class="' + conf.wrapper.classname + '" />').parent();
                        if (conf.selector = $cfs.selector,
                        conf.serialNumber = $.fn.carouFredSel.serialNumber++,
                        conf.transition = conf.transition && $.fn.transition ? "transition" : "animate",
                        FN._init(opts_orig, !0, starting_position),
                        FN._build(),
                        FN._bind_events(),
                        FN._bind_buttons(),
                        is_array(opts.items.start))
                            var start_arr = opts.items.start;
                        else {
                            var start_arr = [];
                            0 != opts.items.start && start_arr.push(opts.items.start)
                        }
                        if (opts.cookie && start_arr.unshift(parseInt(cf_getCookie(opts.cookie), 10)),
                        start_arr.length > 0)
                            for (var a = 0, l = start_arr.length; l > a; a++) {
                                var s = start_arr[a];
                                if (0 != s) {
                                    if (s === !0) {
                                        if (s = window.location.hash,
                                        1 > s.length)
                                            continue
                                    } else
                                        "random" === s && (s = Math.floor(Math.random() * itms.total));
                                    if ($cfs.triggerHandler(cf_e("slideTo", conf), [s, 0, !0, {
                                        fx: "none"
                                    }]))
                                        break
                                }
                            }
                        var siz = sz_setSizes($cfs, opts)
                          , itm = gi_getCurrentItems($cfs.children(), opts);
                        return opts.onCreate && opts.onCreate.call($tt0, {
                            width: siz.width,
                            height: siz.height,
                            items: itm
                        }),
                        $cfs.trigger(cf_e("updatePageStatus", conf), [!0, siz]),
                        $cfs.trigger(cf_e("linkAnchors", conf)),
                        conf.debug && $cfs.trigger(cf_e("debug", conf)),
                        $cfs
                    }
                    ,
                    $.fn.carouFredSel.serialNumber = 1,
                    $.fn.carouFredSel.defaults = {
                        synchronise: !1,
                        infinite: !0,
                        circular: !0,
                        responsive: !1,
                        direction: "right",
                        items: {
                            start: 0
                        },
                        scroll: {
                            easing: "swing",
                            duration: 500,
                            pauseOnHover: !1,
                            event: "click",
                            queue: !1
                        }
                    },
                    $.fn.carouFredSel.configs = {
                        debug: !1,
                        transition: !1,
                        onWindowResize: "throttle",
                        events: {
                            prefix: "",
                            namespace: "cfs"
                        },
                        wrapper: {
                            element: "div",
                            classname: "caroufredsel_wrapper"
                        },
                        classnames: {}
                    },
                    $.fn.carouFredSel.pageAnchorBuilder = function(t) {
                        return '<a href="#"><span>' + t + "</span></a>"
                    }
                    ,
                    $.fn.carouFredSel.progressbarUpdater = function(t) {
                        $(this).css("width", t + "%")
                    }
                    ,
                    $.fn.carouFredSel.cookie = {
                        get: function(t) {
                            t += "=";
                            for (var e = document.cookie.split(";"), i = 0, s = e.length; s > i; i++) {
                                for (var n = e[i]; " " == n.charAt(0); )
                                    n = n.slice(1);
                                if (0 == n.indexOf(t))
                                    return n.slice(t.length)
                            }
                            return 0
                        },
                        set: function(t, e, i) {
                            var s = "";
                            if (i) {
                                var n = new Date;
                                n.setTime(n.getTime() + 864e5 * i),
                                s = "; expires=" + n.toGMTString()
                            }
                            document.cookie = t + "=" + e + s + "; path=/"
                        },
                        remove: function(t) {
                            $.fn.carouFredSel.cookie.set(t, "", -1)
                        }
                    },
                    $.extend($.easing, {
                        quadratic: function(t) {
                            var e = t * t;
                            return t * (-e * t + 4 * e - 6 * t + 4)
                        },
                        cubic: function(t) {
                            return t * (4 * t * t - 9 * t + 6)
                        },
                        elastic: function(t) {
                            var e = t * t;
                            return t * (33 * e * e - 106 * e * t + 126 * e - 67 * t + 15)
                        }
                    }))
                }(jQuery)
            }
        }
        .call(exports, __webpack_require__, exports, module),
        /*!
	 * jquery.scrollLoading.js
	*/
        !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    },
    15: function(t, e, i) {
        var s;
        s = function(t, e, i) {
            return function(t) {
                !function(t) {
                    t.fn.scrollLoading = function(e) {
                        var i = {
                            attr: "data-url",
                            container: t(window),
                            callback: t.noop
                        }
                          , s = t.extend({}, i, e || {});
                        s.cache = [],
                        t(this).each(function() {
                            var e = this.nodeName.toLowerCase()
                              , i = t(this).attr(s.attr)
                              , n = {
                                obj: t(this),
                                tag: e,
                                url: i
                            };
                            s.cache.push(n)
                        });
                        var n = function(e) {
                            t.isFunction(s.callback) && s.callback.call(e.get(0))
                        }
                          , r = function() {
                            var e = s.container.height();
                            s.container.get(0) === window ? contop = t(window).scrollTop() : contop = s.container.offset().top,
                            t.each(s.cache, function(t, i) {
                                var s, r, o = i.obj, a = i.tag, c = i.url;
                                o && (s = o.offset().top - contop,
                                r = s + o.height(),
                                (s >= 0 && s < e || r > 0 && r <= e) && (c ? "img" === a ? n(o.attr("src", c)) : o.load(c, {}, function() {
                                    n(o)
                                }) : n(o),
                                i.obj = null))
                            })
                        };
                        r(),
                        s.container.bind("scroll", r)
                    }
                }(jQuery)
            }
        }
        .call(e, i, e, t),
        /*!
	 * jquery.scrollLoading.js
	*/
        !(void 0 !== s && (t.exports = s))
    },
    42: function(t, e, i) {
        var s;
        s = function(t, e, s) {
            function n() {}
            var r = i(1)
              , o = i(2)
              , a = new o;
            i(15)(r),
            i(14)(r),
            i(56),
            s.exports = n,
            n.prototype.init = function() {
                this.dataCache = {},
                this._serverChange(),
                this._serverRowHoverEffect(),
                this._initScrollLoading(),
                this._recommendGameHoverEffect(),
                this._initWebGameHoverEffect(),
                this._lazyLoadWebGameList(),
                this._initMobileGameHoverEffect(),
                this._initMobileGameSlide(),
                this._checkMobileLinks(),
                this._SearchInit(),
                r(".server-type-nav.first-child").trigger("click"),
                a._TAG({
                    tag: ".webgames-nav",
                    cont: ".webgame-list",
                    ev: "click",
                    curr: "selected"
                }),
                a._TAG({
                    tag: ".news-nav",
                    cont: ".news-list",
                    ev: "click",
                    curr: "selected"
                })
            }
            ,
            n.prototype._serverChange = function() {
                function t(t) {
                    return t && t.length && "/" === t[0] && "/" !== t[1] ? "//" + mainHost + t : t
                }
                var e = this;
                r(".server-type-navs a").on("click", function() {
                    var i = r(this).attr("data-type");
                    r(".server-type-navs a").removeClass("selected"),
                    r(this).addClass("selected"),
                    "all" == i ? void 0 !== r.data(e.dataCache, "server-data-" + i) ? r("#server-table").html(jQuery.data(e.dataCache, "server-data-" + i)) : r.get("//www.gm99.com/ajax/get_mobile_game_server", function(s) {
                        var n = "";
                        n += "<tbody>",
                        n += "<tr>",
                        n += '<th class="server-date">日期</th>',
                        n += '<th class="server-time">時間</th>',
                        n += '<th class="server-gamename">遊戲名稱</th>',
                        n += '<th class="server-sid">服量</th>',
                        n += "</tr>",
                        r.each(s, function(e, i) {
                            n += '<tr class="table-row">',
                            n += '<td class="server-date">' + i.START_M_D + "</td>",
                            n += '<td class="server-time">' + i.START_H_I + "</td>";
                            var s = window.globalGetGotoLink({
                                link: t(i.URL)
                            });
                            n += '<td class="server-gamename"><a class="name-for-game j-strl-link" target="_blank" href="' + s + '">' + i.NAME + "</a></td>",
                            0 === parseInt(i.STATE) ? ("" === i.TIPS && (i.TIPS = "火爆新服，即將震撼開啟，敬請期待！"),
                            n += '<td class="server-sid"><a class="name-for-server" href="javascript:alert(\'' + i.TIPS + "')\">" + i.SID + "服</a></td>") : n += '<td class="server-sid"><a class="name-for-server j-strl-link" href="' + i.URL + '" target="_blank">' + i.SID + "服</a></td>",
                            n += "</tr>"
                        }),
                        r("#server-table").html(n),
                        r.data(e.dataCache, "server-data-" + i, n)
                    }, "json") : void 0 !== r.data(e.dataCache, "server-data-" + i) ? r("#server-table").html(jQuery.data(e.dataCache, "server-data-" + i)) : r.get("//www.gm99.com/ajax/get_game_server?type=all", function(s) {
                        var n = "";
                        n += "<tbody>",
                        n += "<tr>",
                        n += '<th class="server-date">日期</th>',
                        n += '<th class="server-time">時間</th>',
                        n += '<th class="server-gamename">遊戲名稱</th>',
                        n += '<th class="server-sid">服量</th>',
                        n += "</tr>",
                        r.each(s, function(e, i) {
                            n += '<tr class="table-row">',
                            n += '<td class="server-date">' + i.START_M_D + "</td>",
                            n += '<td class="server-time">' + i.START_H_I + "</td>";
                            var s = window.globalGetGotoLink({
                                link: t("/" + i.ENNAME)
                            });
                            n += '<td class="server-gamename"><a class="name-for-game j-strl-link" target="_blank" href="' + s + '">' + i.NAME + "</a></td>",
                            0 === parseInt(i.STATE) ? ("" === i.TIPS && (i.TIPS = "火爆新服，即將震撼開啟，敬請期待！"),
                            n += '<td class="server-sid"><a class="name-for-server" href="javascript:alert(\'' + i.TIPS + "')\">" + i.SID + "服</a></td>") : n += '<td class="server-sid"><a class="name-for-server j-strl-link" href="/play_games/play/server/' + i.ENNAME + "/id/" + i.SID + '" target="_blank">' + i.SID + "服</a></td>",
                            n += "</tr>"
                        }),
                        r("#server-table").html(n),
                        r.data(e.dataCache, "server-data-" + i, n)
                    }, "json")
                })
            }
            ,
            n.prototype._serverRowHoverEffect = function() {
                r(".table-row").mouseenter(function() {
                    r(this).css("backgroundColor", "#e5e5e5")
                }).on("mouseleave", function() {
                    r(this).css("backgroundColor", "#fff")
                })
            }
            ,
            n.prototype._initScrollLoading = function() {
                r(".scroll-loading").scrollLoading()
            }
            ,
            n.prototype._recommendGameHoverEffect = function() {
                r(".recd-img-part").on("mouseenter", function() {
                    r(this).find(".recd-game-info").removeClass("hide").stop().animate({
                        top: "217px"
                    })
                }).on("mouseleave", function() {
                    r(this).find(".recd-game-info").stop().animate({
                        top: "257px"
                    }, function() {
                        r(this).addClass("hide")
                    })
                })
            }
            ,
            n.prototype._initWebGameHoverEffect = function() {
                this._reInitHoverEffect()
            }
            ,
            n.prototype._lazyLoadWebGameList = function() {
                r("#game-category a").on("click", function() {
                    var t = parseInt(r(this).attr("data-id"))
                      , e = r("#game-category a").length - 1;
                    t === e ? r(".webgame-list").eq(e - 1).find(".webgame-image").each(function(t, e) {
                        var i = r(e).attr("data-url");
                        r(e).attr("src", i)
                    }) : r(".webgame-list").eq(t).find(".webgame-image").each(function(t, e) {
                        var i = r(e).attr("data-url");
                        r(e).attr("src", i)
                    })
                })
            }
            ,
            n.prototype._reInitHoverEffect = function() {
                r(".webgame-list li").on("mouseenter", function() {
                    r(this).find(".webgame-hover").stop().animate({
                        top: "0px"
                    })
                }).on("mouseleave", function() {
                    r(this).find(".webgame-hover").stop().animate({
                        top: "75px"
                    })
                })
            }
            ,
            n.prototype._initMobileGameHoverEffect = function() {
                r(".mobilegame-image").on("mouseenter", function() {
                    var t = r(this).parent().find(".mobilegame-download-code")
                      , e = t.attr("src")
                      , i = t.attr("data-url");
                    "//www.gmresstatic.com/img/common/bg/pixel.gif" === e && t.attr("src", i),
                    r(this).parent().find(".mobilegame-hover").fadeIn(500)
                }),
                r(".mobilegame-hover").on("mouseleave", function() {
                    r(this).fadeOut(500)
                })
            }
            ,
            n.prototype._initMobileGameSlide = function() {
                r("#mobilegame-list").carouFredSel({
                    prev: "#prev-btn",
                    next: "#next-btn",
                    mousewheel: !0,
                    swipe: {
                        onMouse: !0,
                        onTouch: !0
                    },
                    scroll: {
                        items: 1,
                        duration: 700
                    },
                    auto: {
                        play: !1
                    }
                }),
                setTimeout(function() {
                    r(".caroufredsel_wrapper").css({
                        width: "996px",
                        height: "230px"
                    }),
                    r("#mobilegame-list").css("height", "230px")
                }, 1e3)
            }
            ,
            n.prototype._checkMobileLinks = function() {
                r(".btn-download").on("click", function() {
                    var t = r(this).attr("href");
                    if ("javascript:;" === t)
                        return r(this).removeAttr("target"),
                        a.dialog({
                            content: "即將上線，敬請期待！"
                        }),
                        !1
                })
            }
            ,
            n.prototype._SearchInit = function() {
                var t = this;
                r(".sbtn_show").on("click", function() {
                    r(".search_input").addClass("sisty").animate({
                        width: 150
                    }, 300, function() {
                        r("#search_text").fadeIn("fast"),
                        r("#search_btn").removeClass("sbtn_show"),
                        t._SearchGame()
                    })
                })
            }
            ,
            n.prototype._SearchGame = function() {
                r("#search_btn").on("click", function() {
                    var t = r("#search_text").val();
                    window.location.href = encodeURI("//www.gm99.com/searchgame?sv=" + t)
                }),
                r("#search_text").on("keydown", function(t) {
                    var e = t || event;
                    13 == (e.keyCode || e.which || e.charCode) && r("#search_btn").click()
                })
            }
        }
        .call(e, i, e, t),
        !(void 0 !== s && (t.exports = s))
    },
    43: function(t, e, i) {
        var s;
        s = function(t, e, s) {
            var n = i(2)
              , r = new n
              , o = $("#rightFloat")
              , a = {
                $rightFloat: o,
                $rfLine: o.find(".line"),
                $rfFbIcon: o.find(".rfFbIcon"),
                $rfWeChat: o.find(".rfWeChat"),
                $rfPopBox: o.find(".rfPopBox"),
                $rfFbIconBox: o.find(".rfFbBox"),
                $rfWeChatBox: o.find(".rfWeChatBox"),
                $rfTop: o.find(".rfTop"),
                $rfBall: o.find(".rfBall"),
                $rfDown: o.find(".rfDown"),
                $rfDownBox: o.find(".rfDownBox"),
                $rfActivity: o.find(".rfActivity"),
                $win: $(window)
            }
              , c = {
                init: function() {
                    var t = this;
                    a.$rfDown.on("mouseenter", function() {
                        var t = $(this).attr("data-id");
                        a.$rfPopBox.hide(),
                        $("." + t).fadeIn()
                    }),
                    a.$rfFbIcon.on("mouseenter", function() {
                        var t = $(this).attr("data-id");
                        a.$rfPopBox.hide(),
                        $("." + t).fadeIn()
                    }),
                    a.$rfWeChat.on("mouseenter", function() {
                        var t = a.$rfWeChatBox.find("img")
                          , e = t.attr("src")
                          , i = t.attr("data-src");
                        "//www.gmresstatic.com/img/common/bg/pixel.gif" === e && t.attr("src", i);
                        $(this).attr("data-id");
                        a.$rfFbIconBox.hide()
                    }),
                    a.$rfActivity.on("mouseenter", function() {
                        var t = $(this).attr("data-id");
                        a.$rfPopBox.hide(),
                        $("." + t).fadeIn()
                    }),
                    a.$rightFloat.on("mouseleave", function() {
                        a.$rfPopBox.hide()
                    }),
                    a.$rfTop.on("click", function() {
                        r.scrollAnchor("header")
                    }),
                    a.$rfBall.css({
                        cursor: "auto"
                    }),
                    t._isRfTop(a.$win),
                    a.$win.scroll(function() {
                        t._isRfTop(a.$win)
                    })
                },
                _isRfTop: function(t) {
                    var e = t.height()
                      , i = t.scrollTop();
                    i >= e / 2 ? a.$rightFloat.addClass("addTop") : a.$rightFloat.removeClass("addTop")
                }
            };
            c.init()
        }
        .call(e, i, e, t),
        !(void 0 !== s && (t.exports = s))
    },
    44: function(t, e, i) {
        var s;
        s = function(t, e, s) {
            function n() {}
            var r = i(1);
            s.exports = n,
            n.prototype.init = function(t) {
                function e() {
                    c.eq(n).fadeOut(t.slideTime),
                    d.removeClass("progress-loading"),
                    n = --n,
                    n === -1 && (n = a - 1);
                    var e = c.eq(n).children("img").attr("src");
                    "//www.gmresstatic.com/img/common/bg/pixel.gif" === e && c.eq(n).children("img").attr("src", c.eq(n).children("img").attr("data-url")),
                    c.eq(n).fadeIn(t.slideTime),
                    d.eq(n).addClass("progress-loading")
                }
                function i() {
                    c.eq(n).fadeOut(t.slideTime),
                    d.removeClass("progress-loading"),
                    n = ++n,
                    n === a && (n = 0);
                    var e = c.eq(n).children("img").attr("src");
                    "//www.gmresstatic.com/img/common/bg/pixel.gif" === e && c.eq(n).children("img").attr("src", c.eq(n).children("img").attr("data-url")),
                    c.eq(n).fadeIn(t.slideTime),
                    d.eq(n).addClass("progress-loading")
                }
                function s() {
                    clearInterval(o),
                    o = setInterval(i, 8e3)
                }
                var n = 0
                  , o = null
                  , a = r(".slide-li").length
                  , c = r("#" + t.slidePicUl).find("li")
                  , l = r("#" + t.markLeft)
                  , u = r("#" + t.markRight)
                  , d = r(".progress-inner");
                c.eq(0).children("img").attr("src", c.eq(0).children("img").attr("data-url")),
                c.eq(0).fadeIn(t.slideTime, function() {
                    d.eq(0).addClass("progress-loading")
                });
                var o = setInterval(i, 8e3);
                l.on("click", function() {
                    e(),
                    s()
                }),
                u.on("click", function() {
                    i(),
                    s()
                }),
                r(".progress").on("click", function() {
                    parseInt(r(this).attr("data-id")) !== parseInt(n) && (c.eq(n).fadeOut(t.slideTime),
                    n = r(this).index(),
                    d.removeClass("progress-loading"),
                    c.eq(n).children("img").attr("src", c.eq(n).children("img").attr("data-url")),
                    setTimeout(function() {
                        d.eq(n).addClass("progress-loading")
                    }, 50),
                    c.eq(n).fadeIn(t.slideTime),
                    s())
                }).on("mouseenter", function() {
                    parseInt(r(this).attr("data-id")) !== parseInt(n) && (d.removeClass("progress-loading"),
                    r(this).find(".progress-inner").addClass("progress-loading"),
                    clearInterval(o))
                }).on("mouseleave", function() {
                    parseInt(r(this).attr("data-id")) !== parseInt(n) && (d.removeClass("progress-loading"),
                    d.eq(n).addClass("progress-loading"),
                    o = setInterval(i, 8e3))
                }),
                r("#btn-arrow-left").hover(function() {
                    var t = r(this).css("left");
                    "-70px" === t ? r(this).animate({
                        left: "-85px"
                    }) : r(this).animate({
                        left: "-70px"
                    })
                }, function() {
                    r(this).animate({
                        left: "-70px"
                    })
                }),
                r("#btn-arrow-right").hover(function() {
                    var t = r(this).css("right");
                    "-70px" === t ? r(this).animate({
                        right: "-85px"
                    }) : r(this).animate({
                        right: "-70px"
                    })
                }, function() {
                    r(this).animate({
                        right: "-70px"
                    })
                })
            }
            ,
            n.prototype.loadingEffect = function() {
                r(".slide-li").eq(0).find("img").on("load", function() {
                    r("#loading-gif").fadeOut()
                })
            }
        }
        .call(e, i, e, t),
        !(void 0 !== s && (t.exports = s))
    },
    56: function(t, e, i) {
        var s, n, r;
        !function(o) {
            n = [i(1)],
            s = o,
            r = "function" == typeof s ? s.apply(e, n) : s,
            !(void 0 !== r && (t.exports = r))
        }(function(t) {
            function e(e, s) {
                var n, r, o, a = e.nodeName.toLowerCase();
                return "area" === a ? (n = e.parentNode,
                r = n.name,
                !(!e.href || !r || "map" !== n.nodeName.toLowerCase()) && (o = t("img[usemap='#" + r + "']")[0],
                !!o && i(o))) : (/^(input|select|textarea|button|object)$/.test(a) ? !e.disabled : "a" === a ? e.href || s : s) && i(e)
            }
            function i(e) {
                return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
                    return "hidden" === t.css(this, "visibility")
                }).length
            }
            function s(t) {
                for (var e, i; t.length && t[0] !== document; ) {
                    if (e = t.css("position"),
                    ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10),
                    !isNaN(i) && 0 !== i))
                        return i;
                    t = t.parent()
                }
                return 0
            }
            function n() {
                this._curInst = null,
                this._keyEvent = !1,
                this._disabledInputs = [],
                this._datepickerShowing = !1,
                this._inDialog = !1,
                this._mainDivId = "ui-datepicker-div",
                this._inlineClass = "ui-datepicker-inline",
                this._appendClass = "ui-datepicker-append",
                this._triggerClass = "ui-datepicker-trigger",
                this._dialogClass = "ui-datepicker-dialog",
                this._disableClass = "ui-datepicker-disabled",
                this._unselectableClass = "ui-datepicker-unselectable",
                this._currentClass = "ui-datepicker-current-day",
                this._dayOverClass = "ui-datepicker-days-cell-over",
                this.regional = [],
                this.regional[""] = {
                    closeText: "Done",
                    prevText: "Prev",
                    nextText: "Next",
                    currentText: "Today",
                    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
                    weekHeader: "Wk",
                    dateFormat: "mm/dd/yy",
                    firstDay: 0,
                    isRTL: !1,
                    showMonthAfterYear: !1,
                    yearSuffix: ""
                },
                this._defaults = {
                    showOn: "focus",
                    showAnim: "fadeIn",
                    showOptions: {},
                    defaultDate: null,
                    appendText: "",
                    buttonText: "...",
                    buttonImage: "",
                    buttonImageOnly: !1,
                    hideIfNoPrevNext: !1,
                    navigationAsDateFormat: !1,
                    gotoCurrent: !1,
                    changeMonth: !1,
                    changeYear: !1,
                    yearRange: "c-10:c+10",
                    showOtherMonths: !1,
                    selectOtherMonths: !1,
                    showWeek: !1,
                    calculateWeek: this.iso8601Week,
                    shortYearCutoff: "+10",
                    minDate: null,
                    maxDate: null,
                    duration: "fast",
                    beforeShowDay: null,
                    beforeShow: null,
                    onSelect: null,
                    onChangeMonthYear: null,
                    onClose: null,
                    numberOfMonths: 1,
                    showCurrentAtPos: 0,
                    stepMonths: 1,
                    stepBigMonths: 12,
                    altField: "",
                    altFormat: "",
                    constrainInput: !0,
                    showButtonPanel: !1,
                    autoSize: !1,
                    disabled: !1
                },
                t.extend(this._defaults, this.regional[""]),
                this.regional.en = t.extend(!0, {}, this.regional[""]),
                this.regional["en-US"] = t.extend(!0, {}, this.regional.en),
                this.dpDiv = r(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
            }
            function r(e) {
                var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
                return e.delegate(i, "mouseout", function() {
                    t(this).removeClass("ui-state-hover"),
                    this.className.indexOf("ui-datepicker-prev") !== -1 && t(this).removeClass("ui-datepicker-prev-hover"),
                    this.className.indexOf("ui-datepicker-next") !== -1 && t(this).removeClass("ui-datepicker-next-hover")
                }).delegate(i, "mouseover", o)
            }
            function o() {
                t.datepicker._isDisabledDatepicker(c.inline ? c.dpDiv.parent()[0] : c.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
                t(this).addClass("ui-state-hover"),
                this.className.indexOf("ui-datepicker-prev") !== -1 && t(this).addClass("ui-datepicker-prev-hover"),
                this.className.indexOf("ui-datepicker-next") !== -1 && t(this).addClass("ui-datepicker-next-hover"))
            }
            function a(e, i) {
                t.extend(e, i);
                for (var s in i)
                    null == i[s] && (e[s] = i[s]);
                return e
            }
            t.ui = t.ui || {},
            t.extend(t.ui, {
                version: "1.11.4",
                keyCode: {
                    BACKSPACE: 8,
                    COMMA: 188,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    LEFT: 37,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38
                }
            }),
            t.fn.extend({
                scrollParent: function(e) {
                    var i = this.css("position")
                      , s = "absolute" === i
                      , n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/
                      , r = this.parents().filter(function() {
                        var e = t(this);
                        return (!s || "static" !== e.css("position")) && n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                    }).eq(0);
                    return "fixed" !== i && r.length ? r : t(this[0].ownerDocument || document)
                },
                uniqueId: function() {
                    var t = 0;
                    return function() {
                        return this.each(function() {
                            this.id || (this.id = "ui-id-" + ++t)
                        })
                    }
                }(),
                removeUniqueId: function() {
                    return this.each(function() {
                        /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                    })
                }
            }),
            t.extend(t.expr[":"], {
                data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                    return function(i) {
                        return !!t.data(i, e)
                    }
                }) : function(e, i, s) {
                    return !!t.data(e, s[3])
                }
                ,
                focusable: function(i) {
                    return e(i, !isNaN(t.attr(i, "tabindex")))
                },
                tabbable: function(i) {
                    var s = t.attr(i, "tabindex")
                      , n = isNaN(s);
                    return (n || s >= 0) && e(i, !n)
                }
            }),
            t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(e, i) {
                function s(e, i, s, r) {
                    return t.each(n, function() {
                        i -= parseFloat(t.css(e, "padding" + this)) || 0,
                        s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                        r && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                    }),
                    i
                }
                var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"]
                  , r = i.toLowerCase()
                  , o = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
                t.fn["inner" + i] = function(e) {
                    return void 0 === e ? o["inner" + i].call(this) : this.each(function() {
                        t(this).css(r, s(this, e) + "px")
                    })
                }
                ,
                t.fn["outer" + i] = function(e, n) {
                    return "number" != typeof e ? o["outer" + i].call(this, e) : this.each(function() {
                        t(this).css(r, s(this, e, !0, n) + "px")
                    })
                }
            }),
            t.fn.addBack || (t.fn.addBack = function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
            ),
            t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
                return function(i) {
                    return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
                }
            }(t.fn.removeData)),
            t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
            t.fn.extend({
                focus: function(e) {
                    return function(i, s) {
                        return "number" == typeof i ? this.each(function() {
                            var e = this;
                            setTimeout(function() {
                                t(e).focus(),
                                s && s.call(e)
                            }, i)
                        }) : e.apply(this, arguments)
                    }
                }(t.fn.focus),
                disableSelection: function() {
                    var t = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown";
                    return function() {
                        return this.bind(t + ".ui-disableSelection", function(t) {
                            t.preventDefault()
                        })
                    }
                }(),
                enableSelection: function() {
                    return this.unbind(".ui-disableSelection")
                },
                zIndex: function(e) {
                    if (void 0 !== e)
                        return this.css("zIndex", e);
                    if (this.length)
                        for (var i, s, n = t(this[0]); n.length && n[0] !== document; ) {
                            if (i = n.css("position"),
                            ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10),
                            !isNaN(s) && 0 !== s))
                                return s;
                            n = n.parent()
                        }
                    return 0
                }
            }),
            t.ui.plugin = {
                add: function(e, i, s) {
                    var n, r = t.ui[e].prototype;
                    for (n in s)
                        r.plugins[n] = r.plugins[n] || [],
                        r.plugins[n].push([i, s[n]])
                },
                call: function(t, e, i, s) {
                    var n, r = t.plugins[e];
                    if (r && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                        for (n = 0; n < r.length; n++)
                            t.options[r[n][0]] && r[n][1].apply(t.element, i)
                }
            },
            t.extend(t.ui, {
                datepicker: {
                    version: "1.11.4"
                }
            });
            var c;
            t.extend(n.prototype, {
                markerClassName: "hasDatepicker",
                maxRows: 4,
                _widgetDatepicker: function() {
                    return this.dpDiv
                },
                setDefaults: function(t) {
                    return a(this._defaults, t || {}),
                    this
                },
                _attachDatepicker: function(e, i) {
                    var s, n, r;
                    s = e.nodeName.toLowerCase(),
                    n = "div" === s || "span" === s,
                    e.id || (this.uuid += 1,
                    e.id = "dp" + this.uuid),
                    r = this._newInst(t(e), n),
                    r.settings = t.extend({}, i || {}),
                    "input" === s ? this._connectDatepicker(e, r) : n && this._inlineDatepicker(e, r)
                },
                _newInst: function(e, i) {
                    var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                    return {
                        id: s,
                        input: e,
                        selectedDay: 0,
                        selectedMonth: 0,
                        selectedYear: 0,
                        drawMonth: 0,
                        drawYear: 0,
                        inline: i,
                        dpDiv: i ? r(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                    }
                },
                _connectDatepicker: function(e, i) {
                    var s = t(e);
                    i.append = t([]),
                    i.trigger = t([]),
                    s.hasClass(this.markerClassName) || (this._attachments(s, i),
                    s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),
                    this._autoSize(i),
                    t.data(e, "datepicker", i),
                    i.settings.disabled && this._disableDatepicker(e))
                },
                _attachments: function(e, i) {
                    var s, n, r, o = this._get(i, "appendText"), a = this._get(i, "isRTL");
                    i.append && i.append.remove(),
                    o && (i.append = t("<span class='" + this._appendClass + "'>" + o + "</span>"),
                    e[a ? "before" : "after"](i.append)),
                    e.unbind("focus", this._showDatepicker),
                    i.trigger && i.trigger.remove(),
                    s = this._get(i, "showOn"),
                    "focus" !== s && "both" !== s || e.focus(this._showDatepicker),
                    "button" !== s && "both" !== s || (n = this._get(i, "buttonText"),
                    r = this._get(i, "buttonImage"),
                    i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                        src: r,
                        alt: n,
                        title: n
                    }) : t("<button type='button'></button>").addClass(this._triggerClass).html(r ? t("<img/>").attr({
                        src: r,
                        alt: n,
                        title: n
                    }) : n)),
                    e[a ? "before" : "after"](i.trigger),
                    i.trigger.click(function() {
                        return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(),
                        t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]),
                        !1
                    }))
                },
                _autoSize: function(t) {
                    if (this._get(t, "autoSize") && !t.inline) {
                        var e, i, s, n, r = new Date(2009,11,20), o = this._get(t, "dateFormat");
                        o.match(/[DM]/) && (e = function(t) {
                            for (i = 0,
                            s = 0,
                            n = 0; n < t.length; n++)
                                t[n].length > i && (i = t[n].length,
                                s = n);
                            return s
                        }
                        ,
                        r.setMonth(e(this._get(t, o.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                        r.setDate(e(this._get(t, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - r.getDay())),
                        t.input.attr("size", this._formatDate(t, r).length)
                    }
                },
                _inlineDatepicker: function(e, i) {
                    var s = t(e);
                    s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv),
                    t.data(e, "datepicker", i),
                    this._setDate(i, this._getDefaultDate(i), !0),
                    this._updateDatepicker(i),
                    this._updateAlternate(i),
                    i.settings.disabled && this._disableDatepicker(e),
                    i.dpDiv.css("display", "block"))
                },
                _dialogDatepicker: function(e, i, s, n, r) {
                    var o, c, l, u, d, p = this._dialogInst;
                    return p || (this.uuid += 1,
                    o = "dp" + this.uuid,
                    this._dialogInput = t("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"),
                    this._dialogInput.keydown(this._doKeyDown),
                    t("body").append(this._dialogInput),
                    p = this._dialogInst = this._newInst(this._dialogInput, !1),
                    p.settings = {},
                    t.data(this._dialogInput[0], "datepicker", p)),
                    a(p.settings, n || {}),
                    i = i && i.constructor === Date ? this._formatDate(p, i) : i,
                    this._dialogInput.val(i),
                    this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null,
                    this._pos || (c = document.documentElement.clientWidth,
                    l = document.documentElement.clientHeight,
                    u = document.documentElement.scrollLeft || document.body.scrollLeft,
                    d = document.documentElement.scrollTop || document.body.scrollTop,
                    this._pos = [c / 2 - 100 + u, l / 2 - 150 + d]),
                    this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
                    p.settings.onSelect = s,
                    this._inDialog = !0,
                    this.dpDiv.addClass(this._dialogClass),
                    this._showDatepicker(this._dialogInput[0]),
                    t.blockUI && t.blockUI(this.dpDiv),
                    t.data(this._dialogInput[0], "datepicker", p),
                    this
                },
                _destroyDatepicker: function(e) {
                    var i, s = t(e), n = t.data(e, "datepicker");
                    s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(),
                    t.removeData(e, "datepicker"),
                    "input" === i ? (n.append.remove(),
                    n.trigger.remove(),
                    s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" !== i && "span" !== i || s.removeClass(this.markerClassName).empty(),
                    c === n && (c = null))
                },
                _enableDatepicker: function(e) {
                    var i, s, n = t(e), r = t.data(e, "datepicker");
                    n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(),
                    "input" === i ? (e.disabled = !1,
                    r.trigger.filter("button").each(function() {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    })) : "div" !== i && "span" !== i || (s = n.children("." + this._inlineClass),
                    s.children().removeClass("ui-state-disabled"),
                    s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
                    this._disabledInputs = t.map(this._disabledInputs, function(t) {
                        return t === e ? null : t
                    }))
                },
                _disableDatepicker: function(e) {
                    var i, s, n = t(e), r = t.data(e, "datepicker");
                    n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(),
                    "input" === i ? (e.disabled = !0,
                    r.trigger.filter("button").each(function() {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    })) : "div" !== i && "span" !== i || (s = n.children("." + this._inlineClass),
                    s.children().addClass("ui-state-disabled"),
                    s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
                    this._disabledInputs = t.map(this._disabledInputs, function(t) {
                        return t === e ? null : t
                    }),
                    this._disabledInputs[this._disabledInputs.length] = e)
                },
                _isDisabledDatepicker: function(t) {
                    if (!t)
                        return !1;
                    for (var e = 0; e < this._disabledInputs.length; e++)
                        if (this._disabledInputs[e] === t)
                            return !0;
                    return !1
                },
                _getInst: function(e) {
                    try {
                        return t.data(e, "datepicker")
                    } catch (t) {
                        throw "Missing instance data for this datepicker"
                    }
                },
                _optionDatepicker: function(e, i, s) {
                    var n, r, o, c, l = this._getInst(e);
                    return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {},
                    "string" == typeof i && (n = {},
                    n[i] = s),
                    void (l && (this._curInst === l && this._hideDatepicker(),
                    r = this._getDateDatepicker(e, !0),
                    o = this._getMinMaxDate(l, "min"),
                    c = this._getMinMaxDate(l, "max"),
                    a(l.settings, n),
                    null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, o)),
                    null !== c && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, c)),
                    "disabled"in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)),
                    this._attachments(t(e), l),
                    this._autoSize(l),
                    this._setDate(l, r),
                    this._updateAlternate(l),
                    this._updateDatepicker(l))))
                },
                _changeDatepicker: function(t, e, i) {
                    this._optionDatepicker(t, e, i)
                },
                _refreshDatepicker: function(t) {
                    var e = this._getInst(t);
                    e && this._updateDatepicker(e)
                },
                _setDateDatepicker: function(t, e) {
                    var i = this._getInst(t);
                    i && (this._setDate(i, e),
                    this._updateDatepicker(i),
                    this._updateAlternate(i))
                },
                _getDateDatepicker: function(t, e) {
                    var i = this._getInst(t);
                    return i && !i.inline && this._setDateFromField(i, e),
                    i ? this._getDate(i) : null
                },
                _doKeyDown: function(e) {
                    var i, s, n, r = t.datepicker._getInst(e.target), o = !0, a = r.dpDiv.is(".ui-datepicker-rtl");
                    if (r._keyEvent = !0,
                    t.datepicker._datepickerShowing)
                        switch (e.keyCode) {
                        case 9:
                            t.datepicker._hideDatepicker(),
                            o = !1;
                            break;
                        case 13:
                            return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", r.dpDiv),
                            n[0] && t.datepicker._selectDay(e.target, r.selectedMonth, r.selectedYear, n[0]),
                            i = t.datepicker._get(r, "onSelect"),
                            i ? (s = t.datepicker._formatDate(r),
                            i.apply(r.input ? r.input[0] : null, [s, r])) : t.datepicker._hideDatepicker(),
                            !1;
                        case 27:
                            t.datepicker._hideDatepicker();
                            break;
                        case 33:
                            t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(r, "stepBigMonths") : -t.datepicker._get(r, "stepMonths"), "M");
                            break;
                        case 34:
                            t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(r, "stepBigMonths") : +t.datepicker._get(r, "stepMonths"), "M");
                            break;
                        case 35:
                            (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
                            o = e.ctrlKey || e.metaKey;
                            break;
                        case 36:
                            (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
                            o = e.ctrlKey || e.metaKey;
                            break;
                        case 37:
                            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"),
                            o = e.ctrlKey || e.metaKey,
                            e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(r, "stepBigMonths") : -t.datepicker._get(r, "stepMonths"), "M");
                            break;
                        case 38:
                            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"),
                            o = e.ctrlKey || e.metaKey;
                            break;
                        case 39:
                            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"),
                            o = e.ctrlKey || e.metaKey,
                            e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(r, "stepBigMonths") : +t.datepicker._get(r, "stepMonths"), "M");
                            break;
                        case 40:
                            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"),
                            o = e.ctrlKey || e.metaKey;
                            break;
                        default:
                            o = !1
                        }
                    else
                        36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : o = !1;
                    o && (e.preventDefault(),
                    e.stopPropagation())
                },
                _doKeyPress: function(e) {
                    var i, s, n = t.datepicker._getInst(e.target);
                    if (t.datepicker._get(n, "constrainInput"))
                        return i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")),
                        s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode),
                        e.ctrlKey || e.metaKey || s < " " || !i || i.indexOf(s) > -1
                },
                _doKeyUp: function(e) {
                    var i, s = t.datepicker._getInst(e.target);
                    if (s.input.val() !== s.lastVal)
                        try {
                            i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)),
                            i && (t.datepicker._setDateFromField(s),
                            t.datepicker._updateAlternate(s),
                            t.datepicker._updateDatepicker(s))
                        } catch (t) {}
                    return !0
                },
                _showDatepicker: function(e) {
                    if (e = e.target || e,
                    "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]),
                    !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                        var i, n, r, o, c, l, u;
                        i = t.datepicker._getInst(e),
                        t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0),
                        i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
                        n = t.datepicker._get(i, "beforeShow"),
                        r = n ? n.apply(e, [e, i]) : {},
                        r !== !1 && (a(i.settings, r),
                        i.lastVal = null,
                        t.datepicker._lastInput = e,
                        t.datepicker._setDateFromField(i),
                        t.datepicker._inDialog && (e.value = ""),
                        t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e),
                        t.datepicker._pos[1] += e.offsetHeight),
                        o = !1,
                        t(e).parents().each(function() {
                            return o |= "fixed" === t(this).css("position"),
                            !o
                        }),
                        c = {
                            left: t.datepicker._pos[0],
                            top: t.datepicker._pos[1]
                        },
                        t.datepicker._pos = null,
                        i.dpDiv.empty(),
                        i.dpDiv.css({
                            position: "absolute",
                            display: "block",
                            top: "-1000px"
                        }),
                        t.datepicker._updateDatepicker(i),
                        c = t.datepicker._checkOffset(i, c, o),
                        i.dpDiv.css({
                            position: t.datepicker._inDialog && t.blockUI ? "static" : o ? "fixed" : "absolute",
                            display: "none",
                            left: c.left + "px",
                            top: c.top + "px"
                        }),
                        i.inline || (l = t.datepicker._get(i, "showAnim"),
                        u = t.datepicker._get(i, "duration"),
                        i.dpDiv.css("z-index", s(t(e)) + 1),
                        t.datepicker._datepickerShowing = !0,
                        t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null),
                        t.datepicker._shouldFocusInput(i) && i.input.focus(),
                        t.datepicker._curInst = i))
                    }
                },
                _updateDatepicker: function(e) {
                    this.maxRows = 4,
                    c = e,
                    e.dpDiv.empty().append(this._generateHTML(e)),
                    this._attachHandlers(e);
                    var i, s = this._getNumberOfMonths(e), n = s[1], r = 17, a = e.dpDiv.find("." + this._dayOverClass + " a");
                    a.length > 0 && o.apply(a.get(0)),
                    e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
                    n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", r * n + "em"),
                    e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
                    e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
                    e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(),
                    e.yearshtml && (i = e.yearshtml,
                    setTimeout(function() {
                        i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),
                        i = e.yearshtml = null
                    }, 0))
                },
                _shouldFocusInput: function(t) {
                    return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
                },
                _checkOffset: function(e, i, s) {
                    var n = e.dpDiv.outerWidth()
                      , r = e.dpDiv.outerHeight()
                      , o = e.input ? e.input.outerWidth() : 0
                      , a = e.input ? e.input.outerHeight() : 0
                      , c = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft())
                      , l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
                    return i.left -= this._get(e, "isRTL") ? n - o : 0,
                    i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0,
                    i.top -= s && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0,
                    i.left -= Math.min(i.left, i.left + n > c && c > n ? Math.abs(i.left + n - c) : 0),
                    i.top -= Math.min(i.top, i.top + r > l && l > r ? Math.abs(r + a) : 0),
                    i
                },
                _findPos: function(e) {
                    for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e)); )
                        e = e[n ? "previousSibling" : "nextSibling"];
                    return i = t(e).offset(),
                    [i.left, i.top]
                },
                _hideDatepicker: function(e) {
                    var i, s, n, r, o = this._curInst;
                    !o || e && o !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"),
                    s = this._get(o, "duration"),
                    n = function() {
                        t.datepicker._tidyDialog(o)
                    }
                    ,
                    t.effects && (t.effects.effect[i] || t.effects[i]) ? o.dpDiv.hide(i, t.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n),
                    i || n(),
                    this._datepickerShowing = !1,
                    r = this._get(o, "onClose"),
                    r && r.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]),
                    this._lastInput = null,
                    this._inDialog && (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    }),
                    t.blockUI && (t.unblockUI(),
                    t("body").append(this.dpDiv))),
                    this._inDialog = !1)
                },
                _tidyDialog: function(t) {
                    t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
                },
                _checkExternalClick: function(e) {
                    if (t.datepicker._curInst) {
                        var i = t(e.target)
                          , s = t.datepicker._getInst(i[0]);
                        (i[0].id === t.datepicker._mainDivId || 0 !== i.parents("#" + t.datepicker._mainDivId).length || i.hasClass(t.datepicker.markerClassName) || i.closest("." + t.datepicker._triggerClass).length || !t.datepicker._datepickerShowing || t.datepicker._inDialog && t.blockUI) && (!i.hasClass(t.datepicker.markerClassName) || t.datepicker._curInst === s) || t.datepicker._hideDatepicker()
                    }
                },
                _adjustDate: function(e, i, s) {
                    var n = t(e)
                      , r = this._getInst(n[0]);
                    this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(r, i + ("M" === s ? this._get(r, "showCurrentAtPos") : 0), s),
                    this._updateDatepicker(r),
                    this._signin(r))
                },
                _gotoToday: function(e) {
                    var i, s = t(e), n = this._getInst(s[0]);
                    this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay,
                    n.drawMonth = n.selectedMonth = n.currentMonth,
                    n.drawYear = n.selectedYear = n.currentYear) : (i = new Date,
                    n.selectedDay = i.getDate(),
                    n.drawMonth = n.selectedMonth = i.getMonth(),
                    n.drawYear = n.selectedYear = i.getFullYear()),
                    this._notifyChange(n),
                    this._adjustDate(s)
                },
                _selectMonthYear: function(e, i, s) {
                    var n = t(e)
                      , r = this._getInst(n[0]);
                    r["selected" + ("M" === s ? "Month" : "Year")] = r["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10),
                    this._notifyChange(r),
                    this._adjustDate(n)
                },
                _selectDay: function(e, i, s, n) {
                    var r, o = t(e);
                    t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (r = this._getInst(o[0]),
                    r.selectedDay = r.currentDay = t("a", n).html(),
                    r.selectedMonth = r.currentMonth = i,
                    r.selectedYear = r.currentYear = s,
                    this._selectDate(e, this._formatDate(r, r.currentDay, r.currentMonth, r.currentYear)))
                },
                _clearDate: function(e) {
                    var i = t(e);
                    this._selectDate(i, "")
                },
                _selectDate: function(e, i) {
                    var s, n = t(e), r = this._getInst(n[0]);
                    i = null != i ? i : this._formatDate(r),
                    r.input && r.input.val(i),
                    this._updateAlternate(r),
                    s = this._get(r, "onSelect"),
                    s ? s.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change"),
                    r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(),
                    this._lastInput = r.input[0],
                    "object" != typeof r.input[0] && r.input.focus(),
                    this._lastInput = null)
                },
                _updateAlternate: function(e) {
                    var i, s, n, r = this._get(e, "altField");
                    r && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"),
                    s = this._getDate(e),
                    n = this.formatDate(i, s, this._getFormatConfig(e)),
                    t(r).each(function() {
                        t(this).val(n)
                    }))
                },
                noWeekends: function(t) {
                    var e = t.getDay();
                    return [e > 0 && e < 6, ""]
                },
                iso8601Week: function(t) {
                    var e, i = new Date(t.getTime());
                    return i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
                    e = i.getTime(),
                    i.setMonth(0),
                    i.setDate(1),
                    Math.floor(Math.round((e - i) / 864e5) / 7) + 1
                },
                parseDate: function(e, i, s) {
                    if (null == e || null == i)
                        throw "Invalid arguments";
                    if (i = "object" == typeof i ? i.toString() : i + "",
                    "" === i)
                        return null;
                    var n, r, o, a, c = 0, l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, u = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10), d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, p = (s ? s.dayNames : null) || this._defaults.dayNames, h = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, f = (s ? s.monthNames : null) || this._defaults.monthNames, g = -1, m = -1, v = -1, _ = -1, b = !1, y = function(t) {
                        var i = n + 1 < e.length && e.charAt(n + 1) === t;
                        return i && n++,
                        i
                    }, w = function(t) {
                        var e = y(t)
                          , s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2
                          , n = "y" === t ? s : 1
                          , r = new RegExp("^\\d{" + n + "," + s + "}")
                          , o = i.substring(c).match(r);
                        if (!o)
                            throw "Missing number at position " + c;
                        return c += o[0].length,
                        parseInt(o[0], 10)
                    }, k = function(e, s, n) {
                        var r = -1
                          , o = t.map(y(e) ? n : s, function(t, e) {
                            return [[e, t]]
                        }).sort(function(t, e) {
                            return -(t[1].length - e[1].length)
                        });
                        if (t.each(o, function(t, e) {
                            var s = e[1];
                            if (i.substr(c, s.length).toLowerCase() === s.toLowerCase())
                                return r = e[0],
                                c += s.length,
                                !1
                        }),
                        r !== -1)
                            return r + 1;
                        throw "Unknown name at position " + c
                    }, D = function() {
                        if (i.charAt(c) !== e.charAt(n))
                            throw "Unexpected literal at position " + c;
                        c++
                    };
                    for (n = 0; n < e.length; n++)
                        if (b)
                            "'" !== e.charAt(n) || y("'") ? D() : b = !1;
                        else
                            switch (e.charAt(n)) {
                            case "d":
                                v = w("d");
                                break;
                            case "D":
                                k("D", d, p);
                                break;
                            case "o":
                                _ = w("o");
                                break;
                            case "m":
                                m = w("m");
                                break;
                            case "M":
                                m = k("M", h, f);
                                break;
                            case "y":
                                g = w("y");
                                break;
                            case "@":
                                a = new Date(w("@")),
                                g = a.getFullYear(),
                                m = a.getMonth() + 1,
                                v = a.getDate();
                                break;
                            case "!":
                                a = new Date((w("!") - this._ticksTo1970) / 1e4),
                                g = a.getFullYear(),
                                m = a.getMonth() + 1,
                                v = a.getDate();
                                break;
                            case "'":
                                y("'") ? D() : b = !0;
                                break;
                            default:
                                D()
                            }
                    if (c < i.length && (o = i.substr(c),
                    !/^\s+/.test(o)))
                        throw "Extra/unparsed characters found in date: " + o;
                    if (g === -1 ? g = (new Date).getFullYear() : g < 100 && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (g <= u ? 0 : -100)),
                    _ > -1)
                        for (m = 1,
                        v = _; ; ) {
                            if (r = this._getDaysInMonth(g, m - 1),
                            v <= r)
                                break;
                            m++,
                            v -= r
                        }
                    if (a = this._daylightSavingAdjust(new Date(g,m - 1,v)),
                    a.getFullYear() !== g || a.getMonth() + 1 !== m || a.getDate() !== v)
                        throw "Invalid date";
                    return a
                },
                ATOM: "yy-mm-dd",
                COOKIE: "D, dd M yy",
                ISO_8601: "yy-mm-dd",
                RFC_822: "D, d M y",
                RFC_850: "DD, dd-M-y",
                RFC_1036: "D, d M y",
                RFC_1123: "D, d M yy",
                RFC_2822: "D, d M yy",
                RSS: "D, d M y",
                TICKS: "!",
                TIMESTAMP: "@",
                W3C: "yy-mm-dd",
                _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
                formatDate: function(t, e, i) {
                    if (!e)
                        return "";
                    var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, r = (i ? i.dayNames : null) || this._defaults.dayNames, o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, a = (i ? i.monthNames : null) || this._defaults.monthNames, c = function(e) {
                        var i = s + 1 < t.length && t.charAt(s + 1) === e;
                        return i && s++,
                        i
                    }, l = function(t, e, i) {
                        var s = "" + e;
                        if (c(t))
                            for (; s.length < i; )
                                s = "0" + s;
                        return s
                    }, u = function(t, e, i, s) {
                        return c(t) ? s[e] : i[e]
                    }, d = "", p = !1;
                    if (e)
                        for (s = 0; s < t.length; s++)
                            if (p)
                                "'" !== t.charAt(s) || c("'") ? d += t.charAt(s) : p = !1;
                            else
                                switch (t.charAt(s)) {
                                case "d":
                                    d += l("d", e.getDate(), 2);
                                    break;
                                case "D":
                                    d += u("D", e.getDay(), n, r);
                                    break;
                                case "o":
                                    d += l("o", Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime() - new Date(e.getFullYear(),0,0).getTime()) / 864e5), 3);
                                    break;
                                case "m":
                                    d += l("m", e.getMonth() + 1, 2);
                                    break;
                                case "M":
                                    d += u("M", e.getMonth(), o, a);
                                    break;
                                case "y":
                                    d += c("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                                    break;
                                case "@":
                                    d += e.getTime();
                                    break;
                                case "!":
                                    d += 1e4 * e.getTime() + this._ticksTo1970;
                                    break;
                                case "'":
                                    c("'") ? d += "'" : p = !0;
                                    break;
                                default:
                                    d += t.charAt(s)
                                }
                    return d
                },
                _possibleChars: function(t) {
                    var e, i = "", s = !1, n = function(i) {
                        var s = e + 1 < t.length && t.charAt(e + 1) === i;
                        return s && e++,
                        s
                    };
                    for (e = 0; e < t.length; e++)
                        if (s)
                            "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                        else
                            switch (t.charAt(e)) {
                            case "d":
                            case "m":
                            case "y":
                            case "@":
                                i += "0123456789";
                                break;
                            case "D":
                            case "M":
                                return null;
                            case "'":
                                n("'") ? i += "'" : s = !0;
                                break;
                            default:
                                i += t.charAt(e)
                            }
                    return i
                },
                _get: function(t, e) {
                    return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
                },
                _setDateFromField: function(t, e) {
                    if (t.input.val() !== t.lastVal) {
                        var i = this._get(t, "dateFormat")
                          , s = t.lastVal = t.input ? t.input.val() : null
                          , n = this._getDefaultDate(t)
                          , r = n
                          , o = this._getFormatConfig(t);
                        try {
                            r = this.parseDate(i, s, o) || n
                        } catch (t) {
                            s = e ? "" : s
                        }
                        t.selectedDay = r.getDate(),
                        t.drawMonth = t.selectedMonth = r.getMonth(),
                        t.drawYear = t.selectedYear = r.getFullYear(),
                        t.currentDay = s ? r.getDate() : 0,
                        t.currentMonth = s ? r.getMonth() : 0,
                        t.currentYear = s ? r.getFullYear() : 0,
                        this._adjustInstDate(t)
                    }
                },
                _getDefaultDate: function(t) {
                    return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
                },
                _determineDate: function(e, i, s) {
                    var n = function(t) {
                        var e = new Date;
                        return e.setDate(e.getDate() + t),
                        e
                    }
                      , r = function(i) {
                        try {
                            return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                        } catch (t) {}
                        for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, n = s.getFullYear(), r = s.getMonth(), o = s.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = a.exec(i); c; ) {
                            switch (c[2] || "d") {
                            case "d":
                            case "D":
                                o += parseInt(c[1], 10);
                                break;
                            case "w":
                            case "W":
                                o += 7 * parseInt(c[1], 10);
                                break;
                            case "m":
                            case "M":
                                r += parseInt(c[1], 10),
                                o = Math.min(o, t.datepicker._getDaysInMonth(n, r));
                                break;
                            case "y":
                            case "Y":
                                n += parseInt(c[1], 10),
                                o = Math.min(o, t.datepicker._getDaysInMonth(n, r))
                            }
                            c = a.exec(i)
                        }
                        return new Date(n,r,o)
                    }
                      , o = null == i || "" === i ? s : "string" == typeof i ? r(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
                    return o = o && "Invalid Date" === o.toString() ? s : o,
                    o && (o.setHours(0),
                    o.setMinutes(0),
                    o.setSeconds(0),
                    o.setMilliseconds(0)),
                    this._daylightSavingAdjust(o)
                },
                _daylightSavingAdjust: function(t) {
                    return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0),
                    t) : null
                },
                _setDate: function(t, e, i) {
                    var s = !e
                      , n = t.selectedMonth
                      , r = t.selectedYear
                      , o = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                    t.selectedDay = t.currentDay = o.getDate(),
                    t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth(),
                    t.drawYear = t.selectedYear = t.currentYear = o.getFullYear(),
                    n === t.selectedMonth && r === t.selectedYear || i || this._notifyChange(t),
                    this._adjustInstDate(t),
                    t.input && t.input.val(s ? "" : this._formatDate(t))
                },
                _getDate: function(t) {
                    var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));
                    return e
                },
                _attachHandlers: function(e) {
                    var i = this._get(e, "stepMonths")
                      , s = "#" + e.id.replace(/\\\\/g, "\\");
                    e.dpDiv.find("[data-handler]").map(function() {
                        var e = {
                            prev: function() {
                                t.datepicker._adjustDate(s, -i, "M")
                            },
                            next: function() {
                                t.datepicker._adjustDate(s, +i, "M")
                            },
                            hide: function() {
                                t.datepicker._hideDatepicker()
                            },
                            today: function() {
                                t.datepicker._gotoToday(s)
                            },
                            selectDay: function() {
                                return !1
                            },
                            selectMonth: function() {
                                return t.datepicker._selectMonthYear(s, this, "M"),
                                !1
                            },
                            selectYear: function() {
                                return t.datepicker._selectMonthYear(s, this, "Y"),
                                !1
                            }
                        };
                        t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                    })
                },
                _generateHTML: function(t) {
                    var e, i, s, n, r, o, a, c, l, u, d, p, h, f, g, m, v, _, b, y, w, k, D, x, S, C, T, I, $, P, R, A, E, M, N, O, j, B, L, F = new Date, K = this._daylightSavingAdjust(new Date(F.getFullYear(),F.getMonth(),F.getDate())), U = this._get(t, "isRTL"), V = this._get(t, "showButtonPanel"), z = this._get(t, "hideIfNoPrevNext"), H = this._get(t, "navigationAsDateFormat"), q = this._getNumberOfMonths(t), G = this._get(t, "showCurrentAtPos"), J = this._get(t, "stepMonths"), Y = 1 !== q[0] || 1 !== q[1], W = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear,t.currentMonth,t.currentDay) : new Date(9999,9,9)), Z = this._getMinMaxDate(t, "min"), Q = this._getMinMaxDate(t, "max"), X = t.drawMonth - G, tt = t.drawYear;
                    if (X < 0 && (X += 12,
                    tt--),
                    Q)
                        for (e = this._daylightSavingAdjust(new Date(Q.getFullYear(),Q.getMonth() - q[0] * q[1] + 1,Q.getDate())),
                        e = Z && e < Z ? Z : e; this._daylightSavingAdjust(new Date(tt,X,1)) > e; )
                            X--,
                            X < 0 && (X = 11,
                            tt--);
                    for (t.drawMonth = X,
                    t.drawYear = tt,
                    i = this._get(t, "prevText"),
                    i = H ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt,X - J,1)), this._getFormatConfig(t)) : i,
                    s = this._canAdjustMonth(t, -1, tt, X) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + i + "</span></a>" : z ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + i + "</span></a>",
                    n = this._get(t, "nextText"),
                    n = H ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt,X + J,1)), this._getFormatConfig(t)) : n,
                    r = this._canAdjustMonth(t, 1, tt, X) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + n + "</span></a>" : z ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + n + "</span></a>",
                    o = this._get(t, "currentText"),
                    a = this._get(t, "gotoCurrent") && t.currentDay ? W : K,
                    o = H ? this.formatDate(o, a, this._getFormatConfig(t)) : o,
                    c = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>",
                    l = V ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (U ? c : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (U ? "" : c) + "</div>" : "",
                    u = parseInt(this._get(t, "firstDay"), 10),
                    u = isNaN(u) ? 0 : u,
                    d = this._get(t, "showWeek"),
                    p = this._get(t, "dayNames"),
                    h = this._get(t, "dayNamesMin"),
                    f = this._get(t, "monthNames"),
                    g = this._get(t, "monthNamesShort"),
                    m = this._get(t, "beforeShowDay"),
                    v = this._get(t, "showOtherMonths"),
                    _ = this._get(t, "selectOtherMonths"),
                    b = this._getDefaultDate(t),
                    y = "",
                    k = 0; k < q[0]; k++) {
                        for (D = "",
                        this.maxRows = 4,
                        x = 0; x < q[1]; x++) {
                            if (S = this._daylightSavingAdjust(new Date(tt,X,t.selectedDay)),
                            C = " ui-corner-all",
                            T = "",
                            Y) {
                                if (T += "<div class='ui-datepicker-group",
                                q[1] > 1)
                                    switch (x) {
                                    case 0:
                                        T += " ui-datepicker-group-first",
                                        C = " ui-corner-" + (U ? "right" : "left");
                                        break;
                                    case q[1] - 1:
                                        T += " ui-datepicker-group-last",
                                        C = " ui-corner-" + (U ? "left" : "right");
                                        break;
                                    default:
                                        T += " ui-datepicker-group-middle",
                                        C = ""
                                    }
                                T += "'>"
                            }
                            for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && 0 === k ? U ? r : s : "") + (/all|right/.test(C) && 0 === k ? U ? s : r : "") + this._generateMonthYearHeader(t, X, tt, Z, Q, k > 0 || x > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>",
                            I = d ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "",
                            w = 0; w < 7; w++)
                                $ = (w + u) % 7,
                                I += "<th scope='col'" + ((w + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + p[$] + "'>" + h[$] + "</span></th>";
                            for (T += I + "</tr></thead><tbody>",
                            P = this._getDaysInMonth(tt, X),
                            tt === t.selectedYear && X === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, P)),
                            R = (this._getFirstDayOfMonth(tt, X) - u + 7) % 7,
                            A = Math.ceil((R + P) / 7),
                            E = Y && this.maxRows > A ? this.maxRows : A,
                            this.maxRows = E,
                            M = this._daylightSavingAdjust(new Date(tt,X,1 - R)),
                            N = 0; N < E; N++) {
                                for (T += "<tr>",
                                O = d ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(M) + "</td>" : "",
                                w = 0; w < 7; w++)
                                    j = m ? m.apply(t.input ? t.input[0] : null, [M]) : [!0, ""],
                                    B = M.getMonth() !== X,
                                    L = B && !_ || !j[0] || Z && M < Z || Q && M > Q,
                                    O += "<td class='" + ((w + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (B ? " ui-datepicker-other-month" : "") + (M.getTime() === S.getTime() && X === t.selectedMonth && t._keyEvent || b.getTime() === M.getTime() && b.getTime() === S.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (B && !v ? "" : " " + j[1] + (M.getTime() === W.getTime() ? " " + this._currentClass : "") + (M.getTime() === K.getTime() ? " ui-datepicker-today" : "")) + "'" + (B && !v || !j[2] ? "" : " title='" + j[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + M.getMonth() + "' data-year='" + M.getFullYear() + "'") + ">" + (B && !v ? "&#xa0;" : L ? "<span class='ui-state-default'>" + M.getDate() + "</span>" : "<a class='ui-state-default" + (M.getTime() === K.getTime() ? " ui-state-highlight" : "") + (M.getTime() === W.getTime() ? " ui-state-active" : "") + (B ? " ui-priority-secondary" : "") + "' href='#'>" + M.getDate() + "</a>") + "</td>",
                                    M.setDate(M.getDate() + 1),
                                    M = this._daylightSavingAdjust(M);
                                T += O + "</tr>"
                            }
                            X++,
                            X > 11 && (X = 0,
                            tt++),
                            T += "</tbody></table>" + (Y ? "</div>" + (q[0] > 0 && x === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""),
                            D += T
                        }
                        y += D
                    }
                    return y += l,
                    t._keyEvent = !1,
                    y
                },
                _generateMonthYearHeader: function(t, e, i, s, n, r, o, a) {
                    var c, l, u, d, p, h, f, g, m = this._get(t, "changeMonth"), v = this._get(t, "changeYear"), _ = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
                    if (!t.yearshtml)
                        if (t.yearshtml = "",
                        r || !v)
                            b += "<span class='ui-datepicker-year'>" + i + "年</span>";
                        else {
                            for (d = this._get(t, "yearRange").split(":"),
                            p = (new Date).getFullYear(),
                            h = function(t) {
                                var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? p + parseInt(t, 10) : parseInt(t, 10);
                                return isNaN(e) ? p : e
                            }
                            ,
                            f = h(d[0]),
                            g = Math.max(f, h(d[1] || "")),
                            f = s ? Math.max(f, s.getFullYear()) : f,
                            g = n ? Math.min(g, n.getFullYear()) : g,
                            t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= g; f++)
                                t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                            t.yearshtml += "</select>",
                            b += t.yearshtml,
                            t.yearshtml = null
                        }
                    if (r || !m)
                        y += "<span class='ui-datepicker-month'>" + o[e] + "</span>";
                    else {
                        for (c = s && s.getFullYear() === i,
                        l = n && n.getFullYear() === i,
                        y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                        u = 0; u < 12; u++)
                            (!c || u >= s.getMonth()) && (!l || u <= n.getMonth()) && (y += "<option value='" + u + "'" + (u === e ? " selected='selected'" : "") + ">" + a[u] + "</option>");
                        y += "</select>"
                    }
                    return _ || (b += (!r && m && v ? "" : "&#xa0;") + y),
                    b += this._get(t, "yearSuffix"),
                    _ && (b += (!r && m && v ? "" : "&#xa0;") + y),
                    b += "</div>"
                },
                _adjustInstDate: function(t, e, i) {
                    var s = t.drawYear + ("Y" === i ? e : 0)
                      , n = t.drawMonth + ("M" === i ? e : 0)
                      , r = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0)
                      , o = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s,n,r)));
                    t.selectedDay = o.getDate(),
                    t.drawMonth = t.selectedMonth = o.getMonth(),
                    t.drawYear = t.selectedYear = o.getFullYear(),
                    "M" !== i && "Y" !== i || this._notifyChange(t)
                },
                _restrictMinMax: function(t, e) {
                    var i = this._getMinMaxDate(t, "min")
                      , s = this._getMinMaxDate(t, "max")
                      , n = i && e < i ? i : e;
                    return s && n > s ? s : n
                },
                _notifyChange: function(t) {
                    var e = this._get(t, "onChangeMonthYear");
                    e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
                },
                _getNumberOfMonths: function(t) {
                    var e = this._get(t, "numberOfMonths");
                    return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
                },
                _getMinMaxDate: function(t, e) {
                    return this._determineDate(t, this._get(t, e + "Date"), null)
                },
                _getDaysInMonth: function(t, e) {
                    return 32 - this._daylightSavingAdjust(new Date(t,e,32)).getDate()
                },
                _getFirstDayOfMonth: function(t, e) {
                    return new Date(t,e,1).getDay()
                },
                _canAdjustMonth: function(t, e, i, s) {
                    var n = this._getNumberOfMonths(t)
                      , r = this._daylightSavingAdjust(new Date(i,s + (e < 0 ? e : n[0] * n[1]),1));
                    return e < 0 && r.setDate(this._getDaysInMonth(r.getFullYear(), r.getMonth())),
                    this._isInRange(t, r)
                },
                _isInRange: function(t, e) {
                    var i, s, n = this._getMinMaxDate(t, "min"), r = this._getMinMaxDate(t, "max"), o = null, a = null, c = this._get(t, "yearRange");
                    return c && (i = c.split(":"),
                    s = (new Date).getFullYear(),
                    o = parseInt(i[0], 10),
                    a = parseInt(i[1], 10),
                    i[0].match(/[+\-].*/) && (o += s),
                    i[1].match(/[+\-].*/) && (a += s)),
                    (!n || e.getTime() >= n.getTime()) && (!r || e.getTime() <= r.getTime()) && (!o || e.getFullYear() >= o) && (!a || e.getFullYear() <= a)
                },
                _getFormatConfig: function(t) {
                    var e = this._get(t, "shortYearCutoff");
                    return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                    {
                        shortYearCutoff: e,
                        dayNamesShort: this._get(t, "dayNamesShort"),
                        dayNames: this._get(t, "dayNames"),
                        monthNamesShort: this._get(t, "monthNamesShort"),
                        monthNames: this._get(t, "monthNames")
                    }
                },
                _formatDate: function(t, e, i, s) {
                    e || (t.currentDay = t.selectedDay,
                    t.currentMonth = t.selectedMonth,
                    t.currentYear = t.selectedYear);
                    var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s,i,e)) : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));
                    return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
                },
                _signin: function(e) {
                    var i = e.selectedYear
                      , s = e.selectedMonth + 1
                      , n = i + "-" + s;
                    t.ajax({
                        type: "get",
                        url: "/signin/signdetail",
                        data: {
                            signmonth: n
                        },
                        dataType: "json",
                        success: function(e) {
                            1 == e.result && t.each(e.data.MON_SIGN_DATE, function(e, i) {
                                t(".ui-state-default").eq(i - 1).addClass("ui-state-sign")
                            })
                        }
                    })
                }
            }),
            t.fn.datepicker = function(e) {
                if (!this.length)
                    return this;
                t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick),
                t.datepicker.initialized = !0),
                0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
                var i = Array.prototype.slice.call(arguments, 1);
                return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
                    "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
                }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
            }
            ,
            t.datepicker = new n,
            t.datepicker.initialized = !1,
            t.datepicker.uuid = (new Date).getTime(),
            t.datepicker.version = "1.11.4";
            t.datepicker
        })
    }
});



var o = guanjianzi(3)
var a = new o;
password = '123456'
var s = (new Date).getTime();
crypto_pwd = a.encode(password, s)


console.log(crypto_pwd)

