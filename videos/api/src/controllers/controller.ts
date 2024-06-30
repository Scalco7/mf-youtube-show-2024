import { Service } from "../services/service"
import { searchYoutubeVideosDataValidator } from "../validators/validators"

interface ISearchYoutubeVideosData {
    userId: string
    videoTitle: string
}

export class Controller {
    private service: Service

    constructor() {
        this.service = new Service()
    }

    public async searchYoutubeVideos(data: ISearchYoutubeVideosData): Promise<any[]> {
        const { error } = searchYoutubeVideosDataValidator.validate(data)

        if (error)
            throw (error.message)

        const videosList = await this.service.searchYoutubeVideos(data.userId, data.videoTitle)
        return videosList
    }
}