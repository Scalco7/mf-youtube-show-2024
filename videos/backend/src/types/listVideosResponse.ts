import { IThumbnailsData } from "./youtubeData";

export interface IListVideosResponse {
  nextPageToken: string
  videos: IVideosData[]
}

export interface IVideosData {
  videoId: string;
  title: string;
  description: string;
  thumbnail: IThumbnailsData;
  favorite: boolean;
}
