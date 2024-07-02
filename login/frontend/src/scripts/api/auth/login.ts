import axios from "axios";
import { IAuthResponse, ILoginRequest } from "./auth.interfaces";

const apiUrl = import.meta.env.VITE_API_URL

export default async function loginRequest(data: ILoginRequest): Promise<IAuthResponse> {
    const url = `${apiUrl}/login`

    try {
        const response = await axios.post(url, data)
        return response.data
    }
    catch (error) {
        throw (error as any).response.data.error
    }
}