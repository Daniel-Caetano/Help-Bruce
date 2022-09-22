const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    category_id: Joi.number().required(),
  }),
});
