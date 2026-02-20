/**************************************************************************
 * Objetivo: Fazer uma folha de pagamento
 * Autor: Matheus Lucas
 * Data: 11/02/2026
 * versão: 1.0
 **************************************************************************/

const console = require("console")
const readline = require("readline")
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Digite o nome do funcionario: ", function (funcionario) {
    let nomeFuncionario = funcionario

    entradaDeDados.question("Digite o cpf do funcionario: ", function (cpf) {
        let numeroCpf = cpf

        entradaDeDados.question("Qual o cargo do funcionario(junior, pleno, senior): ", function (cargo) {
            let cargoFuncionario = cargo

            entradaDeDados.question("Quantos dias que o funcionario faltou: ", function (faltas) {
                let faltasFuncionarios = faltas

                entradaDeDados.question("Horas extras realizadas: ", function (hora) {
                    let horaExtra = hora


                    let calculo = require("./modulo/calculo")
                    let validacao = require("./modulo/validar")
                    let validado = validacao.validarDados(nomeFuncionario, numeroCpf, cargoFuncionario, faltasFuncionarios, horaExtra)

                    if (validado) {
                        let resultado = calculo.calcularExtra(nomeFuncionario, cargoFuncionario, numeroCpf, faltasFuncionarios, horaExtra)
                        if (resultado) {
                            console.log(resultado)
                            entradaDeDados.close()
                        } else {
                            console.log("ERRO: ALGUMA INFORMAÇÃO ESTÁ INCORRETA")
                        }
                    }else{
                        console.log("ERRO: CAMPO FALTANDO")
                    }




                }) // fecha hora extra
            }) // fecha faltas
        })// fecha cargo
    }) // fecha cpf
}) // fecha funcionario