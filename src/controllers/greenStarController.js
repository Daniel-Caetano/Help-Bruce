const { User, Comment, Post } = require("../models");
const { Sequelize } = require("sequelize");

const GreenStarController = {
  async register(req, res) {
    const { id } = req.auth;

    const { comment_id } = req.params;

    const comentario = await Comment.findByPk(comment_id);

    const post = await Post.findByPk(comentario.dataValues.post_id);

    if (id != post.dataValues.user_id) {
      return res.status(401).json("Você não é o criador do problema");
    }

    const user = await User.update(
      {
        green_star: Sequelize.literal("green_star + 1"),
      },
      {
        where: {
          id: comentario.dataValues.user_id,
        },
      }
    );

    return res.status(200).json(`usuário recebeu uma GreenStar`);
  },
};

module.exports = GreenStarController;
