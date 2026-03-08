/**************************************************************************
 * Objetivo: Arquivo responsavel calcular a média do aluno
 * Autor: Matheus Lucas
 * Data: 27/02/2026
 * versão: 1.0
 **************************************************************************/

const calcularMedia = function calcular(valor1, valor2, valor3, valor4){
    let nota1 = Number(valor1)
    let nota2 = Number(valor2) 
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)
    let media

    media = (nota1 + nota2 + nota3 + nota4)/Number(4)
    return media.toFixed(2)

}

const formulario = function Imprimir(nomeA, nomeP, sexoA, sexoP, curso, disciplina, media, nota1, nota2, nota3, nota4){
    let nomeAluno = String(nomeA).toUpperCase()
    let nomeProfessor = String(nomeP).toUpperCase()
    let sexoAluno = String(sexoA).toUpperCase()
    let sexoProfessor = String(sexoP).toUpperCase()
    let nomeCurso = curso
    let materia = disciplina
    let mediaFinal = media
    let v1 = nota1
    let v2 = nota2 
    let v3 = nota3
    let v4 = nota4
    let status

    if(sexoAluno == "MASCULINO" && sexoProfessor == "MASCULINO"){
       status = `
=======================================================================
O aluno ${nomeAluno} foi [aprovado] na disciplina ${materia}.
Curso: ${nomeCurso}
Professor: ${nomeProfessor}
Notas do aluno: ${v1}, ${v2}, ${v3}, ${v4}
Média Final: ${mediaFinal}
=======================================================================`

    }else if(sexoAluno == "FEMININO" && sexoProfessor == "FEMININO"){
        status = `
=======================================================================
A aluna ${nomeAluno} foi [aprovado] na disciplina ${materia}.
Curso: ${nomeCurso}
Professora: ${nomeProfessor}
Notas da aluna: ${v1}, ${v2}, ${v3}, ${v4}
Média Final: ${mediaFinal}
=======================================================================`

    }else if(sexoAluno == "MASCULINO" && sexoProfessor == "FEMININO"){
        status = `
=======================================================================
O aluno ${nomeAluno} foi [aprovado] na disciplina ${materia}.
Curso: ${nomeCurso}
Professora: ${nomeProfessor}
Notas da aluna: ${v1}, ${v2}, ${v3}, ${v4}
Média Final: ${mediaFinal}
=======================================================================`
                
    }else if(sexoAluno == "FEMININO" && sexoProfessor == "MASCULINO"){
        status = `
=======================================================================
A aluna: ${nomeAluno} foi [aprovado] na disciplina ${materia}.
Curso: ${nomeCurso}
Professor: ${nomeProfessor}
Notas da aluna: ${v1}, ${v2}, ${v3}, ${v4}, 
Média Final: ${mediaFinal}
=======================================================================`
    }
    return status


}

const calcularExame = function exame(media, exame){
    let notaExame = Number(exame)
    let notaMedia = Number(media)
    let resultado

    resultado = (notaExame + notaMedia)/Number(2)
    return resultado.toFixed(2)

}

const formularioExame = function ImprimirExame(nomeA, nomeP, sexoA, sexoP, curso, disciplina, media, exameFinal, nota1, nota2, nota3, nota4, exameInicial){
    let nomeAluno = String(nomeA).toUpperCase()
    let nomeProfessor = String(nomeP).toUpperCase()
    let sexoAluno = String(sexoA).toUpperCase()
    let sexoProfessor = String(sexoP).toUpperCase()
    let nomeCurso = curso
    let materia = disciplina
    let mediaFinal = media
    let notaExame = exameInicial
    let v1 = nota1
    let v2 = nota2 
    let v3 = nota3
    let v4 = nota4
    let exame = exameFinal
    let status

    if(sexoAluno == "MASCULINO" && sexoProfessor == "MASCULINO"){
       status = `
=======================================================================
O aluno ${nomeAluno} foi [aprovado] na disciplina ${materia}.
Curso: ${nomeCurso}
Professor: ${nomeProfessor}
Notas do aluno: ${v1}, ${v2}, ${v3}, ${v4}, ${notaExame}
Média Final: ${mediaFinal}
Média final do Exame: ${exame}
=======================================================================`
    }else if(sexoAluno == "FEMININO" && sexoProfessor == "FEMININO"){
        status = `
=======================================================================
A aluna ${nomeAluno} foi [aprovado] na disciplina ${materia}.
Curso: ${nomeCurso}
Professora: ${nomeProfessor}
Notas da aluna: ${v1}, ${v2}, ${v3}, ${v4}, ${notaExame}
Média Final: ${mediaFinal}
Média final do Exame: ${exame}
=======================================================================`
    }else if(sexoAluno == "MASCULINO" && sexoProfessor == "FEMININO"){
        status = `
=======================================================================
O aluno ${nomeAluno} foi [aprovado] na disciplina ${materia}.
Curso: ${nomeCurso}
Professora: ${nomeProfessor}
Notas da aluna: ${v1}, ${v2}, ${v3}, ${v4}, ${notaExame}
Média Final: ${mediaFinal}
Média final do Exame: ${exame}
=======================================================================`
    }else if(sexoAluno == "FEMININO" && sexoProfessor == "MASCULINO"){
        status = `
=======================================================================
A aluna: ${nomeAluno} foi [aprovado] na disciplina ${materia}.
Curso: ${nomeCurso}
Professor: ${nomeProfessor}
Notas da aluna: ${v1}, ${v2}, ${v3}, ${v4}, ${notaExame}
Média Final: ${mediaFinal}
Média final do Exame: ${exame}
=======================================================================`
    }
    return status

}

module.exports = {
    calcularMedia,
    calcularExame,
    formulario,
    formularioExame
}