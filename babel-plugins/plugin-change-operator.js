const t = require('@babel/types');
module.exports = function(babel){
    return {
        visitor:{
            BinaryExpression(path){
                //先验证是不是isBinaryExpression类型,处了is开头的验证方法,还有assert断言方法,t.assertBinaryExpression,直接抛出异常
                    if(path.node.operator==="*"){
                        //然后构建新的BinaryExpression类型的ast
                        let newNode = t.binaryExpression("+",path.node.left,path.node.right);
                        //转换完成
                        path.replaceWith(
                            newNode
                        );
                    }

            }
        }

    }
};

