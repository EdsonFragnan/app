var controller = require('./controller');
module.exports.config = {
  method: "GET",
  path: "/apiCep",
  config: {
    handler: controller.buscacep,
    description: 'Busca CEP.',
    notes: 'Busca CEP.',
    tags: ['api']
  }
}
