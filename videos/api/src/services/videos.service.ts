import axios from "axios"
import { IYoutubeVideoListData } from "../types/youtubeData";
import { IListVideosResponse } from "../types/listVideosResponse";

export class VideosService {
    public async searchYoutubeVideos(userId: string, videoTitle: string): Promise<IListVideosResponse[]> {
        let favoritesList: string[];
        let videosList: IYoutubeVideoListData;

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
            const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${videoTitle}&key=${apiKey}`

            videosList = (await axios.get(apiUrl)).data
        } catch (error) {
            throw (error)
        }

        const response: IListVideosResponse[] = videosList.items.map((video) => ({
            videoId: video.id.videoId,
            title: video.snippet.title,
            description: video.snippet.description,
            thumbnail: video.snippet.thumbnails.default,
            favorite: favoritesList.includes(video.id.videoId)
        }))

        return response
    }
}