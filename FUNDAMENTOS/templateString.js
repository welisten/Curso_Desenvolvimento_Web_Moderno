const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome +'!';

// a concatenação de strings pode ser custosa, estática demais
// e esteticamente desorganizada. Para ajudar nisso usamos a Template String

// repare que o sinal usado para a abertura do template é o da CRASE
// template nesse caso não é uma palavra reservada e sim o nome dado a variável que receberá a string
const template = ` 
    Ola
    ${nome}!`

    console.log(typeof template);

    console.log(concatenacao);
    console.log(template);

// è possivel também usar expressões matemáticar colocando elas entre "${  }" para que o navegador seja capaz de
// inter polar a expressão e decifra-la

    console.log(`1 + 1 = ${1 + 1}`);

//Nota-se aqui que é possivel tbm se passar uma função dentro de um template string

    const up = texto => texto.toUpperCase();
    console.log(`Ei... ${up('cuidado')}!`);