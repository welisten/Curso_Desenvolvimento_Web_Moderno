/** Aqui temos uma função pessoa que contem idade, e uma função que define um 
 * intervalo para disparar uma função. Nota-se aqui que quem dispara essa função
 * não é o programador e sim um TEMPORIZADOR por isso o contexto Lexico irá afetar
 * o uso do This.
  */

 function pessoa (){
    this.idade = 0;
    
    const self = this; //substituimos this por essa constant(é uma técnica que dibla o comportamento do this)
    setInterval(function(){
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/, 1000)//1000 milisegundos |.bind(this) - como esse this está sendo invocado dentro de pessoa nesse caso ele irá representar a unidade pessoa
 }
new pessoa;
