/** SWITCH */
const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) {// não é valor boolean
        case 10:
        case 9:// não precisa definir blocos, porém é possivel
            console.log('Quadro de Honra');
           // break; //em JS o break não é defaut, por isso quando o intuito é que após encontrado o caso sair do switch, deve ser posto o break
        
        case 8: case 7:
            console.log('Aprovado!');
            break;
        case 6: case 5: case 4:
            console.log('Recuperação!');
            break;
        default: // o default pode ser posto em qlqr lugar COM O BREAK
            console.log('Nota Inválida');
            break;
        case 3: case 2: case 1: case 0:
            console.log('Reprovado!');
            break;
    }
    console.log('fim');
}
            
imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(2.3);
imprimirResultado(-1);
 imprimirResultado(11);

