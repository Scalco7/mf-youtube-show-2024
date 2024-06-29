import { User } from "../migrations/entities/user.entity";
import { UserService } from "../services/user.service";
import { userDataValidator } from "../validators/user.validators";

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
        const { error } = userDataValidator.validate(user)

        if (error)
            throw (error.message)

        const newUser = await this.userService.create(user.name, user.email, user.password)
        return newUser
    }
}