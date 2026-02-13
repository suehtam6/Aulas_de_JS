function validarDados(operacao, valor1, valor2){
    let nomeOperacao = operacao
    let v1 = valor1.replace(/,/g, ".", /([.,])\1/)
    let v2 = valor2.replace(/,/g, ".", /([.,])\1/)

    if(nomeOperacao == "" ||isNaN(nomeOperacao) == false|| v1 == "" || v2 == ""){
        return false
    }else if(isNaN(v1)|| isNaN(v2)){
        return false
    }
    return true
}

module.exports = {
    validarDados
}