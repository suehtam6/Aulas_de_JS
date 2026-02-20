function calcularOperacao(operacao, n1, n2){

    let entradaOperacao = operacao
    //ReplaceAll serve para mudar as virgulas por pontos
    let n1Entrada = n1
    let n2Entrada = n2
    let resultado

    
    // Validação para mudar o nome para o caracter
    if(entradaOperacao == "SOMA" || entradaOperacao == "soma" || entradaOperacao == "Soma"){
        resultado = Number(n1Entrada) + Number(n2Entrada)

    }else if(entradaOperacao == "SUBTRAÇÃO" || entradaOperacao == "subtração" || entradaOperacao == "Subtração"){
        resultado = Number(n1Entrada) - Number(n2Entrada)

    }else if(entradaOperacao == "MULTIPLICAÇÃO" || entradaOperacao == "multiplicação" || entradaOperacao == "Multiplicação" || entradaOperacao == "multiplicacao"){
        resultado = Number(n1Entrada) * Number(n2Entrada)

    }else if(entradaOperacao == "DIVISÃO" || entradaOperacao == "divisão" || entradaOperacao == "divisao" || entradaOperacao == "Divisao"){
        if(n1Entrada <= 0 || n2Entrada <= 0){
            return false
           
        }else{
            resultado = Number(n1Entrada) / Number(n2Entrada)
        }
        
    }else{
        return false
    }

    return resultado.toFixed(2)

}



module.exports = {
    calcularOperacao
}