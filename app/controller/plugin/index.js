const Controller = require('egg').Controller;
/**
 * @Controller Plugin
 */
class PluginController extends Controller {
  /**
   * @Router get /plugin/query
   * @Description 查询插件信息
   */
  async query() {
    const {model, params} = this.ctx;
    let where = {};
    const {searchText} = params;
    if (searchText) {
      where = {
        title: searchText
      }
    }

    const result = await model.Plugin.findAll({
      where,
      order: [
        ['id', 'DESC']
      ]
    });

    return this.ctx.body = {
      success: true,
      result
    }
  }

  /**
   * @Router post /plugin/create
   * @request body PluginItem params
   * @Response 200 PluginItem ok
   * @Description 创建插件
   */
  async create() {
    const {model, params} = this.ctx;
    const targetGit = params.gitUrl ? params.gitUrl : `github:clouDr-f2e/${params.name}`;
    const has = await model.Plugin.findOne({
      where: {
        gitUrl: targetGit,
      }
    });

    if (has) {
      await model.Plugin.update(params, {
        where: {
          name: params.name
        }
      });
      return this.ctx.body = {
        success: true,
        result: {}
      }
    }

    const result = await model.Plugin.create({
      pluginName: params.pluginName,
      author: params.author,
      logo: params.logo,
      gitUrl: params.gitUrl,
      title: params.title,
      description: params.description,
      version: params.version,
      name: params.name,
    });

    return this.ctx.body = {
      success: true,
      result
    }
  }

  /**
   * @Router post /plugin/update
   * @request body PluginItem params
   * @Description 更新项目
   */
  async update() {
    const {model, params} = this.ctx;
    await model.Plugin.update(params, {
      where: {
        name: params.name
      }
    });

    return this.ctx.body = {
      success: true,
      result: {}
    }
  }
}

module.exports = PluginController;
