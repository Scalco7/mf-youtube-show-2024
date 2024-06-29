import Joi from "joi";
import { Favorite } from "../migrations/entities/favorite.entity";
import { FavoriteService } from "../services/favorite.service";

interface IFavoriteVideoData {
    userId: string
    videoId: string
}

const favoriteDataObjectValidator = Joi.object({
    userId: Joi.string().required(),
    videoId: Joi.string().required()
})

const listFavoritesDataObjectValidator = Joi.object({
    userId: Joi.string().required(),
})

export class FavoriteController {
    private favoriteService: FavoriteService

    constructor() {
        this.favoriteService = new FavoriteService()
    }

    public async addFavoriteVideo(data: IFavoriteVideoData): Promise<Favorite> {
        const { error } = favoriteDataObjectValidator.validate(data)

        if (error)
            throw ('dados inválidos - ' + error)

        const favorite = await this.favoriteService.addFavoriteVideo(data.userId, data.videoId)
        return favorite
    }

    public async removeFavoriteVideo(data: IFavoriteVideoData): Promise<void> {
        const { error } = favoriteDataObjectValidator.validate(data)

        if (error)
            throw ('dados inválidos - ' + error)

        await this.favoriteService.removeFavoriteVideo(data.userId, data.videoId)
    }

    public async listFavoriteByUserId(data: { userId: string }): Promise<string[]> {
        const { error } = listFavoritesDataObjectValidator.validate(data)

        if (error)
            throw ('dados inválidos - ' + error)

        const favoriteList = await this.favoriteService.listFavoriteByUserId(data.userId)
        return favoriteList
    }
}