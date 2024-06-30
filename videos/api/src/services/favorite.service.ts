import axios from "axios"

export class FavoriteService {
    public async listFavoriteVideosByUserId(userId: string): Promise<string[]> {
        try {
            const apiUrl = `${process.env.API_URL}/favorites/${userId}`
            const request = await axios.get(apiUrl, {
                headers: {
                    'Authorization': 'Bearer ' + process.env.API_KEY
                }
            })

            return request.data.favorites
        } catch (error) {
            throw (error)
        }
    }
}