/*************************************************************************************
 * Objetivo: Desenvolver uma aplicação para a empresa Viva Moda
 * Autor: Matheus Lucas
 * Data: 04/02/2026
 * Versão: 1.0
 *************************************************************************************
 */

// Import da biblioteca readline
const { AsyncResource } = require("async_hooks")
const readline = require("readline")

// Criação do objeto para captar as entradas de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Digite o nome do cliente: ", function(cliente){
    let nomeCliente = cliente 

    entradaDeDados.question("Qual o produto que foi comprado: ", function(produto){
        let nomeProduto = produto

        entradaDeDados.question("Qual o valor da compra: ", function(compra){
            let valorCompra = compra

            entradaDeDados.question("Qual o valor do Juros: ", function(juros){
                let jurosComposto = juros

                entradaDeDados.question("Em quantos meses será pago o produto: ", function(meses){
                    let parcelasMeses = meses

                    if(nomeCliente == "" || nomeProduto == "" || valorCompra == "" || jurosComposto == "" || parcelasMeses == ""){
                        console.log("ERRO: CAMPOS OBRIGATÓRIOS")
                    }else if(valorCompra < 0 || jurosComposto < 0 || parcelasMeses < 0){
                        console.log("ERRO: NÚMERO INFERIOR A 0")
                    }else if(isNaN(valorCompra) || isNaN(jurosComposto) || isNaN(parcelasMeses)){
                        console.log("ERRO: LETRAS NÃO SÃO PERMITIDAS")
                    }else{
                        let valor = Number(valorCompra) * ((Number(1) + (Number(jurosComposto)/100)) ** Number(parcelasMeses))
                        let acrescimo = Number(valor) - Number(valorCompra)

                        console.log(valor)
                        console.log(acrescimo)
                        
                        console.log(`\n******************* Viva Moda *******************
                            \nMuito obrigado por realizar a sua compra conosco Sr(a)${nomeCliente}.
                            \nA compra do produto ${nomeProduto}, tem um valor de: ${valorCompra}.
                            \nA sua compra será parcelada em ${parcelasMeses} vezes e o Sr(a) pagará: ${valor.toFixed(2)}
                            \nO acréscimo realizado ao valor de: ${valorCompra} será de ${acrescimo.toFixed(2)}..
                            \nMuito obrigado por escolher a Viva Moda.
                            \n**********************************************************`)
                    }
                }) // fecha meses
            }) // fecha juros
        }) // fecha valor da compra
    }) // fecha produto
}) // fecha cliente

 