import { User } from "../migrations/entities/user.entity";
import { UserService } from "../services/user.service";
import Joi from "joi";

const userDataObjectValidator = Joi.object({
    name: Joi.string().required().min(5),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6)
})

interface ICreateUserData {
    name: string
    email: string
    password: string
}

export class UserController {
    private userService: UserService

    constructor() {
        this.userService = new UserService()
    }

    public async createUser(user: ICreateUserData): Promise<User> {
        const { error } = userDataObjectValidator.validate(user)

        if (error)
            throw ('dados inválidos - ' + error)

        const newUser = await this.userService.create(user.name, user.email, user.password)
        return newUser
    }
}