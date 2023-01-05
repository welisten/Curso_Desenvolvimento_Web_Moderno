// Armazenando uma função em uma variavel
// sem retorno
const imprimirSoma = function(a, b){//função anonima -> função sem nome | O id nesse caso é o nome da variavel
    console.log(a + b);
}

imprimirSoma(2, 3);
//note que o compilador reconhece que é uma função
console.log(typeof imprimirSoma)

//com retorno
const test = function(a, b){
    return a + b;
}

console.log(test(2, 3));

// Armazenarndo uma função  arrow em uma variavel
const soma = (a, b) =>{// "=>" representa uma arrow function
    return + b;
}

console.log(2 + 3);

//retorno implícito
const subtracao = (a, b) => a - b;

console.log(subtracao(2, 3))

