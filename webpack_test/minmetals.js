













n = A.sent,
r = n.data,
t.setPublicKey(r),
a = m(m({}, e), {}, {
    sign: B()(JSON.stringify(e)),
    timeStamp: +new Date
}),
s = t.encryptLong(JSON.stringify(a))