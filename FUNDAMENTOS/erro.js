//Mecanismos de tratamento de erros
function tratarErroELancar(erro){// contido dentro de CATCH
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {// oque será lançado como saida mediante o erro
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{ // Bloco que potencialmente pode gerar algum tipo de erro
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {//(qlq coisa) Bloco que guarda,  caso o erro ocorra, a tratativa do erro ou oque será feito podendo ser várias distintas soluçoes
        tratarErroELancar(e)
    } finally {// sempre será executado, com erro ou não;
        console.log('final');
    }
} 

const obj = { name:'Roberto'};

imprimirNomeGritado(obj); 