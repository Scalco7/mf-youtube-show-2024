import { FavoriteService } from "../services/favorite.service";
import {
  favoriteDataValidator,
  listFavoritesDataValidator,
} from "../validators/favorite.validators";

interface IFavoriteVideoRequestData {
  userId: string;
  videoId: string;
}

export class FavoriteController {
  private favoriteService: FavoriteService;

  constructor() {
    this.favoriteService = new FavoriteService();
  }

  public async listFavoriteVideosByUserId(data: {
    userId: string;
  }): Promise<string[]> {
    const { error } = listFavoritesDataValidator.validate(data);

    if (error) throw new Error(error.message);

    const favorites = await this.favoriteService.listFavoriteVideosByUserId(
      data.userId,
    );
    return favorites;
  }

  public async addFavoriteVideo(
    data: IFavoriteVideoRequestData,
  ): Promise<void> {
    const { error } = favoriteDataValidator.validate(data);

    if (error) throw new Error(error.message);

    await this.favoriteService.addFavoriteVideo(data.userId, data.videoId);
  }

  public async removeFavoriteVideo(
    data: IFavoriteVideoRequestData,
  ): Promise<void> {
    const { error } = favoriteDataValidator.validate(data);

    if (error) throw new Error(error.message);

    await this.favoriteService.removeFavoriteVideo(data.userId, data.videoId);
  }
}
