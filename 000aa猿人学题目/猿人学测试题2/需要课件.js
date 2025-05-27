
// hook cookie

(function() {
  var cookieTemp = '';
  Object.defineProperty(document, 'cookie', {
    set: function (val) {
      if (val.indexOf('m') != -1) {
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




// 无线debug  constructor
Function.prototype.__constructor_back = Function.prototype.constructor;

Function.prototype.constructor = function() {

  if(arguments && typeof arguments[0]==='string'){

    //alert("new function: "+ arguments[0]);

    if("debugger" === arguments[0]){
      //arguments[0]="console.log(\"anti debugger\");";
      //arguments[0]=";";
      return;
    }
  }

 return Function.prototype.__constructor_back.apply(this,arguments);
}

// hook 原生ob混肴中的内存爆破（正则test检测）
RegExp.prototype.test = function () {
  return true
}



