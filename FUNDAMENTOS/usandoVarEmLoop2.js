//aqui temos um array que recebe atravez de um estrutura de loop, em cada um de seus indices
// uma função console.log para a VAR 'i' criada dentro do escopo do loop
const funcs = []

for( var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)

    })
}

funcs[2]();
funcs[8]();
