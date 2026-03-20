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
        let buscarSigla = String(siglaUF).toUpperCase()
        let dadosEstados = {}
        let uf
        let descricao
        let capital
        let regiao
        estadosUF.forEach(function (itemUF) {
                if (!buscarSigla) {
                        return false
                }
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
        let dadosCapital = {}
        dados.forEach(function (itensDados) {
                uf = itensDados.uf
                descricao = itensDados.descricao
                capital = itensDados.capital
        })
        dadosCapital = { uf, descricao, capital }
        return dadosCapital
}


function getEstadosRegiao(buscarRegiao) {
        let estadoRegiao = {}
        let regiaoMod = String(buscarRegiao).toUpperCase()
        let regiao
        let uf
        let descricao
        let estados = []
        let jonson = {}
        
        estadosUF.forEach(function(itemRegiao){
                
                if(regiaoMod === String(itemRegiao.regiao).toUpperCase()){
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
// console.log(getCapitalEstado('Sp'))
//getDadosEstado('ba')
//console.log(getListaDeEstados())
console.log(getEstadosRegiao('sul'))