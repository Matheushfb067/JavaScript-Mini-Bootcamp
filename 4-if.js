// == comparação não estrita
// === comparação estrita = estou comparando valores e tipos


if (5 === "5") {
    console.log("Sim! É igual.");
}else if (5 =="5"){
    console.log("Sim! É igual, sem comparar os tipos.");
} else {
    console.log("Não! É diferente.");
}  

// Operador Ternario - Outra forma de escrever o o if: 

5 === '5' ? console.log("Sim! É igual.") : console.log("Não! É diferente.");
5 == '5' ? console.log("Sim! É igual.") : console.log("Não! É diferente.");