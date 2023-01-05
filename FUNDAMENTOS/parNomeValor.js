// par NOME/VALOR e como se comportam em diferentes contextos léxicos

const saudacao = 'Opa'; // contexto lexico 1 - > contexto ou local cujo o qual a variável foi definido fisicamente no codigo

function exec() {
    const saudacao = 'Falaaa'; // contexto léxico 2
    return saudacao;
}

// objetos são grupos aninhados de pares NOME/VALOR

const cliente = {
    nome:'Pedro',
    idade: 32,
    peso:90,
    endereço:{ // aqui seria cosivel definir nomes que  sejam iguais aos de fora dessas chaves, pois o contexto Léxico é diferente
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente)