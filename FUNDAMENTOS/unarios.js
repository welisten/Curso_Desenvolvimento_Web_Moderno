let num1 = 1;
let num2 = 2;

num1++; // acrecenta uma unidade no valor da variavel
console.log(num1);

--num1; //diminui uma unidade no valor da variavel
console.log(num1);

// os prefix tem precedencia nos posfix (visto o ambiente de decremento e incremento)

console.log(++num1 === num2--);// codigo sujo/confuso // o decremento só ocorre depois da comparação
console.log(num1 === num2);