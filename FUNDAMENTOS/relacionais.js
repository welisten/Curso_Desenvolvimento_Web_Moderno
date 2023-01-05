// IGUALDADE
console.log('01)', '1' == 1); // operador binario | valor |

console.log('02)', '1' === 1); // uma comparação com mais baixo nivel de abstração | Tipo de dado |

// DIFERENÇA
console.log('03)', '3' != 3); // Valores iguais

console.log('04)', '3' !== 3);

// VALORES (MAIOR, MENOR, MAIOR/MENOR OU IGUAL)

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);

const d1 = new Date(0); // o 0 zero representa a data referência do JS, 01/01/1970
const d2 = new Date(0);
console.log('09)', d1 === d2); // nos 2 casos se é feita uma comparação de memória, por isso o resultado FALSO
console.log('10)', d1 == d2);
console.log('11)', d1.getTime() === d2.getTime()); // tem o mesmo tipo e mesmo valor.


console.log('12)', undefined == null);
console.log('12)', undefined === null);