'use strict';

module.exports = {
  ClassProduto: (request) => {
    const produto = new Produto(request);
    return produto;
  }
};

class Produto {
  constructor(request) {
    this.id_produto = request.id_produto;
    this.nome_produto = request.nome_produto;
    this.preco_produto = request.preco_produto;
    this.descricao_produto = request.descricao_produto;
    this.tamanho_memoria = request.tamanho_memoria;
    this.tipo_transmissao = request.tipo_transmissao;
    this.quantidade_produto = request.quantidade_produto;
    this.marca_produto = request.marca_produto;
    this.fabricante_produto = request.fabricante_produto;
    this.data_entrada_produto = request.data_entrada_produto;
    this.imagem_produto = request.imagem_produto;
  }
  insertOne() {
    return this;
  }
  findOne() {
    return {
      'id_produto': this.id_produto
    };
  }
  deleteOne() {
    return {
      'id_produto': this.id_produto
    };
  }
  find() {
    return this;
  }
}
