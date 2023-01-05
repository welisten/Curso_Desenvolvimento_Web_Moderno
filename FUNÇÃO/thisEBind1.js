const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao);// Sem o uso do this, o console não reconhece a variavel saudacao
    }
}
pessoa.falar();


const falar = pessoa.falar;
falar(); // Conflito entre paradigmas: Funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)// Amarra o contexto léxico do THIS ao parametro passado
falarDePessoa();

// A função bind não fará alteração na estruturta do objeto PESSOA
const falar2 = pessoa.falar;
falar2();
