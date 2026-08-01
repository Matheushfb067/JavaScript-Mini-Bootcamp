const array = [5, 25, 'texto1', 'texto2', [5, 97]];

// Spread Operator: ...
/*Assim nós temos todas as informações da variavel array se mantendo, 
ou seja que faz com que o novo endereço de memoria, tenha as mesmas 
informações do endereço anterior, sendo assim a variavel array se manterá 
da forma original, sem sobrepor o valor 5 com o valor 13513, ou sejá, só 
a variavel array2 conterá o valor 13513 no indice 0 */

const array2 = [ ...array ]; 
array2[0] = 13513;

console.log(array2);
console.log(array);

const object = {
    chave1: 'valor1',
    chave2: 5,
    chave3: 'valor3',
    chave4: [5, 97],
    chave5: {
        novaChave1: 5,
    },
};

export const object2 = { ...object };

console.log(object2);