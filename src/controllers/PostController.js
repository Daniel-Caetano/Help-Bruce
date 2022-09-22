const { Post, Comment } = require("../models");

const PostController = {
  async store(req, res) {
    const { title, description, category_id } = req.body;

    const newPost = await Post.create({
      title,
      description,
      user_id: req.auth.id,
      category_id,
    });

    return res.status(201).json(newPost);
  },

  async index(req, res) {
    const posts = await Post.findAll({
      include: Comment,
    });
    return res.status(200).json(posts);
  },

  async show(req, res) {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    return res.status(200).json(post);
  },

  async update(req, res) {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!id) return res.status(400).json("id não enviado");

    const post = await Post.update(
      {
        title,
        description,
      },
      {
        where: {
          id,
        },
      }
    );
    res.json("Post Atualizado");
  },

  async delete(req, res) {
    const { id } = req.params;

    await Post.destroy({
      where: {
        id,
      },
    });

    return res.status(204).json("Removido");
  },
};

module.exports = PostController;
