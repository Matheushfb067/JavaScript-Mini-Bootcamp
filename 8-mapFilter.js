const array = [ 5, 25, 'texto1', 'texto2' ];

// As estruturas map e filter vão Iterar o meu array
/* Map vai percorrer cada um dos itens e retornará um novo array do mesmo 
tamanho fazendo algum tipo de modificação para cada item*/

const array2 = array.map((elementoAtual) => elementoAtual + "Matheus" );

console.log(array2);

// Filter - Filtra um array com base em uma condição e retorna um array apenas com os elementos que respeitarem a condição do filtro 

const array3 = array.filter((elementoAtual) => typeof elementoAtual === 'number');
const array4 = array.filter((elementoAtual) => typeof elementoAtual !== 'number');


console.log(array3);
console.log(array4);