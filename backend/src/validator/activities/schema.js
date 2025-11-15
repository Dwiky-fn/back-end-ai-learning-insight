const Joi = require('joi');

const ActivitiesPayloadSchema = Joi.object({
  userId: Joi.string().required(),
  contentType: Joi.string().required(),
  duration: Joi.number().integer().min(1).required(),
});

module.exports = ActivitiesPayloadSchema;
