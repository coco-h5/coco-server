const Controller = require('egg').Controller;

const formatWhereCase = (params) => {
  const where = {};
  Object.keys(params).forEach(key => {
    if (params[key]) {
      where[key] = params[key];
    }
  });
  return where;
};

class ComponentController extends Controller {
  async query() {
    const {id, gitUrl} = this.ctx.params;

    const where = formatWhereCase({id, gitUrl});
    this.ctx.body = {
      success: true,
      result: await this.ctx.model.Component.findAll({
        where
      }),
    }
  }

  async updateComponent() {
    const {model} = this.ctx;
    const {params} = this.ctx
    const {id, gitUrl} = params;
    const where = formatWhereCase({id, gitUrl});
    try {
      const result = await model.Component.update(params, {
        where,
      });
      this.ctx.body = {
        success: true,
        result,
      }
    } catch(e) {
      console.log(e)
    }
  }

  async addComponent() {
    const {
      gitUrl,
      name,
      description,
      config,
      status = 0,
    } = this.ctx.params;
    if (gitUrl && name) {
      try {
        // todo 先查是否存在同名组件
        console.log(this.ctx.model.Component)
        const result = await this.ctx.model.Component.create({
          gitUrl,
          config,
          description,
          name,
          status
        })

        this.ctx.body = {
          success: true,
          result,
        };
      } catch (e) {
        console.log(e)
        this.ctx.status = 500;
        this.ctx.body = {
          success: false,
          result: e
        };
      }
    } else {
      this.ctx.status = 500;
      this.ctx.body = {
        success: false,
        result: {
          message: 'gitUrl || name 必填'
        }
      };
    }
  }
}

module.exports = ComponentController;
