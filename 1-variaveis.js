// console.log("Hello World!");

// Tipos Primitivos em JS:
// variaveis do tipo primitvo, quando declaradas, guardam efetivamente o valor que a elas é atribuido. 

const numero = 5;
const numeroDecimal = 5.5;
const text = "Hello World!";

console.log(text);

// Tipos de Referencia em JS:
/* já as variaveis do tipo referenciais, guardam os endereçõs de memoria de
onde os valores que a ela são atribuidos, está dentro do computador permitindo 
acessa-los, pelos indices ou pela notação de ponto*/

const array = [5, 25, 'texto1', 'texto2'];

const array2 = array; 
array2[0] = 13513;

/* Ambos são modificados com o novo valor 13513 na posição 0, uma vez que 
não estamos copiando o valor, mas sim o ENDEREÇO: */
/*
console.log(array2); 
console.log(array)
*/

const object = {
    chave1: 'valor1',
    chave2: 5,
    chave3: 'valor3',
    chave4: [5, 97],
    chave5: {
        novaChave1: 5,
    },
};

/*
console.log(array); //printando o array inteiro
console.log(array[0]); //printando a posição 0 do array
console.log(object); //printando o objeto inteiro
console.log(object.chave1) // printando uma informação dentro do objeto
console.log(object.chave4[1])
*/
