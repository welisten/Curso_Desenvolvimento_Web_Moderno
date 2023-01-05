const escola = "Cod3r";


//retorna o valor para o índice indicado em uma variável string
    console.log(escola.charAt(4));

    console.log(escola.charAt(5));

/* Retorna o numéro relacionado a Tabela ASCII(HTML) referente ao indice
 * passado no parâmetro em uma string */
    console.log(escola.charCodeAt(3));

// REtorna o índice de um parâmetro passado, em uma string
    console.log(escola.indexOf('3'));

// Retorna a leitura de uma string apartir dos parâmetros recebidos
    console.log(escola.substring(1));

//pode tbm receber 2 parâmetros onde um define a origem  e o outro o limite
    console.log(escola.substring(0, 3));

//Concatena, ou seja, Junta 2 valores, podendo eles ser literal ou string
    console.log('Escola '.concat(escola).concat('!'));
    // Também funciona
    console.log('Escola ' + escola + '!');

// Substitui valores dentro de uma string. Recebe como parâmetro
// o index do caracter que será substituido e o caracter que irá substitui-lo
    console.log(escola.replace(3, 'e'));
// d - digitos (numeros)
// regex
    console.log(escola.replace(/\d/, 'e'));

// tranforma a string em um array, recebendo como parâmetro oque na string será o separador

    console.log('Ana,Maria,Pedro'.split(','));