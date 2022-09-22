const { Category } = require("../models");

const CategoryController = {
  async index(req, res) {
    const category = await Category.findAll(req.body);
    console.log(category);
    return res.json(category);
  },
};

module.exports = CategoryController;
