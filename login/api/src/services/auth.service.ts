import axios from "axios";

export class AuthService {
    public async registerUser(name: string, email: string, password: string): Promise<string> {
        try {
            const apiUrl = `${process.env.API_URL}/auth/register`;
            const request = await axios.post(apiUrl, {
                headers: {
                    Authorization: "Bearer " + process.env.API_KEY,
                },
                data: {
                    name,
                    email,
                    password
                },
            });

            console.log(request)

            if (request.data.error) throw request.data.error;

            return request.data.token
        } catch (error) {
            throw (error as any).response.data.error;
        }
    }

    public async login(name: string, email: string): Promise<string> {
        try {
            const apiUrl = `${process.env.API_URL}/auth/login`;
            const request = await axios.post(apiUrl, {
                headers: {
                    Authorization: "Bearer " + process.env.API_KEY,
                },
                data: {
                    name,
                    email,
                },
            });

            console.log(request)

            if (request.data.error) throw request.data.error;

            return request.data.token
        } catch (error) {
            throw (error as any).response.data.error;
        }
    }
}