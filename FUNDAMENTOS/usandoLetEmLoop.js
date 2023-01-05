// O fato de LET ter escopo de bloco implica também em alguma complicações no seu uso.

// Nesse caso o erro se dá porque o brownser não reconhece a variavel i pois estão em escopos separados 

for(let i = 0; i > 10; i++){
    console.log(i);
}
console.log('i = ', i);