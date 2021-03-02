

class AppBootHook {
    constructor(app) {
      this.app = app;
    }

    willReady() {
      this.app.model.sync();
    }
  }
  
  module.exports = AppBootHook;