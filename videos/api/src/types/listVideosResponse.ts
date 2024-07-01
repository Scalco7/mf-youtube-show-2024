import { IThumbnailsData } from "./youtubeData";

export interface IListVideosResponse {
  videoId: string;
  title: string;
  description: string;
  thumbnail: IThumbnailsData;
  favorite: boolean;
}
