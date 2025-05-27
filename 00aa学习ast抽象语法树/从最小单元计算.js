let parse = require("@babel/parser").parse
let generate = require("@babel/generator").default
let traverse = require("@babel/traverse").default
const types = require("@babel/types");



let a = `let a =  -0x1 * 0x21ea + -0x53b + -0x101 * -0x27`

let ast = parse(a)
traverse(ast, {
    "BinaryExpression": {
        "exit": function (path){
            console.log(path.toString())
            let {confident,value} = path.evaluate();
            path.replaceInline({type:"NumericLiteral", value: value})
            console.log(confident, value)
        }
    }
})

console.log(generate(ast).code)