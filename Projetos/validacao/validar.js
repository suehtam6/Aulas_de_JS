/**************************************************************************
 * Objetivo: Arquivo responsavel por validar o IMC
 * Autor: Matheus Lucas
 * Data: 25/02/2026
 * versão: 1.0
 **************************************************************************/

const validarDadosString = function validandoStrings(nome, item) {
    let nomeUsuario = String(nome)
    let items = String(item)

    if (nomeUsuario == "" || !isNaN(nomeUsuario) || items == "" || !isNaN(items)) {
        return false
    } else {
        return true
    }


}

const validandoDadosNumeros = function validarNumeros(numero1, numero2) {
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)

    if (isNaN(valor1) || isNaN(valor2) ||
        valor1 == "" || valor2 == "") {
        return false
    } else {
        return true
    }
}

const validarSeisStrings = function validarSeis(string1, string2, string3, string4, string5, string6) {
    let nomeUsuario = string1
    let nomeProfessor = string2
    let sexoAluno = string3
    let sexoProfessor = string4
    let curso = string5
    let disciplina = string6

    if (nomeUsuario == "" || !isNaN(nomeUsuario) || nomeProfessor == "" || !isNaN(nomeProfessor)
        || sexoAluno == "" || !isNaN(sexoAluno) || sexoProfessor == "" || !isNaN(sexoProfessor) ||
        curso == "" || !isNaN(curso) || disciplina == "" || !isNaN(disciplina)) {
        return false
    } else {
        return true
    }
}

const validarDadosQuatroNumeros = function numeros(numero1, numero2, numero3, numero4) {
    let valor1 = numero1
    let valor2 = numero2
    let valor3 = numero3
    let valor4 = numero4

    if (valor1 == "" || valor2 == "" || valor3 == "" || valor4 == "" || valor5 == "" ||
        isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) {
        return false
    } else {
        return true
    }

}

const validarDadosNumero = function numeros(numero1) {
    let valor1 = numero1


    if (valor1 == "" || isNaN(numero1)) {
        return false
    } else {
        return true
    }

}

const validarTabuada = function numeros(multiplicando, multiplicador) {
    let numeroMultiplicando = Number(multiplicando)
    let numeroMultiplicador = Number(multiplicador)

    if (numeroMultiplicador == "" || isNaN(numeroMultiplicador) || numeroMultiplicando == "" || isNaN(numeroMultiplicando)
        || numeroMultiplicando < 2 || numeroMultiplicador < 2 || numeroMultiplicando > 100 || numeroMultiplicador > 50) {
        return false
    } else {
        return true
    }

}

const validarDadosFatorial = function numeros(numero1) {
    let valor1 = numero1
    let proibido = [',' , '.']
    

    if (valor1 == "" || isNaN(numero1) || valor1 < 2) {
        return false
    } else if(proibido.some(tirar => valor1.includes(tirar))){
        return false
    }else {
        return true
    }

}

const validarImparPar = function imparPar(inicial, final){
    
    let numeroInicial = Number(inicial.replace(",", "."))
    let numeroFinal = Number(final.replace(",", "."))
    console.log(numeroFinal)
    console.log(numeroInicial)
    let proibido = [',' , '.']

    if(numeroInicial < 0 || numeroInicial > 500 || isNaN(numeroInicial) ||
    numeroFinal < 100 || numeroFinal > 1000 || isNaN(numeroFinal) ||
    numeroInicial == numeroFinal || numeroInicial % 1 != 0 || numeroFinal % 1 != 0){
        return false
    }else{
        return true
    }

}

module.exports = {
    validarDadosString,
    validandoDadosNumeros,
    validarSeisStrings,
    validarDadosQuatroNumeros,
    validarDadosNumero,
    validarTabuada,
    validarDadosFatorial,
    validarImparPar
}