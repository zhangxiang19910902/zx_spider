const CryptoJS = require('crypto-js');

function calculateMD5(e, _p) {
    return CryptoJS.MD5(e + _p).toString().toUpperCase();
}

// 示例调用
const e = 'example';
const _p = 'password';
const result = calculateMD5(e, _p);
console.log(result);