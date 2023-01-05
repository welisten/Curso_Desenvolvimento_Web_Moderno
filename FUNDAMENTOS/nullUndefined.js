/** Atribuição por valor
 *  Atribuição por referência
 */

let valor // não inicializada

console.log(valor);
 /* Nesse caso a variável valor é undefined, pois o seu valor não foi definido.
    Logo foi separado um espaço na memoria para ela, porém não se sabe nem oque 
    será posto nesse espaço, ou se há já algum lixo de memória, o programador até
    então não tem noção. Por isso a saída é dada como undefined, alertando ao programador
    que talvez ele tenha esquecido de atribuir ou que ainda não foi atribuido. */


// console.log(valor2);

/** Já aqui a saída é "valor2 is not defined", Oque difere da 1° saída.
    No 1° caso a Variavel foi declarada porém seu valor não foi definido -> "Undefined"
    No 2° caso a variavel sequer foi declarada, nada nela foi definido - > "valor2 is not defined"*/


valor = null; /** Aqui definimos um valor, agora o programador e o brownser já sabem oque 
    tem alí, porém o valor atribuído representa algo peculiar:
        
            AUSÊNCIA DE VALOR / VAZIO / NÃO HÁ REFERÊNCIA / NÃO APONTA PRA LUGAR NENHUM       
    */
console.log(valor);

//  CUIDADO COM VARIÁVEIS DE REFERÊNCIA(ponteiros -> Objetos)
//console.log(valor.toString());// ERRo ! não se pode acessar as propriedades de um valor nulo

    const produto ={};
    console.log(produto.preco);
    console.log(produto);

    produto.preco = 3.50;
    console.log(produto);
    
    produto.preco = undefined; //evite atribuir undefined
    console.log(!!produto.preco);
//  delete produto.preco;
    console.log(produto);

    produto.preco = null; //preço
    console.log(!!produto.preco);
    console.log(produto);
/** */
