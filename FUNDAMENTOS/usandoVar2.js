//Aqui temos um exemplo de que o Var não respeita os escolpo de blocos, apenas os das funçoes.
//Por isso o brownser entende que o valor certo para a variável global numero, é o ultimo atribuído.

var numero = 1;
{
    var numero = 2;
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);

