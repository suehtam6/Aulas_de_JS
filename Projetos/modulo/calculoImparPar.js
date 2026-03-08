/**************************************************************************
 * Objetivo: Arquivo responsavel por resolver o Impar e o Par
 * Autor: Matheus Lucas
 * Data: 04/03/2026
 * versão: 1.0
 **************************************************************************/

const numeroPar = function ImparPar(inicial, final) {
    let numeroInicial = Number(inicial)
    let numeroFinal = Number(final)
    let resultadoPar = ""
    let qtdPar = 0


    console.log("====================")
    console.log("Números de Pares")
    console.log("====================")

    while (numeroInicial <= numeroFinal) {
        
        if (numeroInicial % 2 == 0) {
            console.log(numeroInicial)
            qtdPar++
        }
        numeroInicial++
        
    }
    resultadoPar = `Qtde de números PAR encontrados: ${qtdPar}`
    return resultadoPar
    

}

const numeroImpar = function (inicial, final) {
    let numeroInicial = inicial
    let numeroFinal = final
    let resultadoImpar = ""
    let qtdImpar = 0
    console.log("====================")
    console.log("Números Impares")
    console.log("====================")

    while (numeroInicial <= numeroFinal) {

        if (numeroInicial % 2 == 1) {
            qtdImpar++
            console.log(numeroInicial)
            
        }
        numeroInicial++
        
    }
    resultadoImpar = `Qtde de números IMPAR encontrados: ${qtdImpar}`
    return resultadoImpar
}

module.exports = {
    numeroImpar,
    numeroPar
}

