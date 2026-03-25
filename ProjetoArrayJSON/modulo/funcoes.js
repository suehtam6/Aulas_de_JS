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
        let uf
        let descricao
        let capital
        let regiao
        estadosUF.forEach(function (itemUF) {

                if (buscarSigla == itemUF.sigla) {
                        uf = itemUF.sigla
                        descricao = itemUF.nome
                        capital = itemUF.capital
                        regiao = itemUF.regiao
                } else {
                        return false
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
                if (String(dados).toUpperCase() === String(itensDados).toUpperCase()) {
                        dadosCapital = {
                                uf: itensDados.uf,
                                descricao: itensDados.descricao,
                                capital: itensDados.capital
                        }
                } else {
                        return false
                }

        })

        return dadosCapital
}

// verificando os dados de acordo com a região
function getEstadosRegiao(buscarRegiao) {
        let regiaoMod = String(buscarRegiao).toUpperCase()
        let estados = []



        estadosUF.forEach(function (itemRegiao) {
                if (!isNaN(regiaoMod) || regiaoMod == '') {
                        return false
                }
                if(regiaoMod === String(itemRegiao.regiao).toUpperCase()) {
                        uf = itemRegiao.sigla
                        descricao = itemRegiao.nome

                        jonson = {
                                uf, descricao
                        }

                        estados.push(jonson)

                        estadoRegiao = {
                                regiao: itemRegiao.regiao,
                                estados
                        }
                        return false
                }

        })

        if(estadoRegiao == null || regiaoMod == '' || regiaoMod == null || !isNaN(regiaoMod) ){
                return false
        }else{
                return estadoRegiao
        }

        

}

// FUNÇÃO PARA SABER QUAIS SÃO TODAS AS CAPITAIS QUE O BRASIL JA TEVE
function getCapitalPais() {

        let capitalPais = { capitais: [] }

        estadosUF.forEach(function (itemCapital) {
                if (itemCapital.capital_pais) {

                        capitalPais.capitais.push({

                                capital_atual: itemCapital.capital_pais.capital,
                                uf: itemCapital.sigla,
                                descricao: itemCapital.nome,
                                capital: itemCapital.capital,
                                regiao: itemCapital.regiao,
                                capital_pais_ano_inicio: itemCapital.capital_pais.ano_inicio,
                                capital_pais_ano_fim: itemCapital.capital_pais.ano_fim

                        })
                }
        })
        if(capitalPais == null){
                return false
        }else{
                return capitalPais
        }
        

}

// FUNÇÃO PARA BUSCAR AS CIDADES DE CADA ESTADO
function getCidades(sigla) {
        let resposta = {}
        let cidade = []
        let siglaUF = String(sigla).toUpperCase()

        estadosUF.forEach(function (itemCidade) {

                if (siglaUF == String(itemCidade.sigla).toUpperCase()) {
                        resposta = {
                                uf: itemCidade.sigla,
                                descricao: itemCidade.nome,
                                quantidade: itemCidade.cidades.length

                        }

                        itemCidade.cidades.forEach(function (cidadesEstado) {
                                cidades = cidadesEstado.nome
                                cidade.push(cidades)

                        })
                        resposta.cidades = cidade
                }


        })
        if(resposta == null || siglaUF == '' || siglaUF == null || !isNaN(siglaUF) || siglaUF != resposta.uf){
                return false
        }else{
                return resposta
        }
        
        
}

//console.log(getCidades('a'))
//console.log(getCapitalEstado('sp'))
//console.log(getDadosEstado('ba'))
//console.log(getListaDeEstados())
console.log(getEstadosRegiao('sul'))
//console.log(getCapitalPais())


