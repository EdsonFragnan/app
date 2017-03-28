var controller = require('./controller');
module.exports.config = {
  method: "GET",
  path: "/endereco/cep",
  config: {
    handler: controller.buscacep,
    description: 'Busca CEP.',
    notes: 'Busca CEP.',
    tags: ['api', 'endereco']
  }
}
