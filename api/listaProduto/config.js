const controller = require('./controller');
module.exports.config = {
  method: "GET",
  path: "/produto/lista/{id_produto?}",
  config: {
    handler: controller.listaProduto,
    description: 'Lista produto pelo id.',
    notes: 'Lista produto pelo id.',
    tags: ['api', 'produto']
  }
}
