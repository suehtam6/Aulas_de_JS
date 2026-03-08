/**************************************************************************
 * Objetivo: Arquivo responsavel fazer o calculo da tabuada
 * Autor: Matheus Lucas
 * Data: 02/03/2026
 * versão: 1.0
 **************************************************************************/

//Função para imprimir a tabuada    
const gerarTabuada = function (multiplicando, multiplicador) {
    let numeroMultiplicando = Number(multiplicando)
    let numeroMultiplicador = Number(multiplicador)
    let cont = 0
    let result
    let resultado = ""

    while (cont <= numeroMultiplicador) {
        result = numeroMultiplicando * cont
        
        resultado += `\nTabuada do [${multiplicando}]
                        \n${numeroMultiplicando} X ${cont} = ${result}\n`

        cont++
    }
    return resultado

}

module.exports = {
    gerarTabuada
}