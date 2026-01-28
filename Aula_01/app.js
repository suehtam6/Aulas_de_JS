// Começando a primeira aula de JS

/* 
Permite exibir um conteúdo no terminal  
console.log("Testando JS")

Criando uma variavel
var nome = "Matheus"

Concatenação de dados(Texto e variavel)
console.log("O nome do usuário é: " + nome)

Outra forma de fazer a concatenação
console.log(`O nome do usuário é: ${nome}`)

*/

const console = require("console")
// Importando a biblioteca readline
// readline -> serve para permitir a entrada de dados via terminal
var readline = require("readline")

//Cria um objeto especializado na entrada de dados pelo terminal
var entradaDeDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})


/* 
    Fazendo um callback(chamada de retorno).
    A função .question serve para deixar uma pergunta no terminal e esperando uma resposta.
    Logo a function(nomeUsuario) está sendo utilizada para guardar o nome que for digitado e ser utilizado a algum momento.
*/
// Permite a entrada de dados do nome do usuário
entradaDeDados.question("Digite o seu nome: ", function(nomeUsuario){
    console.log("O nome digitado foi: " + nomeUsuario)

// Permite a entrada de dados do email do usuário
    entradaDeDados.question("Digite o seu email: ", function(emailUsuario){
        console.log(`O email do usuário ${nomeUsuario} é ${emailUsuario}`)
    })

// Permite a entrada de dados do número do usuário
    entradaDeDados.question("Digite o seu número: ", function(numeroUsuario){
        console.log(`O número do ${nomeUsuario} é ${numeroUsuario}`)
    })

})
