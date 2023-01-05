function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise XOR
    const comprarTv32 = trabalho1 != trabalho2; // podemos usar a diferença para representar o ou exclusivo
    const manterSaudavel = !comprarSorvete; // operador unario

    return { comprarSorvete, comprarTv32, comprarTv50, manterSaudavel}; // redução na sitaxe, recurso do EC06
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));