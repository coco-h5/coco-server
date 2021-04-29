const Controller = require('egg').Controller;


class ProjectController extends Controller {

  async createProject() {
    const {params, model, service} = this.ctx;
    const {pageConfig} = params;
    const {
      gitName: name,
      templateName,
      templateGit,
      templateId,
      version,
    } = pageConfig.config;

    // todo 重要： 本地环境记得注释回回来！！！
    // 创建项目
    // github 上创建项目
    // const result = await service.project.createProject({
    //   ...pageConfig.config,
    //   name,
    //   data: pageConfig,
    //   templateConfig: {
    //     templateName,
    //     git: templateGit,
    //   }
    // });
    // todo 重要：本地环境注释，result为mock结果
    const result = {}

    // 数据库存储项目基础信息
    const project = await model.Project.create({
      templateId,
      name,
      pageConfig: JSON.stringify(pageConfig),
      gitConfig: JSON.stringify(result),
      version,
    });

    this.ctx.body = {
      success: true,
      result: project,
    }
  }
  async query() {
    const {
      id,
    } = this.ctx.params;
    const where = {};
    if (id) where.id = id;
    const result = await this.ctx.model.Project.findAll({
      where,
      order: [
        // 将转义 title 并针对有效方向列表进行降序排列
        ['updatedAt', 'DESC'],
      ]
    })
    result.forEach(project => {
      project.pageConfig = JSON.parse(project.pageConfig)
      project.gitConfig = JSON.parse(project.gitConfig)
      project.releaseInfo = JSON.parse(project.releaseInfo)
    })
    this.ctx.body = {
      success: true,
      result
    }
  }
  async preview() {
    const {
      id,
    } = this.ctx.params;
    const where = {
      id,
    };
    const {dataValues: project} = await this.ctx.model.Project.findOne({
      where,
    });
    const page = JSON.parse(project.pageConfig)
    this.ctx.body = {
      success: true,
      result: {
        ...page,
        components: page.userSelectComponents,
        pageData: page.config,
      },
    }
  }

}

module.exports = ProjectController;
