const controller = require('./controller');
module.exports.config = {
  method: "DELETE",
  path: "/cliente/deletar/{cpf?}",
  config: {
    handler: controller.deletar,
    description: 'Deletar cliente.',
    notes: 'Deletar cliente.',
    tags: ['api', 'cliente']
  }
}
