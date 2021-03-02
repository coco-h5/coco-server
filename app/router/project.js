module.exports = app => {
  const {router, controller} = app;

  router.get('/project/query', controller.project.index.query);
}