/**
 * - Um objeto em JS é uma coleção de pares chave(identificador) e valor, podendo conter diversos tipos
 *        de dados distintos e internamente outros objetos (chave e valor)
 * - Em JS os objetos são cerdados por chaves {}, Uma de abertura e outra de fechamento
 * - Também podemos criar um objeto vazio, e definir como esse objeto é, quais são os atributos
 *     e como ele se comporta de maneira dinâmica
 */


// atribuição literal
const prod1 = {};

prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; // Evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj:{ /**  Nota-se aqui que embora os identificadores devam ser unicos dentro de seu universo
               que é possível ter 2 nomes iguais sim(embora não seja uma boa pratica) desde que
               elas não disputem espaço entre si. Nesse caso, como está um inserido dentro do outro
               fica claro que um é pai e outro é filho */
        blabla:1,
        obj:{
            blabla: 2
        }
    }
}