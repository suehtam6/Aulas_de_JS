function calcularOperacao(operacao, n1, n2){

    let entradaOperacao = operacao
    let n1Entrada = n1.replace(/,/g, ".")
    let n2Entrada = n2.replace(/,/g, ".")
    let resultado

    
    // Validação para mudar o nome para o caracter
    if(entradaOperacao == "SOMA" || entradaOperacao == "soma" || entradaOperacao == "Soma"){
        resultado = Number(n1Entrada) + Number(n2Entrada)

    }else if(entradaOperacao == "SUBTRAÇÃO" || entradaOperacao == "subtração" || entradaOperacao == "Subtração"){
        resultado = Number(n1Entrada) - Number(n2Entrada)

    }else if(entradaOperacao == "MULTIPLICAÇÃO" || entradaOperacao == "multiplicação" || entradaOperacao == "Multiplicação" || entradaOperacao == "multiplicacao"){
        resultado = Number(n1Entrada) * Number(n2Entrada)

    }else if(entradaOperacao == "DIVISÃO" || entradaOperacao == "divisão" || entradaOperacao == "divisao" || entradaOperacao == "Divisao"){
        if(n1 == 0 || n2 == 0){
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