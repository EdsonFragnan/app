var controller = require('./controller');
module.exports.config = {
  method: "GET",
  path: "/async/series",
  config: {
    handler: controller.asyncSeries,
    description: 'Async series.',
    notes: 'Async series.',
    tags: ['api', 'async']
  }
}
