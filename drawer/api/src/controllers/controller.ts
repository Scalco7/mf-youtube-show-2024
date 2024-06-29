import Joi from "joi"
import { Service } from "../services/service"

interface ICountFavoritesByUserIdData {
    userId: string
}

export class Controller {
    private service: Service

    constructor() {
        this.service = new Service()
    }

    public async countFavoritesByUserId(data: ICountFavoritesByUserIdData): Promise<number> {
        try {
            Joi.assert(data.userId, Joi.string().required())
        }
        catch (error) {
            throw (error)
        }

        const count = await this.service.countFavoritesByUserId(data.userId)
        return count
    }
}