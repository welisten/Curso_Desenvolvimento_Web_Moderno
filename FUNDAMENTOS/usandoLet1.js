var numero = 1;
// LET tem escopo de bloco
{
    let numero = 2;
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);

// O mesmo ocorre, quando usamos let na primeira declaração
let numero = 1;
{
    let numero = 2;
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);