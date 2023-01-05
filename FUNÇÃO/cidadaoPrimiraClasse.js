// função em JS é First-Class Objects (citizens)
// Higher order Function

//Criar de forma literal
function fun1() { }

//Armazenar em uma variável LET -CONST-VAR
const fun2 = function() { }//função anônima

// Armazenar dentro de uma array
const array = [function(a, b) { return a + b}, fun1, fun2];
console.log(array[0](2, 3));

//armazenar em um atributo de objeto
const obj= {}
    obj.falar = function() { return 'Opa!'};
    console.log(obj.falar());

// Passae função como parametro para outra
function run(fun) {
    fun();// parenteses são importantes para invocar a função
}

run(function() {console.log('Executando... ') });

//Uma função pode retornar/conter uma função 
 function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
 }

 soma(2, 3)(4)

 const cincoMais = soma(2, 3);
 cincoMais(4);