export interface IThumbnailsData {
  url: string;
  width: number;
  height: number;
}

export interface IYoutubeVideoData {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  } | string;
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: IThumbnailsData;
      medium: IThumbnailsData;
      high: IThumbnailsData;
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: Date;
  };
}

export interface IYoutubeVideoListData {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: IYoutubeVideoData[];
}