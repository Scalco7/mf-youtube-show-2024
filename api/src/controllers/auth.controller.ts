import { AuthService } from "../services/auth.service";
import { ILogiDataValidator } from "../validators/auth.validators";

interface ILoginData {
    email: string
    password: string
}

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