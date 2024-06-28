import { User } from "../migrations/entities/user.entity";
import { UserService } from "../services/user.service";
import Joi from "joi";

export class UserController {
    private userService: UserService

    constructor() {
        this.userService = new UserService()
    }

    async createUser(user: { name: string, email: string, password: string }): Promise<User> {
        const userObject = Joi.object({
            name: Joi.string().required().min(5),
            email: Joi.string().email().required(),
            password: Joi.string().required().min(6)
        })
        const { error } = userObject.validate(user)

        if (error)
            throw ('dados inválidos - ' + error)

        const newUser = await this.userService.create(user.name, user.email, user.password)
        return newUser
    }
}