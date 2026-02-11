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
const { compileFunction } = require("vm")

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

                    // Chama a função para calcular o valor do montante
                    let montante = calcularJurosCompostos(valorCompra, taxaJuros, qtdeParcelas)

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

//Função para retornar o percentual de um número
function calcularPercentual(numero){
    // recebe o número encaminhado
    let numeroPercentual = Number(numero)

    // Validação de entrada vazia, menor ou igual a 0 e caracter
    if(numero == "" || numero <= 0 || isNaN(numero)){
        return false
    }else{

    // calcula o percentual do número
    let percentual = numeroPercentual / 100

    // toFixed depois de cortar as casas decimais, ele transforma a conta em uma String.
    // Assim deve ser utilizado o Number() para voltar como um número
    return Number(percentual.toFixed(2))
    }

}

// função para retornar o montante referente a juros compostos
function calcularJurosCompostos(valor, taxa, parcelas){

    //Recebe os valores dos argumentos e converte em números
    let valorPrincipal   = Number(valor)
    let taxaJuros        = Number(taxa)
    let qtdeParcelas     = Number(parcelas)

    if(valor == "" || isNaN(valor) || valor <= 0 || parcelas == "" || isNaN(parcelas) || parcelas <= 0){
        return false
    }else{

        // função para o retorno do percentual da taxa
        let percentual = calcularPercentual(taxaJuros)
        if(percentual){
            //Calculo
            let montante = valorPrincipal * ((1 + percentual) ** qtdeParcelas)
            return Number(montante.toFixed(2))
        }else{
            return false
        }

    }

}