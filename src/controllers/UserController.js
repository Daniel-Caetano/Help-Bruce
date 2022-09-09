import User from "../models/user";

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);
    console.log(user);
    return res.json(user);
  }

  async index(req, res) {
    const user = await User.findAll({
      include:["posts"]
    });
    return res.json(user);
  }

  async update(req, res) {
    let user = await User.findByPk(req.params.id);
    user = await user.update(req.body);
    return res.json(user);
  }
  async delete(req, res) {
    let user = await User.findByPk(req.params.id);
    user = await user.destroy(req.body);
    return res.json(User);
  }
  async show(req, res) {
    let user = await User.findByPk(req.params.id);
    return res.json(user);
  }
}

export default new UserController();
