import { Favorite } from "../migrations/entities/favorite.entity";
import { FavoriteService } from "../services/favorite.service";

const favoriteService = new FavoriteService()

export async function alertNewFavoriteLength(userId: string): Promise<void> {
    const newLength = (await favoriteService.listFavoriteByUserId(userId)).length

    // axios 
}