import { TokenExpiredError, verify } from "jsonwebtoken";

interface ITokenData {
    id: string;
    name: string;
    iat: number;
    exp: number;
}

export function getUserIdByToken(token: string): string {
    try {
        token = token.replace("Bearer ", "") ?? "";
        const decoded = verify(
            token,
            process.env.JWT_SECRET_KEY!.toString(),
        ) as any as ITokenData

        return decoded.id
    }
    catch (error) {
        if (error instanceof TokenExpiredError)
            throw "Token expirado"
        throw "Token invalido"
    }
}