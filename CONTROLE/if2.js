// uso de blocos
// só a 1° sentença estará associada ao bloco if.
// para bloco usa-se chaves.

function teste1(num) {
    if(num > 7) 
        console.log(num);

    console.log('Final');
    
}

// teste1(6);
// teste1(8);


function teste2(num){
    if(num > 7); { // cuidado com o ponto e vírgula
        console.log(num);
    }
}

teste2(6);
teste2(8);