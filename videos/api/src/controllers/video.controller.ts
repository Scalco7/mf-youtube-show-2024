import Joi from "joi";
import { VideoService } from "../services/video.service";
import { IListVideosResponse, IVideosData } from "../types/listVideosResponse";

interface ISearchYoutubeVideosData {
  userId: string;
  videoTitle: string;
  nextPageToken?: string;
}

export class VideosController {
  private VideoService: VideoService;

  constructor() {
    this.VideoService = new VideoService();
  }

  public async searchYoutubeVideos(
    data: ISearchYoutubeVideosData,
  ): Promise<IListVideosResponse> {
    try {
      Joi.assert(data.userId, Joi.string().required());
    } catch (error) {
      throw error;
    }

    const videosList = await this.VideoService.searchYoutubeVideos(
      data.userId,
      data.videoTitle,
      12,
      data.nextPageToken,
    );
    return videosList;
  }

  public async listFavoriteVideos(userId: string): Promise<IVideosData[]> {
    try {
      Joi.assert(userId, Joi.string().required());
    } catch (error) {
      throw error;
    }

    const videosList = await this.VideoService.listFavoriteVideos(userId);
    return videosList;
  }
}
