import { Favorite } from "../entities/favorite.entity";
import { User } from "../entities/user.entity";

export function createRelations() {
  try {
    User.hasOne(Favorite, { foreignKey: "user_id" });
    Favorite.belongsTo(User, { foreignKey: "user_id" });
  } catch (error) {
    console.log("Erro ao criar a relação entre User e Favorite");
  }
}
