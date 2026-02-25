/**************************************************************************
 * Objetivo: Arquivo responsavel por calcular o IMC
 * Autor: Matheus Lucas
 * Data: 25/02/2026
 * versão: 1.0
 **************************************************************************/

const calcular = function imc(peso, altura, nome) {
    let nPeso = Number(peso)
    let nAltura = Number(altura)
    let nomeUsuario = String(nome).toUpperCase()
    let imc
    let status

    imc = nPeso / (nAltura * nAltura)

    if (imc <= 18.4) {
        status = `O imc do ${nomeUsuario} é ${imc.toFixed(2)} e ele está ABAIXO DO PESO`

    } else if (imc <= 24.5) {
        status = `O imc do ${nomeUsuario} é ${imc.toFixed(2)} e ele está com o PESO NORMAL`

    } else if (imc <= 29.9) {
        status = `O imc do ${nomeUsuario} é ${imc.toFixed(2)} e ele está ACIMA DO PESO`

    } else if (imc <=34.9) {
        status = `O imc do ${nomeUsuario} é ${imc.toFixed(2)} e ele está com OBESIDADE GRAU 1`

    } else if (imc <= 40) {
        status = `O imc do ${nomeUsuario} é ${imc.toFixed(2)} e ele está com OBESIDADE GRAU 2`

    } else if(imc > 40) {
        status = `O imc do ${nomeUsuario} é ${imc.toFixed(2)} e ele está com OBESIDADE GRAU 3`
    }
   return status
    

}


module.exports = {
    calcular
}
