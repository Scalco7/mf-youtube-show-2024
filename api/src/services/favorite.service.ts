import { randomUUID } from "crypto";
import { Favorite } from "../migrations/entities/favorite.entity";

export class FavoriteService {
  public async addFavoriteVideo(
    userId: string,
    videoId: string,
  ): Promise<Favorite> {
    let favorite;
    try {
      favorite = await Favorite.findOne({
        where: { user_id: userId, video_id: videoId },
      });
    } catch (error) {
      throw "Erro buscando video favorito";
    }

    if (favorite) throw "Video favorito já existe";

    try {
      const id = randomUUID();
      const newFavorite = await Favorite.create({ id, user_id: userId, video_id: videoId });
      return newFavorite
    } catch (error) {
      throw ("erro ao adicionar favorito - " + error)
    }
  }

  public async removeFavoriteVideo(
    userId: string,
    videoId: string,
  ): Promise<void> {
    let favorite;
    try {
      favorite = await Favorite.findOne({
        where: { user_id: userId, video_id: videoId },
      });
    } catch (error) {
      throw "Erro buscando video favorito";
    }

    if (!favorite) throw "Video favorito não existe";

    return await favorite.destroy();
  }

  public async listFavoriteByUserId(userId: string): Promise<string[]> {
    let favoriteList: string[] = [];

    try {
      const favoriteQuery = await Favorite.findAll({
        where: { user_id: userId },
        attributes: ["video_id"],
      });
      favoriteList = favoriteQuery.map((fav) => fav.dataValues.video_id);
    } catch (err) {
      throw "erro ao buscar no banco de dados";
    }

    return favoriteList;
  }
}
