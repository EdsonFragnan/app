module.exports = ConfigImpl;
function ConfigImpl(res) {
  //var controllerImpl = new Controller();
  res = {
    method: "GET",
    path: "/apiCep3",
    handler: (request, reply) => { reply('OK'); },
    description: 'Busca CEP 3.',
    notes: 'Busca CEP 3.',
    tags: ['api']
  }
  return res;
}
