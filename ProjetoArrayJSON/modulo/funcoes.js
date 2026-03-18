/*************************************************************************************
 * Objetivo: Manipular dados dos Estados do Brasil
 * Autor: Matheus Lucas
 * Data: 18/03/2026
 * Versão: 1.0
 **************************************************************************************/

const estados = require('./estados_cidades')


function getListaDeEstados(){
    let siglaUF = 'SP'
    let estadosUF = estados.listaDeEstados.estados
    
    estadosUF.forEach(function(itemUF){
        if(siglaUF == itemUF.sigla)
        console.log(`
UF: ${itemUF.sigla}
Descrição: ${itemUF.nome}
Capital: ${itemUF.capital}
Região: ${itemUF.regiao}
`)
        })
        

}

getListaDeEstados()