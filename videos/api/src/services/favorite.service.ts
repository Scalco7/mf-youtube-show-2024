export class FavoriteService {
    public listFavoriteVideosByUserId() {
        try {
            const apiUrl = `${process.env.API_URL}/favorites/${userId}`
            const request = await axios.get(apiUrl, {
                headers: {
                    'Authorization': 'Bearer ' + process.env.API_KEY
                }
            })

            favoritesList = request.data.favorites
        } catch (error) {
            throw (error)
        }
    }
}