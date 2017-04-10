'use strict';

module.exports = {
  ClassCliente: (request) => {
    const cliente = new Cliente(request);
    return cliente;
  }
};

class Cliente {
    constructor(request) {
      this.nome = request.nome;
      this.sobrenome = request.sobrenome;
      this.cpf = request.cpf;
      this.rg = request.rg;
      this.estado_civil = request.estado_civil;
      this.email = request.email;
      this.logradouro = request.logradouro;
      this.complemento = request.complemento;
      this.bairro = request.bairro;
      this.localidade = request.localidade;
      this.uf = request.uf;
      this.cep = request.cep;
    }
    insertOne() {
      return this;
    }
    insertMany() {
      return;
    }
    updateOne() {
      return this;
    }
    updateMany() {
      return;
    }
    deleteOne() {
      return {
        'cpf': this.cpf
      };
    }
    deleteMany() {
      return;
    }
    findOne() {
      return {
        'cpf': this.cpf
      };
    }
    find() {
      return this;
    }
}
