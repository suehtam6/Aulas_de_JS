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

entradaDeDados.question("Digite o nome do cliente: ", function (cliente) {
    let nomeCliente = cliente

    entradaDeDados.question("Qual o produto que foi comprado: ", function (produto) {
        let nomeProduto = produto

        entradaDeDados.question("Qual o valor da compra: ", function (compra) {
            let valorCompra = compra

            entradaDeDados.question("Qual o valor do Juros: ", function (juros) {
                let jurosComposto = juros

                entradaDeDados.question("Será pago em meses ou anos: ", function (situação) {

                    if (situação == "meses" || situação == "Meses") {

                        entradaDeDados.question("Quantos meses será necessario: ", function (meses) {
                            let parcelasMeses = meses
                            if (nomeCliente == "" || nomeProduto == "" || valorCompra == "" || jurosComposto == "" || parcelasMeses == "") {
                                console.log("ERRO: CAMPOS OBRIGATÓRIOS")
                            } else if (valorCompra < 0 || jurosComposto < 0 || parcelasMeses < 0) {
                                console.log("ERRO: NÚMERO INFERIOR A 0")
                            } else if (isNaN(valorCompra) || isNaN(jurosComposto) || isNaN(parcelasMeses)) {
                                console.log("ERRO: LETRAS NÃO SÃO PERMITIDAS")
                            } else if(isNaN(nomeCliente) == false){
                                console.log("ERRO:SÓ É PERMITIDO LETRAS NO NOME DO USÚARIO ")
                            }else {
                                let valor = Number(valorCompra) * ((Number(1) + (Number(jurosComposto) / 100)) ** Number(parcelasMeses))
                                let acrescimo = Number(valor) - Number(valorCompra)

                                console.log(`
                                    \n************************* Viva Moda ***************************
                                    \nMuito obrigado por realizar a sua compra conosco Sr(a)${nomeCliente}.
                                    \nA compra do produto ${nomeProduto}, tem um valor de: ${valorCompra}.
                                    \nA sua compra será parcelada em ${parcelasMeses} vezes e o Sr(a) pagará: ${valor.toFixed(2)}
                                    \nO acréscimo realizado ao valor de: R$${valorCompra} será de R$${acrescimo.toFixed(2)}..
                                    \nMuito obrigado por escolher a Viva Moda.
                                    \n***************************************************************`)
                            }
                        })

                    } else if(situação == "anos" || situação == "Anos") {
                    
                        entradaDeDados.question("Quantos anos será necessario: ", function (anos) {
                            let parcelasEmAnos = anos
                            if (nomeCliente == "" || nomeProduto == "" || valorCompra == "" || jurosComposto == "" || parcelasEmAnos == "") {
                                console.log("ERRO: CAMPOS OBRIGATÓRIOS")
                            } else if (valorCompra < 0 || jurosComposto < 0 || parcelasEmAnos < 0) {
                                console.log("ERRO: NÚMERO INFERIOR A 0")
                            } else if (isNaN(valorCompra) || isNaN(jurosComposto) || isNaN(parcelasEmAnos)) {
                                console.log("ERRO: LETRAS NÃO SÃO PERMITIDAS")
                            }else if(isNaN(nomeCliente) == false){
                                console.log("ERRO:SÓ É PERMITIDO LETRAS NO NOME DO USÚARIO ")
                            }else{
                                let valor = Number(valorCompra) * ((Number(1) + (Number(jurosComposto) / 100)) ** (Number(parcelasEmAnos) * 12))
                                let acrescimo = Number(valor) - Number(valorCompra)

                                console.log(`
                                    \n************************* Viva Moda ***************************
                                    \nMuito obrigado por realizar a sua compra conosco Sr(a)${nomeCliente}.
                                    \nA compra do produto ${nomeProduto}, tem um valor de: ${valorCompra}.
                                    \nA sua compra será parcelada em ${parcelasEmAnos} anos e o Sr(a) pagará: ${valor.toFixed(2)}
                                    \nO acréscimo realizado ao valor de: R$${valorCompra} será de R$${acrescimo.toFixed(2)}..
                                    \nMuito obrigado por escolher a Viva Moda.
                                    \n***************************************************************`)

                            }

                        })


                    }



                }) // fecha meses
            }) // fecha juros
        }) // fecha valor da compra
    }) // fecha produto
}) // fecha cliente

