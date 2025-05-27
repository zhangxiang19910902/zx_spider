// https://astexplorer.net/

let parse = require("@babel/parser").parse
let generate = require("@babel/generator").default
let traverse = require("@babel/traverse").default


let ast = parse(`var a = 0x8 * -0x42d + -0x89 * 0x5 + 0x27fd * 0x1;`)




let out_code = generate(ast).code
console.log(out_code)