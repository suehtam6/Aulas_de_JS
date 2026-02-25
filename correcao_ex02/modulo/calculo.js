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
    let valor1             = Number(numero1)
    let valor2             = Number(numero2)
    let operadorMatematico = String(operador).toUpperCase()

    let resultado = false
    
    switch (operadorMatematico) {
        case 'SOMAR':
            resultado = somar(valor1, valor2)
            break;
        case 'SUBTRAIR':
            resultado = subtrair(valor1, valor2)
            break;

        case 'MULTIPLICAR':
            resultado = multiplicar(valor1, valor2)
            break;

        case 'DIVIDIR':
            resultado = dividir(valor1, valor2)
            break;
    }
    return resultado

}

// função baseada em formato de seta(ARROW FUNCTION)
// Ela deve ser feita nessa forma caso sua linha de codigo tenha mais de uma linha
const somar = (numero1, numero2) => {
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)

    let resultado = valor1 + valor2

    return resultado
}

// Outra forma de utilizar a função seta, ela funciona somente se for em uma linha de codigo
// const somar = (numero1, numero2) => Number(numero1) + Number(numero2)
const subtrair = (numero1, numero2) => Number(numero1) - Number(numero2)
const multiplicar = (numero1, numero2) => Number(numero1) * Number(numero2)
const dividir = (numero1, numero2) => Number(numero1) / Number(numero2)


// chamando a função para testar
let result = calcular(23.5, 60, 'multiplicar')
console.log(result)
// if(result){
//     console.log(result)
// }else{
//     console.log('ERRO')
// }

