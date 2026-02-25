/********************************************************************************
 * Objetivo: Arquivo responsavel SOMENTE pela coleta de dados de entrada e saída
 * Autor: Matheus Lucas
 * Data: 25/02/2026
 * versão: 1.0
 *******************************************************************************/

const readline = require("readline")
const calcularImc = require("./moduloImc/CalculoImc")
const entradaDeDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Digite o nome do usúario: ", function(nome){
    let nomeUsuario = nome

    entradaDeDados.question("Digite o peso do usúario: ", function(peso){
        let pesoUsuario = peso

        entradaDeDados.question("Digite a altura do usúario: ", function(altura){
            let alturaUsuario = altura

            let resultado = calcularImc.calcular(pesoUsuario, alturaUsuario, nomeUsuario)

            console.log(resultado)
            entradaDeDados.close()
        })
    })
})