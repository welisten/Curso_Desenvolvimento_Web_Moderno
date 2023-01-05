let comparaComThis = function(param) {
    console.log(this === param);
}

//Pelo incrivel que pareca a resposta é positiva.
//Estamos no Escopo Global
comparaComThis(global);

const obj = {}
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

// Será que esse mesmo comportamento ocorre na ARROW FUNCTION ?

let comparaComThisArrow = param => console.log(this === param);// Quem é o dono do this ?

//Como usamos a função arrow, ela é mais sensivel ao contexto léxico. Por isso partimos do ponto
// que o módulo do node(runtime) aqui referenciado (this) já não é mais o global/windows. 
comparaComThisArrow(global);
comparaComThisArrow(module.exports); // module.exports = > This in arrow function

// E o comportamendo da função bind no contexto da arrow function ?
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
// NÃOOOO. O princípio da arrow function é mais forte do que a função bind
comparaComThisArrow(module.exports);