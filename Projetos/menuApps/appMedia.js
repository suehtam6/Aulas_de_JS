/**************************************************************************
 * Objetivo: Arquivo responsavel por receber as entradas de dados
 * Autor: Matheus Lucas
 * Data: 25/02/2026
 * versão: 1.0
 **************************************************************************/

const calcularMedia = require("../modulo/calcularMedia")
const validarDados = require("../validacao/validar")

const iniciarApp = function (entradaDeDados) {

    entradaDeDados.question("Digite o nome do aluno(a): ", function (nomeA) {
        let nomeAluno = nomeA

        entradaDeDados.question("Digite a sexualidade do aluno(a): ", function (sexoA) {
            let sexoAluno = sexoA

            entradaDeDados.question("Digite o nome do professor(a): ", function (nomeP) {
                let nomeProfessor = nomeP

                entradaDeDados.question("Digite a sexualidade do professor(a): ", function (sexoP) {
                    let sexoProfessor = sexoP

                    entradaDeDados.question("Digite o curso: ", function (curso) {
                        let nomeCurso = curso

                        entradaDeDados.question("Digite o nome da matéria: ", function (materia) {
                            let disciplina = materia

                            entradaDeDados.question("Digite a nota 1: ", function (nota1) {
                                let valor1 = nota1

                                entradaDeDados.question("Digite a nota 2: ", function (nota2) {
                                    let valor2 = nota2

                                    entradaDeDados.question("Digite a nota 3: ", function (nota3) {
                                        let valor3 = nota3

                                        entradaDeDados.question("Digite a nota 4: ", function (nota4) {
                                            let valor4 = nota4

                                            let validarQuatroNumeros = validarDados.validarDadosQuatroNumeros(valor1, valor2, valor3, valor4)
                                            let validarDadosString = validarDados.validarSeisStrings(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, disciplina)

                                            if (validarDadosString) {

                                                if (validarQuatroNumeros) {

                                                    let resultadoMedia = calcularMedia.calcularMedia(valor1, valor2, valor3, valor4)

                                                    if (resultadoMedia >= 70) {

                                                        let formalario = calcularMedia.formulario(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, disciplina, resultadoMedia, nota1, nota2, nota3, nota4)

                                                        console.log(formalario)

                                                    } else if (resultadoMedia < 70) {

                                                        entradaDeDados.question("Digite a nota do EXAME: ", function (exame) {

                                                            let notaExame = exame

                                                            let validandoMedia = validarDados.validandoDadosNumeros(resultadoMedia)

                                                            if (!validandoMedia) {

                                                                let resultadoExame = calcularMedia.calcularExame(resultadoMedia, notaExame)

                                                                if (resultadoExame >= 60) {

                                                                    let formularioParaExame = calcularMedia.formularioExame(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, disciplina, resultadoMedia, notaExame, nota1, nota2, nota3, nota4, resultadoExame)

                                                                    console.log(formularioParaExame)

                                                                    entradaDeDados.close()

                                                                } else {

                                                                    console.log("ERRO: ALGUMA INFORMAÇÃO DO FORMULARIO EXAME ESTÁ INCORRETA")

                                                                    entradaDeDados.close()

                                                                }

                                                            } else {

                                                                console.log("ERRO: VALIDAÇÃO DA MÉDIA DEU ERRADO")

                                                            }

                                                        })

                                                    } else if (resultadoMedia <= 50) {

                                                        console.log("REPROVADO!!")

                                                        entradaDeDados.close()

                                                    } else {

                                                        console.log("ERRO: ERRO NO CALCULO")

                                                        entradaDeDados.close()

                                                    }

                                                } else {

                                                    console.log("ERRO: VALIDAÇÃO DOS NÚMEROS FALHOU")

                                                }

                                            } else {

                                                console.log("ERRO: VALIDAÇÃO DAS STRINGS FALHOU")

                                            }

                                        })

                                    })

                                })

                            })

                        })

                    })

                })

            })

        })

    })

}

module.exports = {
    iniciarApp
}