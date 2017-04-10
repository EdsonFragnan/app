const controller = require('./controller');
module.exports.config = {
  method: "GET",
  path: "/cliente/todosClientes",
  config: {
    handler: controller.listarClientes,
    description: 'Listar todos os clientes.',
    notes: 'Listar todos os clientes.',
    tags: ['api', 'cliente']
  }
}
