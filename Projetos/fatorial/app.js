/**************************************************************************
 * Objetivo: Arquivo responsavel por receber dados de entrada e saída
 * Autor: Matheus Lucas
 * Data: 04/03/2026
 * versão: 1.0
 **************************************************************************/

const readline = require("readline")
const entradaDeDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})
const calcular = require("./modulo/calculoFatorial")
const validarDados = require("../validacao/validar")
entradaDeDados.question("Digite o número que deseja descobrir o fatorial: ", function(fatorial){
    let numeroFatorial = fatorial

    let validar = validarDados.validarDadosFatorial(numeroFatorial)
    if(validar){
        let resultado = calcular.calculoFatorial(numeroFatorial)
        console.log(resultado)
        entradaDeDados.close()
    }else{
        console.log("ERRO: VALIDAÇÃO FALHOU")
        entradaDeDados.close()
    }
    
})