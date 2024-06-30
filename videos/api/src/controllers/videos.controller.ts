import Joi from "joi"
import { VideosService } from "../services/videos.service"
import { IListVideosResponse } from "../types/listVideosResponse"

interface ISearchYoutubeVideosData {
    userId: string
    videoTitle: string
}

export class VideosController {
    private service: VideosService

    constructor() {
        this.service = new VideosService()
    }

    public async searchYoutubeVideos(data: ISearchYoutubeVideosData): Promise<IListVideosResponse[]> {
        try {
            Joi.assert(data.userId, Joi.string().required())
        } catch (error) {
            throw (error)
        }

        const videosList = await this.service.searchYoutubeVideos(data.userId, data.videoTitle)
        return videosList
    }
}