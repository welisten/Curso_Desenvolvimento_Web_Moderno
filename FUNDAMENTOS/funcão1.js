
/*
 * Uma função é um verbo, uma ação, ela executa uma ação abaseada nas sentenças de codigos
 * contidos em seu corpo (bloco), o algoritmo.
 */

// sintaxe 
// function nomeDaFuncao(parâmetros)

// função sem retorno

function imprimirSoma(a,b) {
    console.log(a + b);
}

imprimirSoma(2, 3);

//nesse caso o segundo valor é atribuido como undefined. Somando um numero com um dado undefined
// temos um Not a Number
// OBS: Há uma Tratativa
imprimirSoma(2);

// os numeros que sobram ao parâmetro da função são ignorados
imprimirSoma(2, 10, 5, 6, 7, 8);

// a soma de 2 undefined resulta em um not a number
imprimirSoma();


// FUNÇÃO COM RETORNO
    function soma(a, b = 0){
        return a + b;
    }

// o segundo parâmetro só é considerado como 0 se não for passado nenhum valor para ele
    console.log(soma(2, 3));

//Podemos ver isso acontecer aqui. já que o parâmetro b não é undefined a soma resulta em um valor válido
    console.log(soma(2));

// Aqui como o primeiro parâmetro não foi tratado a saida é um not a number
    console.log(soma());

 

    