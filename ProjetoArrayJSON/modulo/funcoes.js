/*************************************************************************************
 * Objetivo: Manipular dados dos Estados do Brasil
 * Autor: Matheus Lucas
 * Data: 18/03/2026
 * Versão: 2.0
 **************************************************************************************/

const estados = require('./estados_cidades')
const estadosUF = estados.listaDeEstados.estados

// Fazendo uma função para pegar as siglas dos estados(UF)
function getListaDeEstados() {
        let estadosSiglas = {}
        let uf = []

        estadosUF.forEach(function (itemUF) {
                uf.push(itemUF.sigla)
        })

        if (estadosSiglas == null) {
                return false
        }
        estadosSiglas = { uf, 'quantidade': uf.length }
        return estadosSiglas

}

// Verificando os dados do estado de acordo com a UF
function getDadosEstado(siglaUF) {

        let buscarSigla = siglaUF
        let dadosEstados = {}
        let uf
        let descricao
        let capital
        let regiao

        estadosUF.forEach(function (itemUF) {
                if (!buscarSigla) {
                        return false
                }
                if (String(buscarSigla).toUpperCase() == itemUF.sigla) {
                        uf = itemUF.sigla
                        descricao = itemUF.nome
                        capital = itemUF.capital
                        regiao = itemUF.regiao
                }

        })

        dadosEstados = {
                uf,
                descricao,
                capital,
                regiao
        }
        console.log(dadosEstados)




}

getDadosEstado('ba')


//console.log(getListaDeEstados())