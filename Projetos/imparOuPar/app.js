/**************************************************************************
 * Objetivo: Arquivo responsavel por coletar os dados do impar ou par
 * Autor: Matheus Lucas
 * Data: 04/03/2026
 * versão: 1.0
 **************************************************************************/

// Import da biblioteca readline
const readline = require("readline")

// Criação do objeto para captar as entradas de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const resultadoImparPar = require("./modulo/calculoImparPar")
const validarDados = require("../validacao/validar")

entradaDeDados.question("Digite o número inicial: ", function (inicial) {
    let numeroInicial = inicial

    entradaDeDados.question("Digite o número final: ", function (final) {
        let numeroFinal = final

        let validarImparOuPar = validarDados.validarImparPar(numeroInicial, numeroFinal)
        

        if (validarImparOuPar) {

            let resultadoPar = resultadoImparPar.numeroPar(numeroInicial, numeroFinal)
            let resultadoImpar = resultadoImparPar.numeroImpar(numeroInicial, numeroFinal)

            if (resultadoPar && resultadoImpar) {
                console.log(resultadoPar && resultadoImpar)
                entradaDeDados.close()
            }else{
                console.log("ERRO: IMPAR OU PAR FALHOU")
                entradaDeDados.close()
            }

        } else {
            console.log("ERRO: VALIDAÇÃO FALHOU")
            entradaDeDados.close()
        }


    })
})