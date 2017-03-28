var controller = require('./controller');
module.exports.config = {
  method: "GET",
  path: "/token/decode",
  config: {
    handler: controller.buscacep,
    description: 'Gerador de decode.',
    notes: 'Gerador de decode.',
    tags: ['api', 'token']
  }
}
