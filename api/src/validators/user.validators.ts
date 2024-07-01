import Joi from "joi";

export const userDataValidator = Joi.object({
  name: Joi.string().required().min(5),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
});
