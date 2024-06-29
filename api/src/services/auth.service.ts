import { compare } from "bcrypt";
import { User } from "../migrations/entities/user.entity";
import { sign } from "jsonwebtoken";

export class AuthService {
    public async login(email: string, password: string): Promise<string> {
        let dbUserData;

        try {
            const dbUserQuery = await User.findOne({ where: { email: email }, attributes: ["id", "name", "password"] })
            dbUserData = dbUserQuery?.dataValues
        }
        catch (error) {
            throw 'erro no banco de dados'
        }

        if (!dbUserData)
            throw 'Conta inválida'
        if (!(await compare(password, dbUserData.password)))
            throw 'Conta inválida'

        const token = sign({ id: dbUserData.id, name: dbUserData.name }, process.env.JWT_SECRET_KEY!.toString(), { expiresIn: '2h' })
        return token
    }
}