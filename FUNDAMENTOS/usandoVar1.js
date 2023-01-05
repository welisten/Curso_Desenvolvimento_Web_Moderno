// VAR tem 2 escopos possiveis em JS
// Var tem um escopo global, oque torna seu uso em sistemas um risco (propenso a erros), e uma 
//          vantagem visto  que determinadas variaveis podem ser evocadas de qualquer parte do código.
// Var tem um escopo de função.

{
    {
        {
            {
                var sera = 'Será ???'
            }
        }
    }
}
console.log(sera);

function teste(){
    var local = 123;
    console.log(local)
}

teste();
console.log(local)