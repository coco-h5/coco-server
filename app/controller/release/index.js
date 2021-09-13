const Controller = require('egg').Controller;
/**
 * @Controller Release
 */
class ReleaseController extends Controller {
  /**
   * @Router get /release/query
   * @Description 查询发布版本信息
   */
  async query() {
    const {model} = this.ctx;
    const result = await model.Release.findAll(
      {
        order: [
          ['id', 'DESC']
        ]
      }
    );

    return this.ctx.body = {
      success: true,
      result
    }
  }

  /**
   * @Router post /release/create
   * @request body ReleaseItem params
   * @Description 添加发布记录
   */
  async create() {
    const {model, params} = this.ctx;

    const result = await model.Release.create({
      version: params.version,
      downloadUrl: params.downloadUrl,
      msg: params.msg
    });

    return this.ctx.body = {
      success: true,
      result
    }
  }
}

module.exports = ReleaseController;
