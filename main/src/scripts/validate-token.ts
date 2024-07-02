import { jwtDecode } from "jwt-decode";

export default function validateToken(token: string | null): boolean {
    if (!token) return false

    try {
        jwtDecode(token);
        return true
    } catch (error) {
        return false
    }
}