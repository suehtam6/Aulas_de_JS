/*************************************************************************************
 * Objetivo: Projeto para realizar o calculo de médias escolares
 * Autor: Matheus Lucas
 * Data: 29/01/2026
 * Versão: 1.0
 *************************************************************************************
 */

/* 
    Tipos de criação de variaveis


    var -> Permite criar um espaço em memória do tipo variavel.
            Essa forma de criação hoje é considerada mais antiga, 
            é provavel que seja encontrada em projetos mais antigos.

            Dica: Caso você precise utilizar o var, recomenda-se 
            que seja utilizada apenas em escopo global.

            Escopo global -> Serve para quando for criado uma variavel
                            no começo do projeto e ser utilizada em qualquer local do projeto.

            Escopo local -> Serve para quando for criado uma variavel
                            dentro de uma function e ser utilizada somente ali dentro.

    let -> Permite criar um espaço em memória do tipo variavel.
            Essa forma de criação é realizada somente no escopo local,
            ou seja, dentro de bloco de programação { }.
            Esse tipo de variavel deixa de existir ao término do bloco.

    const -> Permite criar um espaço em memória do tipo constante,
             ou seja, esse conteúdo não poderá sofrer mudanças durante o projeto.
             Pode ser criada em escopo global e local

             Dica: Se possível você pode criar está const escrita em MAIÚSCULA
             para facilitar a sua utilização.

    Operadores de comparação

    ==  -> Permite a comparação de dois conteúdos.

    !=  -> Permite comparar a diferença de dois conteúdos.

    <=  -> Permite validar se o valor é menor ou igual.

    >=  -> Permite validar se o valor é maior ou igual.

    <   -> Permite validar o valor menor.

    >   -> Permite validar o valor maior.

    === -> Os dois primeiros "==" comparam  a igualdade dos conteúdo
           e o ultimo "=" compara a igualdade dos tipos de dados.

    !== -> Os dois primeiros sinais "!=" comparar se o conteúdo é diferente
           e o ultimo "=" compara a igualdade dos tipos de dados.

    =!= -> Permite comprar a igualdade de conteúdos e a diferença de tipagem de dados.
             
    Tipos de operadores lógicos
        E -> AND -> &&
        OU -> OR -> ||
        NAO -> NOT -> ! 
    .
    
    Formas de conversão de tipos de dados.
    Formas antigas, e pouco usadas, mas pode haver trabalhos que tem eles
    parseInt() -> Permite converter um conteúdo em um número do tipo Inteiro.
    parseFloat() -> Permite converter um conteúdo em um número do tipo decimal.

    Formas mais novas e usadas em bastante projetos.
    Number() -> Permite converter um conteúdo para NÚMERO, podendo ser inteiro ou decimal.
    String() -> Permite converter um conteúdo para STRING.
    Boolean() -> Permite converter um conteúdo para BOOLEANO (true ou false)

    typeof() -> Retorna o tipo de dados de uma variavel (String, Number, Boolean ou Object).

    
    
*/

// Import da biblioteca readline
const { stat } = require("fs")
const readline = require("readline")

// Criação do objeto para captar as entradas de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("==========================")
console.log("   CALCULADORA DE MÉDIA   ")
console.log("==========================")

// Entrada de dados do nome
entradaDeDados.question("Digite o nome do aluno: ", function (nome) {
    // Recebe o nome do aluno
    let nomeAluno = nome

    entradaDeDados.question("Digite o nome da matéria: ", function (aula) {
        let nomeMateria = aula

        // Entrada de dados da nota 1
        entradaDeDados.question("Digite a nota 1: ", function (valor1) {
            let nota1 = valor1

            // Entrada de dados da nota 2
            entradaDeDados.question("Digite a nota 2: ", function (valor2) {
                let nota2 = valor2

                // Entrada de dados da nota 3
                entradaDeDados.question("Digite a nota 3: ", function (valor3) {
                    let nota3 = valor3

                    // Entrada de dados da nota 4
                    entradaDeDados.question("Digite a nota 4: ", function (valor4) {
                        let nota4 = valor4

                        // Validação de entrada vazia utilizando o OU -> OR -> ||   
                        if (nomeAluno == "" || nota1 == "" || nota2 == "" || nota3 == "" || nota4 == "" || nomeMateria == "") {
                            console.log("ERRO: Existem campos obrigatorios que não foram preenchidos !!!")

                            // Validação caso o número seja maior que 100 
                        } else if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
                            console.log("ERRO: Número maior que 100")

                            // Validação caso o número seja menor que 0
                        } else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
                            console.log("ERRO: número menor que 0")

                            // Validação para evitar que entre letras na hora de digitar as notas
                            // isNaN -> verifica se o que está sendo usado é uma letra, caso seja uma letra
                            // irá aparecer "true" e caso seja um número irá aparecer um "false"
                        } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                            console.log("ERRO: Somente números são permitidos na entrada das notas")
                        } else {
                            let statusAluno
                            let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
                            // toFixed() é um método que permite fixar a qtde de casas decimais

                            // Validação do status do aluno
                            if (media <= 49.99) {
                               statusAluno = "REPROVADO"
                            } else if (media <= 69.99) {
                                statusAluno = "RECUPERAÇÃO"
                            } else {
                                statusAluno = "APROVADO!!"

                            }
                            //Exibir  boletim do aluno
                            console.log("")
                            console.log(`\nA média do  aluno ${nomeAluno} na aula de ${nomeMateria} é ${media.toFixed(2)}, seu status de aprovação é: ${statusAluno}\n\n==========================\n    FIM DA CALCULADORA    \n==========================`)
                        }


                    }) // fecha a nota 4

                }) // fecha a nota 3

            }) // fecha a nota 2

        }) // fecha a nota 1

    }) // fecha matéria

}) // fecha o nome


