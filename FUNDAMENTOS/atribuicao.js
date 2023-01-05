const a = 7 // nesse contexto o sinal de igual  está atribuindo valor à variavel a
// sendo a forma mais tradicional de tribuir valor a uma variável

let b = 3 

b += a; //atribuição aditiva | equivalente a -> b = b + a
console.log(b);

b -= 4; // atribuição subtrativa | equivalente a -> b = b - a
console.log(b);

b *= 2; //atribuição multipicativa
console.log(b);

b /= 2; // atribuição divisiva
console.log(b);

b %= 2; // atribuição modular | equivalente a -> b = b % 2 
console.log(b);