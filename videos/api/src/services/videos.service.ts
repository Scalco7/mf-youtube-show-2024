import axios from "axios"
import { IYoutubeVideoListData } from "../types/youtubeData";
import { IListVideosResponse } from "../types/listVideosResponse";
import { FavoriteService } from "./favorite.service";

export class VideosService {
    private favoriteService: FavoriteService

    constructor() {
        this.favoriteService = new FavoriteService()
    }

    public async searchYoutubeVideos(userId: string, videoTitle: string): Promise<IListVideosResponse[]> {
        let favoritesList: string[];
        let videosList: IYoutubeVideoListData;

        try {
            favoritesList = await this.favoriteService.listFavoriteVideosByUserId(userId)
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