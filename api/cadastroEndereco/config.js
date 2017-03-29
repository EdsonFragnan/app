var controller = require('./controller');
module.exports.config = {
  method: "POST",
  path: "/cadastro/cliente",
  config: {
    handler: controller.cadastro,
    description: 'Cadastro endereço.',
    notes: 'Cadastro endereço.',
    tags: ['api', 'cliente']
  }
}
