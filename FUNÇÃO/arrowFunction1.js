// funçoes ARROW

let dobro = function(a) {
    return a * 2;
}

 dobro = (a) =>{
    return 2 * a;
 }

 dobro = a =>  2* a; // retorno implícito (Função de uma linha)
 console.log(dobro(Math.PI));

 let ola = function() {
    return ' Ola!';
 }

 ola = () => 'Ola!';
 ola = _ => 'Ola!'; // possui sim um parâmetro que pode ser ignorado
console.log(ola())