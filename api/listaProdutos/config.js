const controller = require('./controller');
module.exports.config = {
  method: "GET",
  path: "/produto/lista/produtos",
  config: {
    handler: controller.listarProdutos,
    description: 'Lista todos os produtos.',
    notes: 'Lista todos os produtos.',
    tags: ['api', 'produto'],
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with']
    }
  }
}
