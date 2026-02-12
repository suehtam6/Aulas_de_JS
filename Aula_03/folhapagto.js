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

        entradaDeDados.question("Qual o cargo do funcionario(junior, pleno, senior): ", function(cargo){
            let cargoFuncionario = cargo

            if(cargoFuncionario == "junior"){

            }else if(cargoFuncionario == "pleno"){

            }else{
                
            }
        }) // fecha cargo
    }) // fecha cpf
}) // fecha funcionario