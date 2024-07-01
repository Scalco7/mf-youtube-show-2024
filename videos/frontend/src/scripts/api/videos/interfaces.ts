export interface IListVideosResponse {
    videos: IVideoData[]
}

export interface IVideoData {
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