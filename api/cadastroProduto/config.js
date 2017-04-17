const controller = require('./controller');
module.exports.config = {
  method: "POST",
  path: "/produto/cadastro",
  config: {
    handler: controller.cadastroProduto,
    plugins: {
      'hapi-swagger': {
          query: 'form'
      }
    },
    description: 'Cadastro produto.',
    notes: 'Cadastro produto.',
    tags: ['api', 'produto'],
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with']
    }
  }
}
