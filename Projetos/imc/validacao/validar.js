/**************************************************************************
 * Objetivo: Arquivo responsavel por validar o IMC
 * Autor: Matheus Lucas
 * Data: 25/02/2026
 * versão: 1.0
 **************************************************************************/

const validarDadosString = function validandoStrings(nome, item){
    let nomeUsuario = String(nome) 
    let items       = String(item)

if(nomeUsuario == "" || !isNaN(nomeUsuario) || items == "" || !isNaN(items)){
    return false
    }else{
        return true
    }


}

const validandoDadosNumeros = function validarNumeros(numero1, numero2){
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    
    if(isNaN(valor1) || isNaN(valor2) ||
        valor1 == "" || valor2 == ""){
        return false
    }else{
        return true
    }
}

module.exports = {
    validarDadosString,
    validandoDadosNumeros
}