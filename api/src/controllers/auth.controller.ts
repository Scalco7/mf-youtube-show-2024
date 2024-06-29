import Joi from "joi";
import { AuthService } from "../services/auth.service";

interface ILoginData {
    email: string
    password: string
}

const ILogiDataValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6)
})

export class AuthController {
    private authService: AuthService

    constructor() {
        this.authService = new AuthService()
    }

    public async login(data: ILoginData): Promise<string> {
        const { error } = ILogiDataValidator.validate(data)

        if (error)
            throw ('dados inválidos - ' + error)

        const token = await this.authService.login(data.email, data.password)
        return token
    }
}