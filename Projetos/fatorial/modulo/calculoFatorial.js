/**************************************************************************
 * Objetivo: Arquivo responsavel calcular o fatorial
 * Autor: Matheus Lucas
 * Data: 04/03/2026
 * versão: 1.0
 **************************************************************************/

const calculoFatorial = function fatorial(numero) {

    let fatorial = numero
    let fatorialGuardado = `${numero}`
    let receberFatorial = numero
    let resultado = ""
    
    while (receberFatorial > 1) {
        receberFatorial--
        fatorial = receberFatorial * fatorial
        fatorialGuardado += `x${receberFatorial}`  
    }
    resultado = ( "Fatorial de " + numero + " é " + fatorialGuardado + " = " + fatorial);
    return resultado
}
module.exports = {
    calculoFatorial
}