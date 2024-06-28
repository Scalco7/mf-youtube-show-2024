import { sequelize } from "../database/database";
import { createRelations } from "./relations/create_relations";

export async function migrate() {
    createRelations()

    try {
        await sequelize.sync({ alter: true, force: false, logging: false })
        console.log('Migração efetuada com sucesso!!')
    } catch (error) {
        console.log('Erro na migração: ' + error)
    }
}