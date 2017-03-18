var controller = require('./controller');
module.exports.config = {
  method: "POST",
  path: "/jsontoxml",
  config: {
    handler: controller.convert,
    plugins: {
      'hapi-swagger': {
          payloadType: 'form'
      }
    },
    description: 'Convert Json para XML.',
    notes: 'Convert Json para XML.',
    tags: ['api']
  }
}
