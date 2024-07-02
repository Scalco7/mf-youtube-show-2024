import axios from "axios";
import { FavoriteService } from "../services/favorite.service";

const favoriteService = new FavoriteService()

export async function alertNewFavoriteLength(userId: string): Promise<void> {
    try {
        const newLength = (await favoriteService.listFavoriteByUserId(userId)).length
        const url = `${process.env.DRAWER_API_URL}/update-favorites-length`
        const body = {
            userId,
            newLength
        }
        axios.post(url, body)
    } catch (error) {
        console.log(error)
    }
}