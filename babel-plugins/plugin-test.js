const babel = require('@babel/core');
const t = require('@babel/types');
const generate = require("@babel/generator").default;
const c = `var test=n*n`;

let ast = babel.parse(c);
babel.traverse(ast,{
        Identifier(path){
            if(t.isIdentifier(path.node,{name:"test"})){
                // console.log(path.node);
            }
        },
        BinaryExpression(path){
            //先验证是不是isBinaryExpression类型,处了is开头的验证方法,还有assert断言方法,t.assertBinaryExpression,直接抛出异常
            if(t.isBinaryExpression(path.node,{operator:"*"})){
                //然后构建新的BinaryExpression类型的ast
                let newNode = t.binaryExpression("+",path.node.left,path.node.right);
                //转换完成
                path.replaceWith(
                    newNode
                );
            }
        }
    }
);

const {code} = generate(ast);
console.log(code);


