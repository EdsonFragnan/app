var controller = require('./controller');
module.exports.config = {
  method: "GET",
  path: "/async/parallel",
  config: {
    handler: controller.asyncParallel,
    description: 'Async parallel.',
    notes: 'Async parallel.',
    tags: ['api', 'async']
  }
}
