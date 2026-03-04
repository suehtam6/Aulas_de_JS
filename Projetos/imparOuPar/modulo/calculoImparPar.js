/**************************************************************************
 * Objetivo: Arquivo responsavel por resolver o Impar e o Par
 * Autor: Matheus Lucas
 * Data: 04/03/2026
 * versão: 1.0
 **************************************************************************/

const imparOuPar = function ImparPar(inicial, final) {
    let numeroInicial = Number(inicial)
    let numeroFinal = Number(final)
    let resultado = ""
    let qtdPar

    

    console.log("Número de Pares")
    while (numeroInicial <= numeroFinal) {
       /*
       Enquanto o 1 não for maior ou igual a 10, ele vai repetir o loop, armazenando
       os números que divididos pelo modulo de 2 vai ser igual a 0.
       Ele vai aumentar a qtdPar até chegar no número desejado(10), vai mostrar dentro do console.log()
       todos os números pares até chegar no número final.
       repetindo isto até alcançar o número final(10)

        */
       if(numeroInicial %2 == 0){
            qtdPar++
            console.log(numeroInicial)
       } 
        numeroInicial++
    }
}

const numeroImpar = function(inicial, final){
    let numeroInicial = inicial
    let numeroFinal = final
    let qtdImpar

    console.log("Números Impares")

    while (numeroInicial <= numeroFinal) {

        if(numeroInicial %2 == 1){
             qtdImpar++
             console.log(numeroInicial)
        } 
         numeroInicial++
     }
}


imparOuPar(1, 10)
numeroImpar(1,10)
//console.log(imparOuPar(101))
