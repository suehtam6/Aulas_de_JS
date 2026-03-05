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



    console.log("Número de Pares")
    
    while (numeroInicial <= numeroFinal) {
        /*
        Enquanto o 1 não for maior ou igual a 10, ele vai repetir o loop, armazenando
        os números que divididos pelo modulo de 2 vai ser igual a 0.
        Ele vai aumentar a qtdPar até chegar no número desejado(10), vai mostrar dentro do console.log()
        todos os números pares até chegar no número final.
        repetindo isto até alcançar o número final(10)
 
         */
        if (numeroInicial % 2 == 0) {
            qtdPar++
            console.log(numeroInicial)
        }
        numeroInicial++
        
    }
    resultadoPar = `\nQtde de números PAR encontrados: ${qtdPar}`
        return resultadoPar
    
    

}

const numeroImpar = function (inicial, final) {
    let numeroInicial = inicial
    let numeroFinal = final
    let resultadoImpar = ""
    let qtdImpar = 0

    console.log("Números Impares")
    

    while (numeroInicial <= numeroFinal) {

        if (numeroInicial % 2 == 1) {
            qtdImpar++
            console.log(numeroInicial)
            
        }
        numeroInicial++
        resultadoImpar = `Qtde de números IMPAR encontrados: ${qtdImpar}`
    }
    
    return resultadoImpar
}

module.exports = {
    numeroImpar,
    numeroPar
}


//console.log(imparOuPar(101))
