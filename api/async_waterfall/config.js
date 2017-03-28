var controller = require('./controller');
module.exports.config = {
  method: "GET",
  path: "/async/waterfall",
  config: {
    handler: controller.buscacep,
    description: 'Async waterfall.',
    notes: 'Async waterfall.',
    tags: ['api', 'async']
  }
}
