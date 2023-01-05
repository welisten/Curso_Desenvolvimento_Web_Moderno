function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao // armazenará os valores que irão sair da função, para depois imprimir na tela
    
do{
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`A opção aleatoriamnte escolhida foi ${opcao}`);
} while(opcao != -1);

console.log('Até mais!');