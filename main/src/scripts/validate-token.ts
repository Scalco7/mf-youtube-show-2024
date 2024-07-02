import { jwtDecode } from "jwt-decode";

export default function validateToken(token: string | null): boolean {
    if (!token) return false

    try {
        console.log("aqui")
        const decoded = jwtDecode(token);
        console.log(decoded)
        return true
    } catch (error) {
        return false
    }
}