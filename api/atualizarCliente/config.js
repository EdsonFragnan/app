const controller = require('./controller');
module.exports.config = {
  method: "PUT",
  path: "/cliente/alterar",
  config: {
    handler: controller.alterar,
    description: 'Alterar dados cliente.',
    notes: 'Alterar dados cliente.',
    tags: ['api', 'cliente']
  }
}
