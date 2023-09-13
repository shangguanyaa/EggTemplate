'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async admin() {
    this.ctx.body = 'hello admin';
  }
}

module.exports = AdminController;
