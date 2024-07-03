import { AuthService } from "../services/auth.service";
import { loginDataValidator, registerDataValidator } from "../validators/auth.validators";

interface ILoginData {
    email: string;
    password: string;
}

interface IRegisterData {
    name: string;
    email: string;
    password: string;
}

export class AuthController {
    private authService: AuthService

    constructor() {
        this.authService = new AuthService()
    }

    public async registerUser(data: IRegisterData): Promise<string> {
        const { error } = registerDataValidator.validate(data);

        if (error) throw error.message;

        const token = await this.authService.registerUser(data.name, data.email, data.password)
        return token
    }

    public async login(data: ILoginData): Promise<string> {
        const { error } = loginDataValidator.validate(data);

        if (error) throw error.message;

        const token = await this.authService.login(data.email, data.password)
        return token
    }
}