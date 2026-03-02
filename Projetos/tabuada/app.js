/**************************************************************************
 * Objetivo: Arquivo responsavel colocar dados para tabuada
 * Autor: Matheus Lucas
 * Data: 02/03/2026
 * versão: 1.0
 **************************************************************************/

// Import da biblioteca readline
const readline = require("readline")

// Criação do objeto para captar as entradas de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const calcularTabuada = require("./modulo/calcularTabuada")
const validarTabuada = require("../validacao/validar")
const console = require("console")

entradaDeDados.question("Digite o número do multiplicando: ", function (multiplicando) {
    let numeroMultiplicando = multiplicando

    entradaDeDados.question("Digite o número do multiplicador: ", function (multiplicador) {
        let numeroMultiplicador = multiplicador

        // validação dos números
        let validar = validarTabuada.validarTabuada(numeroMultiplicando, numeroMultiplicador)
        if (validar) {
            let resultado = calcularTabuada.gerarTabuada(numeroMultiplicando, numeroMultiplicador)
            console.log(resultado)
            entradaDeDados.close()

        } else {
            console.log("ERRO: VALIDAÇÃO DE NÚMEROS INVALIDA")
            entradaDeDados.close()
        }

    })
})