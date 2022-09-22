const { Comment } = require("../models");

const CommentController = {
  async store(req, res) {
    const { description, post_id, user_id } = req.body;

    const newComment = await Comment.create({
      description,
      post_id,
      user_id: req.auth.id,
      green_star: false,
    });

    return res.status(201).json(newComment);
  },

  async index(req, res) {
    const comment = await Comment.findAll();
    return res.status(200).json(comment);
  },

  async show(req, res) {
    const { id } = req.params;
    const comment = await Comment.findByPk(id);
    return res.status(200).json(comment);
  },

  async update(req, res) {
    const { id } = req.params;
    const { description, post_id } = req.body;

    if (!id) return res.status(400).json("id não enviado");

    const comment = await Comment.update(
      {
        description,
      },
      {
        where: {
          id,
          post_id,
        },
      }
    );

    res.json("Comentário Atualizado");
  },

  async delete(req, res) {
    const { id } = req.params;

    await Comment.destroy({
      where: {
        id,
      },
    });

    return res.status(204).json("Comentário Removido");
  },
};

module.exports = CommentController;
