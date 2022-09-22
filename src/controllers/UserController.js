const { User, Post } = require("../models");
const bcrypt = require("bcryptjs");

//req.user propriedade passada pelo express após validação

const UsuarioController = {
  async store(req, res) {
    const { nome, email, senha, linkedin, github } = req.body;

    const usuario = await User.findAll({
      where: { email, linkedin, github },
    });

    if (!usuario) {
      return res.status(409).json("Dados já cadastrados");
    }

    const newSenha = bcrypt.hashSync(senha, 10);

    const newUser = await User.create({
      nome,
      email,
      senha: newSenha,
      linkedin,
      github,
      green_star: 0,
    });

    return res.status(201).json(newUser);
  },

  async index(req, res) {
    const users = await User.findAll({
      include: Post,
    });
    return res.status(200).json(users);
  },

  async show(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);
    return res.status(200).json(user);
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, email, linkedin, github } = req.body;

    if (!id) return res.status(400).json("id não enviado");

    const user = await User.update(
      {
        nome,
        email,
        linkedin,
        github,
      },
      {
        where: {
          id,
        },
      }
    );
    res.json("Usuário Atualizado");
  },

  async delete(req, res) {
    const { id } = req.params;

    await User.destroy({
      where: {
        id,
      },
    });

    return res.status(204).json("Removido");
  },
};

module.exports = UsuarioController;
