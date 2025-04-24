


// eval

(function() {
  let _eval = eval;
  eval = function(val) {
    if (val.indexof('debugger') === -1) {
      _eval_cache(obj);
    }
  }
})();


// JSON.parse()
(function () {
  var parse_ = JSON.parse;
  JSON.parse = function (arg) {
    console.log(arg);
    debugger;
    return parse_(arg);
  };
})();


// JSON.stringify
(function() {
    var stringify = JSON.stringify;
    JSON.stringify = function(params) {
        console.log("Hook JSON.stringify ——> ", params);
        debugger;
        return stringify(params);
    }
})();


// XMLHttpRequest（URL）
(function () {
  var _open = window.XMLHttpRequest.prototype.open;
  window.XMLHttpRequest.prototype.open = function (method, url, async) {
    if (url.indexOf("参数名称") != -1) {
      debugger;
    }
    return _open.apply(this, arguments);
  };
})();


// XMLHttpRequest（Header）
(function () {
  var _setRequestHeader = window.XMLHttpRequest.prototype.setRequestHeader;
  window.XMLHttpRequest.prototype.setRequestHeader = function (key, value) {
    if (key == "header 的参数 key") {
      debugger;
    }
    return open.apply(this, arguments);
  };
})();



// cookie
(function() {
  var cookieTemp = '';
  Object.defineProperty(document, 'cookie', {
    set: function (val) {
      if (val.indexOf('cookie 关键字') != -1) {
        debugger;
      }
      console.log(val);
      cookieTemp = val;
      return val;
    },
    get: function() {
      return cookieTemp;
    },
  });
})();





 // cookie
(function () {
    'use strict';
    var org = document.cookie.__lookupSetter__('cookie');
    document.__defineSetter__('cookie', function (cookie) {
        if (cookie.indexOf('__dfp') != -1) {
            debugger;
        }
        org = cookie;
    });
    document.__defineGetter__('cookie', function () {
        return org;
    });
})();


// Function
(function() {
    // 保存原始方法
    window.__cr_fun = window.Function;
    // 重写 function
    var myfun = function() {
        var args = Array.prototype.slice.call(arguments, 0, -1).join(","),
            src = arguments[arguments.length - 1];
        console.log(src);
        console.log("=============== Function end ===============");
        debugger;
        return window.__cr_fun.apply(this, arguments);
    }
    // 屏蔽js中对原生函数native属性的检测
    myfun.toString = function() {
        return window.__cr_fun + ""
    }
    Object.defineProperty(window, 'Function', {
        value: myfun
    });
})();





