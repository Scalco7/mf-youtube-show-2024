import axios from "axios"
import { IAuthResponse, IRegisterResquest } from "./auth.interfaces"

const apiUrl = import.meta.env.VITE_API_URL

export default async function registerRequest(data: IRegisterResquest): Promise<IAuthResponse> {
    const url = `${apiUrl}/register`

    try {
        const response = await axios.post(url, data)
        return response.data
    }
    catch (error) {
        throw (error as any).response.data.error
    }
}