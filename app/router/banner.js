module.exports = app => {
  const {router, controller} = app;

  router.get('/banner/query', controller.banner.index.query);
}
