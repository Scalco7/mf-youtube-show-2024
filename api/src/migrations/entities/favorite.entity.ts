import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "../../database/database";

export class Favorite extends Model<InferAttributes<Favorite>, InferCreationAttributes<Favorite>> {
    declare user_id: string;
    declare video_id: string;
}

Favorite.init({
    user_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    video_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
}, { sequelize, modelName: 'favorite' })