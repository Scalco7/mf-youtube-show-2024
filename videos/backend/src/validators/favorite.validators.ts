import Joi from "joi";

export const favoriteDataValidator = Joi.object({
  userId: Joi.string().required(),
  videoId: Joi.string().required(),
});

export const listFavoritesDataValidator = Joi.object({
  userId: Joi.string().required(),
});
