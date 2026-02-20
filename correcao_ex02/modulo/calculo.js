/****************************************************************************************************************************************************
 * Objetivo: Arquivo responsavel pelo processamento de cálculos matematícos
 * (SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR)
 * Autor: Matheus Lucas
 * Data: 20/02/2026
 * versão: 1.0
 ****************************************************************************************************************************************************/

// exemplo de função anonima
// função para calcular as 4 operações matematícas

// toUpperCase() -> Deixa todas as letras maíusculas
// toLowerCase() -> Deixa todas as letras minusculas

const calcular = function (numero1, numero2, operador) {
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operadorMatematico = String(operador).toUpperCase()

    let resultado = false
    // if(operadorMatematico == 'SOMAR')
    //     resultado = valor1 + valor2
    // else if(operadorMatematico == 'SUBTRAIR')
    //     resultado = valor1 - valor2
    // else if(operadorMatematico == 'MULTIPLICAR')
    //     resultado = valor1 * valor2
    // else if(operadorMatematico == 'DIVIDIR')
    //     resultado = valor1 / valor2


    switch (operadorMatematico) {
        case 'SOMAR':
            resultado = valor1 + valor2
            break;
        case 'SUBTRAIR':
            resultado = valor1 - valor2
            break;

        case 'MULTIPLICAR':
            resultado = valor1 * valor2
            break;

        case 'DIVIDIR':
            resultado = valor1 / valor2
            break;
    }
    return resultado


}

// chamando a função para testar
let result = calcular(23, 666, 'somar')
console.log(result)
// if(result){
//     console.log(result)
// }else{
//     console.log('ERRO')
// }