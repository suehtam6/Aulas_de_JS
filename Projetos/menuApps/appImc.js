/********************************************************************************
 * Objetivo: Arquivo responsavel SOMENTE pela coleta de dados de entrada e saída
 * Autor: Matheus Lucas
 * Data: 25/02/2026
 * versão: 1.0
 *******************************************************************************/

const calcularImc = require("../modulo/CalculoImc")
const validarImc = require("../validacao/validar")

const iniciarApp = function(entradaDeDados){

    entradaDeDados.question("Digite o nome do usúario: ", function(nome){
        let nomeUsuario = nome

        entradaDeDados.question("Digite o peso do usúario: ", function(peso){
            let pesoUsuario = peso

            entradaDeDados.question("Digite a altura do usúario: ", function(altura){
                let alturaUsuario = altura.replaceAll('.', '')

                let resultado

                let validandoDadosString = validarImc.validarDadosString(nome)
                if(validandoDadosString){

                    let validandoDadosNumeros = validarImc.validandoDadosNumeros(peso, altura)

                    if(validandoDadosNumeros){
                        resultado = calcularImc.calcular(pesoUsuario, alturaUsuario, nomeUsuario)
                    }else{
                        console.log("ERRO: VALIDAÇÃO DOS NÚMEROS INVALIDA")
                    }

                }else{
                    console.log("ERRO: VALIDAÇÃO DO NOME INVALIDO")
                }

                console.log(resultado)
                entradaDeDados.close()

            })
        })
    })

}

module.exports = {
    iniciarApp
}