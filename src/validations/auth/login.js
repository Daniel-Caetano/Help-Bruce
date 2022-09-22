const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    email: Joi.string().email().required(),
    senha: Joi.string().required(),

    //Por questão de segurança não informamos a quantidade min de caracteres da senha
  }),
});
