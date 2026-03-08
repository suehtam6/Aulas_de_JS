/**************************************************************************
 * Objetivo: Arquivo responsavel por receber dados de entrada e saída
 * Autor: Matheus Lucas
 * Data: 04/03/2026
 * versão: 1.0
 **************************************************************************/

const calcular = require("../modulo/calculoFatorial")
const validarDados = require("../validacao/validar")

const iniciarApp = function(entradaDeDados){

    entradaDeDados.question("Digite o número que deseja descobrir o fatorial: ", function (fatorial) {

        let numeroFatorial = fatorial

        let validar = validarDados.validarDadosFatorial(numeroFatorial)

        if (validar) {

            let resultado = calcular.calculoFatorial(numeroFatorial)

            console.log(resultado)

            entradaDeDados.close()

        } else {

            console.log("ERRO: VALIDAÇÃO FALHOU")

            entradaDeDados.close()

        }

    })

}

module.exports = {
    iniciarApp
}