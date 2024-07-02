import { verify } from "jsonwebtoken";

interface ITokenData {
    id: string;
    name: string;
    iat: number;
    exp: number;
}

export function getUserIdByToken(token: string): string {
    token = token.replace("Bearer ", "") ?? "";
    const decoded = verify(
        token,
        process.env.JWT_SECRET_KEY!.toString(),
    ) as any as ITokenData

    return decoded.id
}