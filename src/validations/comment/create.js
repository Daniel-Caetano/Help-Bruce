const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    description: Joi.string().required(),
    post_id: Joi.number().required(),
  }),
});
