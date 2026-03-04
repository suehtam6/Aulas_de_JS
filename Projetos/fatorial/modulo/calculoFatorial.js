/**************************************************************************
 * Objetivo: Arquivo responsavel calcular o fatorial
 * Autor: Matheus Lucas
 * Data: 04/03/2026
 * versão: 1.0
 **************************************************************************/

const calculoFatorial = function fatorial(numero) {

    let fatorial = 1;
    let explicaFator = '';
    let num = numero
    let x
    let resultado = ""
    // Utilizando o for para fazer o loop do fatorial
    for (x = 1; x <= num; x++) {
        // FATORIAL = 1; FATORIAL * X(NÚMERO)
        fatorial = fatorial * x;
        // 
        if (explicaFator != '') {

            explicaFator += 'x';
        }
        explicaFator += x;
        
        resultado = (num + " = " + explicaFator + " = " + fatorial);
    }
    return resultado
}

module.exports = {
    calculoFatorial
}