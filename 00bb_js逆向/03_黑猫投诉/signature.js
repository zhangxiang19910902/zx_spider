const CryptoJS = require('crypto-js');



h = 'aFvA8LpwDbYNp9UD'
u = "$d6eb7ff91ee257475%"

l = 10
e = 1



function sha256_sign(date, page) {
    d = date
    p = page
    t = [d, h, u, e, l, p].sort().join("")

    const message = t.toString();

    // 使用 SHA - 256 算法进行哈希计算
    const hash = CryptoJS.SHA256(message);

    // 将哈希结果转换为十六进制字符串
    const hashHex = hash.toString(CryptoJS.enc.Hex);

    return hashHex
}




console.log(sha256_sign())