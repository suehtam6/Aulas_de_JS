/****************************************************************************************************************************************************
 * Objetivo: Arquivo responsavel por gerar uma tabuada utilizando WHILE e FOR
 * Autor: Matheus Lucas
 * Data: 25/02/2026
 * versão: 1.0
 ****************************************************************************************************************************************************/

// Import da biblioteca da operações matematicas
const calculosMatematicos = require("./calculo")

//Função para imprimir a tabuada    
const gerarTabuadaWhile = function (tabuada) {
    let numeroTabuada = Number(tabuada)
    let cont = 0
    let result

    while (cont <= 10) {
        result = calculosMatematicos.multiplicar(numeroTabuada, cont)
        console.log(`\nWHILE\n ${numeroTabuada} X ${cont} = ${result}\n`)


    // Formas de fazer o loop
     // cont = cont + 1
     // cont +=1
        cont++
    }

}


//Função para imprimir a tabuada    
const gerarTabuadaFor = function (tabuada) {
    let numeroTabuada = Number(tabuada)
    let cont = 0
    let result

    for(let cont = 0; cont<=10; cont++){

    
        result = calculosMatematicos.multiplicar(numeroTabuada, cont)
        console.log(`\nFOR\n ${numeroTabuada} X ${cont} = ${result}\n`)


        // Formas de fazer o loop
        // cont = cont + 1
        // cont +=1
        cont++
    }


}
gerarTabuadaFor(40)
gerarTabuadaWhile(30)
