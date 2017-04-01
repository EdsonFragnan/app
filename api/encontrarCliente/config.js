const controller = require('./controller');
module.exports.config = {
  method: "GET",
  path: "/cliente/encontrar/{cpf?}",
  config: {
    handler: controller.encontrar,
    description: 'Encontrar cliente pelo cpf.',
    notes: 'Encontrar cliente pelo cpf.',
    tags: ['api', 'cliente']
  }
}
