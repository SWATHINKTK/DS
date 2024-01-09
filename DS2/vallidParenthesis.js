function vallidateParenthesis(str){
    const stack = [];
    let parenthesis = {'}':'{',')':'(',']':'['};
    for(let char of str){
        if(char in parenthesis){
            let top = stack.pop();
            if(top != parenthesis[char]){
                console.log('Invalid Formation of Parenthis : ',str)
                return;
            }
        }else{
            stack.push(char)
        }
    }
    console.log('Valid formation : ',str);
}

let str = '[{(()}]'
vallidateParenthesis(str)
vallidateParenthesis('[{()}]')