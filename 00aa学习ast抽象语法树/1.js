let parse = require("@babel/parser").parse
let generate = require("@babel/generator").default
let traverse = require("@babel/traverse").default

let a = `let a =  -0x1 * 0x21ea + -0x53b + -0x101 * -0x27`


let ast = parse(a)
traverse(ast, {
        NumericLiteral:function (path){
            console.log(path.container)
        }
})

console.log(generate(ast))