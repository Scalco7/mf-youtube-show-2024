import loginRequest from "./api/auth/login"
import registerRequest from "./api/auth/register"
import { onLogin } from "./utils"
import { showToast } from "./toast/toast"
import { validateLoginData, validateRegisterData } from "./validators/auth.validators"

export class AuthController {
    public async registerUser(name: string, email: string, password: string): Promise<void> {
        try {
            validateRegisterData(name, email, password)
        } catch (error) {
            showToast({
                message: String(error) ?? '',
                variant: 'error',
                duration: 2000
            })
            return
        }

        try {
            const token = await registerRequest({ name, email, password })
            onLogin(token.token)
        }
        catch (error) {
            showToast({
                message: String(error) ?? '',
                variant: 'error',
                duration: 2000
            })
            return
        }

        return
    }

    public async loginUser(email: string, password: string): Promise<void> {
        try {
            validateLoginData(email, password)
        } catch (error) {
            showToast({
                message: String(error) ?? '',
                variant: 'error',
                duration: 2000
            })
            return
        }

        try {
            const token = await loginRequest({ email, password })
            onLogin(token.token)
        }
        catch (error) {
            showToast({
                message: String(error) ?? '',
                variant: 'error',
                duration: 2000
            })
            return
        }

        return
    }
}