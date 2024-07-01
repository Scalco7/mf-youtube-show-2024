import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelize } from "../../database/database";

export class Favorite extends Model<
  InferAttributes<Favorite>,
  InferCreationAttributes<Favorite>
> {
  declare id: string;
  declare user_id: string;
  declare video_id: string;
}

Favorite.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    video_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "favorite" },
);
