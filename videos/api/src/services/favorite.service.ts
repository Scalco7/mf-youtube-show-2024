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

    public async addFavoriteVideo(userId: string, videoId: string): Promise<void> {
        try {
            const apiUrl = `${process.env.API_URL}/favorites/add`
            const request = await axios.post(apiUrl, {
                headers: {
                    'Authorization': 'Bearer ' + process.env.API_KEY
                },
                userId: userId,
                videoId: videoId,
            })

            if (request.data.error)
                throw (request.data.error)
        } catch (error) {
            throw (error)
        }
    }

    public async removeFavoriteVideo(userId: string, videoId: string): Promise<void> {
        try {
            const apiUrl = `${process.env.API_URL}/favorites/remove`
            const request = await axios.delete(apiUrl, {
                headers: {
                    'Authorization': 'Bearer ' + process.env.API_KEY
                },
                data: {
                    userId: userId,
                    videoId: videoId,
                }
            })

            if (request.data.error)
                throw (request.data.error)
        } catch (error) {
            throw (error)
        }
    }
}