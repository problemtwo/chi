'use strict'

var OPERATORS = [
	'+','-','*','/','%','=','(',')','!','{','}',';'
];

function tokenize(text) {
	var tokens = [];
	for(var i=0;i<text.length;i++){
		if('0123456789.'.includes((text.charAt(i)))){
			var lexeme = '';
			while('0123456789.'.includes((text.charAt(i))) && i < text.length){
				lexeme += text.charAt(i++);
			}
			i--;
			tokens.push({'tp':'nm','lx':lexeme});
		}
		else if('\'\"'.includes((text.charAt(i)))){
			var lexeme = '',end = text.charAt(i++);
			while(text.charAt(i) != end && i < text.length){
				lexeme += text.charAt(i++);
			}
			tokens.push({'tp':'st','lx':lexeme});
		}
		else if(text.charAt(i).toLowerCase() !== text.charAt(i).toUpperCase()){
			var lexeme = '';
			while(text.charAt(i).toLowerCase() !== text.charAt(i).toUpperCase() && i < text.length){
				lexeme += text.charAt(i++);
			}
			i--;
			tokens.push({'tp':'id','lx':lexeme});
		}
		else if(OPERATORS.includes(text.charAt(i))){
			tokens.push({'tp':'op','lx':text.charAt(i)});
		}
	}
	return tokens;
}

function interpret(tokens){
	interpretValue(tokens);
	while(interpretOp(tokens)){

	}
}

console.log(
	tokenize('df f() {};')
);
