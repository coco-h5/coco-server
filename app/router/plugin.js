module.exports = app => {
  const {router, controller} = app;

  router.get('/plugin/query', controller.plugin.index.query);
}
