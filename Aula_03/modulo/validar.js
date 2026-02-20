/******************************************************************************************************************* 
 * Objetivo: Arquivo responsavel por validar os dados
 * Autor: Matheus Lucas
 * Data: 11/02/2026
 * versão: 1.0
 ********************************************************************************************************************/

function validarDados(nome, cpf, cargo, faltas, extra){

    let nomeFuncionario = nome
    let cargoFuncionario = cargo
    let numeroCpf = cpf
    let horaExtra = extra
    let faltasFuncionarios = faltas

    if (numeroCpf == "" || isNaN(numeroCpf) || faltasFuncionarios == "" || isNaN(faltasFuncionarios) ||
    isNaN(horaExtra) || horaExtra == "" || nomeFuncionario == "" || !isNaN(nomeFuncionario )
     || cargoFuncionario == ""  || !isNaN(cargoFuncionario)) {
    return false
} else {
    return true
}


}

module.exports = {
   validarDados
}