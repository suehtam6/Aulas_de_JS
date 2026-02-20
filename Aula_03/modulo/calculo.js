/******************************************************************************************************************* 
 * Objetivo: Arquivo responsavel pelas funções de calculos financeiros
 * Autor: Matheus Lucas
 * Data: 11/02/2026
 * versão: 1.0
 ********************************************************************************************************************/

//Função para retornar o percentual de um número
function calcularPercentual(numero) {
    // recebe o número encaminhado
    let numeroPercentual = Number(numero)

    // Validação de entrada vazia, menor ou igual a 0 e caracter
    if (numero == "" || numero <= 0 || isNaN(numero)) {
        return false
    } else {

        // calcula o percentual do número
        let percentual = numeroPercentual / 100

        // toFixed depois de cortar as casas decimais, ele transforma a conta em uma String.
        // Assim deve ser utilizado o Number() para voltar como um número
        return Number(percentual.toFixed(2))
    }

}

// função para retornar o montante referente a juros compostos
function calcularJurosCompostos(valor, taxa, parcelas) {

    //Recebe os valores dos argumentos e converte em números
    let valorPrincipal = Number(valor)
    let taxaJuros = Number(taxa)
    let qtdeParcelas = Number(parcelas)

    if (valor == "" || isNaN(valor) || valor <= 0 || parcelas == "" || isNaN(parcelas) || parcelas <= 0) {
        return false
    } else {

        // função para o retorno do percentual da taxa
        let percentual = calcularPercentual(taxaJuros)
        if (percentual) {
            //Calculo
            let montante = valorPrincipal * ((1 + percentual) ** qtdeParcelas)
            return Number(montante.toFixed(2))
        } else {
            return false
        }

    }

}

function calcularExtra(nome, cargo, cpf, faltas, extra) {

    let nomeFuncionario = String(nome).toUpperCase()
    let cargoFuncionario = String(cargo).toUpperCase()
    let numeroCpf = cpf
    let horaExtra = extra
    let faltasFuncionarios = faltas


     
        // Sálarios de funcionarios
        if (cargoFuncionario == "JUNIOR") {
            let salarioBase = 2000

            let descontoFaltas = 100 * Number(faltasFuncionarios)

            let acresimos = 30 * Number(horaExtra)

            let salarioFinal = (Number(salarioBase) + Number(acresimos)) - Number(descontoFaltas)
            
            statusPagamento = `
                    ================================
                              EMPRESA SENAI        
                    FUNCIONARIO:  ${nomeFuncionario}
                    CARGO:        ${cargoFuncionario}
                    CPF:          ${numeroCpf}
                    SALARIO BASE: R$${salarioBase}
                    DESCONTOS:    R$${descontoFaltas}
                    HORAS EXTRAS: R$${acresimos}
                    RECEBEU:      R$${salarioFinal}
                    ================================`
 

        } else if (cargoFuncionario == "PLENO") {
            let salarioBase = 6000

            let descontoFaltas = 200 * Number(faltasFuncionarios)

            let acresimos = 60 * Number(horaExtra)

            let salarioFinal = (Number(salarioBase) + Number(acresimos)) - Number(descontoFaltas)

            statusPagamento = `
                    ================================
                              EMPRESA SENAI        
                    FUNCIONARIO:  ${nomeFuncionario}
                    CARGO:        ${cargoFuncionario}
                    CPF:          ${numeroCpf}
                    SALARIO BASE: R$${salarioBase}
                    DESCONTOS:    R$${descontoFaltas}
                    HORAS EXTRAS: R$${acresimos}
                    RECEBEU:      R$${salarioFinal}
                    ================================`
                
        } else if (cargoFuncionario == "SENIOR") {

            let salarioBase = 10000

            let descontoFaltas = 400 * Number(faltasFuncionarios)

            let acresimos = 90 * Number(horaExtra)

            let salarioFinal = (Number(salarioBase) + Number(acresimos)) - Number(descontoFaltas)

            statusPagamento = `
                    ================================
                              EMPRESA SENAI        
                    FUNCIONARIO:  ${nomeFuncionario}
                    CARGO:        ${cargoFuncionario}
                    CPF:          ${numeroCpf}
                    SALARIO BASE: R$${salarioBase}
                    DESCONTOS:    R$${descontoFaltas}
                    HORAS EXTRAS: R$${acresimos}
                    RECEBEU:      R$${salarioFinal}
                    ================================`
        }

        return statusPagamento
    }

// Deixando as funções públicas
module.exports = {
    calcularPercentual,
    calcularJurosCompostos,
    calcularExtra
}