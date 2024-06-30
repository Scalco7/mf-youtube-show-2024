import Joi from "joi";

export const searchYoutubeVideosDataValidator = Joi.object({
    userId: Joi.string().required(),
    videoTitle: Joi.string().required(),
})

