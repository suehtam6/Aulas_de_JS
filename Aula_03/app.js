/*************************************************************************************
 * Objetivo: Criar uma aplicação que realiza calculos de Juros utilizando 
 * Funções para modularizar o código.
 * Autor: Matheus Lucas
 * Data: 11/02/2026
 * Versão: 1.0
 *************************************************************************************
 */


 //Importando biblioteca readline
const readline = require("readline")



//Criando objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// nome
entradaDeDados.question("Digite o nome do cliente: ", function(nome){
    let nomeCliente = nome

    // produto
    entradaDeDados.question("Digite o produto que foi comprado: ", function(produto){
        let nomeProduto = produto

        // valor
        entradaDeDados.question("Digite o valor da compra: ", function(valor){
            let valorCompra = valor

            // juros/taxa
            entradaDeDados.question("Digite a taxa de Juros: ", function(juros){
                let taxaJuros = juros

                // parcelas
                entradaDeDados.question("Digite a quantidade de parcelas: ", function(parcelas){
                    let qtdeParcelas = parcelas
                    
                    // Import da biblioteca de calcular financeiros
                    let calculos = require("./modulo/calculo")

                    // Chama a função para calcular o valor do montante
                    let montante = calculos.calcularJurosCompostos(valorCompra, taxaJuros, qtdeParcelas)

                    // Validação para verificar se o calculo foi realizado
                    if(montante){
                        console.log(`O valor da compra foi: ${montante}`)
                        entradaDeDados.close()
                    }else{
                        console.log("ERRO: Não foi possível processar o calculo")
                        entradaDeDados.close()
                    }
                    

                }) // fecha parcelas
            }) // fecha juros/taxa
        }) // fecha valor do produto
    }) // fecha produto
}) // fecha nome

