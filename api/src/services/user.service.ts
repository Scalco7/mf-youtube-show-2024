import { User } from "../migrations/entities/user.entity";
import { hash } from 'bcrypt'
import { randomUUID } from "crypto";

const hashSalts = 10

export class UserService {
    async create(name: string, email: string, password: string): Promise<User> {
        let checkUser;

        try {
            checkUser = await User.findOne({
                where: { email: email }
            })
        } catch (e) {
            throw 'não conseguiu checar usuário'
        }

        if (checkUser) {
            throw 'usuário duplicado'
        }

        try {
            const hashedPassword = await hash(password, hashSalts)
            const id = randomUUID();
            const newUser = await User.create({ id, name, email, password: hashedPassword })
            return newUser
        } catch (error) {
            throw 'erro criando o usuário'
        }
    }
}