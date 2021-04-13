module.exports = app => {
  const { router, controller } = app;
  router.post('/component/add', controller.component.index.addComponent);
  router.post('/component/update', controller.component.index.updateComponent);
  router.get('/component/query', controller.component.index.query);
};
