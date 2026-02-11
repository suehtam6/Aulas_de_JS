/******************************************************************************************************************* 
 * Objetivo: Arquivo responsavel pelos cálculos da média e status do aluno
 * Autor: Matheus Lucas
 * Data: 11/02/2026
 * versão: 1.0
 ********************************************************************************************************************/

function calcularMedia(valor1, valor2, valor3, valor4){

    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)

    if(valor1 == "" || valor1 < 0 || isNaN(valor1) || valor1 > 100 ||
       valor2 == "" || valor2 < 0 || isNaN(valor2) || valor2 > 100 ||
       valor3 == "" || valor3 < 0 || isNaN(valor3)|| valor3 > 100 ||
       valor4 == "" || valor4 < 0 || isNaN(valor4) || valor4 > 100 ){
        return false
    }else{
        let media = (nota1 + nota2 + nota3 + nota4) / 4
        return Number(media.toFixed(2))
    }
   
}

function statusMedia(statusDoAluno){

    let status = statusDoAluno

    if (statusDoAluno <= 49.99) {
        status = "REPROVADO"
     } else if (statusDoAluno <= 69.99) {
         status = "RECUPERAÇÃO"
     } else{
         status = "APROVADO!!"
     }return status
     

}

module.exports = {
    calcularMedia,
    statusMedia
}

