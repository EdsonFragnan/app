module.exports = ConfigImpl;
function ConfigImpl(res) {
  //var controllerImpl = new Controller();
  res = {
    method: "GET",
    path: "/apiCep",
    handler: (request, reply) => { reply('OK'); },
    description: 'Busca CEP.',
    notes: 'Busca CEP.',
    tags: ['api']
  }
  return res;
}
