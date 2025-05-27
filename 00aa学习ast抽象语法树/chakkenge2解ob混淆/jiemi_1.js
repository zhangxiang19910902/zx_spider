let parse = require("@babel/parser").parse
let generate = require("@babel/generator").default
let traverse = require("@babel/traverse").default

let fs = require("fs")

// hook 原生ob混肴中的内存爆破（正则test检测）
RegExp.prototype.test = function () {
    return true
}


var _$oa = ['dmRXUFI=', 'Y2FsbA==', 'ZEdqcm4=', 'Y2h5QXU=', 'TFFSVHM=', 'YWN0aW9u', 'XCtcKyAqKD86W2EtekEtWl8kXVswLTlhLXpBLVpfJF0qKQ==', '5q2k572R6aG15Y+X44CQ54ix6ZSt5LqR55u+IFYxLjAg5Yqo5oCB54mI44CR5L+d5oqk', 'eHdtS0Y=', 'bk9wVnY=', 'UkdDSHg=', 'Ym50Vmc=', 'eEFYWW4=', 'cEFGaXE=', 'OyBwYXRoPS8=', 'YXBwbHk=', 'aW5pdA==', 'Y291bnRlcg==', 'YkNYR0I=', 'clFWeGY=', 'dGt2Sm4=', 'dUxyQVk=', 'ZmxUdVA=', 'NHwyfDF8NnwzfDd8NXw4fDA=', 'UWNBeXk=', 'c2lnbj0=', 'Y29va2ll', 'VUxVUFc=', 'd2hpbGUgKHRydWUpIHt9', 'YWlkaW5nX3dpbg==', 'YlBoZ1Q=', 'TW9TaGM=', 'V3drSXk=', 'ZGVidQ==', 'ZnBTTmM=', 'ZU5IakQ=', 'SERGWHI=', 'dGVzdA==', 'aW5wdXQ=', 'c3BsaXQ=', 'cFdEQWI=', 'eldrSnY=', 'dkR6UXA=', 'Y2hhaW4=', 'bG9n', 'Vm5qSkk=', 'SXpGT24=', 'cm91bmQ=', 'RURGWXQ=', 'YnRvYQ==', 'dVVPQ2M=', 'aEJWT2M=', 'c3RhdGVPYmplY3Q=', 'Y1dFWGM=', 'UWZjelY=', 'Y29uc3RydWN0b3I=', 'SkNMWmc=', 'UFhObGU=', 'cURkT3g=', 'c3RyaW5n', 'ZUFscmQ=', 'eEZWYm4=', 'cWlDWkI=', 'bVFVb08=', 'dmFsdWVPZg==', 'SW15bEM=', 'WUtIT1I=', 'a1ZrTnU='];
(function (a, b) {
    var c = function (f) {
        while (--f) {
            a['push'](a['shift']());
        }
    };
    c(++b);
}(_$oa, 0x1ca));
var _$ob = function (a, b) {
    a = a - 0x0;
    var c = _$oa[a];
    if (_$ob['NIHRIE'] === undefined) {
        (function () {
            var f;
            try {
                var h = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                f = h();
            } catch (i) {
                f = window;
            }
            var g = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            f['atob'] || (f['atob'] = function (j) {
                    var k = String(j)['replace'](/=+$/, '');
                    var l = '';
                    for (var m = 0x0, n, o, p = 0x0; o = k['charAt'](p++); ~o && (n = m % 0x4 ? n * 0x40 + o : o,
                    m++ % 0x4) ? l += String['fromCharCode'](0xff & n >> (-0x2 * m & 0x6)) : 0x0) {
                        o = g['indexOf'](o);
                    }
                    return l;
                }
            );
        }());
        _$ob['rVIAwQ'] = function (e) {
            var f = atob(e);
            var g = [];
            for (var h = 0x0, j = f['length']; h < j; h++) {
                g += '%' + ('00' + f['charCodeAt'](h)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(g);
        }
        ;
        _$ob['kVQkhq'] = {};
        _$ob['NIHRIE'] = !![];
    }
    var d = _$ob['kVQkhq'][a];
    if (d === undefined) {
        c = _$ob['rVIAwQ'](c);
        _$ob['kVQkhq'][a] = c;
    } else {
        c = d;
    }
    return c;
};


ast = parse(`(function () {
    var a = {
        'QxnwF': _$ob('0x29'),
        'qDdOx': 'function\x20*\x5c(\x20*\x5c)',
        'rQVxf': _$ob('0x18'),
        'fpSNc': function (g, h) {
            return g(h);
        },
        'tkvJn': _$ob('0x22'),
        'mQUoO': function (g, h) {
            return g + h;
        },
        'foapq': _$ob('0x3d'),
        'vDzQp': function (g, h) {
            return g + h;
        },
        'PXNle': _$ob('0x38'),
        'zWkJv': function (g) {
            return g();
        },
        'ImylC': function (g, h, i) {
            return g(h, i);
        },
        'GlSVu': function (g, h) {
            return g(h);
        },
        'eAlrd': _$ob('0x2f'),
        'chyAu': function (g, h) {
            return g(h);
        },
        'pAFiq': function (g, h) {
            return g / h;
        },
        'gRhqo': _$ob('0x19'),
        'QcAyy': function (g, h) {
            return g + h;
        },
        'flTuP': function (g, h) {
            return g + h;
        },
        'JbVLe': function (g, h) {
            return g + h;
        },
        'hBVOc': function (g, h) {
            return g + h;
        },
        'Qvcfa': function (g, h) {
            return g + h;
        },
        'ckPds': _$ob('0x2b'),
        'cWEXc': _$ob('0x20')
    };
    var b = a['QxnwF'][_$ob('0x39')]('|');
    var c = 0x0;
    while (!![]) {
        switch (b[c++]) {
            case '0':
                location['reload']();
                continue;
            case '1':
                (function () {
                    f[_$ob('0x0')](d, this, function () {
                        var g = new RegExp(f['ixSbH']);
                        var h = new RegExp(f[_$ob('0x30')], 'i');
                        var i = f[_$ob('0x1b')](_$oc, f[_$ob('0x6')]);
                        if (!g[_$ob('0x37')](f[_$ob('0x4')](i, f[_$ob('0x31')])) || !h['test'](f[_$ob('0x14')](i, f['ClSnf']))) {
                            f[_$ob('0x1b')](i, '0');
                        } else {
                            f[_$ob('0x32')](_$oc);
                        }
                    })();
                }());
                continue;
            case '2':
                var d = function () {
                    var g = !![];
                    return function (h, i) {
                        var j = g ? function () {
                                    if (i) {
                                        var k = i[_$ob('0x21')](h, arguments);
                                        i = null;
                                        return k;
                                    }
                                }
                                : function () {
                                }
                        ;
                        g = ![];
                        return j;
                    }
                        ;
                }();
                continue;
            case '3':
                var e = new Date()[_$ob('0xe')]();
                continue;
            case '4':
                var f = {
                    'ixSbH': a[_$ob('0x8')],
                    'bPhgT': a[_$ob('0x25')],
                    'nOpVv': function (g, h) {
                        return a[_$ob('0x34')](g, h);
                    },
                    'JCLZg': a[_$ob('0x26')],
                    'QfczV': function (g, h) {
                        return a[_$ob('0xd')](g, h);
                    },
                    'MoShc': a['foapq'],
                    'dGjrn': function (g, h) {
                        return a[_$ob('0x3c')](g, h);
                    },
                    'ClSnf': a[_$ob('0x7')],
                    'WwkIy': function (g) {
                        return a[_$ob('0x3b')](g);
                    },
                    'uUOCc': function (g, h, i) {
                        return a[_$ob('0xf')](g, h, i);
                    }
                };
                continue;
            case '5':
                md = a['GlSVu'](hex_md5, window[_$ob('0x43')](a[_$ob('0x3c')](a[_$ob('0xa')], a[_$ob('0x15')](String, Math[_$ob('0x41')](a[_$ob('0x1f')](e, 0x3e8))))));
                continue;
            case '6':
                console[_$ob('0x3e')](a['gRhqo']);
                continue;
            case '7':
                token = window[_$ob('0x43')](a[_$ob('0x2a')](a[_$ob('0xa')], a[_$ob('0x15')](String, e)));
                continue;
            case '8':
                document[_$ob('0x2c')] = a[_$ob('0x2a')](a[_$ob('0x28')](a['JbVLe'](a['hBVOc'](a[_$ob('0x1')](a['Qvcfa'](a['ckPds'], Math[_$ob('0x41')](a['pAFiq'](e, 0x3e8))), '~'), token), '|'), md), a[_$ob('0x3')]);
                continue;
        }
        break;
    }
}());

function _$oc(a) {
    var b = {
        'IzFOn': _$ob('0x2e'),
        'eNHjD': _$ob('0x23'),
        'RGCHx': function (d, e) {
            return d !== e;
        },
        'bntVg': _$ob('0x1a'),
        'NRFLz': _$ob('0xc'),
        'LQRTs': function (d, e) {
            return d === e;
        },
        'xAXYn': _$ob('0x9'),
        'pWDAb': function (d, e) {
            return d + e;
        },
        'YKHOR': function (d, e) {
            return d / e;
        },
        'ULUPW': 'length',
        'auKTB': function (d, e) {
            return d % e;
        },
        'WVeuC': _$ob('0x33'),
        'vdWPR': 'gger',
        'xFVbn': _$ob('0x17'),
        'qKJjZ': function (d, e) {
            return d + e;
        },
        'kVkNu': _$ob('0x2'),
        'HDFXr': function (d, e) {
            return d(e);
        },
        'Wunxg': _$ob('0x3f'),
        'EDFYt': _$ob('0x24')
    };

    function c(d) {
        var e = {
            'uLrAY': b[_$ob('0x40')],
            'jwQYi': b[_$ob('0x35')]
        };
        if (b['RGCHx'](b[_$ob('0x1d')], b['NRFLz'])) {
            if (b[_$ob('0x16')](typeof d, b[_$ob('0x1e')])) {
                return function (f) {
                }
                    [_$ob('0x5')](b[_$ob('0x40')])[_$ob('0x21')](b['eNHjD']);
            } else {
                if (b[_$ob('0x1c')](b['pWDAb']('', b[_$ob('0x10')](d, d))[b[_$ob('0x2d')]], 0x1) || b[_$ob('0x16')](b['auKTB'](d, 0x14), 0x0)) {
                    (function () {
                        return !![];
                    }
                        [_$ob('0x5')](b[_$ob('0x3a')](b['WVeuC'], b[_$ob('0x12')]))[_$ob('0x13')](b[_$ob('0xb')]));
                } else {
                    (function () {
                        return ![];
                    }
                        ['constructor'](b['qKJjZ'](b['WVeuC'], b['vdWPR']))['apply'](b[_$ob('0x11')]));
                }
            }
            b['HDFXr'](c, ++d);
        } else {
            return function (g) {
            }
                ['constructor'](e[_$ob('0x27')])[_$ob('0x21')](e['jwQYi']);
        }
    }

    try {
        if (a) {
            if (b[_$ob('0x1c')](b['Wunxg'], b[_$ob('0x42')])) {
                return c;
            } else {
                var e = firstCall ? function () {
                            if (fn) {
                                var f = fn['apply'](context, arguments);
                                fn = null;
                                return f;
                            }
                        }
                        : function () {
                        }
                ;
                firstCall = ![];
                return e;
            }
        } else {
            b[_$ob('0x36')](c, 0x0);
        }
    } catch (e) {
    }
}`)

traverse(ast, {
    CallExpression: function (path){
        if (path.node.callee.name === '_$ob'){

            // console.log(path.get("arguments").toString())
            // console.log(path.node.arguments[0].value)
            // console.log('---------------')

            console.log(path.toString(), '---------->>>',_$ob(path.node.arguments[0].value))

            path.replaceWith({
                type: 'StringLiteral',
                value: _$ob(path.node.arguments[0].value)
            })
        }
    }
})


out_code = generate(ast).code
fs.writeFileSync("challenge_2.js", out_code)