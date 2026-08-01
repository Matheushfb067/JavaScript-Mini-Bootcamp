/*function consoleLogOi(){
    console.log("Oi");

    return "Oi de novo";
}*/

/*A principal diferença é que arrow functions (=>) não são apenas uma forma mais curta de escrever funções.*/

//Notação em Arrow Function:
const consoleLogOi = () => {
    console.log("Oi");

    return "Oi de novo";   
}

const segundaFuncao = () => console.log("Segunda Função!");

const retornoFuncao = consoleLogOi();
console.log(retornoFuncao);

segundaFuncao();