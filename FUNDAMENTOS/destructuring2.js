
// Aqui a desistruturação retira o mebro 10 da array e o atribui a variavel 'a'
const [a] = [10];
console.log(a);

// Esse Exemplo Mostra que a a possibilidade de ignorarmos alguns elementos do array com o uso de ', ,'
// Lembrando sempre que os parametros passados na desistruturação respeitam a ordem do índice do array
const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

//matrizes
const [, [, nota]] = [[, 8, 8], [9, 6, 8]];
console.log(nota);
