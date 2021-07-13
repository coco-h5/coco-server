const Controller = require('egg').Controller;
/**
 * @Controller Banner
 */
class BannerController extends Controller {
  /**
   * @Router get /banner/query
   * @Description 查询banner信息
   */
  async query() {
    const {model} = this.ctx;
    const result = await model.Banner.findAll();

    return this.ctx.body = {
      success: true,
      result
    }
  }

  /**
   * @Router post /banner/create
   * @request body BannerItem params
   * @Description 添加banner
   */
  async create() {
    const {model, params} = this.ctx;

    const result = await model.Banner.create({
      src: params.src,
      link: params.link
    });

    return this.ctx.body = {
      success: true,
      result
    }
  }
}

module.exports = BannerController;
