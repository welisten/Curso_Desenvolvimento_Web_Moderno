// RUNTIME -> NODE 
// FUJA DO ESCOPO GLOBAL (EXCESSÃO -> CONSTANTES )

let a = 3;

global.b = 123;

this.c = 456;
this.d = false;
this.e = 'teste';

console.log('01)', a);
console.log('02)', this.b);
console.log('03)', global.b);
console.log('04)', this.c);
console.log('05)', module.exports.c);
console.log('06)', global.c);
console.log('07)', module.exports === this);
console.log('08)', module.exports === global);
console.log('08)', this === global);

console.log(module.exports);
//module.exports = {f: 789, g: true, g: 'teste'}


//criando uma variavel maluca: sem var e let !
abc = 3;// NÃO FAÇA ISSO!!
console.log(global.abc);

//console.log('06)', global.c);


