/**************************************************************************
 * Objetivo: Arquivo responsavel SOMENTE pelas entradas e saídas de dados
 * Autor: Matheus Lucas
 * Data: 20/02/2026
 * versão: 1.0
 **************************************************************************/

const calculosMatematicos = require("./modulo/calculo");

let result = calculosMatematicos.calcular(80, 55, 'multiplicar')
console.log(result)