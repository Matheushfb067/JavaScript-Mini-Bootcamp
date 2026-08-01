const object = {
    chave1: 'valor1',
    chave2: 5,
    chave3: 'valor3',
    chave4: [5, 97],
    chave5: {
        novaChave1: 5,
    },
};

/*Quando eu tenho um objeto ou um array, eu consigo quebra-lo em pequenas partes, 
o que ajuda a otimizar o código, isso é desestruturação. Como no exemplo abaixo:*/

const valorChave3 = object.chave3; 
const { chave1, chave2, chave3 } = object; // Estou pegando a chave com o nome "chave3" dentro do objeto chamado "object"

/*
console.log(valorChave3);
console.log(chave3);
*/

const array = [ 5, 25, 'texto1', 'texto2', [5,97] ];

const [ valor1, valor2, valor3, valor4, valor5 ] = array;
console.log(valor5);