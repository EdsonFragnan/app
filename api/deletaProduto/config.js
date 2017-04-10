const controller = require('./controller');
module.exports.config = {
  method: "DELETE",
  path: "/produto/deletar/{id_produto?}",
  config: {
    handler: controller.deletar,
    description: 'Deletar produto pelo id.',
    notes: 'Deletar produto pelo id.',
    tags: ['api', 'produto'],
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with']
    }
  }
}
