import axios from "axios"

export class Service {
    public async countFavoritesByUserId(userId: string): Promise<number> {
        try {
            const apiUrl = `${process.env.API_URL}/favorites/${userId}`
            const request = await axios.get(apiUrl, {
                headers: {
                    'Authorization': 'Bearer ' + process.env.API_KEY
                }
            })

            return request.data.favorites.length
        } catch (error) {
            throw (error)
        }
    }
}