'use strict';

const http = require('http');
const Boom = require('boom');
const db = require('../../metodos/metodos.js');

module.exports.alterar = (req, res) => {
    try {
      const request = {
        id_produto: req.params.id_produto,
        nome_produto: req.payload.nome_produto,
        preco_produto: req.payload.preco_produto,
        descricao_produto: req.payload.descricao_produto,
        tamanho_memoria: req.payload.tamanho_memoria,
        tipo_transmissao: req.payload.tipo_transmissao,
        quantidade_produto: req.payload.quantidade_produto,
        marca_produto: req.payload.marca_produto,
        fabricante_produto: req.payload.fabricante_produto,
        data_entrada_produto: req.payload.data_entrada_produto,
        imagem_produto: req.payload.imagem_produto
      };
      db.updateOne(request, 'produtos', 'produto', (err, data) => {
        if (err) {
          res(Boom.badData(err))
        } else {
          res(data.result);
        }
      });
    } catch (e) {
      res(Boom.serverUnavailable('Erro Interno no servidor.'))
    }
}
