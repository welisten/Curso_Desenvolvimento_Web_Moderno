let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);
/*console.log(!isAtivo);
console.log(!true);
console.log(!!true);
console.log(!false);
console.log(!!false);*/

console.log('OS VERDADEIROS...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);


console.log('OS FALSOS...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra finalizar...');
console.log((''|| null || 0 || 'epa'));
console.log(!!(''|| null || 0 || 'epa'));

let nome = '';
console.log( nome || 'Desconhecido');