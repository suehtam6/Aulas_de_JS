/*************************************************************************************
 * Objetivo: Projeto para fazer uma calculadora de operações
 * Autor: Matheus Lucas
 * Data: 13/02/2026
 * Versão: 1.0
 *************************************************************************************
 */

 // Import da biblioteca readline
const readline = require("readline")

// Criação do objeto para captar as entradas de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const calculo = require("./modulo/calculos")
const validacao = require("./modulo/validacao")

entradaDeDados.question("Qual operação você gostaria de utilizar?(SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO e DIVISÃO): ", function(operacao){
    let valorOperacao = operacao

    entradaDeDados.question(`Qual o primeiro número da ${valorOperacao}: `, function(valor1){
        let primeiroNumero = valor1
        
        entradaDeDados.question(`Qual o segundo número da ${valorOperacao}: `, function(valor2){
            let segundoNumero = valor2

            let resultadoValidado = validacao.validarDados(operacao, primeiroNumero, segundoNumero)

            if(resultadoValidado){
                let resultado = calculo.calcularOperacao(operacao, primeiroNumero, segundoNumero)
            if(resultado){
                console.log(`O resultado foi ${resultado}`)
            }else{
                console.log("ERRO: O NÚMERO 0 NÃO PODE SER O PRIMEIRO NÚMERO")
            }
            entradaDeDados.close()
            }else{
                console.log("ERRO: DIGITOU ALGUMA INFORMAÇÃO ERRADA")
            }
   
        })
    })
})

