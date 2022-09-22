const { validate, Joi } = require("express-validation");

module.exports = validate({
  params: Joi.object({
    id: Joi.string().required(),
  }),
  body: Joi.object({
    nome: Joi.string(),
    senha: Joi.string().min(8),
    email: Joi.string().email(),
    linkedin: Joi.string().email(),
    github: Joi.string().email(),
  }),
});
