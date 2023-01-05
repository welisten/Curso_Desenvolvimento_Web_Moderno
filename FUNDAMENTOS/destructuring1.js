// novo recurso do ES2015
// 

const pessoa = {
     nome: 'Ana',
     idade: 5,
     endereco:{
        logradouro: 'Rua Vereador Moacir Pimentel',
        numero: 179
     }
}

// Nota-se aqui que as chaves( ou colchetes no caso de arrys) vem logo após a palavra reservada const, e não após
// {} -> Nesse contexto as chaves(ou colchetes) é i sinal que equivale a desistruturação 
const { nome, idade} = pessoa; // tire do objeto os membros, nome e idade. Qual objeto ? -> Pessoa
console.log(nome, idade);

const{ nome: n, idade: i} = pessoa; // aqui além de tirar ele adciona um novo indicador para as variaveis
console.log(n, i);

const { endereco:{logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada);