const controller = require('./controller');
module.exports.config = {
  method: "PUT",
  path: "/produto/alterar/{id_produto?}",
  config: {
    handler: controller.alterar,
    description: 'Alterar dados do produto.',
    notes: 'Alterar dados do produto.',
    tags: ['api', 'produto'],
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with']
    }
  }
}
