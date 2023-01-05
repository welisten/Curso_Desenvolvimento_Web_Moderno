/** A notação ponto nos auxilia quando queremos evocar os mebros de um objeto ou de uma função
 *  Veja os exemplos:
 */

console.log(Math.ceil(6.1));

const obj1 = {}

obj1.nome = 'Bola';
//obj1['nome'] = 'Bola2';//semantica equivalente
console.log(obj1.nome);

function Obj(nome){
    this.nome = nome // this - tornará publico, posibilitando a exportação quando tais forem instanciadas... '.'
    this.exec = function(){
        console.log("Exec....")
    }
}

const obj2 = new Obj("Cadeira");
const obj3 = new Obj('Mesa');

console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();