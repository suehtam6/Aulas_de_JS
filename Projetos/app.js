/**************************************************************************
 * Objetivo: Menu principal para escolher a aplicação
 * Autor: Matheus Lucas
 * Data: 08/03/2026
 * versão: 1.0
 **************************************************************************/

const readline = require("readline")

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Importando os apps
const imc = require("./menuApps/appImc")
const mediaEscolar = require("./menuApps/appMedia")
const tabuada = require("./menuApps/appTabuada")
const fatorial = require("./menuApps/appFatorial")
const imparPar = require("./menuApps/appImparPar")

console.log("===== MENU DE APLICAÇÕES =====")
console.log("1 - IMC")
console.log("2 - Média Escolar")
console.log("3 - Tabuada")
console.log("4 - Fatorial")
console.log("5 - Par ou Ímpar")
console.log("6 - Fechar")
console.log("===== MENU DE APLICAÇÕES =====")

entrada.question("Digite um número de 1 a 6: ", function(opcao){


    switch(opcao){

        case "1":
            imc.iniciarApp(entrada)
            break

        case "2":
            mediaEscolar.iniciarApp(entrada)
            break

        case "3":
            tabuada.iniciarApp(entrada)
            break

        case "4":
            fatorial.iniciarApp(entrada)
            break

        case "5":
            imparPar.iniciarApp(entrada)
            break

        case "6":
            console.log("Fechando sistema, obrigado por utilizar!!")
            entrada.close()
            break

        default:
            console.log("Opção inválida")
            entrada.close()
    }

})
