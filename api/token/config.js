var controller = require('./controller');
module.exports.config = {
  method: "GET",
  path: "/token",
  config: {
    handler: controller.buscacep,
    description: 'Gerador de token.',
    notes: 'Gerador de token.',
    tags: ['api']
  }
}
