/**O ARRAY É
 * 
 *  - Dinâmico
 *  - Estrutura indexada
 *  - Estrutura Heterogêa (embora não seja uma boa prática)
 * 
 */

const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

// como o índice 4 ainda não existe, podemos atribuir valor a ele dessa forma

valores[4] = 10;
console.log(valores);

// também é possivel atribuir valor para indices que estejam isolados

valores[6] = 100;
console.log(valores);

// retorna a quantidade de elementos no array
console.log(valores.length);
// Repare que ele adiciona os espaços vazios entre elementos a contagem. 


//adiciona novos elementos

valores.push({id: 3}, false, null, 'teste');
console.log(valores);


// pop RETIRA e retorna o ultimo valor do array

console.log(valores.pop());

// Outra forma de retirarmos um elemento de uma array é usando delete
delete valores[0];
console.log(valores);

console.log(typeof valores);

