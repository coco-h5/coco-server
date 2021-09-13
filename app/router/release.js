module.exports = app => {
  const {router, controller} = app;

  router.get('/release/query', controller.release.index.query);
  router.post('/release/create', controller.release.index.create);
}
