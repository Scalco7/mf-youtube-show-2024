import { Favorite } from "../migrations/entities/favorite.entity";
import { FavoriteService } from "../services/favorite.service";
import {
  favoriteDataValidator,
  listFavoritesDataValidator,
} from "../validators/favorite.validators";

interface IFavoriteVideoData {
  userId: string;
  videoId: string;
}

export class FavoriteController {
  private favoriteService: FavoriteService;

  constructor() {
    this.favoriteService = new FavoriteService();
  }

  public async addFavoriteVideo(data: IFavoriteVideoData): Promise<Favorite> {
    const { error } = favoriteDataValidator.validate(data);

    if (error) throw error.message;

    const favorite = await this.favoriteService.addFavoriteVideo(
      data.userId,
      data.videoId,
    );
    return favorite;
  }

  public async removeFavoriteVideo(data: IFavoriteVideoData): Promise<void> {
    const { error } = favoriteDataValidator.validate(data);

    if (error) throw error.message;

    await this.favoriteService.removeFavoriteVideo(data.userId, data.videoId);
  }

  public async listFavoriteByUserId(data: {
    userId: string;
  }): Promise<string[]> {
    const { error } = listFavoritesDataValidator.validate(data);

    if (error) throw error.message;

    const favoriteList = await this.favoriteService.listFavoriteByUserId(
      data.userId,
    );
    return favoriteList;
  }
}
