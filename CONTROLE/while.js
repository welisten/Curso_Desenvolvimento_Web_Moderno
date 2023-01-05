function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random()/*Numero aleatório ENTRE 0 e 1 */ * (max - min) + min;
    return Math.floor(valor);

}

let opcao = 0;
while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção aleatoriamente escolhida foi ${opcao}`);

}

console.log('Até a proxima!');