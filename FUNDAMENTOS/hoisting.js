/* Aqui percebemos como Js é flexivel. HOISTING vem do ingles -> Içamento. Ocorre que quando 
 * ele identifica um VAR(global) ele já a identifica, embora não atribua o valor
 * 
 * nesse caso o erro não ocorre, apenas o valor é undefined
 * seria que como assim:
 *  
 *  var a
 *  console.log('a = ', a);
 *  a = 2;
 *  console.log('a = ', a);
 * 
 */

console.log('a = ', a);
var a = 2;
console.log('a = ', a);

// o hoisting também ocorre dentro da função

function teste(){
    console.log('a = ', a);
    var a = 2;
    console.log('a = ', a);    
}

teste()

// O HOISTING Não ocorre com o LET