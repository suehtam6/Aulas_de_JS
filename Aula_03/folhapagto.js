/**************************************************************************
 * Objetivo: Fazer uma folha de pagamento
 * Autor: Matheus Lucas
 * Data: 11/02/2026
 * versão: 1.0
 **************************************************************************/

const readline = require("readline")
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Digite o nome do funcionario: ", function(funcionario){
    let nomeFuncionario = funcionario

    entradaDeDados.question("Digite o cpf do funcionario: ", function(cpf){
        let numeroCpf = cpf

        entradaDeDados.question("Quantos dias que o funcionario faltou: ", function(faltas){
            let faltasFuncionarios = faltas

            entradaDeDados.question("Qual o cargo do funcionario(junior, pleno, senior): ", function(cargo){
                let cargoFuncionario = cargo
    
                if(cargoFuncionario == "junior"){
                    let salarioBase = 3000
                    let descontoFaltas = 100 * Number(faltasFuncionarios)
                    let valor = Number(salarioBase) - Number(descontoFaltas)

                }else if(cargoFuncionario == "pleno"){
                    let salarioBase = 6000
                    let descontoFaltas = 200 * Number(faltasFuncionarios)
                    let valor = Number(salarioBase) - Number(descontoFaltas)

                }else{
                    let salarioBase = 10000
                    let descontoFaltas = 250 * Number(faltasFuncionarios)
                    let valor = Number(salarioBase) - Number(descontoFaltas)
                    
                }

            }) // fecha cargo
        })// fecha faltas
    }) // fecha cpf
}) // fecha funcionario