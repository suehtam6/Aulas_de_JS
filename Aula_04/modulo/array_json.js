/*************************************************************************************
 * Objetivo: Manipular dados em ARRAY e JSON
 * Autor: Matheus Lucas
 * Data: 05/03/2026
 * Versão: 1.0
 **************************************************************************************/

/*
    [] -> Representa um objeto do tipo ARRAY
    {} -> Representa um objeto do tipo JSON

    ARRAY -> É um espaço na memória para armazenar dados sem a necessidade de criar outros objetos
        Ex:
            Sem ARRAY
            let nome    = 'José'
            LET nome2   = 'Maria'
            let nome3   = 'João'
            
            Com ARRAY
                INDICES     0       1       2
            let nomes = ['José', 'Maria', 'João']


    JSON -> É um espaço na memória para armazenar dados com CHAVE E VALOR.
        Ex: 
            SEM JSON

            let nome        = 'José'
            let telefone    = '123456789'
            let email       = 'jose@gmail.com'

            COM JSON
                           atributo 
'                           chave   valor   chave           valor    chave      valor
            let cliente = {"nome": "José", "telefone": "123456789", "email": "jose@gmail.com"}


*/  

// Criando objeto do tipo ARRAY
const listaDeAlunos = ['José', 'Maria', 'Luiz', 'Antonio', 'Carlos', 'Maria']
const listaDeClientes = []
const listaDeFornecedores = []
const listaNomeItem = []

const exibirDados = function(){

    //Exibe o objeto ARRAY com o seu conteúdo
    console.log(listaDeAlunos)

    //Exibe o tipo de dado que está sendo utilizado no indice[]
    console.log(typeof(listaDeAlunos[2]))

    //Exibe o objeto ARRAY em formato de tabela, mostrando indice e conteúdo
    console.table(listaDeAlunos)

    //Exibe o nome do aluno do indice 3
    console.log(listaDeAlunos[3])

    //Exibindo uma mensagem com o nome do aluno que corresponde ao indice 0
    console.log(`O nome do aluno é ${listaDeAlunos[0]}`)

    //Usando o while
    console.log("\n********** EXEMPLO COM WHILE **********")
    let cont = 0
    while(cont<listaDeAlunos.length){
        console.log(`O nome do aluno é ${listaDeAlunos[cont]}`)
        cont+=1
    }
    console.log("***************************************")


    //Usando o FOR = PARA
    console.log("\n********** EXEMPLO COM FOR ************")
    for(let contador = 0; contador < listaDeAlunos.length; contador++){
        console.log(`O nome do aluno é ${listaDeAlunos[contador]}`)
    }
    console.log("****************************************")

    //Usando o FOR EACH = PARA TODOS
    console.log("\n******** EXEMPLO COM FOR EACH **********")
    listaDeAlunos.forEach(function(aluno){
        console.log(`O nome do aluno é ${aluno}`)
    })
    console.log("*****************************************")


    //Usando FOR OF = DÊ
    console.log("\n********* EXEMPLO COM FOR OF ***********")
    for (aluno of listaDeAlunos){
        console.log(`O nome do aluno é ${aluno}`)
            
        
    }
    console.log("*****************************************")
    
    //Usando FOR IN = PARA INDICE
    console.log("\n********* EXEMPLO COM FOR IN ***********")
    for (aluno in listaDeAlunos){
        console.log(`O nome do aluno é ${aluno}`)
    }
    console.log("*****************************************")

    //Retorna a quantidade de itens de um ARRAY
    console.log(listaDeAlunos.length)

}   

const manipularDados = function(){
    // ADICIONANDO ITENS MANUALMENTE DENTRO DO ARRAY, DIRETAMENTE PELO INDICE[]
    listaDeClientes[0] = 'José da Silva'
    listaDeClientes[1] = 'Maria da Penha'
    listaDeClientes[2] = 'Luiz da silva'
    listaDeClientes[3] = 'Ester cabeça'

    console.table(listaDeClientes)

    // Permite adicionar novos elementos no ARRAY, sempre no final
    listaDeFornecedores.push('Antonio')
    listaDeFornecedores.push('Caio')
    listaDeFornecedores.push('Luiz', 'Maria', 'Carlos')
    console.table(listaDeFornecedores)

    // Permite adicionar novos elementos no ARRAY, sempre no inicio
    // Após adicionar o elemento, ele reorganiza todos os outros itens 
    listaDeFornecedores.unshift('Roberto' , 'Luciano')
    console.table(listaDeFornecedores)

    //Permite adicionar novos elementos no ARRAY de acordo com o indice que você adicionou ali
    listaDeFornecedores.splice(3,0,'Bernardo')

    console.table(listaDeFornecedores)

    //Permite remover um elemento de acordo com a posição de um ARRAY
    listaDeFornecedores.splice(4,1)
    console.table(listaDeFornecedores)

    //Permite remover o último elemento do ARRAY
    listaDeFornecedores.pop()

    //Permite removar o primeiro elemento do ARRAY
    listaDeFornecedores.shift()

    console.table(listaDeFornecedores)


}

const removerItem = function(aluno){


    //indexOf() -> Retorna o Indice referente ao conteúdo que está sendo pesquisado
    // listaDeAlunos.splice(listaDeAlunos.indexOf(aluno), 1)


    for(cont in listaDeAlunos){
        if(aluno == listaDeAlunos[cont]){
            listaDeAlunos.splice(cont,1)
        }
    }

    console.table(listaDeAlunos)
}

const vericarItem = function(aluno){

    //Verifica se o conteúdo existe dentro do ARRAY e retorna TRUE ou False
    return listaDeAlunos.includes(aluno)

}

console.log(vericarItem('Maria'))
//exibirDados()
//removerItem('Maria')
//manipularDados()