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

entradaDeDados.question("Digite o nome do funcionario: ", function(funcionario){
    let nomeFuncionario = funcionario

    entradaDeDados.question("Digite o cpf do funcionario: ", function(cpf){
        let numeroCpf = cpf

        entradaDeDados.question("Quantos dias que o funcionario faltou: ", function(faltas){
            let faltasFuncionarios = faltas

            entradaDeDados.question("Qual o cargo do funcionario(junior, pleno, senior): ", function(cargo){
                let cargoFuncionario = cargo

                // Validações
                if(numeroCpf == "" || isNaN(numeroCpf) || faltasFuncionarios == "" || isNaN(faltasFuncionarios)){
                    console.log("ERRO: SOMENTE NÚMEROS SÃO PERMITIDOS")
                }else{
                    // Sálarios de funcionarios
                    if(cargoFuncionario == "junior"){
                        let salarioBase = 3000
                        let descontoFaltas = 100 * Number(faltasFuncionarios)
                        let valor = Number(salarioBase) - Number(descontoFaltas)
                        console.log(valor)
    
                    }else if(cargoFuncionario == "pleno"){
                        let salarioBase = 6000
                        let descontoFaltas = 200 * Number(faltasFuncionarios)
                        let valor = Number(salarioBase) - Number(descontoFaltas)
                        console.log(valor)
    
                    }else{
                        let salarioBase = 10000
                        let descontoFaltas = 250 * Number(faltasFuncionarios)
                        let valor = Number(salarioBase) - Number(descontoFaltas)
                        console.log(valor)
                    }
                }


            }) // fecha cargo
        })// fecha faltas
    }) // fecha cpf
}) // fecha funcionario