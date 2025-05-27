// https://www.python-spider.com/challenge/new/js

let parse = require("@babel/parser").parse
let generate = require("@babel/generator").default
let traverse = require("@babel/traverse").default
const types = require("@babel/types");

let fs = require("fs")
let js_code = fs.readFileSync("3.js", "utf-8")


let init_ast = parse(js_code)
let ast = parse(js_code)
// 1. 老规矩，大数组 解密函数 数组移位写入内存. 随便写，我也就随便写一个，仅供参考
traverse(init_ast, {
    Program: function (path) {
        path.stop()
        path.get("body")[3].remove()
    }
})

eval(generate(init_ast, {minified: true}).code)
// 2. 利用解密函数将字符串还原为明文
traverse(ast, {
    CallExpression: function (path) {
        if (path.node.callee.name === "$b") {
            path.replaceInline(types.valueToNode(eval(path.toString())))
        }
    }
})

// 3. 字符串相加合并
traverse(ast, {
    BinaryExpression: {
        exit: function (path) {
            let left = path.get("left").node.value
            let right = path.get("right").node.value
            if (path.get("left").isStringLiteral() && path.get("right").isStringLiteral()) {
                path.replaceInline(types.valueToNode(left + right))
            }
        }
    }
})

// 4. 花指令还原  第一阶段是。 函数的还原。   字符串的还原
traverse(ast, {
    CallExpression: {
        exit: function (path){
            if (path.get("callee.object").node && ["A", "a7", "a3"].includes(path.get("callee.object").node.name)) {
                // 得到 对象的值以及参数
                let property = path.get("callee.property").node.value
                let argument_path_array = path.get("arguments")
                // console.log(property, argument_path_array.length)
                // console.log(property)
                // 还原指令
                path.scope.getBinding(path.get("callee.object").node.name).scope.path.traverse({
                    AssignmentExpression: function (path_Expression) {
                        if (path_Expression.get("left").isMemberExpression()) {
                            if (path_Expression.get("left.property").node && path_Expression.get("left.property").node.value === property) {
                                // 还原函数
                                let return_path = path_Expression.get("right.body.body.0.argument");
                                if (path_Expression.get("right.body.body.0.argument").isBinaryExpression()) {
                                    let operator = return_path.node.operator
                                    let left = argument_path_array[0].node
                                    let right = argument_path_array[1].node
                                    path.replaceInline(types.binaryExpression(operator, left, right))
                                } else if (return_path.isCallExpression()) {
                                    let function_path = argument_path_array[0].node
                                    let function_arguments = path.node.arguments.slice(1)
                                    // console.log(function_arguments.length)
                                    path.replaceInline(types.callExpression(function_path, function_arguments))
                                }
                            }
                        }
                    }
                })

            }
        }
    }
})


traverse(ast, {
    MemberExpression: function (path) {
        if ((["A", "a7", "a3"].includes(path.get("object.name").node) && path.get("property").isStringLiteral())) {
            let _string = path.get("property").node.value
            path.scope.getBinding(path.get("object.name").node).scope.path.traverse({
                AssignmentExpression: function (path_Expression) {
                    if (path_Expression.get("right").isStringLiteral() && path_Expression.get("left.property").node.value === _string) {
                        path.replaceInline(types.valueToNode(path_Expression.get("right").node.value))
                    }
                }
            })
        }
    }
})


// 控制流平坦化还原
var a0 = "4|5|6|2|3|0|1"["split"]('\x7c');
var control = []
traverse(ast, {
    SwitchCase: function (path){
        // control.push(path.get("consequent.0").toString())
        // console.log(path.node.consequent.slice)
        control[path.get("test.value").node] = path.node.consequent.slice(0, path.get("consequent").length-1)
    }
})

// 还原控制流平坦化 part 2 替换while
traverse(ast, {
    WhileStatement: function (path){
        if(!path.get("body.body.0").isSwitchStatement()){
            return
        }
        let new_jscode = []
        for(let i of a0){
            for (let j of control[i]){
                new_jscode.push(j)
            }
        }
        // console.log(new_jscode)
        path.replaceInline(new_jscode)
    }
})


// traverse(ast, {
//     "StringLiteral": function (path){
//         if(path.node.extra){
//             // delete path.node.extra.raw
//             path.node.extra.raw = "'" + path.node.value + "'"
//             // path.node.extra = void 0
//         }
//     }
// })


let decode_code = generate(ast, {minified: false}).code
fs.writeFileSync("3_1.js", decode_code)



// 课后作业：
// 1. 将 this 也彻底还原
// 2. 尝试清除无用代码。 提示：scope，Binding （referencePaths）


// 总结
// 1. 对编码能力要求比较高（这正是鄙人弱项）
// 2. 我写的不是最优解，只能实现目的
// 3. 下节课讲一些难处理的小细节