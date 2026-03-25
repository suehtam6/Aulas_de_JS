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
        let uf = []

        estadosUF.forEach(function (itemUF) {
                uf.push(itemUF.sigla)
        })

        estadosSiglas = { uf, 'quantidade': uf.length }
        return estadosSiglas

}

// Verificando os dados do estado de acordo com a UF
function getDadosEstado(siglaUF) {
        let buscarSigla = String(siglaUF).toUpperCase()
        let dadosEstados = {}
        estadosUF.forEach(function (itemUF) {
                
                if (buscarSigla == itemUF.sigla) {
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
        return dadosEstados
}

// Verificando os dados da capital de acordo com a UF
function getCapitalEstado(siglaUF) {
        let buscarSigla = String(siglaUF).toUpperCase()
        let dados = [getDadosEstado(buscarSigla)]

        dados.forEach(function (itensDados) {
                uf = itensDados.uf
                descricao = itensDados.descricao
                capital = itensDados.capital
        })
        dadosCapital = { uf, descricao, capital }
        return dadosCapital
}

// verificando os dados de acordo com a região
function getEstadosRegiao(buscarRegiao) {
        let regiaoMod = String(buscarRegiao).toUpperCase()
        let estados = []

        estadosUF.forEach(function (itemRegiao) {

                if (regiaoMod === String(itemRegiao.regiao).toUpperCase()) {
                        uf = itemRegiao.sigla
                        descricao = itemRegiao.nome
                        regiao = itemRegiao.regiao

                        jonson = {
                                uf, descricao
                        }

                        estados.push(jonson)
                }

        })

        estadoRegiao = {
                regiao,
                estados
        }

        return estadoRegiao
}

function getCapitalPais() {

        let capitalPais = {capitais : []}

        estadosUF.forEach(function(itemCapital){
                if(itemCapital.capital_pais){
                        capitalPais.capitais.push({
                                capital_atual : itemCapital.capital_pais.capital,
                                uf : itemCapital.sigla,
                                descricao : itemCapital.nome,
                                capital : itemCapital.capital,
                                regiao : itemCapital.regiao,
                                capital_pais_ano_inicio : itemCapital.capital_pais.ano_inicio,
                                capital_pais_ano_fim : itemCapital.capital_pais.ano_fim
                        })
                }
        })
        return capitalPais
       
}


//getCapitalEstado('Sp')
//getDadosEstado('ba')
//console.log(getListaDeEstados())
//console.log(getEstadosRegiao('sudeste'))
//console.log(getCapitalPais())