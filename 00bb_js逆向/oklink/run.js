




c = String.fromCharCode.bind(String)
m = t => btoa(t)
o = new TextEncoder()
g = t => {
    const e = 4096;
    let n = [];
    for (let r = 0, i = t.length; r < i; r += e)
        n.push(c.apply(null, t.subarray(r, r + e)));
    return m(n.join(""))
        }


function x(t){
    return g(o.encode(t))}



function jsondata(username,pwd, deviceNo) {
    return {
            'username': username,
            'password': x(x(pwd)),
            'version': 2,
            'deviceNo': deviceNo,
        }
}


console.log(jsondata('18566667777','12345678'))