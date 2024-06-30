export interface IThumbnailsData {
    url: string
    width: number
    height: number
}

export interface IYoutubeVideoData {
    kind: string,
    etag: string,
    id: {
        kind: string,
        videoId: string
    },
    snippet: {
        publishedAt: Date
        channelId: string
        title: string
        description: string
        thumbnails: {
            default: IThumbnailsData
            medium: IThumbnailsData
            high: IThumbnailsData
        }
        channelTitle: string
        liveBroadcastContent: string
        publishTime: Date
    }
}

export interface IYoutubeVideoListData {
    kind: string
    etag: string
    nextPageToken: string
    regionCode: string
    pageInfo: {
        totalResults: number
        resultsPerPage: number
    },
    items: IYoutubeVideoData[]
}

/*example ============================================ 

{
  "kind": "youtube#searchListResponse",
  "etag": "vZ14GMcF7WxJBv1HI4Drc3OS7Oo",
  "nextPageToken": "CAUQAA",
  "regionCode": "BR",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "xSaRbM0ZTQX7LTmiW2zfSp3aQZ0",
      "id": {
        "kind": "youtube#video",
        "videoId": "QUi8MWcIlwQ"
      },
      "snippet": {
        "publishedAt": "2020-01-09T13:00:10Z",
        "channelId": "UC_OvvTIFvYDZ9dZD9pXiKwA",
        "title": "DESAFIO DOS GOLAÇOS NO TREINO",
        "description": "O nosso Victor (ou melhor, IbrahimoVictor) nos melhores desafios de #futebol, fazendo golaços e jogadas incríveis... na verdade ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/QUi8MWcIlwQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/QUi8MWcIlwQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/QUi8MWcIlwQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Futebol 24 Horas",
        "liveBroadcastContent": "none",
        "publishTime": "2020-01-09T13:00:10Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "AzhJ3jooYZqsoe8vdh8NXfzsNus",
      "id": {
        "kind": "youtube#video",
        "videoId": "Q4AWjEGX52Q"
      },
      "snippet": {
        "publishedAt": "2008-09-21T10:13:17Z",
        "channelId": "UC3RGpZcTk87RkC7RXOeLhUQ",
        "title": "R19..FUTE",
        "description": "fute.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Q4AWjEGX52Q/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Q4AWjEGX52Q/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Q4AWjEGX52Q/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "aliciasika",
        "liveBroadcastContent": "none",
        "publishTime": "2008-09-21T10:13:17Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "K28-ipgtU1oPQq3qdVf9xDZHy_c",
      "id": {
        "kind": "youtube#video",
        "videoId": "rIzd2bdPq34"
      },
      "snippet": {
        "publishedAt": "2024-03-08T03:34:36Z",
        "channelId": "UC0uXUhO8p-GR5uAQmmLDa-Q",
        "title": "FUTE",
        "description": "Provided to YouTube by DistroKid FUTE · Johnny Myzky Taha Hiva Siana · A2v · Life 'OFA PE FEHI'A? ℗ R19 REKORDZ ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/rIzd2bdPq34/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/rIzd2bdPq34/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/rIzd2bdPq34/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Johnny Myzky Taha Hiva Siana - Topic",
        "liveBroadcastContent": "none",
        "publishTime": "2024-03-08T03:34:36Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "R8eL1Ej1xDKNcwTZi_DO_-uxYZY",
      "id": {
        "kind": "youtube#video",
        "videoId": "DatXcAk2vgE"
      },
      "snippet": {
        "publishedAt": "2022-07-16T12:00:07Z",
        "channelId": "UC_OvvTIFvYDZ9dZD9pXiKwA",
        "title": "GOLS INTELIGENTES NO FUTEBOL",
        "description": "Aqui você encontra os melhores e piores momentos do futebol! As jogadas mais incríveis e os lances mais engraçados também: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/DatXcAk2vgE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/DatXcAk2vgE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/DatXcAk2vgE/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Futebol 24 Horas",
        "liveBroadcastContent": "none",
        "publishTime": "2022-07-16T12:00:07Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "TIExlwejZJJzoHWqSlnJy_Oox-s",
      "id": {
        "kind": "youtube#video",
        "videoId": "2Hn7p8aTCqA"
      },
      "snippet": {
        "publishedAt": "2017-10-06T14:47:58Z",
        "channelId": "UCGFNp4Pialo9wjT9Bo8wECA",
        "title": "♫ MALANDRAMENTE (do Futebol) | Paródia Dennis e MC&#39;s Nandinho &amp; Nego Bam",
        "description": "Uma paródia de futebol da música \"Malandramente\" de Dennis e MC's Nandinho & Nego Bam sobre as mil e uma malandragens ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/2Hn7p8aTCqA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/2Hn7p8aTCqA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/2Hn7p8aTCqA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FutParódias",
        "liveBroadcastContent": "none",
        "publishTime": "2017-10-06T14:47:58Z"
      }
    }
  ]
}


*/