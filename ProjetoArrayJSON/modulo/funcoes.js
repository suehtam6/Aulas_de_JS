/*************************************************************************************
 * Objetivo: Manipular dados dos Estados do Brasil
 * Autor: Matheus Lucas
 * Data: 18/03/2026
 * Versão: 1.0
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

getListaDeEstados()