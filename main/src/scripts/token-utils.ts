import { jwtDecode } from "jwt-decode";

export function validateToken(token: string | null): boolean {
    if (!token) return false

    try {
        jwtDecode(token);
        return true
    } catch (error) {
        return false
    }
}

export function getUserName(token: string | null | undefined): string | null {
    if (!token)
        return null

    try {
        const decodedToken = jwtDecode(token) as any;
        return decodedToken.name;
    } catch (error) {
        return null
    }
}