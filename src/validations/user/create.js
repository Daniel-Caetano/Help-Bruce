const { validate, Joi } = require("express-validation");

module.exports = validate({
  
  body: Joi.object({
    nome: Joi.string().required(),
    senha: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    linkedin: Joi.string().email().required(),
    github: Joi.string().email().required(),
  }),
});
