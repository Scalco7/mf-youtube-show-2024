export interface IListVideosByTitleResponse {
    videos: IVideoDataResponse[]
}

export interface IVideoDataResponse {
    videoId: string;
    title: string;
    description: string;
    thumbnail: IThumbnailsData;
    favorite: boolean;
}

export interface IThumbnailsData {
    url: string;
    width: number;
    height: number;
}