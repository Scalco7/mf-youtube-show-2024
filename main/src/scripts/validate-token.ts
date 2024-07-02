import { verify } from "jsonwebtoken";

export default function validateToken(token: string | null): boolean {
    if (!token) return false

    const decoded = verify(token, process.env.JWT_SECRET_KEY!.toString());
    console.log(decoded)

    return true
}