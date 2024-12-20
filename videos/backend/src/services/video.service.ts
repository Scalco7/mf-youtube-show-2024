import axios from "axios";
import { IYoutubeVideoListData } from "../types/youtubeData";
import { IListVideosResponse, IVideosData } from "../types/listVideosResponse";
import { FavoriteService } from "./favorite.service";

export class VideoService {
  private favoriteService: FavoriteService;
  private urlBaseApiYt = (params: string, apiYtKey: string) => `https://www.googleapis.com/youtube/v3/${params}&key=${apiYtKey}`

  constructor() {
    this.favoriteService = new FavoriteService();
  }

  public async searchYoutubeVideos(
    userId: string,
    videoTitle: string,
    maxResults: number,
    nextPageToken?: string
  ): Promise<IListVideosResponse> {
    let favoritesList: string[];
    let videosResponse: IYoutubeVideoListData;

    try {
      favoritesList =
        await this.favoriteService.listFavoriteVideosByUserId(userId);
    } catch (error) {
      throw error;
    }

    try {
      const apiYtKey = process.env.YOUTUBE_API_KEY ?? '';
      const params = `search?part=snippet&type=video&q=${videoTitle}&maxResults=${maxResults}${nextPageToken ? `&pageToken=${nextPageToken}` : ''}`;

      videosResponse = (await axios.get(this.urlBaseApiYt(params, apiYtKey))).data;
    } catch (error) {
      throw error;
    }

    const formattedResponse: IVideosData[] = videosResponse.items.map((video) => {
      const videoId: string = typeof video.id == "string" ? video.id : video.id.videoId

      return {
        videoId: videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.medium,
        favorite: favoritesList.includes(videoId),
      }
    });

    return {
      nextPageToken: videosResponse.nextPageToken,
      videos: formattedResponse
    };
  }

  public async listFavoriteVideos(
    userId: string,
  ): Promise<IVideosData[]> {
    let favoritesList: string[];
    let videosResponse: IYoutubeVideoListData;

    try {
      favoritesList =
        await this.favoriteService.listFavoriteVideosByUserId(userId);
    } catch (error) {
      throw error;
    }

    try {
      const apiYtKey = process.env.YOUTUBE_API_KEY ?? '';
      const params = `videos?part=snippet&id=${favoritesList.join(',')}`

      videosResponse = (await axios.get(this.urlBaseApiYt(params, apiYtKey))).data;
    } catch (error) {
      throw error;
    }

    const formattedResponse: IVideosData[] = videosResponse.items.map((video) => {
      const videoId: string = typeof video.id == "string" ? video.id : video.id.videoId

      return {
        videoId: videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.medium,
        favorite: favoritesList.includes(videoId),
      }
    });

    return formattedResponse;
  }
}
