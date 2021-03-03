module.exports = app => {
  const {router, controller} = app;

  router.get('/project/query', controller.project.index.query);
  router.post('/project/createProject', controller.project.index.createProject);
}