function soBoaNoticia(nota) {
    if(nota >= 7) {// cria uma condição para o bloco (que suscede o parâmetro)
        console.log('Aprovado com ' + nota );
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor) {
    if(valor)/* ->Boolean */{// O bloco é executado se o parâmetro for verdadeio(a condição for satisfeita)
        console.log('É verdade ... ' + valor);
    }
}

seForVerdadeEuFalo() // undefined é false
seForVerdadeEuFalo(null); // nulo é false
seForVerdadeEuFalo(undefined);// undefined é false
seForVerdadeEuFalo(NaN);// Not a Number é false
seForVerdadeEuFalo('');// Avoid String é false
seForVerdadeEuFalo(0);// Zero é o único número false
seForVerdadeEuFalo(-1);// Negativos são true
seForVerdadeEuFalo(' ');// strings com qualquer elemento dentro é true
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);//avoid array é true
seForVerdadeEuFalo([1, 2])// array é true
seForVerdadeEuFalo({});// objetos são true