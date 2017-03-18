const Joi = require('joi');
module.exports.validate = {
  validate: {
    payload: {
      file: Joi.any()
        .meta({ swaggerType: 'file' })
        .description('json file')
    }
  }
}
