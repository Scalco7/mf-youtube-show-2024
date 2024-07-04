import Joi from "joi";

export const loginDataValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
});

export const registerDataValidator = Joi.object({
  name: Joi.string().required().min(5),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
});
