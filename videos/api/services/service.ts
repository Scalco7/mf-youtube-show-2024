import axios from "axios"

export class Service {
    public async searchYoutubeVideos(userId: string, videoTitle: string): Promise<any[]> {
        let favoritesList;

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

        try {
            const apiKey = process.env.YOUTUBE_API_KEY
            const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${videoTitle}&key=${apiKey}`
            const youtubeVideos = await axios.get(apiUrl)
            console.log(youtubeVideos)

        } catch (error) {
            throw (error)
        }

        return []
    }
}