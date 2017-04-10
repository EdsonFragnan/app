const controller = require('./controller');
module.exports.config = {
  method: "GET",
  path: "/cliente/lista/{cpf?}",
  config: {
    handler: controller.listaCliente,
    description: 'Encontrar cliente pelo cpf.',
    notes: 'Encontrar cliente pelo cpf.',
    tags: ['api', 'cliente']
  }
}
