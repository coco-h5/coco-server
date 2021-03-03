module.exports = app => {
  const { router, controller } = app;
  router.post('/template/update', controller.template.index.updateTemplate);
  router.get('/template/detail', controller.template.index.query);
  router.get('/template/list', controller.template.index.query);
};