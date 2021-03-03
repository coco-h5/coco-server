const Controller = require('egg').Controller;


class ProjectController extends Controller {

  async createProject() {

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

  async release() {

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
