import axios from "axios";

export class AuthService {
    public async registerUser(name: string, email: string, password: string): Promise<string> {
        try {
            const apiUrl = `${process.env.API_URL}/auth/register`;
            const body = {
                name: name,
                email: email,
                password: password
            }
            const request = await axios.post(apiUrl, body,
                {
                    headers: {
                        Authorization: "Bearer " + process.env.API_KEY,
                    },
                });

            if (request.data.error) throw request.data.error;

            return request.data.token
        } catch (error) {
            throw (error as any).response.data.error;
        }
    }

    public async login(email: string, password: string): Promise<string> {
        try {
            const apiUrl = `${process.env.API_URL}/auth/login`;
            const body = {
                email: email,
                password: password
            }
            const request = await axios.post(apiUrl, body,
                {
                    headers: {
                        Authorization: "Bearer " + process.env.API_KEY,
                    },
                });


            if (request.data.error) throw request.data.error;

            return request.data.token
        } catch (error) {
            throw (error as any).response.data.error;
        }
    }
}