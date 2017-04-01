const controller = require('./controller');
module.exports.config = {
  method: "POST",
  path: "/cliente/cadastro",
  config: {
    handler: controller.cadastro,
    description: 'Cadastro cliente.',
    notes: 'Cadastro cliente.',
    tags: ['api', 'cliente']
  }
}
