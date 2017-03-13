module.exports = ConfigImpl;
function ConfigImpl(res) {
  //var controllerImpl = new Controller();
  res = {
    method: "GET",
    path: "/apiCep2",
    handler: (request, reply) => { reply('OK'); },
    description: 'Busca CEP 2.',
    notes: 'Busca CEP 2.',
    tags: ['api']
  }
  return res;
}
