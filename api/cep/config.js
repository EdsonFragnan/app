var controller = require('./controller');
module.exports = {
  config: () => {
    res = {
      method: "GET",
      path: "/apiCep",
      handler: controller.buscacep,
      description: 'Busca CEP.',
      notes: 'Busca CEP.',
      tags: ['api']
    }
    return res;
  }
}
